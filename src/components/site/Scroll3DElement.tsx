import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Database, Smartphone, Sparkles, Hand } from "lucide-react";

export function Scroll3DElement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Track scroll position relative to the element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll animations: rotate stack and stretch separation
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-18, 22]);
  const scrollTranslateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  
  const smoothRotate = useSpring(scrollRotate, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(scrollTranslateY, { stiffness: 80, damping: 20 });

  // Mouse hover tilt effect (perspectives)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [25, -25]);
  const rotateY = useTransform(x, [0, 1], [-25, 25]);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] lg:h-full min-h-[340px] flex flex-col items-center justify-center pointer-events-auto select-none"
      style={{ perspective: 1200 }}
    >
      {/* Playful Drag hint */}
      <motion.div 
        className="absolute top-2 flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000] text-[10px] font-black uppercase text-black z-40 pointer-events-none"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Hand className="size-3 animate-pulse" />
        <span>Try dragging the cards!</span>
      </motion.div>

      {/* 3D Stack Wrapper */}
      <motion.div
        className="relative w-64 h-64 flex items-center justify-center mt-6"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: smoothRotate,
          y: smoothY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Layer 1: Database & Automation (Bottom layer) */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.65}
          whileDrag={{ scale: 1.05, z: 120, cursor: "grabbing" }}
          animate={{
            z: isHovered ? -80 : -25,
            y: isHovered ? 45 : 10,
            x: isHovered ? -20 : -5,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="absolute w-56 h-36 border-3 border-black bg-surface rounded-2xl p-5 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_var(--color-brand-purple)] flex flex-col justify-between cursor-grab active:cursor-grabbing"
          style={{
            transformStyle: "preserve-3d"
          }}
        >
          <div className="flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">01 // AUTOMATION & DATA</span>
            <Database className="size-4 text-brand-purple" />
          </div>
          <div className="pointer-events-none">
            <h4 className="font-display font-black text-xs text-foreground">Backend & Integrations</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">Supabase, Postgres, n8n webhooks</p>
            <div className="w-full bg-border/20 dark:bg-white/10 h-1 mt-2.5 rounded-full overflow-hidden">
              <div className="bg-brand-purple w-[85%] h-full rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Layer 2: Web & Mobile (Middle layer) */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.65}
          whileDrag={{ scale: 1.05, z: 120, cursor: "grabbing" }}
          animate={{
            z: isHovered ? 10 : 0,
            y: isHovered ? -5 : 0,
            x: isHovered ? 5 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="absolute w-56 h-36 border-3 border-black bg-surface rounded-2xl p-5 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_var(--color-brand-blue)] flex flex-col justify-between cursor-grab active:cursor-grabbing"
          style={{
            transformStyle: "preserve-3d"
          }}
        >
          <div className="flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">02 // WEB & MOBILE</span>
            <Smartphone className="size-4 text-brand-blue" />
          </div>
          <div className="pointer-events-none">
            <h4 className="font-display font-black text-xs text-foreground">SaaS & Flutter Apps</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">React, Next.js, Flutter stores</p>
            <div className="w-full bg-border/20 dark:bg-white/10 h-1 mt-2.5 rounded-full overflow-hidden">
              <div className="bg-brand-blue w-[92%] h-full rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Layer 3: AI & MVPs (Top layer) */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.65}
          whileDrag={{ scale: 1.05, z: 140, cursor: "grabbing" }}
          animate={{
            z: isHovered ? 100 : 25,
            y: isHovered ? -55 : -10,
            x: isHovered ? 30 : 5,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="absolute w-56 h-36 border-3 border-black bg-surface rounded-2xl p-5 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_var(--color-brand-pink)] flex flex-col justify-between cursor-grab active:cursor-grabbing"
          style={{
            transformStyle: "preserve-3d"
          }}
        >
          <div className="flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">03 // AI SOLUTIONS & MVPS</span>
            <Sparkles className="size-4 text-brand-pink" />
          </div>
          <div className="pointer-events-none">
            <h4 className="font-display font-black text-xs text-foreground">AI Agents & v1 MVPs</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">OpenAI RAG, quick clickable builds</p>
            <div className="w-full bg-border/20 dark:bg-white/10 h-1 mt-2.5 rounded-full overflow-hidden">
              <div className="bg-brand-pink w-full h-full rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Decorative background dashed ring */}
        <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-border/15 dark:border-white/5 rounded-full scale-135 -z-50" />
      </motion.div>
    </div>
  );
}
