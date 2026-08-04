# SettleDesk Audit & Marketing Extraction Document

This document is the authoritative, comprehensive extraction of all content, brand identity, features, technical capabilities, pricing, visual assets, and marketing copy from the SettleDesk codebase (`c:/Users/imsto/Desktop/SettleDesk`). It serves as the single source of truth for creating the marketing landing page on the agency site (`gladstudio.net`).

---

## 1. CONTENT & VALUE PROPOSITION

### What SettleDesk Does (Plain Language)

SettleDesk is a multi-tenant, enterprise-grade Real Estate Brokerage Operations SaaS platform. It acts as the central operational backbone for real estate brokerages, unifying property catalog management, agent field operations, lead tracking, deal finalization workflows, and automated commission payout calculations into a single, real-time system.

Rather than stitching together spreadsheets for commission splits, third-party CRMs for lead routing, and standalone property listing tools, SettleDesk provides a synchronized 3-tier system powering:

1. **Platform Operators (Super Admins)** — Oversee tenant onboarding, SaaS subscriptions, billing, and system-wide health.
2. **Brokerage Owners & Managers (Client Admins)** — Control property listings, configure multi-tiered version-controlled commission matrices, review deal approvals, and disburse payouts.
3. **Field Agents & Brokers (Mobile App Users)** — Browse active property portfolios, capture & manage customer leads, submit closed contracts, and track commission splits live on iOS & Android devices.

---

### Complete Feature & Module List

#### A. Super Admin & Platform Operations Module

- **Tenant Provisioning & Onboarding**: 5-second workspace setup, automated custom subdomains, and automated credential generation.
- **SaaS Subscription & Plan Management**: Configure Starter, Professional, and Enterprise tiers with agent caps, storage limits, and feature toggles.
- **Client Lifecycle & Billing Management**: Track active, pending, suspended, and churned accounts with billing history and invoices.
- **Platform Analytics & Health**: Monitor Monthly Recurring Revenue (MRR), platform uptime (99.9%), active brokerages, and system performance.
- **Impersonation Sessions & Audit Logs**: Platform-wide activity logging and administrative tenant impersonation for troubleshooting.

#### B. Client Admin & Brokerage Operations Module

- **Property & Portfolio Management Engine**: Real-time property inventory management supporting Draft, Active, Under Contract, and Sold status lifecycle updates.
- **Dynamic Commission Split Engine**: Version-controlled commission plan matrix supporting custom split percentages, agent volume tiers, office cap thresholds, franchise fees, and royalty subtractions.
- **1-Click Deal & Payout Approval Workflow**: Automated notifications when field agents submit signed closing contracts, triggering 1-click administrative approvals, automated status transitions, and instant split calculations.
- **Agent Roster & Performance Tracking**: Manage broker profiles, assign properties, assign custom commission structures, and review individual sales metrics.
- **Lead Pipeline & Customer Oversight**: Centralized customer database with lead routing, site visit logs, and conversion tracking.

#### C. Field Broker & Agent Mobile Module (Expo / React Native)

- **Live Listing Catalog**: Real-time property browsing with availability status, pricing tiers, unit specs, and floor plans.
- **Mobile Lead Management**: Quick lead capture, activity logging, and status tracking (New, Negotiation, Site Visit, Booked).
- **Mobile Deal Finalization**: Submit contract documentation and closing details straight from the field.
- **Live Commission Split Tracker**: Instant visibility into earned, pending, and cleared commission payouts.

---

### Target Users

1. **Primary Buyer / Decision Maker**: Real Estate Brokerage Founders, Owners, Managing Brokers, and Operations Directors running small-to-midsize or enterprise real estate firms (10 to 500+ agents).
2. **Secondary Administrative User**: Finance Managers, Deal Coordinators, and Office Admins responsible for split calculations and listing accuracy.
3. **End-User / Daily Operator**: Real Estate Field Agents, Listing Brokers, and Sales Representatives closing deals on location.

---

### Verbatim Marketing Copy & Quotes

#### 1. Hero & Value Propositions (`c:/Users/imsto/Desktop/SettleDesk/product_website/src/routes/index.tsx`)

