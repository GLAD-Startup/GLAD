import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types/product-page";
import { SectionRail } from "@/components/site/SectionRail";

export function ProductFAQAccordion({
  faqs,
  title = "Everything You Need to Know About SettleDesk",
  eyebrow = "Frequently Asked Questions",
}: {
  faqs: readonly FAQItem[];
  title?: string;
  eyebrow?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 relative border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionRail index="FAQ" label={eyebrow} meta={typeof title === 'string' ? title : undefined} />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[var(--color-ink)] text-center mb-6 sm:mb-8">
          {title}
        </h2>

        <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="surface rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-semibold text-xs sm:text-sm md:text-base hover:text-[#e5b84c] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#e5b84c]" : "text-muted-foreground"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3 sm:pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
