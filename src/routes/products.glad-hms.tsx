import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionRail } from "@/components/site/SectionRail";
import { gladHmsData } from "@/data/products/glad-hms";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductThreeTier } from "@/components/products/ProductThreeTier";
import { ProductFeatureSplit } from "@/components/products/ProductFeatureSplit";
import { ProductPricingTable } from "@/components/products/ProductPricingTable";
import { ProductFAQAccordion } from "@/components/products/ProductFAQAccordion";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductWorkflowSequence } from "@/components/products/ProductWorkflowSequence";
import { Lock, Database, ShieldCheck, ArrowRight } from "lucide-react";
import hotelBgImg from "@/routes/images/glad-hms/hotel-building.png";

export const Route = createFileRoute("/products/glad-hms")({
  head: () => ({
    meta: [
      { title: "GLAD HMS — Modular Hotel Management System | GLAD Studio" },
      {
        name: "description",
        content:
          "GLAD HMS is a modular, multi-tenant Hotel Management System for reservations, front desk operations, housekeeping, stay folios, billing, and hotel revenue analytics.",
      },
      {
        property: "og:title",
        content: "GLAD HMS — Modular Hotel Management System | GLAD Studio",
      },
      {
        property: "og:description",
        content:
          "Enterprise-grade modular hotel operations. Reservations, front desk, mobile housekeeping, and USALI revenue analytics on a unified SaaS platform.",
      },
      { property: "og:url", content: "https://gladstudio.net/products/glad-hms" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "GLAD HMS — Modular Hotel Management System | GLAD Studio",
      },
      {
        name: "twitter:description",
        content:
          "Unify room reservations, front desk check-in/out, mobile housekeeping task boards, and tax-compliant folios on a single modular system.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/products/glad-hms" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "@id": "https://gladstudio.net/products/glad-hms/#software",
              name: "GLAD HMS",
              operatingSystem: "Web, Cloud, iOS, Android",
              applicationCategory: "HotelManagementApplication",
              description:
                "Modular multi-tenant hotel management system unifying room reservations, front desk workflows, mobile housekeeping, stay folios with Indian GST slabs, and USALI revenue analytics.",
              url: "https://gladstudio.net/products/glad-hms",
              publisher: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
                logo: "https://gladstudio.net/og-image.png",
              },
            },
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/products/glad-hms/#webpage",
              url: "https://gladstudio.net/products/glad-hms",
              name: "GLAD HMS — Modular Hotel Management System | GLAD Studio",
              description:
                "GLAD HMS is a modular, multi-tenant Hotel Management System for reservations, front desk operations, housekeeping, stay folios, billing, and hotel revenue analytics.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/products/glad-hms/#breadcrumb",
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
                  name: "Products",
                  item: "https://gladstudio.net/products",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "GLAD HMS",
                  item: "https://gladstudio.net/products/glad-hms",
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/products/glad-hms/#faq",
              mainEntity: gladHmsData.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: GladHmsLandingPage,
});

function GladHmsLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Agency Header Navbar */}
      <Header />

      <main className="relative">
        {/* 1. Thesis Hero */}
        <ProductHero
          config={gladHmsData.hero}
          product="glad-hms"
          onPrimaryCtaClick={() => setIsModalOpen(true)}
        />

        {/* 2. Three Tier Architecture */}
        <Reveal direction="up">
          <ProductThreeTier
            tiers={gladHmsData.threeTier}
            product="glad-hms"
            eyebrow="One Platform, Dedicated Roles"
            title="Every Department Gets the Right Operational Tools"
            sub="Tailored consoles engineered for front desk clerks, mobile housekeeping staff, and hotel owners."
          />
        </Reveal>

        {/* 3. Core Feature Rows */}
        <Reveal direction="up">
          <ProductFeatureSplit
            features={gladHmsData.features}
            product="glad-hms"
          />
        </Reveal>

        {/* Continuous Vector Background Wrapper */}
        <div className="relative isolate overflow-hidden">
          {/* Continuous Background Image with bottom fade */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-20 mix-blend-luminosity"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 45%, rgba(0,0,0,0.5) 70%, transparent 95%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 45%, rgba(0,0,0,0.5) 70%, transparent 95%)",
            }}
          >
            <img
              src={hotelBgImg}
              alt="GLAD HMS Hotel Management System"
              className="w-full h-full object-cover object-center brightness-110 contrast-110"
            />
          </div>

          {/* 4. Security & Architecture Isolation */}
          <section className="py-24 relative border-t border-border bg-surface/10">
            <div className="mx-auto max-w-7xl px-6">
              <SectionRail index="01" label="Architectural Integrity" />
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--color-ink)] text-center mb-4">
                Multi-Tenant Safety. <br />
                <span className="text-[var(--color-ink)]">Zero Concurrency Collisions.</span>
              </h2>
              <p className="text-[14px] text-[var(--color-ink-2)] max-w-2xl mx-auto text-center mb-8 leading-relaxed">
                GLAD HMS is engineered with tenant-scoped query filters and database-level pessimistic row locks, ensuring your guest records and room availability remain 100% accurate.
              </p>

              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {gladHmsData.securityPillars.map((pillar, idx) => {
                  const Icon = idx === 0 ? Lock : idx === 1 ? ShieldCheck : Database;
                  return (
                    <div
                      key={pillar.title}
                      className="animated-corner-card surface p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
                    >
                      <div className="go-corner">
                        <div className="go-arrow">→</div>
                      </div>
                      <div className="size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-4 relative z-10 icon-box transition-all duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]">
                        <Icon className="size-5" />
                      </div>
                      <h4 className="font-bold text-lg font-display relative z-10 transition-colors duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]">
                        {pillar.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 5. 4-Phase Operational Workflow Sequence */}
          {gladHmsData.steps && (
            <Reveal direction="up">
              <ProductWorkflowSequence
                steps={gladHmsData.steps}
                eyebrow="Operational Flow"
                title="From Reservation to Guest Check-Out & Revenue Reporting"
                sub="A 4-phase sequence designed to get your hotel onboarded, rooms configured, and guest operations running in real time."
              />
            </Reveal>
          )}

          {/* 6. Product Origin & Principles */}
          <section className="py-24 relative border-t border-border">
            <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                  {gladHmsData.aboutStory.eyebrow}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold font-display leading-tight">
                  {gladHmsData.aboutStory.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {gladHmsData.aboutStory.body1}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {gladHmsData.aboutStory.body2}
                </p>
              </div>

              <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
                {gladHmsData.aboutStory.beliefs.map((b) => (
                  <div
                    key={b.title}
                    className="animated-corner-card surface p-5 rounded-xl relative overflow-hidden group cursor-pointer"
                  >
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                    <h4 className="font-bold text-sm font-display text-foreground relative z-10 transition-colors duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]">
                      {b.title}
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* 7. Pricing Matrix */}
        <Reveal direction="up">
          <ProductPricingTable
            plans={gladHmsData.pricing}
            eyebrow="Pricing"
            title="Simple Plans. Built for Independent & Multi-Property Hotels."
            sub="Transparent pricing with zero hidden fees. 15-day free trial on all plans."
            onSelectPlan={() => setIsModalOpen(true)}
          />
        </Reveal>

        {/* 8. Frequently Asked Questions */}
        <Reveal direction="up">
          <ProductFAQAccordion
            faqs={gladHmsData.faqs}
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know About GLAD HMS"
          />
        </Reveal>

        {/* Related Product Discovery Box */}
        <section className="py-12 border-t border-border bg-surface/20">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                More from GLAD Studio Products
              </span>
              <h4 className="text-base font-bold text-foreground mt-0.5">
                Looking for Real Estate Brokerage Operating Software?
              </h4>
            </div>
            <Link
              to="/products/settledesk"
              className="text-xs md:text-sm font-bold text-[#e5b84c] hover:text-foreground transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Explore SettleDesk SaaS →</span>
            </Link>
          </div>
        </section>

        {/* 9. Final Call to Action */}
        <ProductCTA
          title="Ready to Modernize Your Hotel Operations?"
          sub="See how GLAD HMS unifies your room reservations, front desk, mobile housekeeping, and revenue analytics on one modular platform."
          primaryCtaText="Talk About Your Hotel"
        />
      </main>

      {/* Agency Footer */}
      <Footer />
    </div>
  );
}
