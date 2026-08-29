import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, a as Field, S as SelectField, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import { R as Reveal } from "./Reveal-D3D4kp9B.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { d as Shield, e as Check, c as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-CJ551Cx9.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/calcom__embed-react.mjs";
import "./server-BPMMSW8U.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formsubmit.co/ajax/hello@gladstudio.net", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-24 md:pt-44 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-[1.1fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -24
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-6 h-px bg-brand-gradient" }),
            "Contact"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]", children: [
            "Let's discuss your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "project." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed", children: "Tell us what you're building. We'll reply within one business day with next steps — or honest feedback if we're not the right fit." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center sm:justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialsCard, { onEmailClick: (e) => {
            e.preventDefault();
            setIsEmailModalOpen(true);
          } }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-3", children: ["Free consultation", "Reply < 24h", "No obligation"].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm px-3.5 py-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-3" }),
            badge
          ] }, badge)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: 24
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.7,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1]
        }, children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, className: "glass-card subtle-green-card p-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto size-16 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-2xl font-semibold", children: "Message received." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "We'll be in touch within one business day." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "glass-card subtle-green-card p-8 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold tracking-tight", children: "Project enquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "All fields are kept confidential." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", placeholder: "Your name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@company.com", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", placeholder: "Company name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project description", name: "project", textarea: true, placeholder: "Tell us about your project...", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Budget range", name: "budget", options: ["Under $15k", "$15k – $40k", "$40k – $100k", "$100k+", "Not sure yet"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed", children: loading ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Send enquiry ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isEmailModalOpen, onClose: () => setIsEmailModalOpen(false) })
  ] });
}
function SocialsCard({
  onEmailClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "socials-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-logo", children: "Socials" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", onClick: onEmailClick, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-box socials-box-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "socials-card-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.238l10 8.103 10-8.103v11.238h-20z" }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://x.com/_GLAD_Studio", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-box socials-box-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "socials-card-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", className: "svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/company/glad-studio-2k26", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-box socials-box-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "socials-card-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/__gladstudio/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-box socials-box-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "socials-card-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", className: "svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-box socials-box-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "socials-card-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.68-6.24-1.78l1.3-4.1 3.6.8c.06.84.75 1.5 1.59 1.5 1.05 0 1.91-.86 1.91-1.91s-.86-1.91-1.91-1.91c-.88 0-1.6.61-1.8 1.43l-4.12-.92c-.39-.09-.78.14-.88.53L10.3 8.94c-2.44.08-4.68.75-6.35 1.76C3.38 9.95 2.48 9.5 1.5 9.5c-1.65 0-3 1.35-3 3 0 1.22.73 2.27 1.78 2.73-.06.27-.08.54-.08.82 0 4.14 4.83 7.5 10.8 7.5s10.8-3.36 10.8-7.5c0-.28-.02-.55-.08-.82 1.05-.46 1.78-1.51 1.78-2.73zM7 14c.83 0 1.5.67 1.5 1.5S7.83 17 7 17s-1.5-.67-1.5-1.5S6.17 14 7 14zm10.74 3.75c-1.14 1.14-3.29 1.25-3.74 1.25s-2.6-.11-3.74-1.25c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0 .76.76 2.12.89 2.68.89.56 0 1.92-.13 2.68-.89.3-.29.77-.29 1.06 0 .29.29.29.77 0 1.06zm-.24-2.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "socials-card-box socials-box-6" })
  ] });
}
export {
  ContactPage as component
};
