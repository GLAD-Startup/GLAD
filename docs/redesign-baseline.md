# GLAD Studio Redesign Baseline Inventory

**Branch**: `redesign/v2-light`  
**Generated At**: 2026-08-21  
**Scope**: Complete static code, styling tokens, dependency imports, asset weight, and production bundle baseline audit for the GLAD Studio website (`gladstudio.net`).

---

## 1. Component Files Inventory (`src/components/`)

Total files: **78 files**  
Total component lines of code: **9,288 lines**

### Products Components (`src/components/products/` - 9 files, 1,724 lines)

| File Path | Line Count | Purpose / Description |
| :--- | :--- | :--- |
| `src/components/products/DealCascadeSimulator.tsx` | 194 | Interactive real-time brokerage commission split simulator |
| `src/components/products/ProductCTA.tsx` | 76 | High-conversion bottom CTA banner with demo scheduling |
| `src/components/products/ProductFAQAccordion.tsx` | 59 | Product-specific FAQ accordion built on Radix primitives |
| `src/components/products/ProductFeatureSplit.tsx` | 248 | Alternating feature split rows with UI mockups & bullet points |
| `src/components/products/ProductGalleryCarousel.tsx` | 406 | Product screenshot carousel with thumbnail strip and lightbox |
| `src/components/products/ProductHero.tsx` | 419 | Product hero section with 3D renders, stat counters, and CTAs |
| `src/components/products/ProductPricingTable.tsx` | 64 | 3-tier SaaS pricing table (Starter, Pro, Enterprise) |
| `src/components/products/ProductThreeTier.tsx` | 211 | 3-column persona breakdown (Admin, Manager, Mobile Agent/Staff) |
| `src/components/products/ProductWorkflowSequence.tsx` | 78 | Step-by-step workflow progression diagrams |

### Site Core Components (`src/components/site/` - 22 files, 3,456 lines)

| File Path | Line Count | Purpose / Description |
| :--- | :--- | :--- |
| `src/components/site/AnimatedCounter.tsx` | 41 | Scroll-triggered Framer Motion numeric counter |
| `src/components/site/Background.tsx` | 18 | Ambient radial gradients and noise texture overlay |
| `src/components/site/CookieConsent.tsx` | 89 | Privacy/Cookie consent banner with localStorage persistence |
| `src/components/site/EmailModal.tsx` | 126 | Direct email modal dialog with copy and mailto actions |
| `src/components/site/FloatingFooter.tsx` | 110 | Fixed bottom floating navigation pill (appears after 400px scroll) |
| `src/components/site/Flowing3DPrism.tsx` | 184 | 3D interactive geometric prism graphic |
| `src/components/site/Footer.tsx` | 380 | Master footer with social links, sitemap links, and booking button |
| `src/components/site/FormFields.tsx` | 124 | Neo-brutalist form input, select, and textarea fields |
| `src/components/site/HandDrawnHighlights.tsx` | 106 | Hand-drawn SVG annotations (circles, underlines, strikes) |
| `src/components/site/Header.tsx` | 378 | Sticky header with view-transition theme toggle & dropdowns |
| `src/components/site/LogoStrip.tsx` | 51 | Infinite marquee of technology partner logos |
| `src/components/site/ProjectCard.tsx` | 64 | Case study card with 3D hover perspective wrappers |
| `src/components/site/RetroDecorations.tsx` | 158 | Neo-brutalist decorative badges, stars, and speech bubbles |
| `src/components/site/Reveal.tsx` | 108 | Scroll-triggered Framer Motion animation wrappers |
| `src/components/site/RocketMan.tsx` | 69 | Floating vector rocket graphic animation |
| `src/components/site/Scroll3DElement.tsx` | 193 | Interactive 3D layered tech stack element |
| `src/components/site/ScrollProgress.tsx` | 20 | Top progress bar tracking window scroll position |
| `src/components/site/SectionHeading.tsx` | 25 | Standardized section header with eyebrow, title, and subtitle |
| `src/components/site/Service3DWheel.tsx` | 176 | Rotating 3D wheel showcasing service offerings |
| `src/components/site/SmoothScrollProvider.tsx` | 64 | Global Lenis smooth scroll provider setup |
| `src/components/site/StickerBoard.tsx` | 268 | Floating interactive draggable/stampable sticker board canvas |
| `src/components/site/data.ts` | 300 | Central static data for services, projects, testimonials, and FAQs |

