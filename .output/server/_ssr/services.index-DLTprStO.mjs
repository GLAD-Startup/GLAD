import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { R as Reveal } from "./Reveal-D3D4kp9B.mjs";
import { s as services } from "./router-CJ551Cx9.mjs";
import { S as StickerBoard } from "./StickerBoard-B6AOyTIi.mjs";
import { H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { W as Workflow, f as Sparkles, g as Smartphone, P as PanelsTopLeft, R as Rocket, e as Check, c as ArrowRight } from "../_libs/lucide-react.mjs";
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
const serviceRoutes = {
  mvp: "/services/mvp-development",
  web: "/services/web-application-development",
  mobile: "/services/mobile-app-development",
  ai: "/services/ai-solutions",
  automation: "/services/business-automation"
};
const serviceIcons = {
  mvp: Rocket,
  web: PanelsTopLeft,
  mobile: Smartphone,
  ai: Sparkles,
  automation: Workflow
};
const serviceCardColors = {
  mvp: {
    shadow: "var(--brand-pink)",
    iconBg: "linear-gradient(135deg, var(--brand-pink) 0%, #FF66B2 100%)",
    iconText: "text-white"
  },
  web: {
    shadow: "var(--brand-blue)",
    iconBg: "linear-gradient(135deg, var(--brand-blue) 0%, #66F5FF 100%)",
    iconText: "text-black"
  },
  mobile: {
    shadow: "var(--brand-purple)",
    iconBg: "linear-gradient(135deg, var(--brand-purple) 0%, #C994FF 100%)",
    iconText: "text-white"
  },
  ai: {
    shadow: "var(--brand-2)",
    iconBg: "linear-gradient(135deg, var(--brand-2) 0%, #FFE680 100%)",
    iconText: "text-black"
  },
  automation: {
    shadow: "var(--team-calm)",
    iconBg: "linear-gradient(135deg, var(--brand) 0%, #86EFAC 100%)",
    iconText: "text-white"
  }
};
function ServicesIndexPage() {
  const sectionRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-16 md:pt-44 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-6 h-px bg-brand-gradient" }),
          "Engineering Services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground", children: [
          "Built for",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand-pink)", children: "ambitious teams." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Five dedicated engineering services — each delivered by senior developers, with clean architecture, predictable milestones, and source code you fully own." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: sectionRef, className: "relative pb-28 overflow-visible", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6 space-y-8 relative z-20", children: services.map((s, i) => {
      const Icon = serviceIcons[s.slug];
      const colors = serviceCardColors[s.slug];
      const serviceUrl = serviceRoutes[s.slug] || "/services";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: `service-${s.slug}`, className: "surface-card interactive-card shine-on-hover p-8 md:p-12 grid gap-10 lg:grid-cols-3 relative z-20 calm-card-custom", style: {
        // @ts-ignore
        "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-lg grid place-items-center shadow-lg ${colors.iconText}`, style: {
              background: colors.iconBg
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: [
              String(i + 1).padStart(2, "0"),
              " — ",
              s.slug.toUpperCase()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-semibold tracking-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl leading-relaxed", children: s.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Key Deliverables" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: s.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded-full grid place-items-center mt-0.5 shrink-0 text-white", style: {
              background: colors.iconBg
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, b)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Core Technologies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: s.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs rounded-full border border-border px-3 py-1 text-muted-foreground", children: t }, t)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Typical Scope Timeline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xl font-semibold text-gradient", children: s.timeline })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: serviceUrl, className: "btn-primary text-sm w-full justify-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Explore ",
                s.title
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-xs font-semibold text-muted-foreground hover:text-foreground text-center block transition-colors", children: "Have questions? Book a call →" })
          ] })
        ] })
      ] }) }, s.slug);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickerBoard, {})
  ] });
}
export {
  ServicesIndexPage as component
};
