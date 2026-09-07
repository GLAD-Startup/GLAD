import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import "../_libs/seroval.mjs";
import { f as Sparkles, c as ArrowRight, r as BrainCircuit, q as Bot, o as Search, E as Eye, n as CircleCheck, D as Database, S as ShieldCheck, Z as Zap, N as Activity, W as Workflow, P as PanelsTopLeft, R as Rocket, g as Smartphone, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const aiSystems = [{
  icon: BrainCircuit,
  title: "Custom LLM Applications",
  description: "Context-aware applications powered by frontier and open-source language models tailored to your domain-specific data and business logic.",
  capabilities: ["Structured JSON extraction from unstructured text", "Interactive conversational assessment & coaching platforms", "Cost-aware model routing (GPT-4o, Claude 3.5, Llama 3)", "Strict evaluation guardrails & latency monitoring"]
}, {
  icon: Bot,
  title: "Autonomous & Supervised AI Agents",
  description: "Multi-agent systems engineered with LangGraph and CrewAI that plan tasks, invoke external API tools, query databases, and execute operational workflows.",
  capabilities: ["Stateful agent loops with human-in-the-loop approvals", "Dynamic tool calling & external API orchestration", "Self-correcting code and query execution sandboxes", "Deterministic fallback paths for mission-critical operations"]
}, {
  icon: Search,
  title: "Retrieval-Augmented Generation (RAG)",
  description: "Enterprise search and knowledge retrieval engines that ground model responses in your proprietary PDFs, databases, and customer records with zero hallucination.",
  capabilities: ["Hierarchical document chunking & semantic embeddings", "pgvector & hybrid dense/sparse vector search", "Context compression & reciprocal rank fusion (RRF)", "Source citation attribution for auditable outputs"]
}, {
  icon: Eye,
  title: "Computer Vision & Media Intelligence",
  description: "Visual intelligence pipelines that process imagery and video streams for automated classification, OCR extraction, and anomaly detection.",
  capabilities: ["Document OCR & unstructured invoice parsing", "Automated image classification & tagging pipelines", "Media integrity validation & deepfake detection", "Real-time visual quality inspection"]
}];
const engineeringLayers = [{
  icon: Database,
  title: "Vector Data & Retrieval Layer",
  description: "High-dimensional vector storage built on pgvector, Pinecone, or Qdrant with hybrid keyword/semantic search, metadata filtering, and automated embedding updates."
}, {
  icon: ShieldCheck,
  title: "Guardrails & Privacy Isolation",
  description: "Zero data-retention policies, PII anonymization layers, regex-based prompt sanitization, and output schema validation using Pydantic."
}, {
  icon: Zap,
  title: "Model Cost & Latency Routing",
  description: "Intelligent gateway routing that dispatches simple tasks to lightweight models and complex reasoning to frontier models, cutting token expenses by up to 70%."
}, {
  icon: Activity,
  title: "Observability & Evals Framework",
  description: "Continuous logging of prompt tokens, model latency, retrieval recall scores, and automated synthetic evaluation suites against test datasets."
}];
const aiLifecycle = [{
  step: "01",
  title: "Feasibility Spike & Data Audit",
  description: "We inspect your unstructured data assets, evaluate token economics, and validate technical viability with a rapid proof-of-concept benchmark."
}, {
  step: "02",
  title: "Pipeline Architecture & Evaluation Setup",
  description: "We design the RAG or agent architecture, establish baseline evaluation criteria, and implement semantic chunking and embedding strategies."
}, {
  step: "03",
  title: "Model Integration & Tool Grounding",
  description: "We engineer custom FastAPI microservices, connect agent tool definitions, configure pgvector storage, and enforce Pydantic output schemas."
}, {
  step: "04",
  title: "Hardening, Guardrails & Production Launch",
  description: "We run vulnerability scans, configure token caching and fallback handlers, and deploy containerized services with real-time latency monitoring."
}];
const faqItems = [{
  q: "What AI solutions does GLAD Studio build?",
  a: "GLAD Studio engineers custom AI solutions including LLM-powered applications, multi-agent workflows, retrieval-augmented generation (RAG) pipelines, computer vision systems, and intelligent business automation backends. We focus on practical software engineering that delivers measurable operational ROI rather than theoretical prototypes."
}, {
  q: "Does GLAD build AI agents?",
  a: "Yes, GLAD Studio builds autonomous and semi-autonomous AI agents utilizing frameworks like LangGraph and CrewAI that execute complex multi-step workflows, query external databases, call REST APIs, and adhere to strict deterministic guardrails. Our agents support human-in-the-loop checkpoints for sensitive actions."
}, {
  q: "Can GLAD build RAG applications?",
  a: "Yes, we architect enterprise RAG (Retrieval-Augmented Generation) systems that connect language models to proprietary corporate knowledge bases using vector embeddings, pgvector storage, and hybrid reranking to deliver grounded, hallucination-free answers with precise source citations."
}, {
  q: "Can GLAD integrate LLMs into existing software?",
  a: "Yes, we integrate frontier models such as OpenAI GPT-4o, Anthropic Claude 3.5, and open-source models into existing web, mobile, and enterprise platforms via secure, low-latency API microservices. We handle token caching, prompt engineering, and structured JSON parsing seamlessly."
}, {
  q: "Can GLAD automate business workflows using AI?",
  a: "Yes, we automate multi-step business workflows by connecting AI models with internal ERPs, CRMs, document parsers, and n8n orchestration engines to eliminate manual data entry and triage tasks."
}, {
  q: "Does GLAD build computer vision systems?",
  a: "Yes, GLAD Studio develops computer vision and media intelligence pipelines for automated document classification, OCR data extraction, visual quality inspection, and media integrity validation."
}];
function AiSolutionsPage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "AI Solutions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c] mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Solutions Company India" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]", children: [
            "AI Solutions and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand-2)", children: "Development" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl", children: "GLAD Studio engineers custom AI solutions that connect frontier language models with proprietary business data, APIs, and operational workflows. We build production-ready LLM applications, RAG search pipelines, autonomous AI agents, and computer vision systems backed by deterministic guardrails and cost-optimized routing." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consult on AI Architecture" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "Explore AI Case Studies" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "LangGraph" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Stateful Agent Loops" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "pgvector" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Hybrid RAG Retrieval" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Guardrails" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Pydantic Schema Validation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-foreground", children: "Cost Routing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Dynamic Token Optimization" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Core AI Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Production AI Systems Engineered for Real-World Demands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "We design and implement AI applications that solve specific operational challenges, automate repetitive human tasks, and unlock insights from unstructured corporate data." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: aiSystems.map((sys) => {
        const Icon = sys.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#e5b84c] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: sys.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: sys.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3", children: "Technical Implementations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: sys.capabilities.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-[#10b981] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, item)) })
          ] })
        ] }) }, sys.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Infrastructure & Safety" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Enterprise AI Engineering Foundations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "Deploying AI models to production requires rigorous guardrails, deterministic data contracts, and enterprise security standards." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: engineeringLayers.map((layer) => {
        const Icon = layer.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-6 rounded-2xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#e5b84c] mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base font-display text-foreground mb-2", children: layer.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: layer.description })
        ] }) }, layer.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Methodology" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Our 4-Stage AI Engineering Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "We apply systematic software engineering principles to AI development, validating model accuracy and data grounding at every stage." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: aiLifecycle.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-6 rounded-2xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-3xl font-black text-[#e5b84c] mb-3", children: stage.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base font-display text-foreground mb-2", children: stage.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: stage.description })
      ] }) }, stage.step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Proven Deployments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold font-display text-foreground", children: "Real AI Projects Built by GLAD Studio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]", children: "Conversational AI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "AI Mock Interview Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Real-time conversational AI system conducting dynamic technical interviews, transcribing speech in low-latency streams, and producing structured evaluation scores." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/ai-mock-interview", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read AI Interview Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]", children: "Data Enrichment AI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Lead Enrichment Pipeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "High-throughput automated lead sourcing and cleansing pipeline leveraging LLM extraction to parse company websites, verify contacts, and enrich CRM profiles." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/lead-enrichment", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Enrichment Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]", children: "Document ML" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold font-display text-foreground", children: "Fluxor File Intelligence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Desktop application analyzing local document content and metadata using machine learning models to automatically suggest smart folder hierarchies and renames." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/fluxor", className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Fluxor Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Interconnected Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "Connected Engineering Capabilities" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/business-automation", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-5 text-[#10b981] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#10b981] transition-colors", children: "Business Automation →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "n8n orchestration, API integrations, and ETL pipelines." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/web-application-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "size-5 text-[#00b4d8] mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[#00b4d8] transition-colors", children: "Web Applications →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Custom full-stack web platforms, dashboards, and APIs." })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Technical & Commercial FAQs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "AI Solutions & Engineering Q&A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Direct, factual answers to key questions about building AI solutions with GLAD Studio." })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Technical Knowledge Base" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold font-display text-foreground", children: "AI Engineering Insights & Architecture Guides" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-2xl", children: "Explore in-depth engineering breakdowns, cost analyses, and architectural decision frameworks authored by the GLAD Studio engineering team." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "text-xs md:text-sm font-bold text-[#e5b84c] hover:text-foreground transition-colors inline-flex items-center gap-1 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View All AI Insights →" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/ai-development-cost-india", className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/40 transition-all duration-200 group flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider text-[#e5b84c]", children: "Budgeting & Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold font-display text-foreground mt-2 group-hover:text-[#e5b84c] transition-colors leading-snug", children: "AI Development Cost in India: 2026 Practical Pricing Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 line-clamp-3", children: "Understand project complexity tiers, vector database infrastructure costs, model token fees, and engineering budgets." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/60 text-xs font-bold text-foreground inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Analysis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/what-is-ai-agent-development", className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/40 transition-all duration-200 group flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider text-[#e5b84c]", children: "Agentic Systems" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold font-display text-foreground mt-2 group-hover:text-[#e5b84c] transition-colors leading-snug", children: "What Is AI Agent Development? Practical Guide for Businesses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 line-clamp-3", children: "A deep dive into tool calling, LangGraph stateful loops, memory systems, and production safety guardrails." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/60 text-xs font-bold text-foreground inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/rag-vs-fine-tuning", className: "surface-card p-6 rounded-2xl border border-border hover:border-foreground/40 transition-all duration-200 group flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider text-[#e5b84c]", children: "Architecture Strategy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold font-display text-foreground mt-2 group-hover:text-[#e5b84c] transition-colors leading-snug", children: "RAG vs Fine-Tuning: Which AI Approach Should Your Business Use?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 line-clamp-3", children: "Compare dynamic pgvector knowledge retrieval against fine-tuning model weights for formatting, syntax, and tone." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/60 text-xs font-bold text-foreground inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-surface/20 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold font-display text-foreground", children: "Let's Engineer Your AI Solution" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "From RAG pipelines and custom AI agents to LLM-powered applications, partner with GLAD Studio for robust, secure, and production-ready artificial intelligence engineering." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule AI Strategy Call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all", children: "Submit Project Scope" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  AiSolutionsPage as component
};
