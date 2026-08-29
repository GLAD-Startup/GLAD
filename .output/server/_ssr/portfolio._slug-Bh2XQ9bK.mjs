import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-Ddl7K2mX.mjs";
import { R as Reveal, a as RevealGroup, b as RevealItem } from "./Reveal-D3D4kp9B.mjs";
import { c as Route$5 } from "./router-CJ551Cx9.mjs";
import "../_libs/seroval.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a3 as ArrowLeft, e as Check, c as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/calcom__embed-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-BPMMSW8U.mjs";
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
function ProjectPage() {
  const {
    project: p
  } = Route$5.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-0.5 transition-transform" }),
        " ",
        "All projects"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1]
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-6 h-px bg-brand-gradient" }),
            p.category
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl md:text-6xl font-semibold tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: p.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed", children: p.short })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, className: "glass-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", children: "Tech Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs rounded-full border border-border px-3 py-1 text-muted-foreground", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-xs uppercase tracking-wider text-muted-foreground font-medium", children: "Outcome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium", children: p.outcome })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 32
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.3
      }, className: "mt-14 relative aspect-[16/8] rounded-2xl overflow-hidden border border-border shadow-2xl", children: p.images && p.images.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images: p.images, name: p.name }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: p.gradient
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-25" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "The Challenge", children: p.challenge }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "right", delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "The Solution", children: p.solution }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-semibold tracking-tight", children: "Key features" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealGroup, { className: "mt-10 grid gap-4 md:grid-cols-2", stagger: 0.06, children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { direction: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card interactive-card p-6 flex items-start gap-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 rounded-full bg-brand-gradient grid place-items-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: f })
      ] }) }, f)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "scale", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Have a similar project in mind?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 btn-primary inline-flex animate-pulse-glow", children: [
        "Book a free consultation ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Block({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-8 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children })
  ] });
}
function ImageCarousel({
  images,
  name
}) {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [images.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: images[currentIndex], alt: `${name} image ${currentIndex + 1}`, className: "absolute inset-0 w-full h-full object-cover", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, transition: {
      duration: 0.8
    } }, currentIndex) }),
    images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: images.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-white w-6" : "bg-white/40 hover:bg-white/60 w-2"}`, onClick: () => setCurrentIndex(idx), "aria-label": `Go to slide ${idx + 1}` }, idx)) })
  ] });
}
export {
  ProjectPage as component
};
