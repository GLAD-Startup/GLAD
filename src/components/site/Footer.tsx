import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import logoUrl from "../../routes/images/website logo(white background compatible).png";
import { useState, MouseEvent } from "react";

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.68-6.24-1.78l1.3-4.1 3.6.8c.06.84.75 1.5 1.59 1.5 1.05 0 1.91-.86 1.91-1.91s-.86-1.91-1.91-1.91c-.88 0-1.6.61-1.8 1.43l-4.12-.92c-.39-.09-.78.14-.88.53L10.3 8.94c-2.44.08-4.68.75-6.35 1.76C3.38 9.95 2.48 9.5 1.5 9.5c-1.65 0-3 1.35-3 3 0 1.22.73 2.27 1.78 2.73-.06.27-.08.54-.08.82 0 4.14 4.83 7.5 10.8 7.5s10.8-3.36 10.8-7.5c0-.28-.02-.55-.08-.82 1.05-.46 1.78-1.51 1.78-2.73zM7 14c.83 0 1.5.67 1.5 1.5S7.83 17 7 17s-1.5-.67-1.5-1.5S6.17 14 7 14zm10.74 3.75c-1.14 1.14-3.29 1.25-3.74 1.25s-2.6-.11-3.74-1.25c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0 .76.76 2.12.89 2.68.89.56 0 1.92-.13 2.68-.89.3-.29.77-.29 1.06 0 .29.29.29.77 0 1.06zm-.24-2.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

export function Footer() {
  const socials: {
    icon: any;
    href: string;
    label: string;
    hoverClass: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  }[] = [
    {
      icon: Twitter,
      href: "https://x.com/_GLAD_Studio",
      label: "X (Twitter)",
      hoverClass:
        "hover:bg-gradient-to-tr hover:from-[#1D9BF0] hover:to-[#55B7F7] hover:text-[#FFFFFF] hover:border-transparent hover:shadow-[0_8px_20px_-4px_rgba(29,155,240,0.5)]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/glad-studio-2k26",
      label: "LinkedIn",
      hoverClass:
        "hover:bg-[#0A66C2] hover:text-[#FFFFFF] hover:border-[#0A66C2] hover:shadow-[0_8px_20px_-4px_rgba(10,102,194,0.4)]",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/__gladstudio/",
      label: "Instagram",
      hoverClass:
        "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-[#FFFFFF] hover:border-transparent hover:shadow-[0_8px_20px_-4px_rgba(221,42,123,0.4)]",
    },
    {
      icon: RedditIcon,
      href: "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK",
      label: "Reddit",
      hoverClass:
        "hover:bg-[#FF4500] hover:text-[#FFFFFF] hover:border-[#FF4500] hover:shadow-[0_8px_20px_-4px_rgba(255,69,0,0.4)]",
    },
    {
      icon: Mail,
      href: "mailto:contact@gladstudio.net",
      label: "Email",
      hoverClass:
        "hover:bg-[#0F6E4C] hover:text-[#FFFFFF] hover:border-[#0F6E4C] hover:shadow-[0_8px_20px_-4px_rgba(15,110,76,0.4)]",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="site-footer"
      className="relative border-t border-[var(--color-rule)] bg-[var(--color-sunk)] text-[var(--color-ink)]"
    >
      <div className="mx-auto max-w-[1120px] px-8 max-[720px]:px-5 pt-16 pb-12">
        {/* Main Grid: Brand + 4 Columns */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <Link to="/" className="inline-flex items-center select-none group shrink-0">
                <img
                  src={logoUrl}
                  alt="GLAD Studio"
                  width={208}
                  height={58}
                  className="h-[48px] sm:h-[56px] w-auto max-h-[60px] object-contain group-hover:opacity-90 transition-opacity duration-[var(--duration-1,150ms)]"
                />
              </Link>
              <p className="mt-4 max-w-sm text-[13px] text-[var(--color-ink-2)] leading-relaxed">
                Engineering-first product studio building scalable web platforms, high-performance
                mobile apps, and custom business automation systems.
              </p>
            </div>

            {/* Social Links with interactive spring animation & brand glows */}
            <div className="mt-8 flex items-center gap-2.5 flex-wrap">
              {socials.map(({ icon: Icon, href, label, hoverClass, onClick }) => (
                <a
                  key={label}
                  href={href}
                  onClick={onClick}
                  target={onClick ? undefined : "_blank"}
                  rel={onClick ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className={`group relative size-10 rounded-[var(--radius-md,8px)] border border-[var(--color-rule)] bg-[var(--color-card)] grid place-items-center text-[var(--color-ink-2)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-110 active:scale-95 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${hoverClass}`}
                >
                  <Icon className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* 1. Services Column */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-3)] mb-4 font-medium select-none">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/services/mvp-development"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  MVP Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-application-development"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Web Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-app-development"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-solutions"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-automation"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[14px] text-[var(--color-ink)] font-medium hover:underline inline-block pt-1"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Studio Column */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-3)] mb-4 font-medium select-none">
              Studio
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Process & Standards
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Insights & Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Products Column */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-3)] mb-4 font-medium select-none">
              Products
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/products/settledesk"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  SettleDesk SaaS
                </Link>
              </li>
              <li>
                <Link
                  to="/products/glad-hms"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  GLAD HMS
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[14px] text-[var(--color-ink)] font-medium hover:underline inline-block pt-1"
                >
                  All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Column */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-3)] mb-4 font-medium select-none">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  data-cal-link="arjun-rajput-2mdsis"
                  data-cal-config={JSON.stringify({
                    layout: "month_view",
                    theme: "light",
                  })}
                  className="group inline-flex items-center gap-1.5 text-[14px] text-[var(--color-ink)] font-medium hover:underline text-left cursor-pointer"
                >
                  <span>Book a discovery call</span>
                  <span
                    className="inline-block transition-transform duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] group-hover:translate-x-[3px]"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@gladstudio.net"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors text-left"
                >
                  contact@gladstudio.net
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[var(--color-rule)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[var(--color-ink-3)] font-mono">
          <p>© {new Date().getFullYear()} GLAD Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-[var(--color-ink)] transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[var(--color-ink)] transition-colors">
              Terms
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
