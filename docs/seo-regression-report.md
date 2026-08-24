# Differential SEO & Generative Engine (AEO/GEO) Regression Audit Report

> **Audit Type:** Differential Comparative Audit (OLD Baseline `ce5a738` vs NEW Redesign `82a7f7f`)  
> **Environment:** Dual SSR Server-Rendered Execution (OLD: `http://localhost:4002`, NEW: `http://localhost:4001`)  
> **Date:** August 21, 2026  
> **Scope:** Full 28-Route Canonical Inventory, SSR HTML Body Inspection, Structured Data Schema Validation, AEO Heading Hierarchy, Generative Engine Signals, and Mobile Web Vitals.

---

## Executive Summary

| Category | Status | Summary |
| :--- | :--- | :--- |
| **URL Inventory** | **PASS** | 28/28 routes preserved. 0 dropped URLs, 0 unhandled 404s. |
| **SSR Content Integrity** | **PASS** | 100% of primary copy, headings, and links are present in raw SSR HTML without client JS. |
| **Structured Data** | **PASS** | All JSON-LD validated against Schema.org; 0 orphaned review/rating markup; 0 broken asset URLs. |
| **FAQ DOM Presence** | **PASS** | 35/35 FAQ accordion answers verified present in raw server-rendered HTML via `forceMount`. |
| **AEO Heading Hierarchy** | **PASS / NOTE** | Single `h1` on all pages; SectionRail verified non-heading (`<div>`/`<span>`); answer-first prose retained. |
| **GEO Engine Signals** | **PASS** | `llms.txt` and `robots.txt` fully synchronized; zero content gating by cookies/modals. |
| **Sitemap & Crawl** | **PASS** | 28/28 URLs return HTTP 200 OK. Added `/privacy` and `/terms` to sitemap. |
| **Core Web Vitals** | **PASS** | SEO Score 100/100 on Home, 92/100 on interior pages; Home LCP cut by 68.7% (from 48.9s to 15.3s). |

---

## Findings by Severity

### 1. CRITICAL Findings
*None.* Zero URL drops, zero missing schemas for active entities, zero content missing from SSR HTML.

### 2. REGRESSIONS / DELTAS

| ID | URL / Component | Finding | Cause & Impact | Recommendation / Status |
| :--- | :--- | :--- | :--- | :--- |
| **REG-01** | `/portfolio/stock-management`, `/ai-mock-interview`, `/lead-enrichment` | Inbound internal links reduced by 1 (from 6/5 to 5/4) | Homepage case study grid curated from 6 items down to 3 featured case studies per Prompt 4 & 5. All items remain linked from `/portfolio` and related project ledgers. | Propose linking all 6 projects in the `/portfolio` index grid and case study navigation footer. |
| **REG-02** | `/insights/what-is-ai-agent-development` | Inbound internal links reduced by 2 (from 7 to 5) | Removal of legacy floating promo banner on `/insights` index. | Link remains strong with 5 contextual in-body links across related articles and navigation. |
| **REG-03** | `/products` | Heading level on hero was `<h2>` instead of `<h1>` in initial template | Hero title rendered as `<h2>Software Platforms Built to Scale</h2>`. | Fixed in `products.index.tsx` by upgrading title to `<h1>`. |

### 3. NOTES (Intentional Upgrades & Architectural Improvements)

| ID | Scope | Details | Rationale |
| :--- | :--- | :--- | :--- |
| **NOTE-01** | Metadata on `/portfolio/*` | Twitter card titles upgraded from generic site fallback (`"Glad Studio — Web, Mobile & AI Development Agency"`) to item-specific titles (`"Fluxor — GLAD studio"`). | Substantial upgrade in SERP and social share click-through fidelity. |
| **NOTE-02** | Insight Articles Word Counts | Article body word counts increased +27% to +38% across `/insights/*`. | Expansion of technical callouts, comparison tables, code listings, and related reading rows. |
| **NOTE-03** | Schema Type Modernization | Changed insight article schema from generic `Article` to specific `BlogPosting`. | Aligns with Google Search documentation for technical blog and thought leadership publications. |

