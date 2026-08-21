# Full Website Audit & Architectural Blueprint: GLAD Studio (`gladstudio.net`)

**Document Version**: 1.0.0  
**Audit Target**: GLAD Studio Digital Agency & SaaS Platform  
**Purpose**: Complete architectural, visual, UI/UX, and component audit to guide an end-to-end website redesign and redevelopment plan.

---

## 1. Executive Summary & Technology Stack

GLAD Studio (`gladstudio.net`) is a hybrid digital agency and proprietary SaaS product studio based in India. The current website combines:
1. **Agency Services**: Highlighting software development, custom MVPs, mobile applications, AI solutions, and business automation.
2. **Proprietary SaaS Products**: Featuring dedicated product marketing suites for **SettleDesk** (Real Estate Brokerage OS) and **GLAD HMS** (Hospitality Management System).
3. **Portfolio & Case Studies**: 6 in-depth technical case studies across AI, mobile, web, and automation.
4. **Engineering Insights & Thought Leadership**: 5 extensive technical guides on AI development, costs, RAG architectures, and agentic workflows.
5. **Interactive Experiments**: Rich neo-brutalist interactions including draggable sticker boards, 3D Spline embeds, 3D CSS animations, 3D flipping book-cover testimonials, view-transition theme toggles, and live Cal.com API capacity checkers.

### Technology Stack Overview

| Category | Technology / Library | Version / Details | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| **Framework** | TanStack Start (`@tanstack/react-start`) | `^1.167.50` | Full-stack React framework with SSR & Server Functions |
| **UI Library** | React | `^19.2.0` | Core declarative component model |
| **Routing** | TanStack Router (`@tanstack/react-router`) | `^1.168.25` | Type-safe, file-based routing in `src/routes/` |
| **State / Data Fetching** | TanStack Query (`@tanstack/react-query`) | `^5.83.0` | Server-state caching and async query handling |
| **Language** | TypeScript | `^5.8.3` | Strict type-safety across all components and models |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | `^4.2.1` | Inline `@theme` tokens, custom utilities, zero-runtime CSS |
| **CSS Animations** | `tw-animate-css` | `^1.3.4` | Tailwind utility animation bindings |
| **Smooth Scrolling** | Lenis (`lenis`) | `^1.3.25` | Momentum and inertial smooth scroll provider |
| **Motion & Gestures** | Framer Motion (`framer-motion`) | `^12.40.0` | Scroll-triggered reveals, layout transitions, sticker physics |
| **3D Rendering** | Spline (`@splinetool/react-spline`, `runtime`) | `^4.1.0` / `^1.12.97` | Interactive 3D hero scene and graphic prisms |
| **Icons** | Lucide React (`lucide-react`) | `^0.575.0` | Clean vector iconography across all sections |
| **UI Primitives** | Radix UI primitives (`@radix-ui/*`) | Comprehensive suite | Accordion, Dialog, Dropdown, Tabs, Tooltip, Sheet, etc. |
| **Form Handling** | React Hook Form (`react-hook-form` + `zod`) | `^7.71.2` / `^3.24.2` | Client-side validation and form schemas |
| **Scheduling** | Cal.com Embed (`@calcom/embed-react`) | `^1.5.3` | Dynamic calendar booking modal & capacity counting |
| **Charts** | Recharts (`recharts`) | `^2.15.4` | Data visualizations and metric charts |
| **Server / Bundler** | Vite 7 (`vite`) + Nitro (`nitro`) | `^7.3.1` / `3.0.260603-beta` | High-performance bundling and edge/SSR deployment |
| **Notifications** | Sonner (`sonner`) | `^2.0.7` | Modern toast alerts |

---

## 2. Master Route & Sitemap Inventory

The site currently contains **21 distinct public routes**, in addition to standard 404 and error boundaries.

