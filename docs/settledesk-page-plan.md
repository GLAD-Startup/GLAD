# SettleDesk Landing Page Build Plan

This document outlines the complete structural, architectural, brand, content, and visual strategy for implementing the SettleDesk marketing landing page at `/products/settledesk` on the Glad Studio agency website (`gladstudio.net`).

---

## 1. ROUTE & REUSABLE LAYOUT STRUCTURE

### Exact Route Placement

- **File Path**: [src/routes/products.settledesk.tsx](file:///c:/Users/imsto/Desktop/GLAD/src/routes/products.settledesk.tsx)
- **TanStack Router Mapping**: Static route `/products/settledesk` registered as a child under `src/routes/products.tsx` layout `<Outlet />`. In TanStack Router, static paths (`products.settledesk.tsx`) automatically take precedence over dynamic slug matchers (`products.$slug.tsx`).

### Reusable Product-Page Architecture (For SettleDesk, RESTOOS, & Future Products)

To ensure future agency product pages (like RESTOOS) are 90% content-driven rather than requiring full page re-engineering, we establish a decoupled **Data + Template** pattern:

1. **Content Data Schema (`src/data/products/settledesk.ts`)**:
   - Holds structured product metadata (SEO tags, hero copy, feature blocks, tier specs, pricing matrices, testimonials, FAQs, visual asset paths).
   - Strongly typed via a shared interface (`ProductPageConfig`) defined in `src/types/product-page.ts`.

2. **Shared Product Shell Components (`src/components/products/`)**:
   - `ProductHero`: Reusable hero container supporting custom interactive product showcases.
   - `ProductFeatureSplit`: Alternating row layout for core feature showcases with browser/device mockups.
   - `ProductThreeTier`: 3-column architecture/role section.
   - `ProductPricingTable`: Standardized SaaS pricing matrix component.
   - `ProductFAQAccordion`: Accordion for technical and commercial FAQs.
   - `ProductCTA`: High-conversion footer lead-capture block.

3. **Route Component (`src/routes/products.settledesk.tsx`)**:
   - Assembles the shared product components with `settledeskData` imported from `src/data/products/settledesk.ts`, injecting SettleDesk-specific custom showcases (like the Deal Cascade Simulator).

---

## 2. BRAND TREATMENT & COLOR RULES

Glad Studio's brand identity serves as the **frame** — providing the navbar, footer, typography, spacing scale, and container rhythm. SettleDesk's brand colors are strictly contained within product-specific UI mockups and accents to avoid clashing with the agency's house palette.

### Glad Studio House Tokens (The Frame)

- **Background**: `--background` (`#09090b` Dark Slate / `#faf8f5` Light Warm Alabaster)
- **Typography**: `"Space Grotesk"` (Headings) + `"Inter"` (Body)
- **Agency Accent Color**: `--brand` (`#22c55e` Dark Neon Green / `#059669` Light Emerald) + `--brand-2` (`#a3e635` / `#ffc72c`)
- **Card Containers**: `surface-card`, `glass-card` with neo-brutalist 4px offset borders (`var(--shadow-card)`)

### SettleDesk Contained Product Accents (The Product)

SettleDesk's identity is defined by **Executive Gold** and **Deep Navy**:

- **SettleDesk Accent Gold**: `#e5b84c` / `oklch(0.85 0.1 80)`
- **SettleDesk Deep Navy**: `#263654` / `oklch(0.3 0.05 260)`

#### Strict Brand Boundaries

1. **Rule 1 (Frame Integrity)**: Global page backgrounds, agency Header, agency Footer, primary agency navigation, and global buttons MUST use Glad Studio tokens (`var(--brand)`, `btn-primary`, `var(--background)`).
2. **Rule 2 (Product Isolation)**: SettleDesk Gold (`#e5b84c`) and Navy (`#263654`) are ONLY permitted inside:
   - SettleDesk UI device frames & browser window mockups.
   - SettleDesk product pills, feature tags, and status badges (e.g. `bg-[#e5b84c]/10 text-[#e5b84c] border-[#e5b84c]/30`).
   - The interactive SettleDesk Deal Cascade Simulator.
3. **Rule 3 (No Palette Hijacking)**: SettleDesk Gold MUST NOT replace Glad Studio's green brand color on site-wide CTA buttons, global floating footers, or mobile navigation controls.

---

## 3. PAGE ARCHITECTURE & CONTENT FLOW

### Section Order & Purpose

1. **Page Meta & SEO**: Head configuration for `/products/settledesk` (Title, Description, Canonical URL, OpenGraph, JSON-LD Schema).
2. **Agency Header**: Standard Glad Studio top navigation bar ([Header.tsx](file:///c:/Users/imsto/Desktop/GLAD/src/components/site/Header.tsx)).
3. **Hero Section (Selected Direction)**: The "Live Tri-Party Deal Cascade" hero.
4. **Social Proof & Live Operations Bar**: Key metrics bar (`500+ Brokers Onboarded`, `10,000+ Units Managed`, `99.9% Uptime`, `Bank-Grade Security`).
5. **Three-Tier Architecture Showcase**: "One Platform, Three Experiences" breaking down Super Admin, Client Admin, and Broker Mobile App roles.
6. **Signature Element — The Interactive Deal Cascade Simulator**: Live visual demonstrator showing how a broker submitting a contract on mobile triggers automatic admin split calculations and payout approvals.
7. **Deep-Dive Feature Matrix**: 4 alternating rows with browser mockups showcasing:
   - Property & Portfolio Catalog Management.
   - Version-Controlled Commission Matrix Engine.
   - Automated Deal & Payout Approvals.
   - Real-Time Device Sync across iOS, Android, and Web.
8. **Security & Multi-Tenant Isolation**: Row-Level Security (RLS) breakdown, immutable audit logs, and PostgreSQL tenant isolation.
9. **Interactive ROI & Time-Saved Calculator**: Calculator allowing agency prospects to slide agent headcount and calculate hours saved on manual commission splits.
10. **Simple Pricing Tiers**: Starter (10 agents), Professional (50 agents - Most Popular), Enterprise (Unlimited).
11. **Client Testimonials Accordion**: 3 verified brokerage testimonials with interactive quote cards.
12. **FAQ Accordion**: 6 key questions regarding migration, trial terms, database security, and custom subdomain setup.
13. **Final Agency CTA & Booking Modal**: High-impact lead capture section with "Start 30-Day Free Trial" modal trigger and Cal.com "Book a Discovery Call" embed.
14. **Agency Footer**: Standard Glad Studio footer ([Footer.tsx](file:///c:/Users/imsto/Desktop/GLAD/src/components/site/Footer.tsx)).

---

### Hero Proposals & Recommendation

#### Direction A: The "Generic SaaS Headline + Floating 3D Cards" (REJECTED)

- _Structure_: Standard bold text headline + subheadline + two CTA buttons ("Start Trial", "Book Demo") + static floating 3D graphic.
- _Why Rejected_: Generic boilerplate. Does not demonstrate what makes SettleDesk unique.

#### Direction B: The "Live Tri-Party Deal Cascade Hero" (RECOMMENDED)

- _Headline_: `"Run Your Entire Brokerage. On One Platform."`
- _Subhead_: `"SettleDesk unifies property catalogs, agent mobile apps, lead tracking, and automated commission payouts into one real-time operational backbone."`
- _Hero Visual_: An interactive, split-screen UI simulator right in the hero stage. On the left, a simulated Mobile Broker App closes a deal; in the center, the Client Admin Dashboard updates the unit status to "Sold" and calculates the split; on the right, the Super Admin revenue meter ticks up in real time.
- _Why Recommended_: Immediately communicates the core essence of SettleDesk — real-time synchronization between three distinct user roles without spreadsheets or fragmented software.

---

### The ONE Signature Element: "The Interactive Commission Split & Deal Cascade Simulator"

- **What it is**: An interactive, step-by-step visual engine where visitors can select a deal value (e.g. `$1,200,000`), pick an agent split tier (e.g. `80/20 with $15,000 Cap`), and watch SettleDesk instantly calculate:
  1. Gross Commission Income (GCI)
  2. Agent Payout vs. Brokerage Retained Split
  3. Franchise & Royalty Reductions
  4. Real-time approval payload sent to the mobile app
- **Justification**: Real estate brokerage owners spend dozens of hours every month manually calculating multi-tiered splits and disputing payouts with agents. This simulator turns SettleDesk's hardest technical capability — its version-controlled commission matrix engine — into an engaging, memorable visual proof point that no generic CRM landing page offers.

---

## 4. CONTENT GAPS & SHOPPING LIST

| Item Needed                                      | Source / Action Plan                                                                                                                         |
| :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Interactive Commission Calculator Logic**      | Drafted in code using extracted math from `commission_plans` schema.                                                                         |
| **High-Res App UI Screenshots / Device Mockups** | Drafted using CSS/HTML simulated component frames with extracted 3D graphics (`hero-3d.png`, `phone-3d.png`, `commission-3d.png`).           |
| **FAQ Accordion Content**                        | Drafted using technical specs from `superadmin-portal-architecture.md` (covering multi-tenant RLS security, custom subdomains, trial terms). |
| **Interactive ROI Slider Values**                | Drafted based on standard industry metrics (average 4 hours saved per agent per month).                                                      |
| **Cal.com Scheduling Config**                    | Reused directly from existing agency setup (`data-cal-link="arjun-rajput-2mdsis"`).                                                          |

---

## 5. CODEBASE RISKS & MITIGATIONS

1. **Risk 1: TypeScript Build Failures on Placeholder Routes**
   - _Issue_: Existing placeholder routes `src/routes/products.$slug.tsx` and `src/routes/products.index.tsx` contain broken imports (`@crm/components/site/Header`) pointing outside the GLAD workspace, causing `npx tsc --noEmit` to fail.
   - _Mitigation_: Our new file `src/routes/products.settledesk.tsx` will use strict, verified relative imports from `@/components/site/` only. We will fix or clean the broken placeholder files if authorized during execution.

2. **Risk 2: TanStack Router Code-Generation Sync**
   - _Issue_: Creating a new route file requires Vite to trigger TanStack Router's auto-generation for `src/routeTree.gen.ts`.
   - _Mitigation_: Run `npm run dev` or `vite build` immediately after creating `src/routes/products.settledesk.tsx` so `routeTree.gen.ts` updates cleanly.

3. **Risk 3: Hydration Mismatches with Theme / LocalStorage**
   - _Issue_: Theme state or window dimensions in Framer Motion / Lenis causing hydration warnings on SSR.
   - _Mitigation_: Wrap browser-only state hooks inside `useEffect` with `isClient` guards, matching the pattern in `Header.tsx` and `Footer.tsx`.

---

## 6. SELF-REVIEW REPORT

### Self-Review Checks & Adjustments Made

1. **Hero Evaluation**: Initially considered a standard static feature card grid. Replaced with the "Live Tri-Party Deal Cascade Hero" because real estate brokerages care about multi-role sync (field agents + office admins + platform owners), which static hero cards fail to communicate.
2. **Signature Element Evaluation**: Considered a generic video background. Replaced with the "Interactive Commission Split Simulator" because manual commission split calculation is the #1 pain point of brokerage owners, making an interactive split calculator specifically relevant to SettleDesk.
3. **Brand Treatment Evaluation**: Ensured SettleDesk's Gold accents are restricted to contained product elements so they never override Glad Studio's green house branding (`--brand: #22c55e`).

---

_End of build plan document. Awaiting user approval._
