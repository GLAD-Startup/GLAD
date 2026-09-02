# Project Design Contract, Agent Guidelines & Codebase Audit

> **CRITICAL:** This document is the persistent design contract for this project. Read it before every task and **never** deviate from these values and rules.

---

## 1. Project Overview

- **Project:** A pixel-faithful rebuild of a dark, editorial, Japanese-influenced portfolio site adapted for a software/AI product studio.
- **Reference Design Width:** `1512px`.
- **Measurement Rule:** All pixel values at `1512px` are treated as exact at that width.
- **How it was built:** AI-assisted on a Next.js scaffold; the `newDesign` branch is canonical.

---

## 2. Color Tokens

```css
:root {
  --bg:           #FBFBF9;
  --surface:      #F2F2EE;
  --surface-2:    #E9E9E4;
  --fg:           #0A0A0B;
  --fg-muted:     #6B6B70;
  --fg-dim:       #A8A8AD;
  --accent:       #4E6B00;
  --accent-bright:#C6F000;
  --line:         rgba(10,10,11,0.13);
  --line-solid:   #E2E2DD;
  --rail-bg:      #0A0A0B;
  --rail-fg:      #FBFBF9;
}
```

> **Color Rule:** No other color anywhere. No gradients, glows, or second accent. Saturation comes from photography only.

---

## 3. Typography

- **Primary:** General Sans from Fontshare `https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap`
- **Fallbacks:** Noto Sans JP (400/500), Noto Sans Devanagari (400/500/600)
- **Stack:** `'General Sans', 'Noto Sans JP', 'Noto Sans Devanagari', 'Helvetica Neue', Arial, sans-serif`
- **Weights:** 400 (display/body), 500 (nav/titles/buttons), 600 (rail). Never 700.

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `wordmark` | `clamp(0px, 13.5vw, 250px)` | `0.80` | `-0.045em` | `400` | GLAD studio® |
| `marquee` | `185px` | `0.90` | `-0.035em` | `400` | Scrolling titles |
| `display` | `190px` | `0.88` | `-0.035em` | `400` | Services, Awards |
| `display-sm` | `150px` | `0.90` | `-0.035em` | `400` | Tenure., Pick Plans., FAQ. |
| `statement` | `62px` | `1.18` | `-0.02em` | `400` | Profile paragraph |
| `heading` | `52px` | `1.02` | `-0.02em` | `400` | Hero headline |
| `heading-sm` | `44px` | `1.15` | `-0.02em` | `400` | 13+ years |
| `price` | `68px` | `1.00` | `-0.03em` | `500` | Pricing headers |
| `title-lg` | `19px` | `1.30` | `-0.01em` | `500` | Service titles |
| `body` | `15px` | `1.55` | `0` | `400` | Body copy |
| `body-sm` | `13.5px` | `1.45` | `0` | `400` | Descriptions |
| `label` | `13px` | `1.40` | `0` | `500` | Nav, rail, table |
| `eyebrow` | `11px` | `1.00` | `0.045em` | `500` | Uppercase labels |

---

## 4. Layout & Spacing

- **Gutters:** `40px` left and right.
- **Max Width:** None — sections are full-bleed; content lives inside gutters.
- **Border Radii:** `12px` large media, `10px` inner/overlay, `14px` cards, `999px` buttons.

---

## 5. Hard Rules

1. Sections overlap on purpose — never clamp media back inside gutters. `overflow-x: hidden` on `<body>` only.
2. Scattered layouts are absolute-positioned inside a relative container with explicit height. Do not convert to flex/grid.
3. `mix-blend-mode: difference` on large text over images is load-bearing — never remove it.
4. Motion is restrained: only marquees, scroll parallax, custom cursor, and hover states. No fade-up-on-everything.
5. Every image/video slot must have a real asset URL — never an empty box or gray div.
6. Desktop-first. Ignore mobile until explicitly requested.

---

# CODEBASE AUDIT
> Conducted: 2026-08-30. Branch: `newDesign`.