```
/
├── /about                                   (Company mission, values, leadership team)
├── /contact                                 (Contact form, email modal, social channels)
├── /process                                 (6-phase development process roadmap)
├── /privacy                                 (Comprehensive privacy policy)
├── /terms                                   (Standard terms of service)
├── /services                                (Services index overview)
│   ├── /services/mvp-development            (Dedicated MVP engineering page)
│   ├── /services/web-application-development(Custom web apps & SaaS development)
│   ├── /services/mobile-app-development     (Cross-platform Flutter/React Native)
│   ├── /services/ai-solutions               (LLM applications, RAG, AI agents)
│   └── /services/business-automation        (Internal workflows, ETL & automation)
├── /products                                (Proprietary SaaS products index)
│   ├── /products/settledesk                 (Real estate brokerage OS landing page)
│   └── /products/glad-hms                   (Hospitality management system landing page)
├── /portfolio                               (Case studies portfolio index)
│   └── /portfolio/$slug                     (Dynamic project detail route: 6 case studies)
└── /insights                                (Technical articles hub)
    ├── /insights/ai-development-cost-india  (AI pricing & budgeting guide)
    ├── /insights/ai-agent-vs-chatbot        (Architectural comparison guide)
    ├── /insights/what-is-ai-agent-development (Agent loop & tool-calling breakdown)
    ├── /insights/rag-vs-fine-tuning         (LLM retrieval vs adaptation guide)
    └── /insights/how-to-build-ai-agent-for-business (9-step engineering blueprint)
```

### Complete Route Specifications Table

| # | Route URL | File Path | Template Type | Primary Features & Key UI Elements |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `/` | `src/routes/index.tsx` | Landing Page | Hero + Cal.com slot counter, Spline 3D Scene, Tech Logo Strip, 5-Service Bento Grid + 3D Element, Why Us cards, Process overview, Featured Work (6 items), Testimonials Flipping Books, FAQ accordion, Glassmorphism CTA Form, Floating StickerBoard |
| 2 | `/about` | `src/routes/about.tsx` | Informational | About Hero with hand-drawn highlights, 4 Core Values cards with neon offset shadows, 4-Member Leadership Team Grid (Arjun, Jatin, Parth, Somesh) with custom bios and images, CTA Banner |
| 3 | `/contact` | `src/routes/contact.tsx` | Lead Capture | Direct booking button, 2-column AJAX contact form with budget selector, Direct Email Modal trigger, Social links grid, Security assurance badge, Quick contact FAQ |
| 4 | `/process` | `src/routes/process.tsx` | Informational | 6-Step Workflow timeline (Discovery, Requirements, Planning, UI/UX Design, Development, Testing & Launch), Milestone durations, Deliverables checklists, CTA |
| 5 | `/privacy` | `src/routes/privacy.tsx` | Legal | GDPR & Indian DPDP compliant privacy policy, data retention tables, cookies policy, contact address |
| 6 | `/terms` | `src/routes/terms.tsx` | Legal | IP ownership statements, payment milestone terms, client warranties, liability limitations |
| 7 | `/services` | `src/routes/services.index.tsx`| Index Hub | Services Hero, 5-Practice Bento Grid with timeline & tech tags, "How We Deliver" 4-phase summary, Quick FAQ, Contact CTA |
| 8 | `/services/mvp-development` | `src/routes/services.mvp-development.tsx` | Deep-Dive Service | 827-line comprehensive landing page: MVP methodology, Week 2 prototype guarantee, tech stack matrix, 4-phase roadmap, interactive FAQs, booking triggers |
| 9 | `/services/web-application-development` | `src/routes/services.web-application-development.tsx` | Deep-Dive Service | Custom web app architecture, multi-tenant DB schemas, performance budgets, auth/billing pipelines, case study cross-links |
| 10 | `/services/mobile-app-development` | `src/routes/services.mobile-app-development.tsx` | Deep-Dive Service | Flutter cross-platform architecture, native gesture UX, offline-first sync, CI/CD to App Store & Google Play, hardware integration |
| 11 | `/services/ai-solutions` | `src/routes/services.ai-solutions.tsx` | Deep-Dive Service | LLM apps, agent loops, RAG search over proprietary data, cost-aware model routing, evaluation guardrails, vector embeddings |
| 12 | `/services/business-automation` | `src/routes/services.business-automation.tsx` | Deep-Dive Service | n8n / Zapier / custom Node pipelines, webhook synchronization, ETL processing, manual busywork elimination |
| 13 | `/products` | `src/routes/products.index.tsx` | Products Hub | SaaS portfolio overview: SettleDesk & GLAD HMS cards with live metric tags, key feature bullet points, direct route links |
| 14 | `/products/settledesk` | `src/routes/products.settledesk.tsx` | SaaS Product Page | Hero with 3D building render, 3-Tier Persona breakdown (Super Admin, Client Admin, Mobile App), **Interactive Deal Cascade Simulator**, Feature splits, Gallery carousel, Pricing matrix, Product FAQ, Demo CTA |
| 15 | `/products/glad-hms` | `src/routes/products.glad-hms.tsx` | SaaS Product Page | Hero with 3D hotel render, 3-Tier Persona breakdown (Front Desk, Housekeeping Mobile, Owner/GM USALI analytics), Feature splits, Pessimistic row-locking explainer, Gallery carousel, Pricing table, FAQ, Demo CTA |
| 16 | `/portfolio` | `src/routes/portfolio.index.tsx` | Portfolio Hub | Grid of 6 featured case studies with custom category badges, short descriptions, and 3D hover perspective wrappers |
| 17 | `/portfolio/$slug` | `src/routes/portfolio.$slug.tsx` | Case Study Detail | Dynamic route loader for `fluxor`, `prayas-app`, `stock-management`, `ai-mock-interview`, `lead-enrichment`, `q-safe`. Contains Challenge, Solution, Feature List, Measurable Outcome, Image Gallery with modal preview, Next/Prev navigation |
| 18 | `/insights` | `src/routes/insights.index.tsx` | Blog / Insights Hub | Filterable list of 5 in-depth technical guides with reading times, category tags, author cards, and search metadata |
| 19 | `/insights/ai-development-cost-india` | `src/routes/insights.ai-development-cost-india.tsx` | Technical Article | 11-min read: Pricing breakdown, architectural complexity tiers, infrastructure expenses, budgeting models in India |
| 20 | `/insights/ai-agent-vs-chatbot` | `src/routes/insights.ai-agent-vs-chatbot.tsx` | Technical Article | 9-min read: Tool-calling vs conversational text, decision trees, workflow autonomy comparison |
| 21 | `/insights/what-is-ai-agent-development` | `src/routes/insights.what-is-ai-agent-development.tsx` | Technical Article | 12-min read: Agent loops, memory hierarchies, vector databases, execution sandboxes |
| 22 | `/insights/rag-vs-fine-tuning` | `src/routes/insights.rag-vs-fine-tuning.tsx` | Technical Article | 13-min read: Retrieval-augmented generation vs model weight fine-tuning, knowledge freshness, latency, cost analysis |
| 23 | `/insights/how-to-build-ai-agent-for-business` | `src/routes/insights.how-to-build-ai-agent-for-business.tsx` | Technical Article | 15-min read: 9-step implementation roadmap, API integrations, evaluation benchmarks, human-in-the-loop safeguards |

