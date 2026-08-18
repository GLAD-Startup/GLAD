import { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Phone,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import type { ProductHeroConfig } from "@/types/product-page";
import buildingImg from "@/routes/images/settledesk/building.png";
import logoImg from "@/routes/images/settledesk/logo.png";

export function ProductHero({
  config,
  onPrimaryCtaClick,
}: {
  config: ProductHeroConfig;
  onPrimaryCtaClick?: () => void;
}) {
  const [activeStage, setActiveStage] = useState<"agent" | "admin" | "super">("admin");
  const { theme } = useTheme();

  const calConfig = JSON.stringify({
    layout: "month_view",
    theme:
      theme === "dark" ||
      (theme === "system" &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light",
  });

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-background">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Top Product Identification Pill */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1 text-xs font-medium text-foreground backdrop-blur-md">
            <img src={logoImg} alt="SettleDesk logo mark" className="h-4 w-auto object-contain" />
            <span className="text-muted-foreground">|</span>
            <span className="font-semibold">{config.eyebrow}</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Thesis Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display leading-[1.08] text-foreground">
              Run your properties, agents, and commission payouts on{" "}
              <span className="text-gradient">one live system.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              SettleDesk connects your field agents, office managers, and financial ledgers in real
              time. When an agent submits a contract on mobile, your dashboard updates inventory,
              calculates splits, and queues bank payouts automatically.
            </p>

            {/* Direct Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button type="button" onClick={onPrimaryCtaClick} className="btn-primary">
                <span>Start 30-day free trial</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                type="button"
                data-cal-link="arjun-rajput-2mdsis"
                data-cal-config={calConfig}
                className="btn-secondary"
              >
                <Phone className="size-4" />
                <span>{config.secondaryCtaText || "Book a Discovery Call"}</span>
              </button>
            </div>

            {/* Quick Proof Metrics */}
            <div className="pt-6 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {config.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-lg font-bold text-foreground">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Product Thesis Stage (3-Role Real-Time Cascade Visual) */}
          <div className="lg:col-span-6">
            <div className="surface-card p-4 md:p-6 rounded-2xl relative shadow-xl overflow-hidden border-2 border-border">
              {/* Stage Role Selector Header */}
              <div className="flex items-center justify-between border-b border-border pb-4 mb-4 gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Live System Cascade
                </div>
                <div className="flex items-center gap-1 bg-surface p-1 rounded-lg border border-border">
                  <button
                    type="button"
                    onClick={() => setActiveStage("agent")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeStage === "agent"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    1. Field Agent
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStage("admin")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeStage === "admin"
                        ? "bg-[#e5b84c]/20 text-[#e5b84c] shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    2. Brokerage Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStage("super")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeStage === "super"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    3. Ledger
                  </button>
                </div>
              </div>

              {/* Live Stage Display Container */}
              <div className="relative aspect-[16/10] rounded-xl border border-border bg-background/80 overflow-hidden p-4 md:p-6 flex flex-col justify-between">
                {activeStage === "agent" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-border pb-2">
                      <div className="flex items-center gap-2 font-bold text-foreground">
                        <Smartphone className="size-4 text-emerald-500" />
                        Broker Mobile App — Field Submission
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold">
                        LIVE SYNC
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg border border-border bg-card space-y-2">
                      <div className="text-xs font-bold">
                        Luxury Penthouse #402 — Deal Finalized
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Sale Price: $1,450,000 • Client: Robert Chen
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-500 font-semibold pt-1">
                        <CheckCircle2 className="size-3.5" />
                        Contract PDF uploaded & signed in field
                      </div>
                    </div>
                    <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <span>Next step: Sent instantly to admin approval queue</span>
                      <ChevronRight className="size-3" />
                    </div>
                  </div>
                )}

                {activeStage === "admin" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-border pb-2">
                      <div className="flex items-center gap-2 font-bold text-[#e5b84c]">
                        <Building2 className="size-4" />
                        Client Admin Dashboard — Deal Approval
                      </div>
                      <span className="text-[10px] font-mono bg-[#e5b84c]/20 text-[#e5b84c] px-2 py-0.5 rounded-full font-bold">
                        ACTION REQUIRED
                      </span>
                    </div>

                    <div className="p-3.5 rounded-lg border border-[#e5b84c]/40 bg-[#e5b84c]/5 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-foreground">
                          Penthouse #402 Deal Review
                        </span>
                        <span className="font-mono font-bold text-[#e5b84c]">$43,500 GCI</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Agent Split (80%): <strong className="text-foreground">$34,800</strong> •
                        Office Retained: <strong className="text-foreground">$8,700</strong>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveStage("super")}
                        className="w-full mt-2 py-2 rounded-lg bg-[#e5b84c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                      >
                        Approve Deal & Queue Payout
                      </button>
                    </div>
                  </div>
                )}

                {activeStage === "super" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-border pb-2">
                      <div className="flex items-center gap-2 font-bold text-foreground">
                        <ShieldCheck className="size-4 text-violet-500" />
                        Financial Ledger & Bank Disbursement
                      </div>
                      <span className="text-[10px] font-mono bg-violet-500/10 text-violet-500 px-2 py-0.5 rounded-full font-bold">
                        CLEARED
                      </span>
                    </div>

                    <div className="p-3.5 rounded-lg border border-border bg-card space-y-2">
                      <div className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                        <CheckCircle2 className="size-4" />
                        Deal Approved • Unit Status Updated to "Sold"
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
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
                  className="absolute right-2 bottom-0 h-32 w-auto object-contain opacity-20 pointer-events-none"
                  width={200}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
