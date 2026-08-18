import type { ProductFeatureItem } from "@/types/product-page";
import propVideo from "@/routes/images/settledesk/videos/every property always up to date.mp4";
import commissionVideo from "@/routes/images/settledesk/videos/Commission Plans, Built Your Way.mp4";
import approvalsVideo from "@/routes/images/settledesk/videos/From Submitted to Sold, Automatically.mp4";
import syncVideo from "@/routes/images/settledesk/videos/One Source of Truth. Every Device.mp4";

import luxuryVillaImg from "@/routes/images/settledesk/luxury-villa.png";
import contractImg from "@/routes/images/settledesk/real-estate-contract.png";
import realEstateAppImg from "@/routes/images/settledesk/real-estate-app.png";
import brokerOfficeImg from "@/routes/images/settledesk/broker-office.png";

const featureVideos = [propVideo, commissionVideo, approvalsVideo, syncVideo];
const featureFallbacks = [luxuryVillaImg, contractImg, realEstateAppImg, brokerOfficeImg];
const featureAlts = [
  "SettleDesk Property Portfolio Real-time Listing Sync Demonstration",
  "SettleDesk Version-Controlled Commission Split Engine Interface",
  "SettleDesk One-Click Deal Approval and Payout Automation Workflow",
  "SettleDesk Multi-Device Sync Demonstration on Web and Mobile",
];

export function ProductFeatureSplit({ features }: { features: readonly ProductFeatureItem[] }) {
  return (
    <section id="features" className="py-24 relative border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 space-y-24">
        {features.map((item, index) => {
          const isEven = index % 2 === 1;
          const video = featureVideos[index % featureVideos.length];
          const fallbackImg = featureFallbacks[index % featureFallbacks.length];
          const altText = featureAlts[index % featureAlts.length];

          return (
            <div
              key={item.title}
              className={`grid gap-12 lg:grid-cols-12 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
                  {item.eyebrow}
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold font-display leading-tight">
                  {item.title}
                </h3>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                {/* Browser Window Frame Container */}
                <div className="surface-card p-3 rounded-2xl relative shadow-xl overflow-hidden group">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-border mb-3 bg-surface/50 rounded-t-xl">
                    <div className="size-2.5 rounded-full bg-red-500/80" />
                    <div className="size-2.5 rounded-full bg-yellow-500/80" />
                    <div className="size-2.5 rounded-full bg-green-500/80" />
                    <div className="mx-auto text-[10px] font-mono text-muted-foreground bg-background px-3 py-0.5 rounded-full border border-border">
                      {item.routePath}
                    </div>
                  </div>

                  {/* Feature Video / Screenshot Stage */}
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
