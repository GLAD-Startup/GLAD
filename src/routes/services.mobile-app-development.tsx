import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { EmailModal } from "@/components/site/EmailModal";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import {
  Smartphone,
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
  Boxes,
  Bell,
  WifiOff,
  Fingerprint,
  RotateCw,
  Layout,
  Sparkles,
  Workflow,
  Rocket,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: "Mobile App Development in India | GLAD Studio" },
      {
        name: "description",
        content:
          "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches.",
      },
      { property: "og:title", content: "Mobile App Development in India | GLAD Studio" },
      {
        property: "og:description",
        content:
          "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches.",
      },
      { property: "og:url", content: "https://gladstudio.net/services/mobile-app-development" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mobile App Development in India | GLAD Studio" },
      {
        name: "twitter:description",
        content:
          "High-performance cross-platform Flutter and React Native mobile apps for iOS and Android engineered by GLAD Studio.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/services/mobile-app-development" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/mobile-app-development/#webpage",
              url: "https://gladstudio.net/services/mobile-app-development",
              name: "Mobile App Development in India | GLAD Studio",
              description:
                "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/mobile-app-development/#breadcrumb",
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
                  name: "Mobile App Development",
                  item: "https://gladstudio.net/services/mobile-app-development",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/mobile-app-development/#service",
              name: "Mobile App Development",
              serviceType: "Cross-Platform Mobile Application Development",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Custom mobile app development company in India specializing in Flutter, React Native, offline-first architectures, biometric authentication, and enterprise business applications.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/mobile-app-development/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What mobile app development services does GLAD Studio provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GLAD Studio develops custom cross-platform mobile applications for iOS and Android using Flutter and React Native, covering UI/UX design, API integration, offline caching, and app store deployment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why does GLAD Studio use Flutter for mobile development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Flutter enables a single codebase to deliver high-performance 60fps native experiences on both iOS and Android, dramatically reducing engineering costs and maintenance overhead while ensuring pixel-perfect design consistency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD Studio build mobile apps with offline capability?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we implement offline-first architectures utilizing local SQLite databases and optimistic UI updates that automatically synchronize with the cloud once network connectivity is restored.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD Studio secure mobile applications?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We implement on-device biometric authentication (Face ID / Fingerprint), secure hardware keychain storage for access tokens, SSL pinning, and encrypted local storage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does GLAD handle App Store and Google Play distribution?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we configure automated Fastlane CI/CD release pipelines, manage internal TestFlight and Google Play internal testing tracks, and handle submission guidelines for store approval.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can our mobile app connect to existing backend databases and APIs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our mobile apps integrate with REST, GraphQL, Firebase, and PostgreSQL backends via secure token-authenticated endpoints.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: MobileAppDevelopmentPage,
});

const mobileFeatures = [
  {
    icon: Smartphone,
    title: "Cross-Platform Single Codebase",
    description:
      "Build once, deploy seamlessly to both Apple iOS and Google Android with shared business logic and native device rendering.",
    bullets: [
      "Unified Flutter / Dart or React Native codebases",
      "Native Cupertino & Material 3 component fidelity",
      "Half the ongoing maintenance cost of dual native apps",
      "Synchronized feature rollouts across platforms",
    ],
  },
  {
    icon: WifiOff,
    title: "Offline-First Data Architecture",
    description:
      "Reliable mobile operations even with unstable cellular connectivity using local SQLite caching and background synchronization.",
    bullets: [
      "Optimistic UI updates for zero-lag user experiences",
      "Automatic background queue reconciliation",
      "Local conflict resolution algorithms",
      "Encrypted on-device SQLite / Hive storage",
    ],
  },
  {
    icon: Fingerprint,
    title: "Biometric Auth & Mobile Security",
    description:
      "Enterprise-grade authentication leveraging hardware security enclaves, biometric validation, and automated token refreshes.",
    bullets: [
      "Face ID, Touch ID, and Android BiometricPrompt",
      "Secure Keystore / Keychain secret management",
      "SSL certificate pinning against MITM vectors",
      "Session timeout and remote wipe capabilities",
    ],
  },
  {
    icon: Bell,
    title: "Push Notifications & Real-Time Sync",
    description:
      "Targeted push notifications, deep linking, and real-time state updates powered by Firebase Cloud Messaging and WebSockets.",
    bullets: [
      "Firebase Cloud Messaging (FCM) integration",
      "Custom contextual deep linking to specific screens",
      "Background silent push data updates",
      "Real-time event subscriptions",
    ],
  },
];

