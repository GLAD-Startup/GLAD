import React from 'react';
import type { Metadata } from 'next';
import { productsData, productsOverviewFaqs } from '@/data/products';
import ProductsPageClient from '@/components/sections/ProductsPageClient';

export const metadata: Metadata = {
  title: 'Proprietary SaaS Platforms — GLAD Studio',
  description:
    'Explore GLAD HMS and SettleDesk — enterprise SaaS platforms designed, engineered, and operated by GLAD studio.',
  openGraph: {
    title: 'Proprietary SaaS Platforms — GLAD Studio',
    description:
      'Explore GLAD HMS and SettleDesk — enterprise SaaS platforms designed, engineered, and operated by GLAD studio.',
    url: 'https://gladstudio.net/products',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gladstudio.net/products',
  },
};

export default function ProductsOverviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://gladstudio.net/products/#webpage',
        url: 'https://gladstudio.net/products',
        name: 'Proprietary SaaS Platforms — GLAD Studio',
        description:
          'Explore GLAD HMS and SettleDesk — enterprise SaaS platforms designed, engineered, and operated by GLAD studio.',
      },
      ...productsData.map((prod) => ({
        '@type': 'SoftwareApplication',
        name: prod.name,
        applicationCategory: prod.category,
        operatingSystem: 'Web, iOS, Android, Cloud',
        description: prod.description,
        url: `https://gladstudio.net/products/${prod.slug}`,
      })),
      {
        '@type': 'FAQPage',
        '@id': 'https://gladstudio.net/products/#faq',
        mainEntity: productsOverviewFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsPageClient />
    </>
  );
}
