import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import "../_libs/seroval.mjs";
import { R as Rocket, c as ArrowRight, P as PanelsTopLeft, g as Smartphone, f as Sparkles, W as Workflow, n as CircleCheck, D as Database, S as ShieldCheck, u as Server, e as Check, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const mvpTypes = [{
  icon: PanelsTopLeft,
  title: "SaaS & Web Application MVPs",
  description: "Full-stack multi-tenant web applications engineered with React, TypeScript, PostgreSQL, and secure role-based access control.",
  deliverables: ["Multi-tenant data isolation", "Stripe / Razorpay payment gateways", "Interactive analytics & management dashboards", "Automated user onboarding flows"]
}, {
  icon: Smartphone,
  title: "Cross-Platform Mobile MVPs",
  description: "Native-feel iOS and Android mobile applications built on Flutter with offline-first local caching and push notifications.",
  deliverables: ["Single codebase for iOS & Android", "Secure biometric authentication", "Camera, GPS, and device sensor access", "TestFlight & Google Play beta distribution"]
}, {
  icon: Sparkles,
  title: "AI & LLM-Powered MVPs",
  description: "Intelligent software systems integrating OpenAI, Claude, LangChain, or custom RAG pipelines to automate complex workflows.",
  deliverables: ["Contextual RAG document retrieval", "Vector search with pgvector", "Deterministic guardrails & evaluation suites", "Cost-optimized token routing"]
}, {
  icon: Workflow,
  title: "Workflow & Internal Tool MVPs",
  description: "Custom business portals and automated operations backends replacing fragile manual spreadsheets and legacy systems.",
  deliverables: ["Custom CRUD interfaces & approval loops", "Automated email & webhook triggers", "Third-party REST API integrations", "Immutable audit trail logging"]
}];
const processPhases = [{
  step: "01",
  title: "Product Scope & Technical Blueprinting",
  description: "We dissect your product vision, eliminate non-essential features, and define the core technical architecture, entity-relationship diagrams, and API boundaries.",
  focus: "Scope reduction, database schemas, user journey mapping"
}, {
  step: "02",
  title: "Interactive Wireframes & UI Prototyping",
  description: "Our team designs high-fidelity, clickable prototypes demonstrating complete user flows, navigation states, and micro-interactions before code is written.",
  focus: "Design system setup, component tokens, accessibility"
}, {
  step: "03",
  title: "Sprint-Based Engineering & Integration",
  description: "Senior engineers build frontend interfaces and backend services in structured fortnightly sprints with continuous staging environment updates.",
  focus: "Type-safe APIs, authentication, core business logic"
}, {
  step: "04",
  title: "Quality Assurance, Security & Performance",
  description: "Rigorous end-to-end testing, vulnerability scanning, SQL query optimization, and Lighthouse web vitals audits ensure launch-day stability.",
  focus: "Load testing, data validation, zero-leakage security"
}, {
  step: "05",
  title: "Production Deployment & Handoff",
  description: "We deploy your production infrastructure with automated CI/CD pipelines, configure domain DNS and monitoring, and transfer complete IP and repository access.",
  focus: "Cloud provisioning, logging, documentation handoff"
}];
const faqItems = [{
  q: "What is MVP development?",
  a: "MVP development is the process of engineering a functional, early version of a software product containing core features needed to validate market demand with real users. By focusing strictly on high-impact capabilities, businesses minimize development risk and accelerate time to market."
}, {
  q: "Why choose GLAD Studio for MVP development in India?",
  a: "GLAD Studio delivers production-grade software engineering combining rapid product prototyping, scalable database design, clean TypeScript and Python codebases, and complete intellectual property ownership. We operate as an embedded senior engineering partner rather than a transactional outsourcing agency."
}, {
  q: "What deliverables are included in an MVP build?",
  a: "Every GLAD Studio MVP includes fully documented source code, production database schemas, secure authentication, API endpoints, CI/CD automated deployments, and administrative controls. You receive a fully functioning, launch-ready application without vendor lock-in."
}, {
  q: "How does GLAD Studio ensure MVP architecture scales after launch?",
  a: "We architect MVPs using modular component hierarchies, strict type safety, PostgreSQL relational schemas, and containerized backends that allow seamless feature expansion without costly rewrites. The foundations established in the MVP directly support subsequent v2 and enterprise iterations."
}, {
  q: "Can GLAD develop both SaaS and mobile MVPs?",
  a: "Yes, GLAD Studio engineers multi-tenant SaaS web platforms with automated billing and cross-platform mobile MVPs using Flutter and React Native. Both platforms share unified backend APIs, maintaining consistent business rules and synchronized data."
}, {
  q: "Who owns the intellectual property and code of the MVP?",
  a: "You retain 100% ownership of all source code, database architectures, digital assets, and intellectual property created during the engagement. All repositories, cloud credentials, and design artifacts are transferred directly to your organization."
}];
function MvpDevelopmentPage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "MVP Development" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c] mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "MVP Development India" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]", children: [
            "MVP Development for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand-pink)", children: "Startups and Businesses" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl", children: "Turn validated product concepts and business requirements into production-ready web, mobile, and SaaS MVPs. GLAD Studio engineers high-velocity, scalable digital products backed by senior engineers, type-safe architectures, and 100% intellectual property ownership." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discuss Your MVP Scope" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "View Case Studies" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Type-Safe" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "React & TypeScript Stack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "PostgreSQL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Relational Data Integrity" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "100% IP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Complete Code Ownership" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Production" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Day-One Scalable Systems" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Custom MVP Engineering" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "What Kind of MVPs We Build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "We specialize in custom MVP development for ambitious startups and businesses seeking to validate product-market fit, onboard early adopters, and secure funding with a credible, high-performance product." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: mvpTypes.map((type) => {
        const Icon = type.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#e5b84c] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: type.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: type.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3", children: "Included Features & Capabilities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: type.deliverables.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-[#10b981] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, item)) })
          ] })
        ] }) }, type.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Development Lifecycle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Our 5-Phase MVP Engineering Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "We eliminate ambiguity through structured sprint cycles, transparent architectural blueprints, and rapid staging environment deployments." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3 lg:grid-cols-5", children: processPhases.map((phase) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border relative flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-3xl font-black text-[#e5b84c] mb-3", children: phase.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base font-display text-foreground mb-2", children: phase.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: phase.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/60 text-[11px] font-mono text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Focus:" }),
          " ",
          phase.focus
        ] })
      ] }, phase.step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Production Readiness" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground leading-tight", children: "Architected for Growth, Not Just Validation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: "Many MVP development agencies build throwaway prototypes that require total rewrites when scaling. At GLAD Studio, we build on clean architectural patterns that carry your product through product-market fit to enterprise adoption." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[#10b981] shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Structured PostgreSQL Schemas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Strict relational constraints, indexed foreign keys, and typed schema migrations prevent data corruption from day one." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[#10b981] shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Role-Based Access Control (RBAC)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Granular user permissions, tenant-level data isolation, and secure session management protect sensitive customer records." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[#10b981] shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Automated CI/CD & Cloud Infrastructure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Continuous integration pipelines with automated preview environments ensure flawless updates with zero downtime." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 md:p-8 rounded-2xl border-2 border-border shadow-xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold font-display text-foreground", children: "What is Included in Every GLAD MVP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: ["100% Source Code Ownership", "Production Database Setup", "User Authentication & Roles", "Custom Responsive UI Design", "REST / GraphQL API Endpoints", "Automated CI/CD Deployment", "SSL & DNS Configuration", "Technical Documentation & Handoff"].map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-[#10b981] shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feat })
        ] }, feat)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background border border-border/80 text-xs text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground block mb-1", children: "Transparent Collaboration:" }),
          "You receive real-time access to the git repository, staging builds, and sprint planning boards throughout the entire engagement."
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Engineering Case Studies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Software Systems Built by GLAD Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "Explore real-world software products, multi-tenant SaaS platforms, and intelligent systems engineered by our team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]", children: "SaaS Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Stock Management Suite" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Multi-tenant enterprise inventory and supply chain application built with type-safe PostgreSQL data scoping and real-time dashboard analytics." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/stock-management", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]", children: "Conversational AI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "AI Mock Interview Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Low-latency conversational AI engine conducting real-time technical assessments with automated speech evaluation and structured feedback." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/ai-mock-interview", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]", children: "Mobile Application" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Prayas App" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Decentralized medical inventory control and resource logistics mobile app engineered for high-reliability field operational tracking." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/prayas-app", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Service Ecosystem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Explore Related Engineering Capabilities" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/web-application-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "size-5 text-[#00b4d8] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#00b4d8] transition-colors", children: "Web Applications →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Custom business dashboards, SaaS portals, and scalable backends." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/mobile-app-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-5 text-[#7209b7] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#7209b7] transition-colors", children: "Mobile Apps →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Cross-platform Flutter & React Native applications for iOS & Android." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-[#e5b84c] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors", children: "AI Solutions →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "LLM applications, RAG pipelines, AI agents, and computer vision." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/business-automation", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-5 text-[#10b981] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#10b981] transition-colors", children: "Business Automation →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "n8n workflows, API integrations, and lead enrichment pipelines." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "MVP Development Insights & Answers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Direct answers to key technical and operational questions regarding MVP development in India." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqItems.map((item, idx) => {
        const isOpen = openFaq === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card rounded-xl border border-border overflow-hidden transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : idx), className: "w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer", "aria-expanded": isOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#e5b84c]" : "text-muted-foreground"}` })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold font-display text-foreground", children: "Ready to Build Your Product MVP?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "Partner with GLAD Studio to engineer a production-ready software MVP with clean architecture, fixed scope, and rapid execution." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule MVP Strategy Call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "Send Project Requirements" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  MvpDevelopmentPage as component
};
