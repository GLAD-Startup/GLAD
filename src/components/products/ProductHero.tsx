import { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Phone,
  CalendarCheck,
  Receipt,
  Bed,
  Sparkles,
} from "lucide-react";
import type { ProductHeroConfig } from "@/types/product-page";
import buildingImg from "@/routes/images/settledesk/building.png";
import logoImg from "@/routes/images/settledesk/logo.png";
import hotelBgImg from "@/routes/images/glad-hms/hotel-building-transparent.png";

export function ProductHero({
  config,
  product = "settledesk",
  onPrimaryCtaClick,
}: {
  config: ProductHeroConfig;
  product?: "settledesk" | "glad-hms";
  onPrimaryCtaClick?: () => void;
}) {
  const isHms = product === "glad-hms" || config.eyebrow.toLowerCase().includes("hospitality");
  const [activeStage, setActiveStage] = useState<string>(isHms ? "frontdesk" : "admin");

  const calConfig = JSON.stringify({
    layout: "month_view",
    theme: "light",
  });

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-hidden bg-background">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Top Product Identification Pill */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1 text-xs font-medium text-foreground backdrop-blur-md">
            {isHms ? (
              <span className="flex items-center gap-1.5 font-bold text-[#e5b84c]">
                <Bed className="size-3.5" />
                GLAD HMS
              </span>
            ) : (
              <img src={logoImg} alt="SettleDesk logo mark" className="h-4 w-auto object-contain" />
            )}
            <span className="text-muted-foreground">|</span>
            <span className="font-semibold">{config.eyebrow}</span>
          </div>
        </div>

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Thesis Copy */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight font-display leading-[1.1] text-foreground">
              {isHms ? (
                <>
                  Run Hotel Operations on{" "}
                  <span className="text-[var(--color-ink)]">One Modular System.</span>
                </>
              ) : (
                <>
                  Run your properties, agents, and commission payouts on{" "}
                  <span className="text-[var(--color-ink)]">one live system.</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {isHms
                ? "GLAD HMS unifies hotel room reservations, front desk operations, mobile housekeeping task boards, stay folios with Indian GST compliance, and USALI revenue analytics with zero forced bundles."
                : "SettleDesk connects your field agents, office managers, and financial ledgers in real time. When an agent submits a contract on mobile, your dashboard updates inventory, calculates splits, and queues bank payouts automatically."}
            </p>

            {/* Direct Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onPrimaryCtaClick}
                className="btn-primary w-full sm:w-auto justify-center"
              >
                <span>{config.primaryCtaText || (isHms ? "Talk About Your Hotel" : "Start 30-day free trial")}</span>
                <ArrowRight className="size-4 shrink-0" />
              </button>
              <button
                type="button"
                data-cal-link="arjun-rajput-2mdsis"
                data-cal-config={calConfig}
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                <Phone className="size-4 shrink-0" />
                <span>{config.secondaryCtaText || "Book a Discovery Call"}</span>
              </button>
            </div>

            {/* Quick Proof Metrics */}
            <div className="pt-6 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {config.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-base sm:text-lg md:text-xl font-bold text-foreground truncate">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground font-medium leading-tight mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Product Thesis Stage */}
          <div className="lg:col-span-6">
            <div className="surface p-3.5 sm:p-5 md:p-6 rounded-2xl relative shadow-xl overflow-hidden border-2 border-border">
              {/* Stage Role Selector Header */}
              <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-border pb-3 sm:pb-4 mb-3 sm:mb-4 gap-2.5 sm:gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0">
                  {isHms ? "Live Operations Cascade" : "Live System Cascade"}
                </div>
                <div className="grid grid-cols-3 sm:flex items-center gap-1 bg-surface p-1 rounded-lg border border-border w-full sm:w-auto">
                  {isHms ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveStage("frontdesk")}
                        className={`px-1.5 sm:px-2.5 py-1.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all text-center leading-tight sm:leading-normal flex items-center justify-center ${
                          activeStage === "frontdesk"
                            ? "bg-[#e5b84c]/20 text-[#e5b84c] shadow-sm font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        1. Front Desk
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStage("housekeeping")}
                        className={`px-1.5 sm:px-2.5 py-1.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all text-center leading-tight sm:leading-normal flex items-center justify-center ${
                          activeStage === "housekeeping"
                            ? "bg-card text-foreground shadow-sm font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        2. Housekeeping
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStage("finance")}
                        className={`px-1.5 sm:px-2.5 py-1.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all text-center leading-tight sm:leading-normal flex items-center justify-center ${
                          activeStage === "finance"
                            ? "bg-card text-foreground shadow-sm font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        3. Folios & USALI
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveStage("agent")}
                        className={`px-1.5 sm:px-2.5 py-1.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all text-center leading-tight sm:leading-normal flex items-center justify-center ${
                          activeStage === "agent"
                            ? "bg-card text-foreground shadow-sm font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        1. Field Agent
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStage("admin")}
                        className={`px-1.5 sm:px-2.5 py-1.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all text-center leading-tight sm:leading-normal flex items-center justify-center ${
                          activeStage === "admin"
                            ? "bg-[#e5b84c]/20 text-[#e5b84c] shadow-sm font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        2. Admin Review
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStage("super")}
                        className={`px-1.5 sm:px-2.5 py-1.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all text-center leading-tight sm:leading-normal flex items-center justify-center ${
                          activeStage === "super"
                            ? "bg-card text-foreground shadow-sm font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        3. Ledger
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Live Stage Display Container */}
              <div className="relative min-h-[260px] md:min-h-0 md:aspect-[16/10] rounded-xl border border-border bg-background/80 overflow-hidden p-3.5 sm:p-4 md:p-6 flex flex-col justify-between">
                {isHms ? (
                  <>
                    {activeStage === "frontdesk" && (
                      <div className="space-y-3.5 sm:space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border pb-2 gap-2">
                          <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-foreground truncate">
                            <CalendarCheck className="size-3.5 sm:size-4 text-[#e5b84c] shrink-0" />
                            <span className="truncate">Front Desk & Walk-In Reservation</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono bg-emerald-500/10 text-emerald-500 px-1.5 sm:px-2 py-0.5 rounded-full font-bold shrink-0">
                            ROW-LOCK ACTIVE
                          </span>
                        </div>
                        <div className="p-3 sm:p-3.5 rounded-lg border border-border bg-card space-y-1.5 sm:space-y-2">
                          <div className="text-xs font-bold text-foreground">
                            Deluxe Suite #301 — Rapid Check-In
                          </div>
                          <div className="text-[11px] sm:text-xs text-muted-foreground">
                            Guest: Arjun S. • 3 Nights • Rate Plan: Season Best Available
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-500 font-semibold pt-0.5">
                            <CheckCircle2 className="size-3.5 shrink-0" />
                            <span>ID verified • Key card issued • Folio #F-4029 initialized</span>
                          </div>
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-muted-foreground flex items-center gap-1">
                          <span>Next: Room status transitioned to 'Occupied' instantly</span>
                          <ChevronRight className="size-3 shrink-0" />
                        </div>
                      </div>
                    )}

                    {activeStage === "housekeeping" && (
                      <div className="space-y-3.5 sm:space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border pb-2 gap-2">
                          <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#e5b84c] truncate">
                            <Smartphone className="size-3.5 sm:size-4 text-emerald-400 shrink-0" />
                            <span className="truncate">Mobile Housekeeping Task Board</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono bg-[#e5b84c]/20 text-[#e5b84c] px-1.5 sm:px-2 py-0.5 rounded-full font-bold shrink-0">
                            PRIORITY SORTED
                          </span>
                        </div>
                        <div className="p-3 sm:p-3.5 rounded-lg border border-[#e5b84c]/40 bg-[#e5b84c]/5 space-y-1.5 sm:space-y-2">
                          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-[11px] sm:text-xs">
                            <span className="font-bold text-foreground">
                              Room #204 Turnover (Same-Day)
                            </span>
                            <span className="font-mono text-[9px] sm:text-[10px] bg-amber-500/10 text-amber-400 px-1.5 sm:px-2 py-0.5 rounded self-start xs:self-auto font-semibold">
                              URGENT: 2:00 PM
                            </span>
                          </div>
                          <div className="text-[11px] sm:text-xs text-muted-foreground">
                            Status State Machine: Dirty → <strong className="text-foreground">Cleaning in Progress</strong> → Inspected
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveStage("finance")}
                            className="w-full mt-2 py-2 rounded-lg bg-[#e5b84c] text-black font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                          >
                            Mark Inspected & Release to Front Desk
                          </button>
                        </div>
                      </div>
                    )}

                    {activeStage === "finance" && (
                      <div className="space-y-3.5 sm:space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border pb-2 gap-2">
                          <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-foreground truncate">
                            <Receipt className="size-3.5 sm:size-4 text-violet-400 shrink-0" />
                            <span className="truncate">Stay Folio & USALI Analytics</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono bg-violet-500/10 text-violet-400 px-1.5 sm:px-2 py-0.5 rounded-full font-bold shrink-0">
                            GST COMPLIANT
                          </span>
                        </div>
                        <div className="p-3 sm:p-3.5 rounded-lg border border-border bg-card space-y-1.5 sm:space-y-2">
                          <div className="text-[11px] sm:text-xs font-bold text-foreground flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                            <span>Folio #F-4029 Check-Out Settlement</span>
                            <span className="font-mono text-[#e5b84c]">₹14,560.00 Total</span>
                          </div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground font-mono leading-relaxed">
                            Room Stay: ₹12,000 (12% GST: ₹1,440) • Dining: ₹1,000 (12% GST: ₹120)
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-emerald-500 flex items-center gap-1">
                            <CheckCircle2 className="size-3 shrink-0" />
                            <span>Payment Captured (Card / UPI) • USALI ADR & RevPAR Updated</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Hotel illustration subtle background watermark */}
                    <img
                      src={hotelBgImg}
                      alt="GLAD HMS Hotel Management System Architecture"
                      className="absolute right-1 sm:right-2 bottom-0 h-24 sm:h-32 w-auto object-contain opacity-15 sm:opacity-25 pointer-events-none"
                      width={200}
                      height={150}
                    />
                  </>
                ) : (
                  <>
                    {activeStage === "agent" && (
                      <div className="space-y-3.5 sm:space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border pb-2 gap-2">
                          <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-foreground truncate">
                            <Smartphone className="size-3.5 sm:size-4 text-emerald-500 shrink-0" />
                            <span className="truncate">Broker Mobile App — Field Submission</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono bg-emerald-500/10 text-emerald-500 px-1.5 sm:px-2 py-0.5 rounded-full font-bold shrink-0">
                            LIVE SYNC
                          </span>
                        </div>
                        <div className="p-3 sm:p-3.5 rounded-lg border border-border bg-card space-y-1.5 sm:space-y-2">
                          <div className="text-xs font-bold">
                            Luxury Penthouse #402 — Deal Finalized
                          </div>
                          <div className="text-[11px] sm:text-xs text-muted-foreground">
                            Sale Price: $1,450,000 • Client: Robert Chen
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-500 font-semibold pt-0.5">
                            <CheckCircle2 className="size-3.5 shrink-0" />
                            <span>Contract PDF uploaded & signed in field</span>
                          </div>
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-muted-foreground flex items-center gap-1">
                          <span>Next step: Sent instantly to admin approval queue</span>
                          <ChevronRight className="size-3 shrink-0" />
                        </div>
                      </div>
                    )}

                    {activeStage === "admin" && (
                      <div className="space-y-3.5 sm:space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border pb-2 gap-2">
                          <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#e5b84c] truncate">
                            <Building2 className="size-3.5 sm:size-4 shrink-0" />
                            <span className="truncate">Client Admin Dashboard — Approval</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono bg-[#e5b84c]/20 text-[#e5b84c] px-1.5 sm:px-2 py-0.5 rounded-full font-bold shrink-0">
                            ACTION REQUIRED
                          </span>
                        </div>

                        <div className="p-3 sm:p-3.5 rounded-lg border border-[#e5b84c]/40 bg-[#e5b84c]/5 space-y-1.5 sm:space-y-2">
                          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-[11px] sm:text-xs">
                            <span className="font-bold text-foreground">
                              Penthouse #402 Deal Review
                            </span>
                            <span className="font-mono font-bold text-[#e5b84c]">$43,500 GCI</span>
                          </div>
                          <div className="text-[11px] sm:text-xs text-muted-foreground">
                            Agent Split (80%): <strong className="text-foreground">$34,800</strong> •
                            Office Retained: <strong className="text-foreground">$8,700</strong>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveStage("super")}
                            className="w-full mt-2 py-2 rounded-lg bg-[#e5b84c] text-black font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                          >
                            Approve Deal & Queue Payout
                          </button>
                        </div>
                      </div>
                    )}

                    {activeStage === "super" && (
                      <div className="space-y-3.5 sm:space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border pb-2 gap-2">
                          <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-foreground truncate">
                            <ShieldCheck className="size-3.5 sm:size-4 text-violet-500 shrink-0" />
                            <span className="truncate">Financial Ledger & Disbursement</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono bg-violet-500/10 text-violet-500 px-1.5 sm:px-2 py-0.5 rounded-full font-bold shrink-0">
                            CLEARED
                          </span>
                        </div>

                        <div className="p-3 sm:p-3.5 rounded-lg border border-border bg-card space-y-1.5 sm:space-y-2">
                          <div className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                            <CheckCircle2 className="size-3.5 shrink-0" />
                            <span>Deal Approved • Unit Status Updated to "Sold"</span>
                          </div>
                          <div className="text-[11px] sm:text-xs text-muted-foreground font-mono">
                            Bank Transfer Queued: $34,800.00 → Agent Account (*4892)
                          </div>
                          <div className="text-[10px] text-muted-foreground">
                            Immutable Audit Hash: <span className="font-mono">0x8f2d...c41e</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Building illustration subtle background watermark */}
                    <img
                      src={buildingImg}
                      alt="SettleDesk Real Estate Brokerage Tower Architectural Illustration"
                      className="absolute right-1 sm:right-2 bottom-0 h-24 sm:h-32 w-auto object-contain opacity-15 sm:opacity-20 pointer-events-none"
                      width={200}
                      height={150}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

