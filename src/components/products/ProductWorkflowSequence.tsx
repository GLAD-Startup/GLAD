import { SectionRail } from "@/components/site/SectionRail";
import type { StepItem } from "@/types/product-page";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export function ProductWorkflowSequence({
  steps,
  eyebrow = "Operational Flow",
  title = "From Tenant Setup to Automated Payout",
  sub = "A 4-phase sequence designed to get your brokerage onboarded, configured, and closing deals in minutes.",
}: {
  steps: readonly StepItem[];
  eyebrow?: string;
  title?: string;
  sub?: string;
}) {
  return (
    <section id="workflow" className="py-24 relative border-t border-border overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionRail index="01" label={eyebrow} meta={typeof title === 'string' ? title : undefined} />
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--color-ink)] text-center mb-4">{title}</h2>
        {sub && <p className="text-[14px] text-[var(--color-ink-2)] max-w-2xl mx-auto text-center mb-8 leading-relaxed">{sub}</p>}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx, 5) * 0.05 }}
              className="surface p-6 rounded-2xl flex flex-col justify-between relative cursor-pointer border border-emerald-500/30 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3.5 mb-4">
                  <span className="font-mono text-sm font-extrabold text-emerald-400 tracking-wider">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 tracking-wider">
                    {step.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-foreground">{step.title}</h3>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 space-y-2.5">
                {step.checklist.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-[11px] font-medium text-foreground/90"
                  >
                    <Check className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Fully visible connecting flow arrow centered between cards */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 size-7 rounded-full bg-background border-2 border-emerald-500 items-center justify-center text-emerald-400 shadow-md">
                  <ArrowRight className="size-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
