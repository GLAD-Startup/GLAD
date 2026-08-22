import * as React from "react";
import { cn } from "@/lib/utils";

/* ── Section Context for Auto-Numbering & Tone ───────────── */

export type SectionTone = "paper" | "card" | "deep";

export interface SectionContextValue {
  index: string;
  tone: SectionTone;
}

export const SectionContext = React.createContext<SectionContextValue>({
  index: "01",
  tone: "paper",
});

export function useSection() {
  return React.useContext(SectionContext);
}

/* ── Section Component ────────────────────────────────────── */

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "compact" | "default" | "hero";
  tone?: SectionTone;
  divider?: boolean;
  index?: string | number;
  background?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  size = "default",
  tone = "paper",
  divider,
  index = "01",
  background,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  const formattedIndex =
    typeof index === "number" ? String(index).padStart(2, "0") : index;

  const sizeClasses = {
    compact: "py-[64px] min-[721px]:py-[var(--spacing-compact)]",
    default: "py-[64px] min-[721px]:py-[var(--spacing-default)]",
    hero: "py-[64px] min-[721px]:py-[var(--spacing-hero)]",
  };

  const toneClasses: Record<SectionTone, string> = {
    paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
    card: "bg-[var(--color-card)] text-[var(--color-ink)]",
    deep: "bg-[var(--color-deep)] text-[var(--color-deep-ink)] [--color-rule:var(--color-deep-rule)] [--color-rule-hi:var(--color-deep-rule)] [--color-ink:var(--color-deep-ink)] [--color-ink-2:color-mix(in_oklab,var(--color-deep-ink)_82%,transparent)] [--color-ink-3:color-mix(in_oklab,var(--color-deep-ink)_60%,transparent)]",
  };

  // If divider is explicitly boolean, use it. Otherwise, default is false for hero, true for others.
  const showDivider = divider !== undefined ? divider : size !== "hero";

  return (
    <SectionContext.Provider value={{ index: formattedIndex, tone }}>
      <section
        className={cn(
          "relative w-full transition-colors duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]",
          toneClasses[tone],
          showDivider && "border-t border-[var(--color-rule)]",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {background}
        <div
          className={cn(
            "max-w-[1120px] mx-auto px-8 max-[720px]:px-5 w-full",
            containerClassName
          )}
        >
          {children}
        </div>
      </section>
    </SectionContext.Provider>
  );
}

// Kept for backward compatibility if imported elsewhere
export function SectionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
