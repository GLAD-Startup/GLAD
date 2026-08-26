import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { articlesData, getArticleBySlug } from '@/data/insights';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} — Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://gladstudio.net/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} — GLAD Studio Insights`,
      description: article.excerpt,
      url: `https://gladstudio.net/insights/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: ['Somesh Rajput'],
    },
  };
}

export default async function InsightsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: 'Somesh Rajput',
      jobTitle: 'CTO & Head of Engineering',
      url: 'https://gladstudio.net/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GLAD studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gladstudio.net/brand/website-logo-white-background-compatible.png',
      },
    },
    datePublished: article.date,
    image: article.coverSrc,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gladstudio.net/insights/${article.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://gladstudio.net',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: 'https://gladstudio.net/insights',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://gladstudio.net/insights/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-bg select-none pt-[84px]">
        {/* 1. Title Marquee */}
        <Divider />
        <div className="py-2 overflow-hidden bg-bg">
          <Marquee speed={28}>
            <span
              className="t-marquee text-fg pr-[80px] whitespace-nowrap block"
              style={{
                fontSize: 'clamp(0px, 11vw, 175px)',
                lineHeight: 0.90,
                letterSpacing: '-0.035em',
              }}
            >
              {article.title} /
            </span>
          </Marquee>
        </div>
        <Divider />

        {/* 2. Author + Read Time + Category Meta Row */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[48px] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-medium text-fg">
              By {article.author}
            </span>
            <span className="text-fg-muted">·</span>
            <span className="text-[14px] text-fg-muted">
              {article.readTime}
            </span>
          </div>
          <span className="text-[13px] font-semibold text-accent uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        {/* 3. Full-Width Cover Image (Border Radius: 12px) */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[24px] xl:mt-[36px]">
          <div
            data-cursor="view"
            className="w-full aspect-[4/3] sm:aspect-[16/10] xl:aspect-auto xl:h-[680px] rounded-[12px] overflow-hidden relative bg-surface border border-line-solid shadow-2xl"
          >
            <Image
              src={article.coverSrc}
              alt={`${article.title} cover composition`}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
        </div>

        {/* 4. Three Paragraphs of Body Copy with Pull-Quote */}
        <article className="mt-[48px] xl:mt-[70px] max-w-[680px] mx-auto px-4 flex flex-col gap-[28px] xl:gap-[36px]">
          <p className="t-body text-fg-muted leading-[1.55]">
            {article.paragraphs[0]}
          </p>

          <p className="t-body text-fg-muted leading-[1.55]">
            {article.paragraphs[1]}
          </p>

          <div className="my-2 xl:my-4 py-6 xl:py-8 border-t border-b border-line text-center">
            <blockquote className="t-heading-sm text-fg leading-[1.15] tracking-[-0.02em]">
              &ldquo;{article.quote}&rdquo;
            </blockquote>
          </div>

          {article.paragraphs[2] && (
            <p className="t-body text-fg-muted leading-[1.55]">
              {article.paragraphs[2]}
            </p>
          )}
        </article>

        {/* 5. Section Eyebrow preceding FAQ */}
        <div className="mt-[70px] xl:mt-[110px]">
          <SectionEyebrow
            left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
            index="(GLD® — 11)"
            right="CLARIFICATIONS"
          />
        </div>

        {/* 6. FAQ */}
        <Faq />

        {/* 7. Footer */}
        <Footer isWorkDetail />
      </main>
    </>
  );
}
