import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { R as Reveal } from "./Reveal-D3D4kp9B.mjs";
import { S as SectionHeading } from "./SectionHeading-D_TkcIwC.mjs";
import { g as gladHmsData, h as hotelBgImg } from "./router-CJ551Cx9.mjs";
import { P as ProductHero, a as ProductThreeTier, b as ProductFeatureSplit, c as ProductWorkflowSequence, d as ProductPricingTable, e as ProductFAQAccordion, f as ProductCTA } from "./ProductWorkflowSequence-Cwd7gVqp.mjs";
import "../_libs/seroval.mjs";
import { v as Lock, S as ShieldCheck, D as Database } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/calcom__embed-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-BPMMSW8U.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
function GladHmsLandingPage() {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHero, { config: gladHmsData.hero, product: "glad-hms", onPrimaryCtaClick: () => setIsModalOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductThreeTier, { tiers: gladHmsData.threeTier, product: "glad-hms", eyebrow: "One Platform, Dedicated Roles", title: "Every Department Gets the Right Operational Tools", sub: "Tailored consoles engineered for front desk clerks, mobile housekeeping staff, and hotel owners." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFeatureSplit, { features: gladHmsData.features, product: "glad-hms" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative isolate overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-20 mix-blend-luminosity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hotelBgImg, alt: "GLAD HMS Hotel Management System", className: "w-full h-full object-cover object-center brightness-110 contrast-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 relative border-t border-border bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Architectural Integrity", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Multi-Tenant Safety. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Zero Concurrency Collisions." })
          ] }), sub: "GLAD HMS is engineered with tenant-scoped query filters and database-level pessimistic row locks, ensuring your guest records and room availability remain 100% accurate.", center: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: gladHmsData.securityPillars.map((pillar, idx) => {
            const Icon = idx === 0 ? Lock : idx === 1 ? ShieldCheck : Database;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animated-corner-card surface-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-corner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-arrow", children: "→" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-4 relative z-10 icon-box transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg font-display relative z-10 transition-colors duration-300", children: pillar.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-300", children: pillar.description })
            ] }, pillar.title);
          }) })
        ] }) }),
        gladHmsData.steps && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductWorkflowSequence, { steps: gladHmsData.steps, eyebrow: "Operational Flow", title: "From Reservation to Guest Check-Out & Revenue Reporting", sub: "A 4-phase sequence designed to get your hotel onboarded, rooms configured, and guest operations running in real time." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 relative border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: gladHmsData.aboutStory.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-5xl font-bold font-display leading-tight", children: gladHmsData.aboutStory.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: gladHmsData.aboutStory.body1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: gladHmsData.aboutStory.body2 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 grid gap-4 sm:grid-cols-2", children: gladHmsData.aboutStory.beliefs.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animated-corner-card surface-card p-5 rounded-xl relative overflow-hidden group cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-corner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-arrow", children: "→" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm font-display text-foreground relative z-10 transition-colors duration-300", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-300", children: b.desc })
          ] }, b.title)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductPricingTable, { plans: gladHmsData.pricing, eyebrow: "Pricing", title: "Simple Plans. Built for Independent & Multi-Property Hotels.", sub: "Transparent pricing with zero hidden fees. 15-day free trial on all plans.", onSelectPlan: () => setIsModalOpen(true) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFAQAccordion, { faqs: gladHmsData.faqs, eyebrow: "Frequently Asked Questions", title: "Everything You Need to Know About GLAD HMS" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 border-t border-border bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-bold tracking-wider text-muted-foreground", children: "More from GLAD Studio Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-foreground mt-0.5", children: "Looking for Real Estate Brokerage Operating Software?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/settledesk", className: "text-xs md:text-sm font-bold text-[#e5b84c] hover:text-foreground transition-colors inline-flex items-center gap-1.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore SettleDesk SaaS →" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCTA, { title: "Ready to Modernize Your Hotel Operations?", sub: "See how GLAD HMS unifies your room reservations, front desk, mobile housekeeping, and revenue analytics on one modular platform.", primaryCtaText: "Talk About Your Hotel", onPrimaryCtaClick: () => setIsModalOpen(true) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  GladHmsLandingPage as component
};