const mobileLifecycle = [
  {
    phase: "01",
    title: "Mobile UX & Gesture Architecture",
    description:
      "Design touch-optimized interfaces, thumb-friendly navigation patterns, and fluid micro-interactions tailored for mobile ergonomics.",
  },
  {
    phase: "02",
    title: "Cross-Platform Core Implementation",
    description:
      "Engineering reactive state management, typed API client integration, local databases, and hardware sensor bridges.",
  },
  {
    phase: "03",
    title: "Real Device Testing Matrix",
    description:
      "Comprehensive testing across diverse screen sizes, operating system versions, low-memory conditions, and fluctuating network speeds.",
  },
  {
    phase: "04",
    title: "Store Submission & CI/CD Pipelines",
    description:
      "Automating builds with Fastlane, managing TestFlight / Google Play beta distribution, and orchestrating production releases.",
  },
];

const faqItems = [
  {
    q: "What mobile app development services does GLAD Studio provide?",
    a: "GLAD Studio develops custom cross-platform mobile applications for iOS and Android using Flutter and React Native, covering UI/UX design, API integration, offline caching, and app store deployment. We engineer products ranging from consumer apps to enterprise field agent tools.",
  },
  {
    q: "Why does GLAD Studio use Flutter for mobile development?",
    a: "Flutter enables a single codebase to deliver high-performance 60fps native experiences on both iOS and Android, dramatically reducing engineering costs and maintenance overhead while ensuring pixel-perfect design consistency across devices.",
  },
  {
    q: "Can GLAD Studio build mobile apps with offline capability?",
    a: "Yes, we implement offline-first architectures utilizing local SQLite databases and optimistic UI updates that automatically synchronize with the cloud once network connectivity is restored. This is ideal for field operations, delivery tracking, and healthcare platforms.",
  },
  {
    q: "How does GLAD Studio secure mobile applications?",
    a: "We implement on-device biometric authentication (Face ID / Fingerprint), secure hardware keychain storage for access tokens, SSL pinning, and encrypted local storage to safeguard user credentials and proprietary business data.",
  },
  {
    q: "Does GLAD handle App Store and Google Play distribution?",
    a: "Yes, we configure automated Fastlane CI/CD release pipelines, manage internal TestFlight and Google Play internal testing tracks, and handle submission guidelines for store approval.",
  },
  {
    q: "Can our mobile app connect to existing backend databases and APIs?",
    a: "Yes, our mobile apps integrate with REST, GraphQL, Firebase, and PostgreSQL backends via secure token-authenticated endpoints, ensuring full real-time data synchronization with your web portals.",
  },
];