### Theme Provider (`src/components/` - 1 file, 75 lines)

| File Path | Line Count | Purpose / Description |
| :--- | :--- | :--- |
| `src/components/theme-provider.tsx` | 75 | Dark/Light theme context provider with system detection |

### UI Primitives (`src/components/ui/` - 46 files, 4,033 lines)

| File Path | Line Count | File Path | Line Count |
| :--- | :--- | :--- | :--- |
| `src/components/ui/accordion.tsx` | 52 | `src/components/ui/hover-card.tsx` | 28 |
| `src/components/ui/alert-dialog.tsx` | 116 | `src/components/ui/input-otp.tsx` | 70 |
| `src/components/ui/alert.tsx` | 50 | `src/components/ui/input.tsx` | 23 |
| `src/components/ui/aspect-ratio.tsx` | 6 | `src/components/ui/label.tsx` | 22 |
| `src/components/ui/avatar.tsx` | 48 | `src/components/ui/menubar.tsx` | 230 |
| `src/components/ui/badge.tsx` | 33 | `src/components/ui/navigation-menu.tsx` | 121 |
| `src/components/ui/breadcrumb.tsx` | 102 | `src/components/ui/pagination.tsx` | 99 |
| `src/components/ui/button.tsx` | 50 | `src/components/ui/popover.tsx` | 32 |
| `src/components/ui/calendar.tsx` | 178 | `src/components/ui/progress.tsx` | 26 |
| `src/components/ui/card.tsx` | 56 | `src/components/ui/radio-group.tsx` | 37 |
| `src/components/ui/carousel.tsx` | 241 | `src/components/ui/resizable.tsx` | 38 |
| `src/components/ui/chart.tsx` | 332 | `src/components/ui/scroll-area.tsx` | 45 |
| `src/components/ui/checkbox.tsx` | 27 | `src/components/ui/select.tsx` | 153 |
| `src/components/ui/collapsible.tsx` | 12 | `src/components/ui/separator.tsx` | 25 |
| `src/components/ui/command.tsx` | 144 | `src/components/ui/sheet.tsx` | 123 |
| `src/components/ui/context-menu.tsx` | 188 | `src/components/ui/sidebar.tsx` | 745 |
| `src/components/ui/dialog.tsx` | 105 | `src/components/ui/skeleton.tsx` | 8 |
| `src/components/ui/drawer.tsx` | 99 | `src/components/ui/slider.tsx` | 24 |
| `src/components/ui/dropdown-menu.tsx` | 189 | `src/components/ui/sonner.tsx` | 24 |
| `src/components/ui/form.tsx` | 172 | `src/components/ui/switch.tsx` | 28 |
| `src/components/ui/table.tsx` | 95 | `src/components/ui/toggle-group.tsx` | 58 |
| `src/components/ui/tabs.tsx` | 54 | `src/components/ui/toggle.tsx` | 43 |
| `src/components/ui/textarea.tsx` | 22 | `src/components/ui/tooltip.tsx` | 33 |

---

## 2. Route Files Inventory (`src/routes/`)

Total route files: **29 files**  
Total route lines of code: **12,216 lines**

