'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Briefcase, LayoutGrid, Mail, Phone, ArrowUp } from 'lucide-react';
import clsx from 'clsx';

export default function FloatingFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop;
          const diff = currentScrollY - lastScrollY.current;

          // Check if we are reaching the main footer
          const footer = document.getElementById('footer') || document.querySelector('footer');
          let isNearFooter = false;

          if (footer) {
            const footerRect = footer.getBoundingClientRect();
            // If top of footer enters within 80px of bottom of viewport
            if (footerRect.top <= window.innerHeight + 20) {
              isNearFooter = true;
            }
          }

          // Also check overall document scroll distance from bottom
          const totalDocHeight = document.documentElement.scrollHeight;
          const scrollBottom = currentScrollY + window.innerHeight;
          if (totalDocHeight - scrollBottom < 250) {
            isNearFooter = true;
          }

          // If we are reaching the main footer: always hide
          if (isNearFooter) {
            setIsVisible(false);
          }
          // When scrolled past initial header / hero threshold (> 120px) and not near footer
          else if (currentScrollY > 120) {
            // Scrolling down (diff > 2): brings the floating footer UP
            if (diff > 2) {
              setIsVisible(true);
            }
            // Scrolling up (diff < -5): hides the floating footer
            else if (diff < -5) {
              setIsVisible(false);
            }
          } else {
            // At the very top of the page: hide
            setIsVisible(false);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
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

  return (
    <div
      className={clsx(
        'fixed bottom-5 sm:bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-16 opacity-0 scale-95'
      )}
    >
      <nav
        aria-label="Floating Quick Navigation"
        className={clsx(
          'pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full',
          'bg-[#FBFBF9]/90 backdrop-blur-xl',
          'border border-black/[0.08]',
          'shadow-[0_12px_36px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] select-none'
        )}
      >
        {/* Services Link */}
        <Link
          href="/services"
          data-cursor="link"
          className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[12.5px] sm:text-[13px] font-medium text-fg/80 hover:text-fg hover:bg-black/[0.04] transition-all duration-200"
        >
          <Briefcase className="w-3.5 h-3.5 text-fg/70" />
          <span className="text-fg">Services</span>
        </Link>

        {/* Work Link */}
        <Link
          href="/work"
          data-cursor="link"
          className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[12.5px] sm:text-[13px] font-medium text-fg/80 hover:text-fg hover:bg-black/[0.04] transition-all duration-200"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-fg/70" />
          <span className="text-fg">Work</span>
        </Link>

        {/* Contact Link */}
        <Link
          href="/contact"
          data-cursor="link"
          className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[12.5px] sm:text-[13px] font-medium text-fg/80 hover:text-fg hover:bg-black/[0.04] transition-all duration-200"
        >
          <Mail className="w-3.5 h-3.5 text-fg/70" />
          <span className="text-fg">Contact</span>
        </Link>

        {/* Book a Call Action Pill */}
        <Link
          href="/contact"
          data-cursor="pointer"
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-[12.5px] sm:text-[13px] font-medium shadow-[0_2px_10px_rgba(22,163,74,0.3)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span className="whitespace-nowrap">Book a Call</span>
        </Link>

        {/* Scroll To Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          data-cursor="pointer"
          aria-label="Scroll to top"
          className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full border border-black/[0.08] bg-white/80 hover:bg-white flex items-center justify-center text-fg hover:text-accent shadow-sm transition-all duration-200 shrink-0 cursor-pointer ml-0.5"
        >
          <ArrowUp className="w-4 h-4 text-fg" />
        </button>
      </nav>
    </div>
  );
}
