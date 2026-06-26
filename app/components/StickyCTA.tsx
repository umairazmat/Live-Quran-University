import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../lib/site";

export default function StickyCTA() {
  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden">
        <div className="flex gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-white"
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href="#register"
            className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-slate-950"
          >
            Free Trial
          </a>
        </div>
      </div>

      {/* Animated floating WhatsApp on desktop and tablet */}
      <div className="whatsapp-float fixed bottom-20 right-4 z-40 hidden sm:bottom-6 sm:block lg:bottom-8">
        <span className="whatsapp-ping absolute inset-0 rounded-full bg-emerald-400" aria-hidden />
        <span className="whatsapp-ping-delay absolute inset-0 rounded-full bg-emerald-400" aria-hidden />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="whatsapp-btn relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-900/40 transition-transform hover:scale-110 lg:h-16 lg:w-16"
        >
          <FaWhatsapp className="h-7 w-7 lg:h-8 lg:w-8" />
        </a>
        <span className="whatsapp-tooltip pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity">
          Chat with us!
          <span className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-900" />
        </span>
      </div>
    </>
  );
}
