import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const dockLinks = [
  { to: "/products", label: "Products" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function FloatingFooter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let isFooterIntersecting = false;

    const checkVisibility = () => {
      const scrollY = window.scrollY;
      const footerEl = document.querySelector("footer");
      
      let footerNear = false;
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        // Disappear as soon as the main footer comes within 80px of the viewport bottom
        if (rect.top <= window.innerHeight + 80) {
          footerNear = true;
        }
      }

      // Show when scrolled down past 280px and footer is not visible/near
      const shouldShow = scrollY > 280 && !isFooterIntersecting && !footerNear;
      setVisible(shouldShow);
    };

    const footerEl = document.querySelector("footer");
    let observer: IntersectionObserver | null = null;

    if (footerEl) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isFooterIntersecting = entry.isIntersecting;
          checkVisibility();
        },
        { threshold: 0, rootMargin: "0px 0px 100px 0px" }
      );
      observer.observe(footerEl);
    }

    const onScroll = () => {
      checkVisibility();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (observer && footerEl) {
        observer.unobserve(footerEl);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <aside
      aria-label="Quick navigation"
      className={cn(
        "fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-20px)] sm:max-w-[calc(100vw-32px)] select-none transition-all duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2.5 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[var(--color-rule-hi)] bg-[var(--color-card)]/95 backdrop-blur-md shadow-[0_8px_30px_rgb(25_28_33/0.12)]">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="hidden sm:inline-flex items-center pr-2 border-r border-[var(--color-rule)] font-display text-[13px] tracking-tight leading-none text-[var(--color-ink)] font-bold hover:text-[var(--color-brass)] transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]"
        >
          GLAD
        </Link>

        {/* Quick Nav Links - smoothly scrollable on mobile without cutting off */}
        <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar py-0.5 max-w-[calc(100vw-145px)] sm:max-w-none">
          {dockLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-2 sm:px-2.5 py-1 text-[11px] sm:text-[13px] font-medium text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:bg-[var(--color-sunk)] rounded-full transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] whitespace-nowrap shrink-0"
              activeProps={{ className: "text-[var(--color-ink)] font-semibold bg-[var(--color-sunk)]" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="pl-1 sm:pl-2 border-l border-[var(--color-rule)] shrink-0">
          <Button
            variant="primary"
            size="sm"
            arrow
            data-cal-link="arjun-rajput-2mdsis"
            data-cal-config={JSON.stringify({
              layout: "month_view",
              theme: "light",
            })}
            className="h-[28px] sm:h-[34px] px-2.5 sm:px-3.5 text-[11px] sm:text-[13px] rounded-full shadow-none whitespace-nowrap"
          >
            Book a call
          </Button>
        </div>
      </div>
    </aside>
  );
}
