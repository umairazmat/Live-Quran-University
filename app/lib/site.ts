export const WHATSAPP_NUMBER = "923025297207";
export const WHATSAPP_URL =
  "https://wa.me/923025297207?text=Hi%2C%20I%20want%20to%20book%20a%20free%20Quran%20trial%20class.";
export const PHONE_DISPLAY = "+92 302 5297207";
export const PHONE_URL = "tel:+923025297207";
export const EMAIL = "livequranuniversity@gmail.com";
export const EMAIL_URL = "mailto:livequranuniversity@gmail.com";
export const LOCATION = "Iqbal Town, Lahore, Pakistan";

export const COURSE_LABELS: Record<string, string> = {
  norani: "Norani Qaida (Beginner)",
  nazrah: "Nazrah / Reading",
  tajweed: "Tajweed",
  hifz: "Hifz (Memorization)",
};

export interface WhatsAppInquiry {
  name: string;
  phone: string;
  course: string;
  location?: string;
  message?: string;
}

export function buildWhatsAppInquiryUrl(inquiry: WhatsAppInquiry): string {
  const courseLabel = COURSE_LABELS[inquiry.course] || inquiry.course;
  const lines = [
    "Assalamualaikum, I want to book a free Quran trial class.",
    "",
    `Name: ${inquiry.name}`,
    `Phone: ${inquiry.phone}`,
    `Course: ${courseLabel}`,
  ];
  if (inquiry.location) lines.push(`Location: ${inquiry.location}`);
  if (inquiry.message) lines.push(`Note: ${inquiry.message}`);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function buildWhatsAppQuickUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#solution", label: "Courses" },
  { href: "#social-proof", label: "Reviews" },
  { href: "#process", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/universitylivequran?igsh=djFnMWN1ODV1aWgw",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@livequranuniversity?_t=8qtDX1zrNaq&_r=1",
    label: "TikTok",
  },
  {
    href: "https://join.skype.com/invite/vEL2NeF2JoYa",
    label: "Skype",
  },
];

export const LEAD_MODAL_STORAGE_KEY = "lqu_lead_modal_dismissed";
