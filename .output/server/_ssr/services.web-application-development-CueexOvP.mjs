import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import "../_libs/seroval.mjs";
import { P as PanelsTopLeft, c as ArrowRight, t as Boxes, u as Server, S as ShieldCheck, n as CircleCheck, D as Database, K as KeyRound, p as Cpu, v as Lock, R as Rocket, g as Smartphone, f as Sparkles, W as Workflow, l as ChevronDown } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
import "./router-CJ551Cx9.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/calcom__embed-react.mjs";
import "./server-BPMMSW8U.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const webAppCapabilities = [{
  icon: Boxes,
  title: "Multi-Tenant SaaS Platforms",
  description: "Scalable software-as-a-service architectures supporting thousands of independent tenant workspaces with isolated data, subscription billing, and customizable roles.",
  features: ["Tenant-scoped PostgreSQL data isolation", "Automated recurring subscription billing", "Custom domain & workspace provisioning", "Comprehensive super admin and tenant portals"]
}, {
  icon: PanelsTopLeft,
  title: "Custom Business Portals & Dashboards",
  description: "High-density operational dashboards and portals that visualize complex operational metrics, track real-time inventory, and streamline team workflows.",
  features: ["Real-time data visualization charts", "Complex multi-filter data tables & exports", "Granular user permissions & approval queues", "Responsive interfaces across desktop & tablet"]
}, {
  icon: Server,
  title: "High-Throughput APIs & Microservices",
  description: "Type-safe REST and GraphQL backend services built on FastAPI and Node.js with automated OpenAPI documentation, rate limiting, and background workers.",
  features: ["FastAPI & async Python execution", "Type-safe tRPC / REST endpoints", "Redis caching & rate limiting", "Asynchronous background task queues"]
}, {
  icon: ShieldCheck,
  title: "Secure Enterprise Web Portals",
  description: "Mission-critical web portals engineered with zero-trust security principles, encrypted file transmissions, and immutable audit ledgers.",
  features: ["End-to-end client-side file encryption", "MFA & biometric SSO authentication", "Tamper-proof audit logging", "OWASP compliance & vulnerability hardening"]
}];
const archPillars = [{
  icon: Database,
  title: "Relational Data Architecture",
  description: "PostgreSQL schemas designed with strict foreign key constraints, composite indexing, JSONB flexibility, and fixed-point NUMERIC precision for financial transactions."
}, {
  icon: KeyRound,
  title: "Authentication & Granular RBAC",
  description: "Multi-layered permission matrices supporting owner, admin, manager, and custom viewer roles with secure HTTP-only JWT sessions and OAuth2 providers."
}, {
  icon: Cpu,
  title: "Asynchronous Worker Pipelines",
  description: "Decoupled background job queues using Celery, BullMQ, or Redis to process resource-intensive tasks such as PDF generation, data imports, and email dispatch."
}, {
  icon: Lock,
  title: "Defense-in-Depth Security",
  description: "Automated SQL injection prevention, cross-site scripting (XSS) sanitization, CORS policies, rate limiting, and encrypted environment secret management."
}];
const faqItems = [{
  q: "What web application development services does GLAD Studio offer?",
  a: "GLAD Studio engineers custom web applications including multi-tenant SaaS platforms, enterprise business dashboards, customer portals, RESTful API backends, and internal operational tools. We build end-to-end solutions from architecture design to deployment and monitoring."
}, {
  q: "What tech stack does GLAD Studio use for custom web applications?",
  a: "Our core web development stack includes React, TypeScript, Next.js, and TanStack for frontends, paired with Node.js, FastAPI, or Django on the backend and PostgreSQL for relational data storage. We select technologies based on scalability, maintainability, and client requirements."
}, {
  q: "How does GLAD handle multi-tenant SaaS architecture and security?",
  a: "We implement strict tenant scoping using PostgreSQL Row-Level Security (RLS) or mandatory tenant_id query filters, ensuring complete data isolation between customer accounts. One tenant can never query or view another tenant's records under any circumstance."
}, {
  q: "Can GLAD Studio build custom role-based access control (RBAC)?",
  a: "Yes, we architect granular RBAC systems with customized permission matrices, JWT token validation, single sign-on (SSO), and immutable audit logs. Each user role is restricted to authorized actions and data views across the platform."
}, {
  q: "Does GLAD Studio integrate third-party APIs and payment processors?",
  a: "Yes, we integrate third-party APIs including Stripe, Razorpay, HubSpot, Salesforce, AWS S3, Supabase, and transactional email providers using resilient webhook handlers. Every integration features retry strategies and idempotency checks to prevent duplicate transactions."
}, {
  q: "How does GLAD Studio ensure high performance in web applications?",
  a: "We enforce strict bundle size limits, server-side rendering, efficient database query indexing, Redis caching, and asset compression to achieve sub-second page response times. Our applications are tested under concurrent loads before launch."
}];
function WebApplicationDevelopmentPage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-xs text-muted-foreground font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "Web Application Development" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#00b4d8] mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Web Application Development India" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]", children: [
            "Custom Web Application",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand-blue)", children: "Development" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl", children: "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups, and product teams. We engineer type-safe, multi-tenant digital systems combining modern React frontends, robust Python and Node.js APIs, and relational PostgreSQL data architectures." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Request Technical Consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "View Web Projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "React 19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Type-Safe TypeScript" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "FastAPI / Node" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "High-Throughput APIs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Multi-Tenant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Row-Level Security (RLS)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Sub-Second" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Optimized Performance" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#00b4d8]", children: "Application Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Web Applications Engineered for Enterprise Demands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "We design and develop custom web applications that solve core operational bottlenecks, unify fragmented business data, and deliver frictionless user experiences at scale." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: webAppCapabilities.map((cap) => {
        const Icon = cap.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#00b4d8] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: cap.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: cap.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3", children: "Technical Highlights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: cap.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-[#00b4d8] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feat })
            ] }, feat)) })
          ] })
        ] }) }, cap.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#00b4d8]", children: "Backend & Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Core Technical Foundations We Build Into Every App" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "Clean software engineering requires robust backend patterns, strict database schema contracts, and multi-layered security." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: archPillars.map((p) => {
        const Icon = p.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-6 rounded-2xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#00b4d8] mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base font-display text-foreground mb-2", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: p.description })
        ] }) }, p.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#00b4d8]", children: "Proven Web Implementations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Featured Web Engineering Case Studies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#00b4d8]", children: "Inventory SaaS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Stock Management Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Enterprise-grade multi-tenant web application handling real-time stock allocation, warehouse tracking, and automated restocking threshold triggers." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/stock-management", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#00b4d8] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Full Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#00b4d8]", children: "Security Web App" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Q-SAFE Secure Portal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Zero-knowledge encrypted web transmission portal with client-side file chunking, ephemeral link expiration, and cryptographic access validation." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/q-safe", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#00b4d8] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Full Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#00b4d8]", children: "Proprietary SaaS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "SettleDesk Brokerage OS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Multi-tenant real estate brokerage operating system connecting property inventories, deal cascades, versioned commission plans, and payout ledgers." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/settledesk", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#00b4d8] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore SettleDesk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#00b4d8]", children: "Interconnected Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Complementary Software Solutions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/mvp-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "size-5 text-[#ff4e88] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#ff4e88] transition-colors", children: "MVP Development →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Rapid v1 product delivery for startups and businesses." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/mobile-app-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-5 text-[#7209b7] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#7209b7] transition-colors", children: "Mobile Apps →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Cross-platform Flutter & React Native applications." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-[#e5b84c] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors", children: "AI Solutions →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "LLM applications, RAG pipelines, and intelligent agents." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/business-automation", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-5 text-[#10b981] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#10b981] transition-colors", children: "Business Automation →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "n8n orchestration, API integrations, and ETL pipelines." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#00b4d8]", children: "Expert Q&A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Web Application Development FAQs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Concise answers to technical and operational questions regarding web application development in India." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqItems.map((item, idx) => {
        const isOpen = openFaq === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card rounded-xl border border-border overflow-hidden transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : idx), className: "w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer", "aria-expanded": isOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#00b4d8]" : "text-muted-foreground"}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            height: 0
          }, animate: {
            opacity: 1,
            height: "auto"
          }, exit: {
            opacity: 0,
            height: 0
          }, transition: {
            duration: 0.2
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3", children: item.a }) }) })
        ] }, item.q);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/20 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold font-display text-foreground", children: "Let's Engineer Your Web Application" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "From SaaS platforms to complex enterprise dashboards, partner with GLAD Studio for clean code, scalable architectures, and reliable delivery." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Architecture Call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "Submit Requirements" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  WebApplicationDevelopmentPage as component
};
