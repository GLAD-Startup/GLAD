'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

const trustChips = [
  '30-minute discovery call',
  'Fixed-scope proposal in 48 hours',
  'Direct partner access',
];

const budgetOptions = [
  'Under $15k',
  '$15k – $40k',
  '$40k – $100k',
  '$100k+',
  'Not sure yet',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: '',
    description: '',
    budget: '$15k – $40k',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    description?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length > 100) {
      nextErrors.name = 'Name must be 100 characters or less';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please provide your email address';
    } else if (formData.email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please provide a valid email address';
    }
    if (!formData.description.trim()) {
      nextErrors.description = 'Please describe what you are looking to build';
    } else if (formData.description.trim().length > 5000) {
      nextErrors.description = 'Description must be 5000 characters or less';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formDataPayload = new FormData(form);
      formDataPayload.set('name', formData.name.trim());
      formDataPayload.set('email', formData.email.trim());
      formDataPayload.set('company', formData.company.trim());
      formDataPayload.set('timeline', formData.timeline.trim());
      formDataPayload.set('budget', formData.budget);
      formDataPayload.set('description', formData.description.trim());

      const res = await fetch('https://formsubmit.co/ajax/contact@gladstudio.net', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formDataPayload,
      });

      if (!res.ok) {
        let errorMsg = 'Failed to submit enquiry. Please email us directly at contact@gladstudio.net';
        try {
          const errorData = await res.json();
          if (errorData?.message && typeof errorData.message === 'string') {
            errorMsg = errorData.message;
          }
        } catch {
          // Response body was not JSON
        }
        setServerError(errorMsg);
        return;
      }

      const data = await res.json();
      if (data && (data.success === true || data.success === 'true')) {
        setIsSuccess(true);
      } else {
        setServerError(
          (typeof data?.message === 'string' && data.message) ||
            'Failed to submit enquiry. Please email us directly at contact@gladstudio.net'
        );
      }
    } catch {
      setServerError('Network error. Please try again or email us directly at contact@gladstudio.net');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-surface/90 border border-line-solid rounded-[20px] p-5 sm:p-8 md:p-11 shadow-md relative backdrop-blur-sm">
      {/* Trust Chips Bar */}
      <div className="border-b border-line pb-4 sm:pb-5 mb-5 sm:mb-7">
        <div className="flex flex-wrap items-center gap-2">
          {trustChips.map((chip, idx) => (
            <span
              key={idx}
              className="px-2.5 sm:px-3 py-1 rounded-full text-[11.5px] sm:text-[12px] font-medium bg-bg border border-line-solid text-fg select-none flex items-center gap-1.5 shadow-xs"
            >
              <span className="text-accent font-bold">✓</span>
              <span>{chip}</span>
            </span>
          ))}
        </div>
      </div>

      {isSuccess ? (
        <div className="py-10 text-center animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-5 text-[26px]">
            ✓
          </div>
          <h3 className="text-[26px] font-semibold text-fg tracking-tight">
            Enquiry Received
          </h3>
          <p className="t-body text-fg-muted mt-2.5 max-w-[480px] mx-auto leading-relaxed">
            Thank you for reaching out, <span className="font-semibold text-fg">{formData.name}</span>. A senior partner will review your requirements and reply with feasibility &amp; timeline within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                timeline: '',
                description: '',
                budget: '$15k – $40k',
              });
            }}
            data-cursor="pointer"
            className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg border border-line-solid text-[13.5px] font-medium text-fg hover:border-fg/40 transition-colors cursor-pointer"
          >
            <span>Submit another message</span>
            <span>→</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6" noValidate>
          <input type="hidden" name="budget" value={formData.budget} />
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-[11.5px] sm:text-[12.5px] font-semibold text-fg uppercase tracking-wider">
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                maxLength={100}
                placeholder="e.g. Arjun Singh"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                aria-invalid={!!errors.name}
                className="w-full bg-bg border border-line-solid rounded-[10px] py-3 sm:py-3.5 px-3.5 sm:px-4 text-[14.5px] sm:text-[15.5px] text-fg placeholder:text-fg-dim outline-none focus:border-fg transition-colors duration-200"
              />
              {errors.name && (
                <p className="text-accent text-[12px] font-medium" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-[11.5px] sm:text-[12.5px] font-semibold text-fg uppercase tracking-wider">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                maxLength={254}
                placeholder="e.g. arjun@company.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                aria-invalid={!!errors.email}
                className="w-full bg-bg border border-line-solid rounded-[10px] py-3 sm:py-3.5 px-3.5 sm:px-4 text-[14.5px] sm:text-[15.5px] text-fg placeholder:text-fg-dim outline-none focus:border-fg transition-colors duration-200"
              />
              {errors.email && (
                <p className="text-accent text-[12px] font-medium" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Company & Target Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Company */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-company" className="text-[11.5px] sm:text-[12.5px] font-semibold text-fg uppercase tracking-wider">
                Company / Organization <span className="text-fg-dim font-normal normal-case">(Optional)</span>
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                maxLength={200}
                placeholder="e.g. Acme Ventures"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-bg border border-line-solid rounded-[10px] py-3 sm:py-3.5 px-3.5 sm:px-4 text-[14.5px] sm:text-[15.5px] text-fg placeholder:text-fg-dim outline-none focus:border-fg transition-colors duration-200"
              />
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-timeline" className="text-[11.5px] sm:text-[12.5px] font-semibold text-fg uppercase tracking-wider">
                Desired Timeline <span className="text-fg-dim font-normal normal-case">(Optional)</span>
              </label>
              <input
                id="contact-timeline"
                type="text"
                name="timeline"
                maxLength={100}
                placeholder="e.g. 4–8 weeks / ASAP"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full bg-bg border border-line-solid rounded-[10px] py-3 sm:py-3.5 px-3.5 sm:px-4 text-[14.5px] sm:text-[15.5px] text-fg placeholder:text-fg-dim outline-none focus:border-fg transition-colors duration-200"
              />
            </div>
          </div>

          {/* Row 3: Interactive Budget Range Selector Pills */}
          <div className="flex flex-col gap-2 pt-1">
            <label className="text-[11.5px] sm:text-[12.5px] font-semibold text-fg uppercase tracking-wider">
              Estimated Budget Range
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {budgetOptions.map((opt) => {
                const isSelected = formData.budget === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: opt })}
                    data-cursor="pointer"
                    className={clsx(
                      'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-200 cursor-pointer border',
                      isSelected
                        ? 'bg-fg text-bg border-fg shadow-sm'
                        : 'bg-bg text-fg border-line-solid hover:border-fg/40'
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 4: Project Description */}
          <div className="flex flex-col gap-1.5 pt-1">
            <label htmlFor="contact-description" className="text-[11.5px] sm:text-[12.5px] font-semibold text-fg uppercase tracking-wider">
              Project Description &amp; Requirements <span className="text-accent">*</span>
            </label>
            <textarea
              id="contact-description"
              name="description"
              maxLength={5000}
              rows={4}
              placeholder="Tell us what you're building, key features, target users, and any technical preferences..."
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
                if (errors.description) setErrors({ ...errors, description: undefined });
              }}
              aria-invalid={!!errors.description}
              className="w-full bg-bg border border-line-solid rounded-[10px] py-3 sm:py-3.5 px-3.5 sm:px-4 text-[14.5px] sm:text-[15.5px] text-fg placeholder:text-fg-dim outline-none focus:border-fg transition-colors duration-200 resize-none leading-relaxed"
            />
            {errors.description && (
              <p className="text-accent text-[12px] font-medium" role="alert">
                {errors.description}
              </p>
            )}
          </div>

          {/* Server Error Message */}
          {serverError && (
            <p className="text-accent text-[13px] font-medium" role="alert">
              {serverError}
            </p>
          )}

          {/* Submit Action Row */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-t border-line">
            <button
              type="submit"
              disabled={isSubmitting}
              data-cursor="pointer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-fg text-bg font-medium text-[14px] sm:text-[14.5px] hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-md group active:scale-[0.99]"
            >
              <span>{isSubmitting ? 'Sending Proposal Request...' : 'Send Scoping Request'}</span>
              <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>

            <span className="text-[12px] text-fg-muted text-center sm:text-right">
              🔒 100% Confidential • NDA provided upon request
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
