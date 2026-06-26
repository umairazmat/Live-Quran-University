import { Resend } from "resend";
import { EMAIL } from "@/app/lib/site";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Live Quran University <onboarding@resend.dev>";
  const to = process.env.RESEND_TO_EMAIL ?? EMAIL;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `Website Contact: ${payload.name}`,
    html: `
      <h2>New Contact Message</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(payload.phone)}</td></tr>
        <tr><td><strong>Message</strong></td><td>${escapeHtml(payload.message)}</td></tr>
      </table>
    `,
    text: [
      "New Contact Message",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Message: ${payload.message}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
