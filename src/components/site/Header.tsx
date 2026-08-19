import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "./ScrollProgress";
import darkLogo from "../../routes/images/website logo(black background compatible).png";
import lightLogo from "../../routes/images/website logo(white background compatible).png";
import { useTheme } from "../theme-provider";
import { getCalApi } from "@calcom/embed-react";

const productsList = [
  {
    to: "/products",
    label: "All Products Overview",
  },
  {
    to: "/products/glad-hms",
    label: "GLAD HMS (Hospitality SaaS)",
  },
  {
    to: "/products/settledesk",
    label: "SettleDesk (Real Estate SaaS)",
  },
] as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = (e: React.MouseEvent) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.classList.add("view-transitioning");

    const transition = document.startViewTransition(() => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      document.documentElement.animate(
        [
          {
            clipPath: `circle(0px at ${x}px ${y}px)`,
            filter: "brightness(1.5) blur(10px)",
            transform: "scale(0.95)",
          },
          {
            clipPath: `circle(${endRadius}px at ${x}px ${y}px)`,
            filter: "brightness(1) blur(0px)",
            transform: "scale(1)",
          },
        ],
        {
          duration: 800,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );

      document.documentElement.animate(
        [
          { transform: "scale(1)", filter: "blur(0px)", opacity: 1 },
          { transform: "scale(1.05)", filter: "blur(8px)", opacity: 0 },
        ],
        {
          duration: 800,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-old(root)",
        },
      );
    });

    transition.finished.then(() => {
      document.documentElement.classList.remove("view-transitioning");
    });
  };

  useEffect(() => {
    setIsClient(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme:
          theme === "dark" ||
          (theme === "system" &&
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? "dark"
            : "light",
      });
    })();
  }, [theme]);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-background/60 border-b border-border shadow-lg shadow-background/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={darkLogo}
              alt="Website Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 hidden dark:block"
            />
            <img
              src={lightLogo}
              alt="Website Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 block dark:hidden"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-surface/60"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="products-menu">
              <div className="item">
                <Link
                  to="/products"
                  className="link text-sm text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "text-foreground font-semibold" }}
                >
                  <span>Products</span>
                  <svg viewBox="0 0 360 360" xmlSpace="preserve">
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                      />
                    </g>
                  </svg>
                </Link>
                <div className="submenu">
                  {productsList.map((p) => (
                    <div key={p.to} className="submenu-item">
                      <Link to={p.to} className="submenu-link">
                        {p.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {nav
              .filter((n) => n.to !== "/")
              .map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-surface/60"
                  activeProps={{ className: "text-foreground font-semibold" }}
                >
                  {n.label}
                </Link>
              ))}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface/60 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              data-cal-link="arjun-rajput-2mdsis"
              data-cal-config={JSON.stringify({
                layout: "month_view",
                theme:
                  theme === "dark" ||
                  (theme === "system" &&
                    typeof window !== "undefined" &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
                    ? "dark"
                    : "light",
              })}
              className="btn-primary text-sm !py-2 !px-5"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface/60 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-2xl"
            >
              <div className="px-6 py-5 flex flex-col gap-1">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors"
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Mobile Products Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <button
                    onClick={() => setMobileProductsOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors"
                  >
                    <span>Products</span>
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 overflow-hidden flex flex-col gap-1 my-1"
                      >
                        {productsList.map((p) => (
                          <Link
                            key={p.to}
                            to={p.to}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground rounded-md hover:bg-surface/40 font-medium"
                          >
                            {p.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {nav
                  .filter((n) => n.to !== "/")
                  .map((n, i) => (
                    <motion.div
                      key={n.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (i + 2) * 0.05 + 0.1 }}
                    >
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors"
                      >
                        {n.label}
                      </Link>
                    </motion.div>
                  ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={handleThemeToggle}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors"
                    aria-label="Toggle theme"
                  >
                    <span>Theme</span>
                    {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <button
                    onClick={() => setOpen(false)}
                    data-cal-link="arjun-rajput-2mdsis"
                    data-cal-config={JSON.stringify({
                      layout: "month_view",
                      theme:
                        theme === "dark" ||
                        (theme === "system" &&
                          typeof window !== "undefined" &&
                          window.matchMedia("(prefers-color-scheme: dark)").matches)
                          ? "dark"
                          : "light",
                    })}
                    className="w-full mt-3 btn-primary justify-center text-sm"
                  >
                    Book a Call
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
