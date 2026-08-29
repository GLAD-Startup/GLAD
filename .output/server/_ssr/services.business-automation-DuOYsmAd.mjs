import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import "../_libs/seroval.mjs";
import { W as Workflow, c as ArrowRight, U as UserCheck, z as GitMerge, I as Repeat, J as FileCheckCorner, n as CircleCheck, v as Lock, s as Clock, S as ShieldCheck, p as Cpu, f as Sparkles, P as PanelsTopLeft, R as Rocket, g as Smartphone, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const automationSolutions = [{
  icon: UserCheck,
  title: "Lead Sourcing & Enrichment Pipelines",
  description: "Automate high-volume outbound prospecting by discovering company domains, verifying contact emails, and enriching CRM profiles with structured metadata.",
  features: ["Automated website scraping & company data extraction", "SMTP email verification & deliverability scoring", "Direct synchronization with HubSpot, Salesforce, or Postgres", "LLM classification of company size and industry verticals"]
}, {
  icon: GitMerge,
  title: "Cross-System API Integrations",
  description: "Eliminate manual double-entry by syncing records between billing systems, internal ERPs, customer support platforms, and relational databases.",
  features: ["Bi-directional webhook event synchronization", "Stripe & Razorpay payment reconciliation triggers", "Automated Slack / Microsoft Teams alerting feeds", "Database ETL pipelines with PostgreSQL & Supabase"]
}, {
  icon: Repeat,
  title: "n8n Workflow Orchestration",
  description: "Self-hosted, transparent workflow automation engines executing complex branching logic, multi-stage approval loops, and automated error retries.",
  features: ["Custom JavaScript & Python data transformation nodes", "Self-hosted n8n deployment for complete data privacy", "Dead-letter queues and automated incident alerts", "Audit logs of every workflow execution step"]
}, {
  icon: FileCheckCorner,
  title: "Document Parsing & Back-Office Automation",
  description: "Convert unstructured invoices, contracts, receipts, and customer emails into clean, structured database entries using OCR and language models.",
  features: ["Automated PDF & receipt table extraction", "Zero-shot LLM categorization & data normalization", "ERP purchase order auto-creation", "Exception handling queues for human review"]
}];
const reliabilityPillars = [{
  icon: Lock,
  title: "Idempotency & Deduplication",
  description: "Unique transaction idempotency keys prevent duplicate orders, double-charges, and repeated webhook execution during network retries."
}, {
  icon: Clock,
  title: "Exponential Backoff & Retries",
  description: "Automated retry mechanisms with exponential backoff gracefully handle third-party API rate limits and intermittent outages."
}, {
  icon: ShieldCheck,
  title: "Data Privacy & Local Hosting",
  description: "Self-hosted orchestration options ensure proprietary customer records and financial data never leave your virtual private cloud (VPC)."
}, {
  icon: Cpu,
  title: "Full Audit Trails & Alerting",
  description: "Every automated transaction logs payload inputs, timestamps, response codes, and execution runtimes with instant failure alerts."
}];
const processStages = [{
  step: "01",
  title: "Process Discovery & Mapping",
  description: "We audit your team's manual operations, identify data bottlenecks, and blueprint a clear end-to-end integration architecture."
}, {
  step: "02",
  title: "Sandbox Pipeline Build",
  description: "We engineer the webhook handlers, API connectors, and transformation scripts in an isolated testing environment with sample payloads."
}, {
  step: "03",
  title: "Edge-Case Hardening & Retry Logic",
  description: "We simulate API rate limits, invalid input data, and network timeouts to build robust fail-safes and automated alert triggers."
}, {
  step: "04",
  title: "Production Deployment & Monitoring",
  description: "We roll out the live automations, verify end-to-end data integrity across production tools, and provide comprehensive execution dashboards."
}];
const faqItems = [{
  q: "What is business process automation?",
  a: "Business process automation is the use of software integrations, APIs, and workflow orchestration to execute repetitive operational tasks automatically without manual human intervention. It streamlines operations, eliminates data entry errors, and allows teams to focus on high-leverage strategic work."
}, {
  q: "What business processes can GLAD Studio automate?",
  a: "GLAD Studio automates sales lead prospecting and enrichment, multi-system CRM synchronization, invoice parsing and reconciliation, employee and customer onboarding, and operational data extraction. We build customized workflows tailored to your specific software stack."
}, {
  q: "Can GLAD connect different business systems and tools?",
  a: "Yes, we integrate disparate software systems including CRMs, ERPs, payment gateways, SQL databases, email providers, and internal tools using resilient webhooks and REST APIs. Our connectors bridge modern cloud services with proprietary legacy databases."
}, {
  q: "Can AI be used for business automation?",
  a: "Yes, we integrate language models into automated workflows to parse unstructured emails, classify incoming tickets, extract structured fields from documents, and validate complex operational data. This bridges the gap where traditional rule-based scripts fail."
}, {
  q: "Can GLAD build lead enrichment automation?",
  a: "Yes, we engineer high-throughput lead enrichment pipelines that scrape company websites, verify email deliverability, append demographic data, and automatically update CRM contact records with verified buyer information."
}, {
  q: "Can GLAD build n8n workflows and self-hosted instances?",
  a: "Yes, we deploy self-hosted and cloud n8n workflow instances with custom Python/JavaScript function nodes, automated error notifications, and resilient retry mechanisms. Self-hosted instances keep 100% of your business data within your own infrastructure."
}];
function BusinessAutomationPage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "Business Automation" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#10b981] mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Business Automation Company India" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]", children: [
            "Business Automation and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand)", children: "AI Workflows" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl", children: "GLAD Studio builds custom business automation systems using APIs, event-driven workflows, AI agents, and integrations to eliminate repetitive operational work, connect fragmented software stacks, and ensure data integrity across your entire organization." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Automate Your Workflows" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "View Automation Projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "n8n & Node" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Self-Hosted Workflows" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "API Sync" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Resilient Webhooks" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "AI Parsers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Unstructured Data Cleanse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Zero Leaks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Enterprise Security" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#10b981]", children: "Automation Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "What Business Processes We Automate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "We design custom automation pipelines that replace error-prone manual spreadsheets, connect incompatible SaaS tools, and accelerate core business operations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: automationSolutions.map((sol) => {
        const Icon = sol.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: sol.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: sol.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3", children: "Workflow Deliverables" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: sol.features.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-[#10b981] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, item)) })
          ] })
        ] }) }, sol.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#10b981]", children: "Architecture Standards" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Built for Enterprise Reliability & Data Integrity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "Automated workflows must be bulletproof against network disconnects, API schema updates, and intermittent service downtime." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: reliabilityPillars.map((pillar) => {
        const Icon = pillar.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-6 rounded-2xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base font-display text-foreground mb-2", children: pillar.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: pillar.description })
        ] }) }, pillar.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#10b981]", children: "Delivery Lifecycle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Our 4-Phase Automation Engineering Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "We design, test, and deploy resilient automations that seamlessly integrate with your existing operational infrastructure." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: processStages.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-6 rounded-2xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-3xl font-black text-[#10b981] mb-3", children: stage.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base font-display text-foreground mb-2", children: stage.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: stage.description })
      ] }) }, stage.step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#10b981]", children: "Proven Automations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Real Automation Case Studies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#10b981]", children: "Pipeline Automation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Lead Enrichment System" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Automated scraping and data cleansing pipeline enriching thousands of inbound and outbound company leads with verified contact details." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/lead-enrichment", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#10b981] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#10b981]", children: "Document Workflow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Fluxor File Orchestration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Automated desktop document organizer analyzing file content and metadata to categorize, rename, and sort cluttered directories." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/fluxor", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#10b981] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#10b981]", children: "Inventory Automation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Stock Management Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Real-time inventory sync engine automating stock level alerts, purchase order drafts, and multi-warehouse supply chain transfers." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/stock-management", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#10b981] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#10b981]", children: "Related Offerings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Connected Engineering Services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-[#e5b84c] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors", children: "AI Solutions →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "LLM applications, RAG pipelines, and intelligent agents." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/web-application-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "size-5 text-[#00b4d8] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#00b4d8] transition-colors", children: "Web Applications →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Custom full-stack web platforms, admin dashboards, and APIs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/mvp-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "size-5 text-[#ff4e88] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#ff4e88] transition-colors", children: "MVP Development →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Rapid v1 product delivery for startups and businesses." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/mobile-app-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-5 text-[#7209b7] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#7209b7] transition-colors", children: "Mobile Apps →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Cross-platform Flutter & React Native mobile applications." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#10b981]", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Business Automation FAQs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Concise answers to common questions about implementing business process automation in India." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqItems.map((item, idx) => {
        const isOpen = openFaq === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card rounded-xl border border-border overflow-hidden transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : idx), className: "w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer", "aria-expanded": isOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#10b981]" : "text-muted-foreground"}` })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold font-display text-foreground", children: "Ready to Automate Your Business Operations?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "Eliminate tedious manual tasks and unify your software ecosystem with custom API integrations and AI-powered workflows from GLAD Studio." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule Automation Audit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "Discuss Your Workflows" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  BusinessAutomationPage as component
};
