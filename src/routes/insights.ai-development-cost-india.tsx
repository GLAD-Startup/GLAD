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
  Database,
  Server,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  TrendingUp,
  Table,
  Workflow,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/insights/ai-development-cost-india")({
  head: () => ({
    meta: [
      { title: "AI Development Cost in India in 2026: A Practical Pricing Guide" },
      {
        name: "description",
        content:
          "A comprehensive guide to AI development costs in India. Learn the key cost drivers, architectural complexity tiers, infrastructure expenses, and how to budget for production AI systems.",
      },
      {
        property: "og:title",
        content: "AI Development Cost in India in 2026: A Practical Pricing Guide",
      },
      {
        property: "og:description",
        content:
          "A comprehensive guide to AI development costs in India. Learn the key cost drivers, architectural complexity tiers, infrastructure expenses, and how to budget for production AI systems.",
      },
      {
        property: "og:url",
        content: "https://gladstudio.net/insights/ai-development-cost-india",
      },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AI Development Cost in India in 2026: A Practical Pricing Guide",
      },
      {
        name: "twitter:description",
        content:
          "What does it actually cost to engineer custom AI software in India? A realistic architectural cost breakdown.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/insights/ai-development-cost-india" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://gladstudio.net/insights/ai-development-cost-india/#article",
              headline: "AI Development Cost in India: What Businesses Should Budget in 2026",
              description:
                "A comprehensive guide to AI development costs in India. Learn the key cost drivers, architectural complexity tiers, infrastructure expenses, and how to budget for production AI systems.",
              url: "https://gladstudio.net/insights/ai-development-cost-india",
              datePublished: "2026-02-15T00:00:00Z",
              dateModified: "2026-02-19T00:00:00Z",
              mainEntityOfPage: "https://gladstudio.net/insights/ai-development-cost-india",
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
              "@id": "https://gladstudio.net/insights/ai-development-cost-india/#breadcrumb",
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
                  name: "AI Development Cost India",
                  item: "https://gladstudio.net/insights/ai-development-cost-india",
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/insights/ai-development-cost-india/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does AI development cost in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI development costs in India vary significantly based on architectural complexity, data preparation requirements, tool integrations, and ongoing model inference fees rather than flat hourly rates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does an AI agent cost to develop?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "An autonomous AI agent requires more engineering than a basic chatbot because it involves tool-calling APIs, persistent state management, LangGraph loops, deterministic guardrails, and automated evaluation datasets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does a RAG application cost to build?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "RAG application development costs depend on document parsing complexity, vector database indexing, hybrid search reranking algorithms, and evaluation pipelines to prevent hallucination.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is AI development expensive to maintain after launch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ongoing operational costs depend primarily on token consumption volumes, vector database hosting, cloud compute infrastructure, and routine evaluation benchmarks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does custom AI development take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A focused AI proof-of-concept or single-workflow MVP typically takes 4 to 8 weeks, while full production multi-agent systems or enterprise RAG platforms require 8 to 16 weeks of engineering.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What primary factors determine custom AI development cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main cost drivers include workflow complexity, data cleanliness, model selection (proprietary APIs vs open-source fine-tuning), security guardrails, and custom API integrations.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: AiDevelopmentCostArticlePage,
});

const costTiers = [
  {
    type: "AI-Powered Feature",
    complexity: "Low",
    requirements: "Single prompt template, structured JSON parsing, standard LLM API call.",
    drivers: "Frontend UI integration, prompt engineering, basic validation schemas.",
  },
  {
    type: "Conversational Assistant / Chatbot",
    complexity: "Low to Moderate",
    requirements: "Session memory, conversation history storage, basic guardrails, UI chat widget.",
    drivers: "Database state persistence, streaming responses, user session handling.",
  },
  {
    type: "Production RAG System",
    complexity: "Moderate to High",
    requirements: "Document ingestion, chunking strategies, pgvector embeddings, hybrid reranking.",
    drivers: "Data pipeline cleanliness, vector search latency, hallucination evaluation.",
  },
  {
    type: "Autonomous AI Agent",
    complexity: "High",
    requirements: "Multi-step tool calling, LangGraph stateful loops, external API connectors, human checkpoints.",
    drivers: "Tool error handling, loop termination guardrails, sandbox testing.",
  },
  {
    type: "AI-Enabled SaaS Platform",
    complexity: "High to Very High",
    requirements: "Multi-tenant data isolation, usage-based billing, RBAC, background job queues.",
    drivers: "Tenant scoping, token budget limits, subscription billing, scalable APIs.",
  },
  {
    type: "Enterprise AI Platform",
    complexity: "Very High",
    requirements: "Self-hosted VPC models, zero data retention, custom fine-tuning, automated evals.",
    drivers: "GPU cluster provisioning, enterprise compliance, custom model distillation.",
  },
];

const faqs = [
  {
    q: "How much does AI development cost in India?",
    a: "AI development costs in India vary significantly based on architectural complexity, data preparation requirements, tool integrations, and ongoing model inference fees rather than flat hourly rates. Simple prompt-based features require modest budgets, whereas enterprise RAG search engines and autonomous multi-agent systems require rigorous backend architecture, vector databases, and evaluation infrastructure.",
  },
  {
    q: "How much does an AI agent cost to develop?",
    a: "An autonomous AI agent requires more engineering than a basic chatbot because it involves tool-calling APIs, persistent state management, LangGraph loops, deterministic guardrails, and automated evaluation datasets. Budgeting for an agent depends on how many external systems it touches and the level of human supervision required.",
  },
  {
    q: "How much does a RAG application cost to build?",
    a: "RAG application development costs depend on document parsing complexity, vector database indexing, hybrid search reranking algorithms, and evaluation pipelines to prevent hallucination. Complex multi-format data ingestion pipelines with OCR require higher engineering investment than clean markdown document stores.",
  },
  {
    q: "Is AI development expensive to maintain after launch?",
    a: "Ongoing operational costs depend primarily on token consumption volumes, vector database hosting, cloud compute infrastructure, and routine evaluation benchmarks. Using intelligent model routing and prompt caching can reduce recurring operational API expenses by 50% to 70%.",
  },
  {
    q: "How long does custom AI development take?",
    a: "A focused AI proof-of-concept or single-workflow MVP typically takes 4 to 8 weeks, while full production multi-agent systems or enterprise RAG platforms require 8 to 16 weeks of engineering. Development speed is determined by data readiness and API availability.",
  },
  {
    q: "What primary factors determine custom AI development cost?",
    a: "The main cost drivers include workflow complexity, data cleanliness, model selection (proprietary APIs vs open-source fine-tuning), security guardrails, and custom API integrations. High-risk actions requiring strict audit trails naturally demand deeper verification architecture.",
  },
];

function AiDevelopmentCostArticlePage() {
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
                AI Development Cost India
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]">
                <Sparkles className="size-3.5" />
                AI Economics & Strategy
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Clock className="size-3" />
                11 min read
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Calendar className="size-3" />
                February 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]">
              AI Development Cost in India: What Businesses Should Budget in 2026
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
            {/* Direct AEO Answer Section */}
            <div className="p-6 md:p-8 rounded-2xl border-2 border-border bg-surface/50 shadow-md space-y-3">
              <div className="text-xs uppercase font-bold tracking-wider text-[#e5b84c] flex items-center gap-1.5">
                <AlertCircle className="size-4" />
                <span>Executive Summary & Direct Answer</span>
              </div>
              <p className="text-base text-foreground font-medium leading-relaxed">
                <strong>How much does AI development cost in India?</strong> AI development costs in
                India vary substantially depending on architectural complexity, data engineering
                requirements, tool integrations, and ongoing inference infrastructure rather than
                arbitrary hourly rates. A basic prompt wrapper or feature integration requires
                substantially less engineering than a production{" "}
                <Link
                  to="/insights/rag-vs-fine-tuning"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  Retrieval-Augmented Generation (RAG) system
                </Link>{" "}
                or an autonomous{" "}
                <Link
                  to="/insights/what-is-ai-agent-development"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  AI agent
                </Link>
                , because production systems require vector databases, custom parsing pipelines,
                deterministic guardrails, and automated evaluation frameworks.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How Much Does AI Development Cost in India?
              </h2>
              <p className="text-muted-foreground">
                When business decision-makers ask for an estimate on "AI development," they are often
                comparing vastly different technical architectures. Calling an existing language
                model API to format a paragraph is a weekend engineering task. In contrast,
                building an enterprise software system where AI models reliably query private
                databases, invoke external APIs, process multi-page PDF documents, and adhere to
                strict security policies requires disciplined full-stack software engineering.
              </p>
              <p className="text-muted-foreground">
                India has emerged as a premier global hub for custom AI software development because
                senior engineering teams provide deep architectural expertise across Python,
                FastAPI, PostgreSQL, pgvector, LangGraph, and cloud infrastructure with exceptional
                cost efficiency compared to North American or Western European development studios.
              </p>
            </section>

            {/* Section 2: Complexity Comparison Table */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                AI Development Cost by Project Type
              </h2>
              <p className="text-muted-foreground">
                To budget effectively, software leaders must categorize their AI initiatives by
                architectural tier. The engineering complexity dictates the team composition,
                development timeline, and infrastructure overhead.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-border surface-card rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-surface border-b border-border text-foreground font-bold">
                      <th className="p-3.5">Project Type</th>
                      <th className="p-3.5">Complexity</th>
                      <th className="p-3.5">Major Engineering Requirements</th>
                      <th className="p-3.5">Primary Cost Drivers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-muted-foreground">
                    {costTiers.map((row) => (
                      <tr key={row.type} className="hover:bg-surface/30 transition-colors">
                        <td className="p-3.5 font-semibold text-foreground">{row.type}</td>
                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                              row.complexity.includes("Very High")
                                ? "bg-red-500/10 text-red-500 border border-red-500/20"
                                : row.complexity.includes("High")
                                  ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                  : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                            }`}
                          >
                            {row.complexity}
                          </span>
                        </td>
                        <td className="p-3.5">{row.requirements}</td>
                        <td className="p-3.5">{row.drivers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Cost Drivers */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                What Actually Determines AI Development Cost?
              </h2>
              <p className="text-muted-foreground">
                Software development costs are not driven by the model itself, but by the
                surrounding scaffolding required to make the model safe, deterministic, and useful.
                The primary cost determinants include:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="surface-card p-5 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 font-bold text-foreground text-base">
                    <Workflow className="size-4 text-[#e5b84c]" />
                    <span>1. Workflow Complexity</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Single-turn prompts require minimal state management. Multi-step workflows
                    requiring branching logic, conditional retries, and human approvals require
                    stateful orchestration engines like LangGraph.
                  </p>
                </div>

                <div className="surface-card p-5 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 font-bold text-foreground text-base">
                    <Database className="size-4 text-[#e5b84c]" />
                    <span>2. Data Cleanliness & Ingestion</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    If proprietary knowledge is trapped in unstructured scans, messy tables, or
                    disparate databases, significant engineering is required for OCR, semantic
                    chunking, and data cleaning.
                  </p>
                </div>

                <div className="surface-card p-5 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 font-bold text-foreground text-base">
                    <Cpu className="size-4 text-[#e5b84c]" />
                    <span>3. Model Selection & Routing</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Using closed commercial APIs (OpenAI GPT-4o, Claude 3.5 Sonnet) involves zero
                    training costs but recurring token fees. Fine-tuning open-source models (Llama 3,
                    Mistral) incurs upfront GPU compute costs.
                  </p>
                </div>

                <div className="surface-card p-5 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 font-bold text-foreground text-base">
                    <ShieldCheck className="size-4 text-[#e5b84c]" />
                    <span>4. Guardrails & Evaluation Suites</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Production AI demands automated synthetic evaluation suites, latency
                    monitoring, regression testing datasets, and Pydantic schema validation to
                    eliminate hallucinations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: AI Agent Cost */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How Much Does an AI Agent Cost?
              </h2>
              <p className="text-muted-foreground">
                Unlike a standard conversational interface, an{" "}
                <Link
                  to="/insights/ai-agent-vs-chatbot"
                  className="text-[#e5b84c] underline hover:text-foreground transition-colors"
                >
                  AI agent versus chatbot comparison
                </Link>{" "}
                reveals that agents have the autonomy to choose tools, query databases, and execute
                business actions.
              </p>
              <p className="text-muted-foreground">
                The engineering cost of an AI agent is driven by its tool integrations. Giving an
                agent write access to a production database or payment gateway requires:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pl-4 list-disc">
                <li>
                  <strong className="text-foreground">Deterministic Tool Schemas:</strong> Strict
                  JSON schema definitions that prevent illegal function arguments.
                </li>
                <li>
                  <strong className="text-foreground">Stateful Loop Control:</strong> Ensuring the
                  agent does not enter infinite execution cycles or trigger duplicate API calls.
                </li>
                <li>
                  <strong className="text-foreground">Human-in-the-Loop Approval:</strong>{" "}
                  Checkpoint systems where destructive actions require human confirmation before
                  execution.
                </li>
              </ul>
            </section>

            {/* Section 5: RAG Application Cost */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How Much Does a RAG Application Cost?
              </h2>
              <p className="text-muted-foreground">
                A Retrieval-Augmented Generation (RAG) system grounds model outputs on your private
                data. A production RAG pipeline consists of nine interconnected engineering stages:
              </p>

              <div className="p-5 rounded-xl border border-border bg-surface/30 font-mono text-xs md:text-sm text-foreground overflow-x-auto space-y-1">
                <div>
                  Source Documents → Parsing & Cleaning → Semantic Chunking → Vector Embeddings
                </div>
                <div className="text-[#e5b84c]">
                  ↓ pgvector Storage & Indexing (HNSW / IVFFlat)
                </div>
                <div>User Query → Hybrid Vector/BM25 Search → Reciprocal Rank Reranking</div>
                <div className="text-[#10b981]">
                  ↓ Context Compression → LLM Generation → Citation Validation
                </div>
              </div>

              <p className="text-muted-foreground">
                The cost of building a RAG application scales with document heterogeneity. Clean
                markdown knowledge bases take minimal time to index, whereas multi-column financial
                PDFs with embedded tables require custom OCR and layout analysis algorithms.
              </p>
            </section>

            {/* Section 6: Post-Launch Operational Costs */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                AI Costs Beyond the Initial Development
              </h2>
              <p className="text-muted-foreground">
                Budgeting for an AI product requires planning for recurring operational expenses
                after launch. The primary ongoing cost components are:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <Zap className="size-4 text-[#e5b84c] shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Model Inference & Token Usage:</strong>{" "}
                    Charges per million prompt and completion tokens. Implementing semantic caching
                    and routing simple queries to lighter models like GPT-4o-mini reduces this bill
                    substantially.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Server className="size-4 text-[#e5b84c] shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Vector Database Hosting:</strong> Managed
                    cloud instances of pgvector, Pinecone, or Qdrant sized according to embedding
                    dimensions and query throughput.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <ShieldCheck className="size-4 text-[#e5b84c] shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Observability & Evaluation:</strong>{" "}
                    Platform logging tools (such as LangSmith, Arize, or self-hosted OpenTelemetry)
                    that trace latency, prompt drift, and token consumption in real time.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Build vs Buy */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                Build vs Buy vs Custom AI Development
              </h2>
              <p className="text-muted-foreground">
                When should an enterprise buy a SaaS wrapper versus hiring a custom engineering
                team?
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="p-4 rounded-xl border border-border bg-surface/20">
                  <strong className="text-foreground block mb-1">When to Buy Off-The-Shelf:</strong>{" "}
                  Generic use cases like standard customer support chatbots, generic copywriting
                  tools, or standardized email summaries.
                </li>
                <li className="p-4 rounded-xl border border-border bg-surface/20">
                  <strong className="text-foreground block mb-1">
                    When to Build Custom AI Systems:
                  </strong>{" "}
                  Core business workflows, proprietary data retrieval, custom CRM integrations,
                  multi-tenant SaaS platforms, or situations requiring complete IP ownership and
                  zero data-leakage compliance.
                </li>
              </ul>
            </section>

            {/* Section 8: How GLAD Approaches AI */}
            <section className="p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                Engineering Methodology
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                How GLAD Studio Engineers AI Systems
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                At GLAD Studio, we approach AI from an engineering-first perspective. We don't build
                shallow wrappers around third-party APIs. We design resilient backend
                architectures, robust vector search pipelines, and deterministic agent loops
                tailored to your exact business constraints.
              </p>
              <div className="pt-2">
                <Link
                  to="/services/ai-solutions"
                  className="btn-primary text-xs md:text-sm inline-flex items-center gap-2"
                >
                  <span>Explore Our AI Solutions & Engineering Capabilities</span>
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
                  AI Development Cost FAQs
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
