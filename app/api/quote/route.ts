import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.phone !== "string"
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire this up to an email/CRM provider (e.g. Resend, HubSpot) to
  // actually deliver quote requests. Currently just acknowledges receipt.
  console.log("Quote request received:", body);

  return NextResponse.json({ ok: true });
}
