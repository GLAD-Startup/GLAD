import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import "../_libs/seroval.mjs";
import { p as Cpu, s as Clock, ab as Calendar, ac as CircleAlert, r as BrainCircuit, ad as Terminal, D as Database, W as Workflow, S as ShieldCheck, N as Activity, c as ArrowRight, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const agentComponents = [{
  icon: BrainCircuit,
  title: "1. Foundation Reasoning Engine",
  description: "A high-capacity LLM (e.g. GPT-4o, Claude 3.5 Sonnet) that analyzes context, decomposes user goals into discrete steps, and decides which tool to call next."
}, {
  icon: Terminal,
  title: "2. Tool & Function Definitions",
  description: "Structured JSON schemas defining external actions the agent can take, such as querying a PostgreSQL database, making a REST API call, or executing code in a sandbox."
}, {
  icon: Database,
  title: "3. State & Memory Management",
  description: "Short-term session memory for multi-turn conversational context, paired with long-term vector storage (pgvector) for episodic knowledge retrieval."
}, {
  icon: Workflow,
  title: "4. Graph-Based Orchestration",
  description: "State machines built with LangGraph that govern cyclic execution loops, enforce branch conditions, and manage human-in-the-loop approval checkpoints."
}, {
  icon: ShieldCheck,
  title: "5. Deterministic Guardrails",
  description: "Strict parameter validation using Pydantic models, output schema verification, rate limiters, and permission checks that prevent unintended system actions."
}, {
  icon: Activity,
  title: "6. Observability & Evaluation Suites",
  description: "Traceability logging recording prompt tokens, latency, tool call accuracy, and synthetic test datasets that prevent regression errors during updates."
}];
const faqs = [{
  q: "What is AI agent development?",
  a: "AI agent development is the practice of engineering software systems where a language model operates as a reasoning core capable of planning tasks, selecting and executing external software tools, managing memory, and autonomously pursuing business goals. Unlike static chatbots, agents interact directly with operational databases, CRMs, and APIs."
}, {
  q: "How does an AI agent differ from traditional software?",
  a: "Traditional software requires hard-coded conditional logic for every possible decision path, whereas an AI agent dynamically decides which sequence of steps to take based on real-time observations and natural language reasoning. This allows agents to handle fuzzy, unstructured real-world inputs that traditional if/else scripts cannot parse."
}, {
  q: "What are the core components of an AI agent?",
  a: "The core components of an AI agent are the foundation model (reasoning), system instructions (role definition), tools (APIs and database functions), memory (short-term state and long-term vector store), orchestration (frameworks like LangGraph), and guardrails (safety and validation)."
}, {
  q: "Can AI agents connect to enterprise SQL databases?",
  a: "Yes, AI agents can query SQL databases using parameterized read-only tools or structured ORM queries, converting natural language intent into safe, validated SQL queries with zero injection risk. Schema constraints and row-level security isolate sensitive tables from unauthorized modification."
}, {
  q: "What frameworks are used for AI agent development?",
  a: "Leading production frameworks for AI agent development include LangGraph (for stateful cyclic graph workflows), CrewAI (for multi-agent team delegation), and custom FastAPI microservices with OpenAI and Anthropic function calling. We select frameworks based on determinism, maintainability, and latency requirements."
}, {
  q: "How do you evaluate an AI agent before production deployment?",
  a: "AI agents are evaluated using synthetic benchmark test suites that measure task completion rates, tool selection accuracy, parameter formatting correctness, latency, and hallucination frequency across hundreds of edge-case scenarios."
}];
function WhatIsAiAgentDevelopmentArticlePage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "What Is AI Agent Development" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "size-3.5" }),
              "Agentic Engineering"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
              "12 min read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3" }),
              "February 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]", children: "What Is AI Agent Development?" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Definition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-foreground font-medium leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AI agent development" }),
              " is the software engineering discipline of building systems where a large language model serves as a central reasoning and decision-making engine. Given a high-level business goal, an AI agent autonomously plans sub-tasks, selects and invokes external tools (APIs, databases, search engines), inspects the tool output, and iterates through a stateful execution loop until the goal is completed."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How AI Agents Work: The Autonomous Execution Loop" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Unlike traditional sequential programming where every step is hardcoded, an AI agent operates within an iterative sense-plan-act loop. The conceptual flow follows seven distinct stages:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl border border-border surface-card font-mono text-xs md:text-sm space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "1. Goal Ingestion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: 'User provides an objective: "Verify unbilled hotel folios and notify managers."' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "2. Task Decomposition (Planning)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Agent plans: Step 1 (Query database) → Step 2 (Calculate GST slabs) → Step 3 (Send Slack alert)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "3. Tool Selection" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
                "Agent chooses tool: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[#e5b84c]", children: "query_folios_sql()" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "4. Tool Execution & Observation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Backend executes query, returns JSON dataset of unbilled stays." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "5. Reasoning on Observation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Agent evaluates returned records against threshold criteria." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "6. Subsequent Tool Execution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
                "Agent selects next tool: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[#e5b84c]", children: "send_slack_alert()" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "7. Termination & Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#10b981]", children: "Agent verifies all tasks succeeded and returns final status to user." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Core Components of an AI Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Building an AI agent is fundamentally a software systems engineering problem. The architecture consists of six critical pillars:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 pt-2", children: agentComponents.map((comp) => {
              const Icon = comp.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: comp.title })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: comp.description })
              ] }, comp.title);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "AI Agent vs Chatbot vs Deterministic Automation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "To understand where agents fit in your enterprise technology stack, explore the triad between conversations, deterministic workflows, and autonomous agents:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground pl-4 list-disc", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Chatbots:" }),
                " Conversational interfaces designed for human interaction and text retrieval. (See our deep comparison on",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/ai-agent-vs-chatbot", className: "text-[#e5b84c] underline hover:text-foreground", children: "AI Agent vs Chatbot" }),
                ")."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Deterministic Automation:" }),
                " Fixed scripts, webhook handlers, and cron jobs that execute identical if/then paths without natural language reasoning."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "AI Agents:" }),
                " Systems that bridge the gap—handling ambiguous, unstructured inputs and deciding dynamically how to route data and execute multi-step tools."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How AI Agents Connect to Business Systems" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "An AI agent gains real business value when it connects to existing enterprise data repositories and APIs. We engineer agents to interface with:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3 pt-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-surface/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block", children: "Relational Databases" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Parameterized SQL queries across PostgreSQL with tenant-scoped filters." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-surface/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block", children: "CRM & ERP Systems" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Bi-directional sync with HubSpot, Salesforce, Stripe, and SAP." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-surface/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block", children: "Knowledge Repositories" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Semantic document retrieval via RAG and pgvector embeddings." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "RAG and AI Agents: Knowledge as a Tool" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Retrieval-Augmented Generation (RAG) is not an alternative to AI agents; rather, RAG serves as a primary knowledge tool within the agent's toolbelt. When an agent needs to check corporate compliance rules or query customer contracts, it calls a RAG retrieval tool to fetch ground-truth context before making decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "To understand when to use retrieval versus model adaptation, read our guide on",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/rag-vs-fine-tuning", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "RAG vs Fine-Tuning" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How to Build a Production AI Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Deploying an AI agent that operates reliably in production requires a disciplined engineering lifecycle:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 pt-2", children: [{
              step: "1",
              title: "Identify the Workflow",
              desc: "Select a high-frequency, multi-system task with clear success metrics."
            }, {
              step: "2",
              title: "Define Success Criteria",
              desc: "Specify exact data schemas, latency thresholds, and accuracy targets."
            }, {
              step: "3",
              title: "Choose the Model",
              desc: "Select frontier models for reasoning, balanced with lightweight models for sub-tasks."
            }, {
              step: "4",
              title: "Design Tool Schemas",
              desc: "Create strict, typed Pydantic parameter schemas with input validation."
            }, {
              step: "5",
              title: "Integrate Knowledge & RAG",
              desc: "Index proprietary documentation and policies into vector databases."
            }, {
              step: "6",
              title: "Build Orchestration Loops",
              desc: "Implement cyclic graphs with LangGraph, including human-in-the-loop checkpoints."
            }, {
              step: "7",
              title: "Implement Guardrails",
              desc: "Add regex filters, prompt injection defenses, and execution timeouts."
            }, {
              step: "8",
              title: "Run Synthetic Evaluations",
              desc: "Test the agent against hundreds of edge-case scenarios before deployment."
            }, {
              step: "9",
              title: "Deploy Containerized Services",
              desc: "Deploy via FastAPI microservices on isolated cloud infrastructure."
            }, {
              step: "10",
              title: "Monitor & Trace Latency",
              desc: "Continuously monitor token costs, tool call errors, and prompt drift."
            }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3.5 rounded-xl border border-border/80 bg-surface/20 text-xs md:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-[#e5b84c] shrink-0", children: [
                "Step ",
                s.step,
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: s.title }),
                " —",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s.desc })
              ] })
            ] }, s.step)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-4", children: [
              "For an end-to-end implementation walkthrough, read our detailed guide on",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/how-to-build-ai-agent-for-business", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "how to build an AI agent for your business" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How Much Does AI Agent Development Cost?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "Agent development budgets depend on the number of tool integrations, the strictness of security sandboxing, and testing requirements. To understand realistic budgeting and cost drivers in India, refer to our comprehensive pricing guide on",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/ai-development-cost-india", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "AI development cost in India" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Production Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How GLAD Studio Builds Production AI Systems" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: "GLAD Studio engineers custom AI agents, RAG search pipelines, and automated workflows built for deterministic reliability. We partner with product teams and enterprises to build software you fully own." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "btn-primary text-xs md:text-sm inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore AI Solutions & Development Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mt-1", children: "AI Agent Development Q&A" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/how-to-build-ai-agent-for-business", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Implementation Guide" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "How to Build an AI Agent for Your Business →" })
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
  WhatIsAiAgentDevelopmentArticlePage as component
};
