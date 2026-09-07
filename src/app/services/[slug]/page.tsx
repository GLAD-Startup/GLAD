import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { servicesData, getServiceBySlug } from '@/data/services';
import ServiceDetailClient from '@/components/sections/ServiceDetailClient';

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  const serviceImages: Record<string, string> = {
    'mvp-development': '/services/service-mvp.jpg',
    'web-application-development': '/services/service-web.jpg',
    'mobile-app-development': '/services/service-mobile.jpg',
    'ai-solutions': '/services/service-ai.jpg',
    'business-automation': '/services/service-automation.jpg',
  };

  const fullImageUrl = `https://gladstudio.net${serviceImages[service.slug] || '/og-image.png'}`;

  const serviceTitles: Record<string, string> = {
    'mvp-development': 'MVP Development Services for Startups',
    'web-application-development': 'Custom Web Application Development Services',
    'mobile-app-development': 'Mobile App Development Services — iOS & Android',
    'ai-solutions': 'AI Solutions & Custom AI Agent Development',
    'business-automation': 'Business Process Automation & Internal Tools',
  };

  const pageTitle = serviceTitles[service.slug] || `${service.title} Services`;

  return {
    title: pageTitle,
    description: service.description,
    alternates: {
      canonical: `https://gladstudio.net/services/${service.slug}`,
    },
    openGraph: {
      title: `${pageTitle} | GLAD Studio`,
      description: service.description,
      url: `https://gladstudio.net/services/${service.slug}`,
      type: 'website',
      images: [
        {
          url: fullImageUrl,
          width: 896,
          height: 1200,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://gladstudio.net/services/${service.slug}#service`,
    url: `https://gladstudio.net/services/${service.slug}`,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      '@id': 'https://gladstudio.net/#organization',
      name: 'GLAD Studio',
      url: 'https://gladstudio.net',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://gladstudio.net/services/${service.slug}#breadcrumb`,
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
        name: 'Services',
        item: 'https://gladstudio.net/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://gladstudio.net/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
