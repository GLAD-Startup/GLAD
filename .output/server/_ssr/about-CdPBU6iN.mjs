import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { R as Reveal, a as RevealGroup, b as RevealItem } from "./Reveal-D3D4kp9B.mjs";
import { S as SectionHeading } from "./SectionHeading-D_TkcIwC.mjs";
import { a as HandDrawnCircle, b as HandDrawnDoubleStrike } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import { R as RetroStar, S as SparkleDeco } from "./RetroDecorations-B5FUBvvj.mjs";
import { S as StickerBoard } from "./StickerBoard-B6AOyTIi.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { L as Lightbulb, S as ShieldCheck, E as Eye, f as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const arjunImg = "/assets/arjun-BFzGCJqP.jpg";
const jatinImg = "/assets/jatin-dfrJlNtc.jpg";
const parthImg = "/assets/parth-tENvKlx_.jpeg";
const someshImg = "/assets/somesh-C5qpQn3V.jpeg";
const values = [{
  icon: Lightbulb,
  title: "Innovation",
  body: "We pick technology that compounds — modern stacks, AI where it matters."
}, {
  icon: ShieldCheck,
  title: "Reliability",
  body: "We ship on time and stand behind what we build."
}, {
  icon: Eye,
  title: "Transparency",
  body: "You see the work as it happens. No black boxes, ever."
}, {
  icon: Sparkles,
  title: "Quality",
  body: "Type-safe, tested, observable. Boring code so your product can be exciting."
}];
const team = [{
  name: "Arjun Singh Rajput",
  role: "CEO & Head of Strategy",
  bio: "Driving overarching vision, strategic growth, and execution.",
  image: arjunImg
}, {
  name: "Jatin Khetan",
  role: "CFO & Head of Product & Design",
  bio: "Managing financial strategy and crafting intuitive, user-centric product experiences.",
  image: jatinImg,
  imageClass: "object-[center_20%]"
}, {
  name: "Parth Garg",
  role: "COO & Head of Operations",
  bio: "Streamlining cross-functional execution and scaling operational excellence.",
  image: parthImg
}, {
  name: "Somesh Rajput",
  role: "CTO & Head of Engineering",
  bio: "Architecting scalable systems and driving core technical innovation.",
  image: someshImg
}];
const valueColors = [{
  shadow: "var(--brand-pink)",
  iconBg: "rgba(255, 0, 127, 0.15)",
  iconText: "text-brand-pink"
}, {
  shadow: "var(--brand-blue)",
  iconBg: "rgba(0, 240, 255, 0.15)",
  iconText: "text-brand-blue"
}, {
  shadow: "var(--brand-purple)",
  iconBg: "rgba(159, 50, 255, 0.15)",
  iconText: "text-brand-purple"
}, {
  shadow: "var(--brand-2)",
  iconBg: "rgba(250, 204, 21, 0.2)",
  iconText: "text-brand-2"
}];
const teamColors = [{
  shadow: "var(--brand-pink)"
}, {
  shadow: "var(--brand-blue)"
}, {
  shadow: "var(--brand-purple)"
}, {
  shadow: "var(--team-calm)"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 md:pt-44 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RetroStar, { className: "left-10 top-36 hidden xl:block animate-float-sticker", size: 48, color: "var(--brand-pink)", rotation: 25 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SparkleDeco, { className: "left-1/4 bottom-8 hidden md:block", size: 24, color: "var(--brand-purple)" }),
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
          "About"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.05]", children: [
          "We build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnCircle, { color: "var(--brand-pink)", children: "products" }),
          ",",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "not just",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnDoubleStrike, { color: "var(--brand-purple)", children: "software." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "GLAD studio is a dedicated team of passionate builders. We help startups and growing businesses turn ideas into shipped products — web, mobile and AI — with the rigor of a great in-house team." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-2 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight", children: "Our story" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "right", delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We started GLAD studio because we kept seeing the same thing: founders spending months on agencies that overpromised, underdelivered, and left them with code they couldn't maintain." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "So we built something different — a tiny, senior team that works on a small number of projects at a time, ships every week, and treats your product like our own." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 section-divider noise-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What drives us", title: "Values." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealGroup, { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4", stagger: 0.06, children: values.map((v, i) => {
        const colors = valueColors[i % valueColors.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card interactive-card p-7 h-full calm-card-custom", style: {
          "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-lg grid place-items-center ${colors.iconText}`, style: {
            backgroundColor: colors.iconBg
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-semibold tracking-tight", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-sm text-muted-foreground leading-relaxed", children: v.body })
        ] }) }, v.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The people", title: "The team." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealGroup, { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4", stagger: 0.08, children: team.map((m, i) => {
        const colors = teamColors[i % teamColors.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { direction: "scale", className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card interactive-card overflow-hidden group h-full flex flex-col calm-card-custom", style: {
          "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-brand-gradient relative overflow-hidden shrink-0", children: m.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.image, alt: m.name, className: `w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${m.imageClass || ""}` }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center text-5xl font-display font-semibold text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110", children: m.name.split(" ").map((n) => n[0]).join("") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 relative bg-inherit z-10 flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: m.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: m.bio })
          ] })
        ] }) }, m.name);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickerBoard, {})
  ] });
}
export {
  AboutPage as component
};
