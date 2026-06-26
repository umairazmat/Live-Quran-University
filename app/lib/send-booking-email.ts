import { Resend } from "resend";
import { COURSE_LABELS, EMAIL } from "@/app/lib/site";

export interface TrialBookingPayload {
  name: string;
  phone: string;
  course: string;
  location?: string;
  message?: string;
  source: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildTrialBookingEmail(payload: TrialBookingPayload) {
  const courseLabel = COURSE_LABELS[payload.course] || payload.course;
  const location = payload.location?.trim() || "Not specified";
  const message =
    payload.message?.trim() || `Free trial booking via ${payload.source}`;

  const subject = `New Free Trial Booking: ${payload.name}`;

  const html = `
    <h2>New Free Trial Booking</h2>
    <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(payload.phone)}</td></tr>
      <tr><td><strong>Course</strong></td><td>${escapeHtml(courseLabel)}</td></tr>
      <tr><td><strong>Location</strong></td><td>${escapeHtml(location)}</td></tr>
      <tr><td><strong>Message</strong></td><td>${escapeHtml(message)}</td></tr>
    </table>
  `;

  const text = [
    "New Free Trial Booking",
    `Source: ${payload.source}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Course: ${courseLabel}`,
    `Location: ${location}`,
    `Message: ${message}`,
  ].join("\n");

  return { subject, html, text };
}

export async function sendTrialBookingEmail(payload: TrialBookingPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Live Quran University <onboarding@resend.dev>";
  const to = process.env.RESEND_TO_EMAIL ?? EMAIL;
  const { subject, html, text } = buildTrialBookingEmail(payload);

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(error.message);
  }
}
