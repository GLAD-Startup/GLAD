import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { productsData } from '@/data/products';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

// TODO: expand — the old codebase may have fuller copy for enterprise setup diagrams.

export function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} — Products`,
    description: product.description,
    alternates: {
      canonical: `https://gladstudio.net/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — GLAD Studio Products`,
      description: product.description,
      url: `https://gladstudio.net/products/${product.slug}`,
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    operatingSystem: 'Web, iOS, Android',
    applicationCategory: 'BusinessApplication',
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: 'GLAD studio',
      url: 'https://gladstudio.net',
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-bg select-none pt-[84px]">
        {/* 1. Title Marquee */}
        <Divider />
        <div className="py-4 md:py-6 overflow-hidden bg-bg">
          <Marquee speed={28}>
            <span
              className="t-marquee text-fg pr-[80px] whitespace-nowrap block pb-[0.22em] pt-[0.06em]"
              style={{
                fontSize: 'clamp(0px, 14vw, 220px)',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
              }}
            >
              {product.name} /
            </span>
          </Marquee>
        </div>
        <Divider />

        {/* 2. Category & Tagline */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[48px] flex items-center justify-between">
          <span className="text-[15px] font-normal text-fg-muted">
            {product.tagline}
          </span>
          <span className="text-[13px] font-semibold text-accent uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* 3. Headline & Description */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[24px]">
          <h1 className="t-heading-sm text-fg max-w-[1100px] leading-[1.15]">
            {product.headline}
          </h1>
          <p className="t-body text-fg-muted max-w-[800px] mt-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* 4. Stats Grid */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px]">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {product.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-surface border border-line-solid rounded-[12px] p-6 text-center"
              >
                <div className="text-[28px] xl:text-[36px] font-bold text-fg tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[13px] text-fg-muted mt-1 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Architectural Capabilities */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[60px] xl:mt-[80px]">
          <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-6">
            Role-Based Capabilities
          </span>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {product.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-surface border border-line-solid rounded-[14px] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[12px] text-accent font-semibold uppercase tracking-wider block">
                    {cap.role}
                  </span>
                  <h3 className="text-[18px] font-semibold text-fg mt-2">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] text-fg-muted mt-2 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line flex flex-col gap-2">
                  {cap.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-[13px] text-fg">
                      <span className="text-accent font-bold">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CTA Band */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[60px] xl:mt-[80px] text-center">
          <PillButton href="/contact">Request Product Demo</PillButton>
        </div>

        {/* 7. Section Eyebrow */}
        <div className="mt-[70px] xl:mt-[100px]">
          <SectionEyebrow
            left={<>OUR PRODUCTS <span lang="hi">उत्पाद</span></>}
            index="(GLD® — 08)"
            right="SAAS PLATFORMS"
          />
        </div>

        {/* 8. FAQ */}
        <Faq />

        {/* 9. Footer */}
        <Footer isWorkDetail />
      </main>
    </>
  );
}