- **Main Headline**: `"Run Your Entire Brokerage. On One Platform."`
- **Subheadline**: `"SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time system — built for brokerages that are ready to scale."`
- **Eyebrow Tagline**: `"Premium Brokerage Operations"`
- **CTA Buttons**: `"Start Free Trial"`, `"Watch Overview"`, `"Create Free Workspace"`
- **Page Meta Title**: `"SettleDesk — Run Your Entire Brokerage on One Platform"`
- **Page Meta Description**: `"SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time SaaS platform for real estate brokerages."`
- **Footer Brand Statement**: `"The enterprise-grade operational backbone for modern real estate brokerages."`

#### 2. Three-Tier System Section (`product_website/src/routes/index.tsx`)

- **Section Eyebrow**: `"One Platform, Three Experiences"`
- **Section Title**: `"Everyone Gets the Right Tools for Their Job"`
- **Tier 1 (Super Admin Portal)**:
  - Role: `"For Platform Operators"`
  - Description: `"Manage every brokerage on SettleDesk from a single command center — subscriptions, billing, onboarding, and platform-wide analytics."`
  - Bullets: `["Subscription & billing management", "Client onboarding & lifecycle tracking", "Platform-wide audit logs"]`
- **Tier 2 (Client Admin Dashboard)**:
  - Role: `"For Brokerage Owners & Managers"`
  - Description: `"Take full control of your brokerage's operations — from listing properties to approving deals and structuring commissions your way."`
  - Bullets: `["Property & portfolio management", "Version-controlled commission plans", "Deal & payout approvals"]`
- **Tier 3 (Broker Mobile App)**:
  - Role: `"For Agents on the Go"`
  - Description: `"Everything your agents need to close deals, right from their phones — live listings, lead tracking, and real-time commission visibility."`
  - Bullets: `["Real-time property browsing", "Lead & deal management", "Live commission tracking"]`

#### 3. Core Feature Blurbs (`product_website/src/routes/index.tsx`)

- **Feature 1**:
  - Eyebrow: `"Property & Portfolio Management"`
  - Title: `"Every Property. Always Up to Date."`
  - Body: `"Create, manage, and track your entire property portfolio in real time. Update unit statuses — Draft, Active, Sold — and keep every agent working from the same live data."`
- **Feature 2**:
  - Eyebrow: `"Commission Structure Engine"`
  - Title: `"Commission Plans, Built Your Way."`
  - Body: `"Design version-controlled commission structures and assign them precisely — by broker, by property, by deal. No spreadsheets, no guesswork."`
- **Feature 3**:
  - Eyebrow: `"Deal & Payout Approvals"`
  - Title: `"From Submitted to Sold, Automatically."`
  - Body: `"When a broker closes a deal, admins review and approve it in one click — instantly updating unit status and queuing the commission payout."`
- **Feature 4**:
  - Eyebrow: `"Real-Time Sync Across Devices"`
  - Title: `"One Source of Truth. Every Device."`
  - Body: `"Whether it's the mobile app or the web dashboard, everyone sees the same data, the same moment it changes — no fragmentation, no delays."`

#### 4. Security & Architecture Blurbs (`product_website/src/routes/index.tsx`)

- **Eyebrow**: `"Enterprise-Grade Security"`
- **Title**: `"Bank-Grade Security. Zero Data Leaks Between Tenants."`
- **Body**: `"SettleDesk is built on strict database-level isolation, so every brokerage's data stays completely private — even on a shared platform."`
- **Pillar 1**: `"Row-Level Security — Database-enforced isolation ensures one brokerage can never access another's data."`
- **Pillar 2**: `"Immutable Audit Trails — Every critical action is automatically logged for full compliance and traceability."`
- **Pillar 3**: `"Enterprise Data Isolation — A single unified database architected for multi-tenant safety at scale."`
- **Advanced 1**: `"One Database. Real-Time Everywhere. — Instead of maintaining separate databases for the mobile app and web dashboards, SettleDesk runs on a single, unified PostgreSQL database via Supabase. Every change syncs in real time across every application, for every role."`
- **Advanced 2**: `"The Right Access, for the Right Role — SettleDesk's three-tier architecture isn't just about different interfaces — it's about enforced boundaries. Platform operators manage the platform. Brokerage admins manage their business. Brokers sell. Each tier only ever sees what it's authorized to see."`

