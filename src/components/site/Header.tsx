import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "./ScrollProgress";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import logoUrl from "@/routes/images/website logo(white background compatible).png";

const navLinks = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (open) {
        setVisible(true);
        lastY = currentY;
        return;
      }

      if (currentY <= 64) {
        // At or near top of the page, header is always visible
        setVisible(true);
      } else if (currentY > lastY && currentY - lastY > 6) {
        // Scrolling down -> header moves up out of view
        setVisible(false);
      } else if (currentY < lastY && lastY - currentY > 6) {
        // Scrolling up -> header moves down into view
        setVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[64px] min-h-[64px] max-h-[64px] bg-[var(--color-card)] border-b select-none transition-all duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]",
          scrolled ? "border-[var(--color-rule)]" : "border-transparent",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="mx-auto max-w-[1120px] px-8 max-[720px]:px-5 h-[64px] flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="inline-flex items-center select-none group shrink-0">
            <img
              src={logoUrl}
              alt="GLAD Studio"
              width={166}
              height={46}
              className="h-[40px] sm:h-[46px] w-auto max-h-[48px] object-contain group-hover:opacity-90 transition-opacity duration-[var(--duration-1,150ms)]"
            />
          </Link>

          {/* Desktop Nav: Portfolio, Services, Process, Insights, About, Contact */}
          <nav className="hidden min-[721px]:flex items-center gap-6">
            {navLinks.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[13px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] font-medium"
                activeProps={{ className: "text-[var(--color-ink)] font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA: ghost Button with stronger border & ink text */}
          <div className="hidden min-[721px]:flex items-center">
            <Button
              variant="ghost"
              size="sm"
              arrow
              className="border-[var(--color-ink-3)] text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-sunk)]"
              data-cal-link="arjun-rajput-2mdsis"
              data-cal-config={JSON.stringify({
                layout: "month_view",
                theme: "light",
              })}
            >
              Book a call
            </Button>
          </div>

          {/* Mobile Sheet Toggle Button (44x44px target) */}
          <button
            type="button"
            className="min-[721px]:hidden size-[44px] flex items-center justify-center rounded-[var(--radius-md,8px)] border border-[var(--color-rule)] bg-[var(--color-card)] text-[var(--color-ink)] hover:bg-[var(--color-sunk)] transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="min-[721px]:hidden overflow-hidden border-b border-[var(--color-rule)] bg-[var(--color-card)] shadow-[0_4px_12px_rgba(25,28,33,0.06)]"
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="min-h-[48px] flex items-center px-3 text-[16px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:bg-[var(--color-sunk)] rounded-[var(--radius-md,8px)] font-medium transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]"
                >
                  Home
                </Link>

                {navLinks.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="min-h-[48px] flex items-center px-3 text-[16px] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:bg-[var(--color-sunk)] rounded-[var(--radius-md,8px)] font-medium transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]"
                  >
                    {n.label}
                  </Link>
                ))}

                <div className="pt-2 pb-1">
                  <Button
                    variant="primary"
                    size="md"
                    arrow
                    onClick={() => setOpen(false)}
                    data-cal-link="arjun-rajput-2mdsis"
                    data-cal-config={JSON.stringify({
                      layout: "month_view",
                      theme: "light",
                    })}
                    className="w-full justify-center"
                  >
                    Book a call
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
