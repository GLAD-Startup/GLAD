import React from 'react';
import type { Metadata } from 'next';
import { servicesData } from '@/data/services';
import ServicesPageClient from '@/components/sections/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Software Engineering Services',
  description:
    'From rapid MVP validation to multi-tenant SaaS platforms and autonomous AI agent architectures.',
  alternates: {
    canonical: 'https://gladstudio.net/services',
  },
  openGraph: {
    title: 'Software Engineering Services | GLAD Studio',
    description:
      'From rapid MVP validation to multi-tenant SaaS platforms and autonomous AI agent architectures.',
    url: 'https://gladstudio.net/services',
    type: 'website',
    images: ['https://gladstudio.net/og-image.png'],
  },
};

export default function ServicesOverviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://gladstudio.net/services#webpage',
        url: 'https://gladstudio.net/services',
        name: 'Software Engineering Services | GLAD Studio',
        description:
          'From rapid MVP validation to multi-tenant SaaS platforms and autonomous AI agent architectures.',
        isPartOf: {
          '@id': 'https://gladstudio.net/#website',
        },
      },
      ...servicesData.map((svc) => ({
        '@type': 'Service',
        '@id': `https://gladstudio.net/services/${svc.slug}#service`,
        url: `https://gladstudio.net/services/${svc.slug}`,
        name: svc.title,
        description: svc.description,
        provider: {
          '@type': 'Organization',
          '@id': 'https://gladstudio.net/#organization',
          name: 'GLAD Studio',
          url: 'https://gladstudio.net',
        },
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPageClient />
    </>
  );
}
