import { useRef, useEffect, useCallback } from "react";
import { HeroSphere3D } from "./HeroSphere3D";
import {
  Globe,
  Smartphone,
  Sparkles,
  Database,
  ShieldCheck,
  Zap,
  Server,
  Activity,
  Layers,
  Workflow,
  CreditCard,
  LifeBuoy,
} from "lucide-react";

/* ── Card data (12 capabilities) ─────────────────────────── */

interface CardData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: typeof Globe;
  accent: string;
  tag: string;
  specs: { label: string; val: string }[];
}

const CARDS: CardData[] = [
  {
    id: "web",
    number: "01",
    title: "WEB PLATFORMS",
    subtitle: "React 19 · Edge SSR · Motion",
    icon: Globe,
    accent: "#0F6E4C",
    tag: "EDGE SSR",
    specs: [
      { label: "TTFB", val: "< 45ms" },
      { label: "Lighthouse", val: "100/100" },
    ],
  },
  {
    id: "mobile",
    number: "02",
    title: "MOBILE",
    subtitle: "iOS · Android · React Native",
    icon: Smartphone,
    accent: "#4F46E5",
    tag: "60 FPS",
    specs: [
      { label: "Crash-free", val: "99.9%" },
      { label: "Store", val: "4.8★" },
    ],
  },
  {
    id: "ai",
    number: "03",
    title: "AI AGENTS",
    subtitle: "Python · LangGraph · RAG",
    icon: Sparkles,
    accent: "#C8A84E",
    tag: "MULTI-MODEL",
    specs: [
      { label: "Tokens", val: "streamed" },
      { label: "Eval", val: "passing" },
    ],
  },
  {
    id: "data",
    number: "04",
    title: "DATA PLATFORMS",
    subtitle: "PostgreSQL & Vector Store",
    icon: Database,
    accent: "#7C3AED",
    tag: "DATA CLOUD",
    specs: [
      { label: "Uptime", val: "99.99%" },
      { label: "Cluster", val: "Multi-Region" },
    ],
  },
  {
    id: "security",
    number: "05",
    title: "AUTONOMOUS SECURITY",
    subtitle: "Zero-Trust VPC · Encryption",
    icon: ShieldCheck,
    accent: "#E11D48",
    tag: "SOC2 READY",
    specs: [
      { label: "Encryption", val: "AES-256 GCM" },
      { label: "VPC", val: "Isolated" },
    ],
  },
  {
    id: "automation",
    number: "06",
    title: "AUTOMATION",
    subtitle: "FastAPI · Queues · Webhooks",
    icon: Zap,
    accent: "#D97706",
    tag: "AUTOMATED",
    specs: [
      { label: "Jobs/day", val: "12k" },
      { label: "Retry", val: "idempotent" },
    ],
  },
  {
    id: "delivery",
    number: "07",
    title: "DELIVERY",
    subtitle: "Docker · CI/CD · Staging",
    icon: Server,
    accent: "#0284C7",
    tag: "CI/CD",
    specs: [
      { label: "Staging", val: "week 3" },
      { label: "Deploys", val: "daily" },
    ],
  },
  {
    id: "observability",
    number: "08",
    title: "OBSERVABILITY",
    subtitle: "Traces · Logs · Alerts",
    icon: Activity,
    accent: "#059669",
    tag: "TELEMETRY",
    specs: [
      { label: "p95", val: "< 180ms" },
      { label: "SLO", val: "99.9%" },
    ],
  },
  {
    id: "design-systems",
    number: "09",
    title: "DESIGN SYSTEMS",
    subtitle: "Tokens · Figma · Storybook",
    icon: Layers,
    accent: "#DB2777",
    tag: "SYSTEM",
    specs: [
      { label: "Components", val: "120+" },
      { label: "A11y", val: "WCAG AA" },
    ],
  },
  {
    id: "integrations",
    number: "10",
    title: "INTEGRATIONS",
    subtitle: "REST · GraphQL · Webhooks",
    icon: Workflow,
    accent: "#8B5CF6",
    tag: "API",
    specs: [
      { label: "Partners", val: "40+" },
      { label: "Sync", val: "realtime" },
    ],
  },
  {
    id: "payments",
    number: "11",
    title: "PAYMENTS",
    subtitle: "UPI · Cards · Subscriptions",
    icon: CreditCard,
    accent: "#059669",
    tag: "FINTECH",
    specs: [
      { label: "PCI", val: "scoped" },
      { label: "Settlement", val: "T+1" },
    ],
  },
  {
    id: "support",
    number: "12",
    title: "SUPPORT",
    subtitle: "SLA · Monitoring · On-call",
    icon: LifeBuoy,
    accent: "#D97706",
    tag: "24/7 SLA",
    specs: [
      { label: "Response", val: "< 2h" },
      { label: "Coverage", val: "24/7" },
    ],
  },
];

