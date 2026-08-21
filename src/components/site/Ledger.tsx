import * as React from "react";
import { Surface } from "@/components/ui/Surface";
import { cn } from "@/lib/utils";

export interface LedgerRow {
  key: string;
  value: string;
  accent?: string;
}

export interface LedgerProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: LedgerRow[];
  hover?: boolean;
  className?: string;
}

export function Ledger({ rows, hover = false, className, ...props }: LedgerProps) {
  return (
    <Surface
      hover={hover}
      className={cn("p-0 overflow-hidden w-full divide-y divide-[var(--color-rule)]", className)}
      {...props}
    >
      {rows.map((r, i) => {
        const isPercent = r.accent?.startsWith("%");

        return (
          <div
            key={`${r.key}-${i}`}
            className="flex justify-between items-baseline gap-5 px-[22px] py-[15px]"
          >
            {/* Monospace Key */}
            <span className="font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--color-ink-3)] shrink-0 select-none">
              {r.key}
            </span>

            {/* Monospace Value + Accent (% is rendered flush, others with 1 space) */}
            <div className="font-mono text-[15px] text-[var(--color-ink)] text-right flex items-baseline flex-wrap justify-end">
              <span>{r.value}</span>
              {r.accent && (
                <span
                  className={cn(
                    "text-[var(--color-brass)] font-mono text-[15px]",
                    !isPercent && "ml-1.5"
                  )}
                >
                  {r.accent}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </Surface>
  );
}
