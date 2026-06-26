# Live Quran University

A high-converting, production-ready marketing website for **Live Quran University** — an online Quran education platform offering 1-on-1 Tajweed, Hifz, Norani Qaida, and reading classes for kids and adults worldwide.

Built as a **single-page sales funnel** focused on one goal: **book a free trial class**. Designed for clarity, trust, and mobile-first conversion — not just visual polish.

---

## Why this project stands out

| For founders & clients | For UI/UX reviewers | For engineering reviewers |
|------------------------|---------------------|---------------------------|
| Clear conversion path from hero → offer → form | Problem → solution → proof → CTA funnel structure | Next.js 16 App Router, TypeScript, server API routes |
| WhatsApp + email lead capture (no lead left behind) | Mobile bottom-sheet modal, sticky CTAs, swipe testimonials | Resend for secure server-side email delivery |
| Trust signals: testimonials, FAQ, social proof, ratings | Consistent design system (amber CTAs, blue brand, Geist font) | SEO: JSON-LD, sitemap, robots, Open Graph |
| Course prefill from card click to form | Accessible forms, keyboard dismiss, safe-area mobile support | Centralized config (`site.ts`, `seo.ts`, `images.ts`) |

---

## Demo Preview
> https://live-quran-university.vercel.app/

## Live preview

> Deploy and add your live URL here, e.g. `https://livequranuniversity.com`

---

## Product & UX highlights

### Conversion-focused page flow

```
Header → Hero → Problem → WhatsApp strip → Courses → Benefits → WhatsApp strip
→ Testimonials → Offer (form) → WhatsApp strip → Process → Why Us → FAQ → Final CTA
→ Footer + Sticky mobile CTA + Timed lead modal
```

### UX decisions that matter

- **One primary action** — “Book Free Trial Class” is repeated at every decision point without cluttering navigation.
- **Objection handling** — Problem section, FAQ with schema markup, and WhatsApp strips between sections answer doubts before the user leaves.
- **Low-friction booking** — Short Formik form (name, phone, course); optional fields hidden on compact modal view.
- **Course prefill** — Clicking a course card pre-selects that course on the registration form via session storage.
- **Dual-channel leads** — Resend email to the business inbox + WhatsApp opens with a pre-filled inquiry message.
- **Mobile-first modal** — Full-width bottom sheet with swipe-to-dismiss, “Not now”, backdrop tap, and large touch targets.
- **Dark mode safety** — Site locked to light theme so OS dark mode never breaks text/background contrast.
- **Authentic imagery** — Curated Quran and Islamic education photos (no generic stock laptop shots).

### Visual design

- Premium dark gradient top strip (contact + social links)
- Amber gradient primary CTAs (high visibility, warm trust)
- Emerald WhatsApp actions (platform-recognizable)
- Geist sans typography, responsive `clamp()` headings
- Card-based course offerings with hover states and tags (“Best for beginners”, “Most popular”)

---

