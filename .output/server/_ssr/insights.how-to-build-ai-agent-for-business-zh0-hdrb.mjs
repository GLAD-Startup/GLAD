import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import "../_libs/seroval.mjs";
import { W as Workflow, s as Clock, ab as Calendar, ac as CircleAlert, c as ArrowRight, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const steps = [{
  number: "01",
  title: "Choose the High-Impact Workflow",
  description: "Select a repetitive, multi-step process that spans multiple software systems (e.g. lead qualification, order reconciliation, or invoice processing) with clear inputs and measurable outcomes."
}, {
  number: "02",
  title: "Define Objective Success Metrics",
  description: "Quantify acceptable latency thresholds, maximum cost per execution, tool invocation accuracy targets (>99%), and clear criteria for when human escalation is triggered."
}, {
  number: "03",
  title: "Select Foundation Models & Routing",
  description: "Use frontier reasoning models (Claude 3.5 Sonnet, GPT-4o) for high-level orchestration, and route lightweight sub-tasks to compact models to optimize token budgets."
}, {
  number: "04",
  title: "Define Strict Tool & API Schemas",
  description: "Write explicit, typed JSON schemas and Pydantic models for every database query, API endpoint, and third-party connector the agent is allowed to invoke."
}, {
  number: "05",
  title: "Integrate Knowledge via RAG",
  description: "Connect the agent to private company knowledge bases using PostgreSQL and pgvector for grounded context retrieval, eliminating hallucinations."
}, {
  number: "06",
  title: "Implement Deterministic Guardrails",
  description: "Incorporate regex filters, schema validators, recursion caps, rate limiters, and human-in-the-loop approval gates for destructive or high-risk actions."
}, {
  number: "07",
  title: "Build the Cyclic State Machine",
  description: "Architect the agent loop using LangGraph, handling state transitions, retry policies, observation parsing, and explicit termination conditions."
}, {
  number: "08",
  title: "Run Rigorous Benchmark Evaluations",
  description: "Execute automated synthetic test suites across edge cases to verify tool calling accuracy, data integrity, and error recovery before releasing to users."
}, {
  number: "09",
  title: "Deploy, Trace & Monitor in Production",
  description: "Deploy containerized FastAPI microservices with distributed tracing (LangSmith, OpenTelemetry) to monitor latency, token consumption, and prompt drift."
}];
const faqs = [{
  q: "How do you build an AI agent for a business?",
  a: "Building an AI agent for a business involves selecting a suitable multi-system workflow, defining strict tool schemas, setting up state management with frameworks like LangGraph, implementing deterministic validation guardrails, and evaluating reliability with synthetic test suites before deployment."
}, {
  q: "What tools do AI agents use to take actions?",
  a: "AI agents use structured JSON function calling to interact with REST APIs, execute SQL queries against PostgreSQL databases, trigger webhooks, read internal documentation via RAG vector search, and dispatch email or Slack alerts."
}, {
  q: "How do you prevent an AI agent from making mistakes?",
  a: "To prevent errors, AI agents require deterministic input/output validation with Pydantic, tool-level permission boundaries, loop termination caps, automated hallucination evaluations, and human-in-the-loop checkpoints for high-risk write actions."
}, {
  q: "Which LLM is best for building AI agents?",
  a: "Frontier reasoning models such as Claude 3.5 Sonnet and GPT-4o excel at complex multi-step planning and tool selection, while smaller models like GPT-4o-mini or fine-tuned Llama 3 can be used for narrow sub-tasks to optimize latency and token expense."
}, {
  q: "How long does it take to develop a custom AI agent?",
  a: "A production-grade AI agent typically takes 6 to 12 weeks of engineering, covering schema design, API connector integration, evaluation benchmarking, security sandboxing, and deployment."
}, {
  q: "When should a business use an AI agent versus workflow automation?",
  a: "Use workflow automation (like n8n or Zapier) when all data inputs and paths are 100% structured and predictable. Use an AI agent when inputs are messy, unstructured, or require dynamic reasoning and contextual decision-making across disparate systems."
}];
function HowToBuildAiAgentArticlePage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-xs text-muted-foreground font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "hover:text-foreground transition-colors", children: "Insights" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "How to Build an AI Agent" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-3.5" }),
              "Engineering Guide"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
              "15 min read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3" }),
              "February 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]", children: "How to Build an AI Agent for Your Business" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex items-center gap-3 border-b border-border/80 pb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold font-mono text-foreground", children: "SR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: "Somesh Rajput" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "CTO & Head of Engineering at GLAD Studio" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mt-10 space-y-10 text-base md:text-lg leading-relaxed text-foreground/90 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 rounded-2xl border-2 border-border bg-surface/50 shadow-md space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase font-bold tracking-wider text-[#e5b84c] flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Executive Summary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-foreground font-medium leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How to build an AI agent for a business:" }),
              " Building a production AI agent requires engineering a stateful execution loop that connects a foundation reasoning model (like Claude 3.5 Sonnet or GPT-4o) to typed software tools (APIs, PostgreSQL queries, RAG search). Unlike experimental prototypes, production business agents require deterministic parameter schemas, granular tool permissions, automated evaluation datasets, and human approval checkpoints for high-stakes actions."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Before Building: Does Your Business Actually Need an AI Agent?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Before writing a single line of agent code, technical leaders must evaluate whether the problem requires probabilistic reasoning or if deterministic software engineering is superior." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl border border-border surface-card space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground", children: "The AI Agent Qualification Checklist:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs md:text-sm text-muted-foreground list-disc pl-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Unstructured or Ambiguous Inputs:" }),
                  " ",
                  "The workflow involves freeform emails, PDFs, raw web data, or multi-modal scans that hardcoded if/else rules cannot parse."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Dynamic Tool Sequencing:" }),
                  " The exact sequence of API calls cannot be hardcoded in advance because next steps depend on intermediate findings."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Reversible Actions or Checkpoints:" }),
                  " ",
                  "Actions can be audited or reviewed before committing irreversible financial or database changes."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "If your process is 100% predictable with structured JSON payloads, use deterministic",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/business-automation", className: "text-[#10b981] underline hover:text-foreground", children: "business automation workflows" }),
              " ",
              "instead."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Engineering Roadmap" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mt-1", children: "The 9 Steps to Building a Production AI Agent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: steps.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-bold text-[#e5b84c] px-2 py-0.5 rounded bg-surface border border-border", children: step.number }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base md:text-lg text-foreground", children: step.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground leading-relaxed pl-11", children: step.description })
            ] }, step.number)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/30 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Real-World Architecture Example" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Case Study: Autonomous Lead Enrichment & Scoring Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: [
              "Consider an automated lead qualification workflow engineered for a B2B SaaS platform (as demonstrated in GLAD Studio's",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio/lead-enrichment", className: "text-[#e5b84c] underline hover:text-foreground font-semibold", children: "Lead Enrichment Case Study" }),
              "):"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background border border-border space-y-2 font-mono text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-bold", children: "The Pipeline Sequence:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "1. Inbound lead submits company name & work email." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "2. Agent invokes ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[#e5b84c]", children: "search_web()" }),
                " to fetch company headcount, revenue signals, and tech stack."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "3. Agent invokes ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[#e5b84c]", children: "query_icp_rag()" }),
                " to compare company profile against Ideal Customer Profile guidelines in vector store."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "4. Agent calculates fit score (1–100) and formats enriched CRM payload via Pydantic model." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "5. Agent writes record to PostgreSQL database and alerts account executive via Slack webhook if score > 80." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Adding Knowledge: Integrating RAG with Agents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "An agent that makes decisions without grounding in your company's proprietary data will hallucinate. We integrate pgvector databases so the agent can query internal knowledge bases before selecting actions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "To understand the technical trade-offs of knowledge architectures, read our deep guide on",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/rag-vs-fine-tuning", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "RAG vs Fine-Tuning" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How Much Does It Cost to Build an AI Agent?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "The total cost of building an AI agent depends on tool integration complexity, sandboxing requirements, and synthetic evaluation coverage. For a detailed breakdown of engineering budgets in India, read our comprehensive guide on",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/ai-development-cost-india", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "AI development cost in India" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Custom Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Build Enterprise-Grade AI Agents with GLAD Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: "GLAD Studio designs, builds, and deploys production-grade AI agents, LLM applications, and automated systems for startups and enterprises. We deliver 100% IP ownership, clean TypeScript/Python backends, and rigorous evaluation pipelines." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "btn-primary text-xs md:text-sm inline-flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore AI Development Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/business-automation", className: "btn-secondary text-xs md:text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Workflow Automation" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mt-1", children: "AI Agent Engineering Q&A" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card rounded-xl border border-border overflow-hidden transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : idx), className: "w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer", "aria-expanded": isOpen, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq.q }),
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
                }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3", children: faq.a }) }) })
              ] }, faq.q);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold font-display text-foreground mb-4", children: "Related AI Engineering Guides" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/what-is-ai-agent-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Foundations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "What Is AI Agent Development? Practical Guide →" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/ai-agent-vs-chatbot", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Architecture Comparison" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "AI Agent vs Chatbot: Which Does Your Business Need? →" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  HowToBuildAiAgentArticlePage as component
};
