import { motion, useReducedMotion } from "framer-motion";

interface HighlightProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function HandDrawnUnderline({
  children,
  color = "var(--color-brass, #96770F)",
  className = "",
}: HighlightProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 100 10"
        fill="none"
        preserveAspectRatio="none"
        className="absolute left-0 bottom-[-4px] w-full h-[8px] pointer-events-none overflow-visible z-0"
      >
        <motion.path
          d="M 2,4 C 20,7 45,2 70,5 C 85,6 98,3 98,4 C 95,5 75,6 40,8 C 25,9 5,7 4,8"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
        />
      </svg>
    </span>
  );
}
