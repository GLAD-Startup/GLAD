import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-6 h-px bg-brand-gradient" }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]", children: title }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: sub })
  ] });
}
export {
  SectionHeading as S
};