| File Path | Line Count | Route URL / Purpose |
| :--- | :--- | :--- |
| `src/routes/__root.tsx` | 254 | Root layout shell (HTML head, fonts, theme provider, global scripts) |
| `src/routes/index.tsx` | 931 | `/` (Homepage — Hero, Bento Grid, 3D Book Testimonials, Cal.com API) |
| `src/routes/about.tsx` | 311 | `/about` (Company values, philosophy, 4-member leadership team) |
| `src/routes/contact.tsx` | 336 | `/contact` (Lead capture form, booking trigger, direct modal) |
| `src/routes/process.tsx` | 223 | `/process` (6-phase engineering workflow and delivery milestones) |
| `src/routes/privacy.tsx` | 476 | `/privacy` (Full privacy policy, DPDP/GDPR compliance) |
| `src/routes/terms.tsx` | 413 | `/terms` (Terms of service, IP ownership, liability terms) |
| `src/routes/services.tsx` | 10 | `/services` layout outlet |
| `src/routes/services.index.tsx` | 270 | `/services` (Services hub & capability overview) |
| `src/routes/services.mvp-development.tsx` | 827 | `/services/mvp-development` (MVP engineering landing page) |
| `src/routes/services.web-application-development.tsx` | 715 | `/services/web-application-development` (Web apps landing page) |
| `src/routes/services.mobile-app-development.tsx` | 709 | `/services/mobile-app-development` (Mobile app engineering page) |
| `src/routes/services.ai-solutions.tsx` | 876 | `/services/ai-solutions` (AI & LLM systems landing page) |
| `src/routes/services.business-automation.tsx` | 782 | `/services/business-automation` (Automation & workflows landing page) |
| `src/routes/products.tsx` | 10 | `/products` layout outlet |
| `src/routes/products.index.tsx` | 254 | `/products` (SaaS products overview hub) |
| `src/routes/products.settledesk.tsx` | 253 | `/products/settledesk` (SettleDesk Real Estate Brokerage OS landing page) |
| `src/routes/products.glad-hms.tsx` | 329 | `/products/glad-hms` (GLAD HMS Hospitality OS landing page) |
| `src/routes/portfolio.tsx` | 10 | `/portfolio` layout outlet |
| `src/routes/portfolio.index.tsx` | 119 | `/portfolio` (Case studies portfolio hub) |
| `src/routes/portfolio.$slug.tsx` | 284 | `/portfolio/$slug` (Dynamic case study template: 6 projects) |
| `src/routes/insights.tsx` | 10 | `/insights` layout outlet |
| `src/routes/insights.index.tsx` | 273 | `/insights` (Technical guides & insights hub) |
| `src/routes/insights.ai-development-cost-india.tsx` | 730 | `/insights/ai-development-cost-india` (AI pricing guide) |
| `src/routes/insights.ai-agent-vs-chatbot.tsx` | 683 | `/insights/ai-agent-vs-chatbot` (Agent vs chatbot architecture guide) |
| `src/routes/insights.what-is-ai-agent-development.tsx` | 732 | `/insights/what-is-ai-agent-development` (Agentic engineering guide) |
| `src/routes/insights.rag-vs-fine-tuning.tsx` | 725 | `/insights/rag-vs-fine-tuning` (RAG vs fine-tuning guide) |
| `src/routes/insights.how-to-build-ai-agent-for-business.tsx` | 649 | `/insights/how-to-build-ai-agent-for-business` (9-step agent guide) |
| `src/routes/README.md` | 22 | Internal routing documentation notes |

---

## 3. Hardcoded Hex Colours in `src/`

Total hardcoded hex occurrences across `src/`: **577 occurrences** (across 35 files)

