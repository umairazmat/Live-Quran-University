"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { Check } from "lucide-react";
import { TrialFormBlock } from "./TrialFormHandler";
import { consumePrefillCourse } from "../lib/coursePrefill";
import { SITE_IMAGES } from "../lib/images";

const OFFER_ITEMS = [
  "Free 1-on-1 trial class with a qualified teacher",
  "Personalized course recommendation (Tajweed, Hifz, Reading, Qaida)",
  "Flexible schedule, pick times that work for you",
  "Clear pricing from $30/month, no hidden fees",
  "Fast WhatsApp support before and after you enroll",
];

export default function OfferSection() {
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const applyPrefill = () => {
      const course = consumePrefillCourse();
      if (course) setSelectedCourse(course);
    };

    applyPrefill();
    window.addEventListener("lqu-course-prefill", applyPrefill);
    window.addEventListener("hashchange", applyPrefill);

    return () => {
      window.removeEventListener("lqu-course-prefill", applyPrefill);
      window.removeEventListener("hashchange", applyPrefill);
    };
  }, []);

  return (
    <Section id="register" className="bg-white">
      <SectionHeading
        eyebrow="Your offer"
        title="Get Started Today: Free Trial Class"
        subtitle="When you book today, here is exactly what you get. No pressure. No confusion."
      />

      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src={SITE_IMAGES.offer}
              alt="Student in a free Quran trial class"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/92 via-blue-950/88 to-slate-950/80" />
            <div className="relative z-10 flex h-full flex-col justify-center p-8 text-white lg:p-10">
              <h3 className="text-xl font-bold sm:text-2xl">What You Get Today</h3>
              <ul className="mt-6 space-y-4">
                {OFFER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-blue-100">
                <strong className="text-white">Risk-free:</strong> Try one class free. Only continue
                if you&apos;re happy with your teacher and plan.
              </p>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <p className="mb-6 text-sm font-medium text-slate-600">
              Fill in 4 quick fields. We email your request and open WhatsApp so you can confirm
              instantly.
            </p>
            <TrialFormBlock
              loading={loading}
              setLoading={setLoading}
              source="offer section"
              idPrefix="offer"
              initialCourse={selectedCourse}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
