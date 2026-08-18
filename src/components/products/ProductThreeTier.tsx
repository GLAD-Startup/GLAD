import { Check, ShieldCheck, Building2, Smartphone } from "lucide-react";
import type { ProductTier } from "@/types/product-page";
import { SectionHeading } from "@/components/site/SectionHeading";
import properties3dImg from "@/routes/images/settledesk/properties-3d.png";
import commission3dImg from "@/routes/images/settledesk/commission-3d.png";
import phone3dImg from "@/routes/images/settledesk/phone-3d.png";

const icons = [ShieldCheck, Building2, Smartphone];
const tierImages = [properties3dImg, commission3dImg, phone3dImg];
const tierAlts = [
  "SettleDesk Super Admin 3D Property Catalog Render",
  "SettleDesk Client Admin Commission Split Matrix 3D Render",
  "SettleDesk Mobile App 3D Smartphone Interface Render",
];

export function ProductThreeTier({ tiers }: { tiers: readonly ProductTier[] }) {
  return (
    <section id="architecture" className="py-24 relative border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="One Platform, Three Experiences"
          title="Everyone Gets the Right Tools for Their Job"
          sub="Tailored portals engineered for platform operators, brokerage owners, and field agents."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => {
            const Icon = icons[idx % icons.length];
            const img = tierImages[idx % tierImages.length];
            const alt = tierAlts[idx % tierAlts.length];

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

                  {/* 3D Visual Illustration */}
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
