import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import "../_libs/seroval.mjs";
import { f as Sparkles, s as Clock, ab as Calendar, ac as CircleAlert, W as Workflow, D as Database, p as Cpu, S as ShieldCheck, Z as Zap, u as Server, c as ArrowRight, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const costTiers = [{
  type: "AI-Powered Feature",
  complexity: "Low",
  requirements: "Single prompt template, structured JSON parsing, standard LLM API call.",
  drivers: "Frontend UI integration, prompt engineering, basic validation schemas."
}, {
  type: "Conversational Assistant / Chatbot",
  complexity: "Low to Moderate",
  requirements: "Session memory, conversation history storage, basic guardrails, UI chat widget.",
  drivers: "Database state persistence, streaming responses, user session handling."
}, {
  type: "Production RAG System",
  complexity: "Moderate to High",
  requirements: "Document ingestion, chunking strategies, pgvector embeddings, hybrid reranking.",
  drivers: "Data pipeline cleanliness, vector search latency, hallucination evaluation."
}, {
  type: "Autonomous AI Agent",
  complexity: "High",
  requirements: "Multi-step tool calling, LangGraph stateful loops, external API connectors, human checkpoints.",
  drivers: "Tool error handling, loop termination guardrails, sandbox testing."
}, {
  type: "AI-Enabled SaaS Platform",
  complexity: "High to Very High",
  requirements: "Multi-tenant data isolation, usage-based billing, RBAC, background job queues.",
  drivers: "Tenant scoping, token budget limits, subscription billing, scalable APIs."
}, {
  type: "Enterprise AI Platform",
  complexity: "Very High",
  requirements: "Self-hosted VPC models, zero data retention, custom fine-tuning, automated evals.",
  drivers: "GPU cluster provisioning, enterprise compliance, custom model distillation."
}];
const faqs = [{
  q: "How much does AI development cost in India?",
  a: "AI development costs in India vary significantly based on architectural complexity, data preparation requirements, tool integrations, and ongoing model inference fees rather than flat hourly rates. Simple prompt-based features require modest budgets, whereas enterprise RAG search engines and autonomous multi-agent systems require rigorous backend architecture, vector databases, and evaluation infrastructure."
}, {
  q: "How much does an AI agent cost to develop?",
  a: "An autonomous AI agent requires more engineering than a basic chatbot because it involves tool-calling APIs, persistent state management, LangGraph loops, deterministic guardrails, and automated evaluation datasets. Budgeting for an agent depends on how many external systems it touches and the level of human supervision required."
}, {
  q: "How much does a RAG application cost to build?",
  a: "RAG application development costs depend on document parsing complexity, vector database indexing, hybrid search reranking algorithms, and evaluation pipelines to prevent hallucination. Complex multi-format data ingestion pipelines with OCR require higher engineering investment than clean markdown document stores."
}, {
  q: "Is AI development expensive to maintain after launch?",
  a: "Ongoing operational costs depend primarily on token consumption volumes, vector database hosting, cloud compute infrastructure, and routine evaluation benchmarks. Using intelligent model routing and prompt caching can reduce recurring operational API expenses by 50% to 70%."
}, {
  q: "How long does custom AI development take?",
  a: "A focused AI proof-of-concept or single-workflow MVP typically takes 4 to 8 weeks, while full production multi-agent systems or enterprise RAG platforms require 8 to 16 weeks of engineering. Development speed is determined by data readiness and API availability."
}, {
  q: "What primary factors determine custom AI development cost?",
  a: "The main cost drivers include workflow complexity, data cleanliness, model selection (proprietary APIs vs open-source fine-tuning), security guardrails, and custom API integrations. High-risk actions requiring strict audit trails naturally demand deeper verification architecture."
}];
function AiDevelopmentCostArticlePage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "AI Development Cost India" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }),
              "AI Economics & Strategy"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
              "11 min read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3" }),
              "February 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]", children: "AI Development Cost in India: What Businesses Should Budget in 2026" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Executive Summary & Direct Answer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-foreground font-medium leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How much does AI development cost in India?" }),
              " AI development costs in India vary substantially depending on architectural complexity, data engineering requirements, tool integrations, and ongoing inference infrastructure rather than arbitrary hourly rates. A basic prompt wrapper or feature integration requires substantially less engineering than a production",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/rag-vs-fine-tuning", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "Retrieval-Augmented Generation (RAG) system" }),
              " ",
              "or an autonomous",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/what-is-ai-agent-development", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "AI agent" }),
              ", because production systems require vector databases, custom parsing pipelines, deterministic guardrails, and automated evaluation frameworks."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How Much Does AI Development Cost in India?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: 'When business decision-makers ask for an estimate on "AI development," they are often comparing vastly different technical architectures. Calling an existing language model API to format a paragraph is a weekend engineering task. In contrast, building an enterprise software system where AI models reliably query private databases, invoke external APIs, process multi-page PDF documents, and adhere to strict security policies requires disciplined full-stack software engineering.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "India has emerged as a premier global hub for custom AI software development because senior engineering teams provide deep architectural expertise across Python, FastAPI, PostgreSQL, pgvector, LangGraph, and cloud infrastructure with exceptional cost efficiency compared to North American or Western European development studios." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "AI Development Cost by Project Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "To budget effectively, software leaders must categorize their AI initiatives by architectural tier. The engineering complexity dictates the team composition, development timeline, and infrastructure overhead." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs md:text-sm border-collapse border border-border surface-card rounded-xl overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-surface border-b border-border text-foreground font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Project Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Complexity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Major Engineering Requirements" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Primary Cost Drivers" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60 text-muted-foreground", children: costTiers.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5 font-semibold text-foreground", children: row.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[11px] font-mono font-bold ${row.complexity.includes("Very High") ? "bg-red-500/10 text-red-500 border border-red-500/20" : row.complexity.includes("High") ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"}`, children: row.complexity }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5", children: row.requirements }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5", children: row.drivers })
              ] }, row.type)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "What Actually Determines AI Development Cost?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Software development costs are not driven by the model itself, but by the surrounding scaffolding required to make the model safe, deterministic, and useful. The primary cost determinants include:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1. Workflow Complexity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Single-turn prompts require minimal state management. Multi-step workflows requiring branching logic, conditional retries, and human approvals require stateful orchestration engines like LangGraph." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2. Data Cleanliness & Ingestion" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "If proprietary knowledge is trapped in unstructured scans, messy tables, or disparate databases, significant engineering is required for OCR, semantic chunking, and data cleaning." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3. Model Selection & Routing" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Using closed commercial APIs (OpenAI GPT-4o, Claude 3.5 Sonnet) involves zero training costs but recurring token fees. Fine-tuning open-source models (Llama 3, Mistral) incurs upfront GPU compute costs." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "4. Guardrails & Evaluation Suites" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Production AI demands automated synthetic evaluation suites, latency monitoring, regression testing datasets, and Pydantic schema validation to eliminate hallucinations." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How Much Does an AI Agent Cost?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "Unlike a standard conversational interface, an",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/ai-agent-vs-chatbot", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "AI agent versus chatbot comparison" }),
              " ",
              "reveals that agents have the autonomy to choose tools, query databases, and execute business actions."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "The engineering cost of an AI agent is driven by its tool integrations. Giving an agent write access to a production database or payment gateway requires:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground pl-4 list-disc", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Deterministic Tool Schemas:" }),
                " Strict JSON schema definitions that prevent illegal function arguments."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Stateful Loop Control:" }),
                " Ensuring the agent does not enter infinite execution cycles or trigger duplicate API calls."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Human-in-the-Loop Approval:" }),
                " ",
                "Checkpoint systems where destructive actions require human confirmation before execution."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How Much Does a RAG Application Cost?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "A Retrieval-Augmented Generation (RAG) system grounds model outputs on your private data. A production RAG pipeline consists of nine interconnected engineering stages:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl border border-border bg-surface/30 font-mono text-xs md:text-sm text-foreground overflow-x-auto space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Source Documents → Parsing & Cleaning → Semantic Chunking → Vector Embeddings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#e5b84c]", children: "↓ pgvector Storage & Indexing (HNSW / IVFFlat)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "User Query → Hybrid Vector/BM25 Search → Reciprocal Rank Reranking" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#10b981]", children: "↓ Context Compression → LLM Generation → Citation Validation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "The cost of building a RAG application scales with document heterogeneity. Clean markdown knowledge bases take minimal time to index, whereas multi-column financial PDFs with embedded tables require custom OCR and layout analysis algorithms." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "AI Costs Beyond the Initial Development" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Budgeting for an AI product requires planning for recurring operational expenses after launch. The primary ongoing cost components are:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-4 text-[#e5b84c] shrink-0 mt-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Model Inference & Token Usage:" }),
                  " ",
                  "Charges per million prompt and completion tokens. Implementing semantic caching and routing simple queries to lighter models like GPT-4o-mini reduces this bill substantially."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "size-4 text-[#e5b84c] shrink-0 mt-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Vector Database Hosting:" }),
                  " Managed cloud instances of pgvector, Pinecone, or Qdrant sized according to embedding dimensions and query throughput."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-[#e5b84c] shrink-0 mt-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Observability & Evaluation:" }),
                  " ",
                  "Platform logging tools (such as LangSmith, Arize, or self-hosted OpenTelemetry) that trace latency, prompt drift, and token consumption in real time."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Build vs Buy vs Custom AI Development" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "When should an enterprise buy a SaaS wrapper versus hiring a custom engineering team?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "p-4 rounded-xl border border-border bg-surface/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block mb-1", children: "When to Buy Off-The-Shelf:" }),
                " ",
                "Generic use cases like standard customer support chatbots, generic copywriting tools, or standardized email summaries."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "p-4 rounded-xl border border-border bg-surface/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block mb-1", children: "When to Build Custom AI Systems:" }),
                " ",
                "Core business workflows, proprietary data retrieval, custom CRM integrations, multi-tenant SaaS platforms, or situations requiring complete IP ownership and zero data-leakage compliance."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Engineering Methodology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How GLAD Studio Engineers AI Systems" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: "At GLAD Studio, we approach AI from an engineering-first perspective. We don't build shallow wrappers around third-party APIs. We design resilient backend architectures, robust vector search pipelines, and deterministic agent loops tailored to your exact business constraints." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "btn-primary text-xs md:text-sm inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Our AI Solutions & Engineering Capabilities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mt-1", children: "AI Development Cost FAQs" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/ai-agent-vs-chatbot", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Architecture Comparison" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "AI Agent vs Chatbot: Which Does Your Business Need? →" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/rag-vs-fine-tuning", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Technical Tradeoffs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "RAG vs Fine-Tuning: Which Approach Is Right? →" })
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
  AiDevelopmentCostArticlePage as component
};
