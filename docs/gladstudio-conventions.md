# gladstudio.net Conventions & Architecture Document

This document defines the exact stack, folder layout, component conventions, styling system, design tokens, routing mechanisms, and code patterns used in the agency website codebase (`gladstudio.net`). Every new page or component created must adhere strictly to these conventions so that added code is indistinguishable from existing source files.

---

## 1. STACK & ROUTING

### Technology Stack & Dependencies

- **Framework**: TanStack Start (`@tanstack/react-start` v1.167.50) + React 19 (`react` v19.2.0, `react-dom` v19.2.0)
- **Bundler & Server**: Vite 7 (`vite` v7.3.1) with Nitro (`nitro` 3.0.260603-beta)
- **Router**: TanStack Router (`@tanstack/react-router` v1.168.25) with file-based routing
- **Language**: TypeScript (`strict: true` in `tsconfig.json`)
- **Package Manager**: Bun (`bun.lock`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` v4.2.1) + `tw-animate-css`
- **Animations**: Framer Motion (`framer-motion` v12.40.0) + Lenis (`lenis` v1.3.25)

---

### Route Definition & File Layout

Routes are defined using TanStack Router file-based routing inside `src/routes/`. The route tree is auto-generated into `src/routeTree.gen.ts`.

#### Current Existing Products Routes

- `src/routes/products.tsx` — Parent layout wrapper containing `<Outlet />`.
- `src/routes/products.index.tsx` — Index landing page for `/products/`.
- `src/routes/products.$slug.tsx` — Dynamic route handling `/products/$slug`.

#### Target Route Placement for SettleDesk

To place a dedicated landing page for SettleDesk at `/products/settledesk`, the exact file path must be:

```
src/routes/products.settledesk.tsx
```

_Note_: TanStack Router automatically registers `products.settledesk.tsx` as a static child route under `products.tsx` taking precedence over `products.$slug.tsx`.

---

### Import Aliases (`tsconfig.json` & `vite.config.ts`)

- `@/*` -> `./src/*`
- `@crm/*` -> `./SettleDesk/product_website/src/*`

_Example Usage_:

```tsx
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
```

---

## 2. LAYOUT SHELL & NAVIGATION

### Header Navbar Component (`src/components/site/Header.tsx`)

- **File Path**: [src/components/site/Header.tsx](file:///c:/Users/imsto/Desktop/GLAD/src/components/site/Header.tsx)
- **Props**: None (`export function Header()`)
- **Link Definition**: Hardcoded `const nav` and `const productsList` arrays at top of file.
- **Dropdown Support**: Includes a custom hover menu `.products-menu` for products and responsive mobile dropdown toggle.

#### Navbar Code Pattern

```tsx
import { Header } from "@/components/site/Header";

export function MyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{/* Content */}</main>
    </div>
  );
}
```

---

### Footer Components (`src/components/site/Footer.tsx` & `FloatingFooter.tsx`)

- **Main Footer**: [src/components/site/Footer.tsx](file:///c:/Users/imsto/Desktop/GLAD/src/components/site/Footer.tsx) — Rendered per page at the bottom of page containers. Contains "Studio" links, social links, Cal.com scheduling button, and `EmailModal` trigger.
- **Floating Bar Footer**: [src/components/site/FloatingFooter.tsx](file:///c:/Users/imsto/Desktop/GLAD/src/components/site/FloatingFooter.tsx) — Rendered globally in `__root.tsx`. Appears after scrolling 400px down.

---

### Global vs. Per-Page Shell Integration

- **Root Layout (`src/routes/__root.tsx`)**: Renders `<ThemeProvider>`, `<Outlet />`, `<FloatingFooter />`, and `<CookieConsent />`.
- **Navbar & Standard Footer**: Imported and rendered **per-page** inside each route component (`src/routes/about.tsx`, `src/routes/services.tsx`, `src/routes/contact.tsx`).

---

## 3. DESIGN SYSTEM, TOKENS & UTILITIES

### Styling Approach & Theme Tokens

Tailwind v4 theme inline definitions in `src/styles.css` support light and dark modes with neo-brutalist dark glass aesthetics.

#### Color Token Reference

| Token Name       | Light Mode Value          | Dark Mode Value             | Apparent Role                |
| :--------------- | :------------------------ | :-------------------------- | :--------------------------- |
| `--background`   | `#faf8f5` (Warm Ivory)    | `#09090b` (Rich Dark Slate) | Base page background         |
| `--foreground`   | `#1c1917` (Deep Charcoal) | `#fafafa` (Pure Off-White)  | Primary text color           |
| `--surface`      | `#f3efea`                 | `#18181b`                   | Secondary surface background |
| `--surface-2`    | `#e9e2d8`                 | `#27272a`                   | Card & input hover surface   |
| `--card`         | `#ffffff`                 | `#09090b`                   | Card background              |
| `--border`       | `#1c1917`                 | `#27272a`                   | Border & divider color       |
| `--brand`        | `#059669` (Emerald)       | `#22c55e` (Neon Green)      | Primary brand accent         |
| `--brand-2`      | `#ffc72c` (Yellow)        | `#a3e635` (Lime Green)      | Secondary brand accent       |
| `--brand-3`      | `#1c1917`                 | `#facc15` (Bright Yellow)   | Highlight accent             |
| `--brand-pink`   | `#ff4e88`                 | `#ff3399`                   | Playful accent               |
| `--brand-blue`   | `#00b4d8`                 | `#33ccff`                   | Tech accent                  |
| `--brand-purple` | `#7209b7`                 | `#b266ff`                   | Creative accent              |

