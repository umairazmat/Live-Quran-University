"use client";

import { useState } from "react";
import { Section, SectionHeading } from "./Section";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "./CTAButton";

import { FAQ_ITEMS } from "../lib/faqs";

const FAQS = FAQ_ITEMS;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-slate-50">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="We answer objections before you have to ask."
      />
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900"
                aria-expanded={isOpen}
              >
                {faq.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 pb-4 pt-2 text-slate-600">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <CTAButton href="#register">Book Free Trial Class →</CTAButton>
      </div>
    </Section>
  );
}
