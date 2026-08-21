import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Row } from "@/components/site/Row";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { articles } from "@/data/insights.data";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights & Technical Guides — GLAD studio" },
      {
        name: "description",
        content:
          "Practical guides on software engineering, AI agents, LLM applications, custom web architectures, and business automation from GLAD studio.",
      },
      { property: "og:title", content: "Insights & Technical Guides — GLAD studio" },
      {
        property: "og:description",
        content:
          "Deep dives into AI agents, LLMs, full-stack architecture, and workflow automation.",
      },
      { property: "og:url", content: "https://gladstudio.net/insights" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Insights & Technical Guides — GLAD studio" },
      {
        name: "twitter:description",
        content:
          "Deep dives into AI agents, LLMs, full-stack architecture, and workflow automation.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://gladstudio.net/insights/#webpage",
              url: "https://gladstudio.net/insights",
              name: "Insights & Technical Guides — GLAD studio",
              description:
                "Practical guides on software engineering, AI agents, LLM applications, custom web architectures, and business automation from GLAD studio.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/insights/#breadcrumb",
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
                  name: "Insights",
                  item: "https://gladstudio.net/insights",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: InsightsIndexPage,
});

function InsightsIndexPage() {
  const sortedArticles = [...articles].sort((a, b) => a.order - b.order);
  const categoriesList = Array.from(new Set(sortedArticles.map((a) => a.category))).join(" · ");

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero ───────────────────────────────────────── */}
        <Section size="hero" tone="paper" divider={false}>
          <SectionRail label="ENGINEERING INSIGHTS" />

          <div className="max-w-3xl mb-12">
            <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)]">
              Engineering insights.
            </h1>
            <p className="text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed max-w-2xl">
              Practical guides, architectural teardowns, and strategic insights for technical
              founders and engineering leaders.
            </p>
          </div>

          {/* 2. Article List ───────────────────────────────── */}
          <div>
            <div className="font-mono text-[12px] text-[var(--color-ink-3)] mb-4 px-1 select-none">
              {categoriesList}
            </div>

            <div className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] p-2 sm:p-4">
              {sortedArticles.map((art, idx) => (
                <Row
                  key={art.slug}
                  index={idx + 1}
                  title={art.title}
                  description={art.excerpt}
                  meta={art.readTime.toUpperCase()}
                  href={`/insights/${art.slug}`}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* 3. Closing CTA ────────────────────────────────── */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
