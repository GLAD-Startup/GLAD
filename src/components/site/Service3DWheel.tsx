import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";
import { Rocket, Layout, Smartphone, Sparkles, Workflow } from "lucide-react";

interface WheelProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  onSelect: (index: number) => void;
}

export function Service3DWheel({ targetRef, onSelect }: WheelProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  
  // Track scroll progress of the services section container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });

  // Smooth scroll-linked continuous rotation
  // Maps scroll progress (0 to 1) directly to segment angles (0 to 288 degrees)
  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [0, -288]);
  const smoothRotateY = useSpring(scrollRotateY, { stiffness: 70, damping: 20 });

  // Mouse hover tilt effect (volumetric depth)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [22, -18]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Monitor scroll progress to update active state for card styling internally
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segment = Math.round(latest * 4);
    const index = Math.max(0, Math.min(segment, 4));
    if (index !== activeIdx) {
      setActiveIdx(index);
    }
  });

  const angles = [0, 72, 144, 216, 288];
  
  const colors = [
    "#FF007F", // MVP (pink)
    "#00F0FF", // WEB (blue)
    "#9F32FF", // MOBILE (purple)
    "#FACC15", // AI (yellow)
    "#4ADE80"  // AUTOMATION (green)
  ];

  const activeStyles = [
    "bg-brand-pink text-white border-black shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.15)]",
    "bg-brand-blue text-black border-black shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.15)]",
    "bg-brand-purple text-white border-black shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.15)]",
    "bg-brand-2 text-black border-black shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.15)]",
    "bg-green-400 text-black border-black shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.15)]"
  ];
  
  const icons = [Rocket, Layout, Smartphone, Sparkles, Workflow];
  const labels = ["MVP DEV", "WEB APPS", "MOBILE APPS", "AI SOLUTIONS", "AUTOMATION"];
  const descriptions = [
    "Validation & clickable builds",
    "High-performance SaaS platforms",
    "Native iOS & Android apps",
    "Custom agents & RAG pipelines",
    "Workflow & tool integrations"
  ];

  return (
    <div 
      className="relative w-full h-[520px] flex items-center justify-center pointer-events-auto" 
      style={{ perspective: 1400 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Wheel Container */}
      <motion.div
        className="relative w-48 h-48"
        style={{
          rotateY: smoothRotateY,
          rotateX: springRotateX,
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
      >
        {angles.map((angle, i) => {
          const Icon = icons[i];
          const isActive = i === activeIdx;
          const radius = 210; // larger projection radius to prevent overlapping
          
          return (
            <motion.div
              key={i}
              onClick={() => onSelect(i)}
              className={`absolute w-52 h-32 border-3 rounded-2xl p-5 flex flex-col justify-between cursor-pointer select-none transition-all duration-300 ${
                isActive 
                  ? `${activeStyles[i]} scale-110 z-30` 
                  : "bg-surface/30 border-border opacity-20 hover:opacity-60 text-muted-foreground shadow-[3px_3px_0px_0px_var(--border)]"
              }`}
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform"
              }}
              whileHover={{ scale: isActive ? 1.15 : 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Header inside Card */}
              <div className="flex items-center justify-between pointer-events-none">
                <span className={`text-[10px] font-black tracking-widest ${isActive ? "opacity-90" : "text-muted-foreground/60"}`}>
                  0{i + 1} // PRACTICE
                </span>
                <span 
                  className={`p-1.5 rounded-lg border-2 border-black/10 dark:border-white/10 ${
                    isActive ? "bg-black/10" : "bg-surface"
                  }`}
                >
                  <Icon className="size-5 shrink-0" style={{ color: isActive ? "currentColor" : colors[i] }} />
                </span>
              </div>

              {/* Title & Description inside Card */}
              <div className="pointer-events-none mt-2">
                <h3 className="font-display font-black text-xs leading-none tracking-wide">{labels[i]}</h3>
                <p className={`text-[9px] mt-1.5 leading-snug font-semibold ${isActive ? "opacity-85" : "text-muted-foreground/70"}`}>
                  {descriptions[i]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center glowing orb/ring */}
      <div 
        className="absolute w-36 h-36 rounded-full border-2 border-dashed border-border/10 dark:border-white/5 flex items-center justify-center animate-spin"
        style={{ animationDuration: "35s" }}
      >
        <div className="w-20 h-20 rounded-full bg-brand-gradient opacity-10 blur-2xl" />
      </div>
    </div>
  );
}
