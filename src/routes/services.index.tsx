import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Row } from "@/components/site/Row";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { services } from "@/data/services.data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Software Engineering & AI Product Services — GLAD Studio" },
      {
        name: "description",
        content:
          "Explore custom software engineering services by GLAD Studio: MVP development, custom web applications, cross-platform mobile apps, AI solutions, and business automation.",
      },
      { property: "og:title", content: "Software Engineering & AI Product Services — GLAD Studio" },
      {
        property: "og:description",
        content:
          "MVP development, web and mobile applications, AI solutions and business automation — built by a senior engineering team.",
      },
      { property: "og:url", content: "https://gladstudio.net/services" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Software Engineering & AI Product Services — GLAD Studio" },
      {
        name: "twitter:description",
        content:
          "Custom MVP development, full-stack web apps, Flutter mobile apps, AI systems, and workflow automation.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/#webpage",
              url: "https://gladstudio.net/services",
              name: "Software Engineering & AI Product Services — GLAD Studio",
              description:
                "MVP development, web and mobile applications, AI solutions and business automation — built by a senior engineering team.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/#breadcrumb",
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
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  const sortedServices = [...services].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* Hero Section */}
        <Section size="hero" tone="paper" divider={false}>
          <SectionRail label="ENGINEERING SERVICES" />

          <div className="max-w-3xl mb-12">
            <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)]">
              Engineering services built to ship.
            </h1>
            <p className="text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed max-w-2xl">
              We design, architect, and build custom digital software products — from high-velocity
              MVPs and scalable web applications to cross-platform mobile apps and autonomous AI
              workflows.
            </p>
          </div>

          <div className="surface p-2 sm:p-4">
            {sortedServices.map((s, idx) => (
              <Row
                key={s.slug}
                index={idx + 1}
                title={s.name}
                description={s.intro}
                meta={s.timeline}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </Section>

        {/* Closing CTA */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
