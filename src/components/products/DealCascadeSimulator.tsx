import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Building2,
  Calculator,
} from "lucide-react";

export function DealCascadeSimulator() {
  const [dealPrice, setDealPrice] = useState(1250000);
  const [commissionRate, setCommissionRate] = useState(3.0);
  const [agentSplitTier, setAgentSplitTier] = useState<"80_20" | "70_30" | "90_10">("80_20");

  const grossCommission = Math.round(dealPrice * (commissionRate / 100));
  const splitRatio = agentSplitTier === "90_10" ? 0.9 : agentSplitTier === "80_20" ? 0.8 : 0.7;
  const agentEarnings = Math.round(grossCommission * splitRatio);
  const brokerageEarnings = Math.round(grossCommission * (1 - splitRatio));

  return (
    <div
      id="simulator"
      className="surface p-6 md:p-10 my-12 border-2 border-border rounded-2xl relative overflow-hidden shadow-card scroll-mt-28"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5b84c]">
            <Calculator className="size-3.5" />
            Interactive Commission Engine
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-display mt-1.5 text-foreground">
            Test real-time deal split calculations
          </h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            Move the controls to see how SettleDesk calculates gross commission income (GCI),
            applies tier rules, and queues payouts across all three roles.
          </p>
        </div>
        <div className="px-3 py-1 rounded-full border border-[#e5b84c]/30 bg-[#e5b84c]/10 text-xs font-mono font-semibold text-[#e5b84c] shrink-0">
          Live Split Calculator
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6 bg-surface/60 p-6 rounded-xl border border-border">
          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
              <label htmlFor="deal-price-input" className="text-foreground">
                Property sale price
              </label>
              <span className="text-[#e5b84c] font-mono text-sm font-bold">
                ${dealPrice.toLocaleString()}
              </span>
            </div>
            <input
              id="deal-price-input"
              type="range"
              min={250000}
              max={5000000}
              step={50000}
              value={dealPrice}
              onChange={(e) => setDealPrice(Number(e.target.value))}
              className="w-full accent-[#e5b84c] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
              <label htmlFor="commission-rate-input" className="text-foreground">
                Commission rate
              </label>
              <span className="text-[#e5b84c] font-mono text-sm font-bold">
                {commissionRate.toFixed(1)}%
              </span>
            </div>
            <input
              id="commission-rate-input"
              type="range"
              min={1.0}
              max={6.0}
              step={0.5}
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full accent-[#e5b84c] cursor-pointer"
            />
          </div>

          <div>
            <span className="block text-xs font-bold uppercase tracking-wider mb-2.5 text-foreground">
              Select agent split tier
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "70_30", label: "70/30 Standard" },
                { id: "80_20", label: "80/20 Senior" },
                { id: "90_10", label: "90/10 Partner" },
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setAgentSplitTier(tier.id as "80_20" | "70_30" | "90_10")}
                  className={`py-2.5 px-2 text-xs font-bold rounded-lg border transition-all ${
                    agentSplitTier === tier.id
                      ? "border-[#e5b84c] bg-[#e5b84c]/20 text-foreground shadow-sm"
                      : "border-border bg-background/50 text-muted-foreground hover:border-foreground"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Calculation Output Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl border border-border bg-card">
              <div className="text-[10px] font-bold uppercase text-muted-foreground">
                Gross Income (GCI)
              </div>
              <div className="text-lg md:text-xl font-bold font-mono text-foreground mt-1">
                ${grossCommission.toLocaleString()}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#e5b84c]/40 bg-[#e5b84c]/10">
              <div className="text-[10px] font-bold uppercase text-[#e5b84c]">Agent Split</div>
              <div className="text-lg md:text-xl font-bold font-mono text-[#e5b84c] mt-1">
                ${agentEarnings.toLocaleString()}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card">
              <div className="text-[10px] font-bold uppercase text-muted-foreground">
                Brokerage Share
              </div>
              <div className="text-lg md:text-xl font-bold font-mono text-foreground mt-1">
                ${brokerageEarnings.toLocaleString()}
              </div>
            </div>
          </div>

          {/* 3-Tier Live Cascade Stages */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-background/40">
              <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <Smartphone className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-foreground">1. Agent submits contract</div>
                <div className="text-[11px] text-muted-foreground truncate">
                  Contract details & signatures uploaded from field mobile app
                </div>
              </div>
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e5b84c]/40 bg-[#e5b84c]/5">
              <div className="size-8 rounded-lg bg-[#e5b84c]/20 text-[#e5b84c] flex items-center justify-center shrink-0">
                <Building2 className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#e5b84c]">2. Admin approves payout</div>
                <div className="text-[11px] text-muted-foreground truncate">
                  Calculates ${agentEarnings.toLocaleString()} split & marks property as "Sold"
                </div>
              </div>
              <ArrowRight className="size-4 text-[#e5b84c] shrink-0" />
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-background/40">
              <div className="size-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-foreground">
                  3. System queues bank payout
                </div>
                <div className="text-[11px] text-muted-foreground truncate">
                  Financial entry logged with immutable audit record
                </div>
              </div>
              <CheckCircle2 className="size-4 text-violet-500 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
