import { BookOpen, Headphones, Languages, Sparkles, LucideIcon } from "lucide-react";
import { SITE_IMAGES } from "./images";

export interface CourseOffering {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  tag?: string;
  highlight?: string;
}

export const COURSE_OFFERINGS: CourseOffering[] = [
  {
    slug: "norani",
    icon: BookOpen,
    title: "Norani Qaida & Reading",
    description:
      "Perfect for beginners and kids. Learn Arabic letters, sounds, and fluent Quran reading step by step.",
    image: SITE_IMAGES.courses.norani,
    tag: "Best for beginners",
    highlight: "Ages 5+",
  },
  {
    slug: "tajweed",
    icon: Languages,
    title: "Tajweed Mastery",
    description:
      "Fix pronunciation and recite with confidence. Live correction from qualified Tajweed teachers.",
    image: SITE_IMAGES.courses.tajweed,
    tag: "Most popular",
    highlight: "All levels",
  },
  {
    slug: "hifz",
    icon: Sparkles,
    title: "Hifz (Memorization)",
    description:
      "Structured Hifz plans with daily targets, revision cycles, and a dedicated teacher tracking progress.",
    image: SITE_IMAGES.courses.hifz,
    tag: "Long-term program",
    highlight: "Kids & adults",
  },
  {
    slug: "",
    icon: Headphones,
    title: "1-on-1 Live Classes",
    description:
      "Private online sessions on your schedule. Morning, evening, or weekend slots worldwide.",
    image: SITE_IMAGES.courses.liveClass,
    tag: "Flexible timing",
    highlight: "Online only",
  },
];
