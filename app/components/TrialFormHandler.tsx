"use client";

import { FormikHelpers } from "formik";
import { toast } from "react-toastify";
import TrialBookingForm, { TrialFormValues } from "./TrialBookingForm";
import { submitTrialBooking } from "../lib/submitTrialBooking";
import { buildWhatsAppInquiryUrl } from "../lib/site";

export async function handleTrialFormSubmit(
  values: TrialFormValues,
  helpers: FormikHelpers<TrialFormValues>,
  source: string
) {
  const { resetForm } = helpers;
  const whatsappUrl = buildWhatsAppInquiryUrl(values);

  try {
    await submitTrialBooking(values, source);
    toast.success("Booking sent! Opening WhatsApp to confirm your trial...");
    resetForm();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("Booking error:", error);
    toast.info("Could not send email. Opening WhatsApp so you can send your details directly.");
    resetForm();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }
}

interface TrialFormBlockProps {
  loading: boolean;
  setLoading: (v: boolean) => void;
  source: string;
  compact?: boolean;
  idPrefix?: string;
  initialCourse?: string;
}

export function TrialFormBlock({
  loading,
  setLoading,
  source,
  compact,
  idPrefix,
  initialCourse,
}: TrialFormBlockProps) {
  const onSubmit = async (
    values: TrialFormValues,
    helpers: FormikHelpers<TrialFormValues>
  ) => {
    setLoading(true);
    try {
      await handleTrialFormSubmit(values, helpers, source);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TrialBookingForm
      onSubmit={onSubmit}
      loading={loading}
      compact={compact}
      idPrefix={idPrefix}
      initialCourse={initialCourse}
    />
  );
}
