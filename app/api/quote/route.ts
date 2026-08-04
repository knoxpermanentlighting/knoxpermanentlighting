import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message?: string;
};

function isValidPayload(body: unknown): body is QuotePayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.city === "string" &&
    b.city.trim().length > 0
  );
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { name, email, phone, city, message } = body;

  const supabase = getSupabaseAdmin();
  const { error: dbError } = await supabase.from("quote_requests").insert({
    name,
    email,
    phone,
    city,
    message: message?.trim() || null,
    source_path: request.headers.get("referer"),
  });

  if (dbError) {
    console.error("Failed to store quote request:", dbError);
    return NextResponse.json({ error: "Failed to save request" }, { status: 500 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY is not set - quote request was saved but no emails were sent");
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(resendApiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Knox Lighting <onboarding@resend.dev>";
  const toEmail = process.env.CONTACT_TO_EMAIL || "knoxpermanentlighting@gmail.com";

  const detailRows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["City", city],
    ...(message ? [["Message", message]] : []),
  ] as const;

  const detailsHtml = detailRows
    .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`)
    .join("");

  const results = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New quote request from ${name}`,
      html: `<h2>New quote request</h2>${detailsHtml}`,
    }),
    resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We got your request - Knox Lighting",
      html: `
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for reaching out to Knox Lighting! We received your request and will follow up within one business day.</p>
        <h3>Here's what you sent us:</h3>
        ${detailsHtml}
        <p>- Knox Lighting</p>
      `,
    }),
  ]);

  for (const result of results) {
    if (result.status === "rejected") {
      console.error("Failed to send quote email:", result.reason);
    }
  }

  return NextResponse.json({ ok: true });
}
