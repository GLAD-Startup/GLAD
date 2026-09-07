import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import "../_libs/seroval.mjs";
import { g as Smartphone, c as ArrowRight, w as WifiOff, x as FingerprintPattern, y as Bell, n as CircleCheck, R as Rocket, P as PanelsTopLeft, f as Sparkles, W as Workflow, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const mobileFeatures = [{
  icon: Smartphone,
  title: "Cross-Platform Single Codebase",
  description: "Build once, deploy seamlessly to both Apple iOS and Google Android with shared business logic and native device rendering.",
  bullets: ["Unified Flutter / Dart or React Native codebases", "Native Cupertino & Material 3 component fidelity", "Half the ongoing maintenance cost of dual native apps", "Synchronized feature rollouts across platforms"]
}, {
  icon: WifiOff,
  title: "Offline-First Data Architecture",
  description: "Reliable mobile operations even with unstable cellular connectivity using local SQLite caching and background synchronization.",
  bullets: ["Optimistic UI updates for zero-lag user experiences", "Automatic background queue reconciliation", "Local conflict resolution algorithms", "Encrypted on-device SQLite / Hive storage"]
}, {
  icon: FingerprintPattern,
  title: "Biometric Auth & Mobile Security",
  description: "Enterprise-grade authentication leveraging hardware security enclaves, biometric validation, and automated token refreshes.",
  bullets: ["Face ID, Touch ID, and Android BiometricPrompt", "Secure Keystore / Keychain secret management", "SSL certificate pinning against MITM vectors", "Session timeout and remote wipe capabilities"]
}, {
  icon: Bell,
  title: "Push Notifications & Real-Time Sync",
  description: "Targeted push notifications, deep linking, and real-time state updates powered by Firebase Cloud Messaging and WebSockets.",
  bullets: ["Firebase Cloud Messaging (FCM) integration", "Custom contextual deep linking to specific screens", "Background silent push data updates", "Real-time event subscriptions"]
}];
const mobileLifecycle = [{
  phase: "01",
  title: "Mobile UX & Gesture Architecture",
  description: "Design touch-optimized interfaces, thumb-friendly navigation patterns, and fluid micro-interactions tailored for mobile ergonomics."
}, {
  phase: "02",
  title: "Cross-Platform Core Implementation",
  description: "Engineering reactive state management, typed API client integration, local databases, and hardware sensor bridges."
}, {
  phase: "03",
  title: "Real Device Testing Matrix",
  description: "Comprehensive testing across diverse screen sizes, operating system versions, low-memory conditions, and fluctuating network speeds."
}, {
  phase: "04",
  title: "Store Submission & CI/CD Pipelines",
  description: "Automating builds with Fastlane, managing TestFlight / Google Play beta distribution, and orchestrating production releases."
}];
const faqItems = [{
  q: "What mobile app development services does GLAD Studio provide?",
  a: "GLAD Studio develops custom cross-platform mobile applications for iOS and Android using Flutter and React Native, covering UI/UX design, API integration, offline caching, and app store deployment. We engineer products ranging from consumer apps to enterprise field agent tools."
}, {
  q: "Why does GLAD Studio use Flutter for mobile development?",
  a: "Flutter enables a single codebase to deliver high-performance 60fps native experiences on both iOS and Android, dramatically reducing engineering costs and maintenance overhead while ensuring pixel-perfect design consistency across devices."
}, {
  q: "Can GLAD Studio build mobile apps with offline capability?",
  a: "Yes, we implement offline-first architectures utilizing local SQLite databases and optimistic UI updates that automatically synchronize with the cloud once network connectivity is restored. This is ideal for field operations, delivery tracking, and healthcare platforms."
}, {
  q: "How does GLAD Studio secure mobile applications?",
  a: "We implement on-device biometric authentication (Face ID / Fingerprint), secure hardware keychain storage for access tokens, SSL pinning, and encrypted local storage to safeguard user credentials and proprietary business data."
}, {
  q: "Does GLAD handle App Store and Google Play distribution?",
  a: "Yes, we configure automated Fastlane CI/CD release pipelines, manage internal TestFlight and Google Play internal testing tracks, and handle submission guidelines for store approval."
}, {
  q: "Can our mobile app connect to existing backend databases and APIs?",
  a: "Yes, our mobile apps integrate with REST, GraphQL, Firebase, and PostgreSQL backends via secure token-authenticated endpoints, ensuring full real-time data synchronization with your web portals."
}];
function MobileAppDevelopmentPage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "Mobile App Development" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#7209b7] mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mobile App Development India" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]", children: [
            "Custom Mobile App",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand-purple)", children: "Development" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl", children: "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches. We deliver polished iOS and Android apps engineered with Flutter, offline-first data sync, and high-security authentication." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discuss Your Mobile Project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "Explore Mobile Case Studies" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Flutter & Dart" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Single Unified Codebase" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Offline-First" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Local SQLite Sync" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Biometrics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Hardware Keychain Security" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "iOS & Android" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Automated Fastlane CI/CD" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#7209b7]", children: "Engineering Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Cross-Platform Mobile Apps Built for Reliability" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "From on-the-go field operations to customer-facing mobile platforms, we architect applications that feel fast, work seamlessly offline, and maintain strict data synchronization with backend systems." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: mobileFeatures.map((feat) => {
        const Icon = feat.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#7209b7] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: feat.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: feat.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3", children: "Engineering Highlights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: feat.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-[#7209b7] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
            ] }, b)) })
          ] })
        ] }) }, feat.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#7209b7]", children: "Delivery Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "How We Build & Launch Mobile Applications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "Our mobile engineering process combines UX prototyping, native performance profiling, and automated deployment pipelines to ensure frictionless store releases." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: mobileLifecycle.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-6 rounded-2xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-3xl font-black text-[#7209b7] mb-3", children: step.phase }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base font-display text-foreground mb-2", children: step.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: step.description })
      ] }) }, step.phase)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#7209b7]", children: "Real Mobile Implementations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Featured Mobile Engineering Projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#7209b7]", children: "Field Operations App" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Prayas Medical Logistics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Decentralized inventory tracking mobile app engineered for reliable medical resource allocation in low-bandwidth operational environments." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/prayas-app", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#7209b7] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Prayas Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#7209b7]", children: "Real Estate Mobile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "SettleDesk Broker App" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Mobile application for field agents to submit deal contracts, upload closing signatures, and track real-time commission split payouts on iOS & Android." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/settledesk", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#7209b7] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View SettleDesk Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#7209b7]", children: "Hospitality Ops" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "GLAD HMS Mobile Housekeeping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Mobile-optimized task board for housekeeping teams with live room condition state transitions and priority sorting for same-day guest arrivals." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/glad-hms", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#7209b7] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View GLAD HMS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#7209b7]", children: "Related Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Connected Engineering Offerings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/mvp-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "size-5 text-[#ff4e88] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#ff4e88] transition-colors", children: "MVP Development →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Rapid v1 product validation and investor-ready prototypes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/web-application-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "size-5 text-[#00b4d8] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#00b4d8] transition-colors", children: "Web Applications →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Custom SaaS platforms, admin dashboards, and cloud backends." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-[#e5b84c] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors", children: "AI Solutions →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "LLM integrations, RAG pipelines, and conversational AI." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/business-automation", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-5 text-[#10b981] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#10b981] transition-colors", children: "Business Automation →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "n8n workflow orchestration and operational integrations." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#7209b7]", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Mobile App Development Q&A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Direct technical and operational answers regarding mobile app development in India." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqItems.map((item, idx) => {
        const isOpen = openFaq === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card rounded-xl border border-border overflow-hidden transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : idx), className: "w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer", "aria-expanded": isOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#7209b7]" : "text-muted-foreground"}` })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold font-display text-foreground", children: "Let's Build Your Mobile Application" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "From consumer iOS and Android apps to internal operational tools, partner with GLAD Studio for reliable, high-performance cross-platform mobile development." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule Mobile Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "Request a Project Quote" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  MobileAppDevelopmentPage as component
};
