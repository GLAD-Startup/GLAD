'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectItem } from '@/data/work';

interface WorkCardProps {
  project: ProjectItem;
  priority?: boolean;
}

export default function WorkCard({ project, priority = false }: WorkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    const inner = innerRef.current;
    if (!inner || !card) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      gsap.fromTo(
        inner,
        { y: 15 },
        {
          y: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={cardRef} className="w-full select-none">
      <Link
        href={`/work/${project.slug}`}
        data-cursor="view"
        className="group block w-full outline-none"
        aria-label={`${project.title} — ${project.category}`}
      >
        {/* Outer Card Container */}
        <div className="relative w-full aspect-[16/10.5] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-surface border border-line-solid">
          {/* Outer Image (Reduced dimming on hover) */}
          <div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:opacity-75">
            <Image
              src={project.outerSrc}
              alt={`${project.title} visual`}
              fill
              priority={priority}
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* Inner Floating Overlay Image (Zooms inside frame on hover) */}
          <div
            ref={innerRef}
            className="absolute inset-0 m-auto w-[54%] h-[56%] max-w-[420px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-line-solid bg-surface z-10 will-change-transform pointer-events-none"
          >
            <div className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.12]">
              <Image
                src={project.innerSrc}
                alt={`${project.title} detail`}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
          </div>

          {/* White Ribbon Opening & Expanding Vertically on Hover (Sleeker height) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
            <div className="w-full h-[28px] md:h-[32px] bg-[#FBFBF9] border-y border-line-solid flex items-center justify-center px-4 origin-center scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm">
              <span className="text-[12px] md:text-[13px] font-medium tracking-[-0.01em] text-fg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Caption Row beneath outer card */}
        <div className="mt-3.5 xl:mt-4 flex justify-between items-center text-[15px] xl:text-[16px] text-fg font-semibold px-0.5">
          {/* Project Title: Rolling text slide-up on card hover (all at once) */}
          <span className="relative inline-flex overflow-hidden font-semibold text-fg select-none">
            {/* Primary line: slides up to -100% on hover */}
            <span className="block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform text-fg font-semibold">
              {project.title}
            </span>

            {/* Duplicate line: slides in from +100% to 0% on hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 block translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 will-change-transform text-fg font-semibold"
            >
              {project.title}
            </span>
          </span>

          {/* Project Index */}
          <span className="font-semibold text-fg">
            ({project.index})
          </span>
        </div>
      </Link>
    </div>
  );
}
