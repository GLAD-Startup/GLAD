import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function ProjectCard({ project: p, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/portfolio/$slug",
      params: { slug: p.slug },
      className: `group surface-card project-card-3d flex flex-col h-full project-card-custom ${className || ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-h-[240px] overflow-hidden rounded-t-[18px] project-card-image-wrap shine-on-hover", children: [
          p.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.thumbnail,
              alt: p.name,
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110",
              style: { background: p.gradient }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-80" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-5 project-card-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium project-card-category", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1.5 text-lg font-semibold tracking-tight project-card-title", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed project-card-description", children: p.short }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5 project-card-tech", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[11px] rounded-full border border-border px-2.5 py-0.5 text-muted-foreground project-card-badge",
              children: t
            },
            t
          )) })
        ] })
      ]
    }
  );
}
export {
  ProjectCard as P
};
