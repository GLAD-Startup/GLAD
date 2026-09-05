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
      title: 'Article Not Found — GLAD Studio',
    };
  }

  return {
    title: `${article.title} — GLAD Studio`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} />;
}
