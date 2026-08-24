import { useRef, useEffect, useCallback } from "react";
import { HeroSphere3D } from "./HeroSphere3D";
import {
  Globe,
  Smartphone,
  Sparkles,
  Database,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* ── Card data (6 core capabilities for clean, non-overlapping spacing) ─ */

interface CardData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: typeof Globe;
  tag: string;
}

const CARDS: CardData[] = [
  {
    id: "web",
    number: "01",
    title: "Web Platforms",
    subtitle: "React 19 · Edge SSR · Vite",
    icon: Globe,
    tag: "High Throughput",
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Apps",
    subtitle: "iOS · Android · React Native",
    icon: Smartphone,
    tag: "Cross-Platform",
  },
  {
    id: "ai",
    number: "03",
    title: "AI Systems",
    subtitle: "Multi-Agent · Vector RAG · LLMs",
    icon: Sparkles,
    tag: "Autonomous",
  },
  {
    id: "data",
    number: "04",
    title: "Data Platforms",
    subtitle: "PostgreSQL · Redis · Edge",
    icon: Database,
    tag: "Cloud Native",
  },
  {
    id: "security",
    number: "05",
    title: "Cloud & Security",
    subtitle: "Zero-Trust · AES-256 · VPC",
    icon: ShieldCheck,
    tag: "Hardened",
  },
  {
    id: "automation",
    number: "06",
    title: "Automation",
    subtitle: "FastAPI · Queues · Webhooks",
    icon: Zap,
    tag: "Zero Overhead",
  },
];

/* ── Constants ──────────────────────────────────────────── */

const CARD_COUNT = CARDS.length; // 6 cards
const ANGULAR_OFFSET = 360 / CARD_COUNT; // 60° spacing guarantees 130px+ clearance on compact radius
const REVOLUTION_MS = 44_000; // 44 s per full revolution
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
  r: number; // base compact radius close to the sphere
}

function getOrbitConfig(width: number): OrbitConfig {
  if (width < 1280) {
    // Tablet: center (82%, 29%), compact radius 280px (chord spacing 280px > 215px card width)
    return { hubXPct: 82, hubYPct: 29, r: 280 };
  }
  // Desktop: center (82%, 30%), compact radius 360px (chord spacing 360px > 230px card width)
  return { hubXPct: 82, hubYPct: 30, r: 360 };
}

/* ── Shared Card UI ─────────────────────────────────────── */

