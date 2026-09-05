'use client';

import React from 'react';
import type { ProcessRow } from '@/data/process';

export interface ProcessCardProps {
  step: ProcessRow;
  index: number;
}

export default function ProcessCard({ step }: ProcessCardProps) {
  return (
    <div className="process-step-card group relative select-none w-full">
      <div className="relative w-full h-full bg-surface border border-line-solid rounded-[14px] p-7 sm:p-8 xl:p-10 flex flex-col justify-between overflow-hidden shadow-sm transition-colors duration-200 hover:bg-surface-2">
        {/* Ghost Typographic Watermark Step Number */}
        <div
          aria-hidden="true"
          className="absolute right-4 -bottom-3 text-[90px] sm:text-[105px] xl:text-[120px] font-mono font-bold text-fg/[0.035] leading-none pointer-events-none select-none tracking-tighter z-0"
        >
          {step.step}
        </div>

        {/* Card Content Top Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            {/* Step Number with Ambient Status Dot */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[17px] sm:text-[19px] font-mono font-semibold text-accent tracking-tight">
                {step.step}
              </span>
            </div>

            {/* When / Timeline Pill Badge */}
            <span className="text-[12px] font-mono font-medium text-fg uppercase tracking-wider bg-bg/95 px-3 py-1 rounded-full border border-line-solid shadow-2xs">
              {step.when}
            </span>
          </div>

          {/* Stage Title */}
          <h3 className="text-[21px] sm:text-[22px] xl:text-[24px] font-medium text-fg mt-6 tracking-tight leading-snug">
            {step.stage}
          </h3>

          {/* Stage Description */}
          <p className="t-body text-fg-muted mt-3 leading-[1.65]">
            {step.description}
          </p>
        </div>

        {/* Card Bottom Milestone Checkpoint Footer */}
        <div className="relative z-10 mt-8 pt-4 border-t border-line flex items-center justify-between text-[12.5px] sm:text-[13px] text-fg-muted font-sans">
          <span className="font-mono text-[11.5px] tracking-wider text-fg-muted/85 uppercase">
            Phase Checkpoint • {step.step}/08
          </span>
          <div className="flex items-center gap-1.5 text-fg font-medium">
            <svg
              className="w-3.5 h-3.5 text-accent shrink-0"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13.5 4.5L6.5 11.5L3 8" />
            </svg>
            <span>Guaranteed Milestone</span>
          </div>
        </div>
      </div>
    </div>
  );
}
