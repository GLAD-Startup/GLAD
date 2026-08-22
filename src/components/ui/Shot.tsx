import * as React from "react";
import { Surface } from "@/components/ui/Surface";
import { cn } from "@/lib/utils";

export interface ShotProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  category: string;
  title: string;
  ratio?: string;
  className?: string;
  hover?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

function getOptimizedSrcset(src: string, format: "avif" | "webp") {
  const dotIndex = src.lastIndexOf(".");
  if (dotIndex === -1) return undefined;
  const basePath = src.substring(0, dotIndex);
  return `${basePath}-480w.${format} 480w, ${basePath}-960w.${format} 960w, ${basePath}-1440w.${format} 1440w`;
}

export const Shot = React.forwardRef<HTMLDivElement, ShotProps>(
  (
    {
      src,
      alt,
      category,
      title,
      ratio = "16/10",
      className,
      hover = true,
      width = 800,
      height = 500,
      sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      ...props
    },
    ref
  ) => {
    return (
      <Surface
        ref={ref}
        hover={hover}
        className={cn(
          "p-0 overflow-hidden flex flex-col self-start h-auto w-full group",
          className
        )}
        {...props}
      >
        {/* Media Well */}
        <div
          className="relative w-full bg-[var(--color-sunk)] border-b border-[var(--color-rule)] overflow-hidden shrink-0"
          style={{ aspectRatio: ratio }}
        >
          {src ? (
            <img
              src={src}
              alt={alt || title}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full p-[12px] flex flex-col justify-center gap-[7px]">
              <div
                className="h-[9px] rounded-[3px] bg-[var(--color-rule)]"
                style={{ width: "44%" }}
              />
              <div
                className="h-[9px] rounded-[3px] bg-[var(--color-rule)]"
                style={{ width: "78%" }}
              />
              <div
                className="h-[9px] rounded-[3px] bg-[rgb(15_110_76/0.55)]"
                style={{ width: "62%" }}
              />
              <div
                className="h-[9px] rounded-[3px] bg-[var(--color-rule)]"
                style={{ width: "88%" }}
              />
              <div
                className="h-[9px] rounded-[3px] bg-[var(--color-rule)]"
                style={{ width: "62%" }}
              />
            </div>
          )}
        </div>

        {/* Meta block - height auto and strictly grow-0 flex-none */}
        <div className="px-4 py-[14px] flex flex-col grow-0 flex-none h-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-brass)] leading-none select-none">
            {category}
          </span>
          <h4 className="font-display text-[16px] font-medium text-[var(--color-ink)] mt-[6px] leading-snug">
            {title}
          </h4>
        </div>
      </Surface>
    );
  }
);
Shot.displayName = "Shot";
