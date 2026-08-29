import React from 'react';
import clsx from 'clsx';

export interface SectionEyebrowProps {
  left: React.ReactNode;
  index: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  'data-intro'?: string;
}

export default function SectionEyebrow({
  left,
  index,
  right,
  className,
  'data-intro': dataIntro,
}: SectionEyebrowProps) {
  return (
    <div
      data-intro={dataIntro}
      className={clsx(
        'relative w-full h-[44px] md:h-[48px] px-[20px] md:px-[28px] xl:px-[40px] border-b border-line flex items-center bg-bg select-none mt-10 md:mt-16 xl:mt-20',
        className
      )}
    >
      {/* Left Item */}
      <span className="t-eyebrow eyebrow-shimmer-white truncate max-w-[45%] min-[810px]:max-w-none">
        © {left}
      </span>

      {/* Center Index — dropped on mobile below 810px */}
      <span className="t-eyebrow eyebrow-shimmer-accent hidden min-[810px]:block absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
        {index}
      </span>

      {/* Right Item */}
      <span className="t-eyebrow eyebrow-shimmer-accent ml-auto truncate max-w-[45%] min-[810px]:max-w-none text-right">
        {right}
      </span>
    </div>
  );
}