#### 5. How It Works Workflow (`product_website/src/routes/index.tsx`)

- **Section Eyebrow**: `"How It Works"`
- **Section Title**: `"From Onboarding to Payout, in Four Steps"`
- **Step 1 (Setup)**:
  - Phase: `"Phase 1: Setup"` | Metric: `"Under 5m"`
  - Title: `"01. Onboard"` | Description: `"Your brokerage gets provisioned and configured in minutes."`
  - Checklist: `["Create dedicated tenant DB", "Configure custom subdomain", "Invite initial Super Admin"]`
- **Step 2 (Rules)**:
  - Phase: `"Phase 2: Rules"` | Metric: `"Versioned"`
  - Title: `"02. Configure"` | Description: `"Admins set up properties, teams, and commission structures."`
  - Checklist: `["Upload properties catalog", "Define agent split tiers", "Set office caps & royalty fee"]`
- **Step 3 (Sales)**:
  - Phase: `"Phase 3: Sales"` | Metric: `"Real-time"`
  - Title: `"03. Sell"` | Description: `"Brokers manage leads and close deals from the mobile app."`
  - Checklist: `["Browse active property list", "Log client offer & contract", "Upload closing signatures"]`
- **Step 4 (Finance)**:
  - Phase: `"Phase 4: Finance"` | Metric: `"Instant"`
  - Title: `"04. Get Paid"` | Description: `"Deals get approved, and commissions are calculated automatically."`
  - Checklist: `["One-click admin approval", "Calculate split & split caps", "Queue bank payout transfer"]`

#### 6. About / Story Section (`product_website/src/routes/index.tsx`)

- **Eyebrow**: `"Our Story"`
- **Title**: `"Built by People Who Understand Real Estate"`
- **Story Body 1**: `"Real estate brokerages sit at the center of a lot of moving parts — properties, agents, leads, deals, and payouts — but most of the software built for the industry only solves one piece of that puzzle at a time. Teams end up stitching together a CRM, a spreadsheet for commissions, a separate tool for property listings, and a group chat for approvals."`
- **Story Body 2**: `"We built SettleDesk to be the operational backbone brokerages actually need: one platform, one source of truth, built for every role in the business — from platform operators to brokerage owners to the agents closing deals in the field."`
- **Beliefs**:
  1. `"Clean business rules. — Admins control properties and commission structures. Brokers sell. The platform enforces this so nothing gets messy."`
  2. `"Real-time, always. — Every device — mobile or web — reflects the same live data, the moment it changes."`
  3. `"Security isn't optional. — Multi-tenant systems demand strict data isolation. We built that in from day one."`
  4. `"Built for scale. — From a single-office brokerage to a multi-branch enterprise operation, the platform grows with you."`

#### 7. Testimonials & Social Proof (`product_website/src/routes/index.tsx`)

- **Testimonial 1**: `"SettleDesk replaced three different tools we were using to manage listings, agents, and payouts. Now it's all in one place, and my team actually uses it."` — _Operations Director, Mid-Size Brokerage_
- **Testimonial 2**: `"The commission engine alone saved us hours every month. No more manual calculations or disputes with agents."` — _Managing Broker, Regional Real Estate Firm_
- **Testimonial 3**: `"Our agents love the mobile app. They can close deals without ever touching a desktop."` — _Founder, Boutique Brokerage_
- **Social Proof Stats**:
  - `"500+"` Brokers Onboarded
  - `"10,000+"` Property Units Managed
  - `"99.9%"` Platform Uptime
  - `"Bank-Grade"` Data Security

---

### Pricing & Tier Structure

Found in `product_website/src/routes/index.tsx` (Pricing section) & `broker-hub-Superadmin/superadmin-portal-architecture.md`:

