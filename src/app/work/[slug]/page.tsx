import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { works, getProjectBySlug } from '@/data/works';
import WorkDetailClient from '@/components/sections/WorkDetailClient';

export function generateStaticParams() {
  return works.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found — GLAD Studio',
    };
  }

  return {
    title: `${project.title} — GLAD Studio`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = works.findIndex((p) => p.slug === slug);
  const nextProject1 = works[(currentIndex + 1) % works.length];
  const nextProject2 = works[(currentIndex + 2) % works.length];

  return (
    <WorkDetailClient
      project={project}
      nextProject1={nextProject1}
      nextProject2={nextProject2}
    />
  );
}
