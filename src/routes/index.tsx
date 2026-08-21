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
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { faqs, projects, testimonials } from "@/components/site/data";
import { useState, useEffect } from "react";
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

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  const verifiedTestimonials = testimonials.filter((t) => t.verified);
  const realProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* Hero ────────────────────────────────────────── */}
        <Section size="hero" tone="paper" divider={false}>
          <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-10 min-[901px]:gap-8 items-center">
            {/* Left 7 columns */}
            <div className="min-[901px]:col-span-7 flex flex-col items-start text-left">
              {/* Capacity Chip with pluralisation fix */}
              <Chip live>
                {slots} {slots === 1 ? "slot" : "slots"} available for Q3
              </Chip>

              {/* Widened h1 */}
              <h1 className="max-w-[15ch] text-[clamp(52px,7vw,88px)] leading-[1.02] tracking-tight font-display font-medium text-[var(--color-ink)] mt-5">
                We engineer digital products that{" "}
                <HandDrawnUnderline>scale.</HandDrawnUnderline>
              </h1>

              {/* 17px section intro paragraph */}
              <p className="max-w-[52ch] text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed">
                Senior developers building high-performance web platforms, mobile apps, and
                custom automation. Working staging builds from week three.
              </p>

              {/* Single Primary Button visible in hero viewport */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Button
                  variant="primary"
                  size="md"
                  arrow
                  data-cal-link="arjun-rajput-2mdsis"
                  data-cal-config={JSON.stringify({
                    layout: "month_view",
                    theme: "light",
                  })}
                >
                  Book a discovery call
                </Button>

                <Button variant="ghost" size="md" asChild>
                  <a href="#work">See our work</a>
                </Button>
              </div>
            </div>

            {/* Right 5 columns: vertically centred 5-row Ledger */}
            <div className="min-[901px]:col-span-5 flex items-center w-full">
              <Ledger
                className="w-full"
                rows={[
                  { key: "Senior Engineering", value: "0", accent: "junior handoffs" },
                  { key: "Working Staging Demo", value: "Week 03", accent: "live build" },
                  { key: "Codebase Ownership", value: "100", accent: "% client owned" },
                  { key: "Sprint Iteration", value: "Weekly", accent: "cadence" },
                  { key: "Intellectual Property", value: "Full", accent: "IP transfer" },
                ]}
              />
            </div>
          </div>
        </Section>

        {/* Services (tone="card") ──────────────────────── */}
        <Section size="default" tone="card" index="01">
          <SectionRail label="WHAT WE DO" />

          <div className="max-w-2xl mb-8">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)]">
              Services built to ship.
            </h2>
            <p className="text-[17px] text-[var(--color-ink-2)] mt-2 leading-relaxed">
              Senior developers only. Clean codebases, predictable delivery, and full IP
              ownership from day one.
            </p>
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

        {/* Why Us (tone="paper") ────────────────────────── */}
        <Section size="default" tone="paper" index="02">
          <SectionRail label="WHY TEAMS CHOOSE US" />

          <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)] mb-8">
            The agency you actually want to work with.
          </h2>

          {/* Bordered 4-cell group with high density */}
          <div className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] overflow-hidden grid grid-cols-1 min-[561px]:grid-cols-2 min-[901px]:grid-cols-4 divide-y min-[561px]:divide-y-0 min-[901px]:divide-x divide-[var(--color-rule)]">
            <div className="p-[28px] min-[561px]:max-[900px]:border-r min-[561px]:max-[900px]:border-b min-[561px]:max-[900px]:border-[var(--color-rule)] flex flex-col items-start">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                01
              </div>
              <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                Fast Development
              </h3>
              <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                Weeks, not quarters. Senior team, focused scope, and no agency overhead.
              </p>
            </div>

            <div className="p-[28px] min-[561px]:max-[900px]:border-b min-[561px]:max-[900px]:border-[var(--color-rule)] flex flex-col items-start">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                02
              </div>
              <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                Transparent Comms
              </h3>
              <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                Async updates, weekly demo builds, and a shared channel you actually use.
              </p>
            </div>

            <div className="p-[28px] min-[561px]:max-[900px]:border-r min-[561px]:max-[900px]:border-[var(--color-rule)] flex flex-col items-start">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                03
              </div>
              <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                Modern Stack
              </h3>
              <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                TypeScript, React 19, Postgres, and AI engineered into core systems.
              </p>
            </div>

            <div className="p-[28px] flex flex-col items-start">
              <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                04
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

          <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-deep-ink)] mb-8">
            Process with zero mystery.
          </h2>

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
          <div className="grid grid-cols-1 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 gap-4 items-start">
            {realProjects.map((p) => (
              <Shot
                key={p.slug}
                category={p.category}
                title={p.short}
                ratio="16/10"
              />
            ))}
          </div>
        </Section>

        {/* Testimonials (Conditional: only renders if verified items exist) */}
        {verifiedTestimonials.length > 0 && (
          <Section size="default" tone="paper">
            <SectionRail label="CLIENT PERSPECTIVES" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {verifiedTestimonials.map((t, idx) => (
                <Surface key={idx} hover={false} className="p-6 flex flex-col justify-between">
                  <p className="text-[17px] text-[var(--color-ink)] leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-[var(--color-rule)]">
                    <div className="text-[14px] font-medium text-[var(--color-ink)]">
                      {t.name}
                    </div>
                    <div className="text-[13px] text-[var(--color-ink-3)] mt-0.5">
                      {t.role} {t.company && `• ${t.company}`}
                    </div>
                  </div>
                </Surface>
              ))}
            </div>
          </Section>
        )}

        {/* FAQ (tone="card") ───────────────────────────── */}
        <Section size="default" tone="card" index="05">
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
