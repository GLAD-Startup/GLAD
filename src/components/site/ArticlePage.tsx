import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Row } from "@/components/site/Row";
import { Chip } from "@/components/ui/Chip";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { articles, type Article } from "@/data/insights.data";

export interface ArticlePageProps {
  article: Article;
  children: React.ReactNode;
}

export function ArticlePage({ article, children }: ArticlePageProps) {
  const sorted = [...articles].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((a) => a.slug === article.slug);
  const rel1 = sorted[(idx + 1) % sorted.length];
  const rel2 = sorted[(idx + 2) % sorted.length];

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero ───────────────────────────────────────── */}
        <Section size="hero" tone="paper" divider={false}>
          {/* Breadcrumb: Home / Insights / {title} */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <div className="flex items-center gap-2 font-mono text-[12px] text-[var(--color-ink-3)] select-none">
              <Link to="/" className="hover:text-[var(--color-ink)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-[var(--color-ink)] transition-colors">
                Insights
              </Link>
              <span>/</span>
              <span className="text-[var(--color-ink)] font-medium truncate max-w-[280px] sm:max-w-md">
                {article.title}
              </span>
            </div>
          </nav>

          <div className="max-w-[720px] flex flex-col items-start text-left">
            <Chip live={false}>{article.category}</Chip>
            <h1 className="max-w-[20ch] text-[clamp(36px,5vw,56px)] leading-[1.08] tracking-tight font-display font-medium text-[var(--color-ink)] mt-5">
              {article.title}
            </h1>
            <div className="font-mono text-[12px] text-[var(--color-ink-3)] mt-6">
              {article.author} · {article.readTime} · {article.date}
            </div>
          </div>
        </Section>

        {/* 2. Body (tone="paper" size="compact") ─────────── */}
        <Section size="compact" tone="paper" divider={false}>
          <div className="prose text-left">
            {children}
          </div>
        </Section>

        {/* 3. Related (tone="card") ──────────────────────── */}
        <Section size="default" tone="card" index="01">
          <SectionRail label="RELATED READING" />

          <div className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] p-2 sm:p-4">
            <Row
              index={1}
              title={rel1.title}
              description={rel1.excerpt}
              meta={rel1.readTime.toUpperCase()}
              href={`/insights/${rel1.slug}`}
            />
            <Row
              index={2}
              title={rel2.title}
              description={rel2.excerpt}
              meta={rel2.readTime.toUpperCase()}
              href={`/insights/${rel2.slug}`}
            />
          </div>
        </Section>

        {/* 4. Closing CTA (tone="paper") ─────────────────── */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
