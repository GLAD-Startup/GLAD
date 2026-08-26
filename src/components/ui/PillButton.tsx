import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function PillButton({
  href,
  children,
  className,
  target,
  rel,
  onClick,
}: PillButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  const commonClasses = clsx(
    'group relative inline-flex items-center justify-center',
    'border border-fg rounded-[999px] px-[36px] py-[16px] min-h-[52px] bg-transparent text-fg',
    'uppercase text-[14px] md:text-[14.5px] font-semibold tracking-[0.04em]',
    'transition-colors duration-[220ms] ease-out',
    'hover:bg-fg hover:text-bg',
    'cursor-pointer select-none overflow-hidden',
    className
  );

  const renderContent = () => {
    if (typeof children === 'string') {
      const text = children;
      return (
        <span className="relative inline-flex overflow-hidden font-semibold">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="relative inline-block overflow-hidden"
            >
              {/* Primary letter: translates from 0% to -100% on hover */}
              <span
                className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform"
                style={{
                  transitionDelay: `${index * 15}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>

              {/* Duplicate letter: absolute inset-0 starts at +100% and lands at exact 0% on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 will-change-transform"
                style={{
                  transitionDelay: `${index * 15}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          ))}
        </span>
      );
    }
    return children;
  };

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
        {renderContent()}
      </a>
    );
  }

  return (
    <Link href={href} data-cursor="pointer-white" className={commonClasses} onClick={onClick}>
      {renderContent()}
    </Link>
  );
}
