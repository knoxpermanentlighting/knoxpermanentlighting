import { SITE_URL } from "@/lib/site";

export type QuoteEmailData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message?: string | null;
};

const BRAND_RED = "#ff4136";
const LOGO_URL = `${SITE_URL}/knox-logo-cropped.png`;

export function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function detailRows(data: QuoteEmailData) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["City", data.city],
  ];
  if (data.message) rows.push(["Message", data.message]);
  return rows;
}

function detailsTable(data: QuoteEmailData) {
  const rows = detailRows(data)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:13px;color:#888888;width:110px;vertical-align:top;">${label}</td>
          <td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:14px;color:#111111;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">${rows}</table>`;
}

function emailShell(opts: { preheader: string; bodyHtml: string }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Knox Lighting</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f2f4;font-family:Arial, Helvetica, sans-serif;">
    <span style="display:none;font-size:1px;color:#f2f2f4;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
      ${escapeHtml(opts.preheader)}
    </span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f2f4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e5e5;"
          >
            <tr>
              <td style="background-color:#0a0a0d;padding:28px 32px;text-align:center;">
                <img src="${LOGO_URL}" alt="Knox Lighting" width="170" style="display:block;margin:0 auto;height:auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="height:4px;background-color:${BRAND_RED};line-height:4px;font-size:4px;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${opts.bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:#fafafa;padding:22px 32px;border-top:1px solid #eeeeee;text-align:center;">
                <p style="margin:0;font-size:12px;color:#999999;">Knox Lighting &bull; Serving the Wasatch Front, Utah</p>
                <p style="margin:6px 0 0;font-size:12px;color:#999999;">
                  <a href="tel:+18015550123" style="color:#999999;text-decoration:none;">(801) 555-0123</a>
                  &nbsp;&bull;&nbsp;
                  <a href="mailto:knoxpermanentlighting@gmail.com" style="color:#999999;text-decoration:none;">knoxpermanentlighting@gmail.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderBusinessNotificationEmail(data: QuoteEmailData) {
  const bodyHtml = `
    <p style="margin:0 0 4px;font-size:12px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_RED};">
      New Quote Request
    </p>
    <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#111111;">
      ${escapeHtml(data.name)} wants a quote
    </h1>
    <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#444444;">
      Reply directly to this email to respond to ${escapeHtml(data.name)} - it&rsquo;s already addressed to them.
    </p>
    ${detailsTable(data)}
  `;

  return emailShell({
    preheader: `New quote request from ${data.name} in ${data.city}`,
    bodyHtml,
  });
}

export function renderCustomerConfirmationEmail(data: QuoteEmailData) {
  const bodyHtml = `
    <p style="margin:0 0 4px;font-size:12px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_RED};">
      Request Received
    </p>
    <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#111111;">
      Thanks, ${escapeHtml(data.name)}!
    </h1>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#444444;">
      We got your request and a member of our team will follow up within one business day with a free, no-pressure
      quote for your permanent lighting install.
    </p>
    <p style="margin:0 0 6px;font-size:12px;font-weight:bold;letter-spacing:0.06em;text-transform:uppercase;color:#999999;">
      What you sent us
    </p>
    ${detailsTable(data)}
    <div style="text-align:center;margin-top:28px;">
      <a
        href="${SITE_URL}"
        style="display:inline-block;background-color:${BRAND_RED};color:#000000;font-size:14px;font-weight:bold;text-decoration:none;padding:12px 28px;border-radius:999px;"
      >
        Visit Knox Lighting
      </a>
    </div>
  `;

  return emailShell({
    preheader: "We received your request and will follow up within one business day.",
    bodyHtml,
  });
}
