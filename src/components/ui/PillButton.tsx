import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function PillButton({
  href,
  children,
  className,
  variant = 'light',
  target,
  rel,
  onClick,
}: PillButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const isDark = variant === 'dark';

  const commonClasses = clsx(
    'group relative inline-flex items-center justify-center',
    'rounded-[999px] px-[28px] md:px-[34px] py-[12px] md:py-[13px] min-h-[46px] md:min-h-[50px]',
    isDark
      ? 'border border-white/40 hover:border-white bg-transparent text-[#FBFBF9]'
      : 'border border-fg bg-transparent text-fg',
    'uppercase text-[16px] md:text-[18px] font-semibold tracking-[-0.015em] leading-none',
    'cursor-pointer select-none overflow-hidden isolate',
    className
  );

  const hoverTextColor = isDark ? 'group-hover:text-[#0A0A0B]' : 'group-hover:text-bg';

  const renderContent = () => {
    if (typeof children === 'string') {
      const text = children;
      return (
        <span className={clsx('relative z-10 inline-flex items-center overflow-hidden transition-colors duration-400', hoverTextColor)}>
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="relative inline-block overflow-hidden h-[1.2em] leading-[1.2em]"
            >
              {/* Primary letter: translates from 0% to -100% on hover */}
              <span
                className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full will-change-transform"
                style={{
                  transitionDelay: `${index * 20}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>

              {/* Duplicate letter: absolute inset-0 starts at +100% and lands at exact 0% on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 will-change-transform"
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
    return <span className={clsx('relative z-10 transition-colors duration-400', hoverTextColor)}>{children}</span>;
  };

  const filler = (
    <div
      aria-hidden="true"
      className={clsx(
        'absolute inset-0 z-0 rounded-[999px] translate-y-full group-hover:translate-y-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
        isDark ? 'bg-[#FBFBF9]' : 'bg-fg'
      )}
    />
  );

  if (isExternal) {
    return (
      <a
        href={href}
        data-cursor="pointer-white"
        className={commonClasses}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
      >
        {filler}
        {renderContent()}
      </a>
    );
  }

  return (
    <Link href={href} data-cursor="pointer-white" className={commonClasses} onClick={onClick}>
      {filler}
      {renderContent()}
    </Link>
  );
}
