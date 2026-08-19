import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { EmailModal } from "@/components/site/EmailModal";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Bot,
  BrainCircuit,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Workflow,
  Search,
  Code2,
  Terminal,
  Activity,
  FileCheck2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/insights/what-is-ai-agent-development")({
  head: () => ({
    meta: [
      {
        title: "What Is AI Agent Development? A Practical Guide for Businesses — GLAD Studio",
      },
      {
        name: "description",
        content:
          "A deep dive into AI agent development for engineering leaders and founders. Explore agent loops, tool calling, memory management, orchestration frameworks, and production guardrails.",
      },
      {
        property: "og:title",
        content: "What Is AI Agent Development? A Practical Guide for Businesses",
      },
      {
        property: "og:description",
        content:
          "A deep dive into AI agent development for engineering leaders and founders. Explore agent loops, tool calling, memory management, orchestration frameworks, and production guardrails.",
      },
      {
        property: "og:url",
        content: "https://gladstudio.net/insights/what-is-ai-agent-development",
      },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "What Is AI Agent Development? A Practical Guide for Businesses",
      },
      {
        name: "twitter:description",
        content:
          "An engineering-first guide to building autonomous AI agents with tool calling, stateful loops, and production safety guardrails.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://gladstudio.net/insights/what-is-ai-agent-development" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://gladstudio.net/insights/what-is-ai-agent-development/#article",
              headline: "What Is AI Agent Development?",
              description:
                "A deep dive into AI agent development for engineering leaders and founders. Explore agent loops, tool calling, memory management, orchestration frameworks, and production guardrails.",
              url: "https://gladstudio.net/insights/what-is-ai-agent-development",
              datePublished: "2026-02-17T00:00:00Z",
              dateModified: "2026-02-19T00:00:00Z",
              mainEntityOfPage: "https://gladstudio.net/insights/what-is-ai-agent-development",
              publisher: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
                logo: "https://gladstudio.net/og-image.png",
              },
              author: {
                "@type": "Person",
                "@id": "https://gladstudio.net/about/#somesh-rajput",
                name: "Somesh Rajput",
                jobTitle: "CTO & Head of Engineering",
                worksFor: {
                  "@id": "https://gladstudio.net/#organization",
                },
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/insights/what-is-ai-agent-development/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Insights",
                  item: "https://gladstudio.net/insights",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "What Is AI Agent Development",
                  item: "https://gladstudio.net/insights/what-is-ai-agent-development",
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/insights/what-is-ai-agent-development/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is AI agent development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI agent development is the practice of engineering software systems where a language model operates as a reasoning core capable of planning tasks, selecting and executing external software tools, managing memory, and autonomously pursuing business goals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does an AI agent differ from traditional software?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Traditional software requires hard-coded conditional logic for every possible decision path, whereas an AI agent dynamically decides which sequence of steps to take based on real-time observations and natural language reasoning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the core components of an AI agent?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The core components of an AI agent are the foundation model (reasoning), system instructions (role definition), tools (APIs and database functions), memory (short-term state and long-term vector store), orchestration (frameworks like LangGraph), and guardrails (safety and validation).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can AI agents connect to enterprise SQL databases?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, AI agents can query SQL databases using parameterized read-only tools or structured ORM queries, converting natural language intent into safe, validated SQL queries with zero injection risk.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What frameworks are used for AI agent development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Leading production frameworks for AI agent development include LangGraph (for stateful cyclic graph workflows), CrewAI (for multi-agent team delegation), and custom FastAPI microservices with OpenAI and Anthropic function calling.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you evaluate an AI agent before production deployment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI agents are evaluated using synthetic benchmark test suites that measure task completion rates, tool selection accuracy, parameter formatting correctness, latency, and hallucination frequency across hundreds of edge-case scenarios.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: WhatIsAiAgentDevelopmentArticlePage,
});

const agentComponents = [
  {
    icon: BrainCircuit,
    title: "1. Foundation Reasoning Engine",
    description:
      "A high-capacity LLM (e.g. GPT-4o, Claude 3.5 Sonnet) that analyzes context, decomposes user goals into discrete steps, and decides which tool to call next.",
  },
  {
    icon: Terminal,
    title: "2. Tool & Function Definitions",
    description:
      "Structured JSON schemas defining external actions the agent can take, such as querying a PostgreSQL database, making a REST API call, or executing code in a sandbox.",
  },
  {
    icon: Database,
    title: "3. State & Memory Management",
    description:
      "Short-term session memory for multi-turn conversational context, paired with long-term vector storage (pgvector) for episodic knowledge retrieval.",
  },
  {
    icon: Workflow,
    title: "4. Graph-Based Orchestration",
    description:
      "State machines built with LangGraph that govern cyclic execution loops, enforce branch conditions, and manage human-in-the-loop approval checkpoints.",
  },
  {
    icon: ShieldCheck,
    title: "5. Deterministic Guardrails",
    description:
      "Strict parameter validation using Pydantic models, output schema verification, rate limiters, and permission checks that prevent unintended system actions.",
  },
  {
    icon: Activity,
    title: "6. Observability & Evaluation Suites",
    description:
      "Traceability logging recording prompt tokens, latency, tool call accuracy, and synthetic test datasets that prevent regression errors during updates.",
  },
];

const faqs = [
  {
    q: "What is AI agent development?",
    a: "AI agent development is the practice of engineering software systems where a language model operates as a reasoning core capable of planning tasks, selecting and executing external software tools, managing memory, and autonomously pursuing business goals. Unlike static chatbots, agents interact directly with operational databases, CRMs, and APIs.",
  },
  {
    q: "How does an AI agent differ from traditional software?",
    a: "Traditional software requires hard-coded conditional logic for every possible decision path, whereas an AI agent dynamically decides which sequence of steps to take based on real-time observations and natural language reasoning. This allows agents to handle fuzzy, unstructured real-world inputs that traditional if/else scripts cannot parse.",
  },
  {
    q: "What are the core components of an AI agent?",
    a: "The core components of an AI agent are the foundation model (reasoning), system instructions (role definition), tools (APIs and database functions), memory (short-term state and long-term vector store), orchestration (frameworks like LangGraph), and guardrails (safety and validation).",
  },
  {
    q: "Can AI agents connect to enterprise SQL databases?",
    a: "Yes, AI agents can query SQL databases using parameterized read-only tools or structured ORM queries, converting natural language intent into safe, validated SQL queries with zero injection risk. Schema constraints and row-level security isolate sensitive tables from unauthorized modification.",
  },
  {
    q: "What frameworks are used for AI agent development?",
    a: "Leading production frameworks for AI agent development include LangGraph (for stateful cyclic graph workflows), CrewAI (for multi-agent team delegation), and custom FastAPI microservices with OpenAI and Anthropic function calling. We select frameworks based on determinism, maintainability, and latency requirements.",
  },
  {
    q: "How do you evaluate an AI agent before production deployment?",
    a: "AI agents are evaluated using synthetic benchmark test suites that measure task completion rates, tool selection accuracy, parameter formatting correctness, latency, and hallucination frequency across hundreds of edge-case scenarios.",
  },
];

function WhatIsAiAgentDevelopmentArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />

      <main className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <HeroBackground />

        <div className="mx-auto max-w-4xl px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/insights" className="hover:text-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold" aria-current="page">
                What Is AI Agent Development
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]">
                <Cpu className="size-3.5" />
                Agentic Engineering
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Clock className="size-3" />
                12 min read
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Calendar className="size-3" />
                February 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]">
              What Is AI Agent Development?
            </h1>

            {/* Author Byline */}
            <div className="pt-2 flex items-center gap-3 border-b border-border/80 pb-6">
              <div className="size-10 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold font-mono text-foreground">
                SR
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Somesh Rajput</div>
                <div className="text-xs text-muted-foreground">
                  CTO & Head of Engineering at GLAD Studio
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="mt-10 space-y-10 text-base md:text-lg leading-relaxed text-foreground/90 font-sans">
            {/* Direct AEO Definition Box */}
            <div className="p-6 md:p-8 rounded-2xl border-2 border-border bg-surface/50 shadow-md space-y-3">
              <div className="text-xs uppercase font-bold tracking-wider text-[#e5b84c] flex items-center gap-1.5">
                <AlertCircle className="size-4" />
                <span>Definition</span>
              </div>
              <p className="text-base text-foreground font-medium leading-relaxed">
                <strong>AI agent development</strong> is the software engineering discipline of
                building systems where a large language model serves as a central reasoning and
                decision-making engine. Given a high-level business goal, an AI agent autonomously
                plans sub-tasks, selects and invokes external tools (APIs, databases, search
                engines), inspects the tool output, and iterates through a stateful execution loop
                until the goal is completed.
              </p>
            </div>

            {/* Section 1: How AI Agents Work */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How AI Agents Work: The Autonomous Execution Loop
              </h2>
              <p className="text-muted-foreground">
                Unlike traditional sequential programming where every step is hardcoded, an AI agent
                operates within an iterative sense-plan-act loop. The conceptual flow follows seven
                distinct stages:
              </p>

              <div className="p-6 rounded-2xl border border-border surface-card font-mono text-xs md:text-sm space-y-2">
                <div className="text-foreground">1. Goal Ingestion</div>
                <div className="text-muted-foreground">
                  User provides an objective: "Verify unbilled hotel folios and notify managers."
                </div>
                <div className="text-foreground">2. Task Decomposition (Planning)</div>
                <div className="text-muted-foreground">
                  Agent plans: Step 1 (Query database) &rarr; Step 2 (Calculate GST slabs) &rarr;
                  Step 3 (Send Slack alert).
                </div>
                <div className="text-foreground">3. Tool Selection</div>
                <div className="text-muted-foreground">
                  Agent chooses tool: <code className="text-[#e5b84c]">query_folios_sql()</code>
                </div>
                <div className="text-foreground">4. Tool Execution & Observation</div>
                <div className="text-muted-foreground">
                  Backend executes query, returns JSON dataset of unbilled stays.
                </div>
                <div className="text-foreground">5. Reasoning on Observation</div>
                <div className="text-muted-foreground">
                  Agent evaluates returned records against threshold criteria.
                </div>
                <div className="text-foreground">6. Subsequent Tool Execution</div>
                <div className="text-muted-foreground">
                  Agent selects next tool: <code className="text-[#e5b84c]">send_slack_alert()</code>
                </div>
                <div className="text-foreground">7. Termination & Summary</div>
                <div className="text-[#10b981]">
                  Agent verifies all tasks succeeded and returns final status to user.
                </div>
              </div>
            </section>

            {/* Section 2: Core Components */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                Core Components of an AI Agent
              </h2>
              <p className="text-muted-foreground">
                Building an AI agent is fundamentally a software systems engineering problem. The
                architecture consists of six critical pillars:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {agentComponents.map((comp) => {
                  const Icon = comp.icon;
                  return (
                    <div
                      key={comp.title}
                      className="surface-card p-5 rounded-xl border border-border space-y-2"
                    >
                      <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                        <Icon className="size-4 text-[#e5b84c]" />
                        <span>{comp.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 3: AI Agent vs Chatbot vs Automation */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                AI Agent vs Chatbot vs Deterministic Automation
              </h2>
              <p className="text-muted-foreground">
                To understand where agents fit in your enterprise technology stack, explore the
                triad between conversations, deterministic workflows, and autonomous agents:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pl-4 list-disc">
                <li>
                  <strong className="text-foreground">Chatbots:</strong> Conversational interfaces
                  designed for human interaction and text retrieval. (See our deep comparison on{" "}
                  <Link
                    to="/insights/ai-agent-vs-chatbot"
                    className="text-[#e5b84c] underline hover:text-foreground"
                  >
                    AI Agent vs Chatbot
                  </Link>
                  ).
                </li>
                <li>
                  <strong className="text-foreground">Deterministic Automation:</strong> Fixed
                  scripts, webhook handlers, and cron jobs that execute identical if/then paths
                  without natural language reasoning.
                </li>
                <li>
                  <strong className="text-foreground">AI Agents:</strong> Systems that bridge the
                  gap—handling ambiguous, unstructured inputs and deciding dynamically how to route
                  data and execute multi-step tools.
                </li>
              </ul>
            </section>

            {/* Section 4: Connecting to Business Systems */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How AI Agents Connect to Business Systems
              </h2>
              <p className="text-muted-foreground">
                An AI agent gains real business value when it connects to existing enterprise data
                repositories and APIs. We engineer agents to interface with:
              </p>
              <div className="grid gap-4 sm:grid-cols-3 pt-2 text-xs">
                <div className="p-4 rounded-xl border border-border bg-surface/30 space-y-1">
                  <strong className="text-foreground block">Relational Databases</strong>
                  <p className="text-muted-foreground">
                    Parameterized SQL queries across PostgreSQL with tenant-scoped filters.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface/30 space-y-1">
                  <strong className="text-foreground block">CRM & ERP Systems</strong>
                  <p className="text-muted-foreground">
                    Bi-directional sync with HubSpot, Salesforce, Stripe, and SAP.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface/30 space-y-1">
                  <strong className="text-foreground block">Knowledge Repositories</strong>
                  <p className="text-muted-foreground">
                    Semantic document retrieval via RAG and pgvector embeddings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: RAG and Agents */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                RAG and AI Agents: Knowledge as a Tool
              </h2>
              <p className="text-muted-foreground">
                Retrieval-Augmented Generation (RAG) is not an alternative to AI agents; rather, RAG
                serves as a primary knowledge tool within the agent's toolbelt. When an agent needs
                to check corporate compliance rules or query customer contracts, it calls a RAG
                retrieval tool to fetch ground-truth context before making decisions.
              </p>
              <p className="text-muted-foreground">
                To understand when to use retrieval versus model adaptation, read our guide on{" "}
                <Link
                  to="/insights/rag-vs-fine-tuning"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  RAG vs Fine-Tuning
                </Link>
                .
              </p>
            </section>

            {/* Section 6: 10 Steps to Production */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How to Build a Production AI Agent
              </h2>
              <p className="text-muted-foreground">
                Deploying an AI agent that operates reliably in production requires a disciplined
                engineering lifecycle:
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    step: "1",
                    title: "Identify the Workflow",
                    desc: "Select a high-frequency, multi-system task with clear success metrics.",
                  },
                  {
                    step: "2",
                    title: "Define Success Criteria",
                    desc: "Specify exact data schemas, latency thresholds, and accuracy targets.",
                  },
                  {
                    step: "3",
                    title: "Choose the Model",
                    desc: "Select frontier models for reasoning, balanced with lightweight models for sub-tasks.",
                  },
                  {
                    step: "4",
                    title: "Design Tool Schemas",
                    desc: "Create strict, typed Pydantic parameter schemas with input validation.",
                  },
                  {
                    step: "5",
                    title: "Integrate Knowledge & RAG",
                    desc: "Index proprietary documentation and policies into vector databases.",
                  },
                  {
                    step: "6",
                    title: "Build Orchestration Loops",
                    desc: "Implement cyclic graphs with LangGraph, including human-in-the-loop checkpoints.",
                  },
                  {
                    step: "7",
                    title: "Implement Guardrails",
                    desc: "Add regex filters, prompt injection defenses, and execution timeouts.",
                  },
                  {
                    step: "8",
                    title: "Run Synthetic Evaluations",
                    desc: "Test the agent against hundreds of edge-case scenarios before deployment.",
                  },
                  {
                    step: "9",
                    title: "Deploy Containerized Services",
                    desc: "Deploy via FastAPI microservices on isolated cloud infrastructure.",
                  },
                  {
                    step: "10",
                    title: "Monitor & Trace Latency",
                    desc: "Continuously monitor token costs, tool call errors, and prompt drift.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-border/80 bg-surface/20 text-xs md:text-sm"
                  >
                    <span className="font-mono font-bold text-[#e5b84c] shrink-0">
                      Step {s.step}:
                    </span>
                    <div>
                      <strong className="text-foreground">{s.title}</strong> —{" "}
                      <span className="text-muted-foreground">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground mt-4">
                For an end-to-end implementation walkthrough, read our detailed guide on{" "}
                <Link
                  to="/insights/how-to-build-ai-agent-for-business"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  how to build an AI agent for your business
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Cost Considerations */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How Much Does AI Agent Development Cost?
              </h2>
              <p className="text-muted-foreground">
                Agent development budgets depend on the number of tool integrations, the strictness
                of security sandboxing, and testing requirements. To understand realistic budgeting
                and cost drivers in India, refer to our comprehensive pricing guide on{" "}
                <Link
                  to="/insights/ai-development-cost-india"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  AI development cost in India
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Commercial Connection */}
            <section className="p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                Production Engineering
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How GLAD Studio Builds Production AI Systems
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                GLAD Studio engineers custom AI agents, RAG search pipelines, and automated
                workflows built for deterministic reliability. We partner with product teams and
                enterprises to build software you fully own.
              </p>
              <div className="pt-2">
                <Link
                  to="/services/ai-solutions"
                  className="btn-primary text-xs md:text-sm inline-flex items-center gap-2"
                >
                  <span>Explore AI Solutions & Development Services</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </section>

            {/* Section 9: FAQ Accordion (AEO) */}
            <section className="py-10 border-t border-border space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                  Frequently Asked Questions
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-1">
                  AI Agent Development Q&A
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={faq.q}
                      className="surface-card rounded-xl border border-border overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`size-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#e5b84c]" : "text-muted-foreground"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Related Cluster Articles */}
            <section className="py-10 border-t border-border">
              <h3 className="text-lg font-bold font-display text-foreground mb-4">
                Related AI Engineering Guides
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  to="/insights/how-to-build-ai-agent-for-business"
                  className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
                >
                  <span className="text-[10px] uppercase font-bold text-[#e5b84c]">
                    Implementation Guide
                  </span>
                  <h4 className="font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1">
                    How to Build an AI Agent for Your Business →
                  </h4>
                </Link>
                <Link
                  to="/insights/rag-vs-fine-tuning"
                  className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
                >
                  <span className="text-[10px] uppercase font-bold text-[#e5b84c]">
                    Technical Tradeoffs
                  </span>
                  <h4 className="font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1">
                    RAG vs Fine-Tuning: Which Approach Is Right? →
                  </h4>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
