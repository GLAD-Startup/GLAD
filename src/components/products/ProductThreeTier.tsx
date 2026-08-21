import {
  Check,
  ShieldCheck,
  Building2,
  Smartphone,
  CalendarCheck,
  TrendingUp,
  BedDouble,
  Sparkles,
} from "lucide-react";
import type { ProductTier } from "@/types/product-page";
import { SectionRail } from "@/components/site/SectionRail";
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
        <SectionRail index="02" label={eyebrow} meta={typeof title === 'string' ? title : undefined} />
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--color-ink)] text-center mb-4">{title}</h2>
        {sub && <p className="text-[14px] text-[var(--color-ink-2)] max-w-2xl mx-auto text-center mb-8 leading-relaxed">{sub}</p>}

        <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
          {tiers.map((tier, idx) => {
            const Icon = isHms
              ? hmsIcons[idx % hmsIcons.length]
              : settledeskIcons[idx % settledeskIcons.length];
            const img = settledeskImages[idx % settledeskImages.length];
            const alt = settledeskAlts[idx % settledeskAlts.length];

            return (
              <div
                key={tier.title}
                className="p-6 sm:p-7 rounded-2xl bg-card border border-rule shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header Row: Role Tag + Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brass/10 text-brass border border-brass/20 font-mono">
                      {tier.role}
                    </span>
                    <div className="size-10 rounded-xl bg-sunk border border-rule flex items-center justify-center shrink-0 text-brass">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-ink leading-snug">
                    {tier.title}
                  </h3>

                  <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Clean Visual Preview Module */}
                  {isHms ? (
                    <div className="my-5 rounded-xl border border-rule bg-sunk/40 p-3.5 transition-all duration-300 group-hover:border-brass/40">
                      {idx === 0 && (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs pb-2 border-b border-rule">
                            <span className="font-semibold text-ink flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-live animate-pulse" />
                              Live Room Grid
                            </span>
                            <span className="text-[10px] font-mono text-live bg-live/10 px-2 py-0.5 rounded border border-live/20">
                              Zero Double-Booking
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 rounded-lg bg-live/10 border border-live/20 text-live">
                              <div className="font-bold text-xs">101</div>
                              <div className="text-[10px] text-ink-3 mt-0.5">
                                Occupied
                              </div>
                            </div>
                            <div className="p-2 rounded-lg bg-brass/10 border border-brass/20 text-brass">
                              <div className="font-bold text-xs">102</div>
                              <div className="text-[10px] text-ink-3 mt-0.5">
                                Reserved
                              </div>
                            </div>
                            <div className="p-2 rounded-lg bg-sunk border border-rule text-ink-2">
                              <div className="font-bold text-xs">103</div>
                              <div className="text-[10px] text-ink-3 mt-0.5">Ready</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs pb-2 border-b border-rule">
                            <span className="font-semibold text-ink flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-brass animate-pulse" />
                              Turnover Queue
                            </span>
                            <span className="text-[10px] font-mono text-brass bg-brass/10 px-2 py-0.5 rounded border border-brass/20">
                              Priority Sorted
                            </span>
                          </div>
                          <div className="space-y-1.5 text-xs">
                            <div className="flex items-center justify-between p-2 rounded-lg bg-card border border-rule">
                              <span className="font-medium text-ink text-xs">
                                Room 304 (Suite)
                              </span>
                              <span className="text-[10px] text-brass font-semibold bg-brass/10 px-1.5 py-0.5 rounded">
                                Urgent Clean
                              </span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-card border border-rule">
                              <span className="font-medium text-ink text-xs">
                                Room 201 (Deluxe)
                              </span>
                              <span className="text-[10px] text-live font-semibold bg-live/10 px-1.5 py-0.5 rounded">
                                Inspected ✓
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs pb-2 border-b border-rule">
                            <span className="font-semibold text-ink flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-live animate-pulse" />
                              USALI Financials
                            </span>
                            <span className="text-[10px] font-mono text-live bg-live/10 px-2 py-0.5 rounded border border-live/20">
                              GST Auto-Split
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 rounded-lg bg-card border border-rule">
                              <div className="font-bold text-ink text-xs">₹4,850</div>
                              <div className="text-[10px] text-ink-3 mt-0.5">
                                Net ADR
                              </div>
                            </div>
                            <div className="p-2 rounded-lg bg-card border border-rule">
                              <div className="font-bold text-ink text-xs">88.4%</div>
                              <div className="text-[10px] text-ink-3 mt-0.5">Occ %</div>
                            </div>
                            <div className="p-2 rounded-lg bg-card border border-rule">
                              <div className="font-bold text-ink text-xs">₹4,287</div>
                              <div className="text-[10px] text-ink-3 mt-0.5">RevPAR</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="my-5 aspect-[16/10] rounded-xl border border-rule bg-sunk/30 flex items-center justify-center p-4 overflow-hidden">
                      <img
                        src={img}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                        width={320}
                        height={200}
                      />
                    </div>
                  )}
                </div>

                {/* Key Bullet Points */}
                <div className="mt-6 pt-5 border-t border-rule space-y-2.5">
                  {tier.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5 text-xs">
                      <Check className="size-4 shrink-0 text-live mt-0.5" />
                      <span className="text-ink font-medium leading-relaxed">
                        {bullet}
                      </span>
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
