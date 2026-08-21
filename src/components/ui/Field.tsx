import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── Field (Input / Textarea) ─────────────────────────── */

export interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  textarea?: boolean;
  rows?: number;
  containerClassName?: string;
}

export const Field = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FieldProps>(
  (
    {
      label,
      error,
      helperText,
      textarea = false,
      rows = 4,
      id,
      name,
      type = "text",
      required,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const inputId = id || name || React.useId();

    const inputClasses = cn(
      "w-full rounded-[var(--radius-md,8px)] bg-[var(--color-card)] border border-[var(--color-rule)] px-[14px] text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-3)] transition-colors duration-150 outline-none",
      "focus:border-[var(--color-live)] focus:shadow-[0_0_0_3px_rgb(15_110_76/0.12)]",
      error && "border-[#B4402F] focus:border-[#B4402F] focus:shadow-[0_0_0_3px_rgba(180,64,47,0.12)]",
      textarea ? "h-auto min-h-[100px] py-[10px] resize-y" : "h-[44px]",
      className
    );

    return (
      <div className={cn("flex flex-col", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-[6px] text-[13px] font-medium text-[var(--color-ink-2)]"
          >
            {label}
            {required && <span className="text-[var(--color-brass)] ml-0.5">*</span>}
          </label>
        )}

        {textarea ? (
          <textarea
            id={inputId}
            name={name}
            required={required}
            rows={rows}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={inputId}
            name={name}
            type={type}
            required={required}
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputClasses}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error ? (
          <p className="mt-[6px] text-[12px] text-[#B4402F]">{error}</p>
        ) : helperText ? (
          <p className="mt-[6px] text-[12px] text-[var(--color-ink-3)]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
Field.displayName = "Field";

/* ─── TextareaField ─────────────────────────────────────── */

export interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  (
    {
      label,
      error,
      helperText,
      rows = 4,
      id,
      name,
      required,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    return (
      <Field
        textarea
        id={id}
        name={name}
        label={label}
        error={error}
        helperText={helperText}
        rows={rows}
        required={required}
        className={className}
        containerClassName={containerClassName}
        ref={ref}
        {...props}
      />
    );
  }
);
TextareaField.displayName = "TextareaField";

/* ─── SelectField ───────────────────────────────────────── */

export interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: (string | { label: string; value: string })[];
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      id,
      name,
      required,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const selectId = id || name || React.useId();

    return (
      <div className={cn("flex flex-col", containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className="mb-[6px] text-[13px] font-medium text-[var(--color-ink-2)]"
          >
            {label}
            {required && <span className="text-[var(--color-brass)] ml-0.5">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            id={selectId}
            name={name}
            required={required}
            ref={ref}
            className={cn(
              "w-full appearance-none rounded-[var(--radius-md,8px)] bg-[var(--color-card)] border border-[var(--color-rule)] h-[44px] px-[14px] pr-10 text-[14px] text-[var(--color-ink)] transition-colors duration-150 outline-none cursor-pointer",
              "focus:border-[var(--color-live)] focus:shadow-[0_0_0_3px_rgb(15_110_76/0.12)]",
              error && "border-[#B4402F] focus:border-[#B4402F] focus:shadow-[0_0_0_3px_rgba(180,64,47,0.12)]",
              className
            )}
            {...props}
          >
            {options.map((opt) => {
              const val = typeof opt === "string" ? opt : opt.value;
              const lbl = typeof opt === "string" ? opt : opt.label;
              return (
                <option key={val} value={val} className="bg-[var(--color-card)] text-[var(--color-ink)]">
                  {lbl}
                </option>
              );
            })}
          </select>

          {/* Custom Chevron Indicator */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[var(--color-ink-3)]">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        {error ? (
          <p className="mt-[6px] text-[12px] text-[#B4402F]">{error}</p>
        ) : helperText ? (
          <p className="mt-[6px] text-[12px] text-[var(--color-ink-3)]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
SelectField.displayName = "SelectField";
