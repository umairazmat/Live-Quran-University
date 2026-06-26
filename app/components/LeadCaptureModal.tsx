"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FormikHelpers } from "formik";
import TrialBookingForm, { TrialFormValues } from "./TrialBookingForm";
import { handleTrialFormSubmit } from "./TrialFormHandler";
import { LEAD_MODAL_STORAGE_KEY, WHATSAPP_URL } from "../lib/site";

const MODAL_DELAY_MS = 8000;
const SWIPE_DISMISS_THRESHOLD = 80;

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<"choose" | "form">("choose");
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartY = useRef(0);
  const sheetRef = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    setIsOpen(false);
    setView("choose");
    setDragOffset(0);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientY - touchStartY.current;
    if (delta > 0) setDragOffset(delta);
  };

  const handleTouchEnd = () => {
    if (dragOffset >= SWIPE_DISMISS_THRESHOLD) {
      dismiss();
      return;
    }
    setDragOffset(0);
  };

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
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        onClick={dismiss}
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"
        aria-label="Close popup"
      />

      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        style={{ transform: dragOffset > 0 ? `translateY(${dragOffset}px)` : undefined }}
        className="lead-modal-sheet relative z-10 flex max-h-[min(92dvh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-2xl sm:max-h-[92vh] sm:rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile: drag handle + easy dismiss */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-4 pb-2 pt-3 sm:hidden">
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-500 active:bg-slate-100"
          >
            Not now
          </button>
          <div
            className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-300"
            aria-hidden
          />
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 active:bg-slate-200"
            aria-label="Close"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-5 py-5 text-white sm:px-6">
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-4 top-4 hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
              aria-label="Close"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Limited free trials
            </p>
            <h2 id="lead-modal-title" className="mt-1 pr-2 text-xl font-extrabold leading-tight sm:pr-10 sm:text-2xl">
              Book Your Free Quran Class Today
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              1-on-1 with a qualified teacher. No payment. No commitment.
            </p>
          </div>

          <div className="px-5 py-5 sm:p-6">
            {view === "choose" ? (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setView("form")}
                  className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-4 text-left font-bold text-slate-950 shadow-md transition-transform active:scale-[0.99]"
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
                  className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 px-5 py-4 font-bold text-emerald-800 transition-colors active:bg-emerald-100"
                >
                  <FaWhatsapp className="h-6 w-6" />
                  Chat on WhatsApp Now
                </a>

                <p className="pt-1 text-center text-xs text-slate-500">
                  500+ students · 4.9★ rating · Reply within hours
                </p>

                <button
                  type="button"
                  onClick={dismiss}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 text-sm font-semibold text-slate-600 transition-colors active:bg-slate-100"
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

        {/* Safe area for phones with home indicator */}
        <div className="h-[env(safe-area-inset-bottom)] shrink-0 bg-white sm:hidden" />
      </div>
    </div>
  );
}
