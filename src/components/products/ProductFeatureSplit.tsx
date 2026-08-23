import type { ProductFeatureItem } from "@/types/product-page";
import propVideo from "@/routes/images/settledesk/videos/every property always up to date.mp4";
import commissionVideo from "@/routes/images/settledesk/videos/Commission Plans, Built Your Way.mp4";
import approvalsVideo from "@/routes/images/settledesk/videos/From Submitted to Sold, Automatically.mp4";
import syncVideo from "@/routes/images/settledesk/videos/One Source of Truth. Every Device.mp4";

import luxuryVillaImg from "@/routes/images/settledesk/luxury-villa.png";
import contractImg from "@/routes/images/settledesk/real-estate-contract.png";
import realEstateAppImg from "@/routes/images/settledesk/real-estate-app.png";
import brokerOfficeImg from "@/routes/images/settledesk/broker-office.png";
import { CheckCircle2, Lock, ShieldCheck, UserCheck, AlertCircle, RefreshCw } from "lucide-react";

const featureVideos = [propVideo, commissionVideo, approvalsVideo, syncVideo];
const featureFallbacks = [luxuryVillaImg, contractImg, realEstateAppImg, brokerOfficeImg];
const featureAlts = [
  "SettleDesk Property Portfolio Real-time Listing Sync Demonstration",
  "SettleDesk Version-Controlled Commission Split Engine Interface",
  "SettleDesk One-Click Deal Approval and Payout Automation Workflow",
  "SettleDesk Multi-Device Sync Demonstration on Web and Mobile",
];