function MobileAppDevelopmentPage() {
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
                Mobile App Development
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#7209b7] mb-6">
              <Smartphone className="size-3.5" />
              <span>Mobile App Development India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
              Custom Mobile App{" "}
              <HandDrawnUnderline color="var(--brand-purple)">Development</HandDrawnUnderline>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              GLAD Studio builds custom mobile applications for startups and businesses using modern
              cross-platform and native-compatible development approaches. We deliver polished iOS
              and Android apps engineered with Flutter, offline-first data sync, and high-security
              authentication.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
              >
                <span>Discuss Your Mobile Project</span>
                <ArrowRight className="size-4" />
              </button>
              <Link
                to="/portfolio"
                className="px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
              >
                Explore Mobile Case Studies
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80">
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Flutter & Dart</div>
                <div className="text-xs text-muted-foreground">Single Unified Codebase</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Offline-First</div>
                <div className="text-xs text-muted-foreground">Local SQLite Sync</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">Biometrics</div>
                <div className="text-xs text-muted-foreground">Hardware Keychain Security</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold font-display text-foreground">iOS & Android</div>
                <div className="text-xs text-muted-foreground">Automated Fastlane CI/CD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mobile Capabilities */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#7209b7]">
              Engineering Capabilities
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Cross-Platform Mobile Apps Built for Reliability
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              From on-the-go field operations to customer-facing mobile platforms, we architect
              applications that feel fast, work seamlessly offline, and maintain strict data
              synchronization with backend systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {mobileFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="surface-card p-8 rounded-2xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[#7209b7] mb-6">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">{feat.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {feat.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-border/60">
                      <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">
                        Engineering Highlights
                      </div>
                      <ul className="space-y-2.5">
                        {feat.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-xs font-medium text-foreground"
                          >
                            <CheckCircle2 className="size-4 text-[#7209b7] shrink-0 mt-0.5" />
                            <span>{b}</span>
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

      {/* Section 3: Mobile Lifecycle */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#7209b7]">
              Delivery Process
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              How We Build & Launch Mobile Applications
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our mobile engineering process combines UX prototyping, native performance profiling,
              and automated deployment pipelines to ensure frictionless store releases.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mobileLifecycle.map((step) => (
              <div
                key={step.phase}
                className="surface-card p-6 rounded-2xl border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-3xl font-black text-[#7209b7] mb-3">
                    {step.phase}
                  </div>
                  <h3 className="font-bold text-base font-display text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Relevant Mobile Case Studies */}
      <section className="py-20 border-t border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#7209b7]">
              Real Mobile Implementations
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
              Featured Mobile Engineering Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#7209b7]">
                  Field Operations App
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  Prayas Medical Logistics
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Decentralized inventory tracking mobile app engineered for reliable medical
                  resource allocation in low-bandwidth operational environments.
                </p>
              </div>
              <Link
                to="/portfolio/prayas-app"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#7209b7] transition-colors"
              >
                <span>Read Prayas Case Study</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#7209b7]">
                  Real Estate Mobile
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  SettleDesk Broker App
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Mobile application for field agents to submit deal contracts, upload closing
                  signatures, and track real-time commission split payouts on iOS & Android.
                </p>
              </div>
              <Link
                to="/products/settledesk"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#7209b7] transition-colors"
              >
                <span>View SettleDesk Platform</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="surface-card p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-[#7209b7]">
                  Hospitality Ops
                </span>
                <h3 className="mt-4 text-xl font-bold font-display text-foreground">
                  GLAD HMS Mobile Housekeeping
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Mobile-optimized task board for housekeeping teams with live room condition state
                  transitions and priority sorting for same-day guest arrivals.
                </p>
              </div>
              <Link
                to="/products/glad-hms"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[#7209b7] transition-colors"
              >
                <span>View GLAD HMS</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Related Services */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#7209b7]">
              Related Services
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Connected Engineering Offerings
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
                Rapid v1 product validation and investor-ready prototypes.
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
                Custom SaaS platforms, admin dashboards, and cloud backends.
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
                LLM integrations, RAG pipelines, and conversational AI.
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
                n8n workflow orchestration and operational integrations.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Section (AEO) */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#7209b7]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-3xl font-bold font-display text-foreground">
              Mobile App Development Q&A
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Direct technical and operational answers regarding mobile app development in India.
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
                        isOpen ? "rotate-180 text-[#7209b7]" : "text-muted-foreground"
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
            Let's Build Your Mobile Application
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From consumer iOS and Android apps to internal operational tools, partner with GLAD
            Studio for reliable, high-performance cross-platform mobile development.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-sm shadow-[4px_4px_0px_0px_var(--border)]"
            >
              <span>Schedule Mobile Consultation</span>
              <ArrowRight className="size-4" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border-2 border-border font-semibold text-sm hover:bg-surface transition-all"
            >
              Request a Project Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
