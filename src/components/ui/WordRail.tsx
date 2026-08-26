import React from 'react';
import clsx from 'clsx';
import Marquee from '@/components/ui/Marquee';

export interface WordRailProps {
  items: string[];
  className?: string;
}

export default function WordRail({ items, className }: WordRailProps) {
  return (
    <div
      className={clsx(
        'relative z-0 w-full h-[27px] bg-rail-bg text-rail-fg select-none overflow-hidden',
        className
      )}
    >
      {/* 1. Desktop & Tablet Static Row (>=810px) */}
      <div className="hidden min-[810px]:flex w-full h-full items-center justify-around">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="font-semibold text-rail-fg tracking-normal text-[11px] xl:text-[13px]"
          >
            {item}
          </span>
        ))}
      </div>

      {/* 2. Mobile Auto-Marquee (<=809px) */}
      <div className="block min-[810px]:hidden w-full h-full">
        <Marquee speed={18}>
          <div className="flex items-center gap-8 pr-8">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="font-semibold text-rail-fg tracking-normal text-[11px] whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
