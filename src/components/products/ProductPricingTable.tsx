import { Check } from "lucide-react";
import type { PricingPlan } from "@/types/product-page";
import { SectionRail } from "@/components/site/SectionRail";

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
        <SectionRail index="01" label="Pricing" />
<h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--color-ink)] mb-4">Simple Plans. Built to Scale With You.</h2>
<p className="text-[14px] text-[var(--color-ink-2)] max-w-2xl mb-8 leading-relaxed">Transparent pricing with zero hidden fees. 30-day free trial on all plans.</p>

        <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`surface p-8 flex flex-col justify-between relative ${
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
