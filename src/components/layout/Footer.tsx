'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import PillButton from '@/components/ui/PillButton';
import { siteConfig } from '@/data/site';

export interface FooterProps {
  variant?: 'default' | 'work-detail';
  isWorkDetail?: boolean;
}

interface RollingFooterLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  className?: string;
  isAccentHover?: boolean;
  isMedium?: boolean;
}

function RollingFooterLink({
  href,
  label,
  onClick,
  target,
  rel,
  className = '',
  isAccentHover = false,
  isMedium = false,
}: RollingFooterLinkProps) {
  const isExternal =
    target === '_blank' ||
    href.startsWith('mailto:') ||
    href.startsWith('http');
  const Component = isExternal ? 'a' : Link;

  return (
    <Component
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      data-cursor="link"
      data-rolling-link="true"
      className={clsx(
        'group/flink relative inline-flex items-center select-none py-[1.5px] overflow-hidden w-fit',
        className
      )}
    >
      <span className="relative inline-flex overflow-hidden py-[1px]">
        {label.split('').map((char, index) => (
          <span
            key={index}
            className="relative inline-block overflow-hidden pb-[3px] -mb-[3px]"
          >
            {/* Primary letter: translates from 0% to -100% on hover */}
            <span
              className={clsx(
                'block pb-[3px] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/flink:-translate-y-full group-focus-visible/flink:-translate-y-full will-change-transform leading-normal',
                isMedium ? 'font-medium text-[14px]' : 'font-normal text-[13px]',
                isAccentHover
                  ? 'text-fg group-hover/flink:text-accent'
                  : 'text-fg-muted group-hover/flink:text-fg'
              )}
              style={{
                transitionDelay: `${index * 14}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>

            {/* Duplicate letter: translates from +100% to 0% on hover */}
            <span
              aria-hidden="true"
              className={clsx(
                'absolute inset-0 block pb-[3px] translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/flink:translate-y-0 group-focus-visible/flink:translate-y-0 will-change-transform leading-normal',
                isMedium ? 'font-medium text-[14px]' : 'font-normal text-[13px]',
                isAccentHover
                  ? 'text-fg group-hover/flink:text-accent'
                  : 'text-fg-muted group-hover/flink:text-fg'
              )}
              style={{
                transitionDelay: `${index * 14}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}

const filmstripImages = [
  { src: '/products/glad-hms/glad-hms-1.png', w: 176, h: 190, offset: 'translate-y-[12px]' },
  { src: '/work/prayas-app/prayas-app-1.png', w: 176, h: 140, offset: '-translate-y-[10px]' },
  { src: '/products/settledesk/settledesk-1.png', w: 176, h: 220, offset: 'translate-y-[8px]' },
  { src: '/work/ai-mock-interview/mock-interview-cover.png', w: 176, h: 160, offset: '-translate-y-[14px]' },
  { src: '/work/stock-management/canteen-cover.png', w: 176, h: 240, offset: 'translate-y-0' },
  { src: '/work/lead-enrichment/lead-enrichment-1.png', w: 176, h: 130, offset: 'translate-y-[16px]' },
  { src: '/products/glad-hms/glad-hms-2.png', w: 176, h: 210, offset: '-translate-y-[8px]' },
  { src: '/products/settledesk/settledesk-2.png', w: 176, h: 175, offset: 'translate-y-[6px]' },
];

export default function Footer({
  variant = 'default',
  isWorkDetail = false,
}: FooterProps) {
  const isDetail = isWorkDetail || variant === 'work-detail';
  const footerRef = useRef<HTMLElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const watermarkContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const strip = filmstripRef.current;
    if (!strip) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Continuous filmstrip loop
      gsap.fromTo(
        strip,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 32,
          ease: 'none',
          repeat: -1,
        }
      );

      // 2. Smooth slide-up watermark reveal as user reaches footer
      if (watermarkRef.current && watermarkContainerRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          {
            yPercent: 70,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: watermarkContainerRef.current,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (
      window as unknown as {
        lenis?: {
          scrollTo: (
            target: number | string | HTMLElement,
            opts?: { duration?: number }
          ) => void;
        };
      }
    ).lenis;

    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const serviceLinks = [
    { label: 'MVP Development', href: '/services/mvp-development' },
    { label: 'Web Applications', href: '/services/web-application-development' },
    { label: 'Mobile Apps', href: '/services/mobile-app-development' },
    { label: 'AI Solutions', href: '/services/ai-solutions' },
    { label: 'Business Automation', href: '/services/business-automation' },
  ];

  const studioLinks = [
    { label: 'All Products', href: '/products' },
    { label: 'GLAD HMS', href: '/products/glad-hms' },
    { label: 'SettleDesk', href: '/products/settledesk' },
    { label: 'Insights', href: '/insights/what-is-ai-agent-development' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/#process' },
    { label: 'About', href: '/about' },
  ];

  const connectLinks = [
    { label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { label: 'Upwork', href: siteConfig.socials.upwork },
    { label: 'LinkedIn', href: siteConfig.socials.linkedin },
    { label: 'Instagram', href: siteConfig.socials.instagram },
    { label: 'X', href: siteConfig.socials.x },
    { label: 'Reddit', href: siteConfig.socials.reddit },
  ];

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full bg-bg select-none pt-8 xl:pt-12 overflow-hidden"
    >
      {/* 1. Full-Bleed Ragged Filmstrip with Automatic Continuous Flow */}
      <div className="w-full overflow-hidden mb-[48px] xl:mb-[70px] select-none pointer-events-none">
        <div
          ref={filmstripRef}
          className="flex items-center gap-[16px] w-max will-change-transform py-4"
        >
          {[...filmstripImages, ...filmstripImages].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[10px] overflow-hidden bg-surface border border-line-solid relative shrink-0 ${item.offset}`}
              style={{
                width: `${item.w}px`,
                height: `${item.h}px`,
              }}
            >
              <Image
                src={item.src}
                alt={`GLAD Studio portfolio visual ${idx + 1}`}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Word Rail */}
      <WordRail items={siteConfig.footer.wordRail} />

      {/* 3. Mission Paragraph */}
      <div className="mt-[48px] xl:mt-[70px] px-[20px] md:px-[28px] xl:px-[40px] text-center">
        <p className="t-body text-fg-muted max-w-[720px] mx-auto leading-[1.55]">
          {siteConfig.footer.mission}
        </p>
      </div>

      {/* 4. CTA Line & Book a Discovery Call Button */}
      <div className="mt-[48px] xl:mt-[64px] px-[20px] text-center flex flex-col items-center gap-5">
        <h3 className="t-heading-sm text-fg leading-tight">
          Let&apos;s build something great together.
        </h3>
        <PillButton calLink="arjun-rajput-2mdsis">Book a Discovery Call</PillButton>
      </div>

      {/* 5. Link Bar with 5 Groups */}
      <div className="mt-[48px] md:mt-[56px] xl:mt-[80px] px-[20px] md:px-[28px] xl:px-[40px] pt-[32px] md:pt-[36px] pb-[40px] md:pb-[48px] border-t border-line grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 text-[13px]">
        {/* Group 1: Back To Top */}
        <div className="flex flex-col">
          <span className="font-semibold text-fg uppercase tracking-wider">
            Navigation
          </span>
          <div className="mt-2.5 flex flex-col gap-1 link-column-group">
            {isDetail ? (
              <RollingFooterLink
                href={`mailto:${siteConfig.contact.email}`}
                label="Email Us"
                isAccentHover
                isMedium
              />
            ) : (
              <RollingFooterLink
                href="#top"
                label="Back To Top ↑"
                onClick={handleBackToTop}
                isAccentHover
                isMedium
              />
            )}
          </div>
        </div>

        {/* Group 2: Services */}
        <div className="flex flex-col">
          <span className="font-semibold text-fg uppercase tracking-wider">
            Services
          </span>
          <div className="mt-2.5 flex flex-col gap-1 text-fg-muted link-column-group">
            {serviceLinks.map((link) => (
              <RollingFooterLink
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>

        {/* Group 3: Studio */}
        <div className="flex flex-col">
          <span className="font-semibold text-fg uppercase tracking-wider">
            Studio
          </span>
          <div className="mt-2.5 flex flex-col gap-1 text-fg-muted link-column-group">
            {studioLinks.map((link) => (
              <RollingFooterLink
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>

        {/* Group 4: Connect */}
        <div className="flex flex-col">
          <span className="font-semibold text-fg uppercase tracking-wider">
            Connect
          </span>
          <div className="mt-2.5 flex flex-col gap-1 text-fg-muted link-column-group">
            {connectLinks.map((link) => (
              <RollingFooterLink
                key={link.label}
                href={link.href}
                label={link.label}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              />
            ))}
          </div>
        </div>

        {/* Group 5: Legal & Copyright */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <span className="font-semibold text-fg uppercase tracking-wider">
            {siteConfig.footer.copyright}
          </span>
          <div className="mt-2.5 flex flex-col gap-1 text-fg-muted link-column-group">
            <RollingFooterLink
              href="/privacy"
              label="Privacy Policy"
            />
            <RollingFooterLink
              href="/terms"
              label="Terms of Service"
            />
          </div>
        </div>
      </div>

      {/* 6. Giant Faded Year Display Watermark (Centered with Increased Visibility & Smooth Scroll Slide-Up) */}
      <div
        ref={watermarkContainerRef}
        className="w-full border-t border-line overflow-hidden select-none px-[20px] md:px-[28px] xl:px-[40px] pt-6 sm:pt-10 md:pt-14 xl:pt-16 pb-0 flex justify-center text-center"
      >
        <div
          ref={watermarkRef}
          className="text-fg/[0.15] font-normal leading-[0.80] tracking-[-0.045em] whitespace-nowrap select-none will-change-transform text-center mx-auto -mb-[0.06em] translate-y-[0.02em]"
          style={{
            fontSize: 'clamp(54px, 18vw, 320px)',
            fontFeatureSettings: '"zero" 1',
          }}
          aria-hidden="true"
        >
          ©2026.
        </div>
      </div>
    </footer>
  );
}