export function ProductFeatureSplit({
  features,
  product = "settledesk",
}: {
  features: readonly ProductFeatureItem[];
  product?: "settledesk" | "glad-hms";
}) {
  const isHms = product === "glad-hms";

  return (
    <section id="features" className="py-16 sm:py-24 relative border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16 sm:space-y-24">
        {features.map((item, index) => {
          const isEven = index % 2 === 1;
          const video = featureVideos[index % featureVideos.length];
          const fallbackImg = featureFallbacks[index % featureFallbacks.length];
          const altText = featureAlts[index % featureAlts.length];

          return (
            <div
              key={item.title}
              className={`grid gap-8 lg:gap-12 lg:grid-cols-12 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                  {item.eyebrow}
                </div>
                <h3 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                {/* Browser Window Frame Container */}
                <div className="surface p-2.5 sm:p-3 rounded-2xl relative shadow-xl overflow-hidden group">
                  <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 border-b border-border mb-2.5 sm:mb-3 bg-surface/50 rounded-t-xl">
                    <div className="size-2 sm:size-2.5 rounded-full bg-red-500/80 shrink-0" />
                    <div className="size-2 sm:size-2.5 rounded-full bg-yellow-500/80 shrink-0" />
                    <div className="size-2 sm:size-2.5 rounded-full bg-green-500/80 shrink-0" />
                    <div className="mx-auto text-[9px] sm:text-[10px] font-mono text-muted-foreground bg-background px-2.5 sm:px-3 py-0.5 rounded-full border border-border truncate max-w-[200px] sm:max-w-none">
                      {item.routePath}
                    </div>
                  </div>

                  {/* Feature Stage Display */}
                  {isHms ? (
                    <div className="relative min-h-[250px] md:min-h-0 md:aspect-video rounded-xl border border-border bg-background/80 overflow-hidden p-3.5 sm:p-5 flex flex-col justify-between">
                      {index === 0 && (
                        <div className="space-y-2.5 sm:space-y-3 h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border/80 pb-2 gap-2">
                            <span className="font-bold text-foreground flex items-center gap-1.5 truncate">
                              <Lock className="size-3.5 text-[#10b981] shrink-0" />
                              <span className="truncate">PostgreSQL Concurrency Grid</span>
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono bg-[#10b981]/10 text-[#10b981] px-1.5 sm:px-2 py-0.5 rounded font-bold shrink-0">
                              ZERO OVERLAPS
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs">
                            <div className="p-2 sm:p-3 rounded-lg border border-border bg-surface/40 space-y-0.5 sm:space-y-1">
                              <div className="font-bold text-foreground truncate">Suite #301</div>
                              <div className="text-[9px] sm:text-[11px] text-muted-foreground truncate">Deluxe King</div>
                              <div className="text-[8.5px] sm:text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1 sm:px-1.5 py-0.5 rounded inline-block">
                                OCCUPIED
                              </div>
                            </div>
                            <div className="p-2 sm:p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/5 space-y-0.5 sm:space-y-1">
                              <div className="font-bold text-foreground truncate">Room #302</div>
                              <div className="text-[9px] sm:text-[11px] text-muted-foreground truncate">Exec Double</div>
                              <div className="text-[8.5px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1 sm:px-1.5 py-0.5 rounded inline-block">
                                ROW LOCKED
                              </div>
                            </div>
                            <div className="p-2 sm:p-3 rounded-lg border border-border bg-surface/40 space-y-0.5 sm:space-y-1">
                              <div className="font-bold text-foreground truncate">Room #303</div>
                              <div className="text-[9px] sm:text-[11px] text-muted-foreground truncate">Standard Twin</div>
                              <div className="text-[8.5px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1 sm:px-1.5 py-0.5 rounded inline-block">
                                AVAILABLE
                              </div>
                            </div>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-muted-foreground/90 font-mono border-t border-border/40 pt-2 flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                            <span>Isolation: FOR UPDATE NOWAIT</span>
                            <span className="text-emerald-400 font-bold">100% Double-Booking Proof</span>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-2.5 sm:space-y-3 h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border/80 pb-2 gap-2">
                            <span className="font-bold text-foreground flex items-center gap-1.5 truncate">
                              <UserCheck className="size-3.5 text-[#e5b84c] shrink-0" />
                              <span className="truncate">Front Desk Check-In Console</span>
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono bg-[#e5b84c]/20 text-[#e5b84c] px-1.5 sm:px-2 py-0.5 rounded font-bold shrink-0">
                              FOLIO INITIALIZED
                            </span>
                          </div>
                          <div className="p-2.5 sm:p-3.5 rounded-lg border border-border bg-surface/40 space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
                            <div className="flex justify-between items-center gap-2">
                              <span className="font-bold text-foreground truncate">Guest: Dr. Priya Sharma</span>
                              <span className="font-mono text-[10px] sm:text-[11px] text-muted-foreground shrink-0">#BK-7842</span>
                            </div>
                            <div className="text-muted-foreground text-[10px] sm:text-[11px]">
                              Stay: 19 Aug 2026 – 22 Aug 2026 (3 Nights) • Room 405
                            </div>
                            <div className="flex items-center gap-1.5 pt-0.5 text-[10px] sm:text-[11px] text-emerald-400">
                              <CheckCircle2 className="size-3.5 shrink-0" />
                              <span className="truncate">Govt ID Verified • Digital Key Dispatched</span>
                            </div>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-muted-foreground/90 flex flex-col xs:flex-row xs:items-center justify-between border-t border-border/40 pt-2 gap-1">
                            <span>Billing: Direct Billing / Corporate</span>
                            <span className="text-[#e5b84c] font-mono font-bold">₹0.00 Balance Pending</span>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-2.5 sm:space-y-3 h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border/80 pb-2 gap-2">
                            <span className="font-bold text-foreground flex items-center gap-1.5 truncate">
                              <RefreshCw className="size-3.5 text-emerald-400 shrink-0" />
                              <span className="truncate">Mobile Housekeeping Board</span>
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-1.5 sm:px-2 py-0.5 rounded font-bold shrink-0">
                              PRIORITY QUEUE
                            </span>
                          </div>
                          <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
                            <div className="p-2 sm:p-2.5 rounded-lg border border-red-500/30 bg-red-500/5 flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                              <div>
                                <span className="font-bold text-foreground">Room 204 — Same Day Arrival</span>
                                <div className="text-[10px] sm:text-[11px] text-muted-foreground">Assigned: Sunita K. • Urgent (2:00 PM)</div>
                              </div>
                              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-1.5 sm:px-2 py-0.5 rounded self-start xs:self-auto">
                                CLEANING
                              </span>
                            </div>
                            <div className="p-2 sm:p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                              <div>
                                <span className="font-bold text-foreground">Room 301 — Turnover Complete</span>
                                <div className="text-[10px] sm:text-[11px] text-muted-foreground">Inspected by Supervisor • Clean</div>
                              </div>
                              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 sm:px-2 py-0.5 rounded self-start xs:self-auto">
                                READY
                              </span>
                            </div>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-muted-foreground/90 flex items-center justify-between border-t border-border/40 pt-2">
                            <span>Front desk synced</span>
                            <span className="text-emerald-400 font-bold">0s Latency</span>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="space-y-2.5 sm:space-y-3 h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[11px] sm:text-xs border-b border-border/80 pb-2 gap-2">
                            <span className="font-bold text-foreground flex items-center gap-1.5 truncate">
                              <ShieldCheck className="size-3.5 text-violet-400 shrink-0" />
                              <span className="truncate">Multi-Folio Accounting & GST Ledger</span>
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono bg-violet-500/10 text-violet-400 px-1.5 sm:px-2 py-0.5 rounded font-bold shrink-0">
                              NUMERIC(12,2)
                            </span>
                          </div>
                          <div className="p-2.5 sm:p-3 rounded-lg border border-border bg-surface/40 space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs font-mono">
                            <div className="flex justify-between text-muted-foreground gap-2">
                              <span className="truncate">Master Folio (Room Tariff):</span>
                              <span className="text-foreground shrink-0">₹7,200.00 (12% GST)</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground gap-2">
                              <span className="truncate">Incidentals (Dining/Spa):</span>
                              <span className="text-foreground shrink-0">₹1,450.00 (18% GST)</span>
                            </div>
                            <div className="h-px bg-border my-1" />
                            <div className="flex justify-between font-bold text-foreground gap-2">
                              <span>Total Invoice Amount:</span>
                              <span className="text-[#e5b84c] shrink-0">₹9,775.00</span>
                            </div>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-muted-foreground/90 flex flex-col xs:flex-row xs:items-center justify-between border-t border-border/40 pt-2 gap-1">
                            <span>GSTIN: 07AABCU9603R1ZX</span>
                            <span className="text-emerald-400 font-bold">Indian Tax Compliant</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative aspect-video rounded-xl border border-border bg-background/50 overflow-hidden flex items-center justify-center">
                      <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                        aria-label={altText}
                      />
                      <img
                        src={fallbackImg}
                        alt={altText}
                        loading="lazy"
                        decoding="async"
                        className="hidden w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

