import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200";

const variants = {
  primary:
    "bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm text-slate-950 shadow-lg shadow-amber-900/20 hover:-translate-y-0.5 hover:from-amber-400 hover:to-amber-500 hover:shadow-xl sm:px-8 sm:text-base",
  secondary:
    "border border-blue-200 bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 shadow-sm hover:border-blue-300 hover:bg-blue-50 sm:text-base",
  whatsapp:
    "bg-emerald-500 px-5 py-3 text-sm text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-600 sm:text-base",
};

export function CTAButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: {
  href?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
