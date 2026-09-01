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
  variant?: 'default' | 'inverted';
}

const getChildrenText = (node: React.ReactNode): string | null => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) {
    const parts: string[] = [];
    for (const item of node) {
      const str = getChildrenText(item);
      if (str === null) return null;
      parts.push(str);
    }
    return parts.join('');
  }
  return null;
};

export default function PillButton({
  href,
  children,
  className,
  target,
  rel,
  onClick,
  variant = 'default',
}: PillButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const isInverted = variant === 'inverted';

  const commonClasses = clsx(
    'group relative inline-flex items-center justify-center',
    'rounded-[999px] px-[28px] md:px-[34px] py-[12px] md:py-[13px] min-h-[46px] md:min-h-[50px]',
    'bg-transparent',
    isInverted
      ? 'border border-rail-fg text-rail-fg'
      : 'border border-fg text-fg',
    'uppercase text-[16px] md:text-[18px] font-semibold tracking-[-0.015em] leading-none',
    'cursor-pointer select-none overflow-hidden isolate',
    className
  );

  const textContent = getChildrenText(children);

  const renderContent = () => {
    if (textContent !== null) {
      return (
        <span
          className={clsx(
            'relative z-10 inline-flex items-center overflow-hidden transition-colors duration-300',
            isInverted ? 'group-hover:text-rail-bg' : 'group-hover:text-bg'
          )}
        >
          {textContent.split('').map((char, index) => (
            <span
              key={index}
              className="relative inline-block overflow-hidden h-[1.2em] leading-[1.2em]"
            >
              {/* Primary letter: translates from 0% to -100% on hover */}
              <span
                className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform"
                style={{
                  transitionDelay: `${index * 20}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>

              {/* Duplicate letter: absolute inset-0 starts at +100% and lands at exact 0% on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 will-change-transform"
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
    return (
      <span
        className={clsx(
          'relative z-10 transition-colors duration-300',
          isInverted ? 'group-hover:text-rail-bg' : 'group-hover:text-bg'
        )}
      >
        {children}
      </span>
    );
  };

  const filler = (
    <div
      aria-hidden="true"
      className={clsx(
        'absolute inset-0 z-0 rounded-[999px] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform',
        isInverted ? 'bg-rail-fg' : 'bg-fg'
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
