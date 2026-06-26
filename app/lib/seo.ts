import { EMAIL, LOCATION, PHONE_DISPLAY } from "./site";
import { FAQ_ITEMS } from "./faqs";

export const SITE_NAME = "Live Quran University";
export const SITE_SHORT_NAME = "LQ University";
export const SITE_TAGLINE = "Online Quran Classes with Expert Teachers";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://livequranuniversity.com";

export const SITE_DESCRIPTION =
  "Learn Quran online with qualified Hafiz teachers. 1-on-1 Tajweed, Hifz, Norani Qaida & reading classes for kids and adults. Flexible timings worldwide. Book your free trial class today.";

export const SITE_KEYWORDS = [
  "online quran classes",
  "learn quran online",
  "quran teacher online",
  "online quran tutor",
  "tajweed classes online",
  "hifz classes online",
  "norani qaida online",
  "quran classes for kids",
  "quran classes for adults",
  "islamic education online",
  "muslim quran student",
  "online islamic studies",
  "quran memorization online",
  "free quran trial class",
  "live quran university",
  "quran classes pakistan",
  "quran classes uk",
  "quran classes usa",
  "1 on 1 quran classes",
  "hafiz teacher online",
];

export const OG_IMAGE = {
  url: "/muslim-reading-quran.jpg",
  width: 1920,
  height: 1280,
  alt: "Muslim student learning Quran online with a qualified teacher at Live Quran University",
};

export const TWITTER_HANDLE = "@livequranuniversity";

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Iqbal Town",
      addressRegion: "Lahore",
      addressCountry: "PK",
      streetAddress: LOCATION,
    },
    areaServed: ["Pakistan", "United Kingdom", "United States", "Canada", "United Arab Emirates"],
    sameAs: [
      "https://www.instagram.com/universitylivequran",
      "https://www.tiktok.com/@livequranuniversity",
    ],
    offers: {
      "@type": "Offer",
      name: "Free Quran Trial Class",
      price: "0",
      priceCurrency: "USD",
      description: "Free 1-on-1 online Quran trial class with a qualified teacher",
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}
