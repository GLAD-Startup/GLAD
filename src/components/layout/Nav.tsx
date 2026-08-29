'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { siteConfig } from '@/data/site';

interface RollingNavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  isMobile?: boolean;
}

function RollingNavLink({
  href,
  label,
  onClick,
  className = '',
  isMobile = false,
}: RollingNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      data-cursor="link"
      className={`group relative inline-flex items-center select-none overflow-hidden ${className}`}
    >
      <span className="relative inline-flex overflow-hidden">
        {label.split('').map((char, index) => (
          <span
            key={index}
            className="relative inline-block overflow-hidden"
          >
            {/* Primary letter: in-flow block, translates from 0% to -100% on hover */}
            <span
              className={`block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform ${
                isMobile ? 'text-fg font-normal' : 'text-fg font-medium'
              }`}
              style={{
                transitionDelay: `${index * 20}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>

            {/* Duplicate letter: absolute inset-0 starts at +100% and lands at exact 0% on hover */}
            <span
              aria-hidden="true"
              className={`absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 will-change-transform ${
                isMobile ? 'text-fg font-normal' : 'text-fg font-medium'
              }`}
              style={{
                transitionDelay: `${index * 20}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </span>
    </Link>
  );
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth headroom auto-collapse on scroll down, open on scroll up (slow & cinematic)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop;
          const delta = currentScrollY - lastScrollY.current;

          // Always show when near the top of the page
          if (currentScrollY <= 80) {
            setNavVisible(true);
          } else if (delta > 8 && currentScrollY > 100) {
            // Scrolling down -> slowly and smoothly glide header up out of view
            setNavVisible(false);
          } else if (delta < -8) {
            // Scrolling up -> slowly and smoothly glide header back down into view
            setNavVisible(true);
          }

          lastScrollY.current = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center w-full select-none">
        <nav
          data-intro="nav"
          className={clsx(
            'w-full max-w-[1600px] h-[84px] bg-bg pointer-events-auto relative will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.25,1,0.5,1)]',
            navVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <div className="w-full h-full px-[20px] md:px-[28px] xl:px-[24px] relative flex items-center justify-between">
            {/* Left Column: GLAD Studio Logo (Increased size) */}
            <div className="flex items-center">
              <Link
                href="/"
                data-cursor="link"
                className="flex items-center transition-opacity duration-200 hover:opacity-85"
                aria-label={`${siteConfig.name} Home`}
              >
                <img
                  src="/brand/website-logo-white-background-compatible.png"
                  alt={siteConfig.name}
                  style={{ height: '42px', width: 'auto' }}
                  className="block object-contain"
                />
              </Link>
            </div>

            {/* Desktop & Tablet Center Column (>=810px) */}
            <div className="hidden min-[810px]:flex absolute left-[46%] -translate-x-1/2 flex-col justify-center gap-1">
              <span className="text-[13px] font-semibold text-fg leading-tight">
                Quick Links
              </span>
              <div className="group/links text-[13.5px] font-medium text-fg leading-tight flex items-center flex-wrap">
                {siteConfig.navLinks.map((link, idx) => (
                  <span
                    key={link.label}
                    className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100"
                  >
                    <RollingNavLink href={link.href} label={link.label} />
                    {idx < siteConfig.navLinks.length - 1 && (
                      <span className="text-fg-dim select-none mr-1.5">,</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop & Tablet Right Column (>=810px) */}
            <div className="hidden min-[810px]:flex flex-col items-end text-right justify-center gap-1">
              <span className="text-[13px] font-semibold text-fg leading-tight">
                Based in {siteConfig.location.city} <span lang="hi">{siteConfig.location.countryHi}</span>
              </span>
              <span className="text-[13px] font-normal text-fg-muted leading-tight">
                Software & AI Product Studio
              </span>
            </div>

            {/* Mobile Hamburger Button (<810px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-[810px]:hidden p-2 text-fg focus:outline-none flex flex-col items-end justify-center gap-1.5 w-9 h-9"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <span
                className={`w-6 h-[1.5px] bg-fg transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-fg transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-fg transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
                }`}
              />
            </button>
          </div>

          {/* Nav Hairline (animated on intro) */}
          <div
            data-intro="nav-hairline"
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-line origin-left will-change-transform"
          />
        </nav>
      </div>

      {/* Full-Screen Mobile Overlay (<810px) */}
      {mobileMenuOpen && (
        <div className="min-[810px]:hidden fixed inset-0 bg-bg z-[9998] flex flex-col justify-between p-[20px] pt-[110px] pb-[40px] animate-fadeIn">
          {/* Navigation Links at 34px */}
          <div className="flex flex-col gap-6 group/moblinks">
            {siteConfig.navLinks.map((link) => (
              <RollingNavLink
                key={link.label}
                href={link.href}
                label={link.label}
                isMobile
                onClick={() => setMobileMenuOpen(false)}
                className="text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
              />
            ))}
          </div>

          {/* Vrindavan Meta Block at Bottom */}
          <div className="border-t border-line pt-6 flex flex-col gap-2">
            <span className="text-[15px] font-semibold text-fg">
              Based in {siteConfig.location.city} <span lang="hi">{siteConfig.location.countryHi}</span>
            </span>
            <span className="text-[13.5px] text-fg-muted">
              Software & AI Product Studio
            </span>
            <span className="text-[13px] text-fg-dim">
              Available for Selected Q2/Q3 Projects
            </span>
          </div>
        </div>
      )}
    </>
  );
}