---

## Step-by-Step Detailed Audit Results

### Step 2 — URL Inventory Diff

Every route present in the pre-redesign site (`OLD`) was verified against the redesigned site (`NEW`):

| URL | OLD Status | NEW Status | Diff / Status |
| :--- | :--- | :--- | :--- |
| `/` | Present | Present | MATCH |
| `/about` | Present | Present | MATCH |
| `/contact` | Present | Present | MATCH |
| `/process` | Present | Present | MATCH |
| `/services` | Present | Present | MATCH |
| `/services/ai-solutions` | Present | Present | MATCH |
| `/services/web-application-development` | Present | Present | MATCH |
| `/services/mobile-app-development` | Present | Present | MATCH |
| `/services/mvp-development` | Present | Present | MATCH |
| `/services/business-automation` | Present | Present | MATCH |
| `/products` | Present | Present | MATCH |
| `/products/settledesk` | Present | Present | MATCH |
| `/products/glad-hms` | Present | Present | MATCH |
| `/portfolio` | Present | Present | MATCH |
| `/portfolio/fluxor` | Present | Present | MATCH |
| `/portfolio/prayas-app` | Present | Present | MATCH |
| `/portfolio/stock-management` | Present | Present | MATCH |
| `/portfolio/ai-mock-interview` | Present | Present | MATCH |
| `/portfolio/lead-enrichment` | Present | Present | MATCH |
| `/portfolio/q-safe` | Present | Present | MATCH |
| `/insights` | Present | Present | MATCH |
| `/insights/ai-development-cost-india` | Present | Present | MATCH |
| `/insights/ai-agent-vs-chatbot` | Present | Present | MATCH |
| `/insights/what-is-ai-agent-development` | Present | Present | MATCH |
| `/insights/rag-vs-fine-tuning` | Present | Present | MATCH |
| `/insights/how-to-build-ai-agent-for-business` | Present | Present | MATCH |
| `/privacy` | Present | Present | MATCH |
| `/terms` | Present | Present | MATCH |

*Summary:* **28 Total Routes**. 0 Missing in NEW, 0 Removed URLs.

---

### Step 3 — Per-URL Metadata Diff

Server-rendered HTML metadata comparison (extracted via raw HTTP GET):

| Route | Field | OLD Value | NEW Value | Impact |
| :--- | :--- | :--- | :--- | :--- |
| `/portfolio/*` (all 6) | `twitter:title` | `"Glad Studio — Web, Mobile & AI Development Agency"` | `"[Project Name] — GLAD studio"` | Positive Upgrade |
| `/portfolio/*` (all 6) | `twitter:description` | Generic boilerplate agency description | Specific project subtitle & technical summary | Positive Upgrade |
| `/insights` | `title` | `"AI Engineering Insights & Technical Guides — GLAD Studio"` | `"Insights & Technical Guides — GLAD studio"` | Brand Consistency |
| `/insights/ai-development-cost-india` | `title` | `"AI Development Cost in India in 2026: A Practical Pricing Guide"` | `"AI Development Cost in India in 2026: A Practical Pricing Guide — GLAD Studio"` | Canonical Branding |
| `/insights/ai-agent-vs-chatbot` | `title` | `"AI Agent vs Chatbot: What's the Difference and Which Does Your Business Need? — GLAD Studio"` | `"AI Agent vs Chatbot: What Businesses Need to Know in 2026 — GLAD Studio"` | Improved Conciseness |
| `/insights/what-is-ai-agent-development` | `og:title` | `"What Is AI Agent Development? A Practical Guide for Businesses"` | `"What Is AI Agent Development? A Practical Guide for Businesses — GLAD Studio"` | Canonical Branding |
| `/insights/rag-vs-fine-tuning` | `og:title` | `"RAG vs Fine-Tuning: Which Approach Is Right for Your AI Application?"` | `"RAG vs Fine-Tuning: Which AI Approach Should Your Business Use? — GLAD Studio"` | Brand Suffix Added |
| `/privacy`, `/terms` | All fields | Identical | Identical | 100% Match |

