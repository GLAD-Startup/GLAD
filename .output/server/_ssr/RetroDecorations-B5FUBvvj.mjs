import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function RetroStar({
  className = "",
  color = "var(--brand-pink)",
  size = 48,
  rotation = 12
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `absolute pointer-events-auto cursor-pointer ${className}`,
      style: { width: size, height: size, rotate: rotation },
      whileHover: { scale: 1.2, rotate: rotation + 45 },
      transition: { type: "spring", stiffness: 300, damping: 15 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          viewBox: "0 0 100 100",
          fill: color,
          className: "w-full h-full drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:drop-shadow-[2px_2px_0px_var(--color-foreground)]",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 50,0 C 50,35 65,50 100,50 C 65,50 50,65 50,100 C 50,65 35,50 0,50 C 35,50 50,35 50,0 Z" })
        }
      )
    }
  );
}
function SparkleDeco({ className = "", color = "var(--brand-blue)", size = 32 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `absolute pointer-events-none ${className}`,
      style: { width: size, height: size },
      animate: {
        scale: [1, 1.2, 1],
        rotate: [0, 90, 180, 270, 360],
        opacity: [0.7, 1, 0.7]
      },
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: color, className: "w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12,2 L14.7,9.3 L22,12 L14.7,14.7 L12,22 L9.3,14.7 L2,12 L9.3,9.3 Z" }) })
    }
  );
}
function CurlyArrow({
  className = "",
  color = "var(--brand-purple)",
  size = 64,
  rotation = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `absolute pointer-events-auto cursor-pointer ${className}`,
      style: { width: size, height: size, rotate: rotation },
      whileHover: { scale: 1.15, rotate: rotation - 10 },
      transition: { type: "spring", stiffness: 300, damping: 12 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          viewBox: "0 0 100 100",
          fill: "none",
          stroke: color,
          strokeWidth: "6",
          strokeLinecap: "round",
          className: "w-full h-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 10,90 C 20,40 50,10 80,30 C 95,45 80,75 50,65 C 30,55 35,30 65,15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 50,12 L 68,15 L 63,33" })
          ]
        }
      )
    }
  );
}
function CuteSpeechBubble({
  className = "",
  text = "Ship it!",
  color = "var(--background)",
  size = 120,
  rotation = 5
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `absolute pointer-events-auto cursor-pointer select-none z-30 ${className}`,
      style: { width: size, rotate: rotation },
      whileHover: { scale: 1.1, rotate: rotation - 5 },
      transition: { type: "spring", stiffness: 300, damping: 15 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative border-3 border-black p-3 rounded-2xl shadow-[4px_4px_0px_#000] font-display text-xs font-bold text-center text-black",
          style: { backgroundColor: color },
          children: [
            text,
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-13px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute bottom-[-9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px]",
                style: { borderTopColor: color }
              }
            )
          ]
        }
      )
    }
  );
}
export {
  CurlyArrow as C,
  RetroStar as R,
  SparkleDeco as S,
  CuteSpeechBubble as a
};
