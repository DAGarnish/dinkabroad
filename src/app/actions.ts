"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const fields = [
  "firstName",
  "lastName",
  "email",
  "phoneCode",
  "phone",
  "retreat",
  "level",
  "travellers",
  "message",
] as const;

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) return { status: "success" };

  const data = Object.fromEntries(
    fields.map((key) => [key, String(formData.get(key) ?? "").trim().slice(0, 2000)]),
  ) as Record<(typeof fields)[number], string>;

  if (!data.firstName || !data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { status: "error", message: "Please add your first name and a valid email address." };
  }

  const lines = fields.map((key) => `${key}: ${data[key] || "-"}`).join("\n");
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;

  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM_EMAIL ?? "Dink Abroad <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: `New enquiry: ${data.retreat || "Dink Abroad"} from ${data.firstName} ${data.lastName}`,
        text: lines,
      }),
    });
    if (!res.ok) {
      console.error("[enquiry] email failed", res.status, await res.text(), lines);
      return {
        status: "error",
        message: "Sorry, something went wrong sending your details. Please try again shortly.",
      };
    }
  } else {
    // No email provider configured yet: keep the lead in the Vercel function logs.
    console.log("[enquiry]\n" + lines);
  }

  return {
    status: "success",
    message: `Thanks ${data.firstName}! We'll be in touch personally within 24 hours.`,
  };
}