## Technical stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript 5.9 |
| UI | React 19 |
| Styling | Tailwind CSS 4 (`@import "tailwindcss"`) |
| Forms | Formik + Yup validation |
| Email | [Resend](https://resend.com) via `/api/book-trial` |
| Notifications | react-toastify |
| Icons | Lucide React, React Icons |
| Fonts | Geist (local, `next/font`) |
| Linting | ESLint 9 flat config |

---

## Features

- **Unified header** — Top contact strip + sticky nav with mobile drawer
- **Hero** — Full-bleed image, trust badges, single strong CTA above the fold
- **Course cards** — Norani Qaida, Tajweed, Hifz, 1-on-1 live classes with imagery and trial CTA
- **Trial booking form** — Shared across offer section and lead capture modal
- **Lead capture modal** — Appears after 8s, once per session, dismissible multiple ways
- **Sticky CTA bar** — Mobile bottom bar + animated floating WhatsApp button
- **Testimonials** — Swipeable carousel on mobile, 2×2 grid on desktop
- **SEO package** — Meta tags, keywords, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, web manifest, FAQ + Organization JSON-LD
- **Favicon & app icons** — Custom SVG “LQ” branding

---

## Architecture overview

```
app/
├── api/
│   ├── book-trial/route.ts    # POST — trial booking → Resend email
│   └── contact/route.ts       # POST — contact form → Resend email
├── components/                # Funnel sections + shared UI
├── lib/
│   ├── site.ts                # WhatsApp URLs, nav, social links
│   ├── seo.ts                 # Metadata, JSON-LD builders
│   ├── images.ts              # Curated image map
│   ├── courses.ts             # Course offerings data
│   ├── coursePrefill.ts       # Session storage prefill
│   ├── submitTrialBooking.ts  # Client → API bridge
│   └── send-booking-email.ts  # Resend server helper
├── layout.tsx                 # Global metadata + viewport
├── page.tsx                   # Single-page funnel composition
├── robots.ts / sitemap.ts / manifest.ts
└── globals.css                # Tailwind 4 theme + animations

public/                        # Optimized Quran / Islamic education images
```

### Lead capture flow

1. User submits trial form (offer section or popup modal).
2. Client calls `POST /api/book-trial` with validated payload.
3. Server sends formatted email via Resend (API key never exposed to browser).
4. On success → toast + WhatsApp opens with pre-filled message.
5. On failure → WhatsApp fallback so the lead is not lost.

---

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
git clone https://github.com/umairazmat/Live-Quran-University.git
cd Live-Quran-University
npm install
cp .env.local.example .env.local
# Add your Resend API key and email settings to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` from `.env.local.example`:

```env
NEXT_PUBLIC_SITE_URL=https://livequranuniversity.com
RESEND_API_KEY=re_your_key_here
RESEND_FROM_EMAIL=Live Quran University <onboarding@resend.dev>
RESEND_TO_EMAIL=livequranuniversity@gmail.com
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO, OG tags, sitemap |
| `RESEND_API_KEY` | Server-only Resend API key |
| `RESEND_FROM_EMAIL` | Sender address (use `onboarding@resend.dev` until domain verified) |
| `RESEND_TO_EMAIL` | Inbox that receives booking notifications |

### Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## SEO & performance

- Static prerendered landing page (fast TTFB)
- `next/image` for optimized images
- Structured data: `EducationalOrganization`, `WebSite`, `FAQPage`
- Mobile viewport, theme color, and PWA manifest
- Semantic HTML sections with anchor navigation

---

## Business context

**Client:** Live Quran University  
**Location:** Iqbal Town, Lahore, Pakistan  
**Contact:** +92 302 5297207 · livequranuniversity@gmail.com  
**Offering:** Online 1-on-1 Quran classes (Tajweed, Hifz, Norani Qaida) · Free trial · Plans from $30/month

---

## Developed by

<table>
  <tr>
    <td align="center" width="50%">
      <strong><a href="https://www.devlotech.com/">Devlotech</a></strong><br/>
      Global Software Development & AI Solutions<br/>
      <a href="mailto:devlotechsocial@gmail.com">devlotechsocial@gmail.com</a>
    </td>
    <td align="center" width="50%">
      <strong><a href="https://www.umairazmat.com/">Umair Azmat</a></strong><br/>
      Full-Stack Software Engineer<br/>
      <a href="mailto:umairazmatdev@gmail.com">umairazmatdev@gmail.com</a>
    </td>
  </tr>
</table>

Engineering-led delivery: conversion-focused UX, modern React architecture, and production-ready integrations — built for real business outcomes.

---

## License & copyright

Copyright © 2026 **[Devlotech](https://www.devlotech.com/)** & **[Umair Azmat](https://www.umairazmat.com/)**. All rights reserved.

This repository and its codebase are proprietary work product created for Live Quran University. See **[LICENSE.md](./LICENSE.md)** for full terms. Unauthorized copying, redistribution, or commercial reuse without written permission is prohibited.

For new projects, partnerships, or engineering support:

- **Devlotech:** [devlotechsocial@gmail.com](mailto:devlotechsocial@gmail.com) · [devlotech.com](https://www.devlotech.com/)
- **Umair Azmat:** [umairazmatdev@gmail.com](mailto:umairazmatdev@gmail.com) · [umairazmat.com](https://www.umairazmat.com/)
