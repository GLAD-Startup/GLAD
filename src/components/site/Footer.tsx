import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import darkLogo from "../../routes/images/website logo(black background compatible).png";
import lightLogo from "../../routes/images/website logo(white background compatible).png";
import redditLogo from "../../routes/images/reddit-logo.png";
import { useState, useEffect, MouseEvent } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "../theme-provider";
import { EmailModal } from "./EmailModal";

export function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { theme } = useTheme();

  const socials = [
    {
      icon: Twitter,
      href: "https://x.com/_GLAD_Studio",
      label: "X (Twitter)",
      hoverClass:
        "hover:bg-brand-blue hover:text-black hover:shadow-[4px_4px_0px_0px_var(--brand-blue)]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/glad-studio-2k26",
      label: "LinkedIn",
      hoverClass:
        "hover:bg-brand-purple hover:text-white hover:shadow-[4px_4px_0px_0px_var(--brand-purple)]",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/__gladstudio/",
      label: "Instagram",
      hoverClass:
        "hover:bg-brand-pink hover:text-white hover:shadow-[4px_4px_0px_0px_var(--brand-pink)]",
    },
    {
      icon: ({ className }: { className?: string }) => (
        <img src={redditLogo} alt="Reddit" className={`${className} scale-125 dark:invert`} />
      ),
      href: "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK",
      label: "Reddit",
      hoverClass: "hover:bg-brand-2 hover:text-black hover:shadow-[4px_4px_0px_0px_var(--brand-2)]",
    },
    {
      icon: Mail,
      href: "#",
      label: "Email",
      onClick: (e: MouseEvent) => {
        e.preventDefault();
        setIsEmailModalOpen(true);
      },
      hoverClass: "hover:bg-brand hover:text-white hover:shadow-[4px_4px_0px_0px_var(--brand)]",
    },
  ];

  useEffect(() => {
    setIsClient(true);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t-3 border-border mt-32 noise-bg bg-background">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img
                src={darkLogo}
                alt="Website Logo"
                className="h-12 w-auto object-contain hidden dark:block"
              />
              <img
                src={lightLogo}
                alt="Website Logo"
                className="h-12 w-auto object-contain block dark:hidden"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed font-medium">
              A premium software studio building web, mobile, and AI-powered products for startups
              and growing businesses.
            </p>
            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label, onClick, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  onClick={onClick}
                  target={onClick ? undefined : "_blank"}
                  rel={onClick ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className={`size-10 rounded-xl border-2 border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200 shadow-[3px_3px_0px_0px_var(--border)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_var(--border)] bg-card ${hoverClass}`}
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Studio links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-foreground">
              Studio
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-pink transition-all hover:translate-x-1.5 inline-block duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-brand-blue transition-all hover:translate-x-1.5 inline-block duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="hover:text-brand-purple transition-all hover:translate-x-1.5 inline-block duration-200"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-2 transition-all hover:translate-x-1.5 inline-block duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-brand transition-all hover:translate-x-1.5 inline-block duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-brand-3 transition-all hover:translate-x-1.5 inline-block duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-4">
              {/* Call to action: Book a Call */}
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
                className="w-full flex items-center justify-between p-4 rounded-2xl border-3 border-border bg-card text-left hover:border-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--brand-pink)] dark:hover:shadow-[6px_6px_0px_0px_var(--brand-blue)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_var(--border)] transition-all duration-200 group cursor-pointer"
              >
                <div>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Have a project?
                  </span>
                  <span className="block text-sm font-black text-foreground mt-0.5">
                    Book a Discovery Call
                  </span>
                </div>
                <span className="size-9 rounded-xl bg-brand-pink text-white dark:bg-brand-blue dark:text-black grid place-items-center font-bold text-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-200 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]">
                  →
                </span>
              </button>

              {/* Quick links grid */}
              <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEmailModalOpen(true);
                    }}
                    className="hover:text-brand-pink transition-all hover:translate-x-1 inline-block duration-200"
                  >
                    <Mail className="size-4 inline-block mr-1.5 -mt-0.5" /> hello@gladstudio.net
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/_GLAD_Studio"
                    className="hover:text-brand-blue transition-all hover:translate-x-1 inline-block duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/glad-studio-2k26"
                    className="hover:text-brand-purple transition-all hover:translate-x-1 inline-block duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/__gladstudio/"
                    className="hover:text-brand-pink transition-all hover:translate-x-1 inline-block duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK"
                    className="hover:text-brand-2 transition-all hover:translate-x-1 inline-block duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reddit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t-2 border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} GLAD studio. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </footer>
  );
}
