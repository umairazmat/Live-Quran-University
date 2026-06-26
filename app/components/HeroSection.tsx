"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";
import { SITE_IMAGES } from "../lib/images";

const TRUST_POINTS = [
  "1-on-1 live classes",
  "Flexible schedule",
  "Kids & adults welcome",
];

const BENEFITS = [
  "Qualified Quran teachers",
  "Tajweed, Hifz & reading",
  "Learn from anywhere",
];

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-7rem)] items-center overflow-hidden sm:min-h-[calc(100svh-7.5rem)] lg:min-h-[calc(100svh-8rem)]"
    >
      <Image
        src={SITE_IMAGES.hero}
        alt="Student learning Quran online with a qualified teacher"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%] sm:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-blue-950/80 to-slate-900/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="max-w-2xl lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-200 sm:text-xs">
              Free trial class, no commitment
            </span>
          </div>

          <h1 className="mt-4 font-[family-name:var(--font-geist-sans)] text-[clamp(1.875rem,5.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-white sm:mt-5">
            Learn Quran Online{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Without
            </span>{" "}
            Leaving Home
          </h1>

          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:mt-4 sm:text-lg sm:leading-relaxed">
            We help kids and adults master Tajweed, Hifz &amp; reading through 1-on-1 classes with
            experienced Hafiz teachers with flexible timings, worldwide.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm sm:mt-5 sm:gap-4">
            <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 backdrop-blur-sm">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4"
                  />
                ))}
              </div>
              <span className="font-semibold text-white">4.9</span>
              <span className="text-slate-400">from students</span>
            </div>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
            <span className="text-slate-300">
              <strong className="font-semibold text-white">500+</strong> learners worldwide
            </span>
          </div>

          <div className="mt-6 sm:mt-7">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-900/30 transition-all hover:-translate-y-0.5 hover:from-amber-400 hover:to-amber-500 hover:shadow-xl sm:px-8 sm:text-base"
            >
              Book Your Free Trial Class →
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Trusted worldwide · Fast WhatsApp response · Transparent pricing
          </p>

          <ul className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-3">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 hidden gap-3 lg:mt-0 lg:absolute lg:bottom-10 lg:right-8 lg:flex lg:flex-col xl:right-12">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 backdrop-blur-md"
            >
              <Check className="h-4 w-4 shrink-0 text-amber-400" strokeWidth={2.5} />
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
