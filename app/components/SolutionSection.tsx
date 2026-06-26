"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { COURSE_OFFERINGS } from "../lib/courses";
import { setPrefillCourse } from "../lib/coursePrefill";

export default function SolutionSection() {
  const handleBookCourse = (slug: string) => {
    if (slug) setPrefillCourse(slug);
  };

  return (
    <Section id="solution">
      <SectionHeading
        eyebrow="The solution"
        title="A Simple, Reliable Way to Learn Quran Online"
        subtitle="Choose your path. Every course includes a free trial class and a dedicated 1-on-1 teacher."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {COURSE_OFFERINGS.map(
          ({ slug, icon: Icon, title, description, image, tag, highlight }) => (
            <article
              key={slug}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-200/60 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10" />
                <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
                  {tag && (
                    <span className="rounded-full bg-amber-400/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-950 shadow-sm">
                      {tag}
                    </span>
                  )}
                  {highlight && (
                    <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      {highlight}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/95 text-blue-800 shadow-xl backdrop-blur-sm">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-extrabold tracking-tight text-slate-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {description}
                </p>

                <a
                  href="#register"
                  onClick={() => handleBookCourse(slug)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-800 to-blue-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-all hover:from-blue-700 hover:to-blue-900 hover:shadow-xl group-hover:shadow-blue-950/30"
                >
                  Book Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  Free class · No payment required
                </p>
              </div>
            </article>
          )
        )}
      </div>

      <p className="mt-12 text-center text-lg font-medium text-slate-800">
        So you can focus on{" "}
        <span className="font-bold text-blue-900">connecting with the Quran</span>, not figuring
        out how to learn.
      </p>
    </Section>
  );
}
