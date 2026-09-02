'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PillButton from '@/components/ui/PillButton';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

export default function Intro() {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!videoInnerRef.current || !videoWrapperRef.current) return;

      gsap.fromTo(
        videoInnerRef.current,
        { yPercent: 10 },
        {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Section Eyebrow 01 positioned directly above the photo with underline below it */}
      <SectionEyebrow
        data-intro="eyebrow"
        left={<>STUDIO OVERVIEW <span lang="hi">स्टूडियो</span></>}
        index="(GLD® — 01)"
        right="PRODUCT ENGINEERING"
      />

      <section className="relative w-full h-auto xl:h-[1240px] bg-bg select-none px-[20px] md:px-[28px] xl:px-[40px] py-8 xl:py-0 flex flex-col xl:block gap-8 xl:gap-0">
        {/* Video Card — Positioned directly below GLD 1 eyebrow with inner scroll parallax */}
        <div
          ref={videoWrapperRef}
          className="w-full max-w-[500px] h-[500px] md:h-[640px] mx-auto xl:mx-0 xl:w-[min(440px,28vw)] xl:h-[806px] xl:absolute xl:left-[40px] xl:top-[48px] rounded-[12px] overflow-hidden z-20 bg-surface border border-line-solid shadow-2xl relative shrink-0"
          data-cursor="view"
        >
          <div
            ref={videoInnerRef}
            className="w-full h-[124%] -top-[12%] absolute left-0 will-change-transform"
          >
            <video
              src="/products/video/AQP1fm4kTYB21XtYfeTyI6hJSGmw2X8xl0SZmeqYQuNePq1Fxqdi6F9QRDGYrRYD0iyZ0qpjyda2qjUWJsci5Q5tEQWqOok4%20(1).mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover block rounded-[12px]"
            />
          </div>
        </div>

        {/* Statement — Senior team of four statement */}
        <div className="xl:absolute xl:left-[calc(min(440px,28vw)+48px)] xl:right-[40px] xl:top-[64px] z-10 max-w-[860px] w-auto">
          <p className="t-heading-sm text-fg">
            A senior team of four
            <sup
              style={{ fontSize: '0.42em', verticalAlign: 'super' }}
              className="font-normal tracking-normal ml-0.5"
            >
              ™
            </sup>{' '}
            turning ideas into shipped web, mobile and AI products — in weeks, not quarters.
          </p>
        </div>

        {/* Contact PillButton */}
        <div className="xl:absolute xl:left-[calc(min(440px,28vw)+48px)] xl:top-[250px] z-10">
          <PillButton calLink="arjun-rajput-2mdsis">Book a Call</PillButton>
        </div>

        {/* Word Rail positioned at top: 390px on desktop, or normal flow in mobile/tablet */}
        <div className="xl:absolute xl:top-[390px] xl:left-0 w-full z-[5] pointer-events-none my-4 xl:my-0">
          <WordRail
            items={['Independent', 'Senior Team', 'Product Studio', 'India-Based']}
            contentClassName="px-[20px] md:px-[28px] xl:px-[40px]"
          />
        </div>

        {/* Core Tech Stack & Client Partners Container — Strictly bounded between left & right: 40px */}
        <div className="w-full xl:w-auto xl:absolute xl:left-[calc(min(440px,28vw)+48px)] xl:right-[40px] xl:top-[490px] z-10">
          <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-3">
            Core Production Stack
          </span>

          {/* Mobile & Tablet 2-Column Grid (<1200px) */}
          <div className="grid grid-cols-2 gap-3 xl:hidden w-full">
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center gap-3 border border-line-solid px-4 hover:bg-surface-2 transition-colors duration-200"
            >
              <svg width="24" height="24" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M63.7076 110.284C60.848 113.885 55.0502 111.912 54.9836 107.314L53.9738 37.0689L99.4437 37.0689C106.214 37.0689 110.027 44.8252 105.787 50.1652L63.7076 110.284Z" fill="#3ECF8E" />
                <path d="M45.317 2.50702C48.1766 -1.09423 53.9744 0.878775 54.041 5.47718L54.3484 75.7225L9.58094 75.7225C2.81036 75.7225 -1.00244 67.9662 3.23724 62.6262L45.317 2.50702Z" fill="#3ECF8E" />
              </svg>
              <span className="text-[16px] font-semibold text-fg">Supabase</span>
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center gap-3 border border-line-solid px-4 hover:bg-surface-2 transition-colors duration-200"
            >
              <svg width="22" height="20" viewBox="0 0 116 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-fg shrink-0">
                <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
              </svg>
              <span className="text-[16px] font-semibold text-fg">Vercel</span>
            </a>
            <a
              href="https://openai.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center gap-3 border border-line-solid px-4 hover:bg-surface-2 transition-colors duration-200"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-fg shrink-0">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5z" />
              </svg>
              <span className="text-[16px] font-semibold text-fg">OpenAI</span>
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center gap-3 border border-line-solid px-4 hover:bg-surface-2 transition-colors duration-200"
            >
              <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#087ea4] shrink-0">
                <circle cx="0" cy="0" r="2.05" fill="#087ea4"/>
                <g stroke="#087ea4" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              <span className="text-[16px] font-semibold text-fg">React 19</span>
            </a>
            <a
              href="https://flutter.dev"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="col-span-2 h-[80px] bg-surface rounded-[12px] flex items-center justify-center gap-3 border border-line-solid px-4 hover:bg-surface-2 transition-colors duration-200"
            >
              <svg width="22" height="24" viewBox="0 0 166 202" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M100.866 0L0 100.866L31.2545 132.121L163.375 0H100.866Z" fill="#02569B" />
                <path d="M100.866 99.402L38.4485 161.82L69.703 193.075L132.121 130.657L163.375 99.402H100.866Z" fill="#0175C2" />
                <path d="M69.703 193.075L100.866 161.82L132.121 193.075L100.866 224.329L69.703 193.075Z" fill="#02569B" />
                <path d="M100.866 161.82L132.121 130.657L163.375 161.82L132.121 193.075L100.866 161.82Z" fill="#29B6F6" />
              </svg>
              <span className="text-[16px] font-semibold text-fg">Flutter</span>
            </a>
          </div>

          {/* Desktop 5×2 Checkerboard Grid (>=1200px) */}
          <div className="hidden xl:grid grid-cols-5 gap-3 w-full">
            {/* Row 1, Col 1: Supabase */}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="col-start-1 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none"
            >
              <svg width="28" height="28" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M63.7076 110.284C60.848 113.885 55.0502 111.912 54.9836 107.314L53.9738 37.0689L99.4437 37.0689C106.214 37.0689 110.027 44.8252 105.787 50.1652L63.7076 110.284Z" fill="#3ECF8E" />
                <path d="M45.317 2.50702C48.1766 -1.09423 53.9744 0.878775 54.041 5.47718L54.3484 75.7225L9.58094 75.7225C2.81036 75.7225 -1.00244 67.9662 3.23724 62.6262L45.317 2.50702Z" fill="#3ECF8E" />
              </svg>
              <span className="text-[15px] 2xl:text-[17px] font-semibold text-fg">Supabase</span>
            </a>

            {/* Row 1, Col 3: Vercel */}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="col-start-3 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none"
            >
              <svg width="24" height="22" viewBox="0 0 116 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-fg shrink-0">
                <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
              </svg>
              <span className="text-[15px] 2xl:text-[17px] font-semibold text-fg">Vercel</span>
            </a>

            {/* Row 1, Col 5: OpenAI */}
            <a
              href="https://openai.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="col-start-5 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-fg shrink-0">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5z" />
              </svg>
              <span className="text-[15px] 2xl:text-[17px] font-semibold text-fg">OpenAI</span>
            </a>

            {/* Row 2, Col 2: React 19 */}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="col-start-2 row-start-2 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none"
            >
              <svg width="28" height="28" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#087ea4] shrink-0">
                <circle cx="0" cy="0" r="2.05" fill="#087ea4"/>
                <g stroke="#087ea4" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              <span className="text-[15px] 2xl:text-[17px] font-semibold text-fg">React 19</span>
            </a>

            {/* Row 2, Col 4: Flutter */}
            <a
              href="https://flutter.dev"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="col-start-4 row-start-2 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none"
            >
              <svg width="24" height="26" viewBox="0 0 166 202" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M100.866 0L0 100.866L31.2545 132.121L163.375 0H100.866Z" fill="#02569B" />
                <path d="M100.866 99.402L38.4485 161.82L69.703 193.075L132.121 130.657L163.375 99.402H100.866Z" fill="#0175C2" />
                <path d="M69.703 193.075L100.866 161.82L132.121 193.075L100.866 224.329L69.703 193.075Z" fill="#02569B" />
                <path d="M100.866 161.82L132.121 130.657L163.375 161.82L132.121 193.075L100.866 161.82Z" fill="#29B6F6" />
              </svg>
              <span className="text-[15px] 2xl:text-[17px] font-semibold text-fg">Flutter</span>
            </a>
          </div>

          {/* Second Grid: Client Partners (5×2 Checkerboard Grid) */}
          <div className="mt-8 xl:mt-10 w-full">
            <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-3">
              Verified Client Partners
            </span>

            {/* Mobile & Tablet Client Grid (<1200px) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xl:hidden w-full">
              <div className="h-[96px] bg-surface rounded-[12px] flex items-center justify-center gap-3.5 px-4 border border-line-solid select-none cursor-default">
                <img src="/clients/prayas.jpg" alt="Prayas NGO" className="w-12 h-12 rounded-full object-cover shadow-sm border border-line-solid shrink-0" />
                <span className="text-[15px] font-semibold text-fg">Prayas NGO</span>
              </div>
              <div className="h-[96px] bg-surface rounded-[12px] flex items-center justify-center gap-3.5 px-4 border border-line-solid select-none cursor-default">
                <img src="/clients/gla-canteen.png" alt="GLA Canteen" className="w-12 h-12 rounded-full object-contain p-1 bg-white shadow-sm border border-line-solid shrink-0" />
                <span className="text-[15px] font-semibold text-fg">GLA Canteen</span>
              </div>
              <div className="h-[96px] bg-surface rounded-[12px] flex items-center justify-center gap-3.5 px-4 border border-line-solid select-none cursor-default">
                <img src="/clients/earth-travels.png" alt="Earth Travels India" className="w-12 h-12 rounded-full object-contain p-1 bg-white shadow-sm border border-line-solid shrink-0" />
                <span className="text-[15px] font-semibold text-fg">Earth Travels</span>
              </div>
            </div>

            {/* Desktop 5×2 Client Checkerboard Grid (>=1200px) */}
            <div className="hidden xl:grid grid-cols-5 gap-3 w-full">
              {/* Row 1, Col 1: Prayas NGO */}
              <div
                className="col-start-1 row-start-1 bg-surface border border-line-solid rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none cursor-default"
              >
                <img src="/clients/prayas.jpg" alt="Prayas NGO" className="w-[52px] h-[52px] rounded-full object-cover shadow-sm border border-line-solid" />
                <span className="text-[14.5px] 2xl:text-[15.5px] font-semibold text-fg text-center leading-tight">Prayas NGO</span>
              </div>

              {/* Row 1, Col 3: GLA Canteen */}
              <div
                className="col-start-3 row-start-1 bg-surface border border-line-solid rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none cursor-default"
              >
                <img src="/clients/gla-canteen.png" alt="GLA Canteen" className="w-[52px] h-[52px] rounded-full object-contain p-1 bg-white shadow-sm border border-line-solid" />
                <span className="text-[14.5px] 2xl:text-[15.5px] font-semibold text-fg text-center leading-tight">GLA Canteen</span>
              </div>

              {/* Row 1, Col 5: Earth Travels India */}
              <div
                className="col-start-5 row-start-1 bg-surface border border-line-solid rounded-[12px] flex flex-col items-center justify-center gap-2 p-3.5 h-[120px] 2xl:h-[130px] select-none cursor-default"
              >
                <img src="/clients/earth-travels.png" alt="Earth Travels India" className="w-[52px] h-[52px] rounded-full object-contain p-1 bg-white shadow-sm border border-line-solid" />
                <span className="text-[14px] 2xl:text-[15px] font-semibold text-fg text-center leading-tight">Earth Travels</span>
              </div>

              {/* Row 2, Col 2: 10,000+ Reach */}
              <div
                className="col-start-2 row-start-2 bg-surface border border-line-solid rounded-[12px] flex flex-col items-center justify-center p-3.5 h-[120px] 2xl:h-[130px] select-none cursor-default text-center"
              >
                <span className="text-[18px] 2xl:text-[20px] font-bold text-accent">10,000+</span>
                <span className="text-[12px] text-fg-muted font-medium mt-0.5">Community Reach</span>
              </div>

              {/* Row 2, Col 4: Zero Discrepancies */}
              <div
                className="col-start-4 row-start-2 bg-surface border border-line-solid rounded-[12px] flex flex-col items-center justify-center p-3.5 h-[120px] 2xl:h-[130px] select-none cursor-default text-center"
              >
                <span className="text-[18px] 2xl:text-[20px] font-bold text-accent">Zero</span>
                <span className="text-[12px] text-fg-muted font-medium mt-0.5">Stock Discrepancies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Eyebrow following Intro */}
      <SectionEyebrow
        left={<>SELECTED WORK <span lang="hi">परियोजनाएँ</span></>}
        index="(GLD® — 02)"
        right="SHIPPED PROJECTS"
      />
    </>
  );
}
