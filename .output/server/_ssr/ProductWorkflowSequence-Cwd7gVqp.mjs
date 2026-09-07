import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useTheme, b as buildingImg } from "./router-CJ551Cx9.mjs";
import { S as SectionHeading } from "./SectionHeading-D_TkcIwC.mjs";
import { _ as Bed, c as ArrowRight, a as Phone, $ as CalendarCheck, n as CircleCheck, j as ChevronRight, g as Smartphone, a0 as Receipt, b as Building2, S as ShieldCheck, a1 as TrendingUp, e as Check, v as Lock, U as UserCheck, a2 as RefreshCw, l as ChevronDown } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const logoImg = "/assets/logo-3K-a7pwb.png";
const hotelBgImg = "/assets/hotel-building-transparent-_0q7hCej.png";
function ProductHero({
  config,
  product = "settledesk",
  onPrimaryCtaClick
}) {
  const isHms = product === "glad-hms" || config.eyebrow.toLowerCase().includes("hospitality");
  const [activeStage, setActiveStage] = reactExports.useState(isHms ? "frontdesk" : "admin");
  const { theme } = useTheme();
  const calConfig = JSON.stringify({
    layout: "month_view",
    theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-25 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1 text-xs font-medium text-foreground backdrop-blur-md", children: [
        isHms ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-bold text-[#e5b84c]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "size-3.5" }),
          "GLAD HMS"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "SettleDesk logo mark", className: "h-4 w-auto object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: config.eyebrow })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight font-display leading-[1.08] text-foreground", children: isHms ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Run Hotel Operations on",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "One Modular System." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Run your properties, agents, and commission payouts on",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "one live system." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl", children: isHms ? "GLAD HMS unifies hotel room reservations, front desk operations, mobile housekeeping task boards, stay folios with Indian GST compliance, and USALI revenue analytics with zero forced bundles." : "SettleDesk connects your field agents, office managers, and financial ledgers in real time. When an agent submits a contract on mobile, your dashboard updates inventory, calculates splits, and queues bank payouts automatically." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: onPrimaryCtaClick, className: "btn-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: config.primaryCtaText || (isHms ? "Talk About Your Hotel" : "Start 30-day free trial") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-cal-link": "arjun-rajput-2mdsis",
                "data-cal-config": calConfig,
                className: "btn-secondary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: config.secondaryCtaText || "Book a Discovery Call" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4", children: config.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-lg font-bold text-foreground", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground font-medium", children: s.label })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-4 md:p-6 rounded-2xl relative shadow-xl overflow-hidden border-2 border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border pb-4 mb-4 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: isHms ? "Live Operations Cascade" : "Live System Cascade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 bg-surface p-1 rounded-lg border border-border", children: isHms ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveStage("frontdesk"),
                  className: `px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeStage === "frontdesk" ? "bg-[#e5b84c]/20 text-[#e5b84c] shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`,
                  children: "1. Front Desk"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveStage("housekeeping"),
                  className: `px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeStage === "housekeeping" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`,
                  children: "2. Housekeeping"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveStage("finance"),
                  className: `px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeStage === "finance" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`,
                  children: "3. Folios & USALI"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveStage("agent"),
                  className: `px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeStage === "agent" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`,
                  children: "1. Field Agent"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveStage("admin"),
                  className: `px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeStage === "admin" ? "bg-[#e5b84c]/20 text-[#e5b84c] shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`,
                  children: "2. Brokerage Admin"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveStage("super"),
                  className: `px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeStage === "super" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`,
                  children: "3. Ledger"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/10] rounded-xl border border-border bg-background/80 overflow-hidden p-4 md:p-6 flex flex-col justify-between", children: isHms ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            activeStage === "frontdesk" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "size-4 text-[#e5b84c]" }),
                  "Front Desk & Walk-In Reservation Console"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold", children: "ROW-LOCK ACTIVE" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-border bg-card space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: "Deluxe Suite #301 — Rapid Check-In" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Guest: Arjun S. • 3 Nights • Rate Plan: Season Best Available" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-[11px] text-emerald-500 font-semibold pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5" }),
                  "ID verified • Key card issued • Folio #F-4029 initialized"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Next: Room status transitioned to 'Occupied' instantly" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3" })
              ] })
            ] }),
            activeStage === "housekeeping" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-[#e5b84c]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-4 text-emerald-400" }),
                  "Mobile Housekeeping Task Board"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-[#e5b84c]/20 text-[#e5b84c] px-2 py-0.5 rounded-full font-bold", children: "PRIORITY SORTED" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-[#e5b84c]/40 bg-[#e5b84c]/5 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Room #204 Turnover (Same-Day Arrival)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded", children: "URGENT: 2:00 PM" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  "Status State Machine: Dirty → ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Cleaning in Progress" }),
                  " → Inspected"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveStage("finance"),
                    className: "w-full mt-2 py-2 rounded-lg bg-[#e5b84c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity",
                    children: "Mark Inspected & Release to Front Desk"
                  }
                )
              ] })
            ] }),
            activeStage === "finance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "size-4 text-violet-400" }),
                  "Stay Folio & USALI Revenue Analytics"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded-full font-bold", children: "GST COMPLIANT" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-border bg-card space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-foreground flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Folio #F-4029 Check-Out Settlement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[#e5b84c]", children: "₹14,560.00 Total" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono", children: "Room Stay: ₹12,000 (12% GST: ₹1,440) • Dining: ₹1,000 (12% GST: ₹120)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-emerald-500 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment Captured (Card / UPI) • USALI ADR & RevPAR Updated" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: hotelBgImg,
                alt: "GLAD HMS Hotel Management System Architecture",
                className: "absolute right-2 bottom-0 h-32 w-auto object-contain opacity-25 pointer-events-none",
                width: 200,
                height: 150
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            activeStage === "agent" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-4 text-emerald-500" }),
                  "Broker Mobile App — Field Submission"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold", children: "LIVE SYNC" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-border bg-card space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold", children: "Luxury Penthouse #402 — Deal Finalized" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Sale Price: $1,450,000 • Client: Robert Chen" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-[11px] text-emerald-500 font-semibold pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5" }),
                  "Contract PDF uploaded & signed in field"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Next step: Sent instantly to admin approval queue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3" })
              ] })
            ] }),
            activeStage === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-[#e5b84c]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "size-4" }),
                  "Client Admin Dashboard — Deal Approval"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-[#e5b84c]/20 text-[#e5b84c] px-2 py-0.5 rounded-full font-bold", children: "ACTION REQUIRED" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-[#e5b84c]/40 bg-[#e5b84c]/5 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Penthouse #402 Deal Review" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-[#e5b84c]", children: "$43,500 GCI" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  "Agent Split (80%): ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "$34,800" }),
                  " • Office Retained: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "$8,700" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveStage("super"),
                    className: "w-full mt-2 py-2 rounded-lg bg-[#e5b84c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity",
                    children: "Approve Deal & Queue Payout"
                  }
                )
              ] })
            ] }),
            activeStage === "super" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-violet-500" }),
                  "Financial Ledger & Bank Disbursement"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-violet-500/10 text-violet-500 px-2 py-0.5 rounded-full font-bold", children: "CLEARED" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-border bg-card space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-emerald-500 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }),
                  'Deal Approved • Unit Status Updated to "Sold"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono", children: "Bank Transfer Queued: $34,800.00 → Agent Account (*4892)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                  "Immutable Audit Hash: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "0x8f2d...c41e" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: buildingImg,
                alt: "SettleDesk Real Estate Brokerage Tower Architectural Illustration",
                className: "absolute right-2 bottom-0 h-32 w-auto object-contain opacity-20 pointer-events-none",
                width: 200,
                height: 150
              }
            )
          ] }) })
        ] }) })
      ] })
    ] })
  ] });
}
const properties3dImg = "/assets/properties-3d-j-KAGaJN.png";
const commission3d = "/assets/commission-3d-ZUpOZV7W.png";
const phone3dImg = "/assets/phone-3d-CKioiVNo.png";
const settledeskIcons = [ShieldCheck, Building2, Smartphone];
const settledeskImages = [properties3dImg, commission3d, phone3dImg];
const settledeskAlts = [
  "SettleDesk Super Admin 3D Property Catalog Render",
  "SettleDesk Client Admin Commission Split Matrix 3D Render",
  "SettleDesk Mobile App 3D Smartphone Interface Render"
];
const hmsIcons = [CalendarCheck, Smartphone, TrendingUp];
function ProductThreeTier({
  tiers,
  eyebrow = "One Platform, Three Experiences",
  title = "Everyone Gets the Right Tools for Their Job",
  sub = "Tailored portals engineered for platform operators, brokerage owners, and field agents.",
  product = "settledesk"
}) {
  const isHms = product === "glad-hms";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "architecture", className: "py-24 relative border-t border-border scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow,
        title,
        sub,
        center: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: tiers.map((tier, idx) => {
      const Icon = isHms ? hmsIcons[idx % hmsIcons.length] : settledeskIcons[idx % settledeskIcons.length];
      const img = settledeskImages[idx % settledeskImages.length];
      const alt = settledeskAlts[idx % settledeskAlts.length];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "surface-card p-8 interactive-card flex flex-col justify-between group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: tier.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-bold font-display", children: tier.title })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 text-[#e5b84c]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) })
              ] }),
              isHms ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 aspect-[16/10] rounded-xl border border-border bg-surface/40 flex flex-col justify-between p-4 overflow-hidden relative group-hover:border-[#e5b84c]/50 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] font-mono border-b border-border/60 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "MODULE PREVIEW" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5b84c] font-bold", children: idx === 0 ? "DESK CONSOLE" : idx === 1 ? "MOBILE TASK" : "USALI ANALYTICS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2 space-y-1.5", children: [
                  idx === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: "Room Grid & Walk-In Allocation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Pessimistic row-lock ensures zero double-booking" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block", children: "STATUS: LIVE OVERLAP CHECK" })
                  ] }),
                  idx === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: "Priority Turnover Queue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Urgent same-day arrival sorting with maintenance tags" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-[#e5b84c] bg-[#e5b84c]/10 px-2 py-0.5 rounded inline-block", children: "DISPATCH: ACTIVE ROSTER" })
                  ] }),
                  idx === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: "Multi-Folio Split & GST Ledger" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Occupancy %, Net ADR, and Net RevPAR reporting" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded inline-block", children: "LEDGER: NUMERIC(12,2)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground/80 flex items-center justify-between pt-1 border-t border-border/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Role Scoped" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: "RBAC Enforced" })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 aspect-[16/10] rounded-xl border border-border bg-background/50 flex items-center justify-center p-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img,
                  alt,
                  loading: "lazy",
                  decoding: "async",
                  className: "w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out",
                  width: 320,
                  height: 200
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: tier.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border space-y-2.5", children: tier.bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 shrink-0 text-[#e5b84c] mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: bullet })
            ] }, bullet)) })
          ]
        },
        tier.title
      );
    }) })
  ] }) });
}
const propVideo = "/assets/every%20property%20always%20up%20to%20date-Ddx5LFyG.mp4";
const commissionVideo = "/assets/Commission%20Plans_%20Built%20Your%20Way-D_Ns3U6f.mp4";
const approvalsVideo = "/assets/From%20Submitted%20to%20Sold_%20Automatically-DzR5P17_.mp4";
const syncVideo = "/assets/One%20Source%20of%20Truth.%20Every%20Device-Dd3_5J_D.mp4";
const luxuryVilla = "/assets/luxury-villa-D0fnCdM2.png";
const realEstateContract = "/assets/real-estate-contract-DMLba1LR.png";
const realEstateAppImg = "/assets/real-estate-app-sPOET7gf.png";
const brokerOfficeImg = "/assets/broker-office-DImFY2A3.png";
const featureVideos = [propVideo, commissionVideo, approvalsVideo, syncVideo];
const featureFallbacks = [luxuryVilla, realEstateContract, realEstateAppImg, brokerOfficeImg];
const featureAlts = [
  "SettleDesk Property Portfolio Real-time Listing Sync Demonstration",
  "SettleDesk Version-Controlled Commission Split Engine Interface",
  "SettleDesk One-Click Deal Approval and Payout Automation Workflow",
  "SettleDesk Multi-Device Sync Demonstration on Web and Mobile"
];
function ProductFeatureSplit({
  features,
  product = "settledesk"
}) {
  const isHms = product === "glad-hms";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "py-24 relative border-t border-border scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 space-y-24", children: features.map((item, index) => {
    const isEven = index % 2 === 1;
    const video = featureVideos[index % featureVideos.length];
    const fallbackImg = featureFallbacks[index % featureFallbacks.length];
    const altText = featureAlts[index % featureAlts.length];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `grid gap-12 lg:grid-cols-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: item.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-3xl md:text-4xl font-bold font-display leading-tight", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: item.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-3 rounded-2xl relative shadow-xl overflow-hidden group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 border-b border-border mb-3 bg-surface/50 rounded-t-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-2.5 rounded-full bg-red-500/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-2.5 rounded-full bg-yellow-500/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-2.5 rounded-full bg-green-500/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto text-[10px] font-mono text-muted-foreground bg-background px-3 py-0.5 rounded-full border border-border", children: item.routePath })
            ] }),
            isHms ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video rounded-xl border border-border bg-background/80 overflow-hidden p-5 flex flex-col justify-between", children: [
              index === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border/80 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-3.5 text-[#10b981]" }),
                    "PostgreSQL Concurrency Grid • Lock State: ACTIVE"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-[#10b981]/10 text-[#10b981] px-2 py-0.5 rounded font-bold", children: "ZERO OVERLAPS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2.5 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-surface/40 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "Suite #301" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Deluxe King" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded inline-block", children: "OCCUPIED" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/5 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "Room #302" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Exec Double" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded inline-block", children: "ROW LOCKED (ALLOCATING)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-surface/40 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "Room #303" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Standard Twin" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded inline-block", children: "AVAILABLE" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground/90 font-mono border-t border-border/40 pt-2 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Isolation: FOR UPDATE NOWAIT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: "100% Double-Booking Proof" })
                ] })
              ] }),
              index === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border/80 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "size-3.5 text-[#e5b84c]" }),
                    "Front Desk Check-In Console"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-[#e5b84c]/20 text-[#e5b84c] px-2 py-0.5 rounded font-bold", children: "FOLIO INITIALIZED" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-border bg-surface/40 space-y-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Guest: Dr. Priya Sharma" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-muted-foreground", children: "Booking #BK-7842" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[11px]", children: "Stay: 19 Aug 2026 – 22 Aug 2026 (3 Nights) • Room 405 (Deluxe Garden)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1 text-[11px] text-emerald-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Govt ID Verified (Passport) • Digital Key Dispatched" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground/90 flex items-center justify-between border-t border-border/40 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Billing: Direct Billing / Corporate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5b84c] font-mono font-bold", children: "₹0.00 Balance Pending" })
                ] })
              ] }),
              index === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border/80 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-3.5 text-emerald-400" }),
                    "Mobile Housekeeping Task Board"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold", children: "PRIORITY QUEUE" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-lg border border-red-500/30 bg-red-500/5 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Room 204 — Same Day Arrival" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Assigned: Sunita K. • Urgent (Arrival 2:00 PM)" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded", children: "CLEANING" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Room 301 — Turnover Complete" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Inspected by Supervisor • Clean & Sanitized" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded", children: "INSPECTED (READY)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground/90 flex items-center justify-between border-t border-border/40 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Front desk updated instantly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: "0s Sync Latency" })
                ] })
              ] }),
              index === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border/80 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5 text-violet-400" }),
                    "Multi-Folio Accounting & GST Ledger"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded font-bold", children: "NUMERIC(12,2)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-surface/40 space-y-1.5 text-xs font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Master Folio (Room Tariff):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "₹7,200.00 (12% GST: ₹864.00)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Incidentals (Dining / Spa):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "₹1,450.00 (18% GST: ₹261.00)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border my-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Invoice Amount:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5b84c]", children: "₹9,775.00" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground/90 flex items-center justify-between border-t border-border/40 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GSTIN: 07AABCU9603R1ZX" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: "Indian Tax Compliant" })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video rounded-xl border border-border bg-background/50 overflow-hidden flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  src: video,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  preload: "metadata",
                  className: "w-full h-full object-cover",
                  "aria-label": altText
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: fallbackImg,
                  alt: altText,
                  loading: "lazy",
                  decoding: "async",
                  className: "hidden w-full h-full object-cover"
                }
              )
            ] })
          ] }) })
        ]
      },
      item.title
    );
  }) }) });
}
function ProductPricingTable({
  plans,
  onSelectPlan
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "py-24 relative border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Pricing",
        title: "Simple Plans. Built to Scale With You.",
        sub: "Transparent pricing with zero hidden fees. 30-day free trial on all plans.",
        center: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3 items-stretch", children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `surface-card p-8 flex flex-col justify-between relative ${plan.featured ? "border-2 border-[#e5b84c] shadow-glow" : ""}`,
        children: [
          plan.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#e5b84c] text-black px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest shadow-md", children: "Most Popular" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold font-display", children: plan.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: plan.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 shrink-0 text-[#e5b84c] mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
            ] }, feature)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onSelectPlan?.(plan.name),
              className: `mt-8 w-full ${plan.featured ? "btn-primary" : "btn-secondary"}`,
              children: plan.ctaText
            }
          )
        ]
      },
      plan.name
    )) })
  ] }) });
}
function ProductFAQAccordion({
  faqs,
  title = "Everything You Need to Know About SettleDesk",
  eyebrow = "Frequently Asked Questions"
}) {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 relative border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow,
        title,
        center: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-4", children: faqs.map((faq, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "surface-card rounded-xl overflow-hidden transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenIndex(isOpen ? null : index),
                className: "w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm md:text-base hover:text-[#e5b84c] transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      className: `size-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#e5b84c]" : "text-muted-foreground"}`
                    }
                  )
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4", children: faq.answer })
          ]
        },
        faq.question
      );
    }) })
  ] }) });
}
const demoBgVideo = "/assets/Orange%20Simple%20People%20Bridge%20Logo%20(3)-BFzEhgdq.mp4";
function ProductCTA({
  title = "Ready to Modernize Your Brokerage?",
  sub = "See how SettleDesk brings your properties, agents, and commissions together — start your 30-day free trial now.",
  primaryCtaText = "Start 30-Day Free Trial",
  onPrimaryCtaClick
}) {
  const { theme } = useTheme();
  const calConfig = JSON.stringify({
    layout: "month_view",
    theme: theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "demo", className: "py-32 relative overflow-hidden isolate", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 z-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          preload: "auto",
          className: "w-full h-full object-cover translate-y-10 scale-110 opacity-90 dark:opacity-85 brightness-110 dark:brightness-125 min-h-full min-w-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: demoBgVideo, type: "video/mp4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/20 dark:bg-background/30 backdrop-blur-[1px] z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,var(--tw-gradient-stops))] from-transparent via-background/60 to-background z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-background via-background/80 to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-72 bg-gradient-to-l from-background via-background/80 to-transparent z-10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl font-bold font-display leading-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: sub }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onPrimaryCtaClick, className: "btn-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: primaryCtaText }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            "data-cal-link": "arjun-rajput-2mdsis",
            "data-cal-config": calConfig,
            className: "btn-secondary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book a Discovery Call" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function ProductWorkflowSequence({
  steps,
  eyebrow = "Operational Flow",
  title = "From Tenant Setup to Automated Payout",
  sub = "A 4-phase sequence designed to get your brokerage onboarded, configured, and closing deals in minutes."
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "workflow", className: "py-24 relative border-t border-border overflow-hidden scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow,
        title,
        sub,
        center: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative", children: steps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.2 },
        transition: { duration: 0.5, delay: idx * 0.12 },
        className: "surface-card p-6 rounded-2xl flex flex-col justify-between relative transition-transform duration-300 ease-out hover:scale-105 hover:z-20 cursor-pointer border border-emerald-500/30 shadow-lg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-border/60 pb-3.5 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm font-extrabold text-emerald-400 tracking-wider", children: [
                "0",
                idx + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 tracking-wider", children: step.metric })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-xs text-muted-foreground leading-relaxed", children: step.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t border-border/60 space-y-2.5", children: step.checklist.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-2 text-[11px] font-medium text-foreground/90",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-emerald-400 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
              ]
            },
            item
          )) }),
          idx < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 size-7 rounded-full bg-background border-2 border-emerald-500 items-center justify-center text-emerald-400 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" }) })
        ]
      },
      step.title
    )) })
  ] }) });
}
export {
  ProductHero as P,
  ProductThreeTier as a,
  ProductFeatureSplit as b,
  ProductWorkflowSequence as c,
  ProductPricingTable as d,
  ProductFAQAccordion as e,
  ProductCTA as f,
  commission3d as g,
  luxuryVilla as l,
  realEstateContract as r
};