---

## 3. Design System, Tokens & Styling Architecture

The styling system is implemented in Tailwind CSS v4 (`src/styles.css`, 2081 lines) adhering to a **Dark-First Neo-Brutalist & Playful Glassmorphism** visual language.

### Typography Scale
- **Display Headings (`h1`, `h2`, `h3`, `h4`)**: `"Space Grotesk"`, ui-sans-serif, system-ui (letter-spacing: `-0.025em`)
- **Body & Controls**: `"Inter"`, ui-sans-serif, system-ui (font-feature-settings: `"ss01", "cv11"`)
- **Editorial / Serif Accents**: `"Playfair Display"` imported via Google Fonts

### Color Palette & Theme Tokens

```css
/* Color Token Specifications */
Light Theme Background: #faf8f5 (Warm Alabaster / Stone)
Light Theme Foreground: #1c1917 (Deep Charcoal)
Light Theme Surface:    #f3efea (Warm Gray Surface)
Light Theme Border:     #1c1917 (Crisp 2px Solid Dark Borders)

Dark Theme Background:  #09090b (Rich Dark Slate / Obsidian)
Dark Theme Foreground:  #fafafa (Pure Off-White)
Dark Theme Surface:     #18181b (Charcoal Surface)
Dark Theme Border:      #27272a (Subtle Slate Divider)

Brand Accent Tokens:
--brand:        #059669 (Light) / #22c55e (Dark Neon Emerald)
--brand-2:      #ffc72c (Light) / #a3e635 (Dark Neon Lime)
--brand-3:      #1c1917 (Light) / #facc15 (Dark Neon Yellow)
--brand-pink:   #ff4e88 (Light) / #ff3399 (Dark Vibrant Pink)
--brand-blue:   #00b4d8 (Light) / #33ccff (Dark Cyan / Electric Blue)
--brand-purple: #7209b7 (Light) / #b266ff (Dark Electric Purple)
```

