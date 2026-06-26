"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

export interface TrialFormValues {
  name: string;
  phone: string;
  course: string;
  location: string;
  message: string;
}

export const trialFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name must only contain letters and spaces"),
  phone: Yup.string()
    .required("WhatsApp / phone is required")
    .matches(/^[+0-9\s-]+$/, "Enter a valid phone number"),
  course: Yup.string().required("Please select a course"),
  location: Yup.string(),
  message: Yup.string(),
});

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

interface TrialBookingFormProps {
  onSubmit: (
    values: TrialFormValues,
    helpers: FormikHelpers<TrialFormValues>
  ) => Promise<void>;
  loading: boolean;
  compact?: boolean;
  idPrefix?: string;
  initialCourse?: string;
}

export default function TrialBookingForm({
  onSubmit,
  loading,
  compact = false,
  idPrefix = "trial",
  initialCourse = "",
}: TrialBookingFormProps) {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        course: initialCourse,
        location: "",
        message: "",
      }}
      enableReinitialize
      validationSchema={trialFormSchema}
      onSubmit={onSubmit}
    >
      <Form className={compact ? "space-y-3" : "space-y-4"}>
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-sm font-semibold text-slate-700">
            Your Name *
          </label>
          <Field
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            placeholder="e.g. Ahmed Khan"
            className={inputClass}
          />
          <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-600" />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className="mb-1 block text-sm font-semibold text-slate-700">
            WhatsApp / Phone *
          </label>
          <Field
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            placeholder="+92 300 1234567"
            className={inputClass}
          />
          <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-600" />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-course`} className="mb-1 block text-sm font-semibold text-slate-700">
            Course Needed *
          </label>
          <Field as="select" id={`${idPrefix}-course`} name="course" className={inputClass}>
            <option value="">Select a course</option>
            <option value="norani">Norani Qaida (Beginner)</option>
            <option value="nazrah">Nazrah / Reading</option>
            <option value="tajweed">Tajweed</option>
            <option value="hifz">Hifz (Memorization)</option>
          </Field>
          <ErrorMessage name="course" component="div" className="mt-1 text-sm text-red-600" />
        </div>

        {!compact && (
          <>
            <div>
              <label htmlFor={`${idPrefix}-location`} className="mb-1 block text-sm font-semibold text-slate-700">
                Country / Timezone <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <Field
                id={`${idPrefix}-location`}
                name="location"
                type="text"
                placeholder="e.g. UK, USA, Pakistan"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-message`} className="mb-1 block text-sm font-semibold text-slate-700">
                Message <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <Field
                as="textarea"
                id={`${idPrefix}-message`}
                name="message"
                rows={2}
                placeholder="Best time to call, child age, etc."
                className={`${inputClass} resize-none`}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3.5 text-base font-bold text-slate-950 shadow-lg transition-all hover:from-amber-400 hover:to-amber-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Booking..." : "Book Free Trial + Open WhatsApp →"}
        </button>
      </Form>
    </Formik>
  );
}
