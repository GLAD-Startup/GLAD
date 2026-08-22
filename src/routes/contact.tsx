import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Field, SelectField, TextareaField } from "@/components/ui/Field";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { Ledger } from "@/components/site/Ledger";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/components/site/data";

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

const directContactRows = [
  {
    key: "Direct Email",
    value: "hello@gladstudio.net",
    accent: "Direct inbox monitored by senior engineers.",
  },
  {
    key: "Response Time",
    value: "< 24 Hours",
    accent: "Guaranteed reply within one business day.",
  },
  {
    key: "Discovery Call",
    value: "30 Minutes",
    accent: "Book a direct video consultation on Cal.com.",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero + Form — tone="paper" size="hero" divider={false} */}
        <Section size="hero" tone="paper" divider={false}>
          <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-12 min-[901px]:gap-12 items-start">
            {/* Left column: 1–5 */}
            <div className="min-[901px]:col-span-5 flex flex-col items-start text-left">
              <SectionRail label="CONTACT" />

              <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)]">
                Let's discuss your project.
              </h1>
              <p className="mt-6 text-[17px] text-[var(--color-ink-2)] leading-relaxed max-w-md">
                Tell us what you're building. We'll reply within one business day with next steps —
                or honest feedback if we're not the right fit.
              </p>

              {/* Assurance Chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                <Chip live={false}>Free consultation</Chip>
                <Chip live={false}>Reply &lt; 24h</Chip>
                <Chip live={false}>No obligation</Chip>
              </div>

              {/* Interactive Socials Card on Hover */}
              <div className="mt-10 pt-8 border-t border-[var(--color-rule)] w-full">
                <div className="font-mono text-[12px] uppercase text-[var(--color-ink-3)] tracking-wider mb-2">
                  Direct Inquiries & Socials
                </div>
                <SocialsCard />
              </div>
            </div>

            {/* Right column: 7–12 */}
            <div className="min-[901px]:col-start-7 min-[901px]:col-span-6 w-full">
              {submitted ? (
                <div className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] p-8 sm:p-12 text-center">
                  <div className="mx-auto size-12 rounded-full bg-[var(--color-live)] text-[var(--color-card)] flex items-center justify-center text-lg font-mono mb-4">
                    ✓
                  </div>
                  <h2 className="text-2xl font-display font-medium text-[var(--color-ink)]">
                    Message received.
                  </h2>
                  <p className="mt-2 text-[15px] text-[var(--color-ink-2)]">
                    We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] p-6 sm:p-8 space-y-4"
                >
                  <div>
                    <h2 className="text-xl font-display font-medium text-[var(--color-ink)]">
                      Project enquiry
                    </h2>
                    <p className="mt-1 text-[13px] text-[var(--color-ink-3)]">
                      All fields are kept strictly confidential.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
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

                  <TextareaField
                    label="Project description"
                    name="project"
                    placeholder="Tell us about your project..."
                    required
                  />

                  <SelectField
                    label="Budget range"
                    name="budget"
                    options={[
                      "Under $15k",
                      "$15k – $40k",
                      "$40k – $100k",
                      "$100k+",
                      "Not sure yet",
                    ]}
                  />

                  <div className="pt-2">
                    <Button type="submit" disabled={loading} variant="primary" size="md">
                      {loading ? "Sending..." : "Send enquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Section>

        {/* 2. Direct Contact — tone="card" size="compact" */}
        <Section size="compact" tone="card">
          <SectionRail label="OTHER WAYS TO REACH US" />

          <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-8 min-[901px]:gap-12 items-start">
            <div className="min-[901px]:col-span-5">
              <h2 className="text-[clamp(28px,3.5vw,38px)] font-display font-medium text-[var(--color-ink)] leading-tight">
                Prefer to talk directly?
              </h2>
              <p className="mt-4 text-[15px] text-[var(--color-ink-2)] leading-relaxed">
                Schedule a 30-minute discovery call directly on our calendar to discuss your
                technical architecture, scope, and timeline with our engineering team.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  data-cal-link="glad-studio-1vvd9z/30min"
                  data-cal-config={JSON.stringify({
                    layout: "month_view",
                    theme: "light",
                  })}
                  className="inline-flex items-center gap-2 text-[14px] font-mono text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-rule-hi)] hover:decoration-[var(--color-brass)] transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] cursor-pointer"
                >
                  <span>Open calendar booking</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="min-[901px]:col-span-7">
              <Ledger rows={directContactRows} />
            </div>
          </div>
        </Section>

        {/* 3. Quick FAQ — tone="card" */}
        <Section size="default" tone="card">
          <SectionRail label="COMMON QUESTIONS" />

          <div className="w-full text-left">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-ink)] mb-8">
              Frequently asked questions.
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-[var(--color-rule)] border-t border-[var(--color-rule)]"
            >
              {faqs.slice(0, 6).map((faq, index) => (
                <AccordionItem
                  key={`contact-faq-${index}`}
                  value={`contact-faq-${index}`}
                  className="border-b border-[var(--color-rule)]"
                >
                  <AccordionTrigger className="text-left font-display font-medium text-[17px] sm:text-[19px] text-[var(--color-ink)] py-5 hover:no-underline cursor-pointer">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-[var(--color-ink-2)] leading-relaxed pb-6 pr-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function SocialsCard() {
  return (
    <div className="socials-card mt-4">
      <div className="socials-card-bg" />
      <div className="socials-card-logo select-none">Socials</div>

      {/* Email */}
      <a href="mailto:hello@gladstudio.net" aria-label="Email">
        <div className="socials-card-box socials-box-1 cursor-pointer">
          <span className="socials-card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.238l10 8.103 10-8.103v11.238h-20z" />
            </svg>
          </span>
        </div>
      </a>

      {/* Twitter / X */}
      <a
        href="https://x.com/_GLAD_Studio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
      >
        <div className="socials-card-box socials-box-2 cursor-pointer">
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
        aria-label="LinkedIn"
      >
        <div className="socials-card-box socials-box-3 cursor-pointer">
          <span className="socials-card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </span>
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/__gladstudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <div className="socials-card-box socials-box-4 cursor-pointer">
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
        aria-label="Reddit"
      >
        <div className="socials-card-box socials-box-5 cursor-pointer">
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
