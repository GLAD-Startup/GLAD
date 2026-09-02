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
              className={`block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full will-change-transform ${
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
              className={`absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 will-change-transform ${
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
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <span key={index} className="relative inline-block overflow-hidden">
          <span
            className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full will-change-transform text-fg font-medium"
            style={{
              transitionDelay: `${index * 20}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 will-change-transform text-fg font-medium"
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

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setIsProductsOpen(false);
    setMobileMenuOpen(false);
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
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center w-full select-none">
        <nav
          data-intro="nav"
          className={clsx(
            'w-full max-w-[1600px] h-[82px] bg-bg pointer-events-auto relative will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.25,1,0.5,1)]',
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
            <div className="hidden lg:flex absolute left-[47%] -translate-x-1/2 flex-col justify-center gap-1">
              <span className="text-[13px] font-semibold text-fg leading-tight">
                Quick Links
              </span>
              <div className="group/links text-[13.5px] font-medium text-fg leading-tight flex items-center flex-wrap">
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

          {/* Nav Hairline (animated on intro) */}
          <div
            data-intro="nav-hairline"
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-line origin-left will-change-transform"
          />
        </nav>
      </div>

      {/* Full-Screen Mobile Overlay (<1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-bg z-[9998] flex flex-col justify-between p-[20px] pt-[100px] pb-[36px] animate-fadeIn overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col gap-5 group/moblinks">
            {/* Home */}
            <RollingNavLink
              href="/"
              label="Home"
              isMobile
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] md:text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
            />

            {/* Products (Non-collapsing heading with indented links) */}
            <div className="flex flex-col gap-2 transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100">
              <span className="text-[32px] md:text-[34px] font-normal text-fg leading-tight">
                Products
              </span>
              <div className="flex flex-col gap-2 pl-4 border-l border-line ml-1 mt-1">
                {productDropdownItems.map((prod) => (
                  <Link
                    key={prod.href}
                    href={prod.href}
                    onClick={() => setMobileMenuOpen(false)}
                    data-cursor="link"
                    className="text-[18px] md:text-[20px] text-fg-muted hover:text-fg transition-colors duration-200 py-1 flex flex-col"
                  >
                    <span className="font-medium text-fg">{prod.label}</span>
                    <span className="text-[12.5px] text-fg-muted font-normal">
                      {prod.subline}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Work */}
            <RollingNavLink
              href="/work"
              label="Work"
              isMobile
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] md:text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
            />

            {/* Services */}
            <RollingNavLink
              href="/services"
              label="Services"
              isMobile
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] md:text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
            />

            {/* Process */}
            <RollingNavLink
              href="/process"
              label="Process"
              isMobile
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] md:text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
            />

            {/* About */}
            <RollingNavLink
              href="/about"
              label="About"
              isMobile
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] md:text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
            />

            {/* Insights */}
            <RollingNavLink
              href="/insights"
              label="Insights"
              isMobile
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] md:text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
            />

            {/* Contact */}
            <RollingNavLink
              href="/contact"
              label="Contact"
              isMobile
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] md:text-[34px] font-normal text-fg transition-opacity duration-300 group-hover/moblinks:opacity-35 hover:!opacity-100"
            />
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
