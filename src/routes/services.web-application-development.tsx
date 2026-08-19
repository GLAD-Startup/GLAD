import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { EmailModal } from "@/components/site/EmailModal";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import {
  Layout,
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
  KeyRound,
  FileCheck,
  Check,
  Workflow,
  Sparkles,
  Smartphone,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/services/web-application-development")({
  head: () => ({
    meta: [
      { title: "Web Application Development in India | GLAD Studio" },
      {
        name: "description",
        content:
          "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups and product teams, with scalable architecture, APIs and modern web technologies.",
      },
      { property: "og:title", content: "Web Application Development in India | GLAD Studio" },
      {
        property: "og:description",
        content:
          "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups and product teams, with scalable architecture, APIs and modern web technologies.",
      },
      {
        property: "og:url",
        content: "https://gladstudio.net/services/web-application-development",
      },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Web Application Development in India | GLAD Studio" },
      {
        name: "twitter:description",
        content:
          "Custom web applications, multi-tenant SaaS platforms, and enterprise backends engineered with React, TypeScript, Python, and PostgreSQL.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://gladstudio.net/services/web-application-development" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/web-application-development/#webpage",
              url: "https://gladstudio.net/services/web-application-development",
              name: "Web Application Development in India | GLAD Studio",
              description:
                "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups and product teams, with scalable architecture, APIs and modern web technologies.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/web-application-development/#breadcrumb",
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
                  name: "Web Application Development",
                  item: "https://gladstudio.net/services/web-application-development",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/web-application-development/#service",
              name: "Web Application Development",
              serviceType: "Full Stack Web Application Engineering",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Custom web application development company in India specializing in scalable SaaS platforms, enterprise dashboards, REST APIs, and multi-tenant architectures.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/web-application-development/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What web application development services does GLAD Studio offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GLAD Studio engineers custom web applications including multi-tenant SaaS platforms, enterprise business dashboards, customer portals, RESTful API backends, and internal operational tools.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What tech stack does GLAD Studio use for custom web applications?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our core web development stack includes React, TypeScript, Next.js, and TanStack for frontends, paired with Node.js, FastAPI, or Django on the backend and PostgreSQL for relational data storage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD handle multi-tenant SaaS architecture and security?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We implement strict tenant scoping using PostgreSQL Row-Level Security (RLS) or mandatory tenant_id query filters, ensuring complete data isolation between customer accounts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD Studio build custom role-based access control (RBAC)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we architect granular RBAC systems with customized permission matrices, JWT token validation, single sign-on (SSO), and immutable audit logs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does GLAD Studio integrate third-party APIs and payment processors?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we integrate third-party APIs including Stripe, Razorpay, HubSpot, Salesforce, AWS S3, Supabase, and transactional email providers using resilient webhook handlers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD Studio ensure high performance in web applications?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We enforce strict bundle size limits, server-side rendering, efficient database query indexing, Redis caching, and asset compression to achieve sub-second page response times.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: WebApplicationDevelopmentPage,
});

const webAppCapabilities = [
  {
    icon: Boxes,
    title: "Multi-Tenant SaaS Platforms",
    description:
      "Scalable software-as-a-service architectures supporting thousands of independent tenant workspaces with isolated data, subscription billing, and customizable roles.",
    features: [
      "Tenant-scoped PostgreSQL data isolation",
      "Automated recurring subscription billing",
      "Custom domain & workspace provisioning",
      "Comprehensive super admin and tenant portals",
    ],
  },
  {
    icon: Layout,
    title: "Custom Business Portals & Dashboards",
    description:
      "High-density operational dashboards and portals that visualize complex operational metrics, track real-time inventory, and streamline team workflows.",
    features: [
      "Real-time data visualization charts",
      "Complex multi-filter data tables & exports",
      "Granular user permissions & approval queues",
      "Responsive interfaces across desktop & tablet",
    ],
  },
  {
    icon: Server,
    title: "High-Throughput APIs & Microservices",
    description:
      "Type-safe REST and GraphQL backend services built on FastAPI and Node.js with automated OpenAPI documentation, rate limiting, and background workers.",
    features: [
      "FastAPI & async Python execution",
      "Type-safe tRPC / REST endpoints",
      "Redis caching & rate limiting",
      "Asynchronous background task queues",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure Enterprise Web Portals",
    description:
      "Mission-critical web portals engineered with zero-trust security principles, encrypted file transmissions, and immutable audit ledgers.",
    features: [
      "End-to-end client-side file encryption",
      "MFA & biometric SSO authentication",
      "Tamper-proof audit logging",
      "OWASP compliance & vulnerability hardening",
    ],
  },
];

const archPillars = [
  {
    icon: Database,
    title: "Relational Data Architecture",
    description:
      "PostgreSQL schemas designed with strict foreign key constraints, composite indexing, JSONB flexibility, and fixed-point NUMERIC precision for financial transactions.",
  },
  {
    icon: KeyRound,
    title: "Authentication & Granular RBAC",
    description:
      "Multi-layered permission matrices supporting owner, admin, manager, and custom viewer roles with secure HTTP-only JWT sessions and OAuth2 providers.",
  },
  {
    icon: Cpu,
    title: "Asynchronous Worker Pipelines",
    description:
      "Decoupled background job queues using Celery, BullMQ, or Redis to process resource-intensive tasks such as PDF generation, data imports, and email dispatch.",
  },
  {
    icon: Lock,
    title: "Defense-in-Depth Security",
    description:
      "Automated SQL injection prevention, cross-site scripting (XSS) sanitization, CORS policies, rate limiting, and encrypted environment secret management.",
  },
];

const faqItems = [
  {
    q: "What web application development services does GLAD Studio offer?",
    a: "GLAD Studio engineers custom web applications including multi-tenant SaaS platforms, enterprise business dashboards, customer portals, RESTful API backends, and internal operational tools. We build end-to-end solutions from architecture design to deployment and monitoring.",
  },
  {
    q: "What tech stack does GLAD Studio use for custom web applications?",
    a: "Our core web development stack includes React, TypeScript, Next.js, and TanStack for frontends, paired with Node.js, FastAPI, or Django on the backend and PostgreSQL for relational data storage. We select technologies based on scalability, maintainability, and client requirements.",
  },
  {
    q: "How does GLAD handle multi-tenant SaaS architecture and security?",
    a: "We implement strict tenant scoping using PostgreSQL Row-Level Security (RLS) or mandatory tenant_id query filters, ensuring complete data isolation between customer accounts. One tenant can never query or view another tenant's records under any circumstance.",
  },
  {
    q: "Can GLAD Studio build custom role-based access control (RBAC)?",
    a: "Yes, we architect granular RBAC systems with customized permission matrices, JWT token validation, single sign-on (SSO), and immutable audit logs. Each user role is restricted to authorized actions and data views across the platform.",
  },
  {
    q: "Does GLAD Studio integrate third-party APIs and payment processors?",
    a: "Yes, we integrate third-party APIs including Stripe, Razorpay, HubSpot, Salesforce, AWS S3, Supabase, and transactional email providers using resilient webhook handlers. Every integration features retry strategies and idempotency checks to prevent duplicate transactions.",
  },
  {
    q: "How does GLAD Studio ensure high performance in web applications?",
    a: "We enforce strict bundle size limits, server-side rendering, efficient database query indexing, Redis caching, and asset compression to achieve sub-second page response times. Our applications are tested under concurrent loads before launch.",
  },
];

function WebApplicationDevelopmentPage() {
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
                Web Application Development
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#00b4d8] mb-6">
              <Layout className="size-3.5" />
              <span>Web Application Development India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
              Custom Web Application{" "}
              <HandDrawnUnderline color="var(--brand-blue)">Development</HandDrawnUnderline>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              GLAD Studio builds custom web applications and SaaS platforms for businesses,
              startups, and product teams. We engineer type-safe, multi-tenant digital systems
              combining modern React frontends, robust Python and Node.js APIs, and relational
              PostgreSQL data architectures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="size-4" />
              </button>
              <Link
                to="/portfolio"
                className="px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
              >
                View Web Projects
              </Link>
            </div>

            {/* Architecture Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80">
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">React 19</div>
                <div className="text-xs text-muted-foreground">Type-Safe TypeScript</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">FastAPI / Node</div>
                <div className="text-xs text-muted-foreground">High-Throughput APIs</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Multi-Tenant</div>
                <div className="text-xs text-muted-foreground">Row-Level Security (RLS)</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Sub-Second</div>
                <div className="text-xs text-muted-foreground">Optimized Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Build */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00b4d8]">
              Application Categories
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Web Applications Engineered for Enterprise Demands
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We design and develop custom web applications that solve core operational bottlenecks,
              unify fragmented business data, and deliver frictionless user experiences at scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {webAppCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#00b4d8] mb-6">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">{cap.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-border/60">
                      <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">
                        Technical Highlights
                      </div>
                      <ul className="space-y-2.5">
                        {cap.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs font-medium text-foreground"
                          >
                            <CheckCircle2 className="size-4 text-[#00b4d8] shrink-0 mt-0.5" />
                            <span>{feat}</span>
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

      {/* Section 3: Technical Pillars */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00b4d8]">
              Backend & Architecture
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Core Technical Foundations We Build Into Every App
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Clean software engineering requires robust backend patterns, strict database schema
              contracts, and multi-layered security.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {archPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="surface-card p-6 rounded-2xl border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#00b4d8] mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-bold text-base font-display text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Relevant Portfolio Projects */}
      <section className="py-20 border-t border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00b4d8]">
              Proven Web Implementations
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Featured Web Engineering Case Studies
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#00b4d8]">
                  Inventory SaaS
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Stock Management Platform
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Enterprise-grade multi-tenant web application handling real-time stock allocation,
                  warehouse tracking, and automated restocking threshold triggers.
                </p>
              </div>
              <Link
                to="/portfolio/stock-management"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#00b4d8] transition-colors"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#00b4d8]">
                  Security Web App
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Q-SAFE Secure Portal
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Zero-knowledge encrypted web transmission portal with client-side file chunking,
                  ephemeral link expiration, and cryptographic access validation.
                </p>
              </div>
              <Link
                to="/portfolio/q-safe"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#00b4d8] transition-colors"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#00b4d8]">
                  Proprietary SaaS
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  SettleDesk Brokerage OS
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Multi-tenant real estate brokerage operating system connecting property
                  inventories, deal cascades, versioned commission plans, and payout ledgers.
                </p>
              </div>
              <Link
                to="/products/settledesk"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#00b4d8] transition-colors"
              >
                <span>Explore SettleDesk</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Cross-Service Navigation */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00b4d8]">
              Interconnected Services
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Complementary Software Solutions
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                Cross-platform Flutter & React Native applications.
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
                LLM applications, RAG pipelines, and intelligent agents.
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
                n8n orchestration, API integrations, and ETL pipelines.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Section (AEO) */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00b4d8]">
              Expert Q&A
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Web Application Development FAQs
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Concise answers to technical and operational questions regarding web application
              development in India.
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
                        isOpen ? "rotate-180 text-[#00b4d8]" : "text-muted-foreground"
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

      {/* Section 7: Final CTA */}
      <section className="py-20 border-t border-border bg-surface/20 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
            Let's Engineer Your Web Application
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From SaaS platforms to complex enterprise dashboards, partner with GLAD Studio for
            clean code, scalable architectures, and reliable delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
            >
              <span>Book Architecture Call</span>
              <ArrowRight className="size-4" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
            >
              Submit Requirements
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