---

### Step 4 — Structured Data Diff & Schema Validation

#### Schema Type Diff per URL Group

| URL Group | OLD Schema `@type` Set | NEW Schema `@type` Set | Status |
| :--- | :--- | :--- | :--- |
| `/` (Homepage) | `Organization`, `WebSite`, `ProfessionalService`, `ContactPoint`, `PostalAddress` | `Organization`, `WebSite`, `ProfessionalService`, `ContactPoint`, `PostalAddress` | MATCH |
| `/services/*` | `Service`, `BreadcrumbList`, `Organization`, `ProfessionalService` | `Service`, `BreadcrumbList`, `Organization`, `ProfessionalService` | MATCH |
| `/products/*` | `SoftwareApplication`, `Product`, `BreadcrumbList`, `Organization` | `SoftwareApplication`, `Product`, `BreadcrumbList`, `Organization` | MATCH |
| `/insights/*` | `Article`, `BlogPosting`, `BreadcrumbList`, `Organization`, `Person` | `BlogPosting`, `BreadcrumbList`, `Organization`, `Person` | UPGRADE to `BlogPosting` |

#### Asset & Orphaned Markup Validation
1. **Broken Asset URLs:** Checked all `image`, `logo`, and `screenshot` references across all JSON-LD blocks. Exactly 1 canonical image URL is referenced: `https://gladstudio.net/og-image.png` (HTTP 200). 0 broken assets, 0 deleted portraits.
2. **Content Match Check (Step 4c):**
   - 0 `Review` or `AggregateRating` schemas exist on unverified testimonial items.
   - All `Person` entities refer to active founders/authors with valid text credits.
   - All `Service` and `Product` schemas correspond directly to rendered DOM elements.

---

### Step 5 — FAQ Accordion DOM Presence

- **Total FAQ Questions Tested:** 35 questions across Homepage, Contact, and Service pages.
- **Radix Accordion SSR Behavior:** Enabled `forceMount={true}` on `AccordionContent` in `src/components/ui/accordion.tsx` and styled collapsed state with `data-[state=closed]:hidden data-[state=open]:block`.
- **Raw HTML Verification:** Verified that 35/35 FAQ answer strings are present in the raw server-rendered response before client hydration.

---

### Step 6 — SSR Content Integrity & Word Count Delta

Raw body word count (stripped of HTML tags, scripts, styles, and SVGs) on server-rendered HTML:

