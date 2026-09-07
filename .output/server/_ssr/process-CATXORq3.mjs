import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { R as Reveal } from "./Reveal-D3D4kp9B.mjs";
import { H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import { R as RetroStar, C as CurlyArrow } from "./RetroDecorations-B5FUBvvj.mjs";
import { S as StickerBoard } from "./StickerBoard-B6AOyTIi.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "./router-CJ551Cx9.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/calcom__embed-react.mjs";
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
const steps = [{
  title: "Discovery Call",
  body: "A 30-minute conversation to understand your idea, users and constraints. We'll tell you honestly whether we're the right team.",
  duration: "Day 0"
}, {
  title: "Requirements Analysis",
  body: "We translate your vision into a written brief — scope, success metrics, risks and unknowns surfaced early.",
  duration: "Week 1"
}, {
  title: "Planning",
  body: "Fixed-scope proposal with timeline, milestones, and a clear pricing structure. No surprises later.",
  duration: "Week 1"
}, {
  title: "UI/UX Design",
  body: "Wireframes evolve into a polished interactive prototype in Figma. You sign off before a line of code is written.",
  duration: "Weeks 2 – 3"
}, {
  title: "Development",
  body: "Weekly sprints, weekly demos. You have access to staging, a Slack channel, and the codebase from day one.",
  duration: "Weeks 3 – N"
}, {
  title: "Testing",
  body: "Automated tests, manual QA, accessibility checks and performance budgets — every release passes the same bar.",
  duration: "Continuous"
}, {
  title: "Deployment",
  body: "We ship to production behind feature flags, monitor closely, and roll out to your users with zero downtime.",
  duration: "Launch week"
}, {
  title: "Post-Launch Support",
  body: "Bug fixes, performance work, and new features on a retainer — or a clean handoff to your in-house team. Your call.",
  duration: "Ongoing"
}];
const markerColors = [{
  bg: "linear-gradient(135deg, var(--brand-pink) 0%, #FF66B2 100%)",
  text: "text-white"
}, {
  bg: "linear-gradient(135deg, var(--brand-blue) 0%, #66F5FF 100%)",
  text: "text-black"
}, {
  bg: "linear-gradient(135deg, var(--brand-purple) 0%, #C994FF 100%)",
  text: "text-white"
}, {
  bg: "linear-gradient(135deg, var(--brand-2) 0%, #FFE680 100%)",
  text: "text-black"
}, {
  bg: "linear-gradient(135deg, var(--brand) 0%, #86EFAC 100%)",
  text: "text-white"
}];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-16 md:pt-44 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RetroStar, { className: "left-8 top-36 hidden xl:block animate-float-sticker", size: 54, color: "var(--brand-purple)", rotation: -15 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CurlyArrow, { className: "left-1/3 bottom-2 hidden xl:block", size: 60, color: "var(--brand-pink)", rotation: 110 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-6 h-px bg-brand-gradient" }),
          "Process"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]", children: [
          "How we ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand-pink)", children: "ship." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-border ml-3", children: steps.map((s, i) => {
        const colors = markerColors[i % markerColors.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-10 pb-14 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute -left-[13px] top-1 size-7 rounded-full grid place-items-center text-[11px] font-semibold shadow-lg ${colors.text}`, style: {
            background: colors.bg
          }, children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", children: s.duration }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1.5 text-2xl font-semibold tracking-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: s.body })
        ] }) }, s.title);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 glass-card p-10 text-center noise-bg hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 cta-calming-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold tracking-tight", children: "Ready to start at step one?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-6 btn-primary inline-flex animate-pulse-glow", children: [
          "Book a discovery call ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickerBoard, {})
  ] });
}
export {
  ProcessPage as component
};
