import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-Ddl7K2mX.mjs";
import { S as SectionHeading } from "./SectionHeading-D_TkcIwC.mjs";
import { R as Reveal } from "./Reveal-D3D4kp9B.mjs";
import { a as productsData } from "./router-CJ551Cx9.mjs";
import "../_libs/seroval.mjs";
import { n as CircleCheck, c as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function ProductsIndexPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-36 pb-24 md:pt-44 md:pb-32 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-20 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Products", title: "Software Platforms Built to Scale", sub: "Proprietary SaaS systems designed, engineered, and operated by Glad Studio.", center: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 space-y-12", children: productsData.map((product) => {
          const Icon = product.icon;
          const isLive = product.status === "Live";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card p-6 md:p-10 rounded-3xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-xl overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3.5" }),
                  product.category
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${isLive ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30" : "bg-muted text-muted-foreground border border-border"}`, children: product.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold font-display text-foreground", children: product.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base md:text-lg font-semibold text-[#e5b84c]", children: product.tagline })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl", children: product.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2", children: product.keyFeatures.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-[#e5b84c] shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feat })
              ] }, feat)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 flex flex-wrap items-center gap-4", children: isLive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: product.route, className: "btn-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Explore ",
                  product.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-secondary opacity-60 cursor-not-allowed", children: "In Active Development" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] rounded-2xl border border-border bg-background/60 p-4 overflow-hidden flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.heroImage, alt: `${product.name} Showcase Graphic`, className: "w-full h-full object-contain group-hover:scale-105 transition-transform duration-500", width: 450, height: 340 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 inset-x-3 grid grid-cols-3 gap-2 bg-surface/90 backdrop-blur-md p-2.5 rounded-xl border border-border", children: product.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs font-bold text-foreground", children: m.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground uppercase font-medium", children: m.label })
              ] }, m.label)) })
            ] }) })
          ] }) }) }, product.slug);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProductsIndexPage as component
};
