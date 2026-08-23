import { Check, ArrowRight } from "lucide-react";
import type { PricingPlan } from "@/types/product-page";
import { SectionRail } from "@/components/site/SectionRail";

export function ProductPricingTable({
  plans,
  eyebrow = "Pricing",
  title = "Simple Plans. Built to Scale With You.",
  sub = "Transparent pricing with zero hidden fees. 30-day free trial on all plans.",
  onSelectPlan,
}: {
  plans: readonly PricingPlan[];
  eyebrow?: string;
  title?: string;
  sub?: string;
  onSelectPlan?: (planName: string) => void;
}) {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionRail index="01" label={eyebrow} />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[var(--color-ink)] mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="text-xs sm:text-[14px] text-[var(--color-ink-2)] max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          {sub}
        </p>

        <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`surface p-5 sm:p-8 flex flex-col justify-between relative ${
                plan.featured ? "border-2 border-[#e5b84c] shadow-glow" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#e5b84c] text-black px-3.5 py-0.5 sm:px-4 sm:py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display">{plan.name}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs text-muted-foreground">{plan.tagline}</p>
                <div className="mt-5 sm:mt-6 h-px bg-border" />
                <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-2.5 text-xs font-medium">
                      <Check className="size-3.5 sm:size-4 shrink-0 text-[#e5b84c] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectPlan?.(plan.name)}
                className={`mt-6 sm:mt-8 w-full justify-center ${
                  plan.featured ? "btn-primary" : "btn-secondary"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="size-4 shrink-0" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
