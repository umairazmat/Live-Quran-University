"use client";

import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FormikHelpers } from "formik";
import TrialBookingForm, { TrialFormValues } from "./TrialBookingForm";
import { handleTrialFormSubmit } from "./TrialFormHandler";
import { LEAD_MODAL_STORAGE_KEY, WHATSAPP_URL } from "../lib/site";

const MODAL_DELAY_MS = 8000;

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<"choose" | "form">("choose");

  const dismiss = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(LEAD_MODAL_STORAGE_KEY, "1");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(LEAD_MODAL_STORAGE_KEY)) return;

    const timer = setTimeout(() => setIsOpen(true), MODAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [dismiss]);

  const handleSubmit = async (
    values: TrialFormValues,
    helpers: FormikHelpers<TrialFormValues>
  ) => {
    setLoading(true);
    try {
      await handleTrialFormSubmit(values, helpers, "popup modal");
      dismiss();
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        onClick={dismiss}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        aria-label="Close popup"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-white/10 bg-white shadow-2xl sm:rounded-2xl"
      >
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-5 text-white">
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-4 top-4 rounded-lg p-1.5 text-blue-200 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Limited free trials
          </p>
          <h2 id="lead-modal-title" className="mt-1 pr-8 text-xl font-extrabold sm:text-2xl">
            Book Your Free Quran Class Today
          </h2>
          <p className="mt-2 text-sm text-blue-100">
            1-on-1 with a qualified teacher. No payment. No commitment.
          </p>
        </div>

        <div className="p-6">
          {view === "choose" ? (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setView("form")}
                className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-4 text-left font-bold text-slate-950 shadow-md transition-transform hover:-translate-y-0.5"
              >
                <span>
                  Book Free Trial Class
                  <span className="mt-0.5 block text-xs font-medium text-slate-800">
                    30-second form · We call you back
                  </span>
                </span>
                <span className="text-lg">→</span>
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismiss}
                className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 px-5 py-4 font-bold text-emerald-800 transition-colors hover:bg-emerald-100"
              >
                <FaWhatsapp className="h-6 w-6" />
                Chat on WhatsApp Now
              </a>

              <p className="pt-2 text-center text-xs text-slate-500">
                500+ students · 4.9★ rating · Reply within hours
              </p>
              <button
                type="button"
                onClick={dismiss}
                className="w-full py-2 text-sm text-slate-400 transition-colors hover:text-slate-600"
              >
                Maybe later
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                onClick={() => setView("choose")}
                className="mb-4 text-sm font-medium text-blue-700 hover:text-blue-900"
              >
                ← Back to options
              </button>
              <TrialBookingForm
                onSubmit={handleSubmit}
                loading={loading}
                compact
                idPrefix="modal"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