### Neo-Brutalist & Glassmorphic Utilities

1. **`surface-card`**: Base card styling with 2px solid border, rounded corners, custom backdrop blur (`backdrop-blur-md`), and hard offset drop-shadow (`4px 4px 0px 0px var(--border)`).
2. **`surface-card-hover` / `interactive-card`**: Smooth transform elevation (`translate(-4px, -4px)`) expanding drop-shadow to `8px 8px 0px 0px [accent-color]`.
3. **`glass-card`**: Frosted glass container using `color-mix(in oklab, var(--surface) 75%, transparent)` with `backdrop-filter: blur(20px) saturate(1.4)`.
4. **`btn-primary` & `btn-secondary`**: Hard-bordered interactive action buttons with hover translate effects and micro-interactions.
5. **`book-card` / `book-card-cover` / `book-card-inside`**: 3D transform container mimicking a physical book cover that swings open on hover (`transform-style: preserve-3d`, `rotateY(-140deg)`).
6. **`floating-bar`**: Global bottom navigation pills with blur filters and glowing border insets.
7. **`spline-scene`**: Light/Dark mode filter adaptations (`mix-blend-mode: multiply` in light mode, `mix-blend-mode: screen` + sepia glow in dark mode).

---

## 4. Component Library & Interactive Architecture

### Site Core Components (`src/components/site/`)

| Component File | Size | Role & Detailed Functionality |
| :--- | :--- | :--- |
| `Header.tsx` | 14.5 KB | Sticky navigation bar, brand logo (light/dark auto-switch), Desktop nav links, Products dropdown menu, Circular View-Transition theme toggle, Mobile responsive sheet menu, Cal.com modal launcher. |
| `Footer.tsx` | 15.5 KB | Master site footer, agency mission, social media links (X, LinkedIn, Instagram, Reddit, Email), categorized service & studio links, legal links, back-to-top smooth scroll trigger. |
| `FloatingFooter.tsx` | 4.2 KB | Globally rendered bottom pill navbar (in `__root.tsx`) appearing after 400px of scroll. Contains Quick Links (Services, Portfolio, Process, About) and Quick Action triggers. |
| `Background.tsx` | 0.6 KB | Ambient background radial gradients and SVG noise textures. |
| `AnimatedCounter.tsx` | 1.0 KB | Framer Motion scroll-triggered counter for metrics (e.g. `500+`, `10,000+`). |
| `CookieConsent.tsx` | 3.7 KB | GDPR/Privacy cookie banner with accept/decline actions and `localStorage` persistence. |
| `EmailModal.tsx` | 5.2 KB | Modal dialog enabling immediate email sending via `mailto:` or copy-to-clipboard action. |
| `Flowing3DPrism.tsx` | 6.2 KB | Pure CSS / Canvas 3D interactive geometric prism graphic. |
| `FormFields.tsx` | 4.3 KB | Standardized form field wrappers (`Field`, `SelectField`, `Textarea`) with neo-brutalist styling. |
| `HandDrawnHighlights.tsx` | 3.2 KB | SVG hand-drawn annotations (`HandDrawnCircle`, `HandDrawnUnderline`, `HandDrawnDoubleStrike`). |
| `LogoStrip.tsx` | 1.9 KB | Infinite marquee animation of technology logos (React, Next.js, Flutter, Python, Node, Postgres, AWS, etc.). |
| `ProjectCard.tsx` | 2.4 KB | Reusable portfolio project card with 3D perspective hover effect, category badge, and gradient backdrops. |
| `RetroDecorations.tsx` | 4.9 KB | Playful stickers (`RetroStar`, `SparkleDeco`, `CurlyArrow`, `CuteSpeechBubble`, `SmileyBadge`). |
| `Reveal.tsx` | 2.5 KB | Scroll-triggered Framer Motion animation wrappers (`Reveal`, `RevealGroup`, `RevealItem`). |
| `RocketMan.tsx` | 2.2 KB | Animated floating astronaut/rocket vector graphic for MVP sections. |
| `Scroll3DElement.tsx` | 8.4 KB | Interactive 3D layered tech stack element rendered in the homepage services grid. |
| `ScrollProgress.tsx` | 0.6 KB | Fixed top gradient progress bar tracking document scroll percentage. |
| `SectionHeading.tsx` | 0.7 KB | Standardized section header with uppercase eyebrow tag, display title, and subtitle. |
| `Service3DWheel.tsx` | 6.7 KB | Rotating 3D wheel showcasing service specializations. |
| `SmoothScrollProvider.tsx`| 2.0 KB | Global Lenis smooth scroll provider initialized on page mount. |
| `StickerBoard.tsx` | 9.4 KB | Floating interactive sticker board allowing users to click, drag, stamp, rotate, and clear playful stickers anywhere on the screen. |
| `data.ts` | 15.0 KB | Central data repository for all services, portfolio case studies, testimonials, and FAQs. |

