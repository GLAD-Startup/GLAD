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
      <span className="t-eyebrow eyebrow-shimmer-white truncate flex-1 min-w-0 min-[810px]:flex-initial min-[810px]:max-w-none inline-block py-0.5 pr-2">
        © {left}
      </span>

      {/* Center Index — strictly desktop (>=810px) */}
      <span className="t-eyebrow eyebrow-shimmer-accent !hidden min-[810px]:!inline-block absolute left-1/2 -translate-x-1/2 whitespace-nowrap py-0.5">
        {index}
      </span>

      {/* Right Item — shows concise index on mobile (<810px) and full descriptor on desktop (>=810px) */}
      <span className="t-eyebrow eyebrow-shimmer-accent shrink-0 ml-auto text-right inline-block py-0.5 whitespace-nowrap">
        <span className="inline-block min-[810px]:hidden">{index}</span>
        <span className="hidden min-[810px]:inline-block">{right}</span>
      </span>
    </div>
  );
}
