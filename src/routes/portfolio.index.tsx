import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Shot } from "@/components/ui/Shot";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Our Portfolio — GLAD studio" },
      {
        name: "description",
        content:
          "Selected projects across SaaS, mobile, AI and business automation — built by GLAD studio for startups and growing businesses.",
      },
      { property: "og:title", content: "Our Portfolio — GLAD studio" },
      {
        property: "og:description",
        content: "Selected projects across SaaS, mobile, AI and business automation.",
      },
      { property: "og:url", content: "https://gladstudio.net/portfolio" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Portfolio — GLAD studio" },
      {
        name: "twitter:description",
        content:
          "Selected projects across SaaS, mobile, AI and business automation — built by GLAD studio for startups and growing businesses.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://gladstudio.net/portfolio/#webpage",
              url: "https://gladstudio.net/portfolio",
              name: "Our Portfolio — GLAD studio",
              description:
                "Selected projects across SaaS, mobile, AI and business automation — built by GLAD studio for startups and growing businesses.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/portfolio/#breadcrumb",
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
                  name: "Portfolio",
                  item: "https://gladstudio.net/portfolio",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero ───────────────────────────────────────── */}
        <Section size="hero" tone="paper" divider={false}>
          <SectionRail label="SELECTED WORK" />

          <div className="max-w-3xl mb-12">
            <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)]">
              Selected work.
            </h1>
            <p className="text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed max-w-2xl">
              A small sample of what we've shipped — from MVPs to AI products and internal
              platforms.
            </p>
          </div>

          {/* 2. Index Grid ───────────────────────────────── */}
          <div className="grid grid-cols-1 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 gap-6 items-start">
            {sortedProjects.map((p) => (
              <div key={p.slug} className="flex flex-col">
                <Link to={`/portfolio/${p.slug}`} className="block no-underline group">
                  <Shot category={p.category} title={p.name} ratio="16/10" />
                </Link>
                <div className="font-mono text-[12px] text-[var(--color-ink-3)] mt-2.5 px-0.5">
                  {p.stack.slice(0, 3).join(" · ")}
                </div>
              </div>
            ))}
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