### SaaS Product Components (`src/components/products/`)

| Component File | Size | Role & Functionality |
| :--- | :--- | :--- |
| `ProductHero.tsx` | 22.1 KB | High-impact product hero section with 3D device/building renders, animated stat counters, dynamic badge pills, and dual CTA buttons. |
| `ProductThreeTier.tsx` | 11.2 KB | 3-column persona breakdown comparing capabilities for Admin, Managers, and Field Agents/Staff. |
| `ProductFeatureSplit.tsx` | 15.3 KB | Alternating left/right feature split rows with high-res UI mockups, browser window chrome, and technical bullet points. |
| `DealCascadeSimulator.tsx`| 8.7 KB | Interactive real-time commission split simulator with deal value sliders, brokerage cut, agent commission, and net payout calculation. |
| `ProductGalleryCarousel.tsx`| 17.6 KB| Responsive screenshot carousel showcasing platform screens with thumbnail navigation and full-screen lightbox modal. |
| `ProductPricingTable.tsx` | 2.4 KB | Transparent pricing matrix comparing Starter, Professional, and Enterprise plans with feature checkmarks. |
| `ProductFAQAccordion.tsx` | 2.0 KB | Expandable product-specific FAQ accordion built on Radix primitives. |
| `ProductCTA.tsx` | 3.3 KB | High-conversion bottom CTA banner with demo scheduling and free trial links. |
| `ProductWorkflowSequence.tsx`| 3.4 KB| Step-by-step workflow progression diagrams for SaaS platforms. |

### UI Primitives (`src/components/ui/`)
Contains **46 Radix UI and Tailwind primitives** (`accordion`, `alert-dialog`, `avatar`, `badge`, `button`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `dialog`, `drawer`, `dropdown-menu`, `form`, `input`, `navigation-menu`, `popover`, `progress`, `select`, `sheet`, `sidebar`, `table`, `tabs`, `tooltip`, etc.).

---

## 5. Detailed Page-by-Page Audit & UI Breakdown

### 1. Homepage (`/`)
- **Header**: Sticky glass header with view-transition theme toggle and products dropdown.
- **Hero Section**:
  - Live server function `getAvailableSlots` querying Cal.com API for real-time quarterly booking capacity.
  - Interactive Spline 3D Scene (`https://prod.spline.design/WUDd1kLf1Uh-ftTW/scene.splinecode`) with dark/light mode blend filters.
  - Neo-brutalist typography with hand-drawn SVG highlights (`AI` circled, `scale` underlined).
  - Primary CTA ("Book a Call" launching Cal.com popup) + Secondary CTA ("View our work" linking to `/portfolio`).
- **Tech Logo Strip**: Marquee showcasing core tech stack (React, Next.js, Flutter, Python, Node, Postgres, AWS).
- **Services Bento Grid**: 5 practice cards with custom neon-colored hover shadows:
  - *MVP Development* (Pink shadow)
  - *Web Application Development* (Blue shadow)
  - *Mobile App Development* (Purple shadow)
  - *AI Solutions* (Yellow shadow)
  - *Business Automation* (Green shadow)
  - *6th Slot*: Custom interactive 3D Scroll Stack element (`Scroll3DElement.tsx`).