---

## A. Tech Stack & Architecture

| Layer | Choice | Notes |
|:---|:---|:---|
| Framework | Next.js 16.3.3 (App Router) | Turbopack in dev |
| Language | TypeScript 5 (`strict: true`) | All source in `src/` |
| Runtime | React 19.2.4 | Latest stable |
| Styling | Tailwind CSS v4 + `globals.css` | TW4 uses `@tailwindcss/postcss`; config is CSS-in-file, no `tailwind.config.js` |
| Animation | GSAP 3.12.5 + ScrollTrigger | Lenis 1.3.17 for smooth scroll; GSAP ticker drives Lenis RAF |
| Package Mgr | npm | `package-lock.json` present |
| Images | `sharp` 0.33.5 + Next.js `<Image>` | `unoptimized` flag on most images — see SS E |
| Icons | `lucide-react` 0.475.0 | Listed in deps but no imports found — likely dead |
| Utilities | `clsx` 2.1.1 | Nav, PillButton, Cursor |
| Rendering | Hybrid SSR/SSG | Static pages; `'use client'` where GSAP is used |

---

## B. Structure & Routing

### App Routes

| Route | Renders |
|:---|:---|
| `/` | Homepage — all 13 sections |
| `/about` | About page |
| `/contact` | Contact form |
| `/work` | Work listing |
| `/work/[slug]` | Case study detail |
| `/services` | Services listing |
| `/services/[slug]` | Service detail |
| `/products` | Products listing |
| `/products/[slug]` | Product detail |
| `/insights` | Articles listing |
| `/insights/[slug]` | Article detail |
| `/article/[slug]` | Legacy URL |
| `/process` | Process page |
| `/privacy`, `/terms` | Legal pages |
| `/kitchen-sink` | Dev component showcase |
| `/api/contact` | Contact API — STUB |

**Redirects (next.config.ts):** `/portfolio` → `/work`, `/gallery` → `/products`, `/journal` → `/insights` (all permanent).

### Component Organization

```
src/components/
  contact/       ContactForm.tsx
  hero/          HeroIntro.tsx, CyclingWord.tsx
  layout/        Nav.tsx, Footer.tsx
  providers/     SmoothScroll.tsx
  sections/      17 page-section components
  ui/            16 atomic UI primitives
```

### Known Orphans / Issues

| File | Issue |
|:---|:---|
| `src/data/articles.ts` | 2-line re-export of `./insights` — no value, remove |
| `src/data/works.ts` | 2-line re-export of `./work` — no value, remove |
| `src/app/gallery/page.tsx` | Physical file exists AND `/gallery` is a redirect in config — one is redundant |
| `Clients.tsx` | Not imported from `page.tsx` on homepage — orphaned or intentionally hidden |

---

## C. Design System & UI

### Atomic Components

| Component | Purpose |
|:---|:---|
| `PillButton` | Primary CTA — pill border, fill-from-bottom, per-letter rolling animation |
| `SectionEyebrow` | Full-width hairline row with left/index/right labels |
| `Marquee` | Infinite horizontal text loop |
| `WordRail` | Full-bleed pill-tag strip |
| `Divider` | 1px `var(--line)` rule |
| `ProjectCard` | Absolute-positioned scattered work card with parallax |
| `Cursor` | Custom cursor — 3 modes: dot / hand / label-pill |

### Animation Architecture

| System | What it does |
|:---|:---|
| Lenis | Smooth scroll globally; `window.lenis` attached for cross-component access |
| GSAP ScrollTrigger | Scroll parallax (Profile cards, Intro video, Hero card), pinning (Testimonials), character reveals |
| GSAP Timeline | 4.5s load intro in `HeroIntro.tsx` — wordmark drop, gradient wipe, video fade, nav reveal |
| CSS Animations | `eyebrow-shimmer`, `glad-gradient-flow`, marquee fallback |
| React intervals | Team photo rotator 1.8s (Tenure, FAQ), word cycling 3.2s (Pricing, Tenure) |

