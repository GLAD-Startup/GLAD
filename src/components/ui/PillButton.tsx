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
    'inline-flex items-center justify-center',
    'border border-fg rounded-[999px] px-[26px] py-[13px] bg-transparent text-fg',
    'uppercase t-label font-semibold tracking-[0.02em]',
    'transition-colors duration-[220ms] ease-out',
    'hover:bg-fg hover:text-bg',
    'cursor-pointer select-none',
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        data-cursor="link"
        className={commonClasses}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} data-cursor="link" className={commonClasses} onClick={onClick}>
      {children}
    </Link>
  );
}
