import React from 'react';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/work';

export default function FeaturedWorks() {
  return (
    <section id="work" className="relative w-full bg-bg select-none">
      {/* 1. Marquee Band */}
      <Divider />
      <div className="relative w-full overflow-hidden py-2 bg-bg">
        {/* Vertical Tick Mark Detail */}
        <div className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[2px] h-[150px] bg-fg z-20 pointer-events-none" />

        <Marquee speed={30}>
          <span className="t-marquee text-fg pr-[80px] whitespace-nowrap block">
            Selected Work©
          </span>
        </Marquee>
      </div>
      <Divider />

      {/* 2. Copy Block */}
      <div className="px-[20px] md:px-[28px] xl:px-0 xl:ml-[40px] mt-[56px] max-w-[520px] space-y-[34px]">
        <p className="t-body text-fg-muted">
          Every project is a chance to blend design and engineering, turning ambitious ideas into{' '}
          <strong className="text-fg font-semibold">
            shipped products — built with
          </strong>{' '}
          type-safe architecture, predictable milestones, and source code you fully own.
        </p>

        <div>
          <PillButton href="/portfolio">See Work</PillButton>
        </div>
      </div>

      {/* 3. Project Cards Container (3050px on >=1200px) */}
      <div className="relative w-full h-auto xl:h-[3050px] mt-[60px] px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0 pb-16 xl:pb-0">
        {projectsData.map((proj) => (
          <ProjectCard
            key={proj.id}
            index={proj.index}
            title={proj.title}
            category={proj.category}
            subtitle={proj.subtitle}
            href={`/portfolio/${proj.slug}`}
            x={proj.x}
            y={proj.y}
            w={proj.w}
            h={proj.h}
            innerX={proj.innerX}
            innerY={proj.innerY}
            innerW={proj.innerW}
            innerH={proj.innerH}
            outerSrc={proj.outerSrc}
            innerSrc={proj.innerSrc}
          />
        ))}
      </div>

      {/* 4. Concluding Section Eyebrow */}
      <SectionEyebrow
        left={<>CAPABILITIES <span lang="hi">सेवाएँ</span></>}
        index="(GLD® — 03)"
        right="ENGINEERING SERVICES"
      />
    </section>
  );
}