| File Path | Count | Unique Hex Values Found |
| :--- | :--- | :--- |
| `src/styles.css` | 185 | `#faf8f5`, `#1c1917`, `#f3efea`, `#e9e2d8`, `#ffffff`, `#78716c`, `#059669`, `#ef4444`, `#ffc72c`, `#ff4e88`, `#00b4d8`, `#7209b7`, `#10b981`, `#d97706`, `#09090b`, `#fafafa`, `#18181b`, `#27272a`, `#a1a1aa`, `#a3e635`, `#22c55e`, `#facc15`, `#ff3399`, `#33ccff`, `#b266ff`, `#9ebaaa`, `#e8cab5`, `#ded7c9`, `#3d5247`, `#7a6250`, `#7fa08c`, `#b89c87`, `#b3cebe`, `#f2dec9`, `#e8e2d5`, `#a2cbaf`, `#e2a984`, `#4a5d53`, `#6e8578`, `#2d6a4f`, `#40916c`, `#52b788`, `#1b4332`, `#141417`, `#161619`, `#dfeae2`, `#c9ddd0`, `#070a12`, `#11182c`, `#223328`, `#ff8a80`, `#ff5252`, `#91e9ff`, `#00acee`, `#0077b5`, `#00a0dc`, `#fdf497`, `#ff53d4`, `#62c2fe`, `#ff9e80`, `#ff4500`, `#ff0`, `#f00`, `#0ff`, `#0f0`, `#00f` |
| `src/routes/services.ai-solutions.tsx` | 34 | `#e5b84c`, `#10b981`, `#00b4d8`, `#ff4e88`, `#7209b7` |
| `src/routes/services.mvp-development.tsx` | 29 | `#e5b84c`, `#10b981`, `#00b4d8`, `#7209b7` |
| `src/routes/services.business-automation.tsx` | 26 | `#10b981`, `#e5b84c`, `#00b4d8`, `#ff4e88`, `#7209b7` |
| `src/components/products/ProductHero.tsx` | 24 | `#e5b84c`, `#301`, `#204`, `#402` |
| `src/routes/services.mobile-app-development.tsx` | 24 | `#7209b7`, `#ff4e88`, `#00b4d8`, `#e5b84c`, `#10b981` |
| `src/routes/services.web-application-development.tsx` | 24 | `#00b4d8`, `#ff4e88`, `#7209b7`, `#e5b84c`, `#10b981` |
| `src/routes/insights.ai-development-cost-india.tsx` | 21 | `#e5b84c`, `#10b981` |
| `src/components/products/DealCascadeSimulator.tsx` | 20 | `#e5b84c` |
| `src/routes/insights.ai-agent-vs-chatbot.tsx` | 18 | `#e5b84c`, `#00b4d8`, `#8492`, `#10b981` |
| `src/routes/insights.how-to-build-ai-agent-for-business.tsx` | 18 | `#e5b84c`, `#10b981` |
| `src/routes/insights.what-is-ai-agent-development.tsx` | 18 | `#e5b84c`, `#10b981` |
| `src/routes/insights.rag-vs-fine-tuning.tsx` | 17 | `#e5b84c`, `#10b981` |
| `src/components/site/StickerBoard.tsx` | 15 | `#000` |
| `src/components/products/ProductFeatureSplit.tsx` | 12 | `#e5b84c`, `#10b981`, `#301`, `#302`, `#303` |
| `src/components/site/data.ts` | 12 | `#22C55E`, `#15803D`, `#FACC15`, `#CA8A04`, `#A3E635`, `#4D7C0F`, `#09090B` |
| `src/components/site/Service3DWheel.tsx` | 10 | `#FF007F`, `#00F0FF`, `#9F32FF`, `#FACC15`, `#4ADE80`, `#000` |
| `src/lib/error-page.ts` | 8 | `#fafafa`, `#111`, `#4b5563`, `#fff`, `#d1d5db` |
| `src/routes/index.tsx` | 6 | `#1A1A1A`, `#FF66B2`, `#66F5FF`, `#C994FF`, `#FFE680`, `#86EFAC` |
| `src/routes/insights.index.tsx` | 6 | `#e5b84c` |
| `src/components/site/Footer.tsx` | 5 | `#e5b84c`, `#000` |
| `src/components/site/RetroDecorations.tsx` | 5 | `#000` |
| `src/components/ui/chart.tsx` | 5 | `#ccc`, `#fff` |
| `src/routes/process.tsx` | 5 | `#FF66B2`, `#66F5FF`, `#C994FF`, `#FFE680`, `#86EFAC` |
| `src/routes/services.index.tsx` | 5 | `#FF66B2`, `#66F5FF`, `#C994FF`, `#FFE680`, `#86EFAC` |
| `src/components/site/Scroll3DElement.tsx` | 4 | `#000` |
| `src/components/products/ProductPricingTable.tsx` | 3 | `#e5b84c` |
| `src/components/site/FormFields.tsx` | 3 | `#000`, `#FF5C00` |
| `src/routes/products.glad-hms.tsx` | 3 | `#10b981`, `#e5b84c` |
| `src/routes/products.index.tsx` | 3 | `#e5b84c` |
| `src/routes/products.settledesk.tsx` | 3 | `#10b981`, `#e5b84c` |
| `src/components/products/ProductFAQAccordion.tsx` | 2 | `#e5b84c` |
| `src/components/products/ProductGalleryCarousel.tsx` | 1 | `#141416` |
| `src/components/products/ProductThreeTier.tsx` | 1 | `#27272a` |
| `src/components/site/CookieConsent.tsx` | 1 | `#000` |
| `src/routes/__root.tsx` | 1 | `#0A0A0B` |