- **Why Us Section**: 4 value props (Fast Development, Transparent Communication, Modern Tech, Scalable Architecture).
- **Process Sequence**: 6-step connected workflow timeline with numbered step markers (`01` to `06`).
- **Featured Work**: 6 case studies displayed in asymmetric 12-column bento layout (`8+4`, `4+8`, `6+6`).
- **Testimonials 3D Flipping Books**: Marquee carousel of client cards with verified badges and interactive swinging 3D book covers revealing detailed client quotes upon hover.
- **Accordion FAQ**: 8 frequently asked questions covering pricing, start times, non-technical founders, and IP ownership.
- **Final CTA Section**: Glassmorphic container with 2-column layout and embedded AJAX contact form with instant validation.
- **StickerBoard**: Floating sticker canvas allowing users to stamp retro stickers on the page.

---

### 2. Services Architecture (`/services` & Deep-Dive Subpages)
Every service route features a dedicated 700–900 line production-grade landing page with consistent layout patterns:
- **Service Hero**: Specialized category badge, H1 title with hand-drawn accents, and direct booking trigger.
- **Technical Capabilities Grid**: 6–8 modular capability cards breaking down exact engineering disciplines.
- **Architecture & Workflow Diagrams**: Visual representation of the engineering lifecycle.
- **Milestone & Delivery Roadmap**: Transparent week-by-week timeline breakdown.
- **Tech Stack Chips**: Detailed list of frontend, backend, database, and infrastructure tools.
- **Case Study Spotlight**: Direct link to a completed portfolio project in that category.
- **Service FAQ Accordion**: 5–8 targeted questions addressing technical tradeoffs and costs.

---

### 3. Proprietary Products Suite (`/products`, `/products/settledesk`, `/products/glad-hms`)
- **`/products` (Hub)**: Compares SettleDesk and GLAD HMS with live metrics, key capabilities, and direct landing links.
- **`/products/settledesk` (SettleDesk Real Estate Brokerage OS)**:
  - Hero with high-resolution 3D architectural render (`building.png`).
  - 3-Tier Stakeholder Matrix (Super Admin, Brokerage Owner, Mobile Agent).
  - **Deal Cascade Simulator**: Interactive range slider calculating commission fee splits in real time.
  - 6 Feature Deep-Dives: Property Management, Commission Rules, Deal Approvals, Audit Logs, Mobile App, RLS Isolation.
  - Interactive screenshot gallery carousel.
  - Transparent pricing table and FAQ accordion.
- **`/products/glad-hms` (GLAD HMS Hospitality OS)**:
  - Hero with 3D hotel architecture visual (`hotel-building.png`).
  - 3-Tier Stakeholder Matrix (Front Desk & Reservations, Housekeeping Staff, Hotel General Managers).
  - Technical deep-dive on PostgreSQL pessimistic concurrency row-locking preventing double bookings.
  - Housekeeping mobile task board state machine (Dirty → Clean → Inspected → Occupied).
  - USALI financial revenue analytics and Indian GST tax slab split billing.
  - Gallery carousel, pricing matrix, and demo booking form.

---

### 4. Portfolio & Case Studies (`/portfolio`, `/portfolio/$slug`)
Contains 6 structured case studies in `src/components/site/data.ts`:
1. **Fluxor**: Desktop Application — Automated Document Orchestration & Asset Classification Engine (Python, ML).
2. **Prayas App**: Mobile App — Decentralized Medical Inventory Control & Resource Logistics Platform (React Native).
3. **Stock Management**: Full Stack Platform — Multi-Tenant Enterprise Inventory & Supply Chain Suite (React Native, React, Node).
4. **AI Mock Interview**: AI Product — Low-Latency Conversational AI Technical Assessment Engine (FastAPI, HuggingFace, MongoDB).
5. **Lead Enrichment**: Business Automation — High-Throughput Lead Sourcing & Cleansing Pipeline (Python, n8n, PostgreSQL).
6. **Q-SAFE**: Security Platform — Zero-Knowledge Encrypted Secure File Transmission Portal (Django REST, PostgreSQL, Docker).

Each case study detail page provides:
- Executive Summary & Category Tags
- The Core Challenge / Problem Statement
- The Engineered Solution & Architecture
- Key Technical Features (bulleted with icons)
- Quantifiable Business Outcome / Metric
- Multi-Image Screenshot Gallery with click-to-expand lightbox
- Previous / Next Case Study navigation footer

---

