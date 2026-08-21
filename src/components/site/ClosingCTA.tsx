import * as React from "react";
import { useState } from "react";
import { Surface } from "@/components/ui/Surface";
import { Field, SelectField, TextareaField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export interface ClosingCTAProps {
  defaultService?: string;
  className?: string;
}

export function ClosingCTA({ defaultService, className }: ClosingCTAProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <Surface hover={false} className={`p-8 sm:p-12 overflow-hidden ${className || ""}`}>
      <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-10 sm:gap-12 items-start">
        {/* Left column */}
        <div>
          <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)] leading-tight">
            Ready to ship your next product?
          </h2>
          <p className="text-[15px] text-[var(--color-ink-2)] mt-4 leading-relaxed max-w-md">
            Book a discovery call or send an enquiry. You'll speak directly with senior engineers,
            not sales reps.
          </p>

          <ul className="mt-8 space-y-3">
            <li className="flex items-center gap-3 text-[14px] text-[var(--color-ink)]">
              <span className="font-mono text-[var(--color-brass)] font-semibold">✓</span>
              <span>Fixed scope, transparent milestones & predictable delivery</span>
            </li>
            <li className="flex items-center gap-3 text-[14px] text-[var(--color-ink)]">
              <span className="font-mono text-[var(--color-brass)] font-semibold">✓</span>
              <span>Direct communication with senior technical leads</span>
            </li>
            <li className="flex items-center gap-3 text-[14px] text-[var(--color-ink)]">
              <span className="font-mono text-[var(--color-brass)] font-semibold">✓</span>
              <span>100% intellectual property & source code transfer</span>
            </li>
          </ul>
        </div>

        {/* Right column: Form */}
        <form onSubmit={handleEnquirySubmit} className="space-y-4">
          <Field
            label="Full Name"
            name="name"
            placeholder="e.g. Satoshi Nakamoto"
            required
          />

          <Field
            label="Work Email"
            name="email"
            type="email"
            placeholder="name@company.com"
            required
          />

          <SelectField
            label="Service Required"
            name="service"
            defaultValue={defaultService}
            options={[
              "MVP Development",
              "Web Application Development",
              "Mobile App Development",
              "AI Solutions",
              "Business Automation",
            ]}
          />

          <TextareaField
            label="Project Brief"
            name="brief"
            placeholder="Describe your technical requirements and timeline..."
            rows={3}
            required
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              arrow
              className="w-full justify-center"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send enquiry"}
            </Button>
          </div>

          {submitted && (
            <p className="text-[13px] text-[var(--color-live)] font-medium mt-2">
              Thank you. We'll get back to you within 24 hours.
            </p>
          )}
        </form>
      </div>
    </Surface>
  );
}
