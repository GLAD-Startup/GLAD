'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { X, Sparkles } from 'lucide-react';
import type { ProductGalleryCard } from '@/data/products';

export interface ProductGallery3DProps {
  items: ProductGalleryCard[];
  title?: string;
  subtitle?: string;
}

export default function ProductGallery3D({
  items,
  title = 'The Operating System for Modern Real Estate',
  subtitle = 'Rotate through the unified architecture powering modern brokerage operations.',
}: ProductGallery3DProps) {
  const [rotationY, setRotationY] = useState(0);
  const [wobbleY, setWobbleY] = useState(0);
  const [wobbleRotateX, setWobbleRotateX] = useState(12);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ProductGalleryCard | null>(null);
  const [radius, setRadius] = useState(580);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const isHoveredRef = useRef(false);
  const rotationYRef = useRef(0);
  const rotationTrackerRef = useRef({ angle: 0 });

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== 'undefined') {
        const w = window.innerWidth;
        if (w < 480) {
          setRadius(390);
        } else if (w < 768) {
          setRadius(490);
        } else if (w < 1280) {
          setRadius(580);
        } else {
          setRadius(620);
        }
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Silky smooth continuous animation loop (auto-rotation + calm vertical breathing)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min(time - lastTime, 32);
      lastTime = time;

      // 1. Continuous smooth rotation around Y axis
      if (!isDraggingRef.current && !isTransitioningRef.current && !selectedItem) {
        const frameSpeed = (isHoveredRef.current ? 0.04 : 0.1) * (delta / 16.6);
        const nextAngle = rotationYRef.current - frameSpeed;
        rotationYRef.current = nextAngle;
        rotationTrackerRef.current.angle = nextAngle;
        setRotationY(nextAngle);
      }

      // 2. Calm, smooth vertical floating wobble (no abrupt shaking)
      const wy = Math.sin(time * 0.001) * 7;
      const rx = 12 + Math.sin(time * 0.0008) * 1.5;

      setWobbleY(wy);
      setWobbleRotateX(rx);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedItem]);

  // Smooth slide animation to a target angle using GSAP
  const animateToAngle = (targetAngle: number) => {
    isTransitioningRef.current = true;
    gsap.killTweensOf(rotationTrackerRef.current);

    gsap.to(rotationTrackerRef.current, {
      angle: targetAngle,
      duration: 0.7,
      ease: 'power3.out',
      onUpdate: () => {
        rotationYRef.current = rotationTrackerRef.current.angle;
        setRotationY(rotationTrackerRef.current.angle);
      },
      onComplete: () => {
        rotationYRef.current = targetAngle;
        setRotationY(targetAngle);
        isTransitioningRef.current = false;
      },
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    isTransitioningRef.current = false;
    gsap.killTweensOf(rotationTrackerRef.current);
    setDragStartX(e.clientX);
    setStartRotation(rotationTrackerRef.current.angle);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    const newAngle = startRotation + deltaX * 0.32;
    rotationYRef.current = newAngle;
    rotationTrackerRef.current.angle = newAngle;
    setRotationY(newAngle);
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

  const totalItems = items.length;
  const angleStep = 360 / totalItems;

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 xl:py-24 relative overflow-hidden isolate border-t border-line bg-bg text-fg select-none"
    >
      {/* Section Header */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="t-heading sm:text-[44px] text-fg font-medium tracking-tight">
            {title}
          </h2>
          <p className="t-body-sm text-fg-muted max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 3D Cylindrical Film Strip Carousel Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        className="mt-16 sm:mt-20 md:mt-24 xl:mt-28 relative w-full h-[400px] sm:h-[460px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none overflow-visible"
        style={{
          perspective: '1550px',
          perspectiveOrigin: '50% 26%',
        }}
      >
        {/* 3D Rotating Ring - NO CSS transition to eliminate frame fighting/jitter */}
        <div
          className="relative w-[200px] xs:w-[225px] sm:w-[255px] md:w-[275px] h-[140px] xs:h-[155px] sm:h-[175px] md:h-[190px] will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translate3d(0, ${wobbleY}px, 0) rotateX(${wobbleRotateX}deg) rotateY(${rotationY}deg)`,
          }}
        >
          {items.map((item, index) => {
            const itemAngle = index * angleStep + rotationY;
            const normalizedAngle = (((itemAngle % 360) + 540) % 360) - 180;
            const cosVal = Math.cos((normalizedAngle * Math.PI) / 180);

            const isFront = cosVal > 0.1;
            const opacity = isFront ? 0.96 + cosVal * 0.04 : Math.max(0.28, 0.58 + cosVal * 0.42);
            const blurAmount = isFront ? 0 : Math.min(3, Math.abs(cosVal) * 2);

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  if (Math.abs(normalizedAngle) < 18) {
                    setSelectedItem(item);
                  } else {
                    animateToAngle(rotationTrackerRef.current.angle - normalizedAngle);
                  }
                }}
                className="absolute inset-0 rounded-[14px] bg-[#0A0A0B] border border-white/15 shadow-2xl transition-[border-color,box-shadow] duration-200 group hover:border-accent hover:shadow-accent/20 cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
                  opacity: opacity,
                  filter: blurAmount > 0.1 ? `blur(${blurAmount}px)` : 'none',
                  backfaceVisibility: 'visible',
                }}
              >
                {/* Top Film Sprocket Holes */}
                <div className="flex items-center justify-between px-1.5 py-1 bg-black/60 rounded-md border border-white/5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`top-hole-${i}`}
                      className="w-2.5 sm:w-3.5 h-1.5 sm:h-2 rounded-[2px] bg-white/20 border border-white/10"
                    />
                  ))}
                </div>

                {/* Image Inside Frame */}
                <div className="relative my-1 flex-1 rounded-lg overflow-hidden bg-black border border-white/10 group-hover:border-accent transition-colors">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-105"
                  />
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Header Badges */}
                  <div className="absolute top-1.5 left-2 right-2 flex items-center justify-between text-[9.5px] font-mono tracking-wider font-semibold z-10">
                    <span className="px-1.5 py-0.5 rounded bg-black/80 text-accent-bright border border-accent/40 backdrop-blur-md">
                      {item.tag}
                    </span>
                    <span className="text-white/80 font-mono drop-shadow">{item.number}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="absolute bottom-1.5 left-2 right-2 space-y-0.5 text-left z-10">
                    <h3 className="text-[11px] sm:text-[13px] font-medium font-sans text-white tracking-tight leading-snug line-clamp-1 group-hover:text-accent-bright transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10.5px] text-white/70 font-mono tracking-normal line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Film Sprocket Holes */}
                <div className="flex items-center justify-between px-1.5 py-1 bg-black/60 rounded-md border border-white/5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`bot-hole-${i}`}
                      className="w-2.5 sm:w-3.5 h-1.5 sm:h-2 rounded-[2px] bg-white/20 border border-white/10"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inspection Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-surface border border-line-solid rounded-[18px] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 select-text text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-line bg-bg flex items-center justify-center text-fg-muted hover:text-fg hover:border-fg transition-colors cursor-pointer"
              aria-label="Close Inspection"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative rounded-[12px] overflow-hidden border border-line aspect-video bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/80 text-accent-bright border border-accent/40 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-accent-bright" />
                <span>{selectedItem.tag}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-medium text-accent uppercase tracking-widest">
                <span>{selectedItem.subtitle}</span>
                <span className="text-fg-dim">{selectedItem.number}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-fg">
                {selectedItem.title}
              </h3>
              <p className="t-body text-fg-muted leading-relaxed">
                {selectedItem.description}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-full bg-fg text-bg text-[13px] font-medium transition-opacity hover:opacity-90 cursor-pointer"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
