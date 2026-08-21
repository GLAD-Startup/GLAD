import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import redditLogo from "../../routes/images/reddit-logo.png";
import logoUrl from "../../routes/images/website logo(white background compatible).png";
import { useState, MouseEvent } from "react";
export function Footer() {
  const socials = [
    {
      icon: Twitter,
      href: "https://x.com/_GLAD_Studio",
      label: "X (Twitter)",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/glad-studio-2k26",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/__gladstudio/",
      label: "Instagram",
    },
    {
      icon: ({ className }: { className?: string }) => (
        <img src={redditLogo} alt="Reddit" className={`${className} scale-110`} />
      ),
      href: "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK",
      label: "Reddit",
    },
    {
      icon: Mail,
      href: "mailto:hello@gladstudio.net",
      label: "Email",
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

            {/* Social Links (40x40px tap targets, 1px rule border) */}
            <div className="mt-8 flex items-center gap-2.5 flex-wrap">
              {socials.map(({ icon: Icon, href, label, onClick }) => (
                <a
                  key={label}
                  href={href}
                  onClick={onClick}
                  target={onClick ? undefined : "_blank"}
                  rel={onClick ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="size-10 rounded-[var(--radius-md,8px)] border border-[var(--color-rule)] bg-[var(--color-card)] grid place-items-center text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:border-[var(--color-rule-hi)] hover:bg-[var(--color-card)] transition-colors cursor-pointer"
                >
                  <Icon className="size-4" />
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
                  href="mailto:hello@gladstudio.net"
                  className="text-[14px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors text-left"
                >
                  hello@gladstudio.net
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