### Token Deviations Found (Needs Fixing)

- `Testimonials.tsx` overrides `t-marquee` inline: `fontSize: 'clamp(0px, 16vw, 270px)'` — breaks token (correct: 185px).
- `Pricing.tsx` overrides `t-display-sm`: `clamp(0px, 9vw, 160px)` — breaks token (correct: 150px max).
- `Tenure.tsx` overrides `t-display-sm`: `clamp(0px, 10vw, 175px)` — breaks token.
- `Awards.tsx`, `Intro.tsx` use raw `text-[17px]`, `text-[18px]` instead of `.t-body-sm`, `.t-label`.

---

## D. Content, Data & Integrations

### Data Files (No CMS — All Hardcoded TS)

| File | Contents |
|:---|:---|
| `data/site.ts` | Nav links, social URLs, contact details, footer copy |
| `data/work.ts` | 6 portfolio projects with images, slugs, layout positions |
| `data/services.ts` | 5 services with full body copy |
| `data/products.ts` | 2 products (GLAD HMS, SettleDesk) with full copy |
| `data/insights.ts` | 5 articles with full body copy |
| `data/testimonials.ts` | 3 verified client testimonials |
| `data/faq.ts` | 8 FAQ items |
| `data/engagement.ts` | 3 pricing budget bands |
| `data/process.ts` | 8 process step rows |
| `docs/extracted-copy.md` | Full copy inventory from previous design — source of truth |

### Integrations

| Integration | Status |
|:---|:---|
| Analytics | None — zero GA4, Plausible, or PostHog |
| Email | STUB — contact API logs to console, no email sent |
| CMS | None |
| Error monitoring | None |
| Payments | None |
| Env vars | Zero `process.env` references anywhere in `src/` |

---

## E. Performance, SEO & Accessibility

### Images

- `unoptimized` flag on nearly all `<Image>` components — disables WebP/AVIF conversion. `sharp` is installed but unused. Remove `unoptimized` and add correct `sizes` props.
- Footer filmstrip uses generic `alt="GLAD Studio portfolio visual N"` — not descriptive.

### Fonts

- General Sans loaded via `@import url(fontshare...)` inside CSS — render-blocking. Move to `<link rel="preconnect">` + `<link rel="preload">` in `layout.tsx`.

### SEO

- Sitemap emits `/portfolio/...` URLs that 301-redirect to `/work/...`. Fix to emit canonical `/work/...` URLs directly.
- `metadataBase: https://gladstudio.net` — verify domain is live before OG images work.

### Accessibility Gaps

- `cursor: none !important` applied globally above 810px. If cursor JS fails, users have no visible cursor. Add CSS fallback.
- FAQ `max-h-[260px]` clips long answers — test all 8.
- Mobile testimonials background marquee: `animate-marquee` Tailwind class may not exist in `globals.css` — silently fails.

---

## F. Security & Code Quality

- Contact API is a stub — all leads are silently lost. Critical before launch.
- `eslint@9.39.5` deprecated — upgrade to latest ESLint 9.x.
- `npm audit` reports 1 high-severity vulnerability.
- No Prettier config — formatting inconsistencies exist.
- `window as unknown as { lenis?: Lenis }` cast repeated in 3 files — extract to `globals.d.ts`.

---

## G. Deployment

| Item | Status |
|:---|:---|
| Hosting | Vercel (inferred from `vercel.svg`, `.vercel` in `.gitignore`) |
| Deploy config | No `vercel.json` — Vercel auto-detects Next.js |
| CI/CD | None — no GitHub Actions |
| Domain | `gladstudio.net` in `metadataBase` and JSON-LD |

---

## H. Design Comparison: GLAD vs Palmer Reference

Palmer is a Framer personal portfolio template with:
- Pure black background, white text, Inter/Inter Display font (400–900)
- Very airy, minimal layout — generous spacing
- Minimal right-aligned nav
- Sections: Hero, Featured Work, About, Services list, Testimonials, Process, Contact CTA, Footer
- Single-person positioning (photographer/freelancer) — DOES NOT MAP 1:1 to a team studio

