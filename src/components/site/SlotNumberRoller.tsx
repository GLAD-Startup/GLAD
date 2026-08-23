import * as React from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlotDigitProps {
  digit: number;
  inView: boolean;
  delay?: number;
  duration?: number;
  className?: string;
  spins?: number;
}

// Reel with 2 full cycles before landing on target digit for a true mechanical roller feel
const REEL_CYCLES = 2; // 0-9 twice, then 0-9 final
const DIGIT_ARRAY = Array.from({ length: (REEL_CYCLES + 1) * 10 }, (_, i) => i % 10);

function SlotDigit({
  digit,
  inView,
  delay = 0,
  duration = 1.3,
  className,
  spins = 1,
}: SlotDigitProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{digit}</span>;
  }

  // Calculate final offset index: (spins * 10) + digit
  const finalIndex = spins * 10 + digit;
  const totalItems = DIGIT_ARRAY.length;
  const targetPercent = (finalIndex / totalItems) * 100;

  return (
    <span
      className={cn(
        "inline-flex flex-col h-[1.12em] overflow-hidden leading-[1.12em] select-none",
        className
      )}
      style={{ verticalAlign: "baseline" }}
    >
      <motion.span
        initial={{ y: "0%" }}
        animate={{ y: inView ? `-${targetPercent}%` : "0%" }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.12, 0.95, 0.28, 1], // snappy mechanical deceleration
        }}
        className="inline-flex flex-col"
      >
        {DIGIT_ARRAY.map((n, idx) => (
          <span
            key={idx}
            className="h-[1.12em] flex items-center justify-center font-mono"
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export interface SlotNumberRollerProps {
  value: string | number;
  prefix?: string;
  suffix?: string;
  className?: string;
  digitClassName?: string;
  delay?: number;
  once?: boolean;
}

export function SlotNumberRoller({
  value,
  prefix = "",
  suffix = "",
  className,
  digitClassName,
  delay = 0,
  once = false,
}: SlotNumberRollerProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, {
    margin: "-10% 0px -10% 0px",
    once,
  });

  const valueStr = String(value);
  const chars = valueStr.split("");

  return (
    <span
      ref={containerRef}
      className={cn("inline-flex items-baseline font-mono tracking-tight", className)}
    >
      {prefix && <span className="mr-0.5 select-none">{prefix}</span>}
      {chars.map((char, index) => {
        const isDigit = /\d/.test(char);
        if (isDigit) {
          const num = parseInt(char, 10);
          return (
            <SlotDigit
              key={index}
              digit={num}
              inView={isInView}
              delay={delay + index * 0.09}
              duration={1.2 + index * 0.1}
              spins={1}
              className={digitClassName}
            />
          );
        }
        return (
          <span key={index} className="inline-block">
            {char}
          </span>
        );
      })}
      {suffix && <span className="ml-0.5 select-none">{suffix}</span>}
    </span>
  );
}
