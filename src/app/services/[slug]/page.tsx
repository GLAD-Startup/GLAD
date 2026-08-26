import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { servicesData, getServiceBySlug } from '@/data/services';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

// TODO: expand — the old codebase may have fuller copy for specific service architectural diagrams.

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
      <main className="min-h-screen bg-bg select-none pt-[84px]">
        {/* 1. Marquee Header */}
        <Divider />
        <div className="py-2 overflow-hidden bg-bg">
          <Marquee speed={28}>
            <span
              className="t-marquee text-fg pr-[80px] whitespace-nowrap block"
              style={{
                fontSize: 'clamp(0px, 12vw, 190px)',
                lineHeight: 0.90,
                letterSpacing: '-0.035em',
              }}
            >
              {service.title} /
            </span>
          </Marquee>
        </div>
        <Divider />

        {/* 2. Eyebrow & Timeline */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[48px] flex items-center justify-between">
          <span className="text-[13px] font-semibold text-accent uppercase tracking-wider">
            {service.category}
          </span>
          <span className="text-[14px] font-medium text-fg-muted">
            Typical Scope: {service.timeline}
          </span>
        </div>

        {/* 3. Headline & Description */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[16px]">
          <h1 className="t-heading-sm text-fg max-w-[900px] leading-[1.15]">
            {service.title} for High-Growth Teams
          </h1>
          <p className="t-body text-fg-muted max-w-[760px] mt-4 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* 4. Core Tech Stack Pills */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[32px] flex flex-wrap items-center gap-2">
          <span className="text-[12px] font-semibold text-fg uppercase tracking-wider mr-2">
            Stack:
          </span>
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-[12.5px] font-medium bg-surface border border-line-solid text-fg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 5. Key Deliverables & Capabilities Grid */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[60px] xl:mt-[80px] grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="bg-surface border border-line-solid rounded-[14px] p-6 xl:p-8">
            <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-4">
              Guaranteed Deliverables
            </span>
            <div className="flex flex-col gap-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-[14.5px] text-fg">
                  <span className="text-accent font-bold text-[14px]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-line-solid rounded-[14px] p-6 xl:p-8">
            <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-4">
              Core Capabilities
            </span>
            <div className="flex flex-col gap-4">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
                  <h3 className="text-[15px] font-semibold text-fg">{cap.title}</h3>
                  <p className="text-[13.5px] text-fg-muted mt-1 leading-normal">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Phased Delivery Roadmap */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[60px] xl:mt-[80px]">
          <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-6">
            Phased Delivery Roadmap
          </span>
          <div className="border-t border-line">
            {service.phases.map((phase, idx) => (
              <div
                key={idx}
                className="py-[24px] px-2 border-b border-line grid grid-cols-1 md:grid-cols-[120px_260px_1fr] gap-3 md:gap-6 items-start"
              >
                <span className="text-[13px] font-semibold text-accent">{phase.meta}</span>
                <span className="text-[16px] font-medium text-fg">{phase.title}</span>
                <p className="text-[14px] text-fg-muted leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Action CTA */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[60px] xl:mt-[90px] text-center">
          <PillButton href="/contact">Book a Discovery Call</PillButton>
        </div>

        {/* 8. FAQ */}
        <div className="mt-[80px] xl:mt-[110px]">
          <SectionEyebrow
            left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
            index="(GLD® — 11)"
            right="CLARIFICATIONS"
          />
        </div>
        <Faq />

        {/* 9. Footer */}
        <Footer isWorkDetail />
      </main>
    </>
  );
}
