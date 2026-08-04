import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("glad_cookie_consent");
    if (!consent) {
      // Delay slightly for smooth entrance after initial page load
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("glad_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("glad_cookie_consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="surface-card p-5 rounded-2xl border-3 border-border bg-card text-card-foreground shadow-[6px_6px_0px_0px_var(--brand)] dark:shadow-[6px_6px_0px_0px_var(--brand-2)] relative">
        <button
          onClick={handleEssentialOnly}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-surface-2 cursor-pointer"
          aria-label="Close cookie banner"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-start gap-3.5 pr-6">
          <div className="size-10 rounded-xl bg-brand-gradient grid place-items-center text-primary-foreground shrink-0 shadow-sm">
            <Cookie className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight text-foreground flex items-center gap-1.5">
              We value your privacy 🍪
            </h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              We use cookies and local storage to optimize your browsing experience, analyze site
              performance, and protect your data. Read our{" "}
              <Link
                to="/privacy"
                className="text-foreground underline font-semibold hover:text-brand transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/terms"
                className="text-foreground underline font-semibold hover:text-brand transition-colors"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-end gap-2.5">
          <button
            onClick={handleEssentialOnly}
            className="px-3.5 py-1.5 rounded-xl border-2 border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-150 cursor-pointer active:translate-y-0.5"
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-1.5 rounded-xl bg-brand text-black font-bold text-xs hover:bg-brand-2 transition-all duration-150 shadow-[2px_2px_0px_0px_#000] cursor-pointer active:translate-y-0.5 flex items-center gap-1"
          >
            <ShieldCheck className="size-3.5" />
            Allow Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
