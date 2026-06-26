"use client";

import { useCallback, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import baby_boy from "../Images/download.jpeg";
import baby_girl from "../Images/baby_girl.jpeg";
import baby_girl_1 from "../Images/baby_girl_1.jpeg";
import baby_boy_1 from "../Images/baby_boy.jpeg";

interface Testimonial {
  name: string;
  image: StaticImageData;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ali Khan",
    image: baby_boy,
    text: "The Noorani Qaida course helped my son build a strong foundation. The 1-on-1 attention made all the difference.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    image: baby_girl,
    text: "My recitation improved within weeks. The teacher was patient, qualified, and always on time.",
    rating: 5,
  },
  {
    name: "Hassan Malik",
    image: baby_boy_1,
    text: "Learning Tajweed online actually works when you have the right teacher. I feel more connected to the Quran now.",
    rating: 5,
  },
  {
    name: "Sana Javed",
    image: baby_girl_1,
    text: "The Hifz program is structured and supportive. They matched us with a teacher who understands our schedule.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-amber-200"
          width={48}
          height={48}
        />
        <div className="min-w-0">
          <cite className="not-italic font-semibold text-slate-900">{testimonial.name}</cite>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="mt-4 flex-grow text-sm leading-relaxed text-slate-600 sm:text-base">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </blockquote>
  );
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const slide = container.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setCurrentSlide(index);
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(container.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentSlide(closestIndex);
  }, []);

  return (
    <Section id="social-proof" className="bg-slate-50">
      <SectionHeading
        eyebrow="Social proof"
        title="Trusted by Real Students & Parents"
        subtitle="500+ learners worldwide · 4.9★ average rating · Teaching since 2024"
      />

      {/* Mobile & tablet: swipeable carousel */}
      <div className="lg:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="w-[calc(100vw-2rem)] max-w-md shrink-0 snap-center sm:w-[min(100%,22rem)]"
              aria-hidden={currentSlide !== index}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-5 bg-amber-500" : "w-2 bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentSlide === index}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToSlide(Math.min(testimonials.length - 1, currentSlide + 1))}
            disabled={currentSlide === testimonials.length - 1}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop: 2x2 grid */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
}
