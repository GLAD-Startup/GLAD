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

  return {
    title: `${service.title} — Services`,
    description: service.description,
    alternates: {
      canonical: `https://gladstudio.net/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} — GLAD Studio`,
      description: service.description,
      url: `https://gladstudio.net/services/${service.slug}`,
      type: 'website',
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
    name: service.title,
    provider: {
      '@type': 'Organization',
      name: 'GLAD studio',
      url: 'https://gladstudio.net',
    },
    description: service.description,
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
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
