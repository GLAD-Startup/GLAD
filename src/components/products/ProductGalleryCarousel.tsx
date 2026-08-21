import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Sparkles, MoveHorizontal } from "lucide-react";

import corporateServer from "@/routes/images/settledesk/corporate-server.png";
import modernOfficeFacade from "@/routes/images/settledesk/modern-office-facade.png";
import brokerDeal from "@/routes/images/settledesk/broker-deal.png";
import luxuryVilla from "@/routes/images/settledesk/luxury-villa.png";
import realEstateContract from "@/routes/images/settledesk/real-estate-contract.png";
import skyscraperSunset from "@/routes/images/settledesk/skyscraper-sunset.png";
import hero3d from "@/routes/images/settledesk/hero-3d.png";
import commission3d from "@/routes/images/settledesk/commission-3d.png";

interface GalleryItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "identity",
    number: "// 01",
    tag: "IDENTITY",
    title: "Dedicated Tenant Isolation",
    subtitle: "End-to-End Encryption",
    description:
      "Enterprise multi-tenant architecture with isolated database schemas, row-level security, and cryptographic tenant separation.",
    image: corporateServer,
  },
  {
    id: "prestige",
    number: "// 02",
    tag: "PRESTIGE",
    title: "Luxury Branding Hub",
    subtitle: "Private Office Spaces",
    description:
      "Custom domain mapping, white-label agent portals, and customized high-converting client presentation decks.",
    image: modernOfficeFacade,
  },
  {
    id: "pipeline",
    number: "// 03",
    tag: "PIPELINE",
    title: "Instant Client Routing",
    subtitle: "Smart Lead Distribution",
    description:
      "Automated round-robin lead allocation matching high-net-worth clients directly to top-producing brokerage agents.",
    image: brokerDeal,
  },
  {
    id: "portfolio",
    number: "// 04",
    tag: "PORTFOLIO",
    title: "High-Value Property Catalog",
    subtitle: "Real-Time Inventory",
    description:
      "Live spatial property catalog with instant status updates, automated price adjustments, and virtual tour embeds.",
    image: luxuryVilla,
  },
  {
    id: "financials",
    number: "// 05",
    tag: "FINANCIALS",
    title: "Automated Commission Splits",
    subtitle: "Tiered Splits & Royalty Caps",
    description:
      "Instant GCI calculation engine supporting custom 80/20, 70/30, or 90/10 split tiers, desk fees, and office royalty caps.",
    image: commission3d,
  },
  {
    id: "governance",
    number: "// 06",
    tag: "GOVERNANCE",
    title: "One-Click Deal Approvals",
    subtitle: "Audit-Ready Legal Vault",
    description:
      "Digital closing binder checks, e-signature validation, and immutable real-time payout audit logs for compliance.",
    image: realEstateContract,
  },
  {
    id: "analytics",
    number: "// 07",
    tag: "ANALYTICS",
    title: "Brokerage Growth Engine",
    subtitle: "Executive BI Dashboard",
    description:
      "Real-time revenue projections, agent performance leaderboards, and predictive quarterly volume forecasting.",
    image: skyscraperSunset,
  },
  {
    id: "mobility",
    number: "// 08",
    tag: "MOBILITY",
    title: "On-the-Go Agent Workflows",
    subtitle: "iOS & Android Native App",
    description:
      "Full operational suite on mobile — capture client signatures, view real-time commission splits, and submit deals directly from the field.",
    image: hero3d,
  },
];

