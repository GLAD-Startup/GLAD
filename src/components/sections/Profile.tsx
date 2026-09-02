'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

const statementWords = [
  'We',
  'build',
  'products,',
  'not',
  'just',
  'software.',
  'A',
  'small',
  'senior',
  'team',
  'that',
  'ships',
  'every',
  'week,',
  'works',
  'on',
  'few',
  'projects',
  'at',
  'a',
  'time,',
  'and',
  'treats',
  'your',
  'product',
  'like',
  'our',
  'own.',
];

export default function Profile() {
  const sectionRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  const photoACardRef = useRef<HTMLDivElement>(null);
  const photoBCardRef = useRef<HTMLDivElement>(null);
  const photoCCardRef = useRef<HTMLDivElement>(null);
  const photoDCardRef = useRef<HTMLDivElement>(null);

  const photoAInnerRef = useRef<HTMLDivElement>(null);
  const photoBInnerRef = useRef<HTMLDivElement>(null);
  const photoCInnerRef = useRef<HTMLDivElement>(null);
  const photoDInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const statement = statementRef.current;
      if (!section || !statement) return;

      // 1. Text progressive character fill reveal on scroll
      const chars = statement.querySelectorAll('.char-reveal');
      if (chars.length > 0) {
        gsap.fromTo(
          chars,
          { opacity: 0.18 },
          {
            opacity: 1,
            stagger: 0.03,
            ease: 'none',
            scrollTrigger: {
              trigger: statement,
              start: 'top 78%',
              end: 'bottom 45%',
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Parallax Animations (Desktop & Tablet)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        // Outer photo card frames move UP as user scrolls DOWN
        const cardConfigs = [
          { card: photoACardRef.current, fromY: 60, toY: -150 },
          { card: photoBCardRef.current, fromY: 100, toY: -260 },
          { card: photoCCardRef.current, fromY: 70, toY: -170 },
          { card: photoDCardRef.current, fromY: 85, toY: -210 },
        ];

        cardConfigs.forEach(({ card, fromY, toY }) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: fromY },
            {
              y: toY,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        });

        // Inner images move DOWN inside the frame as user scrolls DOWN
        const photoPairs = [
          { card: photoACardRef.current, inner: photoAInnerRef.current },
          { card: photoBCardRef.current, inner: photoBInnerRef.current },
          { card: photoCCardRef.current, inner: photoCInnerRef.current },
          { card: photoDCardRef.current, inner: photoDInnerRef.current },
        ];

        photoPairs.forEach(({ card, inner }) => {
          if (!card || !inner) return;

          gsap.fromTo(
            inner,
            { yPercent: -20 },
            {
              yPercent: 20,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        });
      });

      // Refresh ScrollTrigger calculations after mounting
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="profile"
        className="relative w-full max-w-[1512px] mx-auto h-auto xl:h-[1360px] bg-bg select-none py-8 xl:py-0 px-[20px] md:px-[28px] xl:px-[40px] flex flex-col xl:block gap-10 xl:gap-0"
      >
        <h2 className="sr-only">Studio Profile</h2>

        {/* Media Item A: Team Photo 1 (Arjun) */}
        <div
          ref={photoACardRef}
          data-cursor="view"
          data-cursor-text="Arjun Singh Rajput"
          data-cursor-subtext="CEO & Head of Strategy"
          className="w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[440px] mx-auto xl:mx-0 xl:w-[326px] xl:h-[480px] xl:absolute xl:left-[40px] xl:top-[155px] z-[2] rounded-[12px] overflow-hidden bg-surface border border-line-solid shadow-2xl relative shrink-0 will-change-transform"
        >
          <div
            ref={photoAInnerRef}
            className="w-full h-[140%] -top-[20%] absolute left-0 will-change-transform"
          >
            <Image
              src="/team/arjun.jpg"
              alt="Arjun Singh Rajput — CEO & Head of Strategy"
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
        </div>

        {/* Statement Text with progressive letter-fill and mix-blend-mode: difference */}
        <div
          ref={statementRef}
          className="-mt-[80px] sm:-mt-[120px] xl:mt-0 xl:absolute xl:left-[210px] xl:top-[400px] w-full max-w-[950px] z-10 pointer-events-none relative px-2 xl:px-0"
          style={{ mixBlendMode: 'difference' }}
        >
          <p className="t-statement text-white leading-[1.18]">
            {statementWords.map((word, wordIdx) => (
              <span
                key={wordIdx}
                className="inline-block whitespace-nowrap mr-[0.28em]"
              >
                {word.split('').map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="char-reveal inline-block opacity-20 will-change-[opacity]"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </div>

        {/* Media Item B: Team Photo 2 (Jatin) */}
        <div
          ref={photoBCardRef}
          data-cursor="view"
          data-cursor-text="Jatin Khetan"
          data-cursor-subtext="CFO & Head of Product & Design"
          className="w-full max-w-[340px] sm:max-w-[440px] h-[420px] sm:h-[520px] mx-auto xl:mx-0 xl:w-[452px] xl:h-[660px] xl:absolute xl:right-[40px] xl:top-[380px] z-[2] rounded-[12px] overflow-hidden bg-surface border border-line-solid shadow-2xl relative shrink-0 will-change-transform"
        >
          <div
            ref={photoBInnerRef}
            className="w-full h-[140%] -top-[20%] absolute left-0 will-change-transform"
          >
            <Image
              src="/team/jatin.jpg"
              alt="Jatin Khetan — CFO & Head of Product & Design"
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
        </div>

        {/* Media Item C: Team Photo 3 (Somesh) */}
        <div
          ref={photoCCardRef}
          data-cursor="view"
          data-cursor-text="Somesh Rajput"
          data-cursor-subtext="CTO & Head of Engineering"
          className="w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[440px] mx-auto xl:mx-0 xl:w-[326px] xl:h-[480px] xl:absolute xl:left-[40px] xl:top-[842px] z-[2] rounded-[12px] overflow-hidden bg-surface border border-line-solid shadow-2xl relative shrink-0 will-change-transform"
        >
          <div
            ref={photoCInnerRef}
            className="w-full h-[140%] -top-[20%] absolute left-0 will-change-transform"
          >
            <Image
              src="/team/somesh.jpeg"
              alt="Somesh Rajput — CTO & Head of Engineering"
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
        </div>

        {/* Media Item D: Team Photo 4 (Parth) */}
        <div
          ref={photoDCardRef}
          data-cursor="view"
          data-cursor-text="Parth Garg"
          data-cursor-subtext="COO & Head of Operations"
          className="w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[440px] mx-auto xl:mx-0 xl:w-[326px] xl:h-[480px] xl:absolute xl:left-[480px] xl:top-[940px] z-[2] rounded-[12px] overflow-hidden bg-surface border border-line-solid shadow-2xl relative shrink-0 will-change-transform"
        >
          <div
            ref={photoDInnerRef}
            className="w-full h-[140%] -top-[20%] absolute left-0 will-change-transform"
          >
            <Image
              src="/team/parth.jpeg"
              alt="Parth Garg — COO & Head of Operations"
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
        </div>

        {/* Closing Block — Positioned on right side below Jatin's photo */}
        <div className="w-full max-w-[452px] mx-auto xl:mx-0 xl:absolute xl:right-[40px] xl:top-[1060px] z-10">
          <p className="t-body text-fg-muted">
            We started GLAD studio because founders kept losing months to agencies that overpromised and left them with code they couldn&apos;t maintain. So we built something different —{' '}
            <strong className="text-fg font-semibold">
              a tiny, senior team
            </strong>{' '}
            that works on a small number of projects at a time and ships every week.
          </p>
          <div className="mt-[24px]">
            <PillButton href="/about">About the Studio</PillButton>
          </div>
        </div>
      </section>

      {/* Section Eyebrow (GLD® — 05 duplicate intentional) */}
      <SectionEyebrow
        left={<>HOW WE SHIP <span lang="hi">प्रक्रिया</span></>}
        index="(GLD® — 05)"
        right="PREDICTABLE PROCESS"
      />
    </>
  );
}
