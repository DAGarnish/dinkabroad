"use server";

import { neon } from "@neondatabase/serverless";
import nodemailer from "nodemailer";
import { enquiryEmailHtml } from "@/lib/enquiryEmail";

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

// Visitor-facing replies, in the language of the page the form was sent from.
const replies = {
  en: {
    invalid: "Please add your first name and a valid email address.",
    failed: "Sorry, something went wrong sending your details. Please try again shortly.",
    thanks: (name: string) => `Thanks ${name}! We'll be in touch personally within 24 hours.`,
  },
  es: {
    invalid: "Añade tu nombre y un correo electrónico válido.",
    failed: "Lo sentimos, algo ha fallado al enviar tus datos. Inténtalo de nuevo en unos minutos.",
    thanks: (name: string) => `¡Gracias, ${name}! Te escribiremos personalmente en menos de 24 horas.`,
  },
};

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) return { status: "success" };

  const spanish = formData.get("lang") === "es";
  const reply = spanish ? replies.es : replies.en;

  const data = Object.fromEntries(
    fields.map((key) => [key, String(formData.get(key) ?? "").trim().slice(0, 2000)]),
  ) as Record<(typeof fields)[number], string>;

  if (!data.firstName || !data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { status: "error", message: reply.invalid };
  }

  const lines = fields.map((key) => `${key}: ${data[key] || "-"}`).join("\n");

  try {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      INSERT INTO enquiries (first_name, last_name, email, phone_code, phone, retreat, level, travellers, message)
      VALUES (${data.firstName}, ${data.lastName}, ${data.email}, ${data.phoneCode}, ${data.phone},
              ${data.retreat}, ${data.level}, ${data.travellers}, ${data.message})
    `;
  } catch (err) {
    console.error("[enquiry] database insert failed", err, lines);
    return { status: "error", message: reply.failed };
  }

  // The enquiry is already saved, so a failed email is logged rather than shown to the visitor.
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });
    await transporter.sendMail({
      from: `Dink Abroad <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: data.email,
      subject: `${spanish ? "[ES] " : ""}New enquiry: ${data.retreat || "Dink Abroad"} from ${data.firstName} ${data.lastName}`,
      text: lines,
      html: enquiryEmailHtml(data),
    });
  } catch (err) {
    console.error("[enquiry] email failed", err, lines);
  }

  return { status: "success", message: reply.thanks(data.firstName) };
}
