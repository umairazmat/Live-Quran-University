"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaEnvelope,
  FaInstagram,
  FaSkype,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import {
  EMAIL,
  EMAIL_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from "../lib/site";

const SOCIAL_ICONS = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Skype: FaSkype,
} as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Premium top strip: WhatsApp, email, social */}
      <div className="border-b border-amber-500/15 bg-gradient-to-r from-[#0a1628] via-[#0f2847] to-[#0a1628]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-center gap-4 sm:h-10 sm:justify-between">
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400/90 sm:block sm:text-[11px]">
              500+ students worldwide
            </p>

            <div className="flex items-center justify-center gap-3 sm:flex-1 sm:justify-end sm:gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[11px] font-medium text-blue-100/90 transition-colors hover:text-emerald-300 sm:text-xs"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 transition-colors group-hover:bg-emerald-500/25">
                  <FaWhatsapp className="text-[11px]" />
                </span>
                <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>

              <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />

              <a
                href={EMAIL_URL}
                className="flex items-center gap-1.5 text-[11px] font-medium text-blue-100/90 transition-colors hover:text-amber-200 sm:text-xs"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                  <FaEnvelope className="text-[10px]" />
                </span>
                <span className="hidden max-w-[180px] truncate md:inline lg:max-w-none">
                  {EMAIL}
                </span>
                <span className="md:hidden">Email</span>
              </a>

              <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />

              <div className="flex items-center gap-0.5">
                {SOCIAL_LINKS.map(({ href, label }) => {
                  const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full text-blue-200/70 transition-all hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="text-xs" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between gap-4 sm:h-16">
            <a href="#home" className="flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 text-sm font-bold text-white shadow-md">
                LQ
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block truncate text-sm font-bold text-slate-900 sm:text-base">
                  Live Quran
                </span>
                <span className="block truncate text-[10px] font-semibold uppercase tracking-widest text-amber-600 sm:text-xs">
                  University
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#register"
                className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md transition-all hover:-translate-y-0.5 hover:from-amber-400 hover:to-amber-500"
              >
                Book Free Trial
              </a>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#register"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-2 text-xs font-bold text-slate-950 shadow-sm sm:px-4 sm:text-sm"
              >
                Free Trial
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen((o) => !o)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-b border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-3 text-sm font-semibold text-emerald-700"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
