'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/work';

export default function FeaturedWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!marqueeContentRef.current || !sectionRef.current) return;

      gsap.fromTo(
        marqueeContentRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative w-full bg-bg select-none">
      {/* 1. Marquee Band */}
      <div className="relative w-full overflow-hidden py-4 xl:py-6 bg-surface/30 border-y border-line">
        <div ref={marqueeContentRef} className="will-change-transform">
          <Marquee speed={22}>
            <div className="flex items-center gap-6 md:gap-10 pr-[60px] md:pr-[90px] whitespace-nowrap py-3">
              <span
                className="text-fg font-normal tracking-tight inline-flex items-center pb-[0.24em] pt-[0.10em]"
                style={{
                  fontSize: 'clamp(44px, 6.5vw, 96px)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.035em',
                }}
              >
                Selected Works
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-accent text-white shadow-sm">
                Case Studies
              </span>
              <span className="text-fg-dim font-light text-[28px] select-none">/</span>
              <span
                className="text-fg-muted font-normal tracking-tight inline-flex items-center pb-[0.24em] pt-[0.10em]"
                style={{
                  fontSize: 'clamp(44px, 6.5vw, 96px)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.035em',
                }}
              >
                Shipped Software
              </span>
              <span className="text-fg-dim font-light text-[28px] select-none">/</span>
              <span className="text-fg-muted font-medium text-[13.5px] uppercase tracking-widest">
                GLAD STUDIO®
              </span>
              <span className="text-fg-dim font-light text-[28px] select-none">/</span>
            </div>
          </Marquee>
        </div>
      </div>

      {/* 2. Copy Block (Right-aligned with small margin) */}
      <div className="px-[20px] md:px-[28px] xl:px-0 ml-auto mr-[20px] md:mr-[28px] xl:mr-[40px] mt-[56px] max-w-[520px] space-y-[34px]">
        <p className="t-body text-fg-muted">
          Every project is a chance to blend design and engineering, turning ambitious ideas into{' '}
          <strong className="text-fg font-semibold">
            shipped products — built with
          </strong>{' '}
          type-safe architecture, predictable milestones, and source code you fully own.
        </p>

        <div>
          <PillButton href="/work">See Works</PillButton>
        </div>
      </div>

      {/* 3. Project Cards Container (2890px on >=1200px) */}
      <div className="relative w-full h-auto xl:h-[2890px] mt-[48px] xl:mt-[60px] px-[20px] md:px-[28px] xl:px-[40px] flex flex-col xl:block gap-20 sm:gap-24 md:gap-28 xl:gap-0 pb-12 sm:pb-16 xl:pb-0">
        {projectsData.map((proj) => (
          <ProjectCard
            key={proj.id}
            index={proj.index}
            title={proj.title}
            category={proj.category}
            subtitle={proj.subtitle}
            href={`/work/${proj.slug}`}
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
