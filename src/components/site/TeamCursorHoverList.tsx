import * as React from "react";
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export interface TeamMember {
  num: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageClass?: string;
}

interface TeamCursorHoverListProps {
  members: TeamMember[];
}

export function TeamCursorHoverList({ members }: TeamCursorHoverListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate motion values relative to the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for natural cursor tracking
  const springConfig = { stiffness: 280, damping: 26, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Organic tilt rotation based on horizontal cursor displacement
  const rotateTilt = useTransform(smoothX, (val) => {
    if (!containerRef.current) return 0;
    const width = containerRef.current.offsetWidth || 1;
    const offsetFromCenter = val - width / 2;
    return (offsetFromCenter / width) * 8; // Max ±4 deg tilt
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const activeMember = activeIndex !== null ? members[activeIndex] : null;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full select-none"
    >
      {/* Table Column Labels */}
      <div className="grid grid-cols-12 pb-3.5 border-b border-[var(--color-rule)] text-[11px] font-mono tracking-widest text-[var(--color-ink-3)] uppercase px-4 sm:px-6">
        <div className="col-span-1 hidden sm:block">#</div>
        <div className="col-span-6 sm:col-span-5">Name</div>
        <div className="col-span-6 sm:col-span-6">Position & Focus</div>
      </div>

      {/* Interactive Team Rows */}
      <div className="relative divide-y divide-[var(--color-rule)]">
        {members.map((member, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={member.name}
              onMouseEnter={() => setActiveIndex(idx)}
              className="relative cursor-pointer transition-colors duration-200"
            >
              {/* Active Spring-Animated Highlight Pill (Only renders for actively hovered row) */}
              {isActive && (
                <motion.div
                  layoutId="teamRowActivePill"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  className="absolute inset-0 bg-[#0F6E4C] rounded-[var(--radius-md,10px)] shadow-md -z-0"
                />
              )}

              {/* Row Content */}
              <div className="relative z-10 grid grid-cols-12 items-center py-5 sm:py-6 px-4 sm:px-6 transition-colors duration-200">
                {/* Number */}
                <div
                  className={`col-span-1 hidden sm:block font-mono text-[13px] transition-colors duration-200 ${
                    isActive ? "text-[#A7F3D0]" : "text-[var(--color-brass)]"
                  }`}
                >
                  {member.num}
                </div>

                {/* Name + Arrow */}
                <div className="col-span-6 sm:col-span-5 flex items-center gap-3">
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 transition-all duration-200 ${
                      isActive
                        ? "text-[#A7F3D0] opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 pointer-events-none"
                    }`}
                  >
                    <svg
                      className="w-[19px] h-[19px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7l10 10M17 7v10H7" />
                    </svg>
                  </span>
                  <span
                    className={`font-display text-[20px] sm:text-[24px] font-medium tracking-tight transition-colors duration-200 ${
                      isActive ? "text-white" : "text-[var(--color-ink)]"
                    }`}
                  >
                    {member.name}
                  </span>
                </div>

                {/* Role and Bio */}
                <div className="col-span-6 sm:col-span-6 flex items-center justify-between gap-4">
                  <span
                    className={`text-[14px] sm:text-[16px] font-medium transition-colors duration-200 ${
                      isActive ? "text-[#F0FDF4]" : "text-[var(--color-ink-2)]"
                    }`}
                  >
                    {member.role}
                  </span>
                  <span
                    className={`hidden lg:inline-block text-[13px] font-normal transition-colors duration-200 max-w-[280px] text-right truncate ${
                      isActive ? "text-[#D1FAE5]" : "text-[var(--color-ink-3)]"
                    }`}
                  >
                    {member.bio}
                  </span>
                </div>
              </div>

              {/* Mobile Inline Avatar & Bio (touch screens) */}
              <div className="sm:hidden px-4 pb-4 pt-1 flex items-center gap-3 relative z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-11 h-11 rounded-full object-cover border border-[var(--color-rule)] ${
                    member.imageClass || ""
                  }`}
                />
                <p
                  className={`text-[12px] leading-snug transition-colors duration-200 ${
                    isActive ? "text-white/90" : "text-[var(--color-ink-3)]"
                  }`}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Floating Cursor-Following Photo Card ── */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            key={activeMember.name}
            style={{
              left: smoothX,
              top: smoothY,
              rotate: rotateTilt,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.75, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 26,
              opacity: { duration: 0.16 },
            }}
            className="pointer-events-none absolute z-50 hidden sm:block"
          >
            <div className="relative w-52 h-64 rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-white/40 bg-[#171B20] ring-1 ring-black/10">
              {/* Photo */}
              <img
                src={activeMember.image}
                alt={activeMember.name}
                className={`w-full h-full object-cover ${activeMember.imageClass || ""}`}
              />

              {/* Glass Info Badge Overlay */}
              <div className="absolute inset-x-2.5 bottom-2.5 bg-black/75 backdrop-blur-md rounded-xl p-3 border border-white/15 text-white">
                <div className="font-display font-medium text-[14px] leading-tight text-white">
                  {activeMember.name}
                </div>
                <div className="font-mono text-[11px] text-[#A7F3D0] mt-0.5 tracking-tight truncate">
                  {activeMember.role}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