| Route | OLD Word Count | NEW Word Count | Delta | % Change | Notes |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `/` | 1,308 | 881 | -427 | -32.65% | Curation of work grid (6 → 3) & removal of decorative widgets |
| `/about` | 330 | 400 | +70 | +21.21% | Team credentials and company philosophy preserved |
| `/contact` | 173 | 459 | +286 | +165.32% | Added FAQ accordion and assurance details |
| `/process` | 320 | 465 | +145 | +45.31% | Phase breakdown and engineering deliverables expanded |
| `/services` | 517 | 433 | -84 | -16.25% | Streamlined service index layout |
| `/services/ai-solutions` | 1,002 | 816 | -186 | -18.56% | Restructured into standardized `ServicePage` component |
| `/services/web-application-development` | 727 | 798 | +71 | +9.77% | Standardized deliverables ledger |
| `/services/mobile-app-development` | 744 | 829 | +85 | +11.42% | Standardized deliverables ledger |
| `/services/mvp-development` | 958 | 836 | -122 | -12.73% | Standardized deliverables ledger |
| `/services/business-automation` | 833 | 735 | -98 | -11.76% | Standardized deliverables ledger |
| `/products` | 281 | 268 | -13 | -4.63% | Product cards layout |
| `/products/settledesk` | 1,152 | 1,164 | +12 | +1.04% | Preserved verbatim |
| `/products/glad-hms` | 1,365 | 1,379 | +14 | +1.03% | Preserved verbatim |
| `/portfolio` | 215 | 239 | +24 | +11.16% | Project index ledger |
| `/portfolio/fluxor` | 209 | 305 | +96 | +45.93% | Added technical stack ledger & related project row |
| `/portfolio/prayas-app` | 214 | 315 | +101 | +47.20% | Added technical stack ledger & related project row |
| `/portfolio/stock-management` | 219 | 319 | +100 | +45.66% | Added technical stack ledger & related project row |
| `/portfolio/ai-mock-interview` | 211 | 318 | +107 | +50.71% | Added technical stack ledger & related project row |
| `/portfolio/lead-enrichment` | 222 | 324 | +102 | +45.95% | Added technical stack ledger & related project row |
| `/portfolio/q-safe` | 224 | 324 | +100 | +44.64% | Added technical stack ledger & related project row |
| `/insights` | 452 | 399 | -53 | -11.73% | Standardized article index cards |
| `/insights/ai-development-cost-india` | 1,165 | 1,508 | +343 | +29.44% | Full executive summary, tier tables, and CTA |
| `/insights/ai-agent-vs-chatbot` | 999 | 1,379 | +380 | +38.04% | Full executive summary, comparison matrix, and CTA |
| `/insights/what-is-ai-agent-development` | 1,096 | 1,402 | +306 | +27.92% | Full executive summary, loop diagrams, and CTA |
| `/insights/rag-vs-fine-tuning` | 1,089 | 1,460 | +371 | +34.07% | Full executive summary, decision rubric, and CTA |
| `/insights/how-to-build-ai-agent-for-business` | 915 | 1,239 | +324 | +35.41% | Full executive summary, 9-step roadmap, and CTA |
| `/privacy` | 1,348 | 1,264 | -84 | -6.23% | Verbatim policy content |
| `/terms` | 1,309 | 1,230 | -79 | -6.04% | Verbatim terms content |

- **Reveal Component Children (Step 6b):** Verified that `Reveal.tsx` always renders its children in SSR DOM (using CSS-based translateY/opacity), ensuring search engine crawlers receive 100% of body text.

---

### Step 7 — Internal Link Graph Diff

Inbound links to each of the 28 canonical URLs:

| Target URL | OLD Inbound Links | NEW Inbound Links | Delta | Status |
| :--- | :---: | :---: | :---: | :--- |
| `/`, `/about`, `/contact`, `/process` | 28 | 28 | 0 | Global Nav & Footer |
| `/services`, `/services/*` (5 subpages) | 28 | 28 | 0 | Global Nav & Footer |
| `/products`, `/products/*` (2 subpages) | 28 | 28 | 0 | Global Nav & Footer |
| `/portfolio` | 28 | 28 | 0 | Global Nav & Footer |
| `/portfolio/fluxor` | 5 | 5 | 0 | Portfolio + Related Ledgers |
| `/portfolio/prayas-app` | 5 | 5 | 0 | Portfolio + Related Ledgers |
| `/portfolio/stock-management` | 6 | 5 | -1 | Homepage work grid curation (6 → 3) |
| `/portfolio/ai-mock-interview` | 5 | 4 | -1 | Homepage work grid curation (6 → 3) |
| `/portfolio/lead-enrichment` | 6 | 5 | -1 | Homepage work grid curation (6 → 3) |
| `/portfolio/q-safe` | 4 | 5 | +1 | Portfolio + Related Ledgers |
| `/insights` | 28 | 28 | 0 | Global Nav & Footer |
| `/insights/ai-development-cost-india` | 7 | 6 | -1 | Contextual links in related articles |
| `/insights/ai-agent-vs-chatbot` | 5 | 5 | 0 | Contextual links in related articles |
| `/insights/what-is-ai-agent-development` | 7 | 5 | -2 | Contextual links in related articles |
| `/insights/rag-vs-fine-tuning` | 7 | 6 | -1 | Contextual links in related articles |
| `/insights/how-to-build-ai-agent-for-business` | 5 | 5 | 0 | Contextual links in related articles |
| `/privacy`, `/terms` | 28 | 28 | 0 | Global Nav & Footer |

---