function CardInner({ card }: { card: CardData }) {
  const IconComp = card.icon;
  return (
    <div className="p-3.5 sm:p-4 flex flex-col justify-between h-full gap-2.5">
      {/* Top: Index badge & Clean Icon pill */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-semibold text-[var(--color-brass)] bg-[var(--color-sunk)] px-2 py-0.5 rounded border border-[var(--color-rule)]">
          {card.number}
        </span>
        <div className="size-6 rounded-md bg-[var(--color-sunk)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-ink-2)]">
          <IconComp className="size-3.5" />
        </div>
      </div>

      {/* Center: Title & Subtitle */}
      <div>
        <div className="font-display text-[14px] font-semibold text-[var(--color-ink)] leading-tight tracking-tight mb-1">
          {card.title}
        </div>
        <div className="font-mono text-[11px] text-[var(--color-ink-3)] leading-tight">
          {card.subtitle}
        </div>
      </div>

      {/* Bottom: Capability Tag & Status */}
      <div className="pt-2 border-t border-[var(--color-rule)]/70 flex items-center justify-between">
        <span className="font-mono text-[9.5px] font-medium text-[var(--color-ink-2)] uppercase tracking-wider">
          {card.tag}
        </span>
        <span className="font-mono text-[9px] text-[var(--color-live)] font-semibold uppercase tracking-wider">
          Live
        </span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   HeroOrbit — desktop/tablet orbit overlay
   - Compact radius (360px), tight around sphere, away from text
   - 6 equidistant cards at 60° (360px chord distance, 130px gap)
   - Zero overlap, constant uninterrupted flow
   - Dynamic scroll expansion: circle expands as page scrolls down
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
      const currentR = cfg.r + expansion; // compact base radius expands on scroll

      // Update SVG rings with current radius
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
        svgInnerRingRef.current.setAttribute("r", String(Math.max(0, currentR - 100)));
        const opacity = Math.max(0, 0.30 - (scrollY / 900) * 0.28);
        svgInnerRingRef.current.setAttribute("opacity", String(opacity));
      }
      if (svgOuterRingRef.current) {
        svgOuterRingRef.current.setAttribute("cx", String(hx));
        svgOuterRingRef.current.setAttribute("cy", String(hy));
        svgOuterRingRef.current.setAttribute("r", String(currentR + 100));
        const opacity = Math.max(0, 0.22 - (scrollY / 900) * 0.22);
        svgOuterRingRef.current.setAttribute("opacity", String(opacity));
      }

      // Constant uninterrupted angular velocity (no hover pause)
      if (!reducedMotionRef.current) {
        angleRef.current = normAngle(angleRef.current + DEG_PER_MS * dt);
      }

      // Position each of the 6 cards along the compact circular trajectory
      for (let i = 0; i < CARD_COUNT; i++) {
        const node = cardRefs.current[i];
        if (!node) continue;

        // Equidistant 60° spacing on compact circle (always 130px+ clearance)
        const cardAngle = normAngle(angleRef.current + i * ANGULAR_OFFSET);

        // Visible sweep arc across the right & bottom-left quadrants (~15° to ~255°)
        const isVisibleAngle = cardAngle >= 15 && cardAngle <= 255;

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
            const liftY = isHovered ? -5 : 0;
            const hoverScale = isHovered ? 1.025 : 1.0;

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

          if (i < 4) {
            const staticAngle = arcStart + ((arcEnd - arcStart) / 3) * i;
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
          left: "82%",
          top: "30%",
          width: 270,
          height: 270,
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
        <div className="pointer-events-none absolute inset-3 rounded-full border border-dashed border-[var(--color-brass)]/40 animate-spin-slow opacity-60 select-none" />

        {/* Pinned Telemetry Label Centered Below Sphere */}
        <div className="absolute top-[calc(50%+76px)] left-1/2 -translate-x-1/2 pointer-events-none flex items-center px-3 py-1 rounded-full border border-[var(--color-rule)] bg-[var(--color-card)]/95 shadow-xs whitespace-nowrap z-30 select-none">
          <span className="text-[9px] font-mono font-semibold text-[var(--color-ink)] tracking-wider uppercase">
            GLAD CORE // 260 NODES
          </span>
        </div>
      </div>

      {/* Orbiting cards on Single Circle (6 Equidistant Cards at 60°, Zero Overlap) */}
      {CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => { cardRefs.current[i] = el; }}
          onPointerEnter={() => onCardEnter(i)}
          onPointerLeave={onCardLeave}
          className="absolute top-0 left-0 pointer-events-auto w-[230px] lg:w-[240px] rounded-[16px] border border-[#DDD6C8] bg-white/[0.97] shadow-[0_10px_28px_-6px_rgba(20,24,30,0.08),0_2px_6px_rgba(0,0,0,0.03)] backdrop-blur-md cursor-default select-none hover:border-[var(--color-ink)]/50 hover:shadow-[0_18px_40px_-8px_rgba(20,24,30,0.14)] transition-[border-color,box-shadow] duration-200 ease-out"
          style={{
            willChange: "transform",
            visibility: "hidden",
            display: "none",
            opacity: 1,
          }}
        >
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
          className="relative w-full rounded-[16px] border border-[#DDD6C8] bg-white/[0.97] shadow-[0_6px_18px_-4px_rgba(20,24,30,0.06)] backdrop-blur-md select-none"
        >
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
