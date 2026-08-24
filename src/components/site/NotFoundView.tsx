import * as React from "react";
import { Link } from "@tanstack/react-router";
import { RetroTv404 } from "./RetroTv404";

export function NotFoundView() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--color-paper,#FAF8F5)] text-[var(--color-ink,#15191E)] px-4 py-12 sm:py-16 overflow-hidden select-none"
      style={{
        backgroundImage: `linear-gradient(to right, var(--color-rule) 1px, transparent 1px), linear-gradient(to bottom, var(--color-rule) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Subtle radial fade to soften grid edges */}
      <div className="absolute inset-0 bg-radial from-transparent via-[var(--color-paper)]/70 to-[var(--color-paper)] pointer-events-none" />

      {/* Elevated Architectural Card */}
      <div className="relative z-10 max-w-xl w-full rounded-[24px] border border-[var(--color-rule)] bg-[var(--color-card,#FFFFFF)] p-6 sm:p-10 shadow-[0_24px_60px_-15px_rgba(20,24,30,0.08),0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
        {/* Top Header Pill */}
        <div className="mb-3">
          <span className="font-mono text-[11px] font-semibold text-[var(--color-brass)] bg-[var(--color-sunk)] border border-[var(--color-rule)] px-3.5 py-1 rounded-full uppercase tracking-widest shadow-xs">
            SYS.ROUTING // HTTP_404
          </span>
        </div>

        {/* Unified Visual Centerpiece: Retro TV with Animated Face inside screen */}
        <div className="w-full flex items-center justify-center min-h-[220px] my-1">
          <RetroTv404 />
        </div>

        {/* Heading & Copy */}
        <h1 className="text-2xl sm:text-3xl font-display font-semibold text-[var(--color-ink)] leading-tight tracking-tight mb-2">
          Page not found
        </h1>
        <p className="text-[14px] sm:text-[14.5px] text-[var(--color-ink-2)] max-w-sm leading-relaxed mb-6">
          The requested endpoint does not exist or has been relocated to another route.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#0F6E4C] hover:shadow-md hover:translate-y-[-1px]"
          >
            <span>Return to homepage</span>
            <span>→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-sunk)] border border-[var(--color-rule)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors duration-200 hover:bg-[#EAE5DC]"
          >
            Contact studio
          </Link>
        </div>

        {/* Helpful Quick Navigation Links */}
        <div className="mt-7 pt-5 border-t border-[var(--color-rule)]/70 w-full flex items-center justify-center gap-4 text-[12px] font-mono text-[var(--color-ink-3)]">
          <Link to="/services" className="hover:text-[var(--color-live)] transition-colors">
            Services
          </Link>
          <span>•</span>
          <Link to="/portfolio" className="hover:text-[var(--color-live)] transition-colors">
            Portfolio
          </Link>
          <span>•</span>
          <Link to="/process" className="hover:text-[var(--color-live)] transition-colors">
            Process
          </Link>
          <span>•</span>
          <Link to="/about" className="hover:text-[var(--color-live)] transition-colors">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
