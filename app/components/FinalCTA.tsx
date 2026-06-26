import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { FaWhatsapp } from "react-icons/fa";

import { WHATSAPP_URL } from "../lib/site";

export default function FinalCTA() {
  return (
    <Section id="final-cta" className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-400">Last step</p>
        <h2 className="mt-2 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight">
          Ready to Start Your Quran Journey?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Book your free trial class today. Expert teachers, flexible timings, and clear guidance
          from day one.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="#register">Book Free Trial Class →</CTAButton>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-600 sm:text-base"
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp Us Now
          </a>
        </div>
        <p className="mt-4 text-sm text-blue-200/80">No pressure. No confusion. Just start.</p>
      </div>
    </Section>
  );
}
