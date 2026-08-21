import * as React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  live?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ live = false, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 h-[28px] px-3 rounded-[999px] bg-[var(--color-card)] border border-[var(--color-rule)] font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-ink-2)] select-none whitespace-nowrap leading-none",
          className
        )}
        {...props}
      >
        {live && (
          <span
            className="size-[6px] rounded-full bg-[var(--color-live)] shadow-[0_0_0_3px_rgb(15_110_76/0.12)] shrink-0"
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);
Chip.displayName = "Chip";
