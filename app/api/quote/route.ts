import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { renderBusinessNotificationEmail, renderCustomerConfirmationEmail } from "@/lib/email-templates";

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

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!isValidPayload(body)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { name, email, phone, city, message } = body;
    const trimmedMessage = message?.trim() || null;

    const supabase = getSupabaseAdmin();
    const { error: dbError } = await supabase.from("quote_requests").insert({
      name,
      email,
      phone,
      city,
      message: trimmedMessage,
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
    const emailData = { name, email, phone, city, message: trimmedMessage };

    const results = await Promise.allSettled([
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `New quote request from ${name}`,
        html: renderBusinessNotificationEmail(emailData),
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "We got your request - Knox Lighting",
        html: renderCustomerConfirmationEmail(emailData),
      }),
    ]);

    for (const result of results) {
      if (result.status === "rejected") {
        console.error("Failed to send quote email:", result.reason);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error handling quote request:", err);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
