import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppQuickUrl } from "../lib/site";

interface WhatsAppStripProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  message?: string;
}

export default function WhatsAppStrip({
  title,
  subtitle,
  buttonText = "Chat on WhatsApp",
  message = "Hi, I have a question about your online Quran classes. Can you help me book a free trial?",
}: WhatsAppStripProps) {
  const url = buildWhatsAppQuickUrl(message);

  return (
    <div className="border-y border-amber-500/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 sm:py-3.5 lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-bold tracking-tight text-white sm:text-base">{title}</p>
          {subtitle && (
            <p className="mt-0.5 text-xs text-blue-200/75 sm:text-sm">{subtitle}</p>
          )}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-900/30 transition-all hover:bg-emerald-400 sm:w-auto"
        >
          <FaWhatsapp className="h-4 w-4" />
          {buttonText}
        </a>
      </div>
    </div>
  );
}
