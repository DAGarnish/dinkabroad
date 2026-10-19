import { site } from "@/lib/site";

// Brand colours from globals.css, inlined because email clients ignore stylesheets.
const c = {
  ink: "#0e2a2f",
  sea: "#2f6b73",
  sand: "#f4ede1",
  cream: "#fbf8f2",
  terracotta: "#c4583c",
  ball: "#dcef5b",
  stone: "#6b6a63",
  line: "#e4dccd",
};

const serif = "Fraunces, Georgia, 'Times New Roman', serif";
const sans = "Manrope, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";

export type Enquiry = {
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phone: string;
  retreat: string;
  level: string;
  travellers: string;
  startDates: string;
  message: string;
};

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${c.line};width:38%;vertical-align:top;font-family:${sans};font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${c.stone};">${label}</td>
      <td style="padding:14px 0;border-bottom:1px solid ${c.line};vertical-align:top;font-family:${sans};font-size:15px;color:${c.ink};">${value || `<span style="color:${c.stone};">—</span>`}</td>
    </tr>`;
}

export function enquiryEmailHtml(data: Enquiry) {
  const e = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, escape(value)]),
  ) as Enquiry;
  const name = `${e.firstName} ${e.lastName}`.trim();
  const phone = e.phone ? `${e.phoneCode} ${e.phone}` : "";
  const phoneLink = phone ? `<a href="tel:${(data.phoneCode + data.phone).replace(/[^\d+]/g, "")}" style="color:${c.sea};text-decoration:none;">${phone}</a>` : "";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>New enquiry from ${name}</title>
</head>
<body style="margin:0;padding:0;background:${c.sand};">
  <div style="display:none;max-height:0;overflow:hidden;">${name} is interested in ${e.retreat || "a Dink Abroad retreat"}.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${c.sand};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${c.cream};border-radius:24px;overflow:hidden;">
          <tr>
            <td style="background:${c.ink};padding:32px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:${serif};font-size:22px;font-weight:600;color:#ffffff;">${site.name}</td>
                  <td align="right">
                    <span style="display:inline-block;background:${c.ball};color:${c.ink};border-radius:999px;padding:6px 14px;font-family:${sans};font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">New enquiry</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:28px 0 6px;font-family:${serif};font-size:30px;line-height:1.2;font-weight:600;color:#ffffff;">${name || "Someone"} wants to dink abroad</h1>
              <p style="margin:0;font-family:${sans};font-size:15px;color:#c9d6d4;">${e.retreat ? `Interested in <strong style="color:${c.ball};">${e.retreat}</strong>` : "Retreat not chosen yet"}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 36px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", name)}
                ${row("Email", `<a href="mailto:${e.email}" style="color:${c.sea};text-decoration:none;">${e.email}</a>`)}
                ${row("Phone", phoneLink)}
                ${row("Retreat", e.retreat)}
                ${row("Level", e.level)}
                ${row("Travellers", e.travellers)}
                ${row("Start dates", e.startDates.replace(/\n/g, "<br>"))}
              </table>
            </td>
          </tr>
          ${
            e.message
              ? `<tr>
            <td style="padding:16px 36px 8px;">
              <p style="margin:0 0 8px;font-family:${sans};font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${c.stone};">Message</p>
              <div style="background:#ffffff;border-left:4px solid ${c.terracotta};border-radius:12px;padding:16px 18px;font-family:${sans};font-size:15px;line-height:1.6;color:${c.ink};white-space:pre-wrap;">${e.message}</div>
            </td>
          </tr>`
              : ""
          }
          <tr>
            <td align="center" style="padding:28px 36px 36px;">
              <a href="mailto:${e.email}?subject=${encodeURIComponent(`Your ${site.name} enquiry`)}" style="display:inline-block;background:${c.terracotta};color:#ffffff;border-radius:999px;padding:14px 32px;font-family:${sans};font-size:15px;font-weight:700;text-decoration:none;">Reply to ${e.firstName || "them"}</a>
              <p style="margin:12px 0 0;font-family:${sans};font-size:13px;color:${c.stone};">They're expecting a reply within 24 hours.</p>
            </td>
          </tr>
        </table>
        <p style="margin:20px 0 0;font-family:${sans};font-size:12px;color:${c.stone};">Sent from the enquiry form on <a href="${site.url}" style="color:${c.sea};text-decoration:none;">${site.url.replace("https://", "")}</a></p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
