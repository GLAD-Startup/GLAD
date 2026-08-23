import * as React from "react";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
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
  index?: number;
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
      index = 0,
      ...props
    },
    forwardedRef
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // 1. Scroll-driven Parallax
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
    });

    // Staggered column vertical offset based on card index (0, 1, 2)
    const cardParallaxOffsets: [number, number] =
      index === 1 ? [30, -30] : index === 2 ? [-15, 20] : [-25, 25];

    const cardY = useTransform(scrollYProgress, [0, 1], cardParallaxOffsets);
    const cardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

    // Internal Image Window Parallax: moves smoothly inside the clipped media well
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // 2. Interactive Cursor 3D Tilt on Hover
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useSpring(0, { stiffness: 300, damping: 25 });
    const mouseY = useSpring(0, { stiffness: 300, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 12); // rotateY between -6deg and +6deg
      mouseY.set(-y * 12); // rotateX between -6deg and +6deg
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1000px" }}
        className="w-full h-auto"
      >
        <motion.div
          ref={forwardedRef}
          style={{
            y: shouldReduceMotion ? 0 : cardY,
            rotateX: shouldReduceMotion ? 0 : isHovered ? mouseY : cardRotateX,
            rotateY: shouldReduceMotion ? 0 : mouseX,
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "bg-[var(--color-card)] border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] p-0 overflow-hidden flex flex-col self-start h-auto w-full group select-none shadow-[0_1px_2px_rgba(25,28,33,0.04),0_4px_14px_rgba(25,28,33,0.045)] hover:shadow-[0_4px_20px_rgba(25,28,33,0.08)] hover:border-[var(--color-brass)]/40 transition-colors duration-300",
            className
          )}
          {...props}
        >
          {/* Media Well with Parallax Overflow Containment */}
          <div
            className="relative w-full bg-[var(--color-sunk)] border-b border-[var(--color-rule)] overflow-hidden shrink-0"
            style={{ aspectRatio: ratio }}
          >
            {src ? (
              <motion.div
                style={{
                  y: shouldReduceMotion ? "0%" : imageY,
                  scale: 1.2,
                }}
                className="w-full h-full will-change-transform"
              >
                <img
                  src={src}
                  alt={alt || title}
                  width={width}
                  height={height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </motion.div>
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

          {/* Meta block */}
          <div className="px-4 py-[14px] flex flex-col grow-0 flex-none h-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-brass)] leading-none font-semibold">
              {category}
            </span>
            <h4 className="font-display text-[16px] font-medium text-[var(--color-ink)] mt-[6px] leading-snug group-hover:text-[var(--color-brass)] transition-colors duration-200">
              {title}
            </h4>
          </div>
        </motion.div>
      </div>
    );
  }
);
Shot.displayName = "Shot";
