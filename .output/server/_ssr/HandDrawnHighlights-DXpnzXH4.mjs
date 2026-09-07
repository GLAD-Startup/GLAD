import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function HandDrawnCircle({
  children,
  color = "var(--brand-pink)",
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `relative inline-block px-2 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 100 40",
        fill: "none",
        preserveAspectRatio: "none",
        className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.path,
          {
            d: "M 5,20 C 5,5 95,5 95,20 C 95,35 5,35 7,22 C 8,15 45,8 88,14",
            stroke: color,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { pathLength: 0 },
            whileInView: { pathLength: 1 },
            viewport: { once: true, margin: "-10%" },
            transition: { duration: 0.8, ease: "easeOut" }
          }
        )
      }
    )
  ] });
}
function HandDrawnUnderline({
  children,
  color = "var(--brand-blue)",
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `relative inline-block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 100 10",
        fill: "none",
        preserveAspectRatio: "none",
        className: "absolute left-0 bottom-[-4px] w-full h-[8px] pointer-events-none overflow-visible z-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.path,
          {
            d: "M 2,4 C 20,7 45,2 70,5 C 85,6 98,3 98,4 C 95,5 75,6 40,8 C 25,9 5,7 4,8",
            stroke: color,
            strokeWidth: "3",
            strokeLinecap: "round",
            initial: { pathLength: 0 },
            whileInView: { pathLength: 1 },
            viewport: { once: true },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
          }
        )
      }
    )
  ] });
}
function HandDrawnDoubleStrike({
  children,
  color = "var(--brand-purple)",
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `relative inline-block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 100 12",
        fill: "none",
        preserveAspectRatio: "none",
        className: "absolute left-0 bottom-[-6px] w-full h-[10px] pointer-events-none overflow-visible z-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: "M 3,3 C 30,1 60,4 97,2",
              stroke: color,
              strokeWidth: "2",
              strokeLinecap: "round",
              initial: { pathLength: 0 },
              whileInView: { pathLength: 1 },
              viewport: { once: true },
              transition: { duration: 0.5, ease: "easeOut" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: "M 8,8 C 38,6 68,9 94,7",
              stroke: color,
              strokeWidth: "2.5",
              strokeLinecap: "round",
              initial: { pathLength: 0 },
              whileInView: { pathLength: 1 },
              viewport: { once: true },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.15 }
            }
          )
        ]
      }
    )
  ] });
}
export {
  HandDrawnUnderline as H,
  HandDrawnCircle as a,
  HandDrawnDoubleStrike as b
};
