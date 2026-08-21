import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionRail } from "@/components/site/SectionRail";
import { settledeskData } from "@/data/products/settledesk";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductThreeTier } from "@/components/products/ProductThreeTier";
import { ProductFeatureSplit } from "@/components/products/ProductFeatureSplit";
import { ProductPricingTable } from "@/components/products/ProductPricingTable";
import { ProductFAQAccordion } from "@/components/products/ProductFAQAccordion";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductGalleryCarousel } from "@/components/products/ProductGalleryCarousel";
import { ProductWorkflowSequence } from "@/components/products/ProductWorkflowSequence";
import { Lock, FileCheck, Database } from "lucide-react";
import buildingVectorBg from "@/routes/images/settledesk/graphic-design-building-architecture-creative-city-building-vector copy.png";

export const Route = createFileRoute("/products/settledesk")({
  head: () => ({
    meta: [
      { title: "SettleDesk — Real Estate Brokerage Operating System | Glad Studio" },
      {
        name: "description",
        content:
          "SettleDesk unifies property catalogs, agent mobile workflows, deal approvals, and real-time commission split payouts on a secure multi-tenant SaaS platform.",
      },
      { property: "og:title", content: "SettleDesk — Real Estate Brokerage Operating System" },
      {
        property: "og:description",
        content:
          "The operational backbone for modern real estate brokerages. Properties, agents, deals, and commission splits — unified in real time.",
      },
      { property: "og:url", content: "https://gladstudio.net/products/settledesk" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SettleDesk — Real Estate Brokerage Operating System" },
      {
        name: "twitter:description",
        content:
          "Unify property management, mobile agent workflows, and real-time commission split payouts on one secure system.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/products/settledesk" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "SettleDesk",
          operatingSystem: "Web, iOS, Android",
          applicationCategory: "BusinessApplication",
          description:
            "Multi-tenant real estate brokerage operating system unifying property catalogs, agent workflows, deal approvals, and commission split payouts.",
          url: "https://gladstudio.net/products/settledesk",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: "199",
            highPrice: "499",
            offerCount: "3",
          },
          publisher: {
            "@type": "Organization",
            name: "Glad Studio",
            url: "https://gladstudio.net",
            logo: "https://gladstudio.net/og-image.png",
          },
        }),
      },
    ],
  }),
  component: SettleDeskLandingPage,
});

function SettleDeskLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Real Agency Header Navbar */}
      <Header />

      <main className="relative">
        {/* 1. Thesis Hero */}
        <ProductHero config={settledeskData.hero} onPrimaryCtaClick={() => setIsModalOpen(true)} />

        {/* 2. Three Tier Architecture */}
        <Reveal direction="up">
          <ProductThreeTier tiers={settledeskData.threeTier} />
        </Reveal>

        {/* 3. Interactive Rotating Product Gallery Carousel */}
        <Reveal direction="up">
          <ProductGalleryCarousel />
        </Reveal>

        {/* 4. Core Feature Rows */}
        <Reveal direction="up">
          <ProductFeatureSplit features={settledeskData.features} />
        </Reveal>

        {/* Continuous Vector Background Wrapper spanning Security, Workflow & Story */}
        <div className="relative isolate overflow-hidden">
          {/* Continuous Background Watermark Image */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30 mix-blend-luminosity">
            <img
              src={buildingVectorBg}
              alt=""
              className="w-full h-full object-cover object-center brightness-125 contrast-110"
            />
            <div className="absolute inset-0 bg-transparent from-background via-transparent to-background" />
          </div>

          {/* 5. Database Row-Level Security (RLS) Isolation */}
          <section className="py-24 relative border-t border-border bg-surface/10">
            <div className="mx-auto max-w-7xl px-6">
              <SectionRail index="01" label="Enterprise-Grade Security" />
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--color-ink)] mb-4">
                Bank-Grade Security. <br />
                <span className="text-[var(--color-ink)]">Zero Data Leaks Between Tenants.</span>
              </h2>
              <p className="text-[14px] text-[var(--color-ink-2)] max-w-2xl mb-8 leading-relaxed">
                SettleDesk is built on strict database-level isolation, so every brokerage's data stays completely private — even on a shared platform.
              </p>

              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {settledeskData.securityPillars.map((pillar, idx) => {
                  const Icon = idx === 0 ? Lock : idx === 1 ? FileCheck : Database;
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

          {/* 6. True 4-Phase Operational Workflow Sequence */}
          {settledeskData.steps && (
            <Reveal direction="up">
              <ProductWorkflowSequence steps={settledeskData.steps} />
            </Reveal>
          )}

          {/* 7. Product Origin & Principles */}
          <section className="py-24 relative border-t border-border">
            <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                  {settledeskData.aboutStory.eyebrow}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold font-display leading-tight">
                  {settledeskData.aboutStory.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {settledeskData.aboutStory.body1}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {settledeskData.aboutStory.body2}
                </p>
              </div>

              <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
                {settledeskData.aboutStory.beliefs.map((b) => (
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

        {/* 8. Pricing Matrix */}
        <Reveal direction="up">
          <ProductPricingTable
            plans={settledeskData.pricing}
            onSelectPlan={() => setIsModalOpen(true)}
          />
        </Reveal>

        {/* 9. Frequently Asked Questions */}
        <Reveal direction="up">
          <ProductFAQAccordion faqs={settledeskData.faqs} />
        </Reveal>

        {/* Related Product Discovery Box */}
        <section className="py-12 border-t border-border bg-surface/20">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                More from GLAD Studio Products
              </span>
              <h4 className="text-base font-bold text-foreground mt-0.5">
                Looking for Modern Hotel Management & Operations Software?
              </h4>
            </div>
            <Link
              to="/products/glad-hms"
              className="text-xs md:text-sm font-bold text-[#e5b84c] hover:text-foreground transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Explore GLAD HMS →</span>
            </Link>
          </div>
        </section>

        {/* 10. Final Call to Action */}
        <ProductCTA />
      </main>

      {/* Real Agency Footer */}
      <Footer />
    </div>
  );
}
