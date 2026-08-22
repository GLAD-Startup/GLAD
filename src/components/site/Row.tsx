import * as React from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export interface RowProps {
  index?: string | number;
  title: string;
  description?: React.ReactNode;
  meta?: string;
  href?: string;
  className?: string;
}

export function Row({
  index,
  title,
  description,
  meta,
  href,
  className,
}: RowProps) {
  // Format index string (e.g. 1 -> "01")
  const formattedIndex =
    index !== undefined
      ? typeof index === "number"
        ? String(index).padStart(2, "0")
        : index
      : null;

  const content = (
    <div
      className={cn(
        "group relative grid items-center gap-6 py-6 px-2 border-b border-[var(--color-rule)] last:border-b-0 group-last/row:border-b-0 rounded-[var(--radius-md,8px)]",
        formattedIndex
          ? "grid-cols-[64px_1fr_auto] max-[720px]:grid-cols-[40px_1fr]"
          : "grid-cols-[1fr_auto]",
        "transition-all duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]",
        href && "cursor-pointer hover:bg-[var(--color-card)] hover:px-4",
        className
      )}
    >
      {/* Index */}
      {formattedIndex && (
        <span className="font-mono text-[13px] text-[var(--color-brass)] font-medium select-none">
          {formattedIndex}
        </span>
      )}

      {/* Main Content */}
      <div className="flex flex-col min-w-0">
        <h3 className="font-display text-[20px] font-medium tracking-[-0.018em] text-[var(--color-ink)] transition-colors">
          {title}
        </h3>
        {description && (
          <div className="text-[14px] text-[var(--color-ink-2)] mt-1 leading-relaxed">
            {description}
          </div>
        )}
        {/* Responsive mobile meta placement */}
        {meta && (
          <span className="hidden max-[720px]:inline-block font-mono text-[12px] text-[var(--color-ink-3)] mt-1.5 whitespace-nowrap">
            {meta}
          </span>
        )}
      </div>

      {/* Desktop Meta */}
      {meta && (
        <span className="font-mono text-[12px] text-[var(--color-ink-3)] whitespace-nowrap max-[720px]:hidden select-none">
          {meta}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block no-underline group/row last:[&>div]:border-b-0">
        {content}
      </Link>
    );
  }

  return content;
}
