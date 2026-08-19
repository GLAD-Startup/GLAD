import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { EmailModal } from "@/components/site/EmailModal";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  ShieldCheck,
  Zap,
  Layers,
  ChevronDown,
  Layout,
  Smartphone,
  Sparkles,
  Workflow,
  ExternalLink,
  Laptop,
  Check,
  Server,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/services/mvp-development")({
  head: () => ({
    meta: [
      { title: "MVP Development in India | GLAD Studio" },
      {
        name: "description",
        content:
          "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch.",
      },
      { property: "og:title", content: "MVP Development in India | GLAD Studio" },
      {
        property: "og:description",
        content:
          "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch.",
      },
      { property: "og:url", content: "https://gladstudio.net/services/mvp-development" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MVP Development in India | GLAD Studio" },
      {
        name: "twitter:description",
        content:
          "Turn validated product concepts into production-ready web, mobile, and SaaS MVPs with GLAD Studio.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/services/mvp-development" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/mvp-development/#webpage",
              url: "https://gladstudio.net/services/mvp-development",
              name: "MVP Development in India | GLAD Studio",
              description:
                "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/mvp-development/#breadcrumb",
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
                  name: "MVP Development",
                  item: "https://gladstudio.net/services/mvp-development",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/mvp-development/#service",
              name: "MVP Development",
              serviceType: "Minimum Viable Product Engineering",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Custom MVP development company in India building production-ready web applications, SaaS platforms, and mobile apps for startups and growing businesses.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/mvp-development/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is MVP development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "MVP development is the process of engineering a functional, early version of a software product containing core features needed to validate market demand with real users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why choose GLAD Studio for MVP development in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GLAD Studio delivers production-grade software engineering combining rapid product prototyping, scalable database design, clean TypeScript and Python codebases, and complete intellectual property ownership.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What deliverables are included in an MVP build?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Every GLAD Studio MVP includes fully documented source code, production database schemas, secure authentication, API endpoints, CI/CD automated deployments, and administrative controls.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD Studio ensure MVP architecture scales after launch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We architect MVPs using modular component hierarchies, strict type safety, PostgreSQL relational schemas, and containerized backends that allow seamless feature expansion without costly rewrites.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD develop both SaaS and mobile MVPs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, GLAD Studio engineers multi-tenant SaaS web platforms with automated billing and cross-platform mobile MVPs using Flutter and React Native.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who owns the intellectual property and code of the MVP?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You retain 100% ownership of all source code, database architectures, digital assets, and intellectual property created during the engagement.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: MvpDevelopmentPage,
});

const mvpTypes = [
  {
    icon: Layout,
    title: "SaaS & Web Application MVPs",
    description:
      "Full-stack multi-tenant web applications engineered with React, TypeScript, PostgreSQL, and secure role-based access control.",
    deliverables: [
      "Multi-tenant data isolation",
      "Stripe / Razorpay payment gateways",
      "Interactive analytics & management dashboards",
      "Automated user onboarding flows",
    ],
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile MVPs",
    description:
      "Native-feel iOS and Android mobile applications built on Flutter with offline-first local caching and push notifications.",
    deliverables: [
      "Single codebase for iOS & Android",
      "Secure biometric authentication",
      "Camera, GPS, and device sensor access",
      "TestFlight & Google Play beta distribution",
    ],
  },
  {
    icon: Sparkles,
    title: "AI & LLM-Powered MVPs",
    description:
      "Intelligent software systems integrating OpenAI, Claude, LangChain, or custom RAG pipelines to automate complex workflows.",
    deliverables: [
      "Contextual RAG document retrieval",
      "Vector search with pgvector",
      "Deterministic guardrails & evaluation suites",
      "Cost-optimized token routing",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow & Internal Tool MVPs",
    description:
      "Custom business portals and automated operations backends replacing fragile manual spreadsheets and legacy systems.",
    deliverables: [
      "Custom CRUD interfaces & approval loops",
      "Automated email & webhook triggers",
      "Third-party REST API integrations",
      "Immutable audit trail logging",
    ],
  },
];

const processPhases = [
  {
    step: "01",
    title: "Product Scope & Technical Blueprinting",
    description:
      "We dissect your product vision, eliminate non-essential features, and define the core technical architecture, entity-relationship diagrams, and API boundaries.",
    focus: "Scope reduction, database schemas, user journey mapping",
  },
  {
    step: "02",
    title: "Interactive Wireframes & UI Prototyping",
    description:
      "Our team designs high-fidelity, clickable prototypes demonstrating complete user flows, navigation states, and micro-interactions before code is written.",
    focus: "Design system setup, component tokens, accessibility",
  },
  {
    step: "03",
    title: "Sprint-Based Engineering & Integration",
    description:
      "Senior engineers build frontend interfaces and backend services in structured fortnightly sprints with continuous staging environment updates.",
    focus: "Type-safe APIs, authentication, core business logic",
  },
  {
    step: "04",
    title: "Quality Assurance, Security & Performance",
    description:
      "Rigorous end-to-end testing, vulnerability scanning, SQL query optimization, and Lighthouse web vitals audits ensure launch-day stability.",
    focus: "Load testing, data validation, zero-leakage security",
  },
  {
    step: "05",
    title: "Production Deployment & Handoff",
    description:
      "We deploy your production infrastructure with automated CI/CD pipelines, configure domain DNS and monitoring, and transfer complete IP and repository access.",
    focus: "Cloud provisioning, logging, documentation handoff",
  },
];

const faqItems = [
  {
    q: "What is MVP development?",
    a: "MVP development is the process of engineering a functional, early version of a software product containing core features needed to validate market demand with real users. By focusing strictly on high-impact capabilities, businesses minimize development risk and accelerate time to market.",
  },
  {
    q: "Why choose GLAD Studio for MVP development in India?",
    a: "GLAD Studio delivers production-grade software engineering combining rapid product prototyping, scalable database design, clean TypeScript and Python codebases, and complete intellectual property ownership. We operate as an embedded senior engineering partner rather than a transactional outsourcing agency.",
  },
  {
    q: "What deliverables are included in an MVP build?",
    a: "Every GLAD Studio MVP includes fully documented source code, production database schemas, secure authentication, API endpoints, CI/CD automated deployments, and administrative controls. You receive a fully functioning, launch-ready application without vendor lock-in.",
  },
  {
    q: "How does GLAD Studio ensure MVP architecture scales after launch?",
    a: "We architect MVPs using modular component hierarchies, strict type safety, PostgreSQL relational schemas, and containerized backends that allow seamless feature expansion without costly rewrites. The foundations established in the MVP directly support subsequent v2 and enterprise iterations.",
  },
  {
    q: "Can GLAD develop both SaaS and mobile MVPs?",
    a: "Yes, GLAD Studio engineers multi-tenant SaaS web platforms with automated billing and cross-platform mobile MVPs using Flutter and React Native. Both platforms share unified backend APIs, maintaining consistent business rules and synchronized data.",
  },
  {
    q: "Who owns the intellectual property and code of the MVP?",
    a: "You retain 100% ownership of all source code, database architectures, digital assets, and intellectual property created during the engagement. All repositories, cloud credentials, and design artifacts are transferred directly to your organization.",
  },
];

function MvpDevelopmentPage() {
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
                MVP Development
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c] mb-6">
              <Rocket className="size-3.5" />
              <span>MVP Development India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
              MVP Development for{" "}
              <HandDrawnUnderline color="var(--brand-pink)">
                Startups and Businesses
              </HandDrawnUnderline>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Turn validated product concepts and business requirements into production-ready web,
              mobile, and SaaS MVPs. GLAD Studio engineers high-velocity, scalable digital products
              backed by senior engineers, type-safe architectures, and 100% intellectual property
              ownership.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
              >
                <span>Discuss Your MVP Scope</span>
                <ArrowRight className="size-4" />
              </button>
              <Link
                to="/portfolio"
                className="px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
              >
                View Case Studies
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80">
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Type-Safe</div>
                <div className="text-xs text-muted-foreground">React & TypeScript Stack</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">PostgreSQL</div>
                <div className="text-xs text-muted-foreground">Relational Data Integrity</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">100% IP</div>
                <div className="text-xs text-muted-foreground">Complete Code Ownership</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Production</div>
                <div className="text-xs text-muted-foreground">Day-One Scalable Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What GLAD Builds */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Custom MVP Engineering
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              What Kind of MVPs We Build
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We specialize in custom MVP development for ambitious startups and businesses seeking
              to validate product-market fit, onboard early adopters, and secure funding with a
              credible, high-performance product.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {mvpTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#e5b84c] mb-6">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">{type.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-border/60">
                      <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">
                        Included Features & Capabilities
                      </div>
                      <ul className="space-y-2.5">
                        {type.deliverables.map((item) => (
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

      {/* Section 3: Engineering Process */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Development Lifecycle
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Our 5-Phase MVP Engineering Process
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We eliminate ambiguity through structured sprint cycles, transparent architectural
              blueprints, and rapid staging environment deployments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {processPhases.map((phase) => (
              <div
                key={phase.step}
                className="surface-card p-6 rounded-2xl border border-border relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-3xl font-black text-[#e5b84c] mb-3">
                    {phase.step}
                  </div>
                  <h3 className="font-bold text-base font-display text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                  <span className="font-semibold text-foreground">Focus:</span> {phase.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Architecture & Engineering Standards */}
      <section className="py-20 border-t border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                Production Readiness
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight">
                Architected for Growth, Not Just Validation
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Many MVP development agencies build throwaway prototypes that require total rewrites
                when scaling. At GLAD Studio, we build on clean architectural patterns that carry
                your product through product-market fit to enterprise adoption.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[#10b981] shrink-0 mt-0.5">
                    <Database className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Structured PostgreSQL Schemas
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Strict relational constraints, indexed foreign keys, and typed schema
                      migrations prevent data corruption from day one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[#10b981] shrink-0 mt-0.5">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Role-Based Access Control (RBAC)
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Granular user permissions, tenant-level data isolation, and secure session
                      management protect sensitive customer records.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[#10b981] shrink-0 mt-0.5">
                    <Server className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Automated CI/CD & Cloud Infrastructure
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Continuous integration pipelines with automated preview environments ensure
                      flawless updates with zero downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="surface-card p-6 md:p-8 rounded-2xl border-2 border-border shadow-xl space-y-6">
                <h3 className="text-lg font-bold font-display text-foreground">
                  What is Included in Every GLAD MVP
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "100% Source Code Ownership",
                    "Production Database Setup",
                    "User Authentication & Roles",
                    "Custom Responsive UI Design",
                    "REST / GraphQL API Endpoints",
                    "Automated CI/CD Deployment",
                    "SSL & DNS Configuration",
                    "Technical Documentation & Handoff",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium">
                      <Check className="size-4 text-[#10b981] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-background border border-border/80 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground block mb-1">
                    Transparent Collaboration:
                  </span>
                  You receive real-time access to the git repository, staging builds, and sprint
                  planning boards throughout the entire engagement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Real Project Evidence */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Engineering Case Studies
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Software Systems Built by GLAD Studio
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Explore real-world software products, multi-tenant SaaS platforms, and intelligent
              systems engineered by our team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]">
                  SaaS Platform
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Stock Management Suite
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Multi-tenant enterprise inventory and supply chain application built with type-safe
                  PostgreSQL data scoping and real-time dashboard analytics.
                </p>
              </div>
              <Link
                to="/portfolio/stock-management"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]">
                  Conversational AI
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  AI Mock Interview Platform
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Low-latency conversational AI engine conducting real-time technical assessments
                  with automated speech evaluation and structured feedback.
                </p>
              </div>
              <Link
                to="/portfolio/ai-mock-interview"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#e5b84c]">
                  Mobile Application
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">Prayas App</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Decentralized medical inventory control and resource logistics mobile app engineered
                  for high-reliability field operational tracking.
                </p>
              </div>
              <Link
                to="/portfolio/prayas-app"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#e5b84c] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Related Engineering Services */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
              Service Ecosystem
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Explore Related Engineering Capabilities
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/services/web-application-development"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Layout className="size-5 text-[#00b4d8] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#00b4d8] transition-colors">
                Web Applications →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Custom business dashboards, SaaS portals, and scalable backends.
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
                Cross-platform Flutter & React Native applications for iOS & Android.
              </p>
            </Link>

            <Link
              to="/services/ai-solutions"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Sparkles className="size-5 text-[#e5b84c] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors">
                AI Solutions →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                LLM applications, RAG pipelines, AI agents, and computer vision.
              </p>
            </Link>

            <Link
              to="/services/business-automation"
              className="surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group"
            >
              <Workflow className="size-5 text-[#10b981] mb-3" />
              <h3 className="font-bold text-sm text-foreground group-hover:text-[#10b981] transition-colors">
                Business Automation →
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                n8n workflows, API integrations, and lead enrichment pipelines.
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
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              MVP Development Insights & Answers
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Direct answers to key technical and operational questions regarding MVP development in
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

      {/* Section 8: Final CTA */}
      <section className="py-20 border-t border-border bg-surface/20 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
            Ready to Build Your Product MVP?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Partner with GLAD Studio to engineer a production-ready software MVP with clean
            architecture, fixed scope, and rapid execution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
            >
              <span>Schedule MVP Strategy Call</span>
              <ArrowRight className="size-4" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
            >
              Send Project Requirements
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
