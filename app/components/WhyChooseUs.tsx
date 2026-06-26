import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { Clock, Globe, Shield, Users } from "lucide-react";
import { SITE_IMAGES } from "../lib/images";

const REASONS = [
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Qualified Hafiz and Tajweed instructors with years of teaching experience.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "We reply quickly on WhatsApp and help you book your trial class the same day.",
  },
  {
    icon: Globe,
    title: "Students Worldwide",
    description: "Teaching learners across Pakistan, UK, USA, Canada, and the Gulf, all online.",
  },
  {
    icon: Shield,
    title: "Trusted Since 2024",
    description: "500+ students, 4.9★ ratings, and transparent plans from $30/month.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-white">
      <SectionHeading
        eyebrow="Trust & experience"
        title="Why Choose Us Over Random Apps or YouTube?"
        subtitle="Real teachers. Real accountability. Real progress."
      />

      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {SITE_IMAGES.gallery.map((item, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200 sm:rounded-2xl"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="text-center">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
