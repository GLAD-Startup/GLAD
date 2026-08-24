import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Row } from "@/components/site/Row";
import { Ledger } from "@/components/site/Ledger";
import { Shot } from "@/components/ui/Shot";
import { Surface } from "@/components/ui/Surface";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { Field, SelectField, TextareaField } from "@/components/ui/Field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import { HeroGrid } from "@/components/site/HeroGrid";
import { HeroOrbit, HeroMobileCards } from "@/components/site/HeroStack3D";
import { ScrollIndicator } from "@/components/site/ScrollIndicator";
import { ScrollKineticText, EditorialScrollManifesto } from "@/components/site/ScrollKineticText";
import { BlueprintVerticalTrace } from "@/components/site/BlueprintVerticalTrace";
import { SlotNumberRoller } from "@/components/site/SlotNumberRoller";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { faqs, projects, testimonials } from "@/components/site/data";
import { getCalApi } from "@calcom/embed-react";
import { createServerFn } from "@tanstack/react-start";

/* ── Server function: Cal.com available slots ────────────── */

export const getAvailableSlots = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const apiKey = process.env.CALCOM_API_KEY;
    if (!apiKey) return 2; // fallback

    const response = await fetch(`https://api.cal.com/v2/bookings`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": "2024-08-13",
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch bookings from Cal.com", await response.text());
      return 2;
    }

    const data = await response.json();

    if (data.status === "success" && Array.isArray(data.data)) {
      const countedSlugs = ["project-consultation", "technical-discussion"];
      const validBookings = data.data.filter((booking: any) => {
        return (
          booking.status === "accepted" &&
          booking.eventType &&
          countedSlugs.includes(booking.eventType.slug)
        );
      });

      const CAPACITY_LIMIT = 5;
      const slotsLeft = Math.max(0, CAPACITY_LIMIT - validBookings.length);
      return slotsLeft;
    }

    return 2;
  } catch (err) {
    console.error("Error fetching bookings", err);
    return 2;
  }
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLAD Studio — Engineering-First Web, Mobile & AI Product Studio" },
      {
        name: "description",
        content:
          "We help startups and growing businesses ship scalable web platforms, high-performance mobile apps, and custom automation systems.",
      },
      { property: "og:title", content: "GLAD Studio — Engineering-First Product Studio" },
      {
        property: "og:description",
        content:
          "We help startups and growing businesses ship scalable web platforms, high-performance mobile apps, and custom automation systems.",
      },
      { property: "og:url", content: "https://gladstudio.net/" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/" }],
  }),
  loader: async () => {
    const slots = await getAvailableSlots();
    return { slots };
  },
  component: Home,
});

