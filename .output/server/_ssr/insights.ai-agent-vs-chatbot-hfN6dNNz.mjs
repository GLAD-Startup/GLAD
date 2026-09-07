import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import "../_libs/seroval.mjs";
import { q as Bot, s as Clock, ab as Calendar, ac as CircleAlert, h as MessageSquare, af as CircleX, c as ArrowRight, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
const comparisonMatrix = [{
  feature: "Primary Function",
  chatbot: "Conversational responses & text Q&A",
  agent: "Goal execution, problem solving & actions"
}, {
  feature: "Tool & API Calling",
  chatbot: "None or limited single-endpoint lookups",
  agent: "Dynamic multi-tool selection & sequencing"
}, {
  feature: "Multi-Step Planning",
  chatbot: "Single-turn or rigid multi-turn script",
  agent: "Autonomous loop (Plan → Act → Observe → Loop)"
}, {
  feature: "Database Write Access",
  chatbot: "Read-only or none",
  agent: "Authorized reads and transactional writes"
}, {
  feature: "Human-in-the-Loop",
  chatbot: "Live agent transfer fallback",
  agent: "Granular checkpoint approvals on actions"
}, {
  feature: "Failure Handling",
  chatbot: "Static fallback ('I do not understand')",
  agent: "Self-correction, query reform, retry logic"
}];
const faqs = [{
  q: "What is the difference between an AI agent and a chatbot?",
  a: "A chatbot is designed primarily to converse, answer user queries, and provide static information, whereas an AI agent is autonomous software capable of planning tasks, calling external APIs, modifying databases, and taking business actions toward a specific goal. While a chatbot tells you how to do something, an AI agent actually completes it for you."
}, {
  q: "Is an AI agent better than a chatbot?",
  a: "Neither is universally better; they serve different purposes. Chatbots excel at low-cost customer FAQs and basic text support, whereas AI agents are required when a system must interact with live ERPs, CRMs, or databases to perform complex multi-step tasks. Choosing the right architecture depends on whether your workflow requires conversation or action."
}, {
  q: "Can an AI agent take real business actions?",
  a: "Yes, an AI agent can execute authorized actions such as issuing refunds, updating CRM records, sending emails, and querying SQL databases via structured tool-calling interfaces and API connectors. These actions are governed by strict parameter validation schemas and human approval gates."
}, {
  q: "When should a business use a chatbot instead of an agent?",
  a: "A business should use a chatbot when the objective is purely informational, such as answering standard knowledge base questions, onboarding FAQs, or providing product recommendations without system write access. Chatbots are cheaper to deploy and introduce zero operational execution risk."
}, {
  q: "When should a business NOT use an AI agent?",
  a: "A business should avoid AI agents when a workflow is strictly deterministic, 100% predictable, and better handled by traditional rule-based code or webhook integrations like Zapier or n8n. If an exact algorithm exists with zero ambiguity, traditional software engineering is faster, cheaper, and more reliable than invoking non-deterministic language models."
}, {
  q: "Can AI agents connect to third-party APIs?",
  a: "Yes, AI agents use structured function schemas to call REST APIs, query PostgreSQL databases, trigger webhooks, and interact with external enterprise services like Stripe, Salesforce, or HubSpot."
}];
function AiAgentVsChatbotArticlePage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "AI Agent vs Chatbot" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-3.5" }),
              "AI Architecture"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
              "9 min read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3" }),
              "February 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]", children: "AI Agent vs Chatbot: Which One Does Your Business Actually Need?" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Short Answer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-foreground font-medium leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AI agent vs chatbot:" }),
              " A chatbot is built to converse and retrieve text, whereas an AI agent is built to plan and execute multi-step actions using tools and APIs. While a customer support chatbot explains your refund policy, an AI agent can verify customer eligibility, initiate an order cancellation, trigger a payment gateway refund, and update your CRM without human intervention."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "What Is a Chatbot?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "A chatbot is a conversational interface that maps incoming user messages to text responses. In modern implementations, chatbots use large language models (LLMs) augmented with",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/rag-vs-fine-tuning", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "Retrieval-Augmented Generation (RAG)" }),
              " ",
              "to answer user questions based on private company documents."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "The defining architectural boundary of a chatbot is that it remains conversational. Its output is text or rich UI widgets presented to a human. It does not manipulate external state or trigger side effects across other software systems." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "What Is an AI Agent?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "An",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/what-is-ai-agent-development", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "AI agent" }),
              " ",
              "is an autonomous software system where a language model functions as a central reasoning engine. Given an objective, the agent dynamically breaks the goal into sub-tasks, selects appropriate tools from a predefined catalog, executes those tools, observes the results, and loops until the objective is accomplished."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "AI agents possess state, memory, tool-calling schemas, and deterministic safety guardrails that permit them to perform complex work across multiple systems." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "AI Agent vs Chatbot: Feature Comparison" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Comparing the architectural capabilities highlights why building an agent requires significantly more rigorous software engineering than deploying a chatbot." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs md:text-sm border-collapse border border-border surface-card rounded-xl overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-surface border-b border-border text-foreground font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Capability" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Chatbot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "AI Agent" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60 text-muted-foreground", children: comparisonMatrix.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5 font-semibold text-foreground", children: row.feature }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5", children: row.chatbot }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5 text-foreground font-medium", children: row.agent })
              ] }, row.feature)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Real Business Examples: Information vs Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Consider an e-commerce customer support scenario to understand the practical difference:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-4 text-[#00b4d8]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Chatbot Scenario" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-background border border-border/80 text-xs font-mono text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "User:" }),
                  ' "What is your refund policy?"',
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bot:" }),
                  ' "We accept refunds within 30 days of purchase for unused items. Please contact support@store.com to initiate your return."'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "The bot retrieves the correct policy document via RAG, but the human user still has to write an email and wait for human support to process the refund." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 rounded-2xl border border-border space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The AI Agent Scenario" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-background border border-border/80 text-xs font-mono text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "User:" }),
                  ' "Cancel order #8492 and refund my card."',
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent:" }),
                  " Executes 7-step autonomous workflow ↓"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-xs text-muted-foreground space-y-1 list-decimal pl-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Authenticates user session ID" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Queries order database for #8492" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Checks fulfillment status (Unshipped = Eligible)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Calls warehouse API to cancel shipping label" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Calls Stripe API to issue refund transaction" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Updates PostgreSQL database status to 'Refunded'" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sends confirmation email with receipt ID" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/30 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Engineering Restraint" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "When You DON'T Need an AI Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: [
              "One of the most important engineering judgments is recognizing when",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "not" }),
              " to use an AI agent. Because LLMs are probabilistic and non-deterministic, introducing an AI agent into a workflow where every step is 100% predictable adds unnecessary latency, token cost, and potential points of failure."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background border border-border space-y-2 text-xs md:text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block", children: "Use Deterministic Automation Instead When:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'The business logic follows a strict "If X, then Y" formula without nuance.' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You are moving data between two APIs with structured JSON schemas." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "100% latency guarantees under 200ms are mandatory." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "Tools like",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/business-automation", className: "text-[#10b981] underline hover:text-foreground", children: "n8n workflows" }),
                  " ",
                  "or standard backend cron jobs can execute the task reliably."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How Production AI Agents Are Engineered" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Building a production-ready AI agent requires state machines and error handling frameworks such as LangGraph or CrewAI." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl border border-border surface-card space-y-4 font-mono text-xs md:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase font-bold tracking-wider text-[#e5b84c] font-sans", children: "The Agentic Execution Loop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background border border-border/80 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "1. User Goal Received" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "↓ LLM evaluates state & selects tool from catalog" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "2. Tool Invocation (API / Database / RAG)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "↓ Tool returns observation (JSON / Error)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "3. Agent Evaluates Observation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "↓ Goal complete? If NO → Loop back to Step 1. If YES → Return final result." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "To learn how to engineer this loop from scratch, read our complete guide on",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/how-to-build-ai-agent-for-business", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "how to build an AI agent for your business" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "AI Agent Security & Reliability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Because agents can take real actions, security cannot be an afterthought. Production agent engineering requires:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground", children: "Scoped Tool Permissions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Agents are given minimum required database permissions. Read tools are separated from write tools to prevent unintended modifications." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground", children: "Human Approval Checkpoints" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "High-stakes actions (e.g. wire transfers, mass emails, account deletions) pause the agent loop and require explicit administrator approval." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Custom Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "When to Partner with an AI Agent Engineering Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: "If your business has complex, multi-system operational workflows that require intelligent reasoning, tool integration, and enterprise security, GLAD Studio engineers production-grade AI agents that operate reliably at scale." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "btn-primary text-xs md:text-sm inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore AI Agent Development Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mt-1", children: "AI Agent vs Chatbot Q&A" })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Comprehensive Guide" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "What Is AI Agent Development? Practical Guide →" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/ai-development-cost-india", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Budgeting & Pricing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "AI Development Cost in India: 2026 Pricing Guide →" })
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
  AiAgentVsChatbotArticlePage as component
};
