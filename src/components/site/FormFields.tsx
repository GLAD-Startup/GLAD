import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const [error, setError] = useState("");

  const handleInvalid = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    let msg = "Psst... please fill this out! ⚡";
    
    if (target.validity.valueMissing) {
      if (name === "name") msg = "Don't be shy, what should we call you? 😊";
      else if (name === "email") msg = "We need your email to reply! ✉️";
      else if (name === "project") msg = "Tell us a bit about your project! 🚀";
    } else if (target.validity.typeMismatch && type === "email") {
      msg = "Hmm, that doesn't look like a real email! 🤔";
    }
    
    setError(msg);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError("");
    }
  };

  const cls =
    "w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all duration-300";

  return (
    <label className="block relative">
      <span className="text-xs font-medium text-muted-foreground tracking-wide">{label}</span>
      <div className="relative mt-1.5">
        {textarea ? (
          <textarea
            name={name}
            required={required}
            rows={4}
            placeholder={placeholder}
            onInvalid={handleInvalid}
            onChange={handleChange}
            className={`${cls} resize-none`}
          />
        ) : (
          <input
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            onInvalid={handleInvalid}
            onChange={handleChange}
            className={cls}
          />
        )}

        {/* Custom Playful Validation Tooltip */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="absolute left-4 top-[calc(100%+4px)] z-30 bg-white text-black border-2 border-black px-3.5 py-2 rounded-xl shadow-[3px_3px_0px_#000] flex items-center gap-2.5 text-xs font-bold pointer-events-none"
            >
              {/* Arrow */}
              <div className="absolute top-[-8px] left-5 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[8px] border-b-black" />
              <div className="absolute top-[-5px] left-[21px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[7px] border-b-white" />
              
              {/* Playful alert icon */}
              <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-lg bg-[#FF5C00] border border-black text-white font-extrabold text-[11px] shadow-[1px_1px_0px_#000]">
                !
              </span>
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground tracking-wide">{label}</span>
      <select
        name={name}
        className="mt-1.5 w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all duration-300"
      >
        {options.map((o) => (
          <option key={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
