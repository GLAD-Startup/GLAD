import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  /** Target section element ID to scroll to when clicked (without '#') */
  targetId?: string;
  /** Optional custom text label underneath the mouse (defaults to "SCROLL") */
  label?: string;
  /** Scroll distance in pixels before disappearing (defaults to 120) */
  threshold?: number;
  className?: string;
}

export function ScrollIndicator({
  targetId = "services",
  label = "SCROLL",
  threshold = 120,
  className,
}: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Disappear smoothly once the user has scrolled past threshold
      if (window.scrollY > threshold) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Offset by header height (64px) + slight breathing room
      const headerOffset = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jumping
      history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      aria-label={`Scroll down to ${targetId} section`}
      className={cn(
        "group inline-flex flex-col items-center gap-2 select-none cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-paper)] rounded-lg p-2",
        "transition-all duration-500 ease-[var(--ease-out)]",
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-3 scale-90 pointer-events-none",
        className
      )}
    >
      {/* Mouse Outer Body */}
      <div className="relative w-[22px] h-[36px] rounded-[12px] border-[1.5px] border-[var(--color-rule-hi)] group-hover:border-[var(--color-ink)] bg-[var(--color-card)]/80 backdrop-blur-[2px] shadow-[0_2px_8px_rgba(22,25,29,0.04)] group-hover:shadow-[0_4px_14px_rgba(22,25,29,0.08)] flex justify-center transition-all duration-[var(--duration-2,300ms)] ease-[var(--ease-out)]">
        {/* Animated Scroll Wheel */}
        <span
          className="absolute top-[6px] w-[3px] h-[7px] rounded-full bg-[var(--color-ink)] animate-mouse-wheel motion-reduce:animate-none"
          aria-hidden="true"
        />
      </div>

      {/* Label & Chevron Stack */}
      <div className="flex flex-col items-center gap-0.5">
        {label && (
          <span className="font-mono text-[10px] tracking-[0.24em] font-medium text-[var(--color-ink-3)] group-hover:text-[var(--color-ink)] transition-colors duration-[var(--duration-2,300ms)] uppercase leading-tight">
            {label}
          </span>
        )}
        <ChevronDown
          className="w-3.5 h-3.5 text-[var(--color-ink-3)] group-hover:text-[var(--color-ink)] animate-mouse-chevron motion-reduce:animate-none transition-colors duration-[var(--duration-2,300ms)] -mt-0.5"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}
