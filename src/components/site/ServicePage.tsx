import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Row } from "@/components/site/Row";
import { Ledger } from "@/components/site/Ledger";
import { Shot } from "@/components/ui/Shot";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Service } from "@/data/services.data";
import { projects } from "@/components/site/data";
import { useEffect } from "react";

export interface ServicePageProps {
  service: Service;
}

export function buildServiceHead(service: Service) {
  return {
    meta: [
      { title: service.seo.title },
      { name: "description", content: service.seo.description },
      { property: "og:title", content: service.seo.title },
      { property: "og:description", content: service.seo.description },
      { property: "og:url", content: service.seo.canonical },
      { property: "og:image", content: service.seo.ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: service.seo.title },
      { name: "twitter:description", content: service.seo.description },
      { name: "twitter:image", content: service.seo.ogImage },
    ],
    links: [{ rel: "canonical", href: service.seo.canonical }],
    scripts: service.seo.jsonLd.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}

export function ServicePage({ service }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero ───────────────────────────────────────── */}
        <Section size="hero" tone="paper" divider={false}>
          {/* Breadcrumb: Home / Services / {name} */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <div className="flex items-center gap-2 font-mono text-[12px] text-[var(--color-ink-3)] select-none">
              <Link to="/" className="hover:text-[var(--color-ink)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/services" className="hover:text-[var(--color-ink)] transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-[var(--color-ink)] font-medium">{service.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-10 min-[901px]:gap-8 items-center">
            {/* Left 7 columns */}
            <div className="min-[901px]:col-span-7 flex flex-col items-start text-left">
              {/* Category Badge Chip (not live) */}
              <Chip live={false}>{service.categoryBadge}</Chip>

              {/* 15ch h1 (no hand-drawn underline) */}
              <h1 className="max-w-[15ch] text-[clamp(52px,7vw,88px)] leading-[1.02] tracking-tight font-display font-medium text-[var(--color-ink)] mt-5">
                {service.h1}
              </h1>

              {/* 52ch Intro Paragraph */}
              <p className="max-w-[52ch] text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed">
                {service.intro}
              </p>

              {/* Action Buttons */}
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

                {service.caseStudySlug && (
                  <Button variant="ghost" size="md" asChild>
                    <Link to="/portfolio/$slug" params={{ slug: service.caseStudySlug }}>
                      View case study
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Right 5 columns: vertically centred Ledger */}
            <div className="min-[901px]:col-span-5 flex items-center w-full">
              <Ledger className="w-full" rows={service.ledger} />
            </div>
          </div>
        </Section>

        {/* 2. Capabilities (tone="card") ─────────────────── */}
        <Section size="default" tone="card" index="01">
          <SectionRail label="CAPABILITIES" />

          <div className="max-w-2xl mb-8">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)]">
              {service.capabilitiesHeading}
            </h2>
            {service.capabilitiesIntro && (
              <p className="text-[17px] text-[var(--color-ink-2)] mt-2 leading-relaxed">
                {service.capabilitiesIntro}
              </p>
            )}
          </div>

          {/* Bordered capabilities grid: 3-col desktop, 2-col 900px, 1-col 560px */}
          <div className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] overflow-hidden grid grid-cols-1 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3 divide-y min-[561px]:divide-y-0 divide-[var(--color-rule)]">
            {service.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-[28px] min-[561px]:border-r min-[561px]:border-b min-[561px]:border-[var(--color-rule)] flex flex-col items-start"
              >
                <div className="font-mono text-[20px] text-[var(--color-brass)] font-medium mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)] mb-2">
                  {cap.title}
                </h3>
                <p className="text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. Methodology (tone="deep" <- DARK ANCHOR BAND) */}
        <Section size="default" tone="deep" index="02">
          <SectionRail label="METHODOLOGY" />

          <div className="max-w-2xl mb-8">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-deep-ink)]">
              {service.methodologyHeading}
            </h2>
            {service.methodologyIntro && (
              <p className="text-[17px] text-[var(--color-ink-2)] mt-2 leading-relaxed">
                {service.methodologyIntro}
              </p>
            )}
          </div>

          <div className="border border-[var(--color-deep-rule)] rounded-[var(--radius-lg,14px)] bg-[#171B20] p-2 sm:p-4">
            {service.phases.map((phase, idx) => (
              <Row
                key={phase.title}
                index={idx + 1}
                title={phase.title}
                description={phase.body}
                meta={phase.meta}
              />
            ))}
          </div>
        </Section>

        {/* 4. Stack (tone="paper") ───────────────────────── */}
        <Section size="default" tone="paper" index="03">
          <SectionRail label="STACK" />

          <div className="space-y-6 pt-2">
            {service.stack.map((group) => (
              <div
                key={group.group}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 pb-5 border-b border-[var(--color-rule)] last:border-b-0"
              >
                <span className="w-48 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-3)] shrink-0 font-medium select-none">
                  {group.group}
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {group.items.map((tech) => (
                    <Chip key={tech} live={false}>
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Related Case Study (Optional) ──────────────── */}
        {service.caseStudySlug && (
          <Section size="default" tone="paper" index="04">
            <SectionRail label="RELATED WORK" />

            <div className="max-w-[520px]">
              <Link 
                to="/portfolio/$slug" 
                params={{ slug: service.caseStudySlug }} 
                className="block no-underline group"
              >
                <Shot
                  src={
                    projects.find((p) => p.slug === service.caseStudySlug)?.cover ||
                    projects.find((p) => p.slug === service.caseStudySlug)?.shots[0]?.src
                  }
                  category={service.name}
                  title={`Case Study: ${service.caseStudySlug
                    .split("-")
                    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                    .join(" ")}`}
                  ratio="16/10"
                />
              </Link>
            </div>
          </Section>
        )}

        {/* 6. FAQ (tone="card") ──────────────────────────── */}
        <Section size="default" tone="card" index="05">
          <SectionRail label="COMMON QUESTIONS" />

          <div className="w-full text-left">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)] mb-8">
              {service.faqHeading}
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-[var(--color-rule)] border-t border-[var(--color-rule)]"
            >
              {service.faqs.map((faq, index) => (
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

        {/* 7. Closing CTA (tone="paper") ─────────────────── */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA defaultService={service.name} />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
