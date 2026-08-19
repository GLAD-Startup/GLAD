import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { EmailModal } from "@/components/site/EmailModal";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import {
  Workflow,
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
  Boxes,
  Cpu,
  GitMerge,
  Repeat,
  FileCheck2,
  Plug,
  UserCheck,
  Clock,
  Sparkles,
  Layout,
  Smartphone,
  Rocket,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/services/business-automation")({
  head: () => ({
    meta: [
      { title: "Business Automation Services in India | GLAD Studio" },
      {
        name: "description",
        content:
          "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes.",
      },
      { property: "og:title", content: "Business Automation Services in India | GLAD Studio" },
      {
        property: "og:description",
        content:
          "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes.",
      },
      { property: "og:url", content: "https://gladstudio.net/services/business-automation" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Business Automation Services in India | GLAD Studio" },
      {
        name: "twitter:description",
        content:
          "Custom workflow automation, n8n orchestration, API integrations, and lead enrichment pipelines engineered by GLAD Studio.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/services/business-automation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/business-automation/#webpage",
              url: "https://gladstudio.net/services/business-automation",
              name: "Business Automation Services in India | GLAD Studio",
              description:
                "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/business-automation/#breadcrumb",
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
                  name: "Business Automation",
                  item: "https://gladstudio.net/services/business-automation",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/business-automation/#service",
              name: "Business Automation and AI Workflows",
              serviceType: "Business Process Automation & Integration Engineering",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Custom business automation company in India building resilient workflow orchestration, n8n pipelines, API integrations, and AI-powered operational backends.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/business-automation/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is business process automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Business process automation is the use of software integrations, APIs, and workflow orchestration to execute repetitive operational tasks automatically without manual human intervention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What business processes can GLAD Studio automate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GLAD Studio automates sales lead prospecting and enrichment, multi-system CRM synchronization, invoice parsing and reconciliation, employee and customer onboarding, and operational data extraction.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD connect different business systems and tools?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we integrate disparate software systems including CRMs, ERPs, payment gateways, SQL databases, email providers, and internal tools using resilient webhooks and REST APIs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can AI be used for business automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we integrate language models into automated workflows to parse unstructured emails, classify incoming tickets, extract structured fields from documents, and validate complex operational data.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD build lead enrichment automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we engineer high-throughput lead enrichment pipelines that scrape company websites, verify email deliverability, append demographic data, and automatically update CRM contact records.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD build n8n workflows and self-hosted instances?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we deploy self-hosted and cloud n8n workflow instances with custom Python/JavaScript function nodes, automated error notifications, and resilient retry mechanisms.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BusinessAutomationPage,
});

const automationSolutions = [
  {
    icon: UserCheck,
    title: "Lead Sourcing & Enrichment Pipelines",
    description:
      "Automate high-volume outbound prospecting by discovering company domains, verifying contact emails, and enriching CRM profiles with structured metadata.",
    features: [
      "Automated website scraping & company data extraction",
      "SMTP email verification & deliverability scoring",
      "Direct synchronization with HubSpot, Salesforce, or Postgres",
      "LLM classification of company size and industry verticals",
    ],
  },
  {
    icon: GitMerge,
    title: "Cross-System API Integrations",
    description:
      "Eliminate manual double-entry by syncing records between billing systems, internal ERPs, customer support platforms, and relational databases.",
    features: [
      "Bi-directional webhook event synchronization",
      "Stripe & Razorpay payment reconciliation triggers",
      "Automated Slack / Microsoft Teams alerting feeds",
      "Database ETL pipelines with PostgreSQL & Supabase",
    ],
  },
  {
    icon: Repeat,
    title: "n8n Workflow Orchestration",
    description:
      "Self-hosted, transparent workflow automation engines executing complex branching logic, multi-stage approval loops, and automated error retries.",
    features: [
      "Custom JavaScript & Python data transformation nodes",
      "Self-hosted n8n deployment for complete data privacy",
      "Dead-letter queues and automated incident alerts",
      "Audit logs of every workflow execution step",
    ],
  },
  {
    icon: FileCheck2,
    title: "Document Parsing & Back-Office Automation",
    description:
      "Convert unstructured invoices, contracts, receipts, and customer emails into clean, structured database entries using OCR and language models.",
    features: [
      "Automated PDF & receipt table extraction",
      "Zero-shot LLM categorization & data normalization",
      "ERP purchase order auto-creation",
      "Exception handling queues for human review",
    ],
  },
];

const reliabilityPillars = [
  {
    icon: Lock,
    title: "Idempotency & Deduplication",
    description:
      "Unique transaction idempotency keys prevent duplicate orders, double-charges, and repeated webhook execution during network retries.",
  },
  {
    icon: Clock,
    title: "Exponential Backoff & Retries",
    description:
      "Automated retry mechanisms with exponential backoff gracefully handle third-party API rate limits and intermittent outages.",
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy & Local Hosting",
    description:
      "Self-hosted orchestration options ensure proprietary customer records and financial data never leave your virtual private cloud (VPC).",
  },
  {
    icon: Cpu,
    title: "Full Audit Trails & Alerting",
    description:
      "Every automated transaction logs payload inputs, timestamps, response codes, and execution runtimes with instant failure alerts.",
  },
];

const processStages = [
  {
    step: "01",
    title: "Process Discovery & Mapping",
    description:
      "We audit your team's manual operations, identify data bottlenecks, and blueprint a clear end-to-end integration architecture.",
  },
  {
    step: "02",
    title: "Sandbox Pipeline Build",
    description:
      "We engineer the webhook handlers, API connectors, and transformation scripts in an isolated testing environment with sample payloads.",
  },
  {
    step: "03",
    title: "Edge-Case Hardening & Retry Logic",
    description:
      "We simulate API rate limits, invalid input data, and network timeouts to build robust fail-safes and automated alert triggers.",
  },
  {
    step: "04",
    title: "Production Deployment & Monitoring",
    description:
      "We roll out the live automations, verify end-to-end data integrity across production tools, and provide comprehensive execution dashboards.",
  },
];

const faqItems = [
  {
    q: "What is business process automation?",
    a: "Business process automation is the use of software integrations, APIs, and workflow orchestration to execute repetitive operational tasks automatically without manual human intervention. It streamlines operations, eliminates data entry errors, and allows teams to focus on high-leverage strategic work.",
  },
  {
    q: "What business processes can GLAD Studio automate?",
    a: "GLAD Studio automates sales lead prospecting and enrichment, multi-system CRM synchronization, invoice parsing and reconciliation, employee and customer onboarding, and operational data extraction. We build customized workflows tailored to your specific software stack.",
  },
  {
    q: "Can GLAD connect different business systems and tools?",
    a: "Yes, we integrate disparate software systems including CRMs, ERPs, payment gateways, SQL databases, email providers, and internal tools using resilient webhooks and REST APIs. Our connectors bridge modern cloud services with proprietary legacy databases.",
  },
  {
    q: "Can AI be used for business automation?",
    a: "Yes, we integrate language models into automated workflows to parse unstructured emails, classify incoming tickets, extract structured fields from documents, and validate complex operational data. This bridges the gap where traditional rule-based scripts fail.",
  },
  {
    q: "Can GLAD build lead enrichment automation?",
    a: "Yes, we engineer high-throughput lead enrichment pipelines that scrape company websites, verify email deliverability, append demographic data, and automatically update CRM contact records with verified buyer information.",
  },
  {
    q: "Can GLAD build n8n workflows and self-hosted instances?",
    a: "Yes, we deploy self-hosted and cloud n8n workflow instances with custom Python/JavaScript function nodes, automated error notifications, and resilient retry mechanisms. Self-hosted instances keep 100% of your business data within your own infrastructure.",
  },
];

function BusinessAutomationPage() {
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
                Business Automation
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#10b981] mb-6">
              <Workflow className="size-3.5" />
              <span>Business Automation Company India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
              Business Automation and{" "}
              <HandDrawnUnderline color="var(--brand)">AI Workflows</HandDrawnUnderline>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              GLAD Studio builds custom business automation systems using APIs, event-driven
              workflows, AI agents, and integrations to eliminate repetitive operational work,
              connect fragmented software stacks, and ensure data integrity across your entire
              organization.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
              >
                <span>Automate Your Workflows</span>
                <ArrowRight className="size-4" />
              </button>
              <Link
                to="/portfolio"
                className="px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
              >
                View Automation Projects
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80">
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">n8n & Node</div>
                <div className="text-xs text-muted-foreground">Self-Hosted Workflows</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">API Sync</div>
                <div className="text-xs text-muted-foreground">Resilient Webhooks</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">AI Parsers</div>
                <div className="text-xs text-muted-foreground">Unstructured Data Cleanse</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Zero Leaks</div>
                <div className="text-xs text-muted-foreground">Enterprise Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Automation Systems */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10b981]">
              Automation Capabilities
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              What Business Processes We Automate
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We design custom automation pipelines that replace error-prone manual spreadsheets,
              connect incompatible SaaS tools, and accelerate core business operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {automationSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-6">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">{sol.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-border/60">
                      <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">
                        Workflow Deliverables
                      </div>
                      <ul className="space-y-2.5">
                        {sol.features.map((item) => (
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

      {/* Section 3: Engineering Reliability Pillars */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10b981]">
              Architecture Standards
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Built for Enterprise Reliability & Data Integrity
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Automated workflows must be bulletproof against network disconnects, API schema
              updates, and intermittent service downtime.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reliabilityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="surface-card p-6 rounded-2xl border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-bold text-base font-display text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Implementation Process */}
      <section className="py-20 border-t border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10b981]">
              Delivery Lifecycle
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Our 4-Phase Automation Engineering Process
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We design, test, and deploy resilient automations that seamlessly integrate with your
              existing operational infrastructure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processStages.map((stage) => (
              <div
                key={stage.step}
                className="surface-card p-6 rounded-2xl border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-3xl font-black text-[#10b981] mb-3">
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
            <span className="text-xs uppercase tracking-widest font-bold text-[#10b981]">
              Proven Automations
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Real Automation Case Studies
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#10b981]">
                  Pipeline Automation
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Lead Enrichment System
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Automated scraping and data cleansing pipeline enriching thousands of inbound and
                  outbound company leads with verified contact details.
                </p>
              </div>
              <Link
                to="/portfolio/lead-enrichment"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#10b981] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#10b981]">
                  Document Workflow
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Fluxor File Orchestration
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Automated desktop document organizer analyzing file content and metadata to
                  categorize, rename, and sort cluttered directories.
                </p>
              </div>
              <Link
                to="/portfolio/fluxor"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#10b981] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#10b981]">
                  Inventory Automation
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Stock Management Platform
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Real-time inventory sync engine automating stock level alerts, purchase order
                  drafts, and multi-warehouse supply chain transfers.
                </p>
              </div>
              <Link
                to="/portfolio/stock-management"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#10b981] transition-colors"
              >
                <span>Read Case Study</span>
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
            <span className="text-xs uppercase tracking-widest font-bold text-[#10b981]">
              Related Offerings
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Connected Engineering Services
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/services/ai-solutions"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Sparkles className="size-5 text-[#e5b84c] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors">
                AI Solutions →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                LLM applications, RAG pipelines, and intelligent agents.
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
                Custom full-stack web platforms, admin dashboards, and APIs.
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
            <span className="text-xs uppercase tracking-widest font-bold text-[#10b981]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Business Automation FAQs
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Concise answers to common questions about implementing business process automation in
              India.
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
                        isOpen ? "rotate-180 text-[#10b981]" : "text-muted-foreground"
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

      {/* Section 8: Final CTA */}
      <section className="py-20 border-t border-border bg-surface/20 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
            Ready to Automate Your Business Operations?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eliminate tedious manual tasks and unify your software ecosystem with custom API
            integrations and AI-powered workflows from GLAD Studio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
            >
              <span>Schedule Automation Audit</span>
              <ArrowRight className="size-4" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
            >
              Discuss Your Workflows
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