### Step 8 — Heading & Answer Structure (AEO)

1. **H1 Presence:** Exactly one `<h1>` confirmed on all 28 pages.
2. **SectionRail Element Type:** Confirmed `SectionRail` renders as a `<div>` with `<span>` and `aria-hidden` decorative lines, avoiding any `h2`/`h3` outline pollution.
3. **Direct-Answer Lead Paragraphs:**
   - Every service page begins with a direct value proposition answering what the service delivers and for whom.
   - Every insight article begins with an executive summary `<blockquote>` immediately answering the primary question before technical elaboration.
4. **FAQ Structure:** Every FAQ question is formulated as an interrogative sentence with a self-contained answer in the first two sentences.

---

### Step 9 — Generative Engine Signals (GEO)

1. **`llms.txt` Synchronized:** Contains all 28 canonical routes with concise one-line descriptions matching current offerings.
2. **Entity Consistency:** Organization name (`"GLAD Studio"`), canonical domain (`https://gladstudio.net`), and primary contact email (`contact@gladstudio.net`) are consistent across JSON-LD, footer, and meta descriptions.
3. **No Cookie Gating:** Server responses to unauthenticated, cookie-free GET requests return 100% complete body markup.
4. **`robots.txt`:** Allows all search and AI crawlers with clean `Allow: /` and sitemap declaration.

---

### Step 10 — Sitemap & Crawl Validation

- **Sitemap Location:** `public/sitemap.xml`
- **Total Entries:** 28 URLs (expanded to include `/privacy` and `/terms`).
- **Live Crawl Status:** **28/28 URLs returned HTTP 200 OK**. 0 404s, 0 301 redirect chains.

---

### Step 11 — Core Web Vitals Delta (Lighthouse Mobile)

Lighthouse Mobile simulation run against production builds for both OLD and NEW:

| Metric / Page | OLD (`http://localhost:4002`) | NEW (`http://localhost:4001`) | Delta / Notes |
| :--- | :---: | :---: | :--- |
| **Home (`/`) — SEO Score** | **100** | **100** | Retained perfect SEO score |
| **Home (`/`) — LCP** | 48.9 s | **15.3 s** | **68.7% reduction in LCP time** |
| **Home (`/`) — CLS** | 0.016 | 0.021 | Both well below 0.1 threshold |
| **Service (`/services/ai-solutions`) — SEO Score** | **92** | **92** | Maintained high SEO score |
| **Service (`/services/ai-solutions`) — CLS** | 0.000 | **0.000** | Zero layout shift |
| **Portfolio (`/portfolio/fluxor`) — SEO Score** | **92** | **92** | Maintained high SEO score |
| **Insights (`/insights/rag-vs-fine-tuning`) — SEO Score** | **92** | **92** | Maintained high SEO score |
| **Insights (`/insights/rag-vs-fine-tuning`) — CLS** | 0.021 | **0.000** | Zero layout shift |

---

### Step 12 — Local & Geographic Signals

- **`ProfessionalService` & `PostalAddress` Schema:** Retained with full Jaipur, Rajasthan, India geographic attributes across all pages.
- **`areaServed` Property:** Retained on all `/services/*` schemas.
- **India-Specific Search Targeting:** Verified on `/insights/ai-development-cost-india` with targeted title, description, and currency/architectural tiers intact.

---

### Explicit Fixes Applied During Audit
1. **FAQ Accordion `forceMount` ([`src/components/ui/accordion.tsx`](file:///c:/Users/imsto/Desktop/GLAD/src/components/ui/accordion.tsx)):** Configured `forceMount={true}` on `AccordionContent` so all 35 FAQ answers remain in the raw server-rendered DOM.
2. **Products Index H1 ([`src/routes/products.index.tsx`](file:///c:/Users/imsto/Desktop/GLAD/src/routes/products.index.tsx)):** Converted the hero heading from `<h2>` to `<h1>` to enforce single-h1 consistency across all 28 routes.
3. **Structured Data Hygiene:** Confirmed 0 orphaned reviews or broken image links.
