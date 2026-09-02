import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectsData, getProjectBySlug } from '@/data/work';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import WorkCard from '@/components/ui/WorkCard';

export function generateStaticParams() {
  return projectsData.map((p) => ({
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
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.subtitle || project.solution,
    alternates: {
      canonical: `https://gladstudio.net/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — GLAD Studio Portfolio`,
      description: project.subtitle || project.solution,
      url: `https://gladstudio.net/portfolio/${project.slug}`,
      type: 'website',
      images: [
        {
          url: project.outerSrc,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProjects = [
    projectsData[(currentIndex + 1) % projectsData.length],
    projectsData[(currentIndex + 2) % projectsData.length],
  ];

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.subtitle,
    description: project.solution,
    creator: {
      '@type': 'Organization',
      name: 'GLAD studio',
      url: 'https://gladstudio.net',
    },
    dateCreated: project.year,
    image: project.outerSrc,
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
        name: 'Portfolio',
        item: 'https://gladstudio.net/portfolio',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://gladstudio.net/portfolio/${project.slug}`,
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
      <main className="min-h-screen bg-bg select-none pt-[84px]">
        {/* 1. Title Marquee */}
        <Divider />
        <div className="py-2 overflow-hidden bg-bg">
          <Marquee speed={30}>
            <span
              className="t-marquee text-fg pr-[80px] whitespace-nowrap block"
              style={{
                fontSize: 'clamp(0px, 14vw, 220px)',
                lineHeight: 0.90,
                letterSpacing: '-0.035em',
              }}
            >
              {project.title} /
            </span>
          </Marquee>
        </div>
        <Divider />

        {/* 2. Category Label */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[48px]">
          <span className="text-[13px] font-semibold text-accent uppercase tracking-wider block">
            {project.category}
          </span>
        </div>

        {/* 3. Long Subtitle in .t-heading-sm */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[16px]">
          <h1 className="t-heading-sm text-fg max-w-[1100px] leading-[1.15]">
            {project.subtitle}
          </h1>
        </div>

        {/* 4. Four-Column Meta Grid (Category, Tech Stack, Outcome, Year) */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px]">
          <div className="border-t border-b border-line py-[24px] grid grid-cols-2 md:grid-cols-4 gap-6 text-[14px]">
            <div>
              <span className="text-[12px] font-semibold text-fg-muted uppercase tracking-wider block">
                Category
              </span>
              <span className="text-[15px] font-medium text-fg mt-1 block">
                {project.category}
              </span>
            </div>
            <div>
              <span className="text-[12px] font-semibold text-fg-muted uppercase tracking-wider block">
                Tech Stack
              </span>
              <span className="text-[15px] font-medium text-fg mt-1 block">
                {project.techStack.join(', ')}
              </span>
            </div>
            <div>
              <span className="text-[12px] font-semibold text-fg-muted uppercase tracking-wider block">
                Outcome
              </span>
              <span className="text-[15px] font-medium text-accent mt-1 block">
                {project.outcome}
              </span>
            </div>
            <div>
              <span className="text-[12px] font-semibold text-fg-muted uppercase tracking-wider block">
                Year
              </span>
              <span className="text-[15px] font-medium text-fg mt-1 block">
                {project.year || '2025'}
              </span>
            </div>
          </div>
        </div>

        {/* 5. Case-Study Images Stacked Full-Width with Captions */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px] flex flex-col gap-10">
          {project.shots.map((shot, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div
                data-cursor="view"
                className="w-full aspect-[16/10] xl:aspect-[16/9] rounded-[12px] overflow-hidden relative bg-surface border border-line-solid shadow-xl flex items-center justify-center p-3 md:p-5"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={shot.src}
                    alt={`${project.title} — ${shot.caption}`}
                    fill
                    unoptimized
                    className="object-contain block"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center text-[13px] text-fg-muted px-1">
                <span>{shot.caption}</span>
                <span className="font-medium">Shot 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 6. The Challenge & The Solution Prose Blocks (max-width 680px) */}
        <div className="max-w-[680px] mx-auto px-4 mt-[64px] xl:mt-[96px] flex flex-col gap-[48px]">
          <div>
            <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-3">
              The Challenge
            </span>
            <h2 className="text-[24px] xl:text-[28px] font-medium text-fg leading-tight">
              System Bottlenecks & Operational Constraints
            </h2>
            <p className="t-body text-fg-muted mt-4 leading-[1.6]">
              {project.challenge}
            </p>
          </div>

          <div>
            <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-3">
              The Solution
            </span>
            <h2 className="text-[24px] xl:text-[28px] font-medium text-fg leading-tight">
              Engineered Architecture & Delivery
            </h2>
            <p className="t-body text-fg-muted mt-4 leading-[1.6]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 7. Key Features as a Numbered List in Services Row Style */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px]">
          <div className="border-t border-line">
            <div className="py-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block">
                Key Engineered Features
              </span>
            </div>
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="py-[22px] px-2 border-t border-line grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] items-center transition-colors duration-200 hover:bg-surface"
              >
                <span className="text-[14px] font-normal text-fg-muted">
                  0{idx + 1}
                </span>
                <span className="text-[16px] xl:text-[18px] font-medium text-fg">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 8. More Work Marquee with Next Two Projects */}
        <div className="mt-[80px] xl:mt-[120px]">
          <Divider />
          <div className="py-2 overflow-hidden bg-bg">
            <Marquee speed={26}>
              <span
                className="t-marquee text-fg pr-[80px] whitespace-nowrap block"
                style={{
                  fontSize: 'clamp(0px, 12vw, 190px)',
                  lineHeight: 0.90,
                  letterSpacing: '-0.035em',
                }}
              >
                More Work© /
              </span>
            </Marquee>
          </div>
          <Divider />

          <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {nextProjects.map((nextProj) => (
              <WorkCard key={nextProj.id} project={nextProj} />
            ))}
          </div>
        </div>

        {/* 9. Section Eyebrow preceding FAQ */}
        <div className="mt-[80px] xl:mt-[110px]">
          <SectionEyebrow
            left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
            index="(GLD® — 11)"
            right="CLARIFICATIONS"
          />
        </div>

        {/* 10. FAQ */}
        <Faq />

        {/* 11. Footer */}
        <Footer isWorkDetail />
      </main>
    </>
  );
}
