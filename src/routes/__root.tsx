import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoUrl from "./images/main logo.png";
import { SmoothScrollProvider } from "../components/site/SmoothScrollProvider";
import { FloatingFooter } from "../components/site/FloatingFooter";
import { setupLazyCalListener } from "../lib/cal";
import { AnimatedFace404 } from "../components/site/AnimatedFace404";

function NotFoundComponent() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--color-paper,#FAF8F5)] text-[var(--color-ink,#15191E)] px-4 py-16 overflow-hidden select-none"
      style={{
        backgroundImage: `linear-gradient(to right, var(--color-rule) 1px, transparent 1px), linear-gradient(to bottom, var(--color-rule) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Subtle radial fade to soften grid edges */}
      <div className="absolute inset-0 bg-radial from-transparent via-[var(--color-paper)]/70 to-[var(--color-paper)] pointer-events-none" />

      {/* Elevated Architectural Card */}
      <div className="relative z-10 max-w-lg w-full rounded-[24px] border border-[var(--color-rule)] bg-[var(--color-card,#FFFFFF)] p-8 sm:p-12 shadow-[0_24px_60px_-15px_rgba(20,24,30,0.08),0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
        {/* System Error Pill */}
        <div className="mb-6">
          <span className="font-mono text-[11px] font-semibold text-[var(--color-brass)] bg-[var(--color-sunk)] border border-[var(--color-rule)] px-3.5 py-1 rounded-full uppercase tracking-widest shadow-xs">
            SYS.ROUTING // HTTP_404
          </span>
        </div>

        {/* Animated Face in Aperture Frame */}
        <div className="size-44 rounded-2xl bg-[var(--color-sunk)]/50 border border-[var(--color-rule)] flex items-center justify-center mb-6 shadow-inner overflow-hidden">
          <AnimatedFace404 />
        </div>

        {/* Heading & Copy */}
        <h1 className="text-3xl sm:text-[36px] font-display font-semibold text-[var(--color-ink)] leading-tight tracking-tight mb-2.5">
          Page not found
        </h1>
        <p className="text-[14.5px] sm:text-[15px] text-[var(--color-ink-2)] max-w-sm leading-relaxed mb-8">
          The requested endpoint does not exist or has been relocated to another route.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#0F6E4C] hover:shadow-md hover:translate-y-[-1px]"
          >
            <span>Return to homepage</span>
            <span>→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-sunk)] border border-[var(--color-rule)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors duration-200 hover:bg-[#EAE5DC]"
          >
            Contact studio
          </Link>
        </div>

        {/* Helpful Quick Navigation Links */}
        <div className="mt-8 pt-6 border-t border-[var(--color-rule)]/70 w-full flex items-center justify-center gap-4 text-[12px] font-mono text-[var(--color-ink-3)]">
          <Link to="/services" className="hover:text-[var(--color-live)] transition-colors">
            Services
          </Link>
          <span>•</span>
          <Link to="/portfolio" className="hover:text-[var(--color-live)] transition-colors">
            Portfolio
          </Link>
          <span>•</span>
          <Link to="/process" className="hover:text-[var(--color-live)] transition-colors">
            Process
          </Link>
          <span>•</span>
          <Link to="/about" className="hover:text-[var(--color-live)] transition-colors">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        name: "description",
        content:
          "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
      },
      {
        name: "keywords",
        content:
          "web development agency, AI development, mobile app development, data engineering, React, Flutter, machine learning, India",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#F7F4ED" },
      { name: "author", content: "Glad Studio" },
      // Open Graph
      { property: "og:title", content: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        property: "og:description",
        content:
          "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
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
        content:
          "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: logoUrl },
      { rel: "canonical", href: "https://gladstudio.net/" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        href: "/fonts/space-grotesk-500.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/inter-400.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
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
                url: "https://gladstudio.net/og-image.png",
              },
              sameAs: [
                "https://x.com/_GLAD_Studio",
                "https://www.linkedin.com/company/glad-studio-2k26",
                "https://www.instagram.com/__gladstudio/",
                "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@gladstudio.net",
                contactType: "customer service",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://gladstudio.net/#website",
              url: "https://gladstudio.net",
              name: "Glad Studio",
              publisher: {
                "@id": "https://gladstudio.net/#organization",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://gladstudio.net/#service",
              name: "Glad Studio",
              url: "https://gladstudio.net",
              image: "https://gladstudio.net/og-image.png",
              description:
                "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              priceRange: "$$",
              serviceType: [
                "MVP Development",
                "Web Application Development",
                "Mobile App Development",
                "AI & Machine Learning Solutions",
                "Data Engineering & Automation",
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    setupLazyCalListener();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <FloatingFooter />
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}
