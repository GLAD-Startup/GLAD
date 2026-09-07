import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useTheme } from "./router-CJ551Cx9.mjs";
import { j } from "../_libs/calcom__embed-react.mjs";
import { a4 as Sun, a5 as Moon, X, a6 as Menu, l as ChevronDown, a7 as Twitter, a8 as Linkedin, a9 as Instagram, M as Mail, A as ArrowUp, e as Check, aa as Send } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
function ScrollProgress() {
  const [width, setWidth] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
      setWidth(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "scroll-progress", style: { width: `${width}%` } });
}
const darkLogo = "/assets/website%20logo(black%20background%20compatible)-Bq-8sqRq.png";
const lightLogo = "/assets/website%20logo(white%20background%20compatible)-yVaQ6gea.png";
const productsList = [
  {
    to: "/products",
    label: "All Products Overview"
  },
  {
    to: "/products/glad-hms",
    label: "GLAD HMS (Hospitality SaaS)"
  },
  {
    to: "/products/settledesk",
    label: "SettleDesk (Real Estate SaaS)"
  }
];
const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = reactExports.useState(false);
  const [isClient, setIsClient] = reactExports.useState(false);
  const { theme, setTheme } = useTheme();
  const handleThemeToggle = (e) => {
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
        Math.max(y, window.innerHeight - y)
      );
      document.documentElement.animate(
        [
          {
            clipPath: `circle(0px at ${x}px ${y}px)`,
            filter: "brightness(1.5) blur(10px)",
            transform: "scale(0.95)"
          },
          {
            clipPath: `circle(${endRadius}px at ${x}px ${y}px)`,
            filter: "brightness(1) blur(0px)",
            transform: "scale(1)"
          }
        ],
        {
          duration: 800,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-new(root)"
        }
      );
      document.documentElement.animate(
        [
          { transform: "scale(1)", filter: "blur(0px)", opacity: 1 },
          { transform: "scale(1.05)", filter: "blur(8px)", opacity: 0 }
        ],
        {
          duration: 800,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-old(root)"
        }
      );
    });
    transition.finished.then(() => {
      document.documentElement.classList.remove("view-transitioning");
    });
  };
  reactExports.useEffect(() => {
    setIsClient(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-2xl bg-background/60 border-b border-border shadow-lg shadow-background/20" : "bg-transparent"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: darkLogo,
                  alt: "Website Logo",
                  className: "h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 hidden dark:block"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: lightLogo,
                  alt: "Website Logo",
                  className: "h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 block dark:hidden"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/",
                  className: "relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-surface/60",
                  activeProps: { className: "text-foreground font-semibold" },
                  activeOptions: { exact: true },
                  children: "Home"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "products-menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/products",
                    className: "link text-sm text-muted-foreground hover:text-foreground transition-colors",
                    activeProps: { className: "text-foreground font-semibold" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Products" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 360 360", xmlSpace: "preserve", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          id: "XMLID_225_",
                          d: "M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        }
                      ) }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "submenu", children: productsList.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "submenu-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: p.to, className: "submenu-link", children: p.label }) }, p.to)) })
              ] }) }),
              nav.filter((n) => n.to !== "/").map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: n.to,
                  className: "relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-surface/60",
                  activeProps: { className: "text-foreground font-semibold" },
                  children: n.label
                },
                n.to
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleThemeToggle,
                  className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface/60 transition-colors",
                  "aria-label": "Toggle theme",
                  children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "data-cal-link": "arjun-rajput-2mdsis",
                  "data-cal-config": JSON.stringify({
                    layout: "month_view",
                    theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  }),
                  className: "btn-primary text-sm !py-2 !px-5",
                  children: "Book a Call"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "md:hidden p-2 rounded-lg hover:bg-surface/60 transition-colors",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              className: "md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-2xl",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.1 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/",
                        onClick: () => setOpen(false),
                        className: "block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors",
                        children: "Home"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.15 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => setMobileProductsOpen((v) => !v),
                          className: "w-full flex items-center justify-between px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Products" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ChevronDown,
                              {
                                className: `size-4 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileProductsOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          exit: { opacity: 0, height: 0 },
                          className: "pl-4 overflow-hidden flex flex-col gap-1 my-1",
                          children: productsList.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Link,
                            {
                              to: p.to,
                              onClick: () => setOpen(false),
                              className: "block px-3 py-2 text-xs text-muted-foreground hover:text-foreground rounded-md hover:bg-surface/40 font-medium",
                              children: p.label
                            },
                            p.to
                          ))
                        }
                      ) })
                    ]
                  }
                ),
                nav.filter((n) => n.to !== "/").map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: (i + 2) * 0.05 + 0.1 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: n.to,
                        onClick: () => setOpen(false),
                        className: "block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors",
                        children: n.label
                      }
                    )
                  },
                  n.to
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.4 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: handleThemeToggle,
                        className: "w-full flex items-center justify-between px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors",
                        "aria-label": "Toggle theme",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Theme" }),
                          theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-4" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.45 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setOpen(false),
                        "data-cal-link": "arjun-rajput-2mdsis",
                        "data-cal-config": JSON.stringify({
                          layout: "month_view",
                          theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                        }),
                        className: "w-full mt-3 btn-primary justify-center text-sm",
                        children: "Book a Call"
                      }
                    )
                  }
                )
              ] })
            }
          ) })
        ]
      }
    )
  ] });
}
const redditLogo = "/assets/reddit-logo-lIbvNdkx.png";
function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder
}) {
  const [error, setError] = reactExports.useState("");
  const handleInvalid = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    let msg = "Psst... please fill this out! ⚡";
    if (target.validity.valueMissing) {
      if (name === "name") msg = "Don't be shy, what should we call you? 😊";
      else if (name === "email") msg = "We need your email to reply! ✉️";
      else if (name === "project") msg = "Tell us a bit about your project! 🚀";
    } else if (target.validity.typeMismatch && type === "email") {
      msg = "Hmm, that doesn't look like a real email! 🤔";
    }
    setError(msg);
  };
  const handleChange = (e) => {
    if (error) {
      setError("");
    }
  };
  const cls = "w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all duration-300";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground tracking-wide", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
      textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          name,
          required,
          rows: 4,
          placeholder,
          onInvalid: handleInvalid,
          onChange: handleChange,
          className: `${cls} resize-none`
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          name,
          type,
          required,
          placeholder,
          onInvalid: handleInvalid,
          onChange: handleChange,
          className: cls
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -8, scale: 0.95 },
          transition: { type: "spring", stiffness: 350, damping: 20 },
          className: "absolute left-4 top-[calc(100%+4px)] z-30 bg-white text-black border-2 border-black px-3.5 py-2 rounded-xl shadow-[3px_3px_0px_#000] flex items-center gap-2.5 text-xs font-bold pointer-events-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-8px] left-5 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[8px] border-b-black" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-5px] left-[21px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[7px] border-b-white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-5 shrink-0 items-center justify-center rounded-lg bg-[#FF5C00] border border-black text-white font-extrabold text-[11px] shadow-[1px_1px_0px_#000]", children: "!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error })
          ]
        }
      ) })
    ] })
  ] });
}
function SelectField({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground tracking-wide", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        name,
        className: "mt-1.5 w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all duration-300",
        children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: o }, o))
      }
    )
  ] });
}
function EmailModal({ isOpen, onClose }) {
  const [loading, setLoading] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setLoading(false);
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] grid place-items-center p-4 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 10 },
        className: "w-full max-w-md pointer-events-auto",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-card p-7 shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute top-4 right-4 p-2 rounded-full hover:bg-surface transition-colors text-muted-foreground hover:text-foreground z-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
            }
          ),
          submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto size-14 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-7" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: "Message sent." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We'll be in touch within one business day." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "mt-6 btn-secondary inline-flex", children: "Close window" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 pr-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold tracking-tight", children: "Send an email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We'll reply to your message as soon as possible." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  const formData = new FormData(e.currentTarget);
                  try {
                    await fetch("https://formsubmit.co/ajax/hello@gladstudio.net", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                      },
                      body: JSON.stringify(Object.fromEntries(formData))
                    });
                    setSubmitted(true);
                  } catch (error) {
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                  } finally {
                    setLoading(false);
                  }
                },
                className: "space-y-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", placeholder: "Your name", required: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Field,
                    {
                      label: "Your email address",
                      name: "email",
                      type: "email",
                      placeholder: "you@company.com",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Field,
                    {
                      label: "Message",
                      name: "message",
                      textarea: true,
                      placeholder: "How can we help?",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "submit",
                      disabled: loading,
                      className: "w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed",
                      children: [
                        loading ? "Sending..." : "Send message",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4 ml-1" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      }
    ) })
  ] }) });
}
function Footer() {
  const [isClient, setIsClient] = reactExports.useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = reactExports.useState(false);
  const { theme } = useTheme();
  const socials = [
    {
      icon: Twitter,
      href: "https://x.com/_GLAD_Studio",
      label: "X (Twitter)",
      hoverClass: "hover:bg-brand-blue hover:text-black hover:shadow-[4px_4px_0px_0px_var(--brand-blue)]"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/glad-studio-2k26",
      label: "LinkedIn",
      hoverClass: "hover:bg-brand-purple hover:text-white hover:shadow-[4px_4px_0px_0px_var(--brand-purple)]"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/__gladstudio/",
      label: "Instagram",
      hoverClass: "hover:bg-brand-pink hover:text-white hover:shadow-[4px_4px_0px_0px_var(--brand-pink)]"
    },
    {
      icon: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: redditLogo, alt: "Reddit", className: `${className} scale-125 dark:invert` }),
      href: "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK",
      label: "Reddit",
      hoverClass: "hover:bg-brand-2 hover:text-black hover:shadow-[4px_4px_0px_0px_var(--brand-2)]"
    },
    {
      icon: Mail,
      href: "#",
      label: "Email",
      onClick: (e) => {
        e.preventDefault();
        setIsEmailModalOpen(true);
      },
      hoverClass: "hover:bg-brand hover:text-white hover:shadow-[4px_4px_0px_0px_var(--brand)]"
    }
  ];
  reactExports.useEffect(() => {
    setIsClient(true);
  }, []);
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t-3 border-border mt-32 noise-bg bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: darkLogo,
                alt: "Website Logo",
                className: "h-12 w-auto object-contain hidden dark:block"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: lightLogo,
                alt: "Website Logo",
                className: "h-12 w-auto object-contain block dark:hidden"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed font-medium", children: "An engineering-focused software and AI product studio building custom digital products, SaaS platforms, AI systems, and business automation solutions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-3", children: socials.map(({ icon: Icon, href, label, onClick, hoverClass }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              onClick,
              target: onClick ? void 0 : "_blank",
              rel: onClick ? void 0 : "noopener noreferrer",
              "aria-label": label,
              className: `size-10 rounded-xl border-2 border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200 shadow-[3px_3px_0px_0px_var(--border)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_var(--border)] bg-card ${hoverClass}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4.5" })
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold uppercase tracking-wider mb-4 text-foreground", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/services/mvp-development",
                className: "hover:text-brand-pink transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "MVP Development"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/services/web-application-development",
                className: "hover:text-brand-blue transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Web Applications"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/services/mobile-app-development",
                className: "hover:text-brand-purple transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Mobile Apps"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/services/ai-solutions",
                className: "hover:text-brand-2 transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "AI Solutions"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/services/business-automation",
                className: "hover:text-brand transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Business Automation"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/services",
                className: "hover:text-foreground transition-all hover:translate-x-1.5 inline-block duration-200 font-semibold",
                children: "All Services Overview →"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold uppercase tracking-wider mb-4 text-foreground", children: "Studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products",
                className: "hover:text-[#e5b84c] transition-all hover:translate-x-1.5 inline-block duration-200 font-semibold",
                children: "Products Overview"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products/glad-hms",
                className: "hover:text-[#e5b84c] transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "GLAD HMS"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products/settledesk",
                className: "hover:text-[#e5b84c] transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "SettleDesk SaaS"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/insights",
                className: "hover:text-[#e5b84c] transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Insights & AI Guides"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/portfolio",
                className: "hover:text-brand-blue transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Portfolio"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/process",
                className: "hover:text-brand-purple transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Process"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/about",
                className: "hover:text-brand-2 transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "About"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/privacy",
                className: "hover:text-brand transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Privacy Policy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/terms",
                className: "hover:text-brand-3 transition-all hover:translate-x-1.5 inline-block duration-200",
                children: "Terms of Service"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold uppercase tracking-wider mb-4 text-foreground", children: "Get In Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                "data-cal-link": "arjun-rajput-2mdsis",
                "data-cal-config": JSON.stringify({
                  layout: "month_view",
                  theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                }),
                className: "w-full flex items-center justify-between p-4 rounded-2xl border-3 border-border bg-card text-left hover:border-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--brand-pink)] dark:hover:shadow-[6px_6px_0px_0px_var(--brand-blue)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_var(--border)] transition-all duration-200 group cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: "Have a project?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-black text-foreground mt-0.5", children: "Book a Discovery Call" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-9 rounded-xl bg-brand-pink text-white dark:bg-brand-blue dark:text-black grid place-items-center font-bold text-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-200 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]", children: "→" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-2 gap-3 text-sm text-muted-foreground font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  onClick: (e) => {
                    e.preventDefault();
                    setIsEmailModalOpen(true);
                  },
                  className: "hover:text-brand-pink transition-all hover:translate-x-1 inline-block duration-200",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 inline-block mr-1.5 -mt-0.5" }),
                    " hello@gladstudio.net"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://x.com/_GLAD_Studio",
                  className: "hover:text-brand-blue transition-all hover:translate-x-1 inline-block duration-200",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "X (Twitter)"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.linkedin.com/company/glad-studio-2k26",
                  className: "hover:text-brand-purple transition-all hover:translate-x-1 inline-block duration-200",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "LinkedIn"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.instagram.com/__gladstudio/",
                  className: "hover:text-brand-pink transition-all hover:translate-x-1 inline-block duration-200",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Instagram"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK",
                  className: "hover:text-brand-2 transition-all hover:translate-x-1 inline-block duration-200",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Reddit"
                }
              ) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t-2 border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " GLAD studio. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-foreground transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-foreground transition-colors", children: "Terms of Service" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: scrollToTop,
            className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group cursor-pointer",
            children: [
              "Back to top",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "size-3.5 transition-transform group-hover:-translate-y-0.5" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isEmailModalOpen, onClose: () => setIsEmailModalOpen(false) })
  ] });
}
export {
  EmailModal as E,
  Footer as F,
  Header as H,
  SelectField as S,
  Field as a
};
