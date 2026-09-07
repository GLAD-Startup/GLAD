import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articlesData, getArticleBySlug } from '@/data/insights';
import ArticleDetailClient from '@/components/insights/ArticleDetailClient';

function getIsoDate(dateStr: string): string {
  const months: Record<string, string> = {
    january: '01', february: '02', march: '03', april: '04',
    may: '05', june: '06', july: '07', august: '08',
    september: '09', october: '10', november: '11', december: '12',
  };
  const match = dateStr.match(/(\w+)\s+(\d{1,2}),\s+(\d{4})/i);
  if (match) {
    const month = months[match[1].toLowerCase()];
    const day = match[2].padStart(2, '0');
    const year = match[3];
    if (month) return `${year}-${month}-${day}`;
  }
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split('T')[0];
}

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

  const isoDate = getIsoDate(article.date);
  const fullImageUrl = `https://gladstudio.net${article.coverSrc}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://gladstudio.net/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | GLAD Studio`,
      description: article.excerpt,
      url: `https://gladstudio.net/insights/${article.slug}`,
      type: 'article',
      publishedTime: isoDate,
      authors: ['Somesh Rajput'],
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 896,
          alt: article.title,
        },
      ],
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

  const isoDate = getIsoDate(article.date);
  const fullImageUrl = `https://gladstudio.net${article.coverSrc}`;

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
      '@id': 'https://gladstudio.net/#organization',
      name: 'GLAD Studio',
      url: 'https://gladstudio.net',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gladstudio.net/brand/website-logo-white-background-compatible.png',
      },
    },
    datePublished: isoDate,
    image: fullImageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gladstudio.net/insights/${article.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://gladstudio.net/insights/${article.slug}#breadcrumb`,
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
