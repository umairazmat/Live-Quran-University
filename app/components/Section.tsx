import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function Section({ id, children, className = "", innerClassName = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 max-w-3xl sm:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-bold uppercase tracking-[0.14em] sm:text-sm ${dark ? "text-amber-400" : "text-amber-600"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed sm:text-lg ${dark ? "text-blue-100" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
