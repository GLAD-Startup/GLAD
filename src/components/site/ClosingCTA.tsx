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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService || "MVP Development",
    brief: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // 1. Name validation
    const nameTrim = formData.name.trim();
    if (!nameTrim) {
      newErrors.name = "We build software for humans, not ghosts. Name, please.";
    } else if (nameTrim.length < 2) {
      newErrors.name = "Even Elon Musk's kid has a longer name than that.";
    }

    // 2. Email validation
    const emailTrim = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrim) {
      newErrors.email = "Telepathy hasn't shipped in our stack yet. How do we reach you?";
    } else if (!emailRegex.test(emailTrim)) {
      newErrors.email = "400 Bad Request: That doesn't look like a valid email protocol.";
    } else if (emailTrim.includes("test@") || emailTrim === "a@a.com" || emailTrim.endsWith("@test.com")) {
      newErrors.email = "Nice try, but our mail server has higher standards than 'test@test.com'.";
    }

    // 3. Project Brief validation
    const briefTrim = formData.brief.trim();
    if (!briefTrim) {
      newErrors.brief = "A blank brief builds blank software. Give our engineers something to chew on.";
    } else if (briefTrim.length < 8) {
      newErrors.brief = "Two words won't get you a production build. Elaborate a little.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

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
        <form onSubmit={handleEnquirySubmit} noValidate className="space-y-4">
          <Field
            label="Full Name"
            name="name"
            placeholder="e.g. Satoshi Nakamoto"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            error={errors.name}
            required
          />

          <Field
            label="Work Email"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={errors.email}
            required
          />

          <SelectField
            label="Service Required"
            name="service"
            value={formData.service}
            onChange={(e) => handleInputChange("service", e.target.value)}
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
            value={formData.brief}
            onChange={(e) => handleInputChange("brief", e.target.value)}
            error={errors.brief}
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
