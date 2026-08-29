import React from 'react';
import clsx from 'clsx';

export interface SectionEyebrowProps {
  left: React.ReactNode;
  index: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  'data-intro'?: string;
}

export default function SectionEyebrow({
  left,
  index,
  right,
  className,
  variant = 'light',
  'data-intro': dataIntro,
}: SectionEyebrowProps) {
  const isDark = variant === 'dark';

  return (
    <div
      data-intro={dataIntro}
      className={clsx(
        'relative w-full h-[44px] md:h-[48px] px-[20px] md:px-[28px] xl:px-[40px] flex items-center select-none',
        isDark
          ? 'bg-[#0A0A0B] text-[#FBFBF9] border-b border-white/[0.10]'
          : 'bg-bg text-fg border-b border-line mt-10 md:mt-16 xl:mt-20',
        className
      )}
    >
      {/* Left Item */}
      <span
        className={clsx(
          't-eyebrow truncate max-w-[45%] min-[810px]:max-w-none',
          isDark ? 'text-[#FBFBF9]' : 'eyebrow-shimmer-white'
        )}
      >
        © {left}
      </span>

      {/* Center Index — dropped on mobile below 810px */}
      <span
        className={clsx(
          't-eyebrow hidden min-[810px]:block absolute left-1/2 -translate-x-1/2 whitespace-nowrap',
          isDark ? 'text-accent-bright' : 'eyebrow-shimmer-accent'
        )}
      >
        {index}
      </span>

      {/* Right Item */}
      <span
        className={clsx(
          't-eyebrow ml-auto truncate max-w-[45%] min-[810px]:max-w-none text-right',
          isDark ? 'text-accent-bright' : 'eyebrow-shimmer-accent'
        )}
      >
        {right}
      </span>
    </div>
  );
}
