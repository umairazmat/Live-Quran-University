import type { TrialFormValues } from "@/app/components/TrialBookingForm";

export async function submitTrialBooking(
  values: TrialFormValues,
  source: string
): Promise<void> {
  const response = await fetch("/api/book-trial", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: values.name,
      phone: values.phone,
      course: values.course,
      location: values.location,
      message: values.message,
      source,
    }),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error ?? "Failed to submit booking");
  }
}