### Section-by-Section Gap Analysis

**Hero**
- Palmer: 80–100px+ full-width headline, left-aligned. GLAD uses `t-heading` at 52px max — intentionally smaller because the wordmark (250px) carries display weight. Verify this is intentional.
- GLAD's video card, CTA button, eyebrow/WordRail all match Palmer patterns. Load animation is more theatrical (4.5s vs simple fade) — `PLAY_INTRO_EVERY_LOAD = true` is a P0 bug.

**Navigation**
- Palmer: dark background, transparent nav, links right-aligned.
- GLAD: light `--bg` background, centered links with rolling animation, "Based in Vrindavan" right block. The centered link column is unusual — most editorial sites align right. The "Based in भारत" block is a strong differentiator — keep.

**Services**
- Both: full-width bordered rows, numbered list, cursor-following image preview. GLAD matches the reference almost exactly. Strong.

**Profile / Team**
- Palmer: single person photo + career paragraph.
- GLAD: 4-person scattered absolute-positioned cards with `mix-blend-mode: difference` statement text. Superior adaptation for a team studio. The awards/career timeline from Palmer correctly excluded.

**Testimonials**
- Palmer: simple card grid.
- GLAD: scroll-pinned with floating cards + giant background marquee — significantly more theatrical. Client logos absent from cards — consider adding.

**Pricing**
- Not in Palmer. GLAD's cycling headline animation is a differentiator. All 3 tiers look visually equal — add a recommended tier treatment.

**FAQ**
- Palmer: simple left-aligned accordion.
- GLAD: 2-column layout with rotating team photo, `mix-blend-mode: difference` overlapping text. More sophisticated. Test for `max-h` overflow.

**Footer**
- GLAD's is substantially richer: filmstrip, WordRail, mission text, CTA, 5 link columns, giant watermark. Consider trimming the word rail (it repeats from other sections).

---

## Suggested Next Steps

### P0 — Fix Before Going Live

1. **Wire contact form** — replace stub in `/api/contact/route.ts` with Resend / SendGrid.
2. **Fix `PLAY_INTRO_EVERY_LOAD = true`** in `HeroIntro.tsx` — set to `false` for production.
3. **Remove `unoptimized` from all `<Image>` components** — add correct `sizes` props. Major perf win.
4. **Fix sitemap** — emit `/work/...` canonical URLs, not `/portfolio/...` redirects.

### P1 — High Impact

5. **Fix mobile Testimonials `animate-marquee`** — verify/add the CSS keyframes in `globals.css`.
6. **Move fonts from CSS `@import` to `<link rel="preload">`** in `layout.tsx` — LCP improvement.
7. **Add analytics** — Plausible or GA4. Zero traffic visibility today.
8. **Resolve `Clients.tsx` orphan** — import it or delete it.
9. **Add recommended tier treatment** to middle pricing card (accent border or `bg-surface-2` fill).

### P2 — Medium Impact

10. **Standardize inline font sizes to type tokens** — Intro, Awards, Testimonials use raw px values.
11. **Fix `Pricing.tsx` and `Tenure.tsx` `display-sm` overrides** — bring back to `150px` max.
12. **Fix footer filmstrip `alt` text** — use descriptive project titles.
13. **Audit FAQ `max-h-[260px]`** — test all 8 answers for overflow; switch to GSAP height animation.
14. **Remove `lucide-react`** if unused — reduce bundle.
15. **Extract `window.lenis` typing** to `src/types/global.d.ts`.

### P3 — Polish

16. **Add cursor CSS fallback** — `cursor: auto` on `<body>`, overridden after JS mounts.
17. **Add client logos to testimonial cards** — increases credibility.
18. **Add Sentry** (free tier) for JS error monitoring before launch.
19. **`npm audit fix`** — address 1 high-severity vulnerability.
20. **Add GitHub Actions CI** — `npm run lint && npm run build` on every PR.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
