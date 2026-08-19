import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { EmailModal } from "@/components/site/EmailModal";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  ShieldCheck,
  Zap,
  Layers,
  ChevronDown,
  Server,
  Lock,
  Cpu,
  Bot,
  BrainCircuit,
  Eye,
  Workflow,
  Search,
  Check,
  Terminal,
  Activity,
  FileCode,
  Layout,
  Smartphone,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/services/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions & Development in India | GLAD Studio" },
      {
        name: "description",
        content:
          "GLAD Studio builds custom AI solutions including LLM applications, AI agents, RAG systems, computer vision and intelligent automation for businesses and products.",
      },
      { property: "og:title", content: "AI Solutions & Development in India | GLAD Studio" },
      {
        property: "og:description",
        content:
          "GLAD Studio builds custom AI solutions including LLM applications, AI agents, RAG systems, computer vision and intelligent automation for businesses and products.",
      },
      { property: "og:url", content: "https://gladstudio.net/services/ai-solutions" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Solutions & Development in India | GLAD Studio" },
      {
        name: "twitter:description",
        content:
          "Production-grade LLM applications, autonomous AI agents, RAG search pipelines, and computer vision systems engineered by GLAD Studio.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/services/ai-solutions" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/ai-solutions/#webpage",
              url: "https://gladstudio.net/services/ai-solutions",
              name: "AI Solutions & Development in India | GLAD Studio",
              description:
                "GLAD Studio builds custom AI solutions including LLM applications, AI agents, RAG systems, computer vision and intelligent automation for businesses and products.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/ai-solutions/#breadcrumb",
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
                  name: "Services",
                  item: "https://gladstudio.net/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "AI Solutions",
                  item: "https://gladstudio.net/services/ai-solutions",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/ai-solutions/#service",
              name: "AI Solutions and Development",
              serviceType: "Artificial Intelligence & LLM Application Engineering",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Custom AI solutions company in India developing LLM applications, AI agents, RAG systems, computer vision models, and intelligent workflow automation for businesses.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/ai-solutions/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What AI solutions does GLAD Studio build?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GLAD Studio engineers custom AI solutions including LLM-powered applications, multi-agent workflows, retrieval-augmented generation (RAG) pipelines, computer vision systems, and intelligent business automation backends.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does GLAD build AI agents?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, GLAD Studio builds autonomous and semi-autonomous AI agents utilizing frameworks like LangGraph and CrewAI that execute complex multi-step workflows, query external databases, call REST APIs, and adhere to strict deterministic guardrails.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD build RAG applications?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we architect enterprise RAG (Retrieval-Augmented Generation) systems that connect language models to proprietary corporate knowledge bases using vector embeddings, pgvector storage, and hybrid reranking to deliver grounded, hallucination-free answers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD integrate LLMs into existing software?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we integrate frontier models such as OpenAI GPT-4o, Anthropic Claude 3.5, and open-source models into existing web, mobile, and enterprise platforms via secure, low-latency API microservices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD automate business workflows using AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we automate multi-step business workflows by connecting AI models with internal ERPs, CRMs, document parsers, and n8n orchestration engines to eliminate manual data entry and triage tasks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does GLAD build computer vision systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, GLAD Studio develops computer vision and media intelligence pipelines for automated document classification, OCR data extraction, visual quality inspection, and media integrity validation.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: AiSolutionsPage,
});

