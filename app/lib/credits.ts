export const DEVELOPER_CREDITS = {
  devlotech: {
    name: "Devlotech",
    url: "https://www.devlotech.com/",
    email: "devlotechsocial@gmail.com",
  },
  umair: {
    name: "Umair Azmat",
    url: "https://www.umairazmat.com/",
    email: "umairazmatdev@gmail.com",
  },
} as const;

export const DEVELOPER_INQUIRY_SUBJECT = "Website inquiry (Live Quran University reference)";

export function buildDeveloperInquiryMailto() {
  const { devlotech, umair } = DEVELOPER_CREDITS;
  const body = encodeURIComponent(
    `Hi,\n\nI saw the Live Quran University website and would like to discuss building something similar.\n\nName:\nBusiness:\nProject details:\n\nThanks!`
  );
  return `mailto:${devlotech.email}?cc=${umair.email}&subject=${encodeURIComponent(DEVELOPER_INQUIRY_SUBJECT)}&body=${body}`;
}
