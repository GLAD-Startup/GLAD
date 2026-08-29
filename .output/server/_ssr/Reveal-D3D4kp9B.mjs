import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const directionMap = {
  up: { opacity: 0, y: 32 },
  down: { opacity: 0, y: -32 },
  left: { opacity: 0, x: 40 },
  right: { opacity: 0, x: -40 },
  scale: { opacity: 0, scale: 0.92 },
  blur: { opacity: 0, filter: "blur(12px)" }
};
function buildVariants(direction) {
  const hidden = directionMap[direction];
  const show = { opacity: 1 };
  if ("y" in hidden) show.y = 0;
  if ("x" in hidden) show.x = 0;
  if ("scale" in hidden) show.scale = 1;
  if ("filter" in hidden) show.filter = "blur(0px)";
  return {
    hidden,
    show: {
      ...show,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };
}
function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true
}) {
  const variants = buildVariants(direction);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once, margin: "-60px" },
      variants,
      transition: { delay },
      children
    }
  );
}
function RevealGroup({
  children,
  className,
  stagger = 0.08
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      variants: {
        hidden: {},
        show: {
          transition: { staggerChildren: stagger }
        }
      },
      children
    }
  );
}
function RevealItem({
  children,
  className,
  direction = "up"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className, variants: buildVariants(direction), children });
}
export {
  Reveal as R,
  RevealGroup as a,
  RevealItem as b
};
