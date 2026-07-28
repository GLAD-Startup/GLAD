import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";
import { Rocket, Layout, Smartphone, Sparkles, Workflow } from "lucide-react";

export function Flowing3DPrism() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll relative to the parent section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Vertical travel: flows down the entire height of the container
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "95%"]);

  // Horizontal path: swings left and right between cards
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["12%", "88%", "12%", "88%", "50%"],
  );

  // Rotation Y-axis: maps the first 4 faces (0, 90, 180, 270 degrees)
  const rotY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -90, -180, -270, -360]);

  // Rotation X-axis: pitches forward to show the Top Face (AUTOMATION) at scroll progress 1
  const rotX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [15, 15, 15, 15, -75]);

  // Velocity tilt: tilts left or right based on horizontal direction
  const rotZ = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.38, 0.5, 0.62, 0.75, 0.88, 1],
    [15, 15, -15, -15, 15, 15, -15, -15, 0],
  );

  // Smooth springs to create a floating weightless inertia
  const smoothX = useSpring(x, { stiffness: 35, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 35, damping: 15 });
  const smoothRotY = useSpring(rotY, { stiffness: 50, damping: 15 });
  const smoothRotX = useSpring(rotX, { stiffness: 50, damping: 15 });
  const smoothRotZ = useSpring(rotZ, { stiffness: 50, damping: 15 });

  // Motion values to track manual drag rotation offsets
  const dragRotX = useMotionValue(0);
  const dragRotY = useMotionValue(0);

  // Handle drag to spin the cube in 3D space
  const handleDrag = (event: any, info: any) => {
    dragRotY.set(dragRotY.get() + info.delta.x * 0.75);
    dragRotX.set(dragRotX.get() - info.delta.y * 0.75);
  };

  // Reset drag rotation to 0 on release (snaps back to scroll-defined angle)
  const handleDragEnd = () => {
    animate(dragRotY, 0, { type: "spring", stiffness: 85, damping: 15 });
    animate(dragRotX, 0, { type: "spring", stiffness: 85, damping: 15 });
  };

  // Combine scroll rotation and drag rotation
  const combinedRotY = useTransform([smoothRotY, dragRotY], ([s, d]) => (s as number) + (d as number));
  const combinedRotX = useTransform([smoothRotX, dragRotX], ([s, d]) => (s as number) + (d as number));

  // Solid Cube faces (translateZ is exactly half of width/height: 64px)
  const faces = [
    {
      label: "MVP DEV",
      icon: Rocket,
      bg: "bg-brand-pink",
      text: "text-white",
      transform: "rotateY(0deg) translateZ(64px)",
    },
    {
      label: "WEB APPS",
      icon: Layout,
      bg: "bg-brand-blue",
      text: "text-black",
      transform: "rotateY(90deg) translateZ(64px)",
    },
    {
      label: "MOBILE APPS",
      icon: Smartphone,
      bg: "bg-brand-purple",
      text: "text-white",
      transform: "rotateY(180deg) translateZ(64px)",
    },
    {
      label: "AI SOLUTIONS",
      icon: Sparkles,
      bg: "bg-brand-2",
      text: "text-black",
      transform: "rotateY(270deg) translateZ(64px)",
    },
    {
      label: "AUTOMATION",
      icon: Workflow,
      bg: "bg-green-400",
      text: "text-black",
      transform: "rotateX(90deg) translateZ(64px)",
    },
    {
      label: "GLAD STUDIO",
      icon: Sparkles,
      bg: "bg-black",
      text: "text-white",
      transform: "rotateX(-90deg) translateZ(64px)",
    },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-35 overflow-visible">
      {/* 3D Floating Companion */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.85}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="absolute w-32 h-32 cursor-grab active:cursor-grabbing pointer-events-auto select-none"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          perspective: 1200,
        }}
        whileHover={{ scale: 1.15 }}
        whileDrag={{ scale: 1.05 }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            rotateY: combinedRotY,
            rotateX: combinedRotX,
            rotateZ: smoothRotZ,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {faces.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`absolute inset-0 border-3 border-black rounded-2xl p-4 flex flex-col justify-between shadow-[6px_6px_0px_rgba(0,0,0,0.15)] ${f.bg} ${f.text}`}
                style={{
                  transform: f.transform,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black tracking-widest opacity-85">0{i + 1}</span>
                  <Icon className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-wider uppercase leading-none block">
                    {f.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
