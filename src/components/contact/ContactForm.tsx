'use client';

import React, { useState } from 'react';

const trustChips = [
  '30-minute discovery call',
  'Fixed-scope proposal in 48 hours',
  'Direct access to senior engineers',
];

const budgetOptions = [
  { value: '', label: 'Select Budget Range' },
  { value: 'under-15k', label: 'Under $15k' },
  { value: '15k-40k', label: '$15k – $40k' },
  { value: '40k-100k', label: '$40k – $100k' },
  { value: '100k-plus', label: '$100k+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: '',
    budget: '',
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
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please provide a valid email address';
    }
    if (!formData.description.trim()) {
      nextErrors.description = 'Please describe what you are looking to build';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setServerError(data.error || 'Failed to submit enquiry. Please email us directly.');
      }
    } catch {
      setServerError('Network error. Please try again or email us directly at hello@gladstudio.net');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Three Trust Chips */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {trustChips.map((chip, idx) => (
          <span
            key={idx}
            className="px-3.5 py-1.5 rounded-full text-[12.5px] font-medium bg-surface border border-line-solid text-fg select-none"
          >
            ✓ {chip}
          </span>
        ))}
      </div>

      {isSuccess ? (
        <div className="bg-surface border border-line-solid rounded-[14px] p-8 xl:p-10 text-center animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-4 text-[22px]">
            ✓
          </div>
          <h3 className="text-[24px] font-medium text-fg">
            Enquiry Received
          </h3>
          <p className="t-body text-fg-muted mt-2 max-w-[480px] mx-auto leading-relaxed">
            Thank you for reaching out. A senior partner from GLAD Studio will review your project requirements and reply within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({ name: '', email: '', company: '', description: '', budget: '' });
            }}
            className="mt-6 text-[14px] font-medium text-accent hover:underline cursor-pointer"
          >
            Submit another message →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
          {/* 1. Name */}
          <div className="relative">
            <label htmlFor="contact-name" className="sr-only">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              aria-invalid={!!errors.name}
              className="w-full border-0 border-b border-line py-[18px] px-0 bg-transparent text-[18px] text-fg placeholder:text-fg-muted outline-none focus:border-fg transition-colors duration-200"
            />
            {errors.name && (
              <p className="text-accent text-[13px] font-medium mt-1.5" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* 2. Email */}
          <div className="relative">
            <label htmlFor="contact-email" className="sr-only">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              aria-invalid={!!errors.email}
              className="w-full border-0 border-b border-line py-[18px] px-0 bg-transparent text-[18px] text-fg placeholder:text-fg-muted outline-none focus:border-fg transition-colors duration-200"
            />
            {errors.email && (
              <p className="text-accent text-[13px] font-medium mt-1.5" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* 3. Company */}
          <div className="relative">
            <label htmlFor="contact-company" className="sr-only">
              Company / Venture
            </label>
            <input
              id="contact-company"
              type="text"
              name="company"
              placeholder="Company / Organization (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full border-0 border-b border-line py-[18px] px-0 bg-transparent text-[18px] text-fg placeholder:text-fg-muted outline-none focus:border-fg transition-colors duration-200"
            />
          </div>

          {/* 4. Budget Range */}
          <div className="relative">
            <label htmlFor="contact-budget" className="sr-only">
              Budget Range
            </label>
            <select
              id="contact-budget"
              name="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full border-0 border-b border-line py-[18px] px-0 bg-bg text-[18px] text-fg outline-none focus:border-fg transition-colors duration-200 cursor-pointer appearance-none"
            >
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-bg text-fg">
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-fg-muted text-[13px]">
              ▼
            </span>
          </div>

          {/* 5. Project Description */}
          <div className="relative mt-2">
            <label htmlFor="contact-description" className="sr-only">
              Project Description
            </label>
            <textarea
              id="contact-description"
              name="description"
              rows={4}
              placeholder="Tell us what you're building, your timeline, and key goals *"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
                if (errors.description) setErrors({ ...errors, description: undefined });
              }}
              aria-invalid={!!errors.description}
              className="w-full border-0 border-b border-line py-[18px] px-0 bg-transparent text-[18px] text-fg placeholder:text-fg-muted outline-none focus:border-fg transition-colors duration-200 resize-none leading-relaxed"
            />
            {errors.description && (
              <p className="text-accent text-[13px] font-medium mt-1.5" role="alert">
                {errors.description}
              </p>
            )}
          </div>

          {/* Server Error Message */}
          {serverError && (
            <p className="text-accent text-[14px] font-medium mt-2" role="alert">
              {serverError}
            </p>
          )}

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              data-cursor="link"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-fg text-bg font-medium text-[15px] hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Sending enquiry...' : 'Send enquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
