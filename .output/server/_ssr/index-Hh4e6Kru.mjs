import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G } from "../_libs/splinetool__react-spline.mjs";
import { H as Header, F as Footer, a as Field, S as SelectField } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { R as Reveal, a as RevealGroup, b as RevealItem } from "./Reveal-D3D4kp9B.mjs";
import { S as SectionHeading } from "./SectionHeading-D_TkcIwC.mjs";
import { P as ProjectCard } from "./ProjectCard-1xcDaOCd.mjs";
import { R as Route$h, s as services, p as projects, t as testimonials, f as faqs, u as useTheme } from "./router-CJ551Cx9.mjs";
import { a as HandDrawnCircle, H as HandDrawnUnderline } from "./HandDrawnHighlights-DXpnzXH4.mjs";
import { R as RetroStar, S as SparkleDeco, a as CuteSpeechBubble } from "./RetroDecorations-B5FUBvvj.mjs";
import { S as StickerBoard } from "./StickerBoard-B6AOyTIi.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { j } from "../_libs/calcom__embed-react.mjs";
import "../_libs/seroval.mjs";
import { m as motion, u as useScroll, a as useTransform, b as useSpring, c as useMotionValue } from "../_libs/framer-motion.mjs";
import { W as Workflow, f as Sparkles, g as Smartphone, P as PanelsTopLeft, R as Rocket, c as ArrowRight, G as Gauge, h as MessageSquare, i as Layers, d as Shield, j as ChevronRight, Q as Quote, e as Check, k as Hand, D as Database, l as ChevronDown } from "../_libs/lucide-react.mjs";
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
import "../_libs/splinetool__runtime.mjs";
import "../_libs/lodash.debounce.mjs";
import "../_libs/react-merge-refs.mjs";
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
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
function LogoStrip() {
  const logos = [
    { name: "Stripe", slug: "stripe" },
    { name: "Vercel", slug: "vercel", invertDark: true },
    { name: "Supabase", slug: "supabase" },
    {
      name: "OpenAI",
      slug: "openai",
      invertDark: true,
      url: "https://cdn.worldvectorlogo.com/logos/openai-2.svg"
    },
    { name: "Shopify", slug: "shopify" },
    { name: "Figma", slug: "figma" },
    { name: "Linear", slug: "linear" },
    { name: "Notion", slug: "notion", invertDark: true },
    {
      name: "Slack",
      slug: "slack",
      url: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
    },
    { name: "Intercom", slug: "intercom" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: [...logos, ...logos].map((logo, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mx-8 flex items-center gap-2.5 text-muted-foreground/60 select-none group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logo.url || `https://cdn.simpleicons.org/${logo.slug}`,
              alt: logo.name,
              className: `size-5 transition-all duration-300 ${logo.invertDark ? "dark:invert" : ""}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium tracking-wide group-hover:text-foreground transition-colors duration-300", children: logo.name })
        ]
      },
      `${logo.name}-${i}`
    )) })
  ] });
}
function Scroll3DElement() {
  const containerRef = reactExports.useRef(null);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-18, 22]);
  const scrollTranslateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const smoothRotate = useSpring(scrollRotate, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(scrollTranslateY, { stiffness: 80, damping: 20 });
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [25, -25]);
  const rotateY = useTransform(x, [0, 1], [-25, 25]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: "relative w-full h-[360px] lg:h-full min-h-[340px] flex flex-col items-center justify-center pointer-events-auto select-none",
      style: { perspective: 1200 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute top-2 flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000] text-[10px] font-black uppercase text-black z-40 pointer-events-none",
            animate: { y: [0, -4, 0] },
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "size-3 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Try dragging the cards!" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "relative w-64 h-64 flex items-center justify-center mt-6",
            style: {
              rotateX: springRotateX,
              rotateY: springRotateY,
              rotateZ: smoothRotate,
              y: smoothY,
              transformStyle: "preserve-3d"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  drag: true,
                  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
                  dragElastic: 0.65,
                  whileDrag: { scale: 1.05, z: 120, cursor: "grabbing" },
                  animate: {
                    z: isHovered ? -80 : -25,
                    y: isHovered ? 45 : 10,
                    x: isHovered ? -20 : -5
                  },
                  transition: { type: "spring", stiffness: 220, damping: 18 },
                  className: "absolute w-56 h-36 border-3 border-black bg-surface rounded-2xl p-5 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_var(--color-brand-purple)] flex flex-col justify-between cursor-grab active:cursor-grabbing",
                  style: {
                    transformStyle: "preserve-3d"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pointer-events-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: "01 // AUTOMATION & DATA" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "size-4 text-brand-purple" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-black text-xs text-foreground", children: "Backend & Integrations" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 font-medium", children: "Supabase, Postgres, n8n webhooks" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-border/20 dark:bg-white/10 h-1 mt-2.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-purple w-[85%] h-full rounded-full animate-pulse" }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  drag: true,
                  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
                  dragElastic: 0.65,
                  whileDrag: { scale: 1.05, z: 120, cursor: "grabbing" },
                  animate: {
                    z: isHovered ? 10 : 0,
                    y: isHovered ? -5 : 0,
                    x: isHovered ? 5 : 0
                  },
                  transition: { type: "spring", stiffness: 220, damping: 18 },
                  className: "absolute w-56 h-36 border-3 border-black bg-surface rounded-2xl p-5 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_var(--color-brand-blue)] flex flex-col justify-between cursor-grab active:cursor-grabbing",
                  style: {
                    transformStyle: "preserve-3d"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pointer-events-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: "02 // WEB & MOBILE" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-4 text-brand-blue" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-black text-xs text-foreground", children: "SaaS & Flutter Apps" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 font-medium", children: "React, Next.js, Flutter stores" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-border/20 dark:bg-white/10 h-1 mt-2.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-blue w-[92%] h-full rounded-full" }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  drag: true,
                  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
                  dragElastic: 0.65,
                  whileDrag: { scale: 1.05, z: 140, cursor: "grabbing" },
                  animate: {
                    z: isHovered ? 100 : 25,
                    y: isHovered ? -55 : -10,
                    x: isHovered ? 30 : 5
                  },
                  transition: { type: "spring", stiffness: 220, damping: 18 },
                  className: "absolute w-56 h-36 border-3 border-black bg-surface rounded-2xl p-5 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_var(--color-brand-pink)] flex flex-col justify-between cursor-grab active:cursor-grabbing",
                  style: {
                    transformStyle: "preserve-3d"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pointer-events-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: "03 // AI SOLUTIONS & MVPS" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-brand-pink" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-black text-xs text-foreground", children: "AI Agents & v1 MVPs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 font-medium", children: "OpenAI RAG, quick clickable builds" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-border/20 dark:bg-white/10 h-1 mt-2.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-pink w-full h-full rounded-full" }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none border-2 border-dashed border-border/15 dark:border-white/5 rounded-full scale-135 -z-50" })
            ]
          }
        )
      ]
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const serviceIcons = {
  mvp: Rocket,
  web: PanelsTopLeft,
  mobile: Smartphone,
  ai: Sparkles,
  automation: Workflow
};
const whyUs = [{
  icon: Gauge,
  title: "Fast Development",
  body: "Weeks, not quarters. Senior team, focused scope, no agency overhead."
}, {
  icon: MessageSquare,
  title: "Transparent Communication",
  body: "Async updates, weekly demos, and a Slack channel you actually use."
}, {
  icon: Layers,
  title: "Modern Technologies",
  body: "TypeScript, React 19, Flutter, Postgres, and AI built into your product, not bolted on."
}, {
  icon: Shield,
  title: "Scalable Architecture",
  body: "Production-ready from day one — type-safe, tested, observable."
}];
const processSteps = ["Discovery", "Planning", "Design", "Development", "Testing", "Launch"];
function Home() {
  const {
    slots
  } = Route$h.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { slots }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TechStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Featured, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickerBoard, {})
  ] });
}
function Hero({
  slots = 2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden min-h-[90vh] flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RetroStar, { className: "left-6 top-32 hidden xl:block animate-float-sticker", size: 60, color: "var(--brand-pink)", rotation: 15 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SparkleDeco, { className: "left-1/4 top-28 hidden md:block", size: 32, color: "var(--brand-blue)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CuteSpeechBubble, { className: "right-[42%] top-[30%] hidden xl:block animate-float-sticker", text: "100% Bespoke! ⚡", color: "var(--brand-blue)", size: 140, rotation: -5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, animate: {
      opacity: 1,
      scale: 1
    }, transition: {
      duration: 0.8,
      delay: 0.5
    }, className: "hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-[800px] h-[600px] spline-scene z-10 pointer-events-auto transition-all duration-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(G, { scene: "https://prod.spline.design/WUDd1kLf1Uh-ftTW/scene.splinecode", className: "w-full h-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 right-5 z-20 pointer-events-none border border-white/10 bg-[#1A1A1A] px-5 py-2.5 rounded-full flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex size-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full size-2 bg-brand" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-white tracking-wider uppercase", children: "Interactive" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 relative z-20 w-full pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl pointer-events-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.1
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm px-4 py-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex size-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full size-2 bg-brand" })
          ] }),
          "Now booking projects for Q3 — ",
          slots,
          " slots left"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }, className: "mt-7 text-5xl md:text-7xl lg:text-[5.25rem] font-semibold leading-[1.05] tracking-tight text-foreground", children: [
          "Building Web, Mobile &",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnCircle, { color: "var(--brand-pink)", children: "AI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "products that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(HandDrawnUnderline, { color: "var(--brand-blue)", children: "scale." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.35
        }, className: "mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "We help startups and growing businesses transform ideas into powerful digital products — through custom software, mobile applications, and AI-powered solutions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.45
        }, className: "mt-9 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCTA, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "btn-secondary", children: "View our work" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block w-full h-[600px]" })
    ] }) })
  ] });
}
function HeroCTA() {
  const [isClient, setIsClient] = reactExports.useState(false);
  const {
    theme
  } = useTheme();
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "data-cal-link": "arjun-rajput-2mdsis", "data-cal-config": JSON.stringify({
    layout: "month_view",
    theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }), className: "group btn-primary", children: [
    "Book a Call",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform duration-300" })
  ] }) });
}
function TechStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-4", children: "Technologies we work with" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogoStrip, {})
  ] }) });
}
const serviceColors = {
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
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What we do", title: "Senior product engineering, end to end.", sub: "Five focused practices — picked because they're where small teams create the most leverage." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealGroup, { className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3", stagger: 0.06, children: [
      services.map((s) => {
        const Icon = serviceIcons[s.slug];
        const colors = serviceColors[s.slug];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "group relative block surface-card interactive-card shine-on-hover p-7 h-full calm-card-custom", style: {
          // @ts-ignore
          "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-[2]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-12 rounded-xl grid place-items-center shadow-lg ${colors.iconText}`, style: {
            background: colors.iconBg
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-semibold tracking-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-sm text-muted-foreground leading-relaxed", children: s.short }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-1.5 text-sm text-foreground/70 group-hover:text-foreground transition-colors", children: [
            "Learn more",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform duration-300" })
          ] })
        ] }) }) }, s.slug);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { className: "flex items-center justify-center h-full min-h-[300px] overflow-visible", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scroll3DElement, {}) })
    ] })
  ] }) });
}
const whyUsColors = [{
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
  iconText: "text-brand-2 dark:text-brand-2"
}];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 section-divider noise-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why teams choose us", title: "A small studio that ships like a product team." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RevealGroup, { className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4", stagger: 0.06, children: whyUs.map((w, i) => {
      const colors = whyUsColors[i % whyUsColors.length];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card interactive-card p-7 h-full calm-card-custom", style: {
        // @ts-ignore
        "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-lg grid place-items-center ${colors.iconText}`, style: {
          backgroundColor: colors.iconBg
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold tracking-tight", children: w.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-sm text-muted-foreground leading-relaxed", children: w.body })
      ] }) }, w.title);
    }) })
  ] }) });
}
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "How we work", title: "A clear, predictable process.", sub: "From first call to launch, you always know where we are and what's next." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent hidden md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealGroup, { className: "grid gap-8 md:grid-cols-6", stagger: 0.06, children: processSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { direction: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-surface border border-border grid place-items-center text-sm font-semibold relative z-10 mx-auto md:mx-0 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gradient", children: [
          "0",
          i + 1
        ] }) }),
        i < processSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:grid absolute top-6 left-[calc(100%+1rem)] -translate-x-1/2 -translate-y-1/2 z-10 size-6 place-items-center bg-background rounded-full border border-border/50 text-muted-foreground/50 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-medium tracking-tight", children: step })
      ] }) }, step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/process", className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors group", children: [
      "See the full process",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform duration-300" })
    ] }) }) })
  ] }) });
}
function Featured() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Featured work", title: "Selected projects." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors group", children: [
        "View all",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform duration-300" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RevealGroup, { className: "mt-14 grid gap-6 grid-cols-1 md:grid-cols-12", stagger: 0.08, children: projects.map((p, i) => {
      const spanClasses = ["md:col-span-8", "md:col-span-4", "md:col-span-4", "md:col-span-8", "md:col-span-6", "md:col-span-6"];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { className: `w-full ${spanClasses[i]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "perspective-container h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p, className: "h-full !rounded-[20px]" }) }) }, p.slug);
    }) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 section-divider noise-bg overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Kind words", title: "What our clients say." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 relative flex overflow-hidden mask-edges w-full pt-16 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 w-max animate-marquee px-4", children: [...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[320px] md:w-[400px] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "book-card-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "book-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "book-card-inside", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-8 text-brand/30 mb-2 -ml-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-sm md:text-base leading-relaxed flex-1 italic text-foreground", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 pt-4 border-t border-border/50", children: [
          t.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.logo, alt: t.name, className: "h-9 w-auto max-w-[120px] object-contain rounded-lg bg-white p-1 border border-border/50 shadow-sm shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground text-xs font-semibold", children: t.name.split(" ").map((n) => n[0]).join("") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: t.role })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "book-card-cover", children: [
        t.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.logo, alt: t.name, className: "self-start h-12 w-auto max-w-[160px] object-contain rounded-xl bg-white p-1.5 border border-border/50 shadow-md" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-start size-10 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground text-sm font-bold shadow-sm shadow-[var(--brand)]/10", children: t.name.split(" ").map((n) => n[0]).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center py-4 pl-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-7 text-brand mb-2 opacity-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold tracking-tight text-foreground line-clamp-1", children: t.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground mt-1 inline-flex items-center gap-1", children: [
            "Hover to open testimonial ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "→" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border/50 pl-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] })
    ] }) }) }, idx)) }) }) })
  ] });
}
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 section-divider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "FAQ", title: "Common questions.", center: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-12 w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-base font-medium hover:no-underline py-5", children: f.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed pb-5", children: f.a })
    ] }, i)) }) })
  ] }) });
}
function FinalCTA() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 cta-calming-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden glass-card p-10 md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-brand-soft opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid gap-12 lg:grid-cols-2 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]", children: [
          "Let's build something ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "great together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground max-w-md leading-relaxed", children: "Tell us about your project. We'll reply within one business day with next steps or honest feedback if we're not the right fit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3.5 text-sm text-muted-foreground", children: ["30-minute discovery call", "Fixed-scope proposal in 48 hours", "Direct access to senior engineers"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded-full bg-brand-gradient grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3 text-primary-foreground" }) }),
          item
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "right", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, { submitted, setSubmitted }) })
    ] })
  ] }) }) });
}
function ContactForm({
  submitted,
  setSubmitted
}) {
  const [loading, setLoading] = reactExports.useState(false);
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "glass-card subtle-green-card p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto size-14 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: "Thanks — we got it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We'll be in touch within one business day." })
    ] });
  }
  const handleSubmit = async (e) => {
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
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "glass-card subtle-green-card p-7 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", placeholder: "Your name", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@company.com", required: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", placeholder: "Company name" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project description", name: "project", textarea: true, placeholder: "Tell us about your project...", required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Budget range", name: "budget", options: ["Under $15k", "$15k – $40k", "$40k – $100k", "$100k+", "Not sure yet"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed", children: [
      loading ? "Sending..." : "Send & book call",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
    ] })
  ] });
}
export {
  Home as component
};
