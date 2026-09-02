import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { works, getProjectBySlug } from '@/data/works';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import ProjectCard from '@/components/ui/ProjectCard';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

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

  return {
    title: `${project.title} — GLAD Studio`,
    description: project.summary,
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

  const currentIndex = works.findIndex((p) => p.slug === slug);
  const nextProject1 = works[(currentIndex + 1) % works.length];
  const nextProject2 = works[(currentIndex + 2) % works.length];

  return (
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
            {project.title} /
          </span>
        </Marquee>
      </div>
      <Divider />

      {/* 2. Date */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[50px]">
        <span className="text-[15px] text-fg-muted font-normal">
          {project.date}
        </span>
      </div>

      {/* 3. One-line Summary */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[16px]">
        <h1 className="t-heading-sm text-fg max-w-[1100px] leading-[1.15]">
          {project.summary}
        </h1>
      </div>

      {/* 4. Meta Grid (4 cols on desktop, 2 cols on tablet/mobile) */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[48px]">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[24px] border-t border-b border-line py-[24px]">
          {/* Category */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-medium text-fg-muted uppercase tracking-wider">
              Category
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.category}
            </span>
          </div>

          {/* Client */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-medium text-fg-muted uppercase tracking-wider">
              Client
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.client}
            </span>
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-medium text-fg-muted uppercase tracking-wider">
              Duration
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.duration}
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-medium text-fg-muted uppercase tracking-wider">
              Location
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.location}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Live Website Button */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px]">
        <PillButton href={project.liveUrl || '#'} target="_blank">
          Live Website
        </PillButton>
      </div>

      {/* 6. Four Stacked Full-Width Images with Gaps */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[70px] flex flex-col gap-[40px] xl:gap-[70px]">
        {project.galleryImages.map((imgSrc, idx) => (
          <div
            key={idx}
            data-cursor="view"
            className="w-full min-h-[380px] md:min-h-[560px] xl:min-h-[720px] rounded-[14px] overflow-hidden relative bg-surface border border-line-solid shadow-xl flex items-center justify-center p-3 md:p-6"
          >
            <div className="relative w-full h-full min-h-[360px] md:min-h-[520px] xl:min-h-[670px]">
              <Image
                src={imgSrc}
                alt={`${project.title} gallery slide ${idx + 1}`}
                fill
                unoptimized
                className="object-contain block"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 7. Section Eyebrow */}
      <div className="mt-[70px] xl:mt-[90px]">
        <SectionEyebrow
          left={<>SELECTED WORK <span lang="hi">परियोजनाएँ</span></>}
          index="(GLD® — 03)"
          right="SHIPPED PROJECTS"
        />
      </div>

      {/* 8. More Works Marquee */}
      <Divider />
      <div className="py-4 md:py-6 overflow-hidden bg-bg">
        <Marquee speed={30}>
          <span
            className="t-marquee text-fg pr-[80px] whitespace-nowrap block pb-[0.22em] pt-[0.06em]"
            style={{
              fontSize: 'clamp(0px, 14vw, 220px)',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            More Works© /
          </span>
        </Marquee>
      </div>
      <Divider />

      {/* 9. Next Two Projects as ProjectCards */}
      <div className="relative w-full h-auto xl:h-[720px] mt-[48px] xl:mt-[60px] px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0 pb-16 xl:pb-0">
        {/* Next Project 1 */}
        <ProjectCard
          index={nextProject1.index}
          title={nextProject1.title}
          category={nextProject1.category}
          subtitle={nextProject1.subtitle}
          href={`/work/${nextProject1.slug}`}
          x={60}
          y={0}
          w={650}
          h={410}
          innerX={150}
          innerY={150}
          innerW={320}
          innerH={220}
          outerSrc={nextProject1.outerSrc}
          innerSrc={nextProject1.innerSrc}
        />

        {/* Next Project 2 */}
        <ProjectCard
          index={nextProject2.index}
          title={nextProject2.title}
          category={nextProject2.category}
          subtitle={nextProject2.subtitle}
          href={`/work/${nextProject2.slug}`}
          x={780}
          y={80}
          w={650}
          h={410}
          innerX={150}
          innerY={150}
          innerW={320}
          innerH={220}
          outerSrc={nextProject2.outerSrc}
          innerSrc={nextProject2.innerSrc}
        />
      </div>

      {/* 10. Section Eyebrow (GLD® — 11) & FAQ */}
      <div className="mt-[70px] md:mt-[100px] xl:mt-[140px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>
      <Faq />

      {/* 11. Footer with Email Me variant */}
      <Footer isWorkDetail />
    </main>
  );
}
