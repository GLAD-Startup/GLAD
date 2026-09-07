import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { m as Smile, T as Trash2 } from "../_libs/lucide-react.mjs";
const STICKER_TYPES = [
  // 0: Yellow Smiley
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border-3 border-black bg-brand-2 flex items-center justify-center shadow-[3px_3px_0px_#000] select-none pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#000",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        className: "w-10 h-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9", cy: "9", r: "1.5", fill: "#000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "15", cy: "9", r: "1.5", fill: "#000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6,14 Q12,20 18,14" })
        ]
      }
    ) })
  },
  // 1: Pink Smiley
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border-3 border-black bg-brand-pink flex items-center justify-center shadow-[3px_3px_0px_#000] select-none pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#000",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        className: "w-10 h-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9", cy: "9", r: "1.5", fill: "#000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "15", cy: "9", r: "1.5", fill: "#000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6,14 Q12,17 18,14" })
        ]
      }
    ) })
  },
  // 2: 100% Human Stamp
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-3 border-black bg-brand rounded-xl shadow-[4px_4px_0px_#000] text-black font-display font-black text-xs tracking-wider uppercase select-none pointer-events-none text-center transform -skew-x-6", children: "100% Human" })
  },
  // 3: Ship it! Badge
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-3 border-black bg-brand-blue rounded-xl shadow-[4px_4px_0px_#000] text-black font-display font-black text-xs tracking-wider uppercase select-none pointer-events-none text-center", children: "🚀 Ship it!" })
  },
  // 4: GLAD Badge
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-3 border-black bg-brand-purple text-white rounded-xl shadow-[4px_4px_0px_#000] font-display font-black text-sm tracking-widest select-none pointer-events-none text-center", children: "GLAD⚡" })
  },
  // 5: WOW Bubble
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-3 border-black bg-white text-black rounded-2xl shadow-[4px_4px_0px_#000] font-display font-bold text-xs select-none pointer-events-none text-center relative", children: [
      "WOW!",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-10px] left-1/4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-black" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-6px] left-1/4 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white" })
    ] })
  },
  // 6: Sparkle
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 select-none pointer-events-none drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 100", fill: "var(--brand-pink)", className: "w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 50,0 C 50,35 65,50 100,50 C 65,50 50,65 50,100 C 50,65 35,50 0,50 C 35,50 50,35 50,0 Z" }) }) })
  },
  // 7: Custom Code Star
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 select-none pointer-events-none drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 100", fill: "var(--brand-blue)", className: "w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 50,0 C 50,35 65,50 100,50 C 65,50 50,65 50,100 C 50,65 35,50 0,50 C 35,50 50,35 50,0 Z" }) }) })
  },
  // 8: Bespoke Stamp
  {
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3.5 py-1.5 border-3 border-black bg-brand-2 rounded-full shadow-[3px_3px_0px_#000] text-black font-display font-extrabold text-[11px] uppercase tracking-wider select-none pointer-events-none text-center", children: "🎨 Bespoke" })
  }
];
function StickerBoard() {
  const [stickers, setStickers] = reactExports.useState([]);
  const [isActive, setIsActive] = reactExports.useState(false);
  const [hintVisible, setHintVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const saved = sessionStorage.getItem("glad_stickers");
    if (saved) {
      try {
        setStickers(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);
  const saveStickers = (newStickers) => {
    setStickers(newStickers);
    sessionStorage.setItem("glad_stickers", JSON.stringify(newStickers));
  };
  reactExports.useEffect(() => {
    if (!isActive) return;
    const handleClick = (e) => {
      const target = e.target;
      if (target.closest(
        "a, button, input, select, textarea, [role='button'], iframe, .interactive-card, header, footer"
      )) {
        return;
      }
      const x = e.pageX;
      const y = e.pageY;
      const type = Math.floor(Math.random() * STICKER_TYPES.length);
      const rotation = Math.random() * 60 - 30;
      const scale = Math.random() * 0.2 + 0.9;
      const newSticker = {
        id: `sticker-${Date.now()}-${Math.random()}`,
        x,
        y,
        type,
        rotation,
        scale
      };
      saveStickers([...stickers, newSticker]);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isActive, stickers]);
  const toggleActive = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setHintVisible(true);
      setTimeout(() => setHintVisible(false), 3500);
    }
  };
  const clearBoard = () => {
    saveStickers([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-40 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hintVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 10 },
          className: "bg-black text-white dark:bg-white dark:text-black border-3 border-black dark:border-white px-3.5 py-1.5 rounded-xl font-display text-[11px] font-bold shadow-[3px_3px_0px_rgba(0,0,0,0.15)] pointer-events-none",
          children: "🎉 Click anywhere on the page to drop stickers!"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          onClick: toggleActive,
          className: `flex items-center gap-2 px-4 py-2.5 rounded-full border-3 border-black font-display font-black text-xs shadow-[3px_3px_0px_#000] cursor-pointer transition-colors ${isActive ? "bg-brand-pink text-white hover:bg-brand-pink/90" : "bg-brand-2 text-black hover:bg-brand-2/90"}`,
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { className: `size-4 ${isActive ? "animate-spin" : ""}` }),
            isActive ? "Sticker Mode: ON" : "Drop Stickers"
          ]
        }
      ),
      stickers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          initial: { scale: 0 },
          animate: { scale: 1 },
          exit: { scale: 0 },
          onClick: clearBoard,
          className: "p-2.5 rounded-full border-3 border-black bg-surface text-foreground hover:bg-destructive hover:text-white shadow-[3px_3px_0px_#000] cursor-pointer",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          "aria-label": "Clear all stickers",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden z-30", children: stickers.map((sticker) => {
      const Render = STICKER_TYPES[sticker.type].render;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute pointer-events-auto cursor-grab active:cursor-grabbing",
          style: {
            left: sticker.x,
            top: sticker.y,
            x: "-50%",
            y: "-50%"
          },
          drag: true,
          dragMomentum: false,
          initial: { scale: 0, rotate: sticker.rotation - 20 },
          animate: { scale: sticker.scale, rotate: sticker.rotation },
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
          },
          whileHover: { scale: sticker.scale * 1.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Render, {})
        },
        sticker.id
      );
    }) })
  ] });
}
export {
  StickerBoard as S
};