---

## 4. `dark:` Tailwind Variants in `src/`

Total `dark:` occurrences: **59 occurrences** (across 15 files)

| File Path | Count | Example Snippets / Classes |
| :--- | :--- | :--- |
| `src/routes/index.tsx` | 8 | `dark:via-white`, `dark:border-zinc-800/80`, `dark:bg-brand/15`, `dark:hover:shadow-...` |
| `src/components/products/ProductThreeTier.tsx` | 8 | `dark:bg-[#18181b]`, `dark:border-[#27272a]`, `dark:text-white` |
| `src/components/products/ProductGalleryCarousel.tsx` | 7 | `dark:bg-[#141416]`, `dark:border-[#27272a]`, `dark:text-zinc-400` |
| `src/components/site/Footer.tsx` | 7 | `dark:block`, `dark:hidden`, `dark:invert`, `dark:hover:shadow-...` |
| `src/components/site/Scroll3DElement.tsx` | 7 | `dark:bg-[#18181b]`, `dark:border-[#27272a]` |
| `src/components/site/Service3DWheel.tsx` | 7 | `dark:border-[#27272a]`, `dark:bg-[#18181b]` |
| `src/components/products/ProductCTA.tsx` | 3 | `dark:bg-emerald-950/20`, `dark:border-emerald-800/30` |
| `src/components/site/StickerBoard.tsx` | 3 | `dark:bg-[#18181b]`, `dark:border-[#27272a]` |
| `src/components/site/Header.tsx` | 2 | `dark:block`, `dark:hidden` |
| `src/routes/products.settledesk.tsx` | 2 | `dark:bg-emerald-950/20`, `dark:border-emerald-800/30` |
| `src/components/site/CookieConsent.tsx` | 1 | `dark:bg-[#18181b]` |
| `src/components/site/LogoStrip.tsx` | 1 | `dark:invert` |
| `src/components/site/RetroDecorations.tsx` | 1 | `dark:text-black` |
| `src/components/ui/alert.tsx` | 1 | `dark:border-destructive` |
| `src/components/ui/chart.tsx` | 1 | `dark:bg-zinc-950` |

---

## 5. Animation & 3D Imports (`@splinetool`, `framer-motion`, `lenis`)

Total import statements: **35 statements** across **35 files**

### `@splinetool` Imports (1 file)
1. `src/routes/index.tsx` (Line 3):
   ```tsx
   import Spline from "@splinetool/react-spline";
   ```

### `lenis` Imports (1 file)
1. `src/components/site/SmoothScrollProvider.tsx` (Line 3):
   ```tsx
   import { ReactLenis, useLenis } from "lenis/react";
   ```

