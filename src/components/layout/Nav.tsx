'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 w-full h-[84px] border-b border-line bg-bg z-50 select-none flex justify-center"
      >
        <div className="w-full max-w-[1512px] h-full px-[20px] md:px-[28px] xl:px-[40px] relative flex items-center justify-between">
          {/* Left Column: GLAD Studio Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              data-cursor="link"
              className="flex items-center transition-opacity duration-200 hover:opacity-80"
              aria-label={`${siteConfig.name} Home`}
            >
              <img
                src="/brand/website-logo-white-background-compatible.png"
                alt={siteConfig.name}
                style={{ height: '26px', width: 'auto' }}
                className="block object-contain"
              />
            </Link>
          </div>

          {/* Desktop & Tablet Center Column (>=810px) */}
          <div className="hidden min-[810px]:flex absolute left-[46%] -translate-x-1/2 flex-col justify-center gap-1">
            <span className="text-[13px] font-semibold text-fg leading-tight">
              Quick Links
            </span>
            <div className="text-[13px] font-normal text-fg-muted leading-tight">
              {siteConfig.navLinks.map((link, idx) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    data-cursor="link"
                    className="hover:text-fg transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  {idx < siteConfig.navLinks.length - 1 && ', '}
                </React.Fragment>
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
      </nav>

      {/* Full-Screen Mobile Overlay (<810px) */}
      {mobileMenuOpen && (
        <div className="min-[810px]:hidden fixed inset-0 bg-bg z-[9998] flex flex-col justify-between p-[20px] pt-[110px] pb-[40px] animate-fadeIn">
          {/* Navigation Links at 34px */}
          <div className="flex flex-col gap-6">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[34px] font-normal text-fg hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mathura Meta Block at Bottom */}
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
