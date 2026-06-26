import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { XCircle } from "lucide-react";
import { SITE_IMAGES } from "../lib/images";

const PROBLEMS = [
  "No qualified teacher nearby for proper Tajweed",
  "Busy schedule, can't attend fixed mosque classes",
  "Kids lose interest without 1-on-1 attention",
  "You tried apps or videos but still can't recite confidently",
];

export default function ProblemSection() {
  return (
    <Section id="problem" className="bg-slate-50">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Sound familiar?"
            title="Struggling to Learn Quran the Right Way?"
            subtitle="Most people waste months or years because they delay, choose the wrong method, or learn without a qualified teacher."
          />
          <ul className="space-y-3">
            {PROBLEMS.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-3 rounded-xl border border-red-100 bg-white p-4 shadow-sm"
              >
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <span className="text-slate-700">{problem}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base font-medium text-slate-800 sm:text-lg">
            That is exactly why we built{" "}
            <span className="font-bold text-blue-900">Live Quran University</span>, a simple,
            trusted way to learn online with real teachers.
          </p>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <Image
              src={SITE_IMAGES.problem}
              alt="Student learning Quran with a teacher"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-sm font-bold text-slate-900">Real teachers. Real progress.</p>
              <p className="text-xs text-slate-600">1-on-1 online classes for every age</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
