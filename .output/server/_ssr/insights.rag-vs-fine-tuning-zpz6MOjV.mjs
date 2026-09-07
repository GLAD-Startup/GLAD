import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { H as HeroBackground } from "./Background-DM8vUuC5.mjs";
import "../_libs/seroval.mjs";
import { o as Search, s as Clock, ab as Calendar, ac as CircleAlert, D as Database, S as ShieldCheck, Z as Zap, i as Layers, ae as GitBranch, c as ArrowRight, l as ChevronDown } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
const comparisonData = [{
  criterion: "Primary Purpose",
  rag: "Inject factual knowledge at query time",
  fineTuning: "Adapt style, tone, format, and behavior"
}, {
  criterion: "Knowledge Freshness",
  rag: "Instant (update database records immediately)",
  fineTuning: "Static (requires re-training on new data)"
}, {
  criterion: "Source Attribution",
  rag: "Direct citation of exact retrieved passages",
  fineTuning: "Black-box weights with no verifiable source"
}, {
  criterion: "Hallucination Risk",
  rag: "Low (when constrained by prompt context)",
  fineTuning: "Moderate to High on unfamiliar queries"
}, {
  criterion: "Training Data Needed",
  rag: "Unstructured documents / raw text",
  fineTuning: "Hundreds to thousands of curated (Prompt, Completion) pairs"
}, {
  criterion: "Upfront Compute Cost",
  rag: "Low (vector embedding generation)",
  fineTuning: "Moderate to High (GPU training runs)"
}, {
  criterion: "Per-Query Token Cost",
  rag: "Higher (injected context increases prompt size)",
  fineTuning: "Lower (shorter prompts with baked-in instructions)"
}, {
  criterion: "Best Use Cases",
  rag: "Enterprise search, customer support, contract Q&A",
  fineTuning: "Code generation, custom JSON formatting, domain jargon"
}];
const faqs = [{
  q: "What is the difference between RAG and fine-tuning?",
  a: "RAG provides an LLM with external knowledge at query time by retrieving relevant documents from a vector database, whereas fine-tuning alters the internal model weights using a training dataset to teach specific formatting, tone, or specialized domain behavior. In short: RAG gives the model an open-book exam, while fine-tuning teaches the model how to study."
}, {
  q: "When should a business choose RAG over fine-tuning?",
  a: "A business should choose RAG when proprietary information changes frequently, when exact source citations are required, when training data is limited, or when budgets require avoiding continuous model re-training expenses. RAG is the standard choice for 85% of enterprise knowledge applications."
}, {
  q: "When is fine-tuning preferable to RAG?",
  a: "Fine-tuning is preferable when you need a model to consistently adhere to a unique output schema, speak with a distinct brand persona, master a custom programming DSL, or minimize prompt token overhead on repetitive tasks where a smaller 8B model can match a 70B model's style."
}, {
  q: "Can you combine RAG and fine-tuning in a single architecture?",
  a: "Yes, a hybrid architecture uses fine-tuning to teach a compact, low-cost model how to structure responses and reason, while using RAG to supply real-time facts and private company context at query time. This combination yields both high domain compliance and up-to-date factual accuracy."
}, {
  q: "Does fine-tuning eliminate hallucinations?",
  a: "No, fine-tuning alone does not eliminate hallucinations because the model can still generate false statements with high confidence. RAG is significantly more effective at preventing hallucinations because it grounds answers in retrieved source texts and instructs the model to state when information is missing."
}, {
  q: "Which is more expensive: RAG or fine-tuning?",
  a: "Fine-tuning generally incurs higher upfront data curation and GPU compute expenses, whereas RAG involves ongoing vector database storage and per-query retrieval infrastructure costs. For a full breakdown, explore our guide on AI development cost in India."
}];
function RagVsFineTuningArticlePage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-xs text-muted-foreground font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "hover:text-foreground transition-colors", children: "Insights" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-semibold", "aria-current": "page", children: "RAG vs Fine-Tuning" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-3.5" }),
              "LLM Systems Architecture"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
              "13 min read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3" }),
              "February 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground leading-[1.15]", children: "RAG vs Fine-Tuning: Which Approach Is Right for Your AI Application?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex items-center gap-3 border-b border-border/80 pb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold font-mono text-foreground", children: "SR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: "Somesh Rajput" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "CTO & Head of Engineering at GLAD Studio" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mt-10 space-y-10 text-base md:text-lg leading-relaxed text-foreground/90 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 rounded-2xl border-2 border-border bg-surface/50 shadow-md space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase font-bold tracking-wider text-[#e5b84c] flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Short Answer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-foreground font-medium leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RAG vs fine-tuning:" }),
              " Retrieval-Augmented Generation (RAG) injects external factual knowledge into the model's prompt at query time, while fine-tuning modifies the neural network's internal weights to adapt its behavior, syntax, or tone. If you need the model to answer questions from private, dynamic documents with exact citations, choose ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RAG" }),
              ". If you need a model to master a custom JSON output format, follow strict stylistic guidelines, or use specialized domain syntax without bloated system prompts, choose ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "fine-tuning" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "What Is RAG (Retrieval-Augmented Generation)?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "RAG is an architectural pattern that connects a general-purpose language model to an external knowledge store (such as a PostgreSQL database with the pgvector extension). Instead of expecting the LLM to memorize all facts during pre-training, the system dynamically retrieves relevant information whenever a user submits a query." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl border border-border surface-card font-mono text-xs md:text-sm space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase font-bold tracking-wider text-[#e5b84c] font-sans mb-1", children: "The Production RAG Sequence" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "1. User Question Ingested" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: '"What is our corporate policy on remote expense stipends?"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "2. Embedding & Vector Retrieval" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Query converted to vector → pgvector performs hybrid search across policy chunks." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "3. Context Construction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Top-k reranked policy excerpts appended to prompt context." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "4. Grounded LLM Response" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#10b981]", children: "LLM generates answer citing Section 4.2 of the Employee Handbook with zero hallucination." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "What Is Fine-Tuning?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Fine-tuning is the process of taking a pre-trained base model (such as Llama 3 or Mistral) and running an additional supervised training phase on a curated dataset of demonstration pairs (e.g. hundreds or thousands of [Instruction, Input, Desired Output] examples)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "Fine-tuning adjusts the model's internal attention weights and parameter matrices. It is ideal for teaching the model ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "how to act" }),
              " rather than giving it ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "new facts to memorize" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "RAG vs Fine-Tuning: Detailed Comparison" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Understanding the trade-offs between dynamic knowledge retrieval and parameter adaptation is essential for choosing the right architecture:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs md:text-sm border-collapse border border-border surface-card rounded-xl overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-surface border-b border-border text-foreground font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Evaluation Criterion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "RAG (Retrieval)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5", children: "Fine-Tuning (Weights)" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60 text-muted-foreground", children: comparisonData.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5 font-semibold text-foreground", children: row.criterion }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5 text-foreground", children: row.rag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5", children: row.fineTuning })
              ] }, row.criterion)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "When Should You Choose RAG?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Retrieval-Augmented Generation is the optimal technical choice when:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dynamic or Real-Time Data" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your knowledge base updates hourly or daily (e.g. inventory levels, legal briefs, customer tickets). Updating RAG requires only inserting a new row in pgvector." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Auditability & Source Citations" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Users need to click and verify the exact document paragraph from which the answer was synthesized." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Zero Retraining Downtime" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "You cannot afford lengthy GPU training pipelines or model re-evaluations whenever corporate policies change." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-5 rounded-xl border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-foreground text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-4 text-[#e5b84c]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Role-Based Data Access" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Different users have different permissions. RAG vector filters enforce that interns cannot retrieve executive salary records." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "When Should You Choose Fine-Tuning?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Fine-tuning becomes necessary when prompt engineering alone cannot reliably enforce complex behavioral patterns:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground pl-4 list-disc", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Strict Formatting & Schema Adherence:" }),
                " ",
                "The model must return complex JSON or proprietary AST syntax with 100% syntactic validity on every call."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Tone & Persona Replication:" }),
                " You need a model to write in the exact voice, style, and vocabulary of a specific brand or specialist without 1,000-word system prompts."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Latency & Token Cost Optimization:" }),
                " By baking instructions into weights, you can replace massive system prompts with a compact 5-word instruction, saving 80% on prompt token costs."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Domain Jargon & Specialized Code:" }),
                " ",
                "Teaching smaller models to understand unique medical ontologies, proprietary coding languages, or obscure acronyms."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/30 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e5b84c]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Advanced Architecture" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "The Hybrid Solution: RAG + Fine-Tuning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: "In production enterprise systems, RAG and fine-tuning are frequently combined rather than treated as mutual exclusives." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background border border-border space-y-2 text-xs md:text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block font-mono", children: "The Production Hybrid Pattern:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal pl-4 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fine-Tuning:" }),
                  " Used to train a small, fast 8B open-source model how to structure its reasoning and format output JSON perfectly."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RAG:" }),
                  " Used at runtime to fetch the latest customer records, contracts, and inventory balances to feed into the fine-tuned model."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "This hybrid approach yields maximum factual accuracy with minimal latency and low token overhead." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "The Three Tiers: Prompting vs RAG vs Fine-Tuning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Before committing engineering resources to fine-tuning or vector databases, follow the progressive complexity ladder:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3 pt-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-surface/20 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block text-sm", children: "Tier 1: Prompting" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Few-shot examples and clear instructions inside standard API calls. Test this first." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-surface/20 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block text-sm", children: "Tier 2: RAG" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Add pgvector retrieval when prompt context exceeds token limits or data changes frequently." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-surface/20 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground block text-sm", children: "Tier 3: Fine-Tuning" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Adjust model weights when small models fail to follow formatting or tone reliably." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Cost Considerations: RAG vs Fine-Tuning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Fine-tuning incurs upfront engineering costs for dataset cleaning, validation, and GPU compute hours. RAG incurs ongoing operational costs for vector database hosting and slightly larger prompt token payloads." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "For a complete economic analysis and budget breakdown for Indian and global enterprises, read our guide on",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights/ai-development-cost-india", className: "text-[#e5b84c] underline hover:text-foreground transition-colors", children: "AI development cost in India" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-8 rounded-2xl border-2 border-border bg-surface/40 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Custom AI Architecture" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Architect Your AI Stack with GLAD Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: "GLAD Studio helps technology teams design the right AI architecture—whether that means engineering enterprise RAG pipelines, fine-tuning task-specific models, or building autonomous multi-agent workflows." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/ai-solutions", className: "btn-primary text-xs md:text-sm inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore AI Solutions & Architecture Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mt-1", children: "RAG vs Fine-Tuning Q&A" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card rounded-xl border border-border overflow-hidden transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : idx), className: "w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer", "aria-expanded": isOpen, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#e5b84c]" : "text-muted-foreground"}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                  opacity: 0,
                  height: 0
                }, animate: {
                  opacity: 1,
                  height: "auto"
                }, exit: {
                  opacity: 0,
                  height: 0
                }, transition: {
                  duration: 0.2
                }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3", children: faq.a }) }) })
              ] }, faq.q);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold font-display text-foreground mb-4", children: "Related AI Engineering Guides" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/what-is-ai-agent-development", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Comprehensive Guide" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "What Is AI Agent Development? Practical Guide →" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/how-to-build-ai-agent-for-business", className: "surface-card p-5 rounded-xl border border-border hover:border-foreground/40 transition-all group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#e5b84c]", children: "Implementation Guide" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground group-hover:text-[#e5b84c] transition-colors mt-1", children: "How to Build an AI Agent for Your Business →" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  RagVsFineTuningArticlePage as component
};
