import React from 'react';
import clsx from 'clsx';

export interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={clsx('w-full h-[1px] bg-line', className)}
      role="separator"
    />
  );
}
