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
    label: 'Office: Vrindavan, India',
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
    label: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`,
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
  const [showEnquiryForm, setShowEnquiryForm] = useState(true);

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

      // 2. Parallax sliding effect: active on desktop, gentle on mobile to avoid card clipping
      if (imageFrameRef.current && imageInnerRef.current) {
        ScrollTrigger.matchMedia({
          '(min-width: 1024px)': function () {
            gsap.fromTo(
              imageInnerRef.current,
              { y: 0 },
              {
                y: -140,
                ease: 'none',
                scrollTrigger: {
                  trigger: imageFrameRef.current,
                  start: 'top 140px',
                  end: 'bottom 20px',
                  scrub: 0.35,
                },
              }
            );
          },
          '(max-width: 1023px)': function () {
            gsap.fromTo(
              imageInnerRef.current,
              { y: 0 },
              {
                y: -24,
                ease: 'none',
                scrollTrigger: {
                  trigger: imageFrameRef.current,
                  start: 'top 140px',
                  end: 'bottom 40px',
                  scrub: 0.3,
                },
              }
            );
          },
        });
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
      <div className="px-[20px] md:px-[28px] xl:px-[40px] pt-[24px] sm:pt-[28px] md:pt-[44px] xl:pt-[56px] pb-[32px] md:pb-[48px] xl:pb-[60px] grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[370px_1fr] gap-[28px] sm:gap-[36px] lg:gap-[52px] xl:gap-[72px] items-center relative z-20">
        {/* Left: Minimal Swiss Typography Poster Card with Black Background Base & Smooth Slide Scroll Effect */}
        <div
          ref={imageFrameRef}
          data-cursor="pointer"
          className="relative w-full aspect-[4/4.8] sm:aspect-[4/4.85] lg:aspect-[4/4.8] max-w-[270px] sm:max-w-[300px] xl:max-w-[330px] mx-auto lg:mx-0 lg:ml-[24px] xl:ml-[36px] will-change-transform group z-30 pointer-events-auto"
        >
          {/* Black Background Base Card */}
          <div className="absolute inset-0 rounded-[20px] bg-[#0A0A0B] border border-black/30 shadow-[0_20px_48px_rgba(0,0,0,0.20)] transition-all duration-300 group-hover:border-black/50 group-hover:shadow-[0_24px_56px_rgba(0,0,0,0.26)]" />

          {/* Sliding Image Card on Top of Black Background */}
          <div
            ref={imageInnerRef}
            className="absolute top-[2px] md:top-[4px] bottom-[30px] md:bottom-[36px] left-[7px] md:left-[8px] right-[7px] md:right-[8px] rounded-[13px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.18)] will-change-transform z-10 transition-shadow duration-300 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.26)]"
          >
            <Image
              src="/brand/contact-typography.svg"
              alt="GLAD Studio — Project Initiation & Discovery Specimen"
              fill
              priority
              unoptimized
              className="object-cover block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Right: Stacked Contact Channel Links with Rolling Text & Silky Slow Animated Underline (Right Aligned) */}
        <div ref={linksRef} className="flex flex-col border-t border-line w-full max-w-full lg:max-w-[540px] xl:max-w-[580px] ml-auto">
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
              className="contact-row group relative flex items-center justify-between py-[12px] sm:py-[14px] md:py-[16px] xl:py-[18px] border-b border-line text-fg transition-colors duration-200 select-none overflow-hidden cursor-pointer"
            >
              {/* Channel Label with Smooth Slide-Up Replace Animation (Full Descender Clearance) */}
              <span className="relative inline-block overflow-hidden h-[1.7em] text-[13.5px] sm:text-[14.5px] md:text-[15.5px] xl:text-[16.5px] font-medium text-fg leading-[1.3]">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full text-fg leading-[1.3] pt-[0.15em] pb-[0.25em]">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 text-fg font-medium leading-[1.3] pt-[0.15em] pb-[0.25em]"
                >
                  {item.label}
                </span>
              </span>

              {/* Diagonal Arrow ↗ */}
              <span className="text-[13px] sm:text-[14px] md:text-[16px] text-fg/80 group-hover:text-fg transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block shrink-0 ml-3">
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
      <div className="w-full relative z-10 bg-bg border-y border-line overflow-hidden py-2.5 sm:py-3">
        <Marquee speed={32}>
          <div className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 text-[12px] sm:text-[13px] md:text-[14px] font-medium text-fg uppercase tracking-wider whitespace-nowrap">
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
      <div className="px-[20px] md:px-[28px] xl:px-[40px] pt-[24px] sm:pt-[28px] md:pt-[40px] xl:pt-[48px] pb-[18px] sm:pb-[20px] md:pb-[28px] xl:pb-[36px] overflow-hidden border-b border-line flex justify-center items-center text-center">
        <h1
          ref={headlineRef}
          className="t-display text-fg font-normal select-none whitespace-nowrap will-change-transform text-center overflow-hidden py-2"
          style={{
            fontSize: 'clamp(42px, 11.5vw, 190px)',
            lineHeight: 0.90,
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
      <div
        className={clsx(
          'px-[20px] md:px-[28px] xl:px-[40px] py-[16px] sm:py-[22px] md:py-[28px] flex items-center justify-between gap-3 transition-colors',
          !showEnquiryForm && 'border-b border-line'
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
          <span className="text-[11px] sm:text-[12px] font-semibold text-accent uppercase tracking-widest">
            Project Proposal & Scoping
          </span>
          <span className="text-fg-muted hidden sm:inline">•</span>
          <span className="text-[11.5px] sm:text-[13.5px] text-fg-muted">
            Direct response within 24 hours
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowEnquiryForm(!showEnquiryForm)}
          data-cursor="pointer"
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-line-solid bg-surface text-[12px] sm:text-[13px] font-medium text-fg hover:border-fg/40 hover:bg-surface-2 transition-all cursor-pointer shadow-sm shrink-0 active:scale-[0.98]"
        >
          <span>{showEnquiryForm ? 'Hide Form' : 'Send Direct Message'}</span>
          <span className="text-accent font-bold text-[13px] sm:text-[14px]">
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
              'px-[16px] sm:px-[28px] xl:px-[40px] py-[20px] sm:py-[32px] bg-surface/40 border-b border-line transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
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
      <SectionEyebrow
        left={
          <>
            <span className="hidden sm:inline">⊕ HELP CENTER <span lang="hi">सहायता</span></span>
            <span className="sm:hidden">⊕ HELP CENTER</span>
          </>
        }
        index="(GLD® — 11)"
        right="CLARIFICATIONS"
      />

      {/* 6. FAQ Accordion Section */}
      <Faq />

      {/* 7. Footer with Continuous Carousel */}
      <Footer />
    </main>
  );
}
