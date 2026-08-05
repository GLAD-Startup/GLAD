import { Check } from "lucide-react";
import type { PricingPlan } from "@/types/product-page";
import { SectionHeading } from "@/components/site/SectionHeading";

export function ProductPricingTable({
  plans,
  onSelectPlan,
}: {
  plans: readonly PricingPlan[];
  onSelectPlan?: (planName: string) => void;
}) {
  return (
    <section id="pricing" className="py-24 relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple Plans. Built to Scale With You."
          sub="Transparent pricing with zero hidden fees. 30-day free trial on all plans."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`surface-card p-8 flex flex-col justify-between relative ${
                plan.featured ? "border-2 border-[#e5b84c] shadow-glow" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#e5b84c] text-black px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold font-display">{plan.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{plan.tagline}</p>
                <div className="mt-6 h-px bg-border" />
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs font-medium">
                      <Check className="size-4 shrink-0 text-[#e5b84c] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectPlan?.(plan.name)}
                className={`mt-8 w-full ${plan.featured ? "btn-primary" : "btn-secondary"}`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