/* ── Constants ──────────────────────────────────────────── */

const CARD_COUNT = CARDS.length; // 12
const ANGULAR_OFFSET = 360 / CARD_COUNT; // 30° equidistant spacing
const REVOLUTION_MS = 48_000; // 48 s per full revolution
const DEG_PER_MS = 360 / REVOLUTION_MS; // constant speed across all cards

/* ── Helpers ────────────────────────────────────────────── */

const DEG2RAD = Math.PI / 180;

function normAngle(a: number): number {
  return ((a % 360) + 360) % 360;
}

/* ── Breakpoint configs ─────────────────────────────────── */

interface OrbitConfig {
  hubXPct: number;
  hubYPct: number;
  r: number; // base single circle radius
}

function getOrbitConfig(width: number): OrbitConfig {
  if (width < 1280) {
    // Tablet: center (82%, 22%), base radius 290px
    return { hubXPct: 82, hubYPct: 22, r: 290 };
  }
  // Desktop: center (80%, 24%), base radius 390px
  return { hubXPct: 80, hubYPct: 24, r: 390 };
}

/* ── Shared Card UI ─────────────────────────────────────── */

function CardInner({ card }: { card: CardData }) {
  const IconComp = card.icon;
  return (
    <div className="p-3.5 sm:p-4 flex flex-col justify-between gap-2.5">
      {/* Category & Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="size-2 rounded-full shadow-[0_0_0_3px_rgba(0,0,0,0.06)]"
            style={{ backgroundColor: card.accent }}
          />
          <span className="font-mono text-[10.5px] font-bold tracking-[0.08em] text-[var(--color-ink)]">
            {card.number} // {card.title}
          </span>
        </div>
        <span className="px-1.5 py-0.5 rounded-[4px] border border-[var(--color-rule)] bg-[#F5F2EB] text-[8.5px] font-mono font-bold text-[var(--color-ink)]">
          {card.tag}
        </span>
      </div>

      {/* Subtitle & Icon */}
      <div className="flex items-center justify-between gap-2">
        <div className="text-[12.5px] font-semibold text-[var(--color-ink)] truncate">
          {card.subtitle}
        </div>
        <IconComp className="size-4 shrink-0" style={{ color: card.accent }} />
      </div>

      {/* Spec Metrics */}
      <div className="flex items-center gap-1.5 pt-2 border-t border-[var(--color-rule)]/80">
        {card.specs.map((spec, si) => (
          <span
            key={si}
            className="px-2 py-0.5 rounded-[5px] bg-[#F4F1EA] border border-[#DDD6C8] text-[9.5px] font-mono text-[var(--color-ink)] font-medium"
          >
            <span className="text-[var(--color-ink-3)] font-normal">{spec.label}:</span>{" "}
            <strong className="font-bold text-[var(--color-ink)]">{spec.val}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Corner Blueprint Marks ─────────────────────────────── */

function CornerMarks() {
  return (
    <>
      <span className="pointer-events-none absolute top-1.5 left-2 text-[8.5px] font-mono text-[var(--color-ink-3)] font-bold select-none">+</span>
      <span className="pointer-events-none absolute top-1.5 right-2 text-[8.5px] font-mono text-[var(--color-ink-3)] font-bold select-none">+</span>
      <span className="pointer-events-none absolute bottom-1.5 left-2 text-[8.5px] font-mono text-[var(--color-ink-3)] font-bold select-none">+</span>
      <span className="pointer-events-none absolute bottom-1.5 right-2 text-[8.5px] font-mono text-[var(--color-ink-3)] font-bold select-none">+</span>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   HeroOrbit — desktop/tablet orbit overlay
   - Single circle, equidistant 30°, constant flow (no hover pause)
   - Dynamic scroll expansion: circle expands as page scrolls down,
     cards spread apart and exit the screen while sphere stays in place.
   ════════════════════════════════════════════════════════════ */

export function HeroOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const svgMainRingRef = useRef<SVGCircleElement>(null);
  const svgInnerRingRef = useRef<SVGCircleElement>(null);
  const svgOuterRingRef = useRef<SVGCircleElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const rAFRef = useRef<number>(0);

  // Mutable animation state
  const angleRef = useRef(0);
  const lastTimeRef = useRef(0);
  const hoveredIdxRef = useRef<number | null>(null);
  const configRef = useRef<OrbitConfig>(getOrbitConfig(1440));
  const reducedMotionRef = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /** Resolve hub pixel position (center of the circle) against this layer */
  const resolveHub = useCallback((rect: DOMRect, cfg: OrbitConfig) => ({
    hx: rect.width * (cfg.hubXPct / 100),
    hy: rect.height * (cfg.hubYPct / 100),
  }), []);

  /* ── Sync base layout on resize ────────────────────────── */
  const syncGeometry = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cfg = getOrbitConfig(rect.width);
    configRef.current = cfg;
    const { hx, hy } = resolveHub(rect, cfg);

    // Hub center stays in place
    if (hubRef.current) {
      hubRef.current.style.left = `${hx}px`;
      hubRef.current.style.top = `${hy}px`;
    }
  }, [resolveHub]);

  /* ── Resize observer ──────────────────────────────────── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    syncGeometry();
    const ro = new ResizeObserver(() => syncGeometry());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [syncGeometry]);

  /* ── rAF loop: continuous flow + dynamic scroll expansion ── */
  useEffect(() => {
    if (typeof window === "undefined") return;

    lastTimeRef.current = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTimeRef.current, 50);
      lastTimeRef.current = now;

      const el = containerRef.current;
      if (!el) {
        rAFRef.current = requestAnimationFrame(tick);
        return;
      }

      const rect = el.getBoundingClientRect();
      if (rect.width < 901) {
        rAFRef.current = requestAnimationFrame(tick);
        return;
      }

      const cfg = configRef.current;
      const { hx, hy } = resolveHub(rect, cfg);

      // Scroll-driven expansion: circle grows as user scrolls down
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const expansion = scrollY * 2.2;
      const currentR = cfg.r + expansion; // circle expands on scroll

      // Update SVG rings with current expanding radius
      if (svgMainRingRef.current) {
        svgMainRingRef.current.setAttribute("cx", String(hx));
        svgMainRingRef.current.setAttribute("cy", String(hy));
        svgMainRingRef.current.setAttribute("r", String(currentR));
        const opacity = Math.max(0, 0.55 - (scrollY / 900) * 0.45);
        svgMainRingRef.current.setAttribute("opacity", String(opacity));
      }
      if (svgInnerRingRef.current) {
        svgInnerRingRef.current.setAttribute("cx", String(hx));
        svgInnerRingRef.current.setAttribute("cy", String(hy));
        svgInnerRingRef.current.setAttribute("r", String(Math.max(0, currentR - 120)));
        const opacity = Math.max(0, 0.30 - (scrollY / 900) * 0.28);
        svgInnerRingRef.current.setAttribute("opacity", String(opacity));
      }
      if (svgOuterRingRef.current) {
        svgOuterRingRef.current.setAttribute("cx", String(hx));
        svgOuterRingRef.current.setAttribute("cy", String(hy));
        svgOuterRingRef.current.setAttribute("r", String(currentR + 120));
        const opacity = Math.max(0, 0.22 - (scrollY / 900) * 0.22);
        svgOuterRingRef.current.setAttribute("opacity", String(opacity));
      }

      // Constant uninterrupted angular velocity (no hover pause)
      if (!reducedMotionRef.current) {
        angleRef.current = normAngle(angleRef.current + DEG_PER_MS * dt);
      }

      // Position each card along the expanding circular trajectory
      for (let i = 0; i < CARD_COUNT; i++) {
        const node = cardRefs.current[i];
        if (!node) continue;

        // Equidistant 30° spacing
        const cardAngle = normAngle(angleRef.current + i * ANGULAR_OFFSET);

        // Visible sweep arc across the right & bottom-left quadrants
        const isVisibleAngle = cardAngle >= 20 && cardAngle <= 250;

        if (!isVisibleAngle) {
          node.style.display = "none";
          node.style.visibility = "hidden";
          node.style.pointerEvents = "none";
        } else {
          const rad = cardAngle * DEG2RAD;
          const x = hx + Math.cos(rad) * currentR;
          const y = hy + Math.sin(rad) * currentR;

          // If scrolled so far that card is completely outside viewport bounds
          const isFarOffscreen =
            x < -350 || x > rect.width + 350 || y < -350 || y > rect.height + 350;

          if (isFarOffscreen) {
            node.style.display = "none";
            node.style.visibility = "hidden";
            node.style.pointerEvents = "none";
          } else {
            const isHovered = hoveredIdxRef.current === i;
            const liftY = isHovered ? -8 : 0;
            const hoverScale = isHovered ? 1.03 : 1.0;

            node.style.display = "block";
            node.style.visibility = "visible";
            node.style.pointerEvents = "auto";
            node.style.opacity = "1";
            node.style.transform = `translate3d(${x.toFixed(1)}px, ${(y + liftY).toFixed(1)}px, 0) translate(-50%, -50%) scale(${hoverScale})`;
          }
        }
      }

      rAFRef.current = requestAnimationFrame(tick);
    };

    // Reduced-motion: static layout with scroll expansion
    if (reducedMotionRef.current) {
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const cfg = configRef.current;
        const { hx, hy } = resolveHub(rect, cfg);
        const scrollY = window.scrollY || 0;
        const currentR = cfg.r + scrollY * 2.2;
        const arcStart = 45;
        const arcEnd = 225;

        for (let i = 0; i < CARD_COUNT; i++) {
          const node = cardRefs.current[i];
          if (!node) continue;

          if (i < 6) {
            const staticAngle = arcStart + ((arcEnd - arcStart) / 5) * i;
            const rad = staticAngle * DEG2RAD;
            const x = hx + Math.cos(rad) * currentR;
            const y = hy + Math.sin(rad) * currentR;

            node.style.display = "block";
            node.style.visibility = "visible";
            node.style.pointerEvents = "auto";
            node.style.opacity = "1";
            node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(1)`;
          } else {
            node.style.display = "none";
            node.style.visibility = "hidden";
            node.style.pointerEvents = "none";
          }
        }
      }
      return;
    }

    rAFRef.current = requestAnimationFrame(tick);
    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, [resolveHub]);

  /* ── Hover handlers (card visual lift only, NO orbit pausing) ─ */
  const onCardEnter = useCallback((i: number) => {
    hoveredIdxRef.current = i;
  }, []);

  const onCardLeave = useCallback(() => {
    hoveredIdxRef.current = null;
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden min-[901px]:block absolute inset-0 z-20 pointer-events-none overflow-visible"
    >
      {/* SVG Dashed Blueprint Circular Orbit Guides */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Inner Blueprint Ring */}
        <circle
          ref={svgInnerRingRef}
          fill="none"
          stroke="var(--color-rule-hi)"
          strokeWidth="1.0"
          strokeDasharray="4 8"
          opacity="0.30"
        />
        {/* Primary Main Single Orbit Ring */}
        <circle
          ref={svgMainRingRef}
          fill="none"
          stroke="var(--color-rule-hi)"
          strokeWidth="1.4"
          strokeDasharray="6 8"
          opacity="0.55"
        />
        {/* Outer Guide Ring */}
        <circle
          ref={svgOuterRingRef}
          fill="none"
          stroke="var(--color-rule-hi)"
          strokeWidth="0.9"
          strokeDasharray="3 9"
          opacity="0.22"
        />
      </svg>

      {/* ── 3D Breathing Sphere at Circle Center (hubXPct, hubYPct) ── */}
      <div
        ref={hubRef}
        className="absolute z-10 flex items-center justify-center pointer-events-none"
        style={{
          left: "80%",
          top: "24%",
          width: 320,
          height: 320,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* 3D WebGL Breathing Canvas / SVG Fallback */}
        <div className="w-full h-full relative pointer-events-auto flex items-center justify-center">
          <HeroSphere3D />
        </div>

        {/* Blueprint Compass Ring Degree Markers */}
        <div className="pointer-events-none absolute inset-0 rounded-full border border-[var(--color-rule-hi)]/40 flex items-center justify-center select-none">
          <span className="absolute top-2 text-[7.5px] font-mono text-[var(--color-ink-3)] font-bold tracking-wider">
            000°
          </span>
          <span className="absolute right-2 text-[7.5px] font-mono text-[var(--color-ink-3)] font-bold tracking-wider">
            090°
          </span>
          <span className="absolute bottom-2 text-[7.5px] font-mono text-[var(--color-ink-3)] font-bold tracking-wider">
            180°
          </span>
          <span className="absolute left-2 text-[7.5px] font-mono text-[var(--color-ink-3)] font-bold tracking-wider">
            270°
          </span>
        </div>

        {/* Rotating subtle dashed brass accent ring */}
        <div className="pointer-events-none absolute inset-4 rounded-full border border-dashed border-[var(--color-brass)]/40 animate-spin-slow opacity-60 select-none" />

        {/* Pinned Telemetry Label Centered Below Sphere */}
        <div className="absolute top-[calc(50%+90px)] left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--color-rule)] bg-[var(--color-card)]/95 shadow-sm whitespace-nowrap z-30 select-none">
          <span className="size-1.5 rounded-full bg-[var(--color-live)] animate-ping" />
          <span className="text-[8.5px] font-mono font-bold text-[var(--color-ink)] tracking-wider uppercase">
            GLAD CORE // 260 NODES
          </span>
        </div>
      </div>

      {/* Orbiting cards on Single Circle (12 Total, Equidistant at 30°, Equal Speed) */}
      {CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => { cardRefs.current[i] = el; }}
          onPointerEnter={() => onCardEnter(i)}
          onPointerLeave={onCardLeave}
          className="absolute top-0 left-0 pointer-events-auto w-[265px] lg:w-[280px] rounded-[14px] border-[1.5px] border-[#D6CFBE] bg-white/[0.97] shadow-[0_14px_30px_-6px_rgba(25,28,33,0.10),0_2px_6px_rgba(0,0,0,0.04)] backdrop-blur-lg cursor-default select-none hover:border-[var(--color-ink)] hover:shadow-[0_24px_48px_-10px_rgba(25,28,33,0.18),0_4px_12px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-200 ease-out"
          style={{
            willChange: "transform",
            visibility: "hidden",
            display: "none",
            opacity: 1,
          }}
        >
          <CornerMarks />
          <CardInner card={card} />
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   HeroMobileCards — static card stack for small screens
   ════════════════════════════════════════════════════════════ */

export function HeroMobileCards() {
  return (
    <div className="min-[901px]:hidden flex flex-col gap-3 mt-6">
      {CARDS.map((card) => (
        <div
          key={card.id}
          className="relative w-full rounded-[14px] border-[1.5px] border-[#D6CFBE] bg-white/[0.97] shadow-[0_6px_18px_-4px_rgba(25,28,33,0.08)] backdrop-blur-lg select-none"
        >
          <span className="pointer-events-none absolute top-1.5 left-2 text-[8.5px] font-mono text-[var(--color-ink-3)] font-bold select-none">+</span>
          <span className="pointer-events-none absolute top-1.5 right-2 text-[8.5px] font-mono text-[var(--color-ink-3)] font-bold select-none">+</span>
          <CardInner card={card} />
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   HeroStack3D — backward-compat export
   ════════════════════════════════════════════════════════════ */

interface HeroStack3DProps {
  slots?: number;
}

export function HeroStack3D({ slots = 1 }: HeroStack3DProps) {
  return (
    <>
      <HeroOrbit />
      <HeroMobileCards />
    </>
  );
}
