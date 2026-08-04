import { SectionHeading } from "@/components/site/SectionHeading";
import type { StepItem } from "@/types/product-page";
import { ArrowRight, Check } from "lucide-react";

export function ProductWorkflowSequence({ steps }: { steps: readonly StepItem[] }) {
  return (
    <section className="py-24 relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Operational Flow"
          title="From Tenant Setup to Automated Payout"
          sub="A 4-phase sequence designed to get your brokerage onboarded, configured, and closing deals in minutes."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="surface-card p-6 rounded-2xl flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-border pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-[#e5b84c]">0{idx + 1}</span>
                  <span className="text-[10px] uppercase font-bold font-mono text-muted-foreground bg-surface px-2 py-0.5 rounded border border-border">
                    {step.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border space-y-2">
                {step.checklist.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-[11px] font-medium text-foreground/90"
                  >
                    <Check className="size-3.5 text-[#e5b84c] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-muted-foreground/40">
                  <ArrowRight className="size-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