const aiSystems = [
  {
    icon: BrainCircuit,
    title: "Custom LLM Applications",
    description:
      "Context-aware applications powered by frontier and open-source language models tailored to your domain-specific data and business logic.",
    capabilities: [
      "Structured JSON extraction from unstructured text",
      "Interactive conversational assessment & coaching platforms",
      "Cost-aware model routing (GPT-4o, Claude 3.5, Llama 3)",
      "Strict evaluation guardrails & latency monitoring",
    ],
  },
  {
    icon: Bot,
    title: "Autonomous & Supervised AI Agents",
    description:
      "Multi-agent systems engineered with LangGraph and CrewAI that plan tasks, invoke external API tools, query databases, and execute operational workflows.",
    capabilities: [
      "Stateful agent loops with human-in-the-loop approvals",
      "Dynamic tool calling & external API orchestration",
      "Self-correcting code and query execution sandboxes",
      "Deterministic fallback paths for mission-critical operations",
    ],
  },
  {
    icon: Search,
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Enterprise search and knowledge retrieval engines that ground model responses in your proprietary PDFs, databases, and customer records with zero hallucination.",
    capabilities: [
      "Hierarchical document chunking & semantic embeddings",
      "pgvector & hybrid dense/sparse vector search",
      "Context compression & reciprocal rank fusion (RRF)",
      "Source citation attribution for auditable outputs",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision & Media Intelligence",
    description:
      "Visual intelligence pipelines that process imagery and video streams for automated classification, OCR extraction, and anomaly detection.",
    capabilities: [
      "Document OCR & unstructured invoice parsing",
      "Automated image classification & tagging pipelines",
      "Media integrity validation & deepfake detection",
      "Real-time visual quality inspection",
    ],
  },
];

const engineeringLayers = [
  {
    icon: Database,
    title: "Vector Data & Retrieval Layer",
    description:
      "High-dimensional vector storage built on pgvector, Pinecone, or Qdrant with hybrid keyword/semantic search, metadata filtering, and automated embedding updates.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails & Privacy Isolation",
    description:
      "Zero data-retention policies, PII anonymization layers, regex-based prompt sanitization, and output schema validation using Pydantic.",
  },
  {
    icon: Zap,
    title: "Model Cost & Latency Routing",
    description:
      "Intelligent gateway routing that dispatches simple tasks to lightweight models and complex reasoning to frontier models, cutting token expenses by up to 70%.",
  },
  {
    icon: Activity,
    title: "Observability & Evals Framework",
    description:
      "Continuous logging of prompt tokens, model latency, retrieval recall scores, and automated synthetic evaluation suites against test datasets.",
  },
];

const aiLifecycle = [
  {
    step: "01",
    title: "Feasibility Spike & Data Audit",
    description:
      "We inspect your unstructured data assets, evaluate token economics, and validate technical viability with a rapid proof-of-concept benchmark.",
  },
  {
    step: "02",
    title: "Pipeline Architecture & Evaluation Setup",
    description:
      "We design the RAG or agent architecture, establish baseline evaluation criteria, and implement semantic chunking and embedding strategies.",
  },
  {
    step: "03",
    title: "Model Integration & Tool Grounding",
    description:
      "We engineer custom FastAPI microservices, connect agent tool definitions, configure pgvector storage, and enforce Pydantic output schemas.",
  },
  {
    step: "04",
    title: "Hardening, Guardrails & Production Launch",
    description:
      "We run vulnerability scans, configure token caching and fallback handlers, and deploy containerized services with real-time latency monitoring.",
  },
];

const faqItems = [
  {
    q: "What AI solutions does GLAD Studio build?",
    a: "GLAD Studio engineers custom AI solutions including LLM-powered applications, multi-agent workflows, retrieval-augmented generation (RAG) pipelines, computer vision systems, and intelligent business automation backends. We focus on practical software engineering that delivers measurable operational ROI rather than theoretical prototypes.",
  },
  {
    q: "Does GLAD build AI agents?",
    a: "Yes, GLAD Studio builds autonomous and semi-autonomous AI agents utilizing frameworks like LangGraph and CrewAI that execute complex multi-step workflows, query external databases, call REST APIs, and adhere to strict deterministic guardrails. Our agents support human-in-the-loop checkpoints for sensitive actions.",
  },
  {
    q: "Can GLAD build RAG applications?",
    a: "Yes, we architect enterprise RAG (Retrieval-Augmented Generation) systems that connect language models to proprietary corporate knowledge bases using vector embeddings, pgvector storage, and hybrid reranking to deliver grounded, hallucination-free answers with precise source citations.",
  },
  {
    q: "Can GLAD integrate LLMs into existing software?",
    a: "Yes, we integrate frontier models such as OpenAI GPT-4o, Anthropic Claude 3.5, and open-source models into existing web, mobile, and enterprise platforms via secure, low-latency API microservices. We handle token caching, prompt engineering, and structured JSON parsing seamlessly.",
  },
  {
    q: "Can GLAD automate business workflows using AI?",
    a: "Yes, we automate multi-step business workflows by connecting AI models with internal ERPs, CRMs, document parsers, and n8n orchestration engines to eliminate manual data entry and triage tasks.",
  },
  {
    q: "Does GLAD build computer vision systems?",
    a: "Yes, GLAD Studio develops computer vision and media intelligence pipelines for automated document classification, OCR data extraction, visual quality inspection, and media integrity validation.",
  },
];

function AiSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
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
                <Link to="/services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold" aria-current="page">
                AI Solutions
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c] mb-6">
              <Sparkles className="size-3.5" />
              <span>AI Solutions Company India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
              AI Solutions and{" "}
              <HandDrawnUnderline color="var(--brand-2)">Development</HandDrawnUnderline>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              GLAD Studio engineers custom AI solutions that connect frontier language models with
              proprietary business data, APIs, and operational workflows. We build production-ready
              LLM applications, RAG search pipelines, autonomous AI agents, and computer vision
              systems backed by deterministic guardrails and cost-optimized routing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
              >
                <span>Consult on AI Architecture</span>
                <ArrowRight className="size-4" />
              </button>
              <Link
                to="/portfolio"
                className="px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
              >
                Explore AI Case Studies
              </Link>
            </div>

            {/* AI Architecture Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80">
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">LangGraph</div>
                <div className="text-xs text-muted-foreground">Stateful Agent Loops</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">pgvector</div>
                <div className="text-xs text-muted-foreground">Hybrid RAG Retrieval</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Guardrails</div>
                <div className="text-xs text-muted-foreground">Pydantic Schema Validation</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Cost Routing</div>
                <div className="text-xs text-muted-foreground">Dynamic Token Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI Systems We Build */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Core AI Capabilities
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Production AI Systems Engineered for Real-World Demands
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We design and implement AI applications that solve specific operational challenges,
              automate repetitive human tasks, and unlock insights from unstructured corporate data.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {aiSystems.map((sys) => {
              const Icon = sys.icon;
              return (
                <div
                  key={sys.title}
                  className="surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#e5b84c] mb-6">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">{sys.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {sys.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-border/60">
                      <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">
                        Technical Implementations
                      </div>
                      <ul className="space-y-2.5">
                        {sys.capabilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs font-medium text-foreground"
                          >
                            <CheckCircle2 className="size-4 text-[#10b981] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Engineering Architecture Layers */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Infrastructure & Safety
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Enterprise AI Engineering Foundations
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Deploying AI models to production requires rigorous guardrails, deterministic data
              contracts, and enterprise security standards.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engineeringLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.title}
                  className="surface-card p-6 rounded-2xl border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#e5b84c] mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-bold text-base font-display text-foreground mb-2">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: AI Development Process */}
      <section className="py-20 border-t border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Methodology
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Our 4-Stage AI Engineering Process
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We apply systematic software engineering principles to AI development, validating model
              accuracy and data grounding at every stage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiLifecycle.map((stage) => (
              <div
                key={stage.step}
                className="surface-card p-6 rounded-2xl border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-3xl font-black text-[#e5b84c] mb-3">
                    {stage.step}
                  </div>
                  <h3 className="font-bold text-base font-display text-foreground mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Real Project Evidence */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Proven Deployments
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Real AI Projects Built by GLAD Studio
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]">
                  Conversational AI
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  AI Mock Interview Platform
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Real-time conversational AI system conducting dynamic technical interviews,
                  transcribing speech in low-latency streams, and producing structured evaluation
                  scores.
                </p>
              </div>
              <Link
                to="/portfolio/ai-mock-interview"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors"
              >
                <span>Read AI Interview Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]">
                  Data Enrichment AI
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Lead Enrichment Pipeline
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  High-throughput automated lead sourcing and cleansing pipeline leveraging LLM
                  extraction to parse company websites, verify contacts, and enrich CRM profiles.
                </p>
              </div>
              <Link
                to="/portfolio/lead-enrichment"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors"
              >
                <span>Read Enrichment Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]">
                  Document ML
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Fluxor File Intelligence
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Desktop application analyzing local document content and metadata using machine
                  learning models to automatically suggest smart folder hierarchies and renames.
                </p>
              </div>
              <Link
                to="/portfolio/fluxor"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors"
              >
                <span>Read Fluxor Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Related Services */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Interconnected Services
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Connected Engineering Capabilities
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/services/business-automation"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Workflow className="size-5 text-[#10b981] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#10b981] transition-colors">
                Business Automation →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                n8n orchestration, API integrations, and ETL pipelines.
              </p>
            </Link>

            <Link
              to="/services/web-application-development"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Layout className="size-5 text-[#00b4d8] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#00b4d8] transition-colors">
                Web Applications →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Custom full-stack web platforms, dashboards, and APIs.
              </p>
            </Link>

            <Link
              to="/services/mvp-development"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Rocket className="size-5 text-[#ff4e88] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#ff4e88] transition-colors">
                MVP Development →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Rapid v1 product delivery for startups and businesses.
              </p>
            </Link>

            <Link
              to="/services/mobile-app-development"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Smartphone className="size-5 text-[#7209b7] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#7209b7] transition-colors">
                Mobile Apps →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Cross-platform Flutter & React Native mobile applications.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ Section (AEO) */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Technical & Commercial FAQs
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              AI Solutions & Engineering Q&A
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Direct, factual answers to key questions about building AI solutions with GLAD Studio.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="surface-card rounded-xl border border-border overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
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
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7.5: AI Engineering Insights Cluster */}
      <section className="py-20 border-t border-border bg-surface/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                Technical Knowledge Base
              </span>
              <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
                AI Engineering Insights & Architecture Guides
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                Explore in-depth engineering breakdowns, cost analyses, and architectural decision
                frameworks authored by the GLAD Studio engineering team.
              </p>
            </div>
            <Link
              to="/insights"
              className="text-xs md:text-sm font-bold text-[#e5b84c] hover:text-foreground transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>View All AI Insights →</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              to="/insights/ai-development-cost-india"
              className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#e5b84c]">
                  Budgeting & Pricing
                </span>
                <h3 className="text-base font-bold font-display text-foreground mt-2 group-hover:text-[#e5b84c] transition-colors leading-snug">
                  AI Development Cost in India: 2026 Practical Pricing Guide
                </h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                  Understand project complexity tiers, vector database infrastructure costs, model
                  token fees, and engineering budgets.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 text-xs font-bold text-foreground inline-flex items-center gap-1">
                <span>Read Analysis</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/insights/what-is-ai-agent-development"
              className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#e5b84c]">
                  Agentic Systems
                </span>
                <h3 className="text-base font-bold font-display text-foreground mt-2 group-hover:text-[#e5b84c] transition-colors leading-snug">
                  What Is AI Agent Development? Practical Guide for Businesses
                </h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                  A deep dive into tool calling, LangGraph stateful loops, memory systems, and
                  production safety guardrails.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 text-xs font-bold text-foreground inline-flex items-center gap-1">
                <span>Read Guide</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/insights/rag-vs-fine-tuning"
              className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#e5b84c]">
                  Architecture Strategy
                </span>
                <h3 className="text-base font-bold font-display text-foreground mt-2 group-hover:text-[#e5b84c] transition-colors leading-snug">
                  RAG vs Fine-Tuning: Which AI Approach Should Your Business Use?
                </h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                  Compare dynamic pgvector knowledge retrieval against fine-tuning model weights
                  for formatting, syntax, and tone.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 text-xs font-bold text-foreground inline-flex items-center gap-1">
                <span>Read Breakdown</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 border-t border-border bg-surface/20 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
            Let's Engineer Your AI Solution
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From RAG pipelines and custom AI agents to LLM-powered applications, partner with GLAD
            Studio for robust, secure, and production-ready artificial intelligence engineering.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
            >
              <span>Schedule AI Strategy Call</span>
              <ArrowRight className="size-4" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
            >
              Submit Project Scope
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
