import { Check, ShieldCheck, Building2, Smartphone, CalendarCheck, Receipt, TrendingUp, Bed } from "lucide-react";
import type { ProductTier } from "@/types/product-page";
import { SectionHeading } from "@/components/site/SectionHeading";
import properties3dImg from "@/routes/images/settledesk/properties-3d.png";
import commission3dImg from "@/routes/images/settledesk/commission-3d.png";
import phone3dImg from "@/routes/images/settledesk/phone-3d.png";

const settledeskIcons = [ShieldCheck, Building2, Smartphone];
const settledeskImages = [properties3dImg, commission3dImg, phone3dImg];
const settledeskAlts = [
  "SettleDesk Super Admin 3D Property Catalog Render",
  "SettleDesk Client Admin Commission Split Matrix 3D Render",
  "SettleDesk Mobile App 3D Smartphone Interface Render",
];

const hmsIcons = [CalendarCheck, Smartphone, TrendingUp];

export function ProductThreeTier({
  tiers,
  eyebrow = "One Platform, Three Experiences",
  title = "Everyone Gets the Right Tools for Their Job",
  sub = "Tailored portals engineered for platform operators, brokerage owners, and field agents.",
  product = "settledesk",
}: {
  tiers: readonly ProductTier[];
  eyebrow?: string;
  title?: string;
  sub?: string;
  product?: "settledesk" | "glad-hms";
}) {
  const isHms = product === "glad-hms";

  return (
    <section id="architecture" className="py-24 relative border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          sub={sub}
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => {
            const Icon = isHms ? hmsIcons[idx % hmsIcons.length] : settledeskIcons[idx % settledeskIcons.length];
            const img = settledeskImages[idx % settledeskImages.length];
            const alt = settledeskAlts[idx % settledeskAlts.length];

            return (
              <div
                key={tier.title}
                className="surface-card p-8 interactive-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                        {tier.role}
                      </div>
                      <h3 className="mt-2 text-2xl font-bold font-display">{tier.title}</h3>
                    </div>
                    <div className="size-12 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 text-[#e5b84c]">
                      <Icon className="size-6" />
                    </div>
                  </div>

                  {/* Visual Illustration */}
                  {isHms ? (
                    <div className="my-6 aspect-[16/10] rounded-xl border border-border bg-surface/40 flex flex-col justify-between p-4 overflow-hidden relative group-hover:border-[#e5b84c]/50 transition-colors">
                      <div className="flex items-center justify-between text-[11px] font-mono border-b border-border/60 pb-2">
                        <span className="text-muted-foreground">MODULE PREVIEW</span>
                        <span className="text-[#e5b84c] font-bold">
                          {idx === 0 ? "DESK CONSOLE" : idx === 1 ? "MOBILE TASK" : "USALI ANALYTICS"}
                        </span>
                      </div>
                      <div className="py-2 space-y-1.5">
                        {idx === 0 && (
                          <>
                            <div className="text-xs font-bold text-foreground">Room Grid & Walk-In Allocation</div>
                            <div className="text-[11px] text-muted-foreground">Pessimistic row-lock ensures zero double-booking</div>
                            <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block">
                              STATUS: LIVE OVERLAP CHECK
                            </div>
                          </>
                        )}
                        {idx === 1 && (
                          <>
                            <div className="text-xs font-bold text-foreground">Priority Turnover Queue</div>
                            <div className="text-[11px] text-muted-foreground">Urgent same-day arrival sorting with maintenance tags</div>
                            <div className="text-[10px] font-mono text-[#e5b84c] bg-[#e5b84c]/10 px-2 py-0.5 rounded inline-block">
                              DISPATCH: ACTIVE ROSTER
                            </div>
                          </>
                        )}
                        {idx === 2 && (
                          <>
                            <div className="text-xs font-bold text-foreground">Multi-Folio Split & GST Ledger</div>
                            <div className="text-[11px] text-muted-foreground">Occupancy %, Net ADR, and Net RevPAR reporting</div>
                            <div className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded inline-block">
                              LEDGER: NUMERIC(12,2)
                            </div>
                          </>
                        )}
                      </div>
                      <div className="text-[10px] text-muted-foreground/80 flex items-center justify-between pt-1 border-t border-border/40">
                        <span>Role Scoped</span>
                        <span className="text-emerald-400 font-bold">RBAC Enforced</span>
                      </div>
                    </div>
                  ) : (
                    <div className="my-6 aspect-[16/10] rounded-xl border border-border bg-background/50 flex items-center justify-center p-4 overflow-hidden">
                      <img
                        src={img}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                        width={320}
                        height={200}
                      />
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border space-y-2.5">
                  {tier.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2 text-xs">
                      <Check className="size-4 shrink-0 text-[#e5b84c] mt-0.5" />
                      <span className="text-foreground/90 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