| Tier                              | Subtitle / Target                             | Key Included Features                                                                                                 | CTA Text         |
| :-------------------------------- | :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :--------------- |
| **Starter**                       | For small brokerages getting started          | Up to 10 agents<br>Core property & lead management<br>Standard commission plans<br>Email support                      | Start Free Trial |
| **Professional** _(Most Popular)_ | For growing brokerages that need more control | Up to 50 agents<br>Advanced commission engine<br>Deal approval workflows<br>Priority support                          | Start Free Trial |
| **Enterprise**                    | For large, multi-branch operations            | Unlimited agents<br>Custom integrations & SLAs<br>Dedicated onboarding & support<br>Advanced audit & compliance tools | Contact Sales    |

_Trial Policy_: 30-day free trial, instant setup, no credit card required upfront.

---

### Integrations & Technical Capabilities

1. **Supabase & PostgreSQL Core**: Unified real-time data sync with strict Row-Level Security (RLS).
2. **Multi-Tenant Architecture**: Dedicated client isolation (`platform_clients` linked to tenant `companies`).
3. **Cross-Platform Synchronization**: Instant sync between Expo / React Native mobile apps (iOS & Android) and Next.js / TanStack web dashboards.
4. **Direct Bank Payout Clearing Readiness**: Structured payouts table for automated commission disbursements.
5. **Role-Based JWT Claims**: Custom `app_role` claims (`super_admin`, `company_admin`, `broker`) for granular security.

---

## 2. BRAND & VISUAL IDENTIFIERS

### Color Palette

#### CSS Variables & Theme Specification (`product_website/src/styles.css`)

- **Background**: `oklch(0.99 0.01 90)` (~ `#fdfbf7` Warm Ivory / Cream White)
- **Foreground / Text**: `oklch(0.25 0.02 260)` (~ `#303642` Dark Slate Navy)
- **Primary Navy**: `oklch(0.3 0.05 260)` (~ `#263654` / `#1e293b` Executive Navy)
- **Accent Gold**: `oklch(0.85 0.1 80)` (~ `#e5b84c` / `#d4af37` / `#ffb800` Premium Gold)
- **Platinum / Slate Border**: `oklch(0.85 0.05 80 / 0.3)` (Semi-transparent gold border)
- **Card Background**: `oklch(1 0 0)` (`#ffffff` Pure White glass/card surface)
- **Secondary Surface**: `oklch(0.96 0.01 90)` (~ `#f5f3ef` Soft Warm Gray)
- **Muted Text**: `oklch(0.5 0.02 260)` (~ `#6f7785` Muted Slate)

#### Gradient Specifications

- **Primary Gradient (`--gradient-primary`)**: `linear-gradient(135deg, oklch(0.3 0.05 260), oklch(0.2 0.02 260))` (Deep Navy to Dark Slate)
- **Gold Accent Gradient (`--gradient-gold`)**: `linear-gradient(135deg, oklch(0.9 0.1 80), oklch(0.8 0.12 70))` (Bright Gold to Warm Amber)
- **CTA Button Gradient**: `from-gold via-orange-400 to-amber-500`

---

### Typography & Fonts

- **Display / Heading Font**: `"Playfair Display"`, serif (used for `h1`, `h2`, `h3`, `h4`, watermark numbers, serif quotes).
- **Body / Interface Font**: `"Inter"`, sans-serif (used for body text, navigation, tables, controls).
- **Font Source**: Loaded via Google Fonts CDN in `product_website/src/routes/__root.tsx`:
  `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap`

---

### Logos, Wordmarks & Icons

| File Description            | Relative Path in SettleDesk                                                | Format | Apparent Role                |
| :-------------------------- | :------------------------------------------------------------------------- | :----- | :--------------------------- |
| **Main SettleDesk Logo**    | `product_website/src/assets/logo.png`                                      | PNG    | Primary header & footer logo |
| **Agency Attribution Logo** | `product_website/src/assets/website logo(white background compatible).png` | PNG    | GLAD Studio attribution mark |
| **Favicon**                 | `product_website/public/favicon.ico`                                       | ICO    | Browser tab icon             |
| **Video Intro Logo**        | `product_website/src/assets/videos/video logo.mp4`                         | MP4    | Animated splash screen       |