---

### Typography Scale

- **Display Font**: `"Space Grotesk"`, ui-sans-serif, system-ui (headings `h1`-`h4`)
- **Body Font**: `"Inter"`, ui-sans-serif, system-ui (body & controls)

#### Headings & Text Classes

- **Page Hero Heading**: `text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]`
- **Section Heading**: `text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]`
- **Subsection Heading**: `text-xl md:text-2xl font-semibold tracking-tight`
- **Body Large**: `text-lg md:text-xl text-muted-foreground leading-relaxed`
- **Body Base**: `text-sm md:text-base text-muted-foreground leading-relaxed`
- **Eyebrow Tag**: `text-xs uppercase tracking-[0.2em] text-muted-foreground`

---

### Container Layout & Vertical Rhythm

- **Page Container Width**: `mx-auto max-w-7xl px-6`
- **Section Vertical Padding**: `py-20`, `py-24`, or `py-32`
- **Hero Section Padding**: `pt-40 pb-24 md:pt-48 md:pb-32`

---

## 4. REUSABLE COMPONENTS & LITERAL SNIPPETS

### 1. Section Heading (`src/components/site/SectionHeading.tsx`)

```tsx
import { SectionHeading } from "@/components/site/SectionHeading";

<SectionHeading
  eyebrow="Our Products"
  title="Enterprise-Grade Brokerage Operating System"
  sub="Unified property management, agent operations, and live commission payouts."
  center={true}
/>;
```

---

### 2. Scroll Reveal Animations (`src/components/site/Reveal.tsx`)

```tsx
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";

// Single Reveal
<Reveal direction="up" delay={0.1}>
  <h2>Animate On Scroll</h2>
</Reveal>

// Staggered Group
<RevealGroup stagger={0.1} className="grid md:grid-cols-3 gap-6">
  <RevealItem direction="up">
    <div>Card 1</div>
  </RevealItem>
  <RevealItem direction="up">
    <div>Card 2</div>
  </RevealItem>
</RevealGroup>
```

---

### 3. Neo-Brutalist Buttons & Badges (`src/styles.css`)

```tsx
// Primary CTA Button
<button className="btn-primary">
  <span>Start Free Trial</span>
  <ArrowRight className="size-4" />
</button>

// Secondary Button
<button className="btn-secondary">
  <span>Learn More</span>
</button>

// Cal.com Scheduling Button Integration
<button
  data-cal-link="arjun-rajput-2mdsis"
  data-cal-config={JSON.stringify({ layout: "month_view", theme: "dark" })}
  className="btn-primary"
>
  Book a Call
</button>
```

---

### 4. Card Surfaces & Hover Utilities (`src/styles.css`)

```tsx
// Surface Card with Offset Shadow
<div className="surface-card p-8 interactive-card">
  <h3 className="text-xl font-bold">Feature Title</h3>
  <p className="mt-2 text-sm text-muted-foreground">Feature description text.</p>
</div>

// Glass Card
<div className="glass-card p-6">
  <span>Glassmorphic container</span>
</div>
```

---

### 5. Form Fields (`src/components/site/FormFields.tsx`)

```tsx
import { Field, SelectField } from "@/components/site/FormFields";

<form className="space-y-4">
  <Field label="Full Name" name="name" placeholder="John Doe" required />
  <Field label="Email Address" name="email" type="email" placeholder="john@company.com" required />
  <SelectField
    label="Company Size"
    name="size"
    options={["1-10 agents", "10-50 agents", "50+ agents"]}
  />
  <Field
    label="Message"
    name="message"
    textarea
    placeholder="Tell us about your team..."
    required
  />
</form>;
```

---

## 5. SEO, METADATA & FORMS

### Per-Page Meta Tags Pattern

```tsx
export const Route = createFileRoute("/products/settledesk")({
  head: () => ({
    meta: [
      { title: "SettleDesk — Real Estate Brokerage OS | Glad Studio" },
      {
        name: "description",
        content:
          "Run your entire real estate brokerage on one platform. Unified listings, agent mobile app, and automated commission payouts.",
      },
      { property: "og:title", content: "SettleDesk — Real Estate Brokerage OS | Glad Studio" },
      {
        property: "og:description",
        content: "Run your entire real estate brokerage on one platform.",
      },
      { property: "og:url", content: "https://gladstudio.net/products/settledesk" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/products/settledesk" }],
  }),
  component: SettleDeskPage,
});
```

---

### Lead Capture & Form Submissions

Forms submit directly to FormSubmit via AJAX:

```ts
await fetch("https://formsubmit.co/ajax/contact@gladstudio.net", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(formData),
});
```

---

### Build & Audit Status

- **Dev Server**: `npm run dev` (`vite dev`)
- **Typecheck Status**: `npx tsc --noEmit` currently fails due to broken external `@crm` alias paths in placeholder files `products.$slug.tsx` and `products.index.tsx`. Native agency components in `src/components/site` pass strictly.

---

_End of gladstudio.net conventions document._