### `framer-motion` Imports (33 files)
1. `src/components/products/ProductGalleryCarousel.tsx` (Line 2): `import { motion, AnimatePresence } from "framer-motion";`
2. `src/components/products/ProductWorkflowSequence.tsx` (Line 4): `import { motion } from "framer-motion";`
3. `src/components/site/AnimatedCounter.tsx` (Line 2): `import { motion, useInView, useMotionValue, animate, useTransform } from "framer-motion";`
4. `src/components/site/Background.tsx` (Line 1): `import { motion, useScroll, useTransform } from "framer-motion";`
5. `src/components/site/EmailModal.tsx` (Line 2): `import { motion, AnimatePresence } from "framer-motion";`
6. `src/components/site/FloatingFooter.tsx` (Line 4): `import { motion, AnimatePresence } from "framer-motion";`
7. `src/components/site/Flowing3DPrism.tsx` (Line 2): `import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";`
8. `src/components/site/FormFields.tsx` (Line 2): `import { motion, AnimatePresence } from "framer-motion";`
9. `src/components/site/HandDrawnHighlights.tsx` (Line 1): `import { motion } from "framer-motion";`
10. `src/components/site/Header.tsx` (Line 4): `import { motion, AnimatePresence } from "framer-motion";`
11. `src/components/site/RetroDecorations.tsx` (Line 1): `import { motion } from "framer-motion";`
12. `src/components/site/Reveal.tsx` (Line 1): `import { motion, type Variants, type Transition } from "framer-motion";`
13. `src/components/site/RocketMan.tsx` (Line 1): `import { motion, useScroll, useTransform } from "framer-motion";`
14. `src/components/site/Scroll3DElement.tsx` (Line 2): `import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";`
15. `src/components/site/StickerBoard.tsx` (Line 2): `import { motion, AnimatePresence } from "framer-motion";`
16. `src/routes/about.tsx` (Line 8): `import { motion } from "framer-motion";`
17. `src/routes/contact.tsx` (Line 10): `import { motion } from "framer-motion";`
18. `src/routes/index.tsx` (Line 2): `import { motion } from "framer-motion";`
19. `src/routes/insights.ai-agent-vs-chatbot.tsx` (Line 28): `import { motion, AnimatePresence } from "framer-motion";`
20. `src/routes/insights.ai-development-cost-india.tsx` (Line 29): `import { motion, AnimatePresence } from "framer-motion";`
21. `src/routes/insights.how-to-build-ai-agent-for-business.tsx` (Line 31): `import { motion, AnimatePresence } from "framer-motion";`
22. `src/routes/insights.index.tsx` (Line 22): `import { motion } from "framer-motion";`
23. `src/routes/insights.rag-vs-fine-tuning.tsx` (Line 30): `import { motion, AnimatePresence } from "framer-motion";`
24. `src/routes/insights.what-is-ai-agent-development.tsx` (Line 32): `import { motion, AnimatePresence } from "framer-motion";`
25. `src/routes/portfolio.$slug.tsx` (Line 7): `import { motion, AnimatePresence } from "framer-motion";`
26. `src/routes/portfolio.index.tsx` (Line 8): `import { motion } from "framer-motion";`
27. `src/routes/process.tsx` (Line 7): `import { motion } from "framer-motion";`
28. `src/routes/services.ai-solutions.tsx` (Line 34): `import { motion, AnimatePresence } from "framer-motion";`
29. `src/routes/services.business-automation.tsx` (Line 34): `import { motion, AnimatePresence } from "framer-motion";`
30. `src/routes/services.index.tsx` (Line 8): `import { motion } from "framer-motion";`
31. `src/routes/services.mobile-app-development.tsx` (Line 32): `import { motion, AnimatePresence } from "framer-motion";`
32. `src/routes/services.mvp-development.tsx` (Line 28): `import { motion, AnimatePresence } from "framer-motion";`
33. `src/routes/services.web-application-development.tsx` (Line 30): `import { motion, AnimatePresence } from "framer-motion";`

---

## 6. Current Production Bundle Size

**Build Command**: `npm run build` (`vite build && nitro build`)  
**Bundler**: Vite 7.3.5 + Nitro 3.0.260603-beta

### Client Distribution (`.output/public/assets`)

| Asset Category | Total Raw Size | Total Size (MB) | File Count | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Client JavaScript (`.js`)** | **5,544.12 kB** | **5.41 MB** | 72 files | Includes Spline runtime & physics engine chunks |
| **Client CSS (`.css`)** | **176.13 kB** | **0.17 MB** | 1 file | Compiled Tailwind v4 stylesheet (`styles-CllxvXvC.css`) |

