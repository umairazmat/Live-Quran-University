import { NextResponse } from "next/server";
import { sendTrialBookingEmail } from "@/app/lib/send-booking-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, course, location, message, source } = body;

    if (!name?.trim() || !phone?.trim() || !course?.trim()) {
      return NextResponse.json(
        { error: "Name, phone, and course are required." },
        { status: 400 }
      );
    }

    await sendTrialBookingEmail({
      name: String(name).trim(),
      phone: String(phone).trim(),
      course: String(course).trim(),
      location: location ? String(location).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      source: source ? String(source).trim() : "website form",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend booking error:", error);
    return NextResponse.json(
      { error: "Failed to send booking email. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
