import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { Check } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SITE_IMAGES } from "../lib/images";

const BENEFITS = [
  "Save time with flexible 1-on-1 classes on your schedule",
  "Learn from experienced Hafiz & qualified Quran teachers",
  "Avoid confusion with clear lesson plans from day one",
  "Get fast support via WhatsApp, call, or Skype",
  "Transparent pricing, know your plan before you start",
  "Guidance for kids and adults, beginners to advanced",
];

export default function BenefitsSection() {
  return (
    <Section id="benefits" className="bg-blue-950 text-white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={SITE_IMAGES.benefits}
              alt="Child reading the Quran in an online class"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-blue-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-2xl font-extrabold text-amber-400">4.9★</p>
              <p className="text-sm text-blue-100">Rated by students & parents</p>
            </div>
          </div>
        </div>

        <div className="order-2">
          <SectionHeading
            align="left"
            eyebrow="Why it works"
            title="Why Families Choose Live Quran University"
            subtitle="Benefits that matter, not just a list of features."
            dark
          />
          <div className="grid gap-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-slate-100">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href="#register">Book Your Free Trial Class →</CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
