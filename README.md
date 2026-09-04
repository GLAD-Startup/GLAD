# GLAD Studio — Official Portfolio & Digital Experience

> **GLAD Studio** is an independent software and AI product engineering studio based in Vrindavan, India. We partner with ambitious founders and enterprise teams to design, architect, and ship production-grade web applications, cross-platform mobile apps, and autonomous AI systems.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88ce02?style=flat-square&logo=greensock)](https://greensock.com/gsap/)

---

## ⚡ Tech Stack & Core Libraries

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) with Turbopack & SSG/SSR hybrid optimization
- **Runtime & Language**: React 19 & TypeScript 5 (`strict: true`)
- **Styling**: Tailwind CSS v4 + Custom Editorial Design System tokens (`globals.css`)
- **Motion & Interactions**:
  - [GSAP 3](https://greensock.com/gsap/) (ScrollTrigger, Timelines, quickTo physics)
  - [Lenis](https://github.com/darkroomengineering/lenis) for 60fps smooth momentum scrolling
- **Scheduling**: [@calcom/embed-react](https://cal.com) embedded booking modals
- **Graphics & 3D**: [Three.js](https://threejs.org/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/) + Next.js `<Image>`

---

## 🏛️ Design System & Architecture

The site follows a pixel-faithful dark editorial layout adapted for an AI/software engineering studio:

### Color Tokens
```css
:root {
  --bg:            #FBFBF9; /* Warm editorial paper background */
  --surface:       #F2F2EE; /* Card surface level 1 */
  --surface-2:     #E9E9E4; /* Card surface level 2 */
  --fg:            #0A0A0B; /* Primary dark foreground */
  --fg-muted:      #6B6B70; /* Secondary copy */
  --fg-dim:        #A8A8AD; /* Subtle captions and borders */
  --accent:        #4E6B00; /* Deep olive accent */
  --accent-bright: #C6F000; /* Vibrant acid lime highlight */
  --line:          rgba(10,10,11,0.13); /* Hairline dividers */
  --line-solid:    #E2E2DD; /* Solid hairline rule */
  --rail-bg:       #0A0A0B; /* Dark WordRail strip background */
  --rail-fg:       #FBFBF9; /* Light WordRail strip text */
}
```

### Typography
- **Primary Typeface**: [General Sans](https://www.fontshare.com/fonts/general-sans) (400 / 500 / 600)
- **Fallbacks**: Noto Sans JP, Noto Sans Devanagari, Helvetica Neue, Arial, sans-serif
- **Type Scale**: Structured clamp-based scale from `wordmark` (up to 250px) down to `eyebrow` (11px).

---

## 📁 Project Structure

```
glad-studio-portfolio/
├── public/
│   ├── brand/          # Studio logos, SVG wordmarks, favicons, OG assets
│   ├── process/        # Sprint & methodology visual assets
│   ├── products/       # GLAD HMS, SettleDesk screenshots and assets
│   ├── services/       # Service hover preview thumbnails
│   ├── team/           # Studio partner photography (Arjun, Jatin, Somesh, Parth)
│   ├── videos/         # MP4 studio loops and service motion demos
│   ├── why-us/         # Feature illustrations and typography SVGs
│   └── work/           # Shipped case studies screenshots & media
├── src/
│   ├── app/            # Next.js App Router routes & metadata
│   │   ├── about/              # Studio Profile & Leadership
│   │   ├── contact/            # Discovery & Consultation form
│   │   ├── insights/           # Engineering articles & architecture essays
│   │   ├── insights/[slug]/    # Technical deep-dive article detail
│   │   ├── process/            # Sprint-by-sprint delivery methodology
│   │   ├── products/           # Proprietary studio products
│   │   ├── products/[slug]/    # Product detail & specification
│   │   ├── services/           # Service catalog
│   │   ├── services/[slug]/    # Service specification & video demo
│   │   ├── work/               # Selected portfolio projects
│   │   ├── work/[slug]/        # Interactive project case study
│   │   ├── privacy/ & terms/   # Legal policies
│   │   ├── layout.tsx          # Root layout, meta, JSON-LD, smooth scroll
│   │   └── page.tsx            # Main homepage (13 bespoke sections)
│   ├── components/
│   │   ├── hero/       # HeroIntro loader & CyclingWord
│   │   ├── layout/     # Nav, Footer, FloatingFooter
│   │   ├── insights/   # ArticleDetailClient, InsightPipelineCard
│   │   ├── products/   # ProductDetailClient, MockUiPanel
│   │   ├── providers/  # SmoothScroll (Lenis), CalProvider, PageTransition
│   │   ├── sections/   # 17 editorial page-section components
│   │   └── ui/         # Atomic primitives (Cursor, Marquee, PillButton, WordRail, etc.)
│   └── data/           # Hardcoded TypeScript data models (No external CMS dependency)
│       ├── engagement.ts   # Pricing budget tiers
│       ├── faq.ts          # Frequently Asked Questions
│       ├── insights.ts     # 5 technical engineering articles
│       ├── process.ts      # 8 phased delivery steps
│       ├── products.ts     # 2 flagship products (GLAD HMS, SettleDesk)
│       ├── services.ts     # 5 core studio services
│       ├── site.ts         # Navigation links, contact info, social handles
│       ├── testimonials.ts # Verified client endorsements
│       └── work.ts         # 6 portfolio case studies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `bun`

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/GLAD-Startup/GLAD.git
cd GLAD
npm install
```

### Running Locally (Development Mode)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
```
Generates an optimized static and server-rendered production build verifying all 50+ routes and TypeScript types.

### Starting Production Server
```bash
npm run start
```

### Linting
```bash
npm run lint
```

---

## 🌐 Studio Details & Contact

- **Studio**: GLAD Studio
- **Headquarters**: Vrindavan, Uttar Pradesh, India
- **Website**: [https://gladstudio.net](https://gladstudio.net)
- **Contact**: `contact@gladstudio.net`
- **Socials**:
  - Twitter / X: [@_GLAD_Studio](https://x.com/_GLAD_Studio)
  - LinkedIn: [GLAD Studio](https://www.linkedin.com/company/glad-studio-2k26)
  - Instagram: [@__gladstudio](https://www.instagram.com/__gladstudio/)

---

© 2026 GLAD Studio. All rights reserved.