function Home() {
  const { slots } = Route.useLoaderData();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const kineticWords = ["scale.", "convert.", "endure.", "ship fast."];

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % kineticWords.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  const realProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />
      <BlueprintVerticalTrace />

      <main>
        {/* Hero ────────────────────────────────────────── */}
        <Section
          size="hero"
          tone="paper"
          divider={false}
          id="hero"
          background={<><HeroGrid /><HeroOrbit /></>}
          className="relative overflow-hidden isolate flex flex-col justify-between min-h-[calc(100svh-64px)] pt-24 sm:pt-28 min-[901px]:pt-36 pb-8 min-[901px]:pb-10"
          containerClassName="relative z-10 flex flex-col justify-between flex-1 w-full"
        >
          <div className="grid grid-cols-1 min-[901px]:grid-cols-12 min-[901px]:gap-x-8 gap-y-10 min-[901px]:gap-y-0 items-start w-full">
            {/* Left 6 columns (Columns 1-6) */}
            <div className="min-[901px]:col-span-6 flex flex-col items-start text-left relative z-30 min-[901px]:-translate-x-6 lg:-translate-x-10 xl:-translate-x-14">
              {/* Capacity Chip with entrance choreography */}
              <Chip live className="hero-animate-chip">
                {slots} {slots === 1 ? "slot" : "slots"} available for Q3
              </Chip>

              {/* h1: Dynamic Kinetic Heading */}
              <h1 className="max-w-[13ch] text-[clamp(44px,5.2vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)] mt-5">
                We engineer digital products that{" "}
                <span className="inline-block relative min-w-[5ch]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: 16, opacity: 0, filter: "blur(3px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: -16, opacity: 0, filter: "blur(3px)" }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="inline-block text-[var(--color-ink)] underline decoration-[var(--color-brass)] decoration-2 underline-offset-4"
                    >
                      {kineticWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              {/* 17px section intro paragraph with entrance delay */}
              <p className="hero-animate-p max-w-[46ch] text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed">
                Senior developers building high-performance web platforms, mobile apps, and
                custom automation. Working staging builds from week three.
              </p>

              {/* Buttons with entrance delay and micro-interactions */}
              <div className="hero-animate-buttons flex flex-wrap items-center gap-4 mt-8">
                <Button
                  variant="primary"
                  size="md"
                  arrow
                  className="hero-btn-primary"
                  data-cal-link="arjun-rajput-2mdsis"
                  data-cal-config={JSON.stringify({
                    layout: "month_view",
                    theme: "light",
                  })}
                >
                  Book a discovery call
                </Button>

                <Button variant="ghost" size="md" className="hero-btn-ghost" asChild>
                  <a href="#work">See our work</a>
                </Button>
              </div>

              {/* Studio Telemetry Readout */}
              <div className="hero-animate-p flex flex-wrap items-center gap-3 text-[11px] font-mono text-[var(--color-ink-3)] select-none mt-8 pt-4 border-t border-[var(--color-rule)]/60 max-w-[460px]">
                <span className="flex items-center gap-1.5 text-[var(--color-ink)]">
                  <span className="size-1.5 rounded-full bg-[var(--color-live)] animate-pulse" />
                  <span className="font-semibold text-[var(--color-live)]">ENGINE ACTIVE</span>
                </span>
                <span>•</span>
                <span>LATENCY &lt; 14MS</span>
                <span>•</span>
                <span>100% IP TRANSFER</span>
              </div>

            </div>
          </div>

          {/* Mobile: static card stack (hidden on desktop where orbit is in background) */}
          <HeroMobileCards />

          {/* Scrolling mouse animated UI element positioned slightly higher */}
          <div className="mt-auto pt-4 sm:pt-6 min-[901px]:pt-8 pb-1 sm:pb-2 -translate-y-3 sm:-translate-y-5 flex justify-center w-full">
            <ScrollIndicator targetId="services" label="SCROLL" />
          </div>
        </Section>

        {/* Services (tone="card") ──────────────────────── */}
        <Section size="default" tone="card" index="01" id="services">
          <SectionRail label="WHAT WE DO" />

          <div className="max-w-2xl mb-8">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)]">
              Services built to ship.
            </h2>
            <ScrollKineticText
              text="Senior developers only. Clean codebases, predictable delivery, and full IP ownership from day one."
              highlightWords={["senior", "developers", "predictable", "ownership"]}
              tone="card"
              className="text-[17px] text-[var(--color-ink-2)] mt-2 leading-relaxed"
            />
          </div>

          <div className="surface p-2 sm:p-4">
            <Row
              index="01"
              title="MVP Development"
              description="Ship a credible v1 in weeks, not quarters. Fixed scope, senior developers, and working staging builds from week three."
              meta="4 – 8 WEEKS"
              href="/services/mvp-development"
            />
            <Row
              index="02"
              title="Web Applications"
              description="Custom dashboards, SaaS, CRM and internal platforms with clean architecture, robust security, and type-safe frontends."
              meta="6 – 16 WEEKS"
              href="/services/web-application-development"
            />
            <Row
              index="03"
              title="Mobile Apps"
              description="Cross-platform iOS and Android applications with native feel, offline-first sync, and store submissions handled end-to-end."
              meta="8 – 14 WEEKS"
              href="/services/mobile-app-development"
            />
            <Row
              index="04"
              title="AI Solutions"
              description="Custom LLM integrations, document intelligence, RAG pipelines, and automated agent workflows embedded into your product."
              meta="4 – 12 WEEKS"
              href="/services/ai-solutions"
            />
            <Row
              index="05"
              title="Business Automation"
              description="Eliminate manual workflows, sync disparate systems, and build automated operational pipelines that save hundreds of hours."
              meta="3 – 8 WEEKS"
              href="/services/business-automation"
            />
          </div>
        </Section>

        {/* Editorial Kinetic Scroll Manifesto ───────────────── */}
        <section className="border-t border-b border-[var(--color-rule)] bg-[var(--color-card)] overflow-hidden">
          <EditorialScrollManifesto
            tagline="THE ENGINEERING STANDARD"
            statement="We build software systems that scale — senior developers, clean architecture, fixed milestone delivery, and working staging builds from week three."
            highlightWords={["systems", "scale", "senior", "clean", "architecture", "three"]}
            tone="card"
          />
        </section>

        {/* Why Us (tone="paper") ────────────────────────── */}
        <Section size="default" tone="paper" index="02">
          <SectionRail label="WHY TEAMS CHOOSE US" />

          <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)] mb-8">
            The agency you actually want to work with.
          </h2>

          {/* Bordered 4-cell group with high density */}
          <div className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] overflow-hidden grid grid-cols-1 min-[561px]:grid-cols-2 min-[901px]:grid-cols-4 divide-y min-[561px]:divide-y-0 min-[901px]:divide-x divide-[var(--color-rule)]">
            <div className="p-[28px] min-[561px]:max-[900px]:border-r min-[561px]:max-[900px]:border-b min-[561px]:max-[900px]:border-[var(--color-rule)] flex flex-col items-start group">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                <SlotNumberRoller value="01" delay={0.05} />
              </div>
              <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                Fast Development
              </h3>
              <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                Weeks, not quarters. Senior team, focused scope, and no agency overhead.
              </p>
            </div>

            <div className="p-[28px] min-[561px]:max-[900px]:border-b min-[561px]:max-[900px]:border-[var(--color-rule)] flex flex-col items-start group">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                <SlotNumberRoller value="02" delay={0.15} />
              </div>
              <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                Transparent Comms
              </h3>
              <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                Async updates, weekly demo builds, and a shared channel you actually use.
              </p>
            </div>

            <div className="p-[28px] min-[561px]:max-[900px]:border-r min-[561px]:max-[900px]:border-[var(--color-rule)] flex flex-col items-start group">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                <SlotNumberRoller value="03" delay={0.25} />
              </div>
              <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                Modern Stack
              </h3>
              <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                TypeScript, React 19, Postgres, and AI engineered into core systems.
              </p>
            </div>

            <div className="p-[28px] flex flex-col items-start group">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                <SlotNumberRoller value="04" delay={0.35} />
              </div>
              <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                Full IP Ownership
              </h3>
              <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                100% codebase and IP transfer from day one with zero lock-in.
              </p>
            </div>
          </div>
        </Section>

        {/* Process (tone="deep" <- DARK BAND) ──────────── */}
        <Section size="default" tone="deep" index="03">
          <SectionRail label="HOW WE WORK" />

          <div className="max-w-3xl mb-8">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-deep-ink)]">
              Process with zero mystery.
            </h2>
            <ScrollKineticText
              text="From initial architecture discovery to production DNS handover, every milestone is scoped, tracked, and delivered with weekly demo builds."
              highlightWords={["architecture", "discovery", "production", "weekly", "demo"]}
              tone="deep"
              className="text-[16px] sm:text-[17px] text-[var(--color-deep-ink-2,#A0AEC0)] mt-2 leading-relaxed"
            />
          </div>

          <div className="border border-[var(--color-deep-rule)] rounded-[var(--radius-lg,14px)] bg-[#171B20] p-2 sm:p-4">
            <Row
              index="01"
              title="Discovery"
              description="Technical audit, architecture roadmap, fixed-scope alignment, and sprint backlog."
              meta="WEEK 01"
            />
            <Row
              index="02"
              title="Requirements"
              description="Schema definition, API contracts, UI wireframes, and milestone sign-off."
              meta="WEEK 01"
            />
            <Row
              index="03"
              title="Planning"
              description="Repository setup, CI/CD pipeline, staging environment, and initial core scaffolds."
              meta="WEEK 02"
            />
            <Row
              index="04"
              title="Design"
              description="Interactive prototypes, typography system, responsive components, and user flows."
              meta="WEEK 02 – 03"
            />
            <Row
              index="05"
              title="Development"
              description="Weekly sprint iterations, continuous staging deployments, and automated testing."
              meta="WEEK 03 – ONWARD"
            />
            <Row
              index="06"
              title="Launch"
              description="Production deployment, DNS/SSL handover, full IP transfer, and ongoing maintenance."
              meta="FINAL WEEK"
            />
          </div>

          <div className="mt-8">
            <Link
              to="/process"
              className="inline-flex items-center gap-1.5 text-[14px] text-[var(--color-deep-ink)] font-medium hover:underline group"
            >
              <span>Explore our full engineering process</span>
              <span className="inline-block transition-transform duration-[var(--duration-1)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] group-hover:translate-x-[3px]">
                →
              </span>
            </Link>
          </div>
        </Section>

        {/* Selected Work (tone="paper") ─────────────────── */}
        <Section size="default" tone="paper" index="04" id="work">
          <SectionRail label="SELECTED WORK" />

          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)]">
              Selected projects.
            </h2>
            <Link
              to="/portfolio"
              className="text-[14px] text-[var(--color-ink)] font-medium hover:underline"
            >
              View all →
            </Link>
          </div>

          {/* Render ONLY the first 3 real projects from data.ts */}
          <div className="grid grid-cols-1 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 gap-6 items-start">
            {realProjects.map((p, idx) => (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="block no-underline group"
              >
                <Shot
                  index={idx}
                  src={p.cover || p.shots[0]?.src}
                  category={p.category}
                  title={p.name}
                  ratio="16/10"
                />
              </Link>
            ))}
          </div>
        </Section>

        {/* Testimonials ─────────────────────────────── */}
        {testimonials.length > 0 && (
          <Section size="default" tone="paper" index="05">
            <SectionRail label="CLIENT PERSPECTIVES" />

            <div className="max-w-2xl mb-8">
              <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)]">
                Trusted by builders & founders.
              </h2>
              <p className="text-[17px] text-[var(--color-ink-2)] mt-2 leading-relaxed">
                What clients and partners say about shipping with GLAD Studio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <Surface key={idx} hover={false} className="p-6 flex flex-col justify-between">
                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4 text-[#8A6D0B]">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <svg
                          key={i}
                          className="size-4 fill-current"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[16px] text-[var(--color-ink)] leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--color-rule)] flex items-center gap-3">
                    {t.logo && (
                      <img
                        src={t.logo}
                        alt={t.company || t.name}
                        className="size-10 rounded-full object-cover border border-[var(--color-rule)] shrink-0"
                      />
                    )}
                    <div>
                      <div className="text-[14px] font-medium text-[var(--color-ink)]">
                        {t.name}
                      </div>
                      <div className="text-[13px] text-[var(--color-ink-3)] mt-0.5">
                        {t.role} {t.company && `• ${t.company}`}
                      </div>
                    </div>
                  </div>
                </Surface>
              ))}
            </div>
          </Section>
        )}

        {/* FAQ (tone="card") ───────────────────────────── */}
        <Section size="default" tone="card" index="06">
          <SectionRail label="COMMON QUESTIONS" />

          <div className="w-full text-left">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)] mb-8">
              Frequently asked questions.
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-[var(--color-rule)] border-t border-[var(--color-rule)]"
            >
              {faqs.slice(0, 8).map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`faq-${index}`}
                  className="border-b border-[var(--color-rule)]"
                >
                  <AccordionTrigger className="min-h-[56px] text-[16px] text-[var(--color-ink)] font-medium text-left hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-[var(--color-ink-2)] leading-relaxed pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Closing CTA (tone="paper") ───────────────────── */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