#### Top 10 Largest Client JS Chunks:
1. `index-DqRCGx_a.js` (Spline Runtime / WebGL Canvas Core): **2,053.62 kB** (gzip: 598.22 kB)
2. `physics-ChHD2_fM.js` (Spline Physics Engine): **1,940.98 kB** (gzip: 722.72 kB)
3. `index-N2X8MIkB.js` (TanStack Router & Core Runtime): **284.65 kB** (gzip: 84.48 kB)
4. `vendor-react-CwsuuxOG.js` (React 19 & React DOM): **188.51 kB** (gzip: 60.56 kB)
5. `opentype-U-0Y99ve.js` (Font & Glyph Parsing Library): **169.46 kB** (gzip: 50.26 kB)
6. `vendor-motion-DbU40YvZ.js` (Framer Motion Engine): **132.82 kB** (gzip: 44.97 kB)
7. `ui-tt1i-6fZ.js` (Radix UI Component Suite): **88.23 kB** (gzip: 28.28 kB)
8. `gaussian-splat-compression-CH16aANn.js` (3D Mesh Compression): **80.60 kB** (gzip: 22.84 kB)
9. `process-DGQPpdwV.js` (Process Page Route Bundle): **58.04 kB** (gzip: 15.54 kB)
10. `navmesh-B1pUQaZh.js` (3D Navigation Mesh Engine): **53.80 kB** (gzip: 17.51 kB)

### Server SSR Distribution (`.output/server`)

| Asset Category | Total Raw Size | Total Size (MB) | File Count |
| :--- | :--- | :--- | :--- |
| **Server JavaScript/Modules (`.mjs`)** | **7,895.76 kB** | **7.71 MB** | 97 files |

---

## 7. Largest Files in `public/` and `src/routes/images/`

### Top 10 Largest Files (Combined Across `public/` and `src/routes/images/`)

| Rank | File Path | Byte Size | Formatted Size | Media Type |
| :---: | :--- | :--- | :--- | :--- |
| **1** | `src/routes/images/settledesk/videos/request a demo background.mp4` | 21,346,102 bytes | **20.36 MB** | MP4 Video |
| **2** | `src/routes/images/settledesk/videos/From Submitted to Sold, Automatically.mp4` | 18,020,607 bytes | **17.19 MB** | MP4 Video |
| **3** | `src/routes/images/settledesk/building.png` | 6,851,053 bytes | **6.53 MB** | PNG Image |
| **4** | `src/routes/images/projects/lead_enrichment thumbnail.png` | 5,361,922 bytes | **5.11 MB** | PNG Image |
| **5** | `src/routes/images/settledesk/videos/One Source of Truth. Every Device.mp4` | 4,956,722 bytes | **4.73 MB** | MP4 Video |
| **6** | `src/routes/images/projects/q safe.png` | 4,287,322 bytes | **4.09 MB** | PNG Image |
| **7** | `src/routes/images/settledesk/videos/every property always up to date.mp4` | 3,103,915 bytes | **2.96 MB** | MP4 Video |
| **8** | `src/routes/images/settledesk/videos/video logo.mp4` | 2,660,098 bytes | **2.54 MB** | MP4 Video |
| **9** | `src/routes/images/projects/fluxor.png` | 2,491,877 bytes | **2.38 MB** | PNG Image |
| **10** | `src/routes/images/projects/ai mock interview features.png` | 2,203,146 bytes | **2.10 MB** | PNG Image |

### Files in `public/` Directory

| File Path | Byte Size | Formatted Size |
| :--- | :--- | :--- |
| `public/llms.txt` | 6,022 bytes | 5.88 KB |
| `public/sitemap.xml` | 4,840 bytes | 4.73 KB |
| `public/OG-IMAGE-README.md` | 805 bytes | 0.79 KB |
| `public/robots.txt` | 70 bytes | 0.07 KB |

---

*End of Baseline Inventory Document.*
