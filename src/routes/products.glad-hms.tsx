import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EmailModal } from "@/components/site/EmailModal";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { gladHmsData } from "@/data/products/glad-hms";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductThreeTier } from "@/components/products/ProductThreeTier";
import { ProductFeatureSplit } from "@/components/products/ProductFeatureSplit";
import { ProductPricingTable } from "@/components/products/ProductPricingTable";
import { ProductFAQAccordion } from "@/components/products/ProductFAQAccordion";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductWorkflowSequence } from "@/components/products/ProductWorkflowSequence";
import { Lock, FileCheck, Database, ShieldCheck, CalendarCheck, Receipt } from "lucide-react";
import hotelBgImg from "@/routes/images/glad-hms/hotel-building.png";

export const Route = createFileRoute("/products/glad-hms")({
  head: () => ({
    meta: [
      { title: "GLAD HMS — Modular Hotel Management System | Glad Studio" },
      {
        name: "description",
        content:
          "GLAD HMS is a modular, multi-tenant Hotel Management System engineered by Glad Studio. Unify room reservations, front desk operations, housekeeping task boards, stay folios, and USALI revenue analytics.",
      },
      { property: "og:title", content: "GLAD HMS — Modular Hotel Management System" },
      {
        property: "og:description",
        content:
          "Enterprise-grade modular hotel operations. Reservations, front desk, mobile housekeeping, and USALI revenue analytics on a unified SaaS platform.",
      },
      { property: "og:url", content: "https://gladstudio.net/products/glad-hms" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GLAD HMS — Modular Hotel Management System" },
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
          "@type": "SoftwareApplication",
          name: "GLAD HMS",
          operatingSystem: "Web, Cloud",
          applicationCategory: "BusinessApplication",
          description:
            "Modular multi-tenant hotel management system unifying room reservations, front desk workflows, mobile housekeeping, stay folios with Indian GST slabs, and USALI revenue analytics.",
          url: "https://gladstudio.net/products/glad-hms",
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
        <ProductHero config={gladHmsData.hero} onPrimaryCtaClick={() => setIsModalOpen(true)} />

        {/* 2. Three Tier Architecture */}
        <Reveal direction="up">
          <ProductThreeTier tiers={gladHmsData.threeTier} />
        </Reveal>

        {/* 3. Core Feature Rows */}
        <Reveal direction="up">
          <ProductFeatureSplit features={gladHmsData.features} />
        </Reveal>

        {/* Continuous Vector Background Wrapper */}
        <div className="relative isolate overflow-hidden">
          {/* Continuous Background Image */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-20 mix-blend-luminosity">
            <img
              src={hotelBgImg}
              alt=""
              className="w-full h-full object-cover object-center brightness-110 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>

          {/* 4. Security & Architecture Isolation */}
          <section className="py-24 relative border-t border-border bg-surface/10">
            <div className="mx-auto max-w-7xl px-6">
              <SectionHeading
                eyebrow="Architectural Integrity"
                title={
                  <>
                    Multi-Tenant Safety. <br />
                    <span className="gradient-text">Zero Concurrency Collisions.</span>
                  </>
                }
                sub="GLAD HMS is engineered with tenant-scoped query filters and database-level pessimistic row locks, ensuring your guest records and room availability remain 100% accurate."
                center
              />

              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {gladHmsData.securityPillars.map((pillar, idx) => {
                  const Icon = idx === 0 ? Lock : idx === 1 ? ShieldCheck : Database;
                  return (
                    <div
                      key={pillar.title}
                      className="animated-corner-card surface-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
                    >
                      <div className="go-corner">
                        <div className="go-arrow">→</div>
                      </div>
                      <div className="size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-4 relative z-10 icon-box transition-all duration-300">
                        <Icon className="size-5" />
                      </div>
                      <h4 className="font-bold text-lg font-display relative z-10 transition-colors duration-300">
                        {pillar.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-300">
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
              <ProductWorkflowSequence steps={gladHmsData.steps} />
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
                    className="animated-corner-card surface-card p-5 rounded-xl relative overflow-hidden group cursor-pointer"
                  >
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                    <h4 className="font-bold text-sm font-display text-foreground relative z-10 transition-colors duration-300">
                      {b.title}
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-300">
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
            onSelectPlan={() => setIsModalOpen(true)}
          />
        </Reveal>

        {/* 8. Frequently Asked Questions */}
        <Reveal direction="up">
          <ProductFAQAccordion faqs={gladHmsData.faqs} />
        </Reveal>

        {/* 9. Final Call to Action */}
        <ProductCTA onPrimaryCtaClick={() => setIsModalOpen(true)} />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Lead Capture Email / Registration Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
