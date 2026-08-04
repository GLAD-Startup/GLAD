import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EmailModal } from "@/components/site/EmailModal";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { settledeskData } from "@/data/products/settledesk";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductThreeTier } from "@/components/products/ProductThreeTier";
import { ProductFeatureSplit } from "@/components/products/ProductFeatureSplit";
import { ProductPricingTable } from "@/components/products/ProductPricingTable";
import { ProductFAQAccordion } from "@/components/products/ProductFAQAccordion";
import { ProductCTA } from "@/components/products/ProductCTA";
import { DealCascadeSimulator } from "@/components/products/DealCascadeSimulator";
import { ProductWorkflowSequence } from "@/components/products/ProductWorkflowSequence";
import { Lock, FileCheck, Database } from "lucide-react";

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

        {/* 3. Signature Element: Live Deal Cascade & Commission Split Simulator */}
        <section className="py-16 relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal direction="up">
              <DealCascadeSimulator />
            </Reveal>
          </div>
        </section>

        {/* 4. Core Feature Rows */}
        <Reveal direction="up">
          <ProductFeatureSplit features={settledeskData.features} />
        </Reveal>

        {/* 5. Database Row-Level Security (RLS) Isolation */}
        <section className="py-24 relative border-t border-border bg-surface/30">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Data Isolation"
              title="Database-Level Row-Level Security (RLS)"
              sub="Built on PostgreSQL RLS policies. Every brokerage's properties, deals, and financial records stay 100% isolated."
              center
            />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {settledeskData.securityPillars.map((pillar, idx) => {
                const Icon = idx === 0 ? Lock : idx === 1 ? FileCheck : Database;
                return (
                  <div key={pillar.title} className="surface-card p-6 rounded-2xl">
                    <div className="size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#e5b84c] mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h4 className="font-bold text-lg font-display">{pillar.title}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
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
                <div key={b.title} className="surface-card p-5 rounded-xl">
                  <h4 className="font-bold text-sm font-display text-foreground">{b.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* 10. Final Call to Action */}
        <ProductCTA onPrimaryCtaClick={() => setIsModalOpen(true)} />
      </main>

      {/* Real Agency Footer */}
      <Footer />

      {/* Lead Capture Email / Registration Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