---

### Imagery & Rendered Assets

#### 3D Visual Assets (`product_website/src/assets/`)

- `hero-3d.png` (3D Hero composition)
- `phone-3d.png` (3D Smartphone render)
- `security-3d.png` (3D Shield & lock graphic)
- `properties-3d.png` (3D Isometric buildings)
- `commission-3d.png` (3D Coin & currency stack)
- `approvals-3d.png` (3D Checkmark & document)
- `sync-3d.png` (3D Cloud synchronization)
- `skyline-3d.jpg` (City skyline backdrop)

#### High-Res Architectural & UI Imagery (`product_website/src/assets/`)

- `building.png` (Hero skyscraper architectural rendering)
- `modern-office-facade.png` (Luxury commercial facade)
- `luxury-villa.png` (High-end residential property)
- `broker-office.png` (Modern real estate office interior)
- `skyscraper-sunset.png` (Sunset skyline rendering)
- `broker-deal.png` (Real estate transaction handshake)
- `real-estate-contract.png` (Digital contract signing)
- `real-estate-app.png` (Mobile application UI display)
- `corporate-server.png` (Secure enterprise server rack)
- `brokerage-boardroom.png` (Executive boardroom)
- `graphic-design-building-architecture-creative-city-building-vector.png` (Blueprint vector background)

#### High-Definition Feature Showcase Videos (`product_website/src/assets/videos/`)

- `every property always up to date.mp4` (Property catalog showcase)
- `Commission Plans, Built Your Way.mp4` (Commission matrix engine preview)
- `From Submitted to Sold, Automatically.mp4` (Deal approval workflow video)
- `One Source of Truth. Every Device.mp4` (Real-time device sync demo)
- `request a demo background.mp4` (CTA section video loop)

---

### Overall Visual Character

SettleDesk exudes an **ultra-luxurious, executive, high-trust SaaS aesthetic**. It combines warm cream and gold tones with deep slate navy surfaces, glassmorphic frosted cards, ambient backlights, blueprint vector grids, and elegant serif typography (`Playfair Display`).

The UI balances dense operational data with spacious, premium micro-animations (book-opening testimonial covers, spinning 3D filmstrip carousels, floating stats cards, and smooth scroll progress reveals).

---

## 3. GAPS & SHOPPING LIST FOR MARKETING LANDING PAGE

While SettleDesk contains extensive copy, 3D assets, and video loops in `product_website`, the following items are missing or required for a complete agency marketing landing page (`/products/settledesk` on `gladstudio.net`):

1. **Actual In-App UI Screenshots**:
   - No high-resolution raw screenshots of the live Client Admin Dashboard tables (real property grid, real commission tier builder, real audit log).
   - No real device frame captures of the Expo Mobile App screens (Broker home screen, deal submission sheet).
   - _Action required_: Use 3D visual assets or mockup existing feature cards in HTML/CSS matching the agency site's styling.

2. **Customer Logos & Brand Proof Bar**:
   - The testimonials reference `"Mid-Size Brokerage"`, `"Regional Real Estate Firm"`, and `"Boutique Brokerage"`, but contain no real client company logos or avatars.
   - _Action required_: Design stylized brokerage badges or placeholders for the agency site's social proof bar.

3. **Interactive Calculator / ROI Estimator**:
   - SettleDesk highlights time saved on commission calculation, but lacks an interactive slider for prospective buyers to calculate hours saved or ROI based on agent count.

4. **FAQ Section**:
   - SettleDesk product website has no explicit FAQ accordion (e.g. data migration steps, custom domain setup, trial terms, contract lock-ins).

5. **Contact / Book a Live Demo Form**:
   - SettleDesk contains a direct trial provisioning modal (`signupFn`), but lacks an agency-level lead capture form for high-touch enterprise sales inquiries ("Talk to an Enterprise Consultant").

---

_End of extraction document. Prepared for gladstudio.net agency site implementation._
