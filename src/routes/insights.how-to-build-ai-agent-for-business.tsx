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
  Layers,
  ShieldCheck,
  Zap,
  Workflow,
  Terminal,
  Database,
  Search,
  Activity,
  Code2,
  HelpCircle,
  UserCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/insights/how-to-build-ai-agent-for-business")({
  head: () => ({
    meta: [
      {
        title: "How to Build an AI Agent for Your Business in 2026 — GLAD Studio",
      },
      {
        name: "description",
        content:
          "Step-by-step engineering guide to building a production AI agent. Learn workflow selection, tool definition, memory state management, deterministic guardrails, and evaluation frameworks.",
      },
      {
        property: "og:title",
        content: "How to Build an AI Agent for Your Business in 2026",
      },
      {
        property: "og:description",
        content:
          "Step-by-step engineering guide to building a production AI agent. Learn workflow selection, tool definition, memory state management, deterministic guardrails, and evaluation frameworks.",
      },
      {
        property: "og:url",
        content: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business",
      },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "How to Build an AI Agent for Your Business in 2026",
      },
      {
        name: "twitter:description",
        content:
          "A practical 9-step implementation roadmap for building and deploying reliable production AI agents.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://gladstudio.net/insights/how-to-build-ai-agent-for-business/#article",
              headline: "How to Build an AI Agent for Your Business in 2026",
              description:
                "Step-by-step engineering guide to building a production AI agent. Learn workflow selection, tool definition, memory state management, deterministic guardrails, and evaluation frameworks.",
              url: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business",
              datePublished: "2026-02-19T00:00:00Z",
              dateModified: "2026-02-19T00:00:00Z",
              mainEntityOfPage:
                "https://gladstudio.net/insights/how-to-build-ai-agent-for-business",
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
              "@id":
                "https://gladstudio.net/insights/how-to-build-ai-agent-for-business/#breadcrumb",
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
                  name: "How to Build an AI Agent",
                  item: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business",
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/insights/how-to-build-ai-agent-for-business/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do you build an AI agent for a business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Building an AI agent for a business involves selecting a suitable multi-system workflow, defining strict tool schemas, setting up state management with frameworks like LangGraph, implementing deterministic validation guardrails, and evaluating reliability with synthetic test suites before deployment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What tools do AI agents use to take actions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI agents use structured JSON function calling to interact with REST APIs, execute SQL queries against PostgreSQL databases, trigger webhooks, read internal documentation via RAG vector search, and dispatch email or Slack alerts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you prevent an AI agent from making mistakes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To prevent errors, AI agents require deterministic input/output validation with Pydantic, tool-level permission boundaries, loop termination caps, automated hallucination evaluations, and human-in-the-loop checkpoints for high-risk write actions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which LLM is best for building AI agents?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Frontier reasoning models such as Claude 3.5 Sonnet and GPT-4o excel at complex multi-step planning and tool selection, while smaller models like GPT-4o-mini or fine-tuned Llama 3 can be used for narrow sub-tasks to optimize latency and token expense.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to develop a custom AI agent?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A production-grade AI agent typically takes 6 to 12 weeks of engineering, covering schema design, API connector integration, evaluation benchmarking, security sandboxing, and deployment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should a business use an AI agent versus workflow automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use workflow automation (like n8n or Zapier) when all data inputs and paths are 100% structured and predictable. Use an AI agent when inputs are messy, unstructured, or require dynamic reasoning and contextual decision-making across disparate systems.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HowToBuildAiAgentArticlePage,
});

const steps = [
  {
    number: "01",
    title: "Choose the High-Impact Workflow",
    description:
      "Select a repetitive, multi-step process that spans multiple software systems (e.g. lead qualification, order reconciliation, or invoice processing) with clear inputs and measurable outcomes.",
  },
  {
    number: "02",
    title: "Define Objective Success Metrics",
    description:
      "Quantify acceptable latency thresholds, maximum cost per execution, tool invocation accuracy targets (>99%), and clear criteria for when human escalation is triggered.",
  },
  {
    number: "03",
    title: "Select Foundation Models & Routing",
    description:
      "Use frontier reasoning models (Claude 3.5 Sonnet, GPT-4o) for high-level orchestration, and route lightweight sub-tasks to compact models to optimize token budgets.",
  },
  {
    number: "04",
    title: "Define Strict Tool & API Schemas",
    description:
      "Write explicit, typed JSON schemas and Pydantic models for every database query, API endpoint, and third-party connector the agent is allowed to invoke.",
  },
  {
    number: "05",
    title: "Integrate Knowledge via RAG",
    description:
      "Connect the agent to private company knowledge bases using PostgreSQL and pgvector for grounded context retrieval, eliminating hallucinations.",
  },
  {
    number: "06",
    title: "Implement Deterministic Guardrails",
    description:
      "Incorporate regex filters, schema validators, recursion caps, rate limiters, and human-in-the-loop approval gates for destructive or high-risk actions.",
  },
  {
    number: "07",
    title: "Build the Cyclic State Machine",
    description:
      "Architect the agent loop using LangGraph, handling state transitions, retry policies, observation parsing, and explicit termination conditions.",
  },
  {
    number: "08",
    title: "Run Rigorous Benchmark Evaluations",
    description:
      "Execute automated synthetic test suites across edge cases to verify tool calling accuracy, data integrity, and error recovery before releasing to users.",
  },
  {
    number: "09",
    title: "Deploy, Trace & Monitor in Production",
    description:
      "Deploy containerized FastAPI microservices with distributed tracing (LangSmith, OpenTelemetry) to monitor latency, token consumption, and prompt drift.",
  },
];

const faqs = [
  {
    q: "How do you build an AI agent for a business?",
    a: "Building an AI agent for a business involves selecting a suitable multi-system workflow, defining strict tool schemas, setting up state management with frameworks like LangGraph, implementing deterministic validation guardrails, and evaluating reliability with synthetic test suites before deployment.",
  },
  {
    q: "What tools do AI agents use to take actions?",
    a: "AI agents use structured JSON function calling to interact with REST APIs, execute SQL queries against PostgreSQL databases, trigger webhooks, read internal documentation via RAG vector search, and dispatch email or Slack alerts.",
  },
  {
    q: "How do you prevent an AI agent from making mistakes?",
    a: "To prevent errors, AI agents require deterministic input/output validation with Pydantic, tool-level permission boundaries, loop termination caps, automated hallucination evaluations, and human-in-the-loop checkpoints for high-risk write actions.",
  },
  {
    q: "Which LLM is best for building AI agents?",
    a: "Frontier reasoning models such as Claude 3.5 Sonnet and GPT-4o excel at complex multi-step planning and tool selection, while smaller models like GPT-4o-mini or fine-tuned Llama 3 can be used for narrow sub-tasks to optimize latency and token expense.",
  },
  {
    q: "How long does it take to develop a custom AI agent?",
    a: "A production-grade AI agent typically takes 6 to 12 weeks of engineering, covering schema design, API connector integration, evaluation benchmarking, security sandboxing, and deployment.",
  },
  {
    q: "When should a business use an AI agent versus workflow automation?",
    a: "Use workflow automation (like n8n or Zapier) when all data inputs and paths are 100% structured and predictable. Use an AI agent when inputs are messy, unstructured, or require dynamic reasoning and contextual decision-making across disparate systems.",
  },
];

function HowToBuildAiAgentArticlePage() {
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
                How to Build an AI Agent
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]">
                <Workflow className="size-3.5" />
                Engineering Guide
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Clock className="size-3" />
                15 min read
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Calendar className="size-3" />
                February 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]">
              How to Build an AI Agent for Your Business
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
            {/* Direct AEO Summary Box */}
            <div className="p-6 md:p-8 rounded-2xl border-2 border-border bg-surface/50 shadow-md space-y-3">
              <div className="text-xs uppercase font-bold tracking-wider text-[#e5b84c] flex items-center gap-1.5">
                <AlertCircle className="size-4" />
                <span>Executive Summary</span>
              </div>
              <p className="text-base text-foreground font-medium leading-relaxed">
                <strong>How to build an AI agent for a business:</strong> Building a production AI
                agent requires engineering a stateful execution loop that connects a foundation
                reasoning model (like Claude 3.5 Sonnet or GPT-4o) to typed software tools (APIs,
                PostgreSQL queries, RAG search). Unlike experimental prototypes, production business
                agents require deterministic parameter schemas, granular tool permissions,
                automated evaluation datasets, and human approval checkpoints for high-stakes
                actions.
              </p>
            </div>

            {/* Pre-Requisite Check */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                Before Building: Does Your Business Actually Need an AI Agent?
              </h2>
              <p className="text-muted-foreground">
                Before writing a single line of agent code, technical leaders must evaluate whether
                the problem requires probabilistic reasoning or if deterministic software
                engineering is superior.
              </p>

              <div className="p-5 rounded-2xl border border-border surface-card space-y-3">
                <h3 className="font-bold text-sm text-foreground">
                  The AI Agent Qualification Checklist:
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-muted-foreground list-disc pl-4">
                  <li>
                    <strong className="text-foreground">Unstructured or Ambiguous Inputs:</strong>{" "}
                    The workflow involves freeform emails, PDFs, raw web data, or multi-modal scans
                    that hardcoded if/else rules cannot parse.
                  </li>
                  <li>
                    <strong className="text-foreground">Dynamic Tool Sequencing:</strong> The exact
                    sequence of API calls cannot be hardcoded in advance because next steps depend
                    on intermediate findings.
                  </li>
                  <li>
                    <strong className="text-foreground">Reversible Actions or Checkpoints:</strong>{" "}
                    Actions can be audited or reviewed before committing irreversible financial or
                    database changes.
                  </li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground">
                If your process is 100% predictable with structured JSON payloads, use deterministic{" "}
                <Link
                  to="/services/business-automation"
                  className="text-[#10b981] underline hover:text-foreground"
                >
                  business automation workflows
                </Link>{" "}
                instead.
              </p>
            </section>

            {/* 9-Step Implementation Roadmap */}
            <section className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                  Engineering Roadmap
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-1">
                  The 9 Steps to Building a Production AI Agent
                </h2>
              </div>

              <div className="space-y-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="surface-card p-6 rounded-2xl border border-border space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#e5b84c] px-2 py-0.5 rounded bg-surface border border-border">
                        {step.number}
                      </span>
                      <h3 className="font-bold text-base md:text-lg text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pl-11">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Production Example: Lead Enrichment */}
            <section className="p-8 rounded-2xl border-2 border-border bg-surface/30 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                Real-World Architecture Example
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                Case Study: Autonomous Lead Enrichment & Scoring Agent
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Consider an automated lead qualification workflow engineered for a B2B SaaS
                platform (as demonstrated in GLAD Studio's{" "}
                <Link
                  to="/portfolio/lead-enrichment"
                  className="text-[#e5b84c] underline hover:text-foreground font-semibold"
                >
                  Lead Enrichment Case Study
                </Link>
                ):
              </p>

              <div className="p-4 rounded-xl bg-background border border-border space-y-2 font-mono text-xs text-muted-foreground">
                <div className="text-foreground font-bold">The Pipeline Sequence:</div>
                <div>1. Inbound lead submits company name & work email.</div>
                <div>
                  2. Agent invokes <code className="text-[#e5b84c]">search_web()</code> to fetch
                  company headcount, revenue signals, and tech stack.
                </div>
                <div>
                  3. Agent invokes <code className="text-[#e5b84c]">query_icp_rag()</code> to
                  compare company profile against Ideal Customer Profile guidelines in vector store.
                </div>
                <div>
                  4. Agent calculates fit score (1–100) and formats enriched CRM payload via
                  Pydantic model.
                </div>
                <div>
                  5. Agent writes record to PostgreSQL database and alerts account executive via
                  Slack webhook if score &gt; 80.
                </div>
              </div>
            </section>

            {/* Knowledge Integration & RAG */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                Adding Knowledge: Integrating RAG with Agents
              </h2>
              <p className="text-muted-foreground">
                An agent that makes decisions without grounding in your company's proprietary data
                will hallucinate. We integrate pgvector databases so the agent can query internal
                knowledge bases before selecting actions.
              </p>
              <p className="text-muted-foreground">
                To understand the technical trade-offs of knowledge architectures, read our deep
                guide on{" "}
                <Link
                  to="/insights/rag-vs-fine-tuning"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  RAG vs Fine-Tuning
                </Link>
                .
              </p>
            </section>

            {/* Development Cost */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How Much Does It Cost to Build an AI Agent?
              </h2>
              <p className="text-muted-foreground">
                The total cost of building an AI agent depends on tool integration complexity,
                sandboxing requirements, and synthetic evaluation coverage. For a detailed breakdown
                of engineering budgets in India, read our comprehensive guide on{" "}
                <Link
                  to="/insights/ai-development-cost-india"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  AI development cost in India
                </Link>
                .
              </p>
            </section>

            {/* Commercial Callout */}
            <section className="p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                Custom Engineering
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                Build Enterprise-Grade AI Agents with GLAD Studio
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                GLAD Studio designs, builds, and deploys production-grade AI agents, LLM
                applications, and automated systems for startups and enterprises. We deliver 100% IP
                ownership, clean TypeScript/Python backends, and rigorous evaluation pipelines.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/services/ai-solutions"
                  className="btn-primary text-xs md:text-sm inline-flex items-center gap-2"
                >
                  <span>Explore AI Development Services</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link to="/services/business-automation" className="btn-secondary text-xs md:text-sm">
                  <span>Explore Workflow Automation</span>
                </Link>
              </div>
            </section>

            {/* FAQ Accordion (AEO) */}
            <section className="py-10 border-t border-border space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                  Frequently Asked Questions
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-1">
                  AI Agent Engineering Q&A
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
                  to="/insights/what-is-ai-agent-development"
                  className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
                >
                  <span className="text-[10px] uppercase font-bold text-[#e5b84c]">
                    Foundations
                  </span>
                  <h4 className="font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1">
                    What Is AI Agent Development? Practical Guide →
                  </h4>
                </Link>
                <Link
                  to="/insights/ai-agent-vs-chatbot"
                  className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
                >
                  <span className="text-[10px] uppercase font-bold text-[#e5b84c]">
                    Architecture Comparison
                  </span>
                  <h4 className="font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1">
                    AI Agent vs Chatbot: Which Does Your Business Need? →
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
