import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSkype,
  FaTiktok,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa";
import {
  EMAIL,
  EMAIL_URL,
  LOCATION,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_URL,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from "../lib/site";

const SOCIAL_ICONS = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Skype: FaSkype,
} as const;

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: "#register", label: "Free Trial" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 pb-24 pt-12 text-blue-100 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">Live Quran University</h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
              Empowering minds through Quranic education since 2024. Our mission is to make
              Quranic learning accessible to everyone worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ href, label }) => {
                const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100 transition-colors hover:bg-white/15 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors hover:bg-emerald-500/20 hover:text-emerald-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-100/80 transition-colors hover:text-amber-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Information</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={EMAIL_URL}
                  className="flex items-center gap-2.5 text-blue-100/80 transition-colors hover:text-white"
                >
                  <FaEnvelope className="shrink-0 text-amber-400" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_URL}
                  className="flex items-center gap-2.5 text-blue-100/80 transition-colors hover:text-white"
                >
                  <FaPhoneAlt className="shrink-0 text-amber-400" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-blue-100/80 transition-colors hover:text-emerald-300"
                >
                  <FaViber className="shrink-0 text-amber-400" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-blue-100/80">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-amber-400" />
                {LOCATION}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-blue-200/50">
          © {new Date().getFullYear()} Live Quran University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
