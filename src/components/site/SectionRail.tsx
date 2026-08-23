import * as React from "react";
import { useSection } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export interface SectionRailProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: string | number;
  label: string;
  meta?: string;
  className?: string;
}

export function SectionRail({
  index: explicitIndex,
  label,
  meta,
  className,
  ...props
}: SectionRailProps) {
  const sectionContext = useSection();
  const isDeep = sectionContext?.tone === "deep";

  // Derive from prop or parent Section
  const rawIndex =
    explicitIndex !== undefined
      ? typeof explicitIndex === "number"
        ? String(explicitIndex).padStart(2, "0")
        : explicitIndex
      : sectionContext?.index ?? "01";

  // Strip any § prefix if present
  const formattedIndex = rawIndex.replace(/^§\s*/, "");

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 sm:gap-[14px] mb-5 sm:mb-[28px] w-full min-w-0 overflow-hidden select-none",
        className
      )}
      {...props}
    >
      {/* Index (01) */}
      <span className="font-mono text-[12px] tracking-[0.06em] text-[var(--color-brass)] shrink-0 font-medium">
        {formattedIndex}
      </span>

      {/* Label: stays brass in deep tone, ink-3 in light */}
      <span
        className={cn(
          "font-mono text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.14em] uppercase shrink-0 font-medium truncate max-w-[220px] sm:max-w-none",
          isDeep ? "text-[var(--color-brass)]" : "text-[var(--color-ink-3)]"
        )}
      >
        {label}
      </span>

      {/* 1px Rule */}
      <div className="h-px flex-1 min-w-[12px] bg-[var(--color-rule)]" aria-hidden="true" />

      {/* Optional Meta - hidden on small mobile to prevent text blowout */}
      {meta && (
        <span
          className={cn(
            "font-mono text-[12px] tracking-[0.14em] uppercase shrink-0 font-medium hidden sm:inline-block truncate max-w-[260px] md:max-w-none",
            isDeep
              ? "text-[color-mix(in_oklab,var(--color-deep-ink)_60%,transparent)]"
              : "text-[var(--color-ink-3)]"
          )}
        >
          {meta}
        </span>
      )}
    </div>
  );
}
