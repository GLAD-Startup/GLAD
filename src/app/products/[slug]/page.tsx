import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import ProductDetailClient from '@/components/products/ProductDetailClient';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found — GLAD Studio',
    };
  }

  const title =
    product.slug === 'glad-hms'
      ? 'GLAD HMS — Modular Hotel Management System | GLAD Studio'
      : 'SettleDesk — Run Your Entire Brokerage on One Platform';

  const description =
    product.slug === 'glad-hms'
      ? 'GLAD HMS is a modular, multi-tenant Hotel Management System for reservations, front desk operations, housekeeping, stay folios, billing, and hotel revenue analytics.'
      : 'SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time SaaS platform for real estate brokerages.';

  const url = `https://gladstudio.net/products/${product.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: 'https://gladstudio.net/og-image.png',
          width: 1200,
          height: 630,
          alt: `${product.name} — ${product.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://gladstudio.net/og-image.png'],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `https://gladstudio.net/products/${product.slug}/#software`,
        name: product.name,
        operatingSystem: 'Web, Cloud, iOS, Android',
        applicationCategory:
          product.slug === 'glad-hms'
            ? 'HotelManagementApplication'
            : 'BusinessApplication',
        description: product.description,
        url: `https://gladstudio.net/products/${product.slug}`,
        publisher: {
          '@type': 'Organization',
          '@id': 'https://gladstudio.net/#organization',
          name: 'GLAD Studio',
          url: 'https://gladstudio.net',
          logo: 'https://gladstudio.net/og-image.png',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `https://gladstudio.net/products/${product.slug}/#webpage`,
        url: `https://gladstudio.net/products/${product.slug}`,
        name: `${product.name} — ${product.tagline} | GLAD Studio`,
        description: product.description,
        isPartOf: {
          '@id': 'https://gladstudio.net/#website',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://gladstudio.net/products/${product.slug}/#breadcrumb`,
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
            name: 'Products',
            item: 'https://gladstudio.net/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: `https://gladstudio.net/products/${product.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://gladstudio.net/products/${product.slug}/#faq`,
        mainEntity: product.faqs.map((faq) => ({
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
      <ProductDetailClient product={product} />
    </>
  );
}
