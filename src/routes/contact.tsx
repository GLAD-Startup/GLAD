import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Instagram, Mail, Linkedin, Shield, Twitter } from "lucide-react";
import redditLogo from "./images/reddit-logo.png";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { Field, SelectField } from "@/components/site/FormFields";
import { motion } from "framer-motion";
import { EmailModal } from "@/components/site/EmailModal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — GLAD studio" },
      {
        name: "description",
        content: "Let's discuss your project. Book a free 30-minute consultation with GLAD studio.",
      },
      { property: "og:title", content: "Contact Us — GLAD studio" },
      {
        property: "og:description",
        content: "Let's discuss your project. Book a free 30-minute consultation.",
      },
      { property: "og:url", content: "https://gladstudio.net/contact" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": "https://gladstudio.net/contact/#webpage",
              url: "https://gladstudio.net/contact",
              name: "Contact Us — GLAD studio",
              description:
                "Let's discuss your project. Book a free 30-minute consultation with GLAD studio.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/contact/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: "https://gladstudio.net/contact",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/hello@gladstudio.net", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(true); // Fallback to success state
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-36 pb-24 md:pt-44 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block w-6 h-px bg-brand-gradient" />
              Contact
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Let's discuss your <span className="text-gradient">project.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Tell us what you're building. We'll reply within one business day with next steps — or
              honest feedback if we're not the right fit.
            </p>

            {/* Dynamic Socials Card containing Email, X/Twitter, LinkedIn, Instagram, and Reddit */}
            <div className="mt-10 flex justify-center sm:justify-start">
              <Reveal delay={0.1}>
                <SocialsCard
                  onEmailClick={(e) => {
                    e.preventDefault();
                    setIsEmailModalOpen(true);
                  }}
                />
              </Reveal>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Free consultation", "Reply < 24h", "No obligation"].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm px-3.5 py-1.5 text-xs text-muted-foreground"
                >
                  <Shield className="size-3" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card subtle-green-card p-12 text-center"
              >
                <div className="mx-auto size-16 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20">
                  <Check className="size-8" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold">Message received.</h2>
                <p className="mt-3 text-muted-foreground">
                  We'll be in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card subtle-green-card p-8 space-y-5">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">Project enquiry</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    All fields are kept confidential.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <Field label="Company" name="company" placeholder="Company name" />
                <Field
                  label="Project description"
                  name="project"
                  textarea
                  placeholder="Tell us about your project..."
                  required
                />
                <SelectField
                  label="Budget range"
                  name="budget"
                  options={["Under $15k", "$15k – $40k", "$40k – $100k", "$100k+", "Not sure yet"]}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send enquiry <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  target,
  onClick,
}: {
  icon: any;
  label: string;
  value: string;
  href: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 group"
    >
      <div className="size-11 rounded-xl surface-card grid place-items-center group-hover:border-ring/40 transition-all duration-300 group-hover:-translate-y-0.5">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium group-hover:text-gradient transition-colors">
          {value}
        </div>
      </div>
    </a>
  );
}

function SocialsCard({ onEmailClick }: { onEmailClick: (e: React.MouseEvent) => void }) {
  return (
    <div className="socials-card">
      <div className="socials-card-bg" />
      <div className="socials-card-logo">Socials</div>

      {/* Email */}
      <a href="#" onClick={onEmailClick}>
        <div className="socials-card-box socials-box-1">
          <span className="socials-card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.238l10 8.103 10-8.103v11.238h-20z" />
            </svg>
          </span>
        </div>
      </a>

      {/* Twitter / X */}
      <a href="https://x.com/_GLAD_Studio" target="_blank" rel="noopener noreferrer">
        <div className="socials-card-box socials-box-2">
          <span className="socials-card-icon">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </span>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/glad-studio-2k26"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="socials-card-box socials-box-3">
          <span className="socials-card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </span>
        </div>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/__gladstudio/" target="_blank" rel="noopener noreferrer">
        <div className="socials-card-box socials-box-4">
          <span className="socials-card-icon">
            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
            </svg>
          </span>
        </div>
      </a>

      {/* Reddit */}
      <a
        href="https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="socials-card-box socials-box-5">
          <span className="socials-card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.68-6.24-1.78l1.3-4.1 3.6.8c.06.84.75 1.5 1.59 1.5 1.05 0 1.91-.86 1.91-1.91s-.86-1.91-1.91-1.91c-.88 0-1.6.61-1.8 1.43l-4.12-.92c-.39-.09-.78.14-.88.53L10.3 8.94c-2.44.08-4.68.75-6.35 1.76C3.38 9.95 2.48 9.5 1.5 9.5c-1.65 0-3 1.35-3 3 0 1.22.73 2.27 1.78 2.73-.06.27-.08.54-.08.82 0 4.14 4.83 7.5 10.8 7.5s10.8-3.36 10.8-7.5c0-.28-.02-.55-.08-.82 1.05-.46 1.78-1.51 1.78-2.73zM7 14c.83 0 1.5.67 1.5 1.5S7.83 17 7 17s-1.5-.67-1.5-1.5S6.17 14 7 14zm10.74 3.75c-1.14 1.14-3.29 1.25-3.74 1.25s-2.6-.11-3.74-1.25c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0 .76.76 2.12.89 2.68.89.56 0 1.92-.13 2.68-.89.3-.29.77-.29 1.06 0 .29.29.29.77 0 1.06zm-.24-2.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </span>
        </div>
      </a>

      <div className="socials-card-box socials-box-6" />
    </div>
  );
}
