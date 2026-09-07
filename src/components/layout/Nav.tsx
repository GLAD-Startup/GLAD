'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { openCalModal } from '@/components/providers/CalProvider';

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
      className={`group relative inline-flex items-center select-none py-[2px] overflow-hidden ${className}`}
    >
      <span className="relative inline-flex overflow-hidden py-[2px]">
        {label.split('').map((char, index) => (
          <span
            key={index}
            className="relative inline-block overflow-hidden pb-[4px] -mb-[4px]"
          >
            {/* Primary letter: in-flow block, translates from 0% to -100% on hover */}
            <span
              className={`block pb-[4px] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full will-change-transform leading-normal ${
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
              className={`absolute inset-0 block pb-[4px] translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 will-change-transform leading-normal ${
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

function RollingText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`relative inline-flex overflow-hidden py-[2px] ${className}`}>
      {text.split('').map((char, index) => (
        <span key={index} className="relative inline-block overflow-hidden pb-[4px] -mb-[4px]">
          <span
            className="block pb-[4px] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full will-change-transform text-fg font-medium leading-normal"
            style={{
              transitionDelay: `${index * 20}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 block pb-[4px] translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 will-change-transform text-fg font-medium leading-normal"
            style={{
              transitionDelay: `${index * 20}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}

const productDropdownItems = [
  {
    label: 'All Products',
    subline: 'Overview of both platforms',
    href: '/products',
  },
  {
    label: 'GLAD HMS',
    subline: 'Hospitality SaaS',
    href: '/products/glad-hms',
  },
  {
    label: 'SettleDesk',
    subline: 'Real Estate SaaS',
    href: '/products/settledesk',
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const lastScrollY = useRef(0);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset visibility, close dropdown, and ensure Nav is visible on route change
  useEffect(() => {
    setIsProductsOpen(false);
    setMobileMenuOpen(false);
    setNavVisible(true);
    lastScrollY.current = 0;

    // Ensure intro-armed is cleaned up on navigation to other pages
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('intro-armed');
      const navEl = document.querySelector('[data-intro="nav"]') as HTMLElement | null;
      if (navEl && pathname !== '/') {
        navEl.style.opacity = '1';
        navEl.style.transform = '';
      }
    }

    // Scroll window/Lenis to top on route change
    const lenis = (
      window as unknown as {
        lenis?: {
          scrollTo: (
            target: number | string | HTMLElement,
            opts?: { immediate?: boolean }
          ) => void;
        };
      }
    ).lenis;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Prevent background scroll and signal mobile menu open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.classList.add('mobile-menu-open');
      } else {
        document.body.style.overflow = '';
        document.documentElement.classList.remove('mobile-menu-open');
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.classList.remove('mobile-menu-open');
      }
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
            // Scrolling down -> glide header up out of view & close dropdown
            setNavVisible(false);
            setIsProductsOpen(false);
          } else if (delta < -8) {
            // Scrolling up -> glide header back down into view
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

  // Hover handlers with 150ms grace delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
  };

  // Keyboard navigation for Trigger
  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsProductsOpen(true);
      setTimeout(() => {
        itemRefs.current[0]?.focus();
      }, 30);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIsProductsOpen(true);
      setTimeout(() => {
        itemRefs.current[productDropdownItems.length - 1]?.focus();
      }, 30);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsProductsOpen(false);
    }
  };

  // Keyboard navigation for Menu Items (Roving Focus)
  const handleItemKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIdx = (idx + 1) % productDropdownItems.length;
      itemRefs.current[nextIdx]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIdx = (idx - 1 + productDropdownItems.length) % productDropdownItems.length;
      itemRefs.current[prevIdx]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      itemRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      itemRefs.current[productDropdownItems.length - 1]?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsProductsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'Tab') {
      if (e.shiftKey && idx === 0) {
        setIsProductsOpen(false);
      } else if (!e.shiftKey && idx === productDropdownItems.length - 1) {
        setIsProductsOpen(false);
      }
    }
  };

  return (
    <>
      <div data-intro="nav" className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center w-full select-none">
        <nav
          className={clsx(
            'w-full h-[82px] bg-bg pointer-events-auto relative will-change-transform transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]',
            navVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
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
                  style={{ height: '42px', width: 'auto' }}
                  className="block object-contain"
                />
              </Link>
            </div>

            {/* Desktop & Tablet Center Column (>=1024px) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center gap-1 text-center">
              <span className="text-[13px] font-semibold text-fg leading-tight">
                Quick Links
              </span>
              <div className="group/links text-[13.5px] font-medium text-fg leading-normal flex items-center justify-center flex-wrap">
                {/* 1. Home */}
                <span className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100">
                  <RollingNavLink href="/" label="Home" />
                  <span className="text-fg-dim select-none mr-1.5">,</span>
                </span>

                {/* 2. Products (Dropdown Trigger & Panel) */}
                <div
                  ref={dropdownContainerRef}
                  className={clsx(
                    'relative inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100',
                    isProductsOpen && '!opacity-100'
                  )}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    ref={triggerRef}
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isProductsOpen}
                    aria-controls="products-nav-panel"
                    onClick={() => setIsProductsOpen((prev) => !prev)}
                    onKeyDown={handleTriggerKeyDown}
                    data-cursor="link"
                    className="group relative inline-flex items-center gap-1 select-none overflow-visible focus:outline-none cursor-pointer"
                  >
                    <RollingText text="Products" />
                    <svg
                      className={clsx(
                        'w-2.5 h-2.5 text-fg-muted transition-transform duration-200 inline-block ml-1 will-change-transform',
                        isProductsOpen && 'rotate-180 text-fg'
                      )}
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M1 1.25L5 4.75L9 1.25" />
                    </svg>
                  </button>

                  {/* Products Dropdown Panel */}
                  <div
                    id="products-nav-panel"
                    role="menu"
                    aria-label="Products"
                    aria-orientation="vertical"
                    className={clsx(
                      "absolute left-0 top-[calc(100%+22px)] w-[340px] bg-bg border border-line-solid rounded-[12px] shadow-[0_20px_50px_-30px_rgba(10,10,11,0.3)] p-[8px] z-[200] origin-top-left before:absolute before:-top-[24px] before:left-0 before:right-0 before:h-[24px] before:content-['']",
                      'transition-all will-change-[opacity,transform]',
                      isProductsOpen
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto duration-[220ms] ease-[cubic-bezier(0.25,1,0.5,1)]'
                        : 'opacity-0 -translate-y-[8px] scale-[0.98] pointer-events-none duration-[160ms] ease-[cubic-bezier(0.25,1,0.5,1)]'
                    )}
                  >
                    {productDropdownItems.map((item, idx) => (
                      <React.Fragment key={item.href}>
                        <Link
                          ref={(el) => {
                            itemRefs.current[idx] = el;
                          }}
                          href={item.href}
                          role="menuitem"
                          tabIndex={isProductsOpen ? 0 : -1}
                          onClick={() => setIsProductsOpen(false)}
                          onKeyDown={(e) => handleItemKeyDown(e, idx)}
                          data-cursor="link"
                          className="group flex flex-col justify-center rounded-[8px] p-[14px] transition-colors duration-200 outline-none hover:bg-[rgba(10,10,11,0.035)] focus:bg-[rgba(10,10,11,0.035)] focus-visible:bg-[rgba(10,10,11,0.035)] text-left cursor-pointer"
                        >
                          <span className="text-[15px] font-medium text-fg leading-tight transition-transform duration-[250ms] ease-out group-hover:translate-x-1 group-focus:translate-x-1 will-change-transform">
                            {item.label}
                          </span>
                          <span className="text-[12.5px] text-fg-muted mt-[3px] leading-tight font-normal">
                            {item.subline}
                          </span>
                        </Link>
                        {idx === 0 && (
                          <div
                            className="h-[1px] bg-line my-[4px] mx-[6px]"
                            role="separator"
                            aria-orientation="horizontal"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="text-fg-dim select-none mr-1.5">,</span>
                </div>

                {/* 3. Work */}
                <span className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100">
                  <RollingNavLink href="/work" label="Work" />
                  <span className="text-fg-dim select-none mr-1.5">,</span>
                </span>

                {/* 4. Services */}
                <span className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100">
                  <RollingNavLink href="/services" label="Services" />
                  <span className="text-fg-dim select-none mr-1.5">,</span>
                </span>

                {/* 6. Process */}
                <span className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100">
                  <RollingNavLink href="/process" label="Process" />
                  <span className="text-fg-dim select-none mr-1.5">,</span>
                </span>

                {/* 7. About */}
                <span className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100">
                  <RollingNavLink href="/about" label="About" />
                  <span className="text-fg-dim select-none mr-1.5">,</span>
                </span>

                {/* 8. Insights */}
                <span className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100">
                  <RollingNavLink href="/insights" label="Insights" />
                  <span className="text-fg-dim select-none mr-1.5">,</span>
                </span>

                {/* 9. Contact */}
                <span className="inline-flex items-center transition-opacity duration-300 group-hover/links:opacity-35 hover:!opacity-100">
                  <RollingNavLink href="/contact" label="Contact" />
                </span>
              </div>
            </div>

            {/* Desktop & Tablet Right Column (>=1024px) */}
            <div className="hidden lg:flex flex-col items-end text-right justify-center gap-1">
              <span className="text-[13px] font-semibold text-fg leading-tight">
                Based in {siteConfig.location.city} <span lang="hi">{siteConfig.location.countryHi}</span>
              </span>
              <span className="text-[13px] font-normal text-fg-muted leading-tight">
                Software & AI Product Studio
              </span>
            </div>

            {/* Mobile Hamburger Button (<1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-fg focus:outline-none flex flex-col items-end justify-center gap-1.5 w-9 h-9 cursor-pointer"
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

          {/* Nav Hairline */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-line origin-left"
          />
        </nav>
      </div>

      {/* Full-Screen Mobile Editorial Overlay (<1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-bg z-[9998] flex flex-col justify-between px-[20px] sm:px-[28px] pt-[86px] pb-[80px] sm:pb-[96px] animate-fadeIn overflow-y-auto overscroll-contain">
          {/* Top Editorial Index Header */}
          <div className="flex flex-col">
            <div className="border-b border-line pb-2.5 mb-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.05em] text-fg-muted select-none">
              <span>INDEX / अनुक्रमणिका</span>
              <span>(GLD® — 00)</span>
            </div>

            {/* Navigation Links with Editorial Numbers */}
            <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-line/40">
              {[
                { index: '01', label: 'Home', href: '/' },
                { index: '02', label: 'Products', href: '/products', isGroup: true },
                { index: '03', label: 'Work', href: '/work' },
                { index: '04', label: 'Services', href: '/services' },
                { index: '05', label: 'Process', href: '/process' },
                { index: '06', label: 'About', href: '/about' },
                { index: '07', label: 'Insights', href: '/insights' },
                { index: '08', label: 'Contact', href: '/contact' },
              ].map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                if (item.isGroup) {
                  return (
                    <div key={item.label} className="py-2 flex flex-col">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-1 group/item"
                        >
                          <span className="text-[11px] font-mono text-fg-dim group-hover/item:text-accent transition-colors">
                            {item.index}
                          </span>
                          <span
                            className={clsx(
                              'text-[22px] sm:text-[26px] font-normal tracking-[-0.03em] leading-tight transition-colors',
                              isActive ? 'text-accent font-medium' : 'text-fg group-hover/item:text-accent'
                            )}
                          >
                            {item.label}
                          </span>
                        </Link>
                        {isActive && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>

                      {/* Products Nested Card */}
                      <div className="mt-1.5 ml-6 bg-surface border border-line-solid rounded-[12px] p-2 sm:p-2.5 divide-y divide-line/50 shadow-sm">
                        {productDropdownItems.map((prod) => {
                          const isProdActive = pathname === prod.href;
                          return (
                            <Link
                              key={prod.href}
                              href={prod.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-1.5 px-2 rounded-[8px] hover:bg-surface-2/60 transition-colors group/sub"
                            >
                              <div className="flex flex-col">
                                <span
                                  className={clsx(
                                    'text-[13.5px] font-medium leading-snug',
                                    isProdActive ? 'text-accent' : 'text-fg group-hover/sub:text-accent'
                                  )}
                                >
                                  {prod.label}
                                </span>
                                <span className="text-[11.5px] text-fg-muted leading-tight">
                                  {prod.subline}
                                </span>
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-fg-dim group-hover/sub:text-accent shrink-0 transition-colors" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={item.label} className="py-2 flex items-center justify-between group/row">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-1 flex-1"
                    >
                      <span className="text-[11px] font-mono text-fg-dim group-hover/row:text-accent transition-colors">
                        {item.index}
                      </span>
                      <span
                        className={clsx(
                          'text-[22px] sm:text-[26px] font-normal tracking-[-0.03em] leading-tight transition-colors',
                          isActive ? 'text-accent font-medium' : 'text-fg group-hover/row:text-accent'
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {isActive ? (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-fg-dim/50 group-hover/row:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Bottom Studio Meta & Quick Action Block */}
          <div className="border-t border-line pt-4 mt-6 flex flex-col gap-3 select-none">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[13px] font-semibold text-fg block leading-tight">
                  Based in {siteConfig.location.city} <span lang="hi">{siteConfig.location.countryHi}</span>
                </span>
                <span className="text-[12px] text-fg-muted block mt-0.5">
                  Software & AI Product Studio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-[10.5px] font-mono text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Q2/Q3 Available</span>
              </div>
            </div>

            {/* Quick Action Button & Contact Links */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                data-cal-link="arjun-rajput-2mdsis"
                data-cal-config='{"layout":"month_view"}'
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCalModal('arjun-rajput-2mdsis');
                }}
                className="w-full py-2.5 rounded-full border border-line-solid bg-surface text-fg font-medium text-[13px] flex items-center justify-center gap-2 hover:bg-surface-2 transition-colors cursor-pointer shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Book a Discovery Call</span>
              </button>
              <div className="flex items-center justify-between text-[12px] text-fg-muted px-1 pt-0.5">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-accent hover:underline font-medium"
                >
                  {siteConfig.contact.email}
                </a>
                <div className="flex items-center gap-2.5 font-mono text-fg-dim">
                  <a href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="hover:text-fg">X</a>
                  <span>·</span>
                  <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">IN</a>
                  <span>·</span>
                  <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-fg">IG</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
