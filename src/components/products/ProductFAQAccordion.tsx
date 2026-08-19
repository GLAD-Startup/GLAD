import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types/product-page";
import { SectionHeading } from "@/components/site/SectionHeading";

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
    <section className="py-24 relative border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          center
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="surface-card rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm md:text-base hover:text-[#e5b84c] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#e5b84c]" : "text-muted-foreground"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
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
