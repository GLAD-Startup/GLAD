import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { works, getProjectBySlug } from '@/data/work';
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
  const fullImageUrl = project.outerSrc.startsWith('http')
    ? project.outerSrc
    : `https://gladstudio.net${project.outerSrc}`;

  const workTitles: Record<string, string> = {
    'glad-hms': 'GLAD HMS Case Study — Enterprise Hospitality Platform',
    'settledesk': 'SettleDesk Case Study — Brokerage Management Platform',
    'prayas-app': 'Prayas Case Study — Healthcare Logistics Ecosystem',
    'stock-management': 'Canteen Inventory & POS Management Case Study',
    'ai-mock-interview': 'AI Mock Interview Platform Case Study',
    'lead-enrichment': 'Automated Lead Enrichment Pipeline Case Study',
  };

  const workDescriptions: Record<string, string> = {
    'glad-hms':
      'Case study on engineering GLAD HMS: a modular hospitality operating system with real-time room availability, automated folios, and multi-property RBAC.',
    'settledesk':
      'Case study on building SettleDesk: an enterprise transaction management operating system automating custom tiered commission splits for real estate brokerages.',
    'prayas-app':
      'Case study on engineering Prayas: a healthcare logistics suite comprising a mobile app for donors, responsive public portal, and real-time admin dispatch console.',
    'stock-management':
      'Case study on building a mobile-first inventory tracking and customer management app deployed for multi-counter operations at GLA Canteen.',
    'ai-mock-interview':
      'Case study on building an AI assessment platform with role-specific LLM question generation, semantic scoring, and structured candidate feedback.',
    'lead-enrichment':
      'Case study on engineering an automated lead enrichment platform with website validation, decision-maker extraction, and asynchronous batch processing.',
  };

  const pageTitle = workTitles[project.slug] || `${project.title} Case Study`;
  const pageDescription = workDescriptions[project.slug] || project.solution || project.summary;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://gladstudio.net/work/${project.slug}`,
    },
    openGraph: {
      title: `${pageTitle} | GLAD Studio`,
      description: pageDescription,
      url: `https://gladstudio.net/work/${project.slug}`,
      type: 'website',
      images: [
        {
          url: fullImageUrl,
          alt: project.title,
        },
      ],
    },
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

  const fullImageUrl = project.outerSrc.startsWith('http')
    ? project.outerSrc
    : `https://gladstudio.net${project.outerSrc}`;

  const currentIndex = works.findIndex((p) => p.slug === slug);
  const nextProject1 = works[(currentIndex + 1) % works.length];
  const nextProject2 = works[(currentIndex + 2) % works.length];

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://gladstudio.net/work/${project.slug}#creativework`,
    url: `https://gladstudio.net/work/${project.slug}`,
    name: project.title,
    headline: project.subtitle,
    description: project.solution || project.summary,
    creator: {
      '@type': 'Organization',
      '@id': 'https://gladstudio.net/#organization',
      name: 'GLAD Studio',
      url: 'https://gladstudio.net',
    },
    dateCreated: project.year,
    image: fullImageUrl,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://gladstudio.net/work/${project.slug}#breadcrumb`,
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
        name: 'Work',
        item: 'https://gladstudio.net/work',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://gladstudio.net/work/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <WorkDetailClient
        project={project}
        nextProject1={nextProject1}
        nextProject2={nextProject2}
      />
    </>
  );
}
