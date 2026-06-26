import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { SITE_IMAGES } from "../lib/images";

const STEPS = [
  {
    step: "1",
    title: "Book Your Free Trial",
    description: "Send your name, WhatsApp number, and course through our quick form. Takes 30 seconds.",
  },
  {
    step: "2",
    title: "Meet Your Teacher",
    description: "We match you with a qualified teacher and schedule your first 1-on-1 class at a time that works.",
  },
  {
    step: "3",
    title: "Start Learning",
    description: "Join your live class online and begin your Quran journey with expert guidance and support.",
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" className="bg-slate-50">
      <SectionHeading
        eyebrow="Simple process"
        title="How It Works"
        subtitle="Three steps. No confusion. No pressure."
      />

      <div className="relative mb-10 overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
        <div className="relative h-48 sm:h-56 md:h-64">
          <Image
            src={SITE_IMAGES.process}
            alt="Online Quran learning session"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 sm:px-10">
            <div className="max-w-md">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Start in minutes
              </p>
              <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
                From signup to your first class, we make it simple.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {STEPS.map(({ step, title, description }) => (
          <div
            key={step}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-lg font-bold text-white">
              {step}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
