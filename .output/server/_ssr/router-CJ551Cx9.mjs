import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { j } from "../_libs/calcom__embed-react.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BPMMSW8U.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { B as Briefcase, P as PanelsTopLeft, M as Mail, a as Phone, A as ArrowUp, X, C as Cookie, S as ShieldCheck, H as Hotel, b as Building2 } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BsS43On_.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logoUrl = "/assets/main%20logo-Be0UhGNI.png";
const initialState = {
  theme: "dark",
  setTheme: () => null
};
const ThemeProviderContext = reactExports.createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "glad-ui-theme-v2",
  ...props
}) {
  const [theme, setTheme] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(storageKey) || defaultTheme;
    }
    return defaultTheme;
  });
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
const useTheme = () => {
  const context = reactExports.useContext(ThemeProviderContext);
  if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
function FloatingFooter() {
  const [visible, setVisible] = reactExports.useState(false);
  const { theme } = useTheme();
  reactExports.useEffect(() => {
    (async function() {
      const cal = await j();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      });
    })();
  }, [theme]);
  const handleScroll = reactExports.useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const nearBottom = scrollY + winHeight > docHeight - 600;
    setVisible(scrollY > 400 && !nearBottom);
  }, []);
  reactExports.useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const calConfig = JSON.stringify({
    layout: "month_view",
    theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      className: "fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-xl",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "floating-bar flex items-center justify-between gap-3 px-2.5 py-2 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "floating-bar-link", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "floating-bar-link", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Work" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "floating-bar-link", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Contact" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              "data-cal-link": "arjun-rajput-2mdsis",
              "data-cal-config": calConfig,
              className: "inline-flex items-center gap-1.5 rounded-xl bg-brand-gradient px-4 py-2 text-xs font-medium text-primary-foreground shadow-md shadow-[var(--brand)]/20 hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3" }),
                "Book a Call"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: scrollToTop,
              className: "size-8 rounded-xl border border-border bg-surface/80 backdrop-blur-sm grid place-items-center text-muted-foreground hover:text-foreground hover:border-ring/40 transition-all duration-300 hover:-translate-y-0.5",
              "aria-label": "Back to top",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "size-3.5" })
            }
          )
        ] })
      ] })
    }
  ) });
}
function CookieConsent() {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const consent = localStorage.getItem("glad_cookie_consent");
    if (!consent) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-5 left-5 right-5 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-2xl border-3 border-border bg-card text-card-foreground shadow-[6px_6px_0px_0px_var(--brand)] dark:shadow-[6px_6px_0px_0px_var(--brand-2)] relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleEssentialOnly,
        className: "absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-surface-2 cursor-pointer",
        "aria-label": "Close cookie banner",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 pr-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-brand-gradient grid place-items-center text-primary-foreground shrink-0 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cookie, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold tracking-tight text-foreground flex items-center gap-1.5", children: "We value your privacy 🍪" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: [
          "We use cookies and local storage to optimize your browsing experience, analyze site performance, and protect your data. Read our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/privacy",
              className: "text-foreground underline font-semibold hover:text-brand transition-colors",
              children: "Privacy Policy"
            }
          ),
          " ",
          "and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/terms",
              className: "text-foreground underline font-semibold hover:text-brand transition-colors",
              children: "Terms of Service"
            }
          ),
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border/50 flex items-center justify-end gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleEssentialOnly,
          className: "px-3.5 py-1.5 rounded-xl border-2 border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-150 cursor-pointer active:translate-y-0.5",
          children: "Essential Only"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleAcceptAll,
          className: "px-4 py-1.5 rounded-xl bg-brand text-black font-bold text-xs hover:bg-brand-2 transition-all duration-150 shadow-[2px_2px_0px_0px_#000] cursor-pointer active:translate-y-0.5 flex items-center gap-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5" }),
            "Allow Cookies"
          ]
        }
      )
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$r = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        name: "description",
        content: "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally."
      },
      {
        name: "keywords",
        content: "web development agency, AI development, mobile app development, data engineering, React, Flutter, machine learning, India"
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0A0A0B" },
      { name: "author", content: "Glad Studio" },
      // Open Graph
      { property: "og:title", content: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        property: "og:description",
        content: "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally."
      },
      { property: "og:url", content: "https://gladstudio.net/" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Glad Studio" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        name: "twitter:description",
        content: "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally."
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" }
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: logoUrl },
      { rel: "canonical", href: "https://gladstudio.net/" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://gladstudio.net/#organization",
              name: "Glad Studio",
              url: "https://gladstudio.net",
              logo: {
                "@type": "ImageObject",
                url: "https://gladstudio.net/og-image.png"
              },
              sameAs: [
                "https://x.com/_GLAD_Studio",
                "https://www.linkedin.com/company/glad-studio-2k26",
                "https://www.instagram.com/__gladstudio/",
                "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@gladstudio.net",
                contactType: "customer service"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://gladstudio.net/#website",
              url: "https://gladstudio.net",
              name: "Glad Studio",
              publisher: {
                "@id": "https://gladstudio.net/#organization"
              },
              inLanguage: "en-US"
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://gladstudio.net/#service",
              name: "Glad Studio",
              url: "https://gladstudio.net",
              image: "https://gladstudio.net/og-image.png",
              description: "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN"
              },
              priceRange: "$$",
              serviceType: [
                "MVP Development",
                "Web Application Development",
                "Mobile App Development",
                "AI & Machine Learning Solutions",
                "Data Engineering & Automation"
              ]
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              (function() {
                try {
                  var storageKey = "glad-ui-theme-v2";
                  var theme = localStorage.getItem(storageKey);
                  var defaultTheme = "dark";
                  var finalTheme = theme || defaultTheme;
                  
                  if (finalTheme === "system") {
                    finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  }
                  
                  if (finalTheme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { defaultTheme: "dark", storageKey: "glad-ui-theme-v2", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$r.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CookieConsent, {})
  ] });
}
const $$splitComponentImporter$q = () => import("./terms-CMXYYcp0.mjs");
const Route$q = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Service — GLAD studio"
    }, {
      name: "description",
      content: "Master Terms of Service governing product development, custom software engineering, intellectual property transfer, and engagement terms with GLAD studio."
    }, {
      property: "og:title",
      content: "Terms of Service — GLAD studio"
    }, {
      property: "og:description",
      content: "Master Terms of Service governing product development, custom software engineering, and IP transfer with GLAD studio."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/terms"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/terms"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./services-CtZtiw1B.mjs");
const Route$p = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./products-Dm1GxC83.mjs");
const Route$o = createFileRoute("/products")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./process-CATXORq3.mjs");
const Route$n = createFileRoute("/process")({
  head: () => ({
    meta: [{
      title: "Our Process — GLAD studio"
    }, {
      name: "description",
      content: "Our development workflow, from discovery call to post-launch support — predictable, transparent, and built to ship."
    }, {
      property: "og:title",
      content: "Our Process — GLAD studio"
    }, {
      property: "og:description",
      content: "Our development workflow, from discovery call to post-launch support."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/process"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/process"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebPage",
          "@id": "https://gladstudio.net/process/#webpage",
          url: "https://gladstudio.net/process",
          name: "Our Process — GLAD studio",
          description: "Our development workflow, from discovery call to post-launch support — predictable, transparent, and built to ship.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/process/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Process",
            item: "https://gladstudio.net/process"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./privacy-D8hWLQ1e.mjs");
const Route$m = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — GLAD studio"
    }, {
      name: "description",
      content: "Comprehensive Privacy Policy detailing how GLAD studio collects, protects, processes, and manages personal data, client project assets, and user privacy."
    }, {
      property: "og:title",
      content: "Privacy Policy — GLAD studio"
    }, {
      property: "og:description",
      content: "Comprehensive Privacy Policy detailing how GLAD studio collects, protects, processes, and manages personal data."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/privacy"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/privacy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./portfolio-B1RpanQh.mjs");
const Route$l = createFileRoute("/portfolio")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./insights-DZk7A3B3.mjs");
const Route$k = createFileRoute("/insights")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./contact-ClXZghF_.mjs");
const Route$j = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — GLAD studio"
    }, {
      name: "description",
      content: "Let's discuss your project. Book a free 30-minute consultation with GLAD studio."
    }, {
      property: "og:title",
      content: "Contact Us — GLAD studio"
    }, {
      property: "og:description",
      content: "Let's discuss your project. Book a free 30-minute consultation."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/contact"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/contact"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ContactPage",
          "@id": "https://gladstudio.net/contact/#webpage",
          url: "https://gladstudio.net/contact",
          name: "Contact Us — GLAD studio",
          description: "Let's discuss your project. Book a free 30-minute consultation with GLAD studio.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/contact/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://gladstudio.net/contact"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./about-CdPBU6iN.mjs");
const Route$i = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — GLAD studio"
    }, {
      name: "description",
      content: "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life."
    }, {
      property: "og:title",
      content: "About Us — GLAD studio"
    }, {
      property: "og:description",
      content: "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/about"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/about"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "AboutPage",
          "@id": "https://gladstudio.net/about/#webpage",
          url: "https://gladstudio.net/about",
          name: "About Us — GLAD studio",
          description: "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/about/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://gladstudio.net/about"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter$h = () => import("./index-Hh4e6Kru.mjs");
const getAvailableSlots = createServerFn({
  method: "GET"
}).handler(createSsrRpc("55cbb0ccceeac9040323e7bc33abb4620b0e86351462f98a7b8c26bb9a2beeec"));
const Route$h = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Glad Studio — Web, Mobile & AI Development Agency"
    }, {
      name: "description",
      content: "We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale."
    }, {
      property: "og:title",
      content: "Glad Studio — Web, Mobile & AI Development Agency"
    }, {
      property: "og:description",
      content: "We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/"
    }]
  }),
  loader: async () => {
    const slots = await getAvailableSlots();
    return {
      slots
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./services.index-DLTprStO.mjs");
const Route$g = createFileRoute("/services/")({
  head: () => ({
    meta: [{
      title: "Software Engineering & AI Product Services — GLAD Studio"
    }, {
      name: "description",
      content: "Explore custom software engineering services by GLAD Studio: MVP development, custom web applications, cross-platform mobile apps, AI solutions, and business automation."
    }, {
      property: "og:title",
      content: "Software Engineering & AI Product Services — GLAD Studio"
    }, {
      property: "og:description",
      content: "MVP development, web and mobile applications, AI solutions and business automation — built by a senior engineering team."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/services"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Software Engineering & AI Product Services — GLAD Studio"
    }, {
      name: "twitter:description",
      content: "Custom MVP development, full-stack web apps, Flutter mobile apps, AI systems, and workflow automation."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/services"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebPage",
          "@id": "https://gladstudio.net/services/#webpage",
          url: "https://gladstudio.net/services",
          name: "Software Engineering & AI Product Services — GLAD Studio",
          description: "MVP development, web and mobile applications, AI solutions and business automation — built by a senior engineering team.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/services/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://gladstudio.net/services"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const buildingImg = "/assets/building-BSYQeUHI.png";
const hotelBgImg = "/assets/hotel-building-Lw3H1hBm.png";
const $$splitComponentImporter$f = () => import("./products.index-t6HIP3o1.mjs");
const productsData = [{
  slug: "glad-hms",
  name: "GLAD HMS",
  category: "Hospitality SaaS",
  tagline: "Modular Hotel Management & Operations Platform",
  description: "A modular hospitality management system built by GLAD Studio for managing hotel and hospitality operations through a unified digital platform. Unifies room reservations, front desk workflows, mobile housekeeping, stay folios, and USALI revenue analytics.",
  route: "/products/glad-hms",
  status: "Live",
  badgeText: "Hotel Operating System",
  heroImage: hotelBgImg,
  icon: Hotel,
  metrics: [{
    value: "100%",
    label: "Modular System"
  }, {
    value: "Row-Level",
    label: "Inventory Locks"
  }, {
    value: "Multi-Property",
    label: "Scoped RBAC"
  }],
  keyFeatures: ["Multi-tenant PostgreSQL architecture with isolated tenant data", "Live reservation calendar with overlap prevention row locks", "Front desk check-in/out and automated room status transitions", "Stay folio accounting, split billing, and Indian GST tax slabs"]
}, {
  slug: "settledesk",
  name: "SettleDesk",
  category: "Real Estate SaaS",
  tagline: "Run Your Entire Brokerage on One Platform",
  description: "All-in-one multi-tenant real estate operating system. Connects field agents on mobile, brokerage managers on web, and immutable audit ledgers in real time.",
  route: "/products/settledesk",
  status: "Live",
  badgeText: "Real Estate Operating System",
  heroImage: buildingImg,
  icon: Building2,
  metrics: [{
    value: "500+",
    label: "Brokers Onboarded"
  }, {
    value: "10,000+",
    label: "Units Managed"
  }, {
    value: "99.9%",
    label: "Uptime SLA"
  }],
  keyFeatures: ["PostgreSQL Row-Level Security (RLS) isolation", "Interactive 3-tier deal cascade & split engine", "Field agent mobile contract submission", "Version-controlled commission structure rules"]
}];
const Route$f = createFileRoute("/products/")({
  head: () => ({
    meta: [{
      title: "Products & SaaS Platforms — Glad Studio"
    }, {
      name: "description",
      content: "Explore proprietary software applications engineered and operated by Glad Studio, including GLAD HMS for hospitality operations and SettleDesk for real estate brokerages."
    }, {
      property: "og:title",
      content: "Products & SaaS Platforms — Glad Studio"
    }, {
      property: "og:description",
      content: "Explore proprietary SaaS applications engineered and operated by Glad Studio, including GLAD HMS and SettleDesk."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/products"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Products & SaaS Platforms — Glad Studio"
    }, {
      name: "twitter:description",
      content: "Explore proprietary SaaS platforms engineered and operated by Glad Studio."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/products"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Software Products by Glad Studio",
        description: "Proprietary SaaS platforms engineered by Glad Studio.",
        url: "https://gladstudio.net/products",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          name: "GLAD HMS",
          url: "https://gladstudio.net/products/glad-hms"
        }, {
          "@type": "ListItem",
          position: 2,
          name: "SettleDesk",
          url: "https://gladstudio.net/products/settledesk"
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./portfolio.index-BdEBXDQK.mjs");
const Route$e = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [{
      title: "Our Portfolio — GLAD studio"
    }, {
      name: "description",
      content: "Selected projects across SaaS, mobile, AI and business automation — built by GLAD studio for startups and growing businesses."
    }, {
      property: "og:title",
      content: "Our Portfolio — GLAD studio"
    }, {
      property: "og:description",
      content: "Selected projects across SaaS, mobile, AI and business automation."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/portfolio"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "CollectionPage",
          "@id": "https://gladstudio.net/portfolio/#webpage",
          url: "https://gladstudio.net/portfolio",
          name: "Our Portfolio — GLAD studio",
          description: "Selected projects across SaaS, mobile, AI and business automation — built by GLAD studio for startups and growing businesses.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/portfolio/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://gladstudio.net/portfolio"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./insights.index-CEZU-sDo.mjs");
const Route$d = createFileRoute("/insights/")({
  head: () => ({
    meta: [{
      title: "AI Engineering Insights & Technical Guides — GLAD Studio"
    }, {
      name: "description",
      content: "Practical engineering guides on AI development, AI agents, RAG systems, LLM applications, and software architecture by GLAD Studio."
    }, {
      property: "og:title",
      content: "AI Engineering Insights & Technical Guides — GLAD Studio"
    }, {
      property: "og:description",
      content: "Practical engineering guides on AI development, AI agents, RAG systems, LLM applications, and software architecture by GLAD Studio."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/insights"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "AI Engineering Insights & Technical Guides — GLAD Studio"
    }, {
      name: "twitter:description",
      content: "Deep-dive technical guides on AI development, agent architectures, RAG vs fine-tuning, and production LLM engineering."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/insights"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "CollectionPage",
          "@id": "https://gladstudio.net/insights/#webpage",
          url: "https://gladstudio.net/insights",
          name: "AI Engineering Insights & Technical Guides — GLAD Studio",
          description: "Practical engineering guides on AI development, AI agents, RAG systems, LLM applications, and software architecture by GLAD Studio.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/insights/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://gladstudio.net/insights"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./services.web-application-development-CueexOvP.mjs");
const Route$c = createFileRoute("/services/web-application-development")({
  head: () => ({
    meta: [{
      title: "Web Application Development in India | GLAD Studio"
    }, {
      name: "description",
      content: "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups and product teams, with scalable architecture, APIs and modern web technologies."
    }, {
      property: "og:title",
      content: "Web Application Development in India | GLAD Studio"
    }, {
      property: "og:description",
      content: "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups and product teams, with scalable architecture, APIs and modern web technologies."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/services/web-application-development"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Web Application Development in India | GLAD Studio"
    }, {
      name: "twitter:description",
      content: "Custom web applications, multi-tenant SaaS platforms, and enterprise backends engineered with React, TypeScript, Python, and PostgreSQL."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/services/web-application-development"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebPage",
          "@id": "https://gladstudio.net/services/web-application-development/#webpage",
          url: "https://gladstudio.net/services/web-application-development",
          name: "Web Application Development in India | GLAD Studio",
          description: "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups and product teams, with scalable architecture, APIs and modern web technologies.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/services/web-application-development/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://gladstudio.net/services"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "Web Application Development",
            item: "https://gladstudio.net/services/web-application-development"
          }]
        }, {
          "@type": "Service",
          "@id": "https://gladstudio.net/services/web-application-development/#service",
          name: "Web Application Development",
          serviceType: "Full Stack Web Application Engineering",
          provider: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net"
          },
          areaServed: "India and Global",
          description: "Custom web application development company in India specializing in scalable SaaS platforms, enterprise dashboards, REST APIs, and multi-tenant architectures."
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/services/web-application-development/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What web application development services does GLAD Studio offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GLAD Studio engineers custom web applications including multi-tenant SaaS platforms, enterprise business dashboards, customer portals, RESTful API backends, and internal operational tools."
            }
          }, {
            "@type": "Question",
            name: "What tech stack does GLAD Studio use for custom web applications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our core web development stack includes React, TypeScript, Next.js, and TanStack for frontends, paired with Node.js, FastAPI, or Django on the backend and PostgreSQL for relational data storage."
            }
          }, {
            "@type": "Question",
            name: "How does GLAD handle multi-tenant SaaS architecture and security?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement strict tenant scoping using PostgreSQL Row-Level Security (RLS) or mandatory tenant_id query filters, ensuring complete data isolation between customer accounts."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD Studio build custom role-based access control (RBAC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we architect granular RBAC systems with customized permission matrices, JWT token validation, single sign-on (SSO), and immutable audit logs."
            }
          }, {
            "@type": "Question",
            name: "Does GLAD Studio integrate third-party APIs and payment processors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate third-party APIs including Stripe, Razorpay, HubSpot, Salesforce, AWS S3, Supabase, and transactional email providers using resilient webhook handlers."
            }
          }, {
            "@type": "Question",
            name: "How does GLAD Studio ensure high performance in web applications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We enforce strict bundle size limits, server-side rendering, efficient database query indexing, Redis caching, and asset compression to achieve sub-second page response times."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./services.mvp-development-DpkzHeVV.mjs");
const Route$b = createFileRoute("/services/mvp-development")({
  head: () => ({
    meta: [{
      title: "MVP Development in India | GLAD Studio"
    }, {
      name: "description",
      content: "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch."
    }, {
      property: "og:title",
      content: "MVP Development in India | GLAD Studio"
    }, {
      property: "og:description",
      content: "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/services/mvp-development"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "MVP Development in India | GLAD Studio"
    }, {
      name: "twitter:description",
      content: "Turn validated product concepts into production-ready web, mobile, and SaaS MVPs with GLAD Studio."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/services/mvp-development"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebPage",
          "@id": "https://gladstudio.net/services/mvp-development/#webpage",
          url: "https://gladstudio.net/services/mvp-development",
          name: "MVP Development in India | GLAD Studio",
          description: "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/services/mvp-development/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://gladstudio.net/services"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "MVP Development",
            item: "https://gladstudio.net/services/mvp-development"
          }]
        }, {
          "@type": "Service",
          "@id": "https://gladstudio.net/services/mvp-development/#service",
          name: "MVP Development",
          serviceType: "Minimum Viable Product Engineering",
          provider: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net"
          },
          areaServed: "India and Global",
          description: "Custom MVP development company in India building production-ready web applications, SaaS platforms, and mobile apps for startups and growing businesses."
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/services/mvp-development/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What is MVP development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MVP development is the process of engineering a functional, early version of a software product containing core features needed to validate market demand with real users."
            }
          }, {
            "@type": "Question",
            name: "Why choose GLAD Studio for MVP development in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GLAD Studio delivers production-grade software engineering combining rapid product prototyping, scalable database design, clean TypeScript and Python codebases, and complete intellectual property ownership."
            }
          }, {
            "@type": "Question",
            name: "What deliverables are included in an MVP build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every GLAD Studio MVP includes fully documented source code, production database schemas, secure authentication, API endpoints, CI/CD automated deployments, and administrative controls."
            }
          }, {
            "@type": "Question",
            name: "How does GLAD Studio ensure MVP architecture scales after launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We architect MVPs using modular component hierarchies, strict type safety, PostgreSQL relational schemas, and containerized backends that allow seamless feature expansion without costly rewrites."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD develop both SaaS and mobile MVPs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, GLAD Studio engineers multi-tenant SaaS web platforms with automated billing and cross-platform mobile MVPs using Flutter and React Native."
            }
          }, {
            "@type": "Question",
            name: "Who owns the intellectual property and code of the MVP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You retain 100% ownership of all source code, database architectures, digital assets, and intellectual property created during the engagement."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./services.mobile-app-development-CtQ6g87h.mjs");
const Route$a = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [{
      title: "Mobile App Development in India | GLAD Studio"
    }, {
      name: "description",
      content: "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches."
    }, {
      property: "og:title",
      content: "Mobile App Development in India | GLAD Studio"
    }, {
      property: "og:description",
      content: "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/services/mobile-app-development"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Mobile App Development in India | GLAD Studio"
    }, {
      name: "twitter:description",
      content: "High-performance cross-platform Flutter and React Native mobile apps for iOS and Android engineered by GLAD Studio."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/services/mobile-app-development"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebPage",
          "@id": "https://gladstudio.net/services/mobile-app-development/#webpage",
          url: "https://gladstudio.net/services/mobile-app-development",
          name: "Mobile App Development in India | GLAD Studio",
          description: "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/services/mobile-app-development/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://gladstudio.net/services"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "Mobile App Development",
            item: "https://gladstudio.net/services/mobile-app-development"
          }]
        }, {
          "@type": "Service",
          "@id": "https://gladstudio.net/services/mobile-app-development/#service",
          name: "Mobile App Development",
          serviceType: "Cross-Platform Mobile Application Development",
          provider: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net"
          },
          areaServed: "India and Global",
          description: "Custom mobile app development company in India specializing in Flutter, React Native, offline-first architectures, biometric authentication, and enterprise business applications."
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/services/mobile-app-development/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What mobile app development services does GLAD Studio provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GLAD Studio develops custom cross-platform mobile applications for iOS and Android using Flutter and React Native, covering UI/UX design, API integration, offline caching, and app store deployment."
            }
          }, {
            "@type": "Question",
            name: "Why does GLAD Studio use Flutter for mobile development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Flutter enables a single codebase to deliver high-performance 60fps native experiences on both iOS and Android, dramatically reducing engineering costs and maintenance overhead while ensuring pixel-perfect design consistency."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD Studio build mobile apps with offline capability?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we implement offline-first architectures utilizing local SQLite databases and optimistic UI updates that automatically synchronize with the cloud once network connectivity is restored."
            }
          }, {
            "@type": "Question",
            name: "How does GLAD Studio secure mobile applications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement on-device biometric authentication (Face ID / Fingerprint), secure hardware keychain storage for access tokens, SSL pinning, and encrypted local storage."
            }
          }, {
            "@type": "Question",
            name: "Does GLAD handle App Store and Google Play distribution?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we configure automated Fastlane CI/CD release pipelines, manage internal TestFlight and Google Play internal testing tracks, and handle submission guidelines for store approval."
            }
          }, {
            "@type": "Question",
            name: "Can our mobile app connect to existing backend databases and APIs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our mobile apps integrate with REST, GraphQL, Firebase, and PostgreSQL backends via secure token-authenticated endpoints."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./services.business-automation-DuOYsmAd.mjs");
const Route$9 = createFileRoute("/services/business-automation")({
  head: () => ({
    meta: [{
      title: "Business Automation Services in India | GLAD Studio"
    }, {
      name: "description",
      content: "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes."
    }, {
      property: "og:title",
      content: "Business Automation Services in India | GLAD Studio"
    }, {
      property: "og:description",
      content: "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/services/business-automation"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Business Automation Services in India | GLAD Studio"
    }, {
      name: "twitter:description",
      content: "Custom workflow automation, n8n orchestration, API integrations, and lead enrichment pipelines engineered by GLAD Studio."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/services/business-automation"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebPage",
          "@id": "https://gladstudio.net/services/business-automation/#webpage",
          url: "https://gladstudio.net/services/business-automation",
          name: "Business Automation Services in India | GLAD Studio",
          description: "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/services/business-automation/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://gladstudio.net/services"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "Business Automation",
            item: "https://gladstudio.net/services/business-automation"
          }]
        }, {
          "@type": "Service",
          "@id": "https://gladstudio.net/services/business-automation/#service",
          name: "Business Automation and AI Workflows",
          serviceType: "Business Process Automation & Integration Engineering",
          provider: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net"
          },
          areaServed: "India and Global",
          description: "Custom business automation company in India building resilient workflow orchestration, n8n pipelines, API integrations, and AI-powered operational backends."
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/services/business-automation/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What is business process automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Business process automation is the use of software integrations, APIs, and workflow orchestration to execute repetitive operational tasks automatically without manual human intervention."
            }
          }, {
            "@type": "Question",
            name: "What business processes can GLAD Studio automate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GLAD Studio automates sales lead prospecting and enrichment, multi-system CRM synchronization, invoice parsing and reconciliation, employee and customer onboarding, and operational data extraction."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD connect different business systems and tools?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate disparate software systems including CRMs, ERPs, payment gateways, SQL databases, email providers, and internal tools using resilient webhooks and REST APIs."
            }
          }, {
            "@type": "Question",
            name: "Can AI be used for business automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate language models into automated workflows to parse unstructured emails, classify incoming tickets, extract structured fields from documents, and validate complex operational data."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD build lead enrichment automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we engineer high-throughput lead enrichment pipelines that scrape company websites, verify email deliverability, append demographic data, and automatically update CRM contact records."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD build n8n workflows and self-hosted instances?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we deploy self-hosted and cloud n8n workflow instances with custom Python/JavaScript function nodes, automated error notifications, and resilient retry mechanisms."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./services.ai-solutions-BVKlarQM.mjs");
const Route$8 = createFileRoute("/services/ai-solutions")({
  head: () => ({
    meta: [{
      title: "AI Solutions & Development in India | GLAD Studio"
    }, {
      name: "description",
      content: "GLAD Studio builds custom AI solutions including LLM applications, AI agents, RAG systems, computer vision and intelligent automation for businesses and products."
    }, {
      property: "og:title",
      content: "AI Solutions & Development in India | GLAD Studio"
    }, {
      property: "og:description",
      content: "GLAD Studio builds custom AI solutions including LLM applications, AI agents, RAG systems, computer vision and intelligent automation for businesses and products."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/services/ai-solutions"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "AI Solutions & Development in India | GLAD Studio"
    }, {
      name: "twitter:description",
      content: "Production-grade LLM applications, autonomous AI agents, RAG search pipelines, and computer vision systems engineered by GLAD Studio."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/services/ai-solutions"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebPage",
          "@id": "https://gladstudio.net/services/ai-solutions/#webpage",
          url: "https://gladstudio.net/services/ai-solutions",
          name: "AI Solutions & Development in India | GLAD Studio",
          description: "GLAD Studio builds custom AI solutions including LLM applications, AI agents, RAG systems, computer vision and intelligent automation for businesses and products.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/services/ai-solutions/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://gladstudio.net/services"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "AI Solutions",
            item: "https://gladstudio.net/services/ai-solutions"
          }]
        }, {
          "@type": "Service",
          "@id": "https://gladstudio.net/services/ai-solutions/#service",
          name: "AI Solutions and Development",
          serviceType: "Artificial Intelligence & LLM Application Engineering",
          provider: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net"
          },
          areaServed: "India and Global",
          description: "Custom AI solutions company in India developing LLM applications, AI agents, RAG systems, computer vision models, and intelligent workflow automation for businesses."
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/services/ai-solutions/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What AI solutions does GLAD Studio build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GLAD Studio engineers custom AI solutions including LLM-powered applications, multi-agent workflows, retrieval-augmented generation (RAG) pipelines, computer vision systems, and intelligent business automation backends."
            }
          }, {
            "@type": "Question",
            name: "Does GLAD build AI agents?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, GLAD Studio builds autonomous and semi-autonomous AI agents utilizing frameworks like LangGraph and CrewAI that execute complex multi-step workflows, query external databases, call REST APIs, and adhere to strict deterministic guardrails."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD build RAG applications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we architect enterprise RAG (Retrieval-Augmented Generation) systems that connect language models to proprietary corporate knowledge bases using vector embeddings, pgvector storage, and hybrid reranking to deliver grounded, hallucination-free answers."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD integrate LLMs into existing software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate frontier models such as OpenAI GPT-4o, Anthropic Claude 3.5, and open-source models into existing web, mobile, and enterprise platforms via secure, low-latency API microservices."
            }
          }, {
            "@type": "Question",
            name: "Can GLAD automate business workflows using AI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we automate multi-step business workflows by connecting AI models with internal ERPs, CRMs, document parsers, and n8n orchestration engines to eliminate manual data entry and triage tasks."
            }
          }, {
            "@type": "Question",
            name: "Does GLAD build computer vision systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, GLAD Studio develops computer vision and media intelligence pipelines for automated document classification, OCR data extraction, visual quality inspection, and media integrity validation."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./products.settledesk-tjVOIKUJ.mjs");
const Route$7 = createFileRoute("/products/settledesk")({
  head: () => ({
    meta: [{
      title: "SettleDesk — Real Estate Brokerage Operating System | Glad Studio"
    }, {
      name: "description",
      content: "SettleDesk unifies property catalogs, agent mobile workflows, deal approvals, and real-time commission split payouts on a secure multi-tenant SaaS platform."
    }, {
      property: "og:title",
      content: "SettleDesk — Real Estate Brokerage Operating System"
    }, {
      property: "og:description",
      content: "The operational backbone for modern real estate brokerages. Properties, agents, deals, and commission splits — unified in real time."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/products/settledesk"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "SettleDesk — Real Estate Brokerage Operating System"
    }, {
      name: "twitter:description",
      content: "Unify property management, mobile agent workflows, and real-time commission split payouts on one secure system."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/products/settledesk"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SettleDesk",
        operatingSystem: "Web, iOS, Android",
        applicationCategory: "BusinessApplication",
        description: "Multi-tenant real estate brokerage operating system unifying property catalogs, agent workflows, deal approvals, and commission split payouts.",
        url: "https://gladstudio.net/products/settledesk",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "199",
          highPrice: "499",
          offerCount: "3"
        },
        publisher: {
          "@type": "Organization",
          name: "Glad Studio",
          url: "https://gladstudio.net",
          logo: "https://gladstudio.net/og-image.png"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const gladHmsData = {
  hero: {
    eyebrow: "Modular Hospitality Operating System",
    title: "Enterprise-Grade Hotel Operations.",
    titleGradient: "Built Module by Module for Your Property.",
    description: "GLAD HMS is a modular multi-tenant hotel management platform covering reservations, front desk workflows, housekeeping task boards, stay folio billing with GST compliance, and USALI revenue analytics — with zero forced software bundles.",
    primaryCtaText: "Start Free Trial",
    secondaryCtaText: "Book a Discovery Call",
    stats: [
      { value: "100%", label: "Modular Architecture" },
      { value: "Row-Level", label: "Pessimistic Inventory Locks" },
      { value: "Multi-Tenant", label: "Tenant-Scoped Isolation" },
      { value: "Fixed-Point", label: "Decimal Financial Precision" }
    ]
  },
  threeTier: [
    {
      role: "For Front Desk & Reservations",
      title: "Reservation & Front Desk Console",
      description: "Manage room inventory, process rapid guest check-ins with ID verification, handle walk-ins, and view live room status transitions in real time.",
      bullets: [
        "Pessimistic PostgreSQL row locks preventing double-booking",
        "Instant check-in/check-out lifecycle and room folios",
        "Same-day turnover handling with live status updates"
      ]
    },
    {
      role: "For Housekeeping Staff",
      title: "Mobile Housekeeping Task Board",
      description: "Mobile-optimized task board with automatic room dirty state transitions upon check-out and priority sorting for urgent same-day arrivals.",
      bullets: [
        "Priority-sorted cleaning tasks (urgent same-day arrivals first)",
        "Room status state machine (dirty → clean → inspected → occupied)",
        "One-tap maintenance flagging with issue notes"
      ]
    },
    {
      role: "For Owners & General Managers",
      title: "USALI Revenue Analytics & Tax Invoicing",
      description: "Track property performance with real-time USALI KPIs, multi-folio stay billing, and automated Indian GST slab calculation.",
      bullets: [
        "Real-time USALI KPIs: Occupancy %, Net ADR, Net RevPAR",
        "Multi-folio billing (Master, Room, Incidentals) & split payments",
        "Role-Based Access Control (RBAC) and immutable audit trails"
      ]
    }
  ],
  features: [
    {
      eyebrow: "Reservation & Inventory Grid",
      title: "Pessimistic Concurrency Row Locks. Zero Double Bookings.",
      description: "Mathematically sound reservation overlap checking backed by PostgreSQL row locks to prevent double-booking during high concurrent traffic.",
      routePath: "gladstudio.net/products/glad-hms/reservations"
    },
    {
      eyebrow: "Front Desk Operations Console",
      title: "Instant Guest Folios & Rapid Check-In.",
      description: "Process guest check-ins, verify identification, handle walk-in reservations, and manage stay folios seamlessly with real-time room status updates.",
      routePath: "gladstudio.net/products/glad-hms/front-desk"
    },
    {
      eyebrow: "Mobile Housekeeping Task Board",
      title: "Real-Time Room Turnover. Coordinated with Front Desk.",
      description: "Housekeeping staff receive priority-sorted room cleaning rosters. Marking a room inspected updates front desk availability immediately.",
      routePath: "gladstudio.net/products/glad-hms/housekeeping"
    },
    {
      eyebrow: "Financial & Tax Invoicing",
      title: "Multi-Folio Accounting & Indian GST Compliance.",
      description: "Automated tax calculation across GST slabs (0%, 12%, 18%) with multi-folio support, split payments between company and guest, and strict NUMERIC(12,2) decimal precision.",
      routePath: "gladstudio.net/products/glad-hms/billing"
    }
  ],
  securityPillars: [
    {
      title: "Tenant-Scoped Query Isolation",
      description: "Mandatory tenant_id scoping across every database query guarantees that hotel properties never cross-access competitor data."
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description: "Granular system roles (Owner, Manager, Front Desk, Housekeeping) restrict permissions to property-level authorized workflows."
    },
    {
      title: "Append-Only Audit Logging",
      description: "Every sensitive operation — check-in, check-out, room reassignment, manual payment, and rate adjustment — is logged in an immutable audit ledger."
    }
  ],
  steps: [
    {
      phase: "Phase 1: Setup",
      metric: "Instant",
      title: "Tenant Provisioning",
      description: "Register your hotel workspace and receive a 15-day trial with core modules pre-enabled.",
      checklist: [
        "Create isolated tenant workspace",
        "Configure default property & room counts",
        "Assign initial Owner & Manager roles"
      ]
    },
    {
      phase: "Phase 2: Configuration",
      metric: "Flexible",
      title: "Rooms & Rate Plans",
      description: "Define room types, set base occupancy and extra bed rules, and create custom rate plans.",
      checklist: [
        "Configure room types and physical room numbers",
        "Define base rate plans and seasonal pricing",
        "Set up regional tax slabs & GST rules"
      ]
    },
    {
      phase: "Phase 3: Operations",
      metric: "Real-Time",
      title: "Front Desk & Housekeeping",
      description: "Front desk manages reservations while housekeeping receives live prioritized cleaning tasks.",
      checklist: [
        "Real-time reservation booking & walk-in capture",
        "Automated room status state transitions",
        "Mobile housekeeping task dispatch"
      ]
    },
    {
      phase: "Phase 4: Finance",
      metric: "Automated",
      title: "Folios & Revenue Analytics",
      description: "Generate tax-compliant guest invoices and monitor daily USALI performance metrics.",
      checklist: [
        "Multi-folio billing & split payment capture",
        "Print GST tax invoices upon check-out",
        "Track live Occupancy, ADR, and RevPAR"
      ]
    }
  ],
  pricing: [
    {
      name: "Starter",
      tagline: "For independent boutique hotels & properties",
      featured: false,
      features: [
        "Up to 25 rooms",
        "Core Reservation & Inventory Grid",
        "Front Desk & Walk-In Operations",
        "Mobile Housekeeping Task Board",
        "Standard Tax Invoicing (GST/VAT)",
        "Email Support"
      ],
      ctaText: "Start Free Trial"
    },
    {
      name: "Growth",
      tagline: "For busy hotels with multi-department operations",
      featured: true,
      features: [
        "Up to 100 rooms",
        "Everything in Starter",
        "USALI Revenue Analytics (ADR/RevPAR)",
        "Multi-Folio Split Billing",
        "Role-Based Access Control (RBAC)",
        "Priority Support"
      ],
      ctaText: "Start Free Trial"
    },
    {
      name: "Enterprise / Multi-Property",
      tagline: "For hotel chains, groups & multi-branch operators",
      featured: false,
      features: [
        "Unlimited rooms & properties",
        "Centralized multi-property reporting",
        "Custom rate parity & module entitlement",
        "Dedicated database migration & SLA",
        "24/7 Dedicated Support"
      ],
      ctaText: "Contact Sales"
    }
  ],
  faqs: [
    {
      question: "What is GLAD HMS?",
      answer: "GLAD HMS is an enterprise-grade, modular Hotel Management System (HMS) developed by GLAD Studio. It covers the full operational lifecycle — reservations, front desk, housekeeping, multi-folio stay billing, and USALI revenue analytics — on a single multi-tenant SaaS platform."
    },
    {
      question: "How does GLAD HMS prevent double-booking?",
      answer: "GLAD HMS uses PostgreSQL row-level pessimistic locking (SELECT ... FOR UPDATE) alongside strict date overlap validation during reservation confirmation, ensuring two guests or front-desk clerks cannot allocate the last available room simultaneously."
    },
    {
      question: "Does GLAD HMS support multi-property hotel groups?",
      answer: "Yes. GLAD HMS includes a multi-property architecture where tenant accounts can manage multiple distinct physical properties with property-scoped user roles and consolidated owner-level reporting."
    },
    {
      question: "How does GLAD HMS handle billing and taxes?",
      answer: "GLAD HMS supports multi-folio accounting (Master folios, split room folios, incidental charges), split payment recording, and automated Indian GST tax slab calculations (0%, 12%, 18%) with fixed-point decimal precision."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, newly registered hotels receive a 15-day self-serve trial with core modules pre-provisioned, allowing immediate room inventory configuration and front-desk testing."
    }
  ],
  aboutStory: {
    eyebrow: "Our Story",
    title: "Why We Built a Modular Hotel Management System",
    body1: "Independent hotels and boutique properties are often forced to choose between rigid, multi-million dollar legacy PMS suites or generic cloud tools that force them into paying for expensive bundled features they never use.",
    body2: "We engineered GLAD HMS from the ground up to be modular by design. Every core operational capability — from reservation calendars to mobile housekeeping and USALI revenue analytics — operates with rock-solid database isolation, type-safety, and predictable scalability.",
    beliefs: [
      {
        title: "Modular by design.",
        desc: "Hotels choose and pay for what they need — avoiding bloated all-in-one software suites."
      },
      {
        title: "Zero concurrency errors.",
        desc: "Database-level pessimistic row locking ensures room inventory is always 100% accurate."
      },
      {
        title: "Multi-tenant data safety.",
        desc: "Strict tenant scoping guarantees complete privacy and isolation between properties."
      },
      {
        title: "Real-time synchronization.",
        desc: "Front desk, housekeeping, and management dashboards update instantly upon any state change."
      }
    ]
  }
};
const $$splitComponentImporter$6 = () => import("./products.glad-hms-rEJLTu6m.mjs");
const Route$6 = createFileRoute("/products/glad-hms")({
  head: () => ({
    meta: [{
      title: "GLAD HMS — Modular Hotel Management System | GLAD Studio"
    }, {
      name: "description",
      content: "GLAD HMS is a modular, multi-tenant Hotel Management System for reservations, front desk operations, housekeeping, stay folios, billing, and hotel revenue analytics."
    }, {
      property: "og:title",
      content: "GLAD HMS — Modular Hotel Management System | GLAD Studio"
    }, {
      property: "og:description",
      content: "Enterprise-grade modular hotel operations. Reservations, front desk, mobile housekeeping, and USALI revenue analytics on a unified SaaS platform."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/products/glad-hms"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "GLAD HMS — Modular Hotel Management System | GLAD Studio"
    }, {
      name: "twitter:description",
      content: "Unify room reservations, front desk check-in/out, mobile housekeeping task boards, and tax-compliant folios on a single modular system."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/products/glad-hms"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "SoftwareApplication",
          "@id": "https://gladstudio.net/products/glad-hms/#software",
          name: "GLAD HMS",
          operatingSystem: "Web, Cloud, iOS, Android",
          applicationCategory: "HotelManagementApplication",
          description: "Modular multi-tenant hotel management system unifying room reservations, front desk workflows, mobile housekeeping, stay folios with Indian GST slabs, and USALI revenue analytics.",
          url: "https://gladstudio.net/products/glad-hms",
          publisher: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net",
            logo: "https://gladstudio.net/og-image.png"
          }
        }, {
          "@type": "WebPage",
          "@id": "https://gladstudio.net/products/glad-hms/#webpage",
          url: "https://gladstudio.net/products/glad-hms",
          name: "GLAD HMS — Modular Hotel Management System | GLAD Studio",
          description: "GLAD HMS is a modular, multi-tenant Hotel Management System for reservations, front desk operations, housekeeping, stay folios, billing, and hotel revenue analytics.",
          isPartOf: {
            "@id": "https://gladstudio.net/#website"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/products/glad-hms/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: "https://gladstudio.net/products"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "GLAD HMS",
            item: "https://gladstudio.net/products/glad-hms"
          }]
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/products/glad-hms/#faq",
          mainEntity: gladHmsData.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const fluxorThumbnail = "/assets/Fluxor%20thumbnail-Bj0BfSWR.jpeg";
const fluxorNewThumbnail = "/assets/fluxor-D6FI8UlU.png";
const fluxorDescription = "/assets/fluxor%20description%20page-kcaxZI7E.jpeg";
const stockMgmtThumbnail = "/assets/stock%20management%20thumbnail-CG4yAm2_.png";
const inventoryDashboard = "/assets/What_Is_an_Inventory_Management_Dashboard_6db2051190-BbBxOF4H.jpg";
const inventoryMgmt = "/assets/inventory%20management-CPHe_RYF.png";
const unifiedInventory = "/assets/unified-inventory-management-9BiLb9tE.webp";
const aiMockThumbnail = "/assets/AI%20mock%20interview-DHQBk4T4.png";
const aiMockFeatures = "/assets/ai%20mock%20interview%20features-CH8-CWCB.png";
const aiMockPlatform = "/assets/Top-Must-Have-Features-of-AI-Powered-Interview-Platforms-wj3iomG3.webp";
const prayasThumbnail = "/assets/prayas%20thumbnail-pDPy7P7L.jpeg";
const prayasAppImage = "/assets/prayas%20app-DcHIGv-3.jpeg";
const prayasImage = "/assets/prayas-CbWxZAML.png";
const leadEnrichmentThumbnail = "/assets/lead_enrichment%20thumbnail-wpBN0uQR.png";
const leadEnrichmentImage1 = "/assets/69e06961fb9d36867dfcedd7_Lead%20enrichment_2-x_yqjVBt.png";
const leadEnrichmentImage2 = "/assets/data-enrichment-to-enhance-your-decision-making-DxW_UL0g.jpg";
const qSafeThumbnail = "/assets/qsafe%20thumbnail-DachXH5B.png";
const qSafeImage1 = "/assets/q%20safe-DhXUGyv4.png";
const qSafeImage2 = "/assets/Top-Secure-File-Transfer-Software-Solutions-6A438_NR.webp";
const prayasLogo = "/assets/prayas-tmiAi3Db.jpg";
const glaCanteenLogo = "/assets/gla%20canteen-DH4yp7f-.png";
const earthTravelsLogo = "/assets/earth%20travels-B5fc4b3f.png";
const services = [
  {
    slug: "mvp",
    title: "MVP Development",
    short: "Ship a credible v1 in weeks, not quarters.",
    description: "Helping startups launch products quickly and efficiently — from clickable prototype to production-ready MVP. We deliver a high-fidelity, clickable interactive design prototype in Week 2, and deploy your first working staging build in Week 3.",
    benefits: [
      "Validate ideas with real users fast",
      "Investor-ready demos and pitch assets",
      "Production foundations from day one"
    ],
    tech: ["Next.js", "TanStack Start", "Supabase", "Stripe", "Vercel"],
    timeline: "4 – 8 weeks"
  },
  {
    slug: "web",
    title: "Web Application Development",
    short: "Custom dashboards, SaaS, CRM and internal platforms.",
    description: "We design and build robust web applications — from analytics dashboards to multi-tenant SaaS — with clean architecture and modern UX. Type-safe, secure platforms structured into predictable fortnightly sprints.",
    benefits: [
      "Type-safe, scalable frontends",
      "Auth, billing & permissions handled",
      "Performance budgets out of the box"
    ],
    tech: ["React 19", "TypeScript", "Postgres", "tRPC", "Tailwind"],
    timeline: "6 – 16 weeks"
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    short: "Cross-platform apps for Android and iOS.",
    description: "Single codebase, native feel. We build Flutter applications that ship to both stores with polished UX and offline-first capability. Cross-platform iOS & Android deployment backed by automated CI/CD pipelines.",
    benefits: [
      "One team, two platforms",
      "Native performance and gestures",
      "CI/CD to TestFlight & Play Console"
    ],
    tech: ["Flutter", "Dart", "Firebase", "RevenueCat", "Fastlane"],
    timeline: "8 – 16 weeks"
  },
  {
    slug: "ai",
    title: "AI Solutions",
    short: "Chatbots, agents, RAG and intelligent workflows.",
    description: "We integrate LLMs into your product where they create real leverage — support automation, smart search, document workflows and assistants. Fast deployment of context-aware models with strict evaluation guardrails and cost-routing.",
    benefits: [
      "RAG over your own data",
      "Cost-aware model routing",
      "Guardrails, evals and observability"
    ],
    tech: ["OpenAI", "Anthropic", "LangGraph", "pgvector", "Lovable AI"],
    timeline: "3 – 10 weeks"
  },
  {
    slug: "automation",
    title: "Business Automation",
    short: "Cut the busywork your team shouldn't be doing.",
    description: "Custom internal tools and automations that connect the systems you already use and remove manual work from your operations. Direct systems integration to eliminate administrative overhead.",
    benefits: [
      "Save dozens of hours per week",
      "Fewer human errors, cleaner data",
      "Integrates with the stack you have"
    ],
    tech: ["Node.js", "n8n", "Zapier", "Postgres", "Webhooks"],
    timeline: "2 – 6 weeks"
  }
];
const projects = [
  {
    slug: "fluxor",
    name: "Fluxor",
    category: "Desktop Application",
    short: "Automated Document Orchestration & Asset Classification Engine",
    tech: ["Python", "ML models"],
    gradient: "linear-gradient(135deg, #22C55E, #15803D)",
    challenge: "Users were spending hours manually organizing, renaming, and sorting files across cluttered directories — a tedious, error-prone process.",
    solution: "Built an AI-powered Windows desktop application that automatically analyzes file content and metadata to suggest smart renames and classify files into organized folder structures.",
    features: [
      "AI-driven file renaming",
      "Automatic folder classification",
      "Batch file processing",
      "Smart content analysis"
    ],
    outcome: "Reduced file organization time by over 80% for users with large, unstructured directories.",
    thumbnail: fluxorNewThumbnail,
    images: [fluxorDescription, fluxorThumbnail]
  },
  {
    slug: "prayas-app",
    name: "Prayas App",
    category: "Mobile App",
    short: "Decentralized Medical Inventory Control & Resource Logistics Platform",
    tech: ["React Native"],
    gradient: "linear-gradient(135deg, #FACC15, #CA8A04)",
    challenge: "Prayas NGO needed a streamlined way to manage health equipment lending and coordinate blood donation drives across their community network.",
    solution: "Developed a React Native Android application that connects donors with those in need, manages equipment inventory and lending workflows, and provides real-time coordination for blood donation campaigns.",
    features: [
      "Blood donation coordination",
      "Equipment lending management",
      "Donor-recipient matching",
      "Real-time availability tracking"
    ],
    outcome: "Enabled Prayas NGO to digitize their operations and serve their community more efficiently.",
    thumbnail: prayasImage,
    images: [prayasAppImage, prayasThumbnail]
  },
  {
    slug: "stock-management",
    name: "Stock Management",
    category: "Full Stack Platform",
    short: "Multi-Tenant Enterprise Inventory & Supply Chain Orchestration Suite",
    tech: ["React Native", "React.js", "Node.js"],
    gradient: "linear-gradient(135deg, #A3E635, #4D7C0F)",
    challenge: "A business with multiple sub-divisions was struggling to track inventory across departments using disconnected spreadsheets and manual processes.",
    solution: "Built a comprehensive stock management ecosystem — a React Native mobile app for on-the-ground inventory tracking, a web application for managers, and a full admin panel for oversight and reporting.",
    features: [
      "Cross-platform mobile & web apps",
      "Admin panel with reporting",
      "Multi-division inventory tracking",
      "Real-time stock updates"
    ],
    outcome: "Unified inventory visibility across all business divisions, eliminating stock discrepancies.",
    thumbnail: stockMgmtThumbnail,
    images: [inventoryDashboard, inventoryMgmt, unifiedInventory]
  },
  {
    slug: "ai-mock-interview",
    name: "AI Mock Interview",
    category: "AI Product",
    short: "Low-Latency Conversational AI Technical Assessment Engine",
    tech: ["React.js", "FastAPI", "HuggingFace", "MongoDB"],
    gradient: "linear-gradient(135deg, #22C55E, #FACC15)",
    challenge: "Job seekers lacked access to realistic, on-demand interview practice with meaningful feedback beyond generic question banks.",
    solution: "Built an AI-powered platform that generates role-specific questions using LLMs, evaluates candidate responses with semantic similarity analysis, and provides detailed scoring, confidence analysis, and improvement suggestions.",
    features: [
      "Role-specific question generation",
      "AI-based answer scoring & evaluation",
      "Confidence analysis & feedback",
      "Semantic similarity matching"
    ],
    outcome: "Enabled candidates to practice with realistic, AI-evaluated interviews anytime, anywhere.",
    thumbnail: aiMockThumbnail,
    images: [aiMockFeatures, aiMockPlatform]
  },
  {
    slug: "lead-enrichment",
    name: "Lead Enrichment",
    category: "Business Automation",
    short: "High-Throughput Lead Sourcing & Automated Data Cleansing Pipeline",
    tech: ["Python", "n8n", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #09090B, #22C55E)",
    challenge: "Sales teams were manually researching leads, validating websites, and crafting outreach emails — a process that couldn't scale beyond a handful of prospects per day.",
    solution: "Developed an automated platform that collects and enriches lead data, identifies decision-makers, validates websites, deduplicates records, and generates personalized AI-powered outreach campaigns using batch jobs and async workflows.",
    features: [
      "Automated lead enrichment",
      "Website validation & deduplication",
      "AI-powered email generation",
      "Scalable batch processing"
    ],
    outcome: "Scaled outreach capacity from dozens to thousands of personalized leads per day.",
    thumbnail: leadEnrichmentThumbnail,
    images: [leadEnrichmentImage1, leadEnrichmentImage2]
  },
  {
    slug: "q-safe",
    name: "Q-SAFE",
    category: "Security Platform",
    short: "Zero-Knowledge Encrypted Secure File Transmission Portal",
    tech: ["Django REST Framework", "PostgreSQL", "Docker"],
    gradient: "linear-gradient(135deg, #09090B, #FACC15)",
    challenge: "Organizations needed a secure, self-hosted way to share sensitive documents without relying on third-party services that lacked fine-grained access controls.",
    solution: "Built a secure file-sharing platform enabling encrypted file transfer through links and QR codes, with JWT-based authentication, role-based access control, Redis caching, Celery background processing, and automated cleanup tasks.",
    features: [
      "Encrypted file transfer via links & QR",
      "JWT auth & role-based access control",
      "Background processing with Celery",
      "Automated file cleanup & expiration"
    ],
    outcome: "Enabled secure, scalable document sharing for organizations handling sensitive data.",
    thumbnail: qSafeThumbnail,
    images: [qSafeImage1, qSafeImage2]
  }
];
const testimonials = [
  {
    quote: "The Prayas App transformed how we coordinate blood donations and health equipment lending. It's now the backbone of our community outreach.",
    name: "Prayas NGO Team",
    role: "Prayas NGO",
    logo: prayasLogo
  },
  {
    quote: "GLA Canteen Stock Management transformed our daily inventory tracking and order workflow, giving us clear visibility into stock levels and sales.",
    name: "Rakesh Khetan",
    role: "Owner, GLA Canteen",
    logo: glaCanteenLogo
  },
  {
    quote: "The website developed for Earth Travels India presents our travel packages and services beautifully, significantly elevating our online presence.",
    name: "Nitesh Khandelwal",
    role: "Owner, Earth Travels",
    logo: earthTravelsLogo
  }
];
const faqs = [
  {
    q: "How much does a typical project cost?",
    a: "Every project is custom-scoped based on your specific requirements, feature complexity, and timeline. We work on a transparent, fixed-price milestone basis — meaning after an initial discovery call, you receive a detailed proposal with a fixed quote and guaranteed delivery timeline before any code is written."
  },
  {
    q: "How fast can you start?",
    a: "Most projects begin within 1–2 weeks of signing. For urgent work, we can sometimes start within a few days."
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — most of our clients are non-technical. We translate ideas into clear technical specifications, user-friendly designs, and shipped products, ensuring you always understand the trade-offs at every step."
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own 100% of all intellectual property, source code, designs, and project assets from day one. Upon final milestone completion, full repository access and credentials are handed over."
  },
  {
    q: "How do we track progress during development?",
    a: "We work in structured 2-week sprints with weekly async updates, active messaging channels (Slack/Discord), and direct access to a live staging environment so you can test features as they are built."
  },
  {
    q: "Can you build on top of our existing codebase or tech stack?",
    a: "Yes. Whether upgrading an existing application, refactoring legacy code, or integrating new AI features and third-party APIs, we can seamlessly audit and build directly within your current codebase."
  },
  {
    q: "What tech stack do you specialize in?",
    a: "We focus on modern, type-safe, and scalable web and mobile stacks — primarily React, Next.js, TanStack Start, TypeScript, Node.js, Python, Flutter, Tailwind CSS, and cloud platforms like AWS and Vercel."
  },
  {
    q: "What happens after launch?",
    a: "We provide dedicated post-launch support for bug fixes, performance monitoring, and maintenance. Many of our clients continue working with us long-term as their dedicated development team."
  }
];
const $$splitComponentImporter$5 = () => import("./portfolio._slug-Bh2XQ9bK.mjs");
const $$splitNotFoundComponentImporter = () => import("./portfolio._slug-BwcBxvj1.mjs");
const Route$5 = createFileRoute("/portfolio/$slug")({
  loader: ({
    params
  }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return {
      project
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.project.name} — GLAD studio`
    }, {
      name: "description",
      content: loaderData.project.short
    }, {
      property: "og:title",
      content: `${loaderData.project.name} — GLAD studio`
    }, {
      property: "og:description",
      content: loaderData.project.short
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `https://gladstudio.net/portfolio/${loaderData.project.slug}`
    }] : [],
    links: loaderData ? [{
      rel: "canonical",
      href: `https://gladstudio.net/portfolio/${loaderData.project.slug}`
    }] : [],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "CreativeWork",
          "@id": `https://gladstudio.net/portfolio/${loaderData.project.slug}/#work`,
          url: `https://gladstudio.net/portfolio/${loaderData.project.slug}`,
          name: loaderData.project.name,
          description: loaderData.project.short,
          creator: {
            "@id": "https://gladstudio.net/#organization"
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": `https://gladstudio.net/portfolio/${loaderData.project.slug}/#breadcrumb`,
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://gladstudio.net/portfolio"
          }, {
            "@type": "ListItem",
            position: 3,
            name: loaderData.project.name,
            item: `https://gladstudio.net/portfolio/${loaderData.project.slug}`
          }]
        }]
      })
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./insights.what-is-ai-agent-development-D0YI4WcZ.mjs");
const Route$4 = createFileRoute("/insights/what-is-ai-agent-development")({
  head: () => ({
    meta: [{
      title: "What Is AI Agent Development? A Practical Guide for Businesses — GLAD Studio"
    }, {
      name: "description",
      content: "A deep dive into AI agent development for engineering leaders and founders. Explore agent loops, tool calling, memory management, orchestration frameworks, and production guardrails."
    }, {
      property: "og:title",
      content: "What Is AI Agent Development? A Practical Guide for Businesses"
    }, {
      property: "og:description",
      content: "A deep dive into AI agent development for engineering leaders and founders. Explore agent loops, tool calling, memory management, orchestration frameworks, and production guardrails."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/insights/what-is-ai-agent-development"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "article"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "What Is AI Agent Development? A Practical Guide for Businesses"
    }, {
      name: "twitter:description",
      content: "An engineering-first guide to building autonomous AI agents with tool calling, stateful loops, and production safety guardrails."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/insights/what-is-ai-agent-development"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Article",
          "@id": "https://gladstudio.net/insights/what-is-ai-agent-development/#article",
          headline: "What Is AI Agent Development?",
          description: "A deep dive into AI agent development for engineering leaders and founders. Explore agent loops, tool calling, memory management, orchestration frameworks, and production guardrails.",
          url: "https://gladstudio.net/insights/what-is-ai-agent-development",
          datePublished: "2026-02-17T00:00:00Z",
          dateModified: "2026-02-19T00:00:00Z",
          mainEntityOfPage: "https://gladstudio.net/insights/what-is-ai-agent-development",
          publisher: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net",
            logo: "https://gladstudio.net/og-image.png"
          },
          author: {
            "@type": "Person",
            "@id": "https://gladstudio.net/about/#somesh-rajput",
            name: "Somesh Rajput",
            jobTitle: "CTO & Head of Engineering",
            worksFor: {
              "@id": "https://gladstudio.net/#organization"
            }
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/insights/what-is-ai-agent-development/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://gladstudio.net/insights"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "What Is AI Agent Development",
            item: "https://gladstudio.net/insights/what-is-ai-agent-development"
          }]
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/insights/what-is-ai-agent-development/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What is AI agent development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI agent development is the practice of engineering software systems where a language model operates as a reasoning core capable of planning tasks, selecting and executing external software tools, managing memory, and autonomously pursuing business goals."
            }
          }, {
            "@type": "Question",
            name: "How does an AI agent differ from traditional software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Traditional software requires hard-coded conditional logic for every possible decision path, whereas an AI agent dynamically decides which sequence of steps to take based on real-time observations and natural language reasoning."
            }
          }, {
            "@type": "Question",
            name: "What are the core components of an AI agent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The core components of an AI agent are the foundation model (reasoning), system instructions (role definition), tools (APIs and database functions), memory (short-term state and long-term vector store), orchestration (frameworks like LangGraph), and guardrails (safety and validation)."
            }
          }, {
            "@type": "Question",
            name: "Can AI agents connect to enterprise SQL databases?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, AI agents can query SQL databases using parameterized read-only tools or structured ORM queries, converting natural language intent into safe, validated SQL queries with zero injection risk."
            }
          }, {
            "@type": "Question",
            name: "What frameworks are used for AI agent development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Leading production frameworks for AI agent development include LangGraph (for stateful cyclic graph workflows), CrewAI (for multi-agent team delegation), and custom FastAPI microservices with OpenAI and Anthropic function calling."
            }
          }, {
            "@type": "Question",
            name: "How do you evaluate an AI agent before production deployment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI agents are evaluated using synthetic benchmark test suites that measure task completion rates, tool selection accuracy, parameter formatting correctness, latency, and hallucination frequency across hundreds of edge-case scenarios."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./insights.rag-vs-fine-tuning-zpz6MOjV.mjs");
const Route$3 = createFileRoute("/insights/rag-vs-fine-tuning")({
  head: () => ({
    meta: [{
      title: "RAG vs Fine-Tuning: Which AI Approach Should Your Business Use? — GLAD Studio"
    }, {
      name: "description",
      content: "Compare Retrieval-Augmented Generation (RAG) with LLM fine-tuning. Discover when to ground models on dynamic data versus adapting model behavior, tone, and domain syntax."
    }, {
      property: "og:title",
      content: "RAG vs Fine-Tuning: Which Approach Is Right for Your AI Application?"
    }, {
      property: "og:description",
      content: "Compare Retrieval-Augmented Generation (RAG) with LLM fine-tuning. Discover when to ground models on dynamic data versus adapting model behavior, tone, and domain syntax."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/insights/rag-vs-fine-tuning"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "article"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "RAG vs Fine-Tuning: Which Approach Is Right for Your AI Application?"
    }, {
      name: "twitter:description",
      content: "A technical breakdown comparing RAG knowledge retrieval against LLM fine-tuning for production AI software."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/insights/rag-vs-fine-tuning"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Article",
          "@id": "https://gladstudio.net/insights/rag-vs-fine-tuning/#article",
          headline: "RAG vs Fine-Tuning: Which Approach Is Right for Your AI Application?",
          description: "Compare Retrieval-Augmented Generation (RAG) with LLM fine-tuning. Discover when to ground models on dynamic data versus adapting model behavior, tone, and domain syntax.",
          url: "https://gladstudio.net/insights/rag-vs-fine-tuning",
          datePublished: "2026-02-18T00:00:00Z",
          dateModified: "2026-02-19T00:00:00Z",
          mainEntityOfPage: "https://gladstudio.net/insights/rag-vs-fine-tuning",
          publisher: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net",
            logo: "https://gladstudio.net/og-image.png"
          },
          author: {
            "@type": "Person",
            "@id": "https://gladstudio.net/about/#somesh-rajput",
            name: "Somesh Rajput",
            jobTitle: "CTO & Head of Engineering",
            worksFor: {
              "@id": "https://gladstudio.net/#organization"
            }
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/insights/rag-vs-fine-tuning/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://gladstudio.net/insights"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "RAG vs Fine-Tuning",
            item: "https://gladstudio.net/insights/rag-vs-fine-tuning"
          }]
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/insights/rag-vs-fine-tuning/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What is the difference between RAG and fine-tuning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RAG provides an LLM with external knowledge at query time by retrieving relevant documents from a vector database, whereas fine-tuning alters the internal model weights using a training dataset to teach specific formatting, tone, or specialized domain behavior."
            }
          }, {
            "@type": "Question",
            name: "When should a business choose RAG over fine-tuning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A business should choose RAG when proprietary information changes frequently, when exact source citations are required, when training data is limited, or when budgets require avoiding continuous model re-training expenses."
            }
          }, {
            "@type": "Question",
            name: "When is fine-tuning preferable to RAG?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fine-tuning is preferable when you need a model to consistently adhere to a unique output schema, speak with a distinct brand persona, master a custom programming DSL, or minimize prompt token overhead on repetitive tasks."
            }
          }, {
            "@type": "Question",
            name: "Can you combine RAG and fine-tuning in a single architecture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, a hybrid architecture uses fine-tuning to teach a compact, low-cost model how to structure responses and reason, while using RAG to supply real-time facts and private company context at query time."
            }
          }, {
            "@type": "Question",
            name: "Does fine-tuning eliminate hallucinations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, fine-tuning alone does not eliminate hallucinations because the model can still generate false statements with high confidence. RAG is significantly more effective at preventing hallucinations because it grounds answers in retrieved source texts."
            }
          }, {
            "@type": "Question",
            name: "Which is more expensive: RAG or fine-tuning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fine-tuning generally incurs higher upfront data curation and GPU compute expenses, whereas RAG involves ongoing vector database storage and per-query retrieval infrastructure costs."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./insights.how-to-build-ai-agent-for-business-zh0-hdrb.mjs");
const Route$2 = createFileRoute("/insights/how-to-build-ai-agent-for-business")({
  head: () => ({
    meta: [{
      title: "How to Build an AI Agent for Your Business in 2026 — GLAD Studio"
    }, {
      name: "description",
      content: "Step-by-step engineering guide to building a production AI agent. Learn workflow selection, tool definition, memory state management, deterministic guardrails, and evaluation frameworks."
    }, {
      property: "og:title",
      content: "How to Build an AI Agent for Your Business in 2026"
    }, {
      property: "og:description",
      content: "Step-by-step engineering guide to building a production AI agent. Learn workflow selection, tool definition, memory state management, deterministic guardrails, and evaluation frameworks."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "article"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "How to Build an AI Agent for Your Business in 2026"
    }, {
      name: "twitter:description",
      content: "A practical 9-step implementation roadmap for building and deploying reliable production AI agents."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Article",
          "@id": "https://gladstudio.net/insights/how-to-build-ai-agent-for-business/#article",
          headline: "How to Build an AI Agent for Your Business in 2026",
          description: "Step-by-step engineering guide to building a production AI agent. Learn workflow selection, tool definition, memory state management, deterministic guardrails, and evaluation frameworks.",
          url: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business",
          datePublished: "2026-02-19T00:00:00Z",
          dateModified: "2026-02-19T00:00:00Z",
          mainEntityOfPage: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business",
          publisher: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net",
            logo: "https://gladstudio.net/og-image.png"
          },
          author: {
            "@type": "Person",
            "@id": "https://gladstudio.net/about/#somesh-rajput",
            name: "Somesh Rajput",
            jobTitle: "CTO & Head of Engineering",
            worksFor: {
              "@id": "https://gladstudio.net/#organization"
            }
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/insights/how-to-build-ai-agent-for-business/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://gladstudio.net/insights"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "How to Build an AI Agent",
            item: "https://gladstudio.net/insights/how-to-build-ai-agent-for-business"
          }]
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/insights/how-to-build-ai-agent-for-business/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "How do you build an AI agent for a business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Building an AI agent for a business involves selecting a suitable multi-system workflow, defining strict tool schemas, setting up state management with frameworks like LangGraph, implementing deterministic validation guardrails, and evaluating reliability with synthetic test suites before deployment."
            }
          }, {
            "@type": "Question",
            name: "What tools do AI agents use to take actions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI agents use structured JSON function calling to interact with REST APIs, execute SQL queries against PostgreSQL databases, trigger webhooks, read internal documentation via RAG vector search, and dispatch email or Slack alerts."
            }
          }, {
            "@type": "Question",
            name: "How do you prevent an AI agent from making mistakes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To prevent errors, AI agents require deterministic input/output validation with Pydantic, tool-level permission boundaries, loop termination caps, automated hallucination evaluations, and human-in-the-loop checkpoints for high-risk write actions."
            }
          }, {
            "@type": "Question",
            name: "Which LLM is best for building AI agents?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Frontier reasoning models such as Claude 3.5 Sonnet and GPT-4o excel at complex multi-step planning and tool selection, while smaller models like GPT-4o-mini or fine-tuned Llama 3 can be used for narrow sub-tasks to optimize latency and token expense."
            }
          }, {
            "@type": "Question",
            name: "How long does it take to develop a custom AI agent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A production-grade AI agent typically takes 6 to 12 weeks of engineering, covering schema design, API connector integration, evaluation benchmarking, security sandboxing, and deployment."
            }
          }, {
            "@type": "Question",
            name: "When should a business use an AI agent versus workflow automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use workflow automation (like n8n or Zapier) when all data inputs and paths are 100% structured and predictable. Use an AI agent when inputs are messy, unstructured, or require dynamic reasoning and contextual decision-making across disparate systems."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./insights.ai-development-cost-india-BO5kQLs6.mjs");
const Route$1 = createFileRoute("/insights/ai-development-cost-india")({
  head: () => ({
    meta: [{
      title: "AI Development Cost in India in 2026: A Practical Pricing Guide"
    }, {
      name: "description",
      content: "A comprehensive guide to AI development costs in India. Learn the key cost drivers, architectural complexity tiers, infrastructure expenses, and how to budget for production AI systems."
    }, {
      property: "og:title",
      content: "AI Development Cost in India in 2026: A Practical Pricing Guide"
    }, {
      property: "og:description",
      content: "A comprehensive guide to AI development costs in India. Learn the key cost drivers, architectural complexity tiers, infrastructure expenses, and how to budget for production AI systems."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/insights/ai-development-cost-india"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "article"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "AI Development Cost in India in 2026: A Practical Pricing Guide"
    }, {
      name: "twitter:description",
      content: "What does it actually cost to engineer custom AI software in India? A realistic architectural cost breakdown."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/insights/ai-development-cost-india"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Article",
          "@id": "https://gladstudio.net/insights/ai-development-cost-india/#article",
          headline: "AI Development Cost in India: What Businesses Should Budget in 2026",
          description: "A comprehensive guide to AI development costs in India. Learn the key cost drivers, architectural complexity tiers, infrastructure expenses, and how to budget for production AI systems.",
          url: "https://gladstudio.net/insights/ai-development-cost-india",
          datePublished: "2026-02-15T00:00:00Z",
          dateModified: "2026-02-19T00:00:00Z",
          mainEntityOfPage: "https://gladstudio.net/insights/ai-development-cost-india",
          publisher: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net",
            logo: "https://gladstudio.net/og-image.png"
          },
          author: {
            "@type": "Person",
            "@id": "https://gladstudio.net/about/#somesh-rajput",
            name: "Somesh Rajput",
            jobTitle: "CTO & Head of Engineering",
            worksFor: {
              "@id": "https://gladstudio.net/#organization"
            }
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/insights/ai-development-cost-india/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://gladstudio.net/insights"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "AI Development Cost India",
            item: "https://gladstudio.net/insights/ai-development-cost-india"
          }]
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/insights/ai-development-cost-india/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "How much does AI development cost in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI development costs in India vary significantly based on architectural complexity, data preparation requirements, tool integrations, and ongoing model inference fees rather than flat hourly rates."
            }
          }, {
            "@type": "Question",
            name: "How much does an AI agent cost to develop?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An autonomous AI agent requires more engineering than a basic chatbot because it involves tool-calling APIs, persistent state management, LangGraph loops, deterministic guardrails, and automated evaluation datasets."
            }
          }, {
            "@type": "Question",
            name: "How much does a RAG application cost to build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RAG application development costs depend on document parsing complexity, vector database indexing, hybrid search reranking algorithms, and evaluation pipelines to prevent hallucination."
            }
          }, {
            "@type": "Question",
            name: "Is AI development expensive to maintain after launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ongoing operational costs depend primarily on token consumption volumes, vector database hosting, cloud compute infrastructure, and routine evaluation benchmarks."
            }
          }, {
            "@type": "Question",
            name: "How long does custom AI development take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A focused AI proof-of-concept or single-workflow MVP typically takes 4 to 8 weeks, while full production multi-agent systems or enterprise RAG platforms require 8 to 16 weeks of engineering."
            }
          }, {
            "@type": "Question",
            name: "What primary factors determine custom AI development cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The main cost drivers include workflow complexity, data cleanliness, model selection (proprietary APIs vs open-source fine-tuning), security guardrails, and custom API integrations."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./insights.ai-agent-vs-chatbot-hfN6dNNz.mjs");
const Route = createFileRoute("/insights/ai-agent-vs-chatbot")({
  head: () => ({
    meta: [{
      title: "AI Agent vs Chatbot: What's the Difference and Which Does Your Business Need? — GLAD Studio"
    }, {
      name: "description",
      content: "Understand the difference between AI agents and conversational chatbots. Learn how tool-calling, multi-step workflows, and decision engines determine the right architecture for your business."
    }, {
      property: "og:title",
      content: "AI Agent vs Chatbot: Which One Does Your Business Actually Need?"
    }, {
      property: "og:description",
      content: "Understand the difference between AI agents and conversational chatbots. Learn how tool-calling, multi-step workflows, and decision engines determine the right architecture for your business."
    }, {
      property: "og:url",
      content: "https://gladstudio.net/insights/ai-agent-vs-chatbot"
    }, {
      property: "og:image",
      content: "https://gladstudio.net/og-image.png"
    }, {
      property: "og:type",
      content: "article"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "AI Agent vs Chatbot: Which One Does Your Business Actually Need?"
    }, {
      name: "twitter:description",
      content: "Chatbots converse, but AI agents execute actions. Compare conversational interfaces against goal-driven autonomous agents."
    }, {
      name: "twitter:image",
      content: "https://gladstudio.net/og-image.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://gladstudio.net/insights/ai-agent-vs-chatbot"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Article",
          "@id": "https://gladstudio.net/insights/ai-agent-vs-chatbot/#article",
          headline: "AI Agent vs Chatbot: Which One Does Your Business Actually Need?",
          description: "Understand the difference between AI agents and conversational chatbots. Learn how tool-calling, multi-step workflows, and decision engines determine the right architecture for your business.",
          url: "https://gladstudio.net/insights/ai-agent-vs-chatbot",
          datePublished: "2026-02-16T00:00:00Z",
          dateModified: "2026-02-19T00:00:00Z",
          mainEntityOfPage: "https://gladstudio.net/insights/ai-agent-vs-chatbot",
          publisher: {
            "@type": "Organization",
            "@id": "https://gladstudio.net/#organization",
            name: "Glad Studio",
            url: "https://gladstudio.net",
            logo: "https://gladstudio.net/og-image.png"
          },
          author: {
            "@type": "Person",
            "@id": "https://gladstudio.net/about/#somesh-rajput",
            name: "Somesh Rajput",
            jobTitle: "CTO & Head of Engineering",
            worksFor: {
              "@id": "https://gladstudio.net/#organization"
            }
          }
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://gladstudio.net/insights/ai-agent-vs-chatbot/#breadcrumb",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gladstudio.net"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://gladstudio.net/insights"
          }, {
            "@type": "ListItem",
            position: 3,
            name: "AI Agent vs Chatbot",
            item: "https://gladstudio.net/insights/ai-agent-vs-chatbot"
          }]
        }, {
          "@type": "FAQPage",
          "@id": "https://gladstudio.net/insights/ai-agent-vs-chatbot/#faq",
          mainEntity: [{
            "@type": "Question",
            name: "What is the difference between an AI agent and a chatbot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A chatbot is designed primarily to converse, answer user queries, and provide static information, whereas an AI agent is autonomous software capable of planning tasks, calling external APIs, modifying databases, and taking business actions toward a specific goal."
            }
          }, {
            "@type": "Question",
            name: "Is an AI agent better than a chatbot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Neither is universally better; they serve different purposes. Chatbots excel at low-cost customer FAQs and basic text support, whereas AI agents are required when a system must interact with live ERPs, CRMs, or databases to perform complex multi-step tasks."
            }
          }, {
            "@type": "Question",
            name: "Can an AI agent take real business actions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, an AI agent can execute authorized actions such as issuing refunds, updating CRM records, sending emails, and querying SQL databases via structured tool-calling interfaces and API connectors."
            }
          }, {
            "@type": "Question",
            name: "When should a business use a chatbot instead of an agent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A business should use a chatbot when the objective is purely informational, such as answering standard knowledge base questions, onboarding FAQs, or providing product recommendations without system write access."
            }
          }, {
            "@type": "Question",
            name: "When should a business NOT use an AI agent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A business should avoid AI agents when a workflow is strictly deterministic, 100% predictable, and better handled by traditional rule-based code or webhook integrations like Zapier or n8n."
            }
          }, {
            "@type": "Question",
            name: "Can AI agents connect to third-party APIs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, AI agents use structured function schemas to call REST APIs, query PostgreSQL databases, trigger webhooks, and interact with external enterprise services."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$q.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$r
});
const ServicesRoute = Route$p.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$r
});
const ProductsRoute = Route$o.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$r
});
const ProcessRoute = Route$n.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$r
});
const PrivacyRoute = Route$m.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$r
});
const PortfolioRoute = Route$l.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$r
});
const InsightsRoute = Route$k.update({
  id: "/insights",
  path: "/insights",
  getParentRoute: () => Route$r
});
const ContactRoute = Route$j.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$r
});
const AboutRoute = Route$i.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$r
});
const IndexRoute = Route$h.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$r
});
const ServicesIndexRoute = Route$g.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesRoute
});
const ProductsIndexRoute = Route$f.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProductsRoute
});
const PortfolioIndexRoute = Route$e.update({
  id: "/",
  path: "/",
  getParentRoute: () => PortfolioRoute
});
const InsightsIndexRoute = Route$d.update({
  id: "/",
  path: "/",
  getParentRoute: () => InsightsRoute
});
const ServicesWebApplicationDevelopmentRoute = Route$c.update({
  id: "/web-application-development",
  path: "/web-application-development",
  getParentRoute: () => ServicesRoute
});
const ServicesMvpDevelopmentRoute = Route$b.update({
  id: "/mvp-development",
  path: "/mvp-development",
  getParentRoute: () => ServicesRoute
});
const ServicesMobileAppDevelopmentRoute = Route$a.update({
  id: "/mobile-app-development",
  path: "/mobile-app-development",
  getParentRoute: () => ServicesRoute
});
const ServicesBusinessAutomationRoute = Route$9.update({
  id: "/business-automation",
  path: "/business-automation",
  getParentRoute: () => ServicesRoute
});
const ServicesAiSolutionsRoute = Route$8.update({
  id: "/ai-solutions",
  path: "/ai-solutions",
  getParentRoute: () => ServicesRoute
});
const ProductsSettledeskRoute = Route$7.update({
  id: "/settledesk",
  path: "/settledesk",
  getParentRoute: () => ProductsRoute
});
const ProductsGladHmsRoute = Route$6.update({
  id: "/glad-hms",
  path: "/glad-hms",
  getParentRoute: () => ProductsRoute
});
const PortfolioSlugRoute = Route$5.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => PortfolioRoute
});
const InsightsWhatIsAiAgentDevelopmentRoute = Route$4.update({
  id: "/what-is-ai-agent-development",
  path: "/what-is-ai-agent-development",
  getParentRoute: () => InsightsRoute
});
const InsightsRagVsFineTuningRoute = Route$3.update({
  id: "/rag-vs-fine-tuning",
  path: "/rag-vs-fine-tuning",
  getParentRoute: () => InsightsRoute
});
const InsightsHowToBuildAiAgentForBusinessRoute = Route$2.update({
  id: "/how-to-build-ai-agent-for-business",
  path: "/how-to-build-ai-agent-for-business",
  getParentRoute: () => InsightsRoute
});
const InsightsAiDevelopmentCostIndiaRoute = Route$1.update({
  id: "/ai-development-cost-india",
  path: "/ai-development-cost-india",
  getParentRoute: () => InsightsRoute
});
const InsightsAiAgentVsChatbotRoute = Route.update({
  id: "/ai-agent-vs-chatbot",
  path: "/ai-agent-vs-chatbot",
  getParentRoute: () => InsightsRoute
});
const InsightsRouteChildren = {
  InsightsAiAgentVsChatbotRoute,
  InsightsAiDevelopmentCostIndiaRoute,
  InsightsHowToBuildAiAgentForBusinessRoute,
  InsightsRagVsFineTuningRoute,
  InsightsWhatIsAiAgentDevelopmentRoute,
  InsightsIndexRoute
};
const InsightsRouteWithChildren = InsightsRoute._addFileChildren(
  InsightsRouteChildren
);
const PortfolioRouteChildren = {
  PortfolioSlugRoute,
  PortfolioIndexRoute
};
const PortfolioRouteWithChildren = PortfolioRoute._addFileChildren(
  PortfolioRouteChildren
);
const ProductsRouteChildren = {
  ProductsGladHmsRoute,
  ProductsSettledeskRoute,
  ProductsIndexRoute
};
const ProductsRouteWithChildren = ProductsRoute._addFileChildren(
  ProductsRouteChildren
);
const ServicesRouteChildren = {
  ServicesAiSolutionsRoute,
  ServicesBusinessAutomationRoute,
  ServicesMobileAppDevelopmentRoute,
  ServicesMvpDevelopmentRoute,
  ServicesWebApplicationDevelopmentRoute,
  ServicesIndexRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  InsightsRoute: InsightsRouteWithChildren,
  PortfolioRoute: PortfolioRouteWithChildren,
  PrivacyRoute,
  ProcessRoute,
  ProductsRoute: ProductsRouteWithChildren,
  ServicesRoute: ServicesRouteWithChildren,
  TermsRoute
};
const routeTree = Route$r._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$h as R,
  productsData as a,
  buildingImg as b,
  Route$5 as c,
  faqs as f,
  gladHmsData as g,
  hotelBgImg as h,
  projects as p,
  router as r,
  services as s,
  testimonials as t,
  useTheme as u
};
