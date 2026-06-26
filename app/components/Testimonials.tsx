"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
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

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Section id="social-proof" className="bg-slate-50">
      <SectionHeading
        eyebrow="Social proof"
        title="Trusted by Real Students & Parents"
        subtitle="500+ learners worldwide · 4.9★ average rating · Teaching since 2024"
      />
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2 pb-2">
            <blockquote className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-200"
                  width={48}
                  height={48}
                />
                <div>
                  <cite className="not-italic font-semibold text-slate-900">{testimonial.name}</cite>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-slate-600 sm:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </blockquote>
          </div>
        ))}
      </Slider>
      <div className="mt-4 flex justify-center gap-1.5">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-amber-500" : "bg-slate-300"}`}
          />
        ))}
      </div>
    </Section>
  );
}