### 5. Insights & Engineering Blog (`/insights`, `/insights/*`)
Contains 5 comprehensive long-form technical articles authored by CTO Somesh Rajput:
1. **AI Development Cost in India (2026)**: Pricing models, RAG vs Agent cost structures, inference hosting economics.
2. **AI Agent vs Chatbot**: Workflow autonomy, deterministic tool-calling, stateful memory hierarchies.
3. **What Is AI Agent Development?**: Loop architectures, vector memory, execution sandboxes, guardrails.
4. **RAG vs Fine-Tuning**: Knowledge freshness, hallucination reduction, domain adaptation tradeoffs.
5. **How to Build an AI Agent for Business**: 9-step engineering blueprint, structured evals, human checkpoints.

Each article includes:
- Category & Read-Time Badges
- Author Card with avatar and bio
- Table of Contents with jump anchors
- Technical callout boxes, code snippets, and architecture comparison tables
- Related articles recommendation footer
- Article JSON-LD Schema for rich snippet indexing

---

### 6. Company, Process & Legal Pages
- **About Us (`/about`)**: Company philosophy ("Products, not just software"), 4 core values (Innovation, Reliability, Transparency, Quality), 4-member executive leadership team (Arjun Singh Rajput, Jatin Khetan, Parth Garg, Somesh Rajput).
- **Process (`/process`)**: 6-phase development lifecycle: Day 0 Discovery → Week 1 Requirements → Week 1 Planning → Weeks 2–3 UI/UX Design → Weeks 4–8 Development → Launch & Post-Launch Support.
- **Contact (`/contact`)**: 2-column layout with direct Cal.com booking modal button, FormSubmit AJAX lead capture form with budget range dropdown, direct email modal trigger, and company social channels.
- **Privacy Policy (`/privacy`) & Terms of Service (`/terms`)**: Full legal agreements covering IP ownership, confidentiality, and data handling.

---

## 6. Interactive Features & Third-Party Integrations

1. **Cal.com API & Dynamic Booking Integration**:
   - Integrated via `@calcom/embed-react`.
   - Server function `getAvailableSlots` fetches live bookings via `https://api.cal.com/v2/bookings` using `CALCOM_API_KEY` to dynamically compute remaining quarterly client capacity slots.
2. **Circular View-Transition Theme Switcher**:
   - Utilizes experimental `document.startViewTransition` with a dynamic expanding circle mask originating from the clicked coordinates (`x`, `y`).
3. **Draggable & Stampable Sticker Board**:
   - `StickerBoard.tsx` enables interactive sticker placement with custom SVG designs (Smiley, 100% Human, Ship it!, GLAD Badge, WOW Bubble, Sparkles).
4. **Interactive Deal Cascade Simulator**:
   - Real-time client-side calculator on `/products/settledesk` simulating multi-tier brokerage fee and commission splits.
5. **3D Interactive Book Testimonials**:
   - Custom CSS 3D perspective swinging card covers revealing client metrics and full quote cards.
6. **Spline 3D Embed**:
   - WebGL 3D interactive mesh embedded into the homepage hero.
7. **FormSubmit AJAX Lead Pipeline**:
   - Headless form endpoints submitting directly to `hello@gladstudio.net` with asynchronous state feedback.

---

## 7. Media & Asset Inventory

- **Logos**:
  - `src/routes/images/main logo.png` (242 KB)
  - `src/routes/images/website logo(black background compatible).png` (52 KB)
  - `src/routes/images/website logo(white background compatible).png` (90 KB)
  - Client Logos: Prayas, GLA Canteen, Earth Travels
- **Team Portraits**:
  - Arjun Singh Rajput (`arjun.jpg`, 207 KB)
  - Jatin Khetan (`jatin.jpg`, 60 KB)
  - Parth Garg (`parth.jpeg` & `parth.jpg`, ~180 KB)
  - Somesh Rajput (`somesh.jpeg`, 63 KB)
- **Product Renders**:
  - SettleDesk: `building.png` (6.8 MB), `hero-3d.png`, `commission-3d.png`, `approvals-3d.png`, `properties-3d.png`, `phone-3d.png`
  - GLAD HMS: `hotel-building.png` (644 KB), `hotel-building-transparent.png` (1.3 MB)
- **Portfolio & Project Mockups**:
  - 19 high-resolution screenshot and feature mockups in `src/routes/images/projects/`

---

## 8. SEO, Meta Architecture & Structured Data