export function ProductGalleryCarousel() {
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  // Non-stopping continuous smooth 60fps auto-spin loop with slightly reduced speed
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isDraggingRef.current) {
        // Reduced speed: ~0.14deg per 16.6ms frame (smooth, non-stop motion)
        const frameSpeed = 0.14 * (delta / 16.6);
        setRotationY((prev) => prev - frameSpeed);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Pointer drag handlers for 3D spin
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setStartRotation(rotationY);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    // 1px drag = 0.35deg rotation
    setRotationY(startRotation + deltaX * 0.35);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // ignore if already released
      }
    }
  };

  const spinPrev = () => {
    const step = 360 / GALLERY_ITEMS.length;
    setRotationY((prev) => Math.round(prev / step) * step + step);
  };

  const spinNext = () => {
    const step = 360 / GALLERY_ITEMS.length;
    setRotationY((prev) => Math.round(prev / step) * step - step);
  };

  // Radius for 3D cylinder
  const totalItems = GALLERY_ITEMS.length;
  const angleStep = 360 / totalItems;
  const radius = 460; // 3D radius in px

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 relative overflow-hidden isolate border-t border-border/60 bg-background text-foreground select-none"
    >
      {/* 1. Large Watermark Text Behind Heading */}
      <div className="pointer-events-none absolute left-1/2 top-12 md:top-16 -translate-x-1/2 -z-10 select-none font-serif italic text-[7rem] sm:text-[12rem] md:text-[17rem] leading-none text-foreground/15 whitespace-nowrap">
        gallery
      </div>

      {/* 2. Section Header */}
      <div className="mx-auto max-w-5xl px-6 text-center space-y-3 relative z-10">
        <span className="inline-block text-xs uppercase font-mono font-bold tracking-[0.3em] text-amber-500/90">
          VISUAL PLATFORM
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-foreground">
          The Operating System{" "}
          <span className="font-serif italic text-[var(--color-brass)]">
            for Modern Real Estate
          </span>
        </h2>
      </div>

      {/* 4. 3D Cylindrical Film Strip Carousel Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="mt-12 md:mt-16 relative w-full h-[480px] sm:h-[520px] md:h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none overflow-visible"
        style={{
          perspective: "1300px",
          perspectiveOrigin: "50% 45%",
        }}
      >
        {/* The 3D Rotating Ring */}
        <div
          className="relative w-[300px] sm:w-[340px] md:w-[380px] h-[220px] sm:h-[240px] md:h-[260px] transition-transform duration-75 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(13deg) rotateY(${rotationY}deg)`,
          }}
        >
          {GALLERY_ITEMS.map((item, index) => {
            const itemAngle = index * angleStep + rotationY;
            // Normalize angle between -180 and 180 for depth calculations
            const normalizedAngle = ((itemAngle % 360) + 540) % 360 - 180;
            const cosVal = Math.cos((normalizedAngle * Math.PI) / 180);
            
            // Front cards get crisp display; rear cards get slight blur and opacity reduction
            const isFront = cosVal > 0.1;
            const opacity = isFront ? 0.95 + cosVal * 0.05 : Math.max(0.35, 0.65 + cosVal * 0.35);
            const blurAmount = isFront ? 0 : Math.min(4, Math.abs(cosVal) * 3);

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  // If clicked near front, inspect details
                  if (Math.abs(normalizedAngle) < 35) {
                    setSelectedItem(item);
                  } else {
                    // Rotate this card to the front
                    setRotationY((prev) => prev - normalizedAngle);
                  }
                }}
                className="absolute inset-0 rounded-2xl bg-[#141416] border border-zinc-700/80 shadow-2xl transition-all duration-300 group hover:border-amber-500/80 hover:shadow-amber-500/10 cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
                  opacity: opacity,
                  filter: `blur(${blurAmount}px)`,
                  backfaceVisibility: "visible",
                }}
              >
                {/* Top Film Sprocket Holes / Perforations */}
                <div className="flex items-center justify-between px-1.5 py-1 bg-black/60 rounded-md border border-white/5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={`top-hole-${i}`}
                      className="w-3 sm:w-3.5 h-2 rounded-[2px] bg-zinc-400/40 border border-white/10"
                    />
                  ))}
                </div>

                {/* Main Content Area inside Film Strip Frame */}
                <div className="relative my-1.5 flex-1 rounded-lg overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-amber-500/40 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  />
                  {/* Dark vignette overlay for text legibility */}
                  <div className="absolute inset-0 bg-black/80" />

                  {/* Header Badges on Image */}
                  <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono tracking-wider font-bold">
                    <span className="px-2 py-0.5 rounded bg-black/70 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                      {item.tag}
                    </span>
                    <span className="text-zinc-400 font-mono">{item.number}</span>
                  </div>

                  {/* Title & Subtitle at bottom of Film Frame */}
                  <div className="absolute bottom-2.5 left-3 right-3 space-y-0.5 text-left">
                    <h3 className="text-xs sm:text-sm font-semibold font-sans text-white tracking-tight leading-snug line-clamp-1 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-300/80 font-mono tracking-normal line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Film Sprocket Holes / Perforations */}
                <div className="flex items-center justify-between px-1.5 py-1 bg-black/60 rounded-md border border-white/5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={`bot-hole-${i}`}
                      className="w-3 sm:w-3.5 h-2 rounded-[2px] bg-zinc-400/40 border border-white/10"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Center Bottom Badge & Navigation Arrows */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 sm:gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              spinPrev();
            }}
            className="size-9 sm:size-10 rounded-full border border-border bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg active:scale-95"
            aria-label="Spin Left"
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>

          <div className="px-4 py-2 rounded-full border border-border/80 bg-card/90 backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
            <MoveHorizontal className="size-3.5 text-amber-500 animate-pulse" />
            <span>DRAG TO SPIN · CLICK TO INSPECT</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              spinNext();
            }}
            className="size-9 sm:size-10 rounded-full border border-border bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg active:scale-95"
            aria-label="Spin Right"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>
        </div>
      </div>

      {/* 6. Inspection Modal when clicking a card */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 size-9 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-amber-500 transition-colors"
              >
                <X className="size-4" />
              </button>

              <div className="relative rounded-2xl overflow-hidden border border-border aspect-video bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 text-amber-400 border border-amber-500/40 backdrop-blur-md">
                  <Sparkles className="size-3 text-amber-400" />
                  <span>{selectedItem.tag}</span>
                </div>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between text-xs font-mono font-extrabold text-amber-500 uppercase tracking-widest">
                  <span>{selectedItem.subtitle}</span>
                  <span>{selectedItem.number}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-foreground">
                  {selectedItem.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-md active:scale-95"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
