import React from 'react';
import clsx from 'clsx';

export interface DividerProps {
  className?: string;
  'data-intro'?: string;
}

export default function Divider({ className, 'data-intro': dataIntro }: DividerProps) {
  return (
    <div
      data-intro={dataIntro}
      className={clsx('w-full h-[1px] bg-line', className)}
      role="separator"
    />
  );
}
