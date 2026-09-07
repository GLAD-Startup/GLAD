import React from 'react';
import type { Metadata } from 'next';
import { productsData, productsOverviewFaqs } from '@/data/products';
import ProductsPageClient from '@/components/sections/ProductsPageClient';

export const metadata: Metadata = {
  title: 'Proprietary SaaS Platforms — GLAD HMS & SettleDesk',
  description:
    'Explore GLAD HMS and SettleDesk — enterprise SaaS platforms designed, engineered, and operated by GLAD Studio.',
  openGraph: {
    title: 'Proprietary SaaS Platforms — GLAD HMS & SettleDesk | GLAD Studio',
    description:
      'Explore GLAD HMS and SettleDesk — enterprise SaaS platforms designed, engineered, and operated by GLAD Studio.',
    url: 'https://gladstudio.net/products',
    type: 'website',
    images: ['https://gladstudio.net/og-image.png'],
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
        '@id': 'https://gladstudio.net/products#webpage',
        url: 'https://gladstudio.net/products',
        name: 'Proprietary SaaS Platforms — GLAD HMS & SettleDesk',
        description:
          'Explore GLAD HMS and SettleDesk — enterprise SaaS platforms designed, engineered, and operated by GLAD Studio.',
        isPartOf: {
          '@id': 'https://gladstudio.net/#website',
        },
      },
      ...productsData.map((prod) => ({
        '@type': 'SoftwareApplication',
        '@id': `https://gladstudio.net/products/${prod.slug}#software`,
        name: prod.name,
        applicationCategory: prod.category,
        operatingSystem: 'Web, iOS, Android, Cloud',
        description: prod.description,
        url: `https://gladstudio.net/products/${prod.slug}`,
        provider: {
          '@type': 'Organization',
          '@id': 'https://gladstudio.net/#organization',
          name: 'GLAD Studio',
          url: 'https://gladstudio.net',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://gladstudio.net/#organization',
          name: 'GLAD Studio',
          url: 'https://gladstudio.net',
        },
      })),
      {
        '@type': 'FAQPage',
        '@id': 'https://gladstudio.net/products#faq',
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
