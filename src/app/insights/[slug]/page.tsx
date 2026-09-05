import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articlesData, getArticleBySlug } from '@/data/insights';
import ArticleDetailClient from '@/components/insights/ArticleDetailClient';

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
    title: `${article.title} — Insights — GLAD Studio`,
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
      <ArticleDetailClient article={article} />
    </>
  );
}
