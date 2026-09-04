'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '@/components/ui/Marquee';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { siteConfig } from '@/data/site';
import { openCalModal } from '@/components/providers/CalProvider';

const contactChannels = [
  {
    label: 'Schedule a Discovery Call',
    href: siteConfig.contact.calUrl,
    calLink: siteConfig.contact.calLink,
    external: false,
  },
  {
    label: 'Office: Vrindavan, India.',
    href: 'https://maps.google.com/?q=Vrindavan,Uttar+Pradesh,India',
    external: true,
  },
  {
    label: 'Follow on Instagram',
    href: siteConfig.socials.instagram,
    external: true,
  },
  {
    label: 'Follow on LinkedIn',
    href: siteConfig.socials.linkedin,
    external: true,
  },
  {
    label: '+91 94572 45650',
    href: 'tel:+919457245650',
    external: true,
  },
  {
    label: 'contact@gladstudio.net',
    href: 'mailto:contact@gladstudio.net',
    external: false,
  },
];

export default function ContactPageClient() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Image card entrance animation
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
      }

      // 2. Subtle Parallax scroll effect on typography poster card
      if (imageFrameRef.current && imageInnerRef.current) {
        gsap.fromTo(
          imageInnerRef.current,
          { y: 0 },
          {
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: 'top 85%',
              end: 'bottom 10%',
              scrub: 0.6,
            },
          }
        );
      }

      // 3. Contact link rows entrance animation
      if (linksRef.current) {
        const rows = linksRef.current.querySelectorAll('.contact-row');
        gsap.fromTo(
          rows,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            delay: 0.1,
          }
        );
      }

      // 4. Giant "Contact Now" staggered character slide-up reveal
      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll('.contact-char');
        gsap.fromTo(
          chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Top Section: Overlapping Photo Card on Left + Refined Contact Channels on Right */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] pt-[20px] md:pt-[36px] xl:pt-[44px] pb-0 grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[410px_1fr] gap-[32px] lg:gap-[56px] xl:gap-[80px] items-start relative z-20">
        {/* Left: Minimal Swiss Typography Poster Card with Ambient Shadow & Hover Micro-Interaction */}
        <div
          ref={imageFrameRef}
          data-cursor="pointer"
          className="relative w-full aspect-[4/4.8] sm:aspect-[4/4.9] lg:aspect-[4/4.85] max-w-[370px] xl:max-w-[400px] rounded-[18px] overflow-hidden bg-[#FAFAF7] border border-line-solid shadow-[0_16px_40px_rgba(0,0,0,0.06)] will-change-transform group translate-y-[20px] md:translate-y-[52px] lg:translate-y-[76px] xl:translate-y-[88px] -mb-[40px] md:-mb-[72px] lg:-mb-[100px] z-30 pointer-events-auto transition-all duration-300 hover:border-fg/30 hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)]"
        >
          {/* Inner parallax container */}
          <div
            ref={imageInnerRef}
            className="absolute -top-[2%] left-0 w-full h-[106%] will-change-transform"
          >
            <Image
              src="/brand/contact-typography.svg"
              alt="GLAD Studio — Project Initiation & Discovery Specimen"
              fill
              priority
              unoptimized
              className="object-contain p-1 block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Right: Stacked Contact Channel Links with Rolling Text & Silky Slow Animated Underline (Right Aligned) */}
        <div ref={linksRef} className="flex flex-col border-t border-line w-full max-w-[520px] self-center ml-auto">
          {contactChannels.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              data-cal-link={'calLink' in item ? (item as { calLink?: string }).calLink : undefined}
              data-cal-config={'calLink' in item ? '{"layout":"month_view"}' : undefined}
              onClick={(e) => {
                if ('calLink' in item && (item as { calLink?: string }).calLink) {
                  e.preventDefault();
                  openCalModal((item as { calLink?: string }).calLink);
                }
              }}
              data-cursor="pointer"
              className="contact-row group relative flex items-center justify-between py-[12px] md:py-[14px] xl:py-[15px] border-b border-line text-fg transition-colors duration-200 select-none overflow-hidden cursor-pointer"
            >
              {/* Channel Label with Smooth Slide-Up Replace Animation (Full Descender Clearance) */}
              <span className="relative inline-block overflow-hidden h-[1.55em] pt-[0.05em] pb-[0.20em] text-[14px] md:text-[15.5px] xl:text-[16.5px] font-medium text-fg leading-[1.3]">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full text-fg leading-[1.3]">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-[0.05em] left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 text-fg font-medium leading-[1.3]"
                >
                  {item.label}
                </span>
              </span>

              {/* Diagonal Arrow ↗ */}
              <span className="text-[14px] md:text-[16px] text-fg/80 group-hover:text-fg transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block shrink-0 ml-3">
                ↗
              </span>

              {/* Silky Slow Left-to-Right Animated Underline */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-fg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
              />
            </a>
          ))}
        </div>
      </div>

      {/* 2. Full-Bleed Horizontal Word Rail Ticker (White background, light editorial style matching Palmer) */}
      <div className="w-full relative z-10 bg-bg border-y border-line overflow-hidden py-3">
        <Marquee speed={32}>
          <div className="flex items-center gap-14 pr-14 text-[13px] md:text-[14px] font-medium text-fg uppercase tracking-wider whitespace-nowrap">
            <span>Email Us</span>
            <span className="text-line">•</span>
            <span>24/7 Support</span>
            <span className="text-line">•</span>
            <span>Remote</span>
            <span className="text-line">•</span>
            <span>Async First</span>
            <span className="text-line">•</span>
            <span>Worldwide</span>
            <span className="text-line">•</span>
            <span>Fixed Scope</span>
            <span className="text-line">•</span>
            <span>Direct Partner Access</span>
            <span className="text-line">•</span>
          </div>
        </Marquee>
      </div>

      {/* 3. Giant Display Headline: "Contact Now" (Centered, t-display token, font-normal) */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] pt-[24px] md:pt-[36px] xl:pt-[44px] pb-[16px] md:pb-[24px] overflow-hidden border-b border-line flex justify-center items-center text-center">
        <h1
          ref={headlineRef}
          className="t-display text-fg font-normal select-none whitespace-nowrap will-change-transform text-center overflow-hidden py-1"
          style={{
            fontSize: 'clamp(56px, 13vw, 190px)',
            lineHeight: 0.88,
            letterSpacing: '-0.035em',
          }}
        >
          {'Contact Now'.split('').map((char, index) => (
            <span
              key={index}
              className={clsx(
                'inline-block contact-char will-change-transform',
                char === ' ' && 'w-[0.25em]'
              )}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
      </div>

      {/* 4. Interactive Quick Message Drawer / Enquiry Form Toggle */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] pt-[32px] pb-[16px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[12px] font-semibold text-accent uppercase tracking-widest">
            Project Proposal & Scoping
          </span>
          <span className="text-fg-muted hidden sm:inline">•</span>
          <span className="text-[13.5px] text-fg-muted hidden sm:inline">
            Direct response within 24 hours
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowEnquiryForm(!showEnquiryForm)}
          data-cursor="pointer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line-solid bg-surface text-[13px] font-medium text-fg hover:border-fg/40 hover:bg-surface-2 transition-all cursor-pointer shadow-sm"
        >
          <span>{showEnquiryForm ? 'Close Message Form' : 'Send Direct Message'}</span>
          <span className="text-accent transition-transform duration-300">
            {showEnquiryForm ? '−' : '+'}
          </span>
        </button>
      </div>

      {/* Expandable Smooth Animated Contact Form Drawer */}
      <div
        className={clsx(
          'grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden',
          showEnquiryForm ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={clsx(
              'px-[20px] md:px-[28px] xl:px-[40px] py-[32px] bg-surface/40 border-b border-line transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
              showEnquiryForm ? 'translate-y-0' : '-translate-y-4'
            )}
          >
            <div className="max-w-[720px] mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Section Eyebrow matching the reference design */}
      <div className="mt-[48px] xl:mt-[72px]">
        <SectionEyebrow
          left={<>⊕ HELP CENTER <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 6. FAQ Accordion Section */}
      <Faq />

      {/* 7. Footer with Continuous Carousel */}
      <Footer />
    </main>
  );
}
