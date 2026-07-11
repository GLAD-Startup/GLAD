import { motion, useScroll, useTransform } from "framer-motion";
import rocketVideo from "@/routes/videos/Rocket.mp4";

export function RocketMan() {
  const { scrollYProgress } = useScroll();
  
  // Weave across the screen horizontally 3 times
  const x = useTransform(scrollYProgress, 
    [0, 0.3, 0.31, 0.6, 0.61, 1], 
    ["-20vw", "120vw", "120vw", "-20vw", "-20vw", "120vw"]
  );

  // Flip the rocket horizontally when it flies left
  const scaleX = useTransform(scrollYProgress,
    [0, 0.3, 0.31, 0.6, 0.61, 1],
    [1, 1, -1, -1, 1, 1]
  );
  
  // Bounce vertically between top and bottom of viewport
  const y = useTransform(scrollYProgress, 
    [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1], 
    ["10vh", "80vh", "30vh", "75vh", "20vh", "85vh", "15vh"]
  );
  
  // Adjust rotation based on whether it's flying up or down
  const rotate = useTransform(scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
    [30, -20, 25, -25, 30, -30, 20]
  );

  return (
    <>
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="remove-white" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            -3 -3 -3 0 8.8
          " />
        </filter>
      </svg>
      <motion.div
        className="fixed z-50 pointer-events-none flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ x, y, rotate, scaleX }}
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56">
          <video 
            src={rocketVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-contain pointer-events-none"
            style={{ 
              filter: "url(#remove-white)", 
              WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 70%)",
              maskImage: "radial-gradient(ellipse at center, black 55%, transparent 70%)"
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