Every route in `src/routes/` implements full SEO metadata inside TanStack Router's `head` loader:
- **Canonical URLs**: Explicitly defined per page (`https://gladstudio.net/...`).
- **OpenGraph & Twitter Cards**: `og:title`, `og:description`, `og:image` (`/og-image.png`), `og:url`, `twitter:card` (`summary_large_image`).
- **JSON-LD Structured Data**:
  - Root: `Organization`, `WebSite`, `ProfessionalService`
  - About: `AboutPage`, `BreadcrumbList`
  - Services: `WebPage`, `Service`, `BreadcrumbList`
  - Products: `Product`, `SoftwareApplication`
  - Portfolio: `CollectionPage`, `CreativeWork`, `BreadcrumbList`
  - Insights: `Article`, `BlogPosting`, `BreadcrumbList`
- **Sitemap & Robots**:
  - `public/sitemap.xml` (contains all 21 routes with `lastmod` and `changefreq`)
  - `public/llms.txt` (structured LLM discovery context)
  - `public/robots.txt`

---

## 9. Comprehensive Redesign Assessment & Strategic Recommendations

### Current Strengths
1. **Exceptional Content Depth**: Highly articulate service breakdowns, genuine case studies, and credible technical articles.
2. **Robust Technical Architecture**: Built on modern primitives (TanStack Start, React 19, TypeScript, Vite 7) providing sub-second page transitions and SSR.
3. **Engaging Micro-Interactions**: Sticker board, interactive deal simulator, 3D book testimonials, and animated counters create memorable user moments.

### Pain Points & Areas for Redesign Improvement
1. **Aesthetic Consistency & Brand Alignment**:
   - *Conflict*: The site currently blends a playful, retro neo-brutalist theme (stickers, comic speech bubbles, chunky borders, candy colors) with high-ticket enterprise B2B SaaS marketing (SettleDesk / GLAD HMS).
   - *Recommendation*: Move towards a sleek, sophisticated, ultra-modern luxury tech aesthetic (e.g. refined glassmorphism, precise hairline borders, elegant dark tones with curated neon emerald/gold accents, subtle micro-glows).
2. **Performance & Asset Weight**:
   - *Issue*: Some assets (e.g., `building.png` at 6.8MB, `lead_enrichment thumbnail.png` at 5.3MB) and the Spline 3D runtime introduce significant network weight and potential FID/LCP latency on mobile.
   - *Recommendation*: Optimize all media to WebP/AVIF formats, implement responsive picture srcsets, and lazy-load/substitute 3D scenes with high-performance CSS/SVG shaders on mobile devices.
3. **Component Architecture & CSS Maintainability**:
   - *Issue*: `src/styles.css` is over 2,000 lines with numerous complex custom CSS classes and hardcoded color mix functions.
   - *Recommendation*: Modularize styles into standard Tailwind v4 theme variables, clean reusable component tokens, and eliminate redundant classes.
4. **Mobile Navigation & Touch UX**:
   - *Issue*: Complex desktop elements (e.g. 3D book hover effects and the sticker canvas) require tailored touch interactions on mobile.
   - *Recommendation*: Build intuitive mobile-first touch gesture alternatives (e.g. swipeable cards instead of hover flip, touch-friendly expandable accordions).
5. **Clear Separation of Agency vs. Products**:
   - *Opportunity*: Create clearer distinct visual identities for **GLAD Studio Agency** vs. **GLAD Product Lab (SettleDesk / GLAD HMS)** while maintaining a unified navigation shell.

---

## 10. Summary Checklist for Redesign Planning

- [ ] **Design Token System**: Define new unified color palette, typography hierarchy, border radius system, and elevation levels.
- [ ] **Component Library Overhaul**: Refactor `Header`, `Footer`, `ProjectCard`, `ProductHero`, and form components to the new design system.
- [ ] **Asset Optimization**: Convert 30+ raster images to compressed modern WebP/AVIF format with width descriptors.
- [ ] **Page Layout Redesigns**:
  - [ ] Homepage (`/`)
  - [ ] Services Hub & 5 Detail Pages (`/services/*`)
  - [ ] Products Hub & SaaS Pages (`/products/*`)
  - [ ] Portfolio Hub & 6 Case Studies (`/portfolio/*`)
  - [ ] Insights Hub & 5 Technical Guides (`/insights/*`)
  - [ ] About, Process, and Contact Pages
- [ ] **Performance & SEO Verification**: Ensure 95+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.