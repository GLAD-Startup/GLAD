'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
                isMobile ? 'font-normal' : 'font-medium'
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
                isMobile ? 'font-normal' : 'font-medium'
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
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const lastScrollY = useRef(0);

  const isDarkNav = isHome && !isPastHero;

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

          setIsPastHero(currentScrollY > 1950);

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
            'w-full max-w-[1512px] h-[84px] pointer-events-auto relative will-change-transform transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]',
            navVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full',
            isDarkNav ? 'bg-[#0A0A0B] text-[#FBFBF9]' : 'bg-bg text-fg'
          )}
        >
          <div className="w-full h-full px-[20px] md:px-[28px] xl:px-[40px] relative flex items-center justify-between">
            {/* Left Column: GLAD Studio Logo */}
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
                  style={{
                    height: '42px',
                    width: 'auto',
                    filter: isDarkNav ? 'invert(1) hue-rotate(180deg)' : 'none',
                    transition: 'filter 0.3s ease',
                  }}
                  className="block object-contain"
                />
              </Link>
            </div>

            {/* Desktop & Tablet Center Column (>=810px) */}
            <div className="hidden min-[810px]:flex absolute left-[46%] -translate-x-1/2 flex-col justify-center gap-1">
              <span
                className={clsx(
                  'text-[13px] font-semibold leading-tight transition-colors duration-300',
                  isDarkNav ? 'text-[#FBFBF9]' : 'text-fg'
                )}
              >
                Quick Links
              </span>
              <div
                className={clsx(
                  'group/links text-[13.5px] font-medium leading-tight flex items-center flex-wrap transition-colors duration-300',
                  isDarkNav ? 'text-[#FBFBF9]' : 'text-fg'
                )}
              >
                {siteConfig.navLinks.map((link, idx) => (
                  <span
                    key={link.label}
                    className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100"
                  >
                    <RollingNavLink href={link.href} label={link.label} />
                    {idx < siteConfig.navLinks.length - 1 && (
                      <span
                        className={clsx(
                          'select-none mr-1.5 transition-colors duration-300',
                          isDarkNav ? 'text-[#6B6B70]' : 'text-fg-dim'
                        )}
                      >
                        ,
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop & Tablet Right Column (>=810px) */}
            <div className="hidden min-[810px]:flex flex-col items-end text-right justify-center gap-1">
              <span
                className={clsx(
                  'text-[13px] font-semibold leading-tight transition-colors duration-300',
                  isDarkNav ? 'text-[#FBFBF9]' : 'text-fg'
                )}
              >
                Based in {siteConfig.location.city} <span lang="hi">{siteConfig.location.countryHi}</span>
              </span>
              <span
                className={clsx(
                  'text-[13px] font-normal leading-tight transition-colors duration-300',
                  isDarkNav ? 'text-[#A8A8AD]' : 'text-fg-muted'
                )}
              >
                Software & AI Product Studio
              </span>
            </div>

            {/* Mobile Hamburger Button (<810px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                'min-[810px]:hidden p-2 focus:outline-none flex flex-col items-end justify-center gap-1.5 w-9 h-9 transition-colors duration-300',
                isDarkNav ? 'text-[#FBFBF9]' : 'text-fg'
              )}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <span
                className={clsx(
                  'w-6 h-[1.5px] transition-transform duration-300',
                  isDarkNav ? 'bg-[#FBFBF9]' : 'bg-fg',
                  mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                )}
              />
              <span
                className={clsx(
                  'w-4 h-[1.5px] transition-opacity duration-300',
                  isDarkNav ? 'bg-[#FBFBF9]' : 'bg-fg',
                  mobileMenuOpen ? 'opacity-0' : ''
                )}
              />
              <span
                className={clsx(
                  'w-6 h-[1.5px] transition-transform duration-300',
                  isDarkNav ? 'bg-[#FBFBF9]' : 'bg-fg',
                  mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
                )}
              />
            </button>
          </div>

          {/* Nav Hairline (animated on intro) */}
          <div
            data-intro="nav-hairline"
            className={clsx(
              'absolute bottom-0 left-0 right-0 h-[1px] origin-left will-change-transform transition-colors duration-300',
              isDarkNav ? 'bg-white/[0.10]' : 'bg-line'
            )}
          />
        </nav>
      </div>

      {/* Full-Screen Mobile Overlay (<810px) */}
      {mobileMenuOpen && (
        <div
          className={clsx(
            'min-[810px]:hidden fixed inset-0 z-[9998] flex flex-col justify-between p-[20px] pt-[110px] pb-[40px] animate-fadeIn transition-colors duration-300',
            isDarkNav ? 'bg-[#0A0A0B] text-[#FBFBF9]' : 'bg-bg text-fg'
          )}
        >
          {/* Navigation Links at 34px */}
          <div className="flex flex-col gap-6 group/moblinks">
            {siteConfig.navLinks.map((link) => (
              <RollingNavLink
                key={link.label}
                href={link.href}
                label={link.label}
                isMobile
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  'text-[34px] font-normal transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100',
                  isDarkNav ? 'text-[#FBFBF9]' : 'text-fg'
                )}
              />
            ))}
          </div>

          {/* Vrindavan Meta Block at Bottom */}
          <div
            className={clsx(
              'border-t pt-6 flex flex-col gap-2 transition-colors duration-300',
              isDarkNav ? 'border-white/[0.10]' : 'border-line'
            )}
          >
            <span
              className={clsx(
                'text-[15px] font-semibold transition-colors duration-300',
                isDarkNav ? 'text-[#FBFBF9]' : 'text-fg'
              )}
            >
              Based in {siteConfig.location.city} <span lang="hi">{siteConfig.location.countryHi}</span>
            </span>
            <span
              className={clsx(
                'text-[13.5px] transition-colors duration-300',
                isDarkNav ? 'text-[#A8A8AD]' : 'text-fg-muted'
              )}
            >
              Software & AI Product Studio
            </span>
            <span
              className={clsx(
                'text-[13px] transition-colors duration-300',
                isDarkNav ? 'text-[#6B6B70]' : 'text-fg-dim'
              )}
            >
              Available for Selected Q2/Q3 Projects
            </span>
          </div>
        </div>
      )}
    </>
  );
}
