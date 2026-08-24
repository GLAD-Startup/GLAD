import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Copy, Play, Pause, RotateCcw, ChevronDown, Activity, Sparkles, CheckCircle2 } from "lucide-react";

export interface StepOutput {
  status?: string;
  latency?: string;
  type?: "json" | "query" | "log" | "event";
  data: string | Record<string, unknown>;
}

export interface PipelineStep {
  /** Step number, title, or label (e.g. "01", "02") */
  step?: string | number;
  /** Main step title or action summary */
  title?: string;
  /** Detailed description or sub-steps */
  description?: string;
  /** Optional status or badge (e.g. "TOOL CALL", "RAG QUERY", "SCHEMA") */
  tag?: string;
  /** Optional nested code snippet */
  code?: string;
  /** Concrete runtime output / observation payload */
  output?: StepOutput;
}

export interface InsightPipelineCardProps {
  /** Title of the architecture / sequence flow, e.g. "Autonomous Lead Enrichment Pipeline" */
  title?: string;
  /** Telemetry tag or category badge, e.g. "PIPELINE SPECIFICATION" */
  badge?: string;
  /** Structured steps array */
  steps?: PipelineStep[];
  /** Raw text fallback */
  rawText?: string;
  /** Extra CSS classes */
  className?: string;
}

/** Default fallback runtime output generator based on step content */
function getDefaultOutputForStep(step: PipelineStep, index: number): StepOutput {
  const title = (step.title || "").toLowerCase();
  const tag = (step.tag || "").toUpperCase();

  if (tag.includes("INGEST") || title.includes("inbound") || title.includes("goal")) {
    return {
      status: "200 OK",
      latency: "12ms",
      type: "json",
      data: {
        event: "webhook.payload_received",
        session_id: "ses_9a48f2",
        source: "frontend_submission",
        payload: {
          company: "Meridian Labs",
          domain: "meridian.io",
          contact_email: "alex@meridian.io",
          intent: "Enterprise AI Workflow",
        },
      },
    };
  }

  if (tag.includes("TOOL") || title.includes("search_web") || title.includes("tool selection")) {
    return {
      status: "EXECUTED",
      latency: "340ms",
      type: "json",
      data: {
        tool: "search_web",
        query: "Meridian Labs funding employees tech stack",
        result: {
          headcount: "85-120",
          funding_stage: "Series B ($18M)",
          tech_stack: ["Next.js", "PostgreSQL", "LangChain", "AWS"],
          growth_signal: "Hiring 14 engineering roles",
        },
      },
    };
  }

  if (tag.includes("RAG") || tag.includes("PGVECTOR") || tag.includes("INDEX") || title.includes("vector") || title.includes("icp")) {
    return {
      status: "TOP MATCH",
      latency: "48ms",
      type: "json",
      data: {
        vector_index: "pgvector_hnsw_icp_embeddings",
        similarity_score: 0.942,
        matched_cluster: "Tier-1 High Growth SaaS",
        criteria_met: ["Headcount > 50", "Modern Cloud Stack", "Active Expansion"],
      },
    };
  }

  if (tag.includes("PYDANTIC") || tag.includes("SCHEMA") || title.includes("fit score") || title.includes("calculate")) {
    return {
      status: "VALIDATED",
      latency: "8ms",
      type: "json",
      data: {
        schema: "LeadQualificationPayload",
        fit_score: 92,
        confidence: 0.98,
        qualification_tier: "A+",
        requires_human_review: false,
      },
    };
  }

  if (tag.includes("DISPATCH") || tag.includes("COMPLETION") || title.includes("slack") || title.includes("database")) {
    return {
      status: "DISPATCHED",
      latency: "62ms",
      type: "json",
      data: {
        database_write: "INSERT INTO leads (id, score) VALUES ('ld_948', 92) -> SUCCESS",
        slack_webhook: "POST #sales-alerts -> Delivered (200 OK)",
        notification_preview: "🚀 High-Value Opportunity: Meridian Labs (Fit: 92/100)",
      },
    };
  }

  return {
    status: "COMPLETE",
    latency: `${20 + index * 15}ms`,
    type: "log",
    data: {
      step_index: index + 1,
      state: "TRANSITION_SUCCESS",
      trace_id: `trc_${Math.random().toString(36).substring(2, 8)}`,
    },
  };
}

/** Helper function to highlight tool calls, functions, and keywords in technical text */
function formatTokenizedText(text: string): React.ReactNode {
  const tokenRegex = /(\b[a-zA-Z0-9_]+(?:\(\)|\b(?=\s*->|\s*↓))|[a-zA-Z_][a-zA-Z0-9_]*\(\)|->|↓|PostgreSQL|pgvector|Pydantic|Slack webhook|FastAPI|LangGraph|LangSmith|OpenTelemetry|BM25|HNSW|IVFFlat)/g;

  const parts = text.split(tokenRegex);
  return parts.map((part, idx) => {
    if (!part) return null;

    if (part.endsWith("()") || ["search_web()", "query_icp_rag()", "send_slack_alert()", "query_folios_sql()"].includes(part)) {
      return (
        <span
          key={idx}
          className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded text-[12px] font-mono font-medium bg-[#1B2720] text-[#4ADE80] border border-[#2D5A3C]/50 shadow-xs"
        >
          {part}
        </span>
      );
    }

    if (part === "->" || part === "↓") {
      return (
        <span key={idx} className="inline-block px-1 font-bold text-[var(--color-brass,#C8A84E)]">
          {part}
        </span>
      );
    }

    if (["PostgreSQL", "pgvector", "Pydantic", "LangGraph", "LangSmith", "FastAPI", "HNSW", "IVFFlat", "BM25"].includes(part)) {
      return (
        <span
          key={idx}
          className="inline-flex items-center px-1.5 py-0.2 mx-0.5 rounded text-[12px] font-mono text-[#93C5FD] bg-[#16233B] border border-[#25426B]/60"
        >
          {part}
        </span>
      );
    }

    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

/** Parses raw plaintext sequence into structured steps */
function parseRawSequence(raw: string): { parsedTitle?: string; steps: PipelineStep[] } {
  const lines = raw.trim().split("\n").map((l) => l.trim()).filter(Boolean);
  let parsedTitle: string | undefined;
  const steps: PipelineStep[] = [];

  let currentStep: PipelineStep | null = null;

  for (const line of lines) {
    if ((line.startsWith("The ") && line.endsWith(":")) || (line.endsWith("Sequence") || line.endsWith("Loop"))) {
      parsedTitle = line.replace(/:$/, "");
      continue;
    }

    const numberedMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (numberedMatch) {
      if (currentStep) steps.push(currentStep);
      const num = numberedMatch[1];
      const rest = numberedMatch[2];

      if (rest.includes(" - ") || rest.includes(" — ")) {
        const [t, d] = rest.split(/\s+[-—]\s+/);
        currentStep = { step: num.padStart(2, "0"), title: t, description: d };
      } else {
        currentStep = { step: num.padStart(2, "0"), title: rest };
      }
      continue;
    }

    if (line.startsWith("↓") || line.startsWith("->") || line.startsWith("•") || line.startsWith("-")) {
      if (currentStep) {
        currentStep.description = currentStep.description ? `${currentStep.description} ${line}` : line;
      } else {
        steps.push({ step: "→", title: line });
      }
      continue;
    }

    if (line.includes("->") || line.includes("↓")) {
      if (currentStep) steps.push(currentStep);
      currentStep = null;
      steps.push({ step: "FLOW", title: line });
      continue;
    }

    if (currentStep) {
      currentStep.description = currentStep.description ? `${currentStep.description}\n${line}` : line;
    } else {
      steps.push({ step: "•", title: line });
    }
  }

  if (currentStep) steps.push(currentStep);
  return { parsedTitle, steps };
}

export function InsightPipelineCard({
  title,
  badge = "PIPELINE SPECIFICATION",
  steps: explicitSteps,
  rawText,
  className = "",
}: InsightPipelineCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = React.useState(false);
  
  // Independent simulation states
  const [isSimulating, setIsSimulating] = React.useState(false);
  const [simulatedStepIndex, setSimulatedStepIndex] = React.useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = React.useState<Set<number>>(new Set());
  
  // User manual interaction state (clicking to inspect an output)
  const [expandedStepIndex, setExpandedStepIndex] = React.useState<number | null>(null);
  const [hoveredStepIndex, setHoveredStepIndex] = React.useState<number | null>(null);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  // Compute final steps & display title
  const { parsedTitle, steps: derivedSteps } = React.useMemo(() => {
    if (explicitSteps && explicitSteps.length > 0) {
      return { parsedTitle: title, steps: explicitSteps };
    }
    if (rawText) {
      return parseRawSequence(rawText);
    }
    return { parsedTitle: title, steps: [] };
  }, [explicitSteps, rawText, title]);

  const displayTitle = title || parsedTitle || "Architecture Flow";
  const steps = explicitSteps || derivedSteps;

  // Raw text string representation for copy button
  const fullTextToCopy = React.useMemo(() => {
    if (rawText) return rawText.trim();
    return steps
      .map((s, idx) => {
        const num = s.step || idx + 1;
        const main = s.title || "";
        const desc = s.description ? `\n   ${s.description}` : "";
        return `${num}. ${main}${desc}`;
      })
      .join("\n");
  }, [rawText, steps]);

  // Simulation execution loop
  React.useEffect(() => {
    if (!isSimulating || steps.length === 0) {
      return;
    }

    // Step progression interval
    const interval = setInterval(() => {
      setSimulatedStepIndex((prev) => {
        const current = prev === null ? 0 : prev;
        
        // Mark current step as completed
        setCompletedSteps((prevCompleted) => {
          const nextSet = new Set(prevCompleted);
          nextSet.add(current);
          return nextSet;
        });
        
        // If we reached the end of the pipeline
        if (current >= steps.length - 1) {
          setIsSimulating(false);
          return current;
        }

        const nextStep = current + 1;
        // Automatically open the current executing step's output
        setExpandedStepIndex(nextStep);
        return nextStep;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isSimulating, steps.length]);

  const handleStartFresh = () => {
    setCompletedSteps(new Set());
    setSimulatedStepIndex(0);
    setExpandedStepIndex(0);
    setIsSimulating(true);
  };

  const handleResumeSimulation = () => {
    if (simulatedStepIndex === null) {
      handleStartFresh();
      return;
    }
    setExpandedStepIndex(simulatedStepIndex);
    setIsSimulating(true);
  };

  const handlePauseSimulation = () => {
    setIsSimulating(false);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setSimulatedStepIndex(null);
    setCompletedSteps(new Set());
    setExpandedStepIndex(null);
  };

  const handleStepClick = (idx: number) => {
    // Clicking a step expands/collapses its runtime output without hijacking simulation
    setExpandedStepIndex((prev) => (prev === idx ? null : idx));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullTextToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const allCompleted = completedSteps.size === steps.length && steps.length > 0;
  const isPausedMidway = simulatedStepIndex !== null && !isSimulating && !allCompleted;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative my-8 w-full rounded-[14px] border border-[#272D36] bg-[#111418] text-[#F2EFE8] shadow-2xl overflow-hidden group transition-all duration-300 hover:border-[#8A6D0B]/50 ${className}`}
      style={{
        boxShadow: "0 14px 40px -12px rgba(0,0,0,0.65), 0 0 25px -5px rgba(138, 109, 11, 0.08)",
      }}
    >
      {/* 1. Precision Corner Tick Marks */}
      <span className="pointer-events-none absolute top-2 left-2 text-[10px] font-mono text-[#4A5568] select-none">+</span>
      <span className="pointer-events-none absolute top-2 right-2 text-[10px] font-mono text-[#4A5568] select-none">+</span>
      <span className="pointer-events-none absolute bottom-2 left-2 text-[10px] font-mono text-[#4A5568] select-none">+</span>
      <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] font-mono text-[#4A5568] select-none">+</span>

      {/* 2. Ambient Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 168, 78, 0.07), transparent 70%)`,
        }}
      />

      {/* 3. Header Bar */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222832] bg-[#161A20] px-5 py-3.5">
        {/* Left: Telemetry Badge & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSimulating ? "bg-[#10B981]" : allCompleted ? "bg-[#10B981]" : "bg-[var(--color-brass,#C8A84E)]"}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isSimulating ? "bg-[#10B981]" : allCompleted ? "bg-[#10B981]" : "bg-[var(--color-brass,#C8A84E)]"}`} />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--color-brass,#C8A84E)] uppercase">
              {badge}
            </span>
          </div>

          <div className="hidden sm:block h-3.5 w-px bg-[#2C3440]" />

          <h3 className="font-display font-medium text-[15px] text-[#F2EFE8] tracking-tight">
            {displayTitle}
          </h3>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {/* Simulate / Pause / Resume / Replay Button */}
          {allCompleted ? (
            <button
              type="button"
              onClick={handleStartFresh}
              title="Replay flow simulation"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-mono text-[11px] font-medium bg-[#1B2B23] text-[#4ADE80] hover:bg-[#22382D] border border-[#10B981]/50 cursor-pointer transition-all active:scale-95"
            >
              <RotateCcw className="h-3 w-3" />
              <span>REPLAY FLOW</span>
            </button>
          ) : isSimulating ? (
            <button
              type="button"
              onClick={handlePauseSimulation}
              title="Pause execution trace"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-mono text-[11px] font-medium bg-[#0F6E4C] text-[#FEFDFA] shadow-[0_0_14px_rgba(15,110,76,0.5)] border border-[#10B981]/60 cursor-pointer transition-all active:scale-95"
            >
              <Pause className="h-3 w-3" />
              <span>PAUSE (STEP {((simulatedStepIndex ?? 0) + 1)}/{steps.length})</span>
            </button>
          ) : isPausedMidway ? (
            <button
              type="button"
              onClick={handleResumeSimulation}
              title="Resume execution trace"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-mono text-[11px] font-medium bg-[#1F252E] text-[#4ADE80] hover:text-[#FFFFFF] hover:bg-[#28303C] border border-[#10B981]/40 cursor-pointer transition-all active:scale-95"
            >
              <Play className="h-3 w-3 text-[#4ADE80] fill-current" />
              <span>RESUME (STEP {((simulatedStepIndex ?? 0) + 1)}/{steps.length})</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleStartFresh}
              title="Run live execution simulation"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-mono text-[11px] font-medium bg-[#1F252E] text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-[#28303C] border border-[#2D3644] cursor-pointer transition-all active:scale-95"
            >
              <Play className="h-3 w-3 text-[var(--color-brass,#C8A84E)] fill-current" />
              <span>SIMULATE FLOW</span>
            </button>
          )}

          {/* Reset button (if paused midway or completed) */}
          {(simulatedStepIndex !== null && !isSimulating) && (
            <button
              type="button"
              onClick={handleResetSimulation}
              title="Reset simulation state"
              className="inline-flex items-center justify-center p-1.5 rounded-[6px] bg-[#1F252E] hover:bg-[#28303C] text-[#94A3B8] hover:text-[#F2EFE8] border border-[#2D3644] transition-all cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
            </button>
          )}

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            title="Copy specification"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#1F252E] hover:bg-[#28303C] text-[#CBD5E1] hover:text-[#FFFFFF] border border-[#2D3644] font-mono text-[11px] font-medium transition-all duration-200 cursor-pointer active:scale-95"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  className="inline-flex items-center gap-1 text-[#4ADE80]"
                >
                  <Check className="h-3 w-3" />
                  <span>COPIED</span>
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-1"
                >
                  <Copy className="h-3 w-3" />
                  <span>COPY</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* 4. Sequence Body with Continuous Vertical Flow Track */}
      <div className="relative p-4 sm:p-6 font-mono">
        {/* Continuous Background Vertical Guideline */}
        <div className="absolute left-[31px] sm:left-[39px] top-7 bottom-7 w-px bg-gradient-to-b from-[#2E3744] via-[#2E3744] to-transparent pointer-events-none" />

        <div className="space-y-3">
          {steps.map((step, idx) => {
            const isExecuting = isSimulating && simulatedStepIndex === idx;
            const isStepCompleted = completedSteps.has(idx);
            const isExpanded = expandedStepIndex === idx;
            const isHovered = hoveredStepIndex === idx;
            const isFlowBadge = step.step === "FLOW" || step.step === "→";
            
            const outputData = step.output || getDefaultOutputForStep(step, idx);

            return (
              <motion.div
                key={idx}
                layout
                onClick={() => handleStepClick(idx)}
                onMouseEnter={() => setHoveredStepIndex(idx)}
                onMouseLeave={() => setHoveredStepIndex(null)}
                className={`relative rounded-[10px] p-3.5 sm:p-4 transition-all duration-200 border break-words cursor-pointer select-none ${
                  isExecuting
                    ? "bg-[#16221D] border-[#10B981] shadow-[0_0_24px_rgba(16,185,129,0.22)] ring-1 ring-[#10B981]/50"
                    : isExpanded
                    ? "bg-[#181E26] border-[#8A6D0B]/80 shadow-[0_0_24px_rgba(138,109,11,0.18)] ring-1 ring-[#8A6D0B]/40"
                    : isStepCompleted
                    ? "bg-[#141A18]/90 border-[#22382D] hover:bg-[#18221E] hover:border-[#2E4A3B]"
                    : isHovered
                    ? "bg-[#181E27] border-[#384456]"
                    : "bg-[#14181F]/70 border-[#222934] hover:bg-[#181E27] hover:border-[#323C4C]"
                }`}
              >
                {/* Active Executing Beam Indicator */}
                {isExecuting && (
                  <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-gradient-to-b from-[#10B981] via-[#4ADE80] to-[#10B981] animate-pulse" />
                )}

                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  {/* Step Node Marker */}
                  {!isFlowBadge && step.step && (
                    <div className="relative z-10 shrink-0">
                      <span
                        className={`inline-flex items-center justify-center min-w-[30px] h-7 px-2 rounded-[6px] font-mono text-[11px] font-bold tracking-tight transition-all duration-200 ${
                          isExecuting
                            ? "bg-[#10B981] text-[#FEFDFA] shadow-[0_0_14px_rgba(16,185,129,0.7)] scale-105"
                            : isStepCompleted
                            ? "bg-[#173024] text-[#4ADE80] border border-[#235339]"
                            : isExpanded
                            ? "bg-[var(--color-brass,#8A6D0B)] text-[#FEFDFA] shadow-[0_0_12px_rgba(138,109,11,0.5)]"
                            : "bg-[#1D232C] text-[#94A3B8] border border-[#2D3644]"
                        }`}
                      >
                        {isStepCompleted && !isExecuting ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#4ADE80]" />
                        ) : (
                          step.step
                        )}
                      </span>
                    </div>
                  )}

                  {/* Step Main Content */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-[#F1F5F9] font-medium text-[13.5px] sm:text-[14px] leading-relaxed break-words">
                        {formatTokenizedText(step.title || "")}
                      </div>

                      {/* Expand / Collapse Indicator */}
                      <button
                        type="button"
                        className="shrink-0 p-1 text-[#64748B] hover:text-[#CBD5E1] transition-colors"
                        title={isExpanded ? "Collapse output" : "Expand output payload"}
                      >
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180 text-[#C8A84E]" : ""}`} />
                      </button>
                    </div>

                    {step.description && (
                      <div className="text-[12.5px] sm:text-[13px] text-[#94A3B8] leading-relaxed pt-1.5 border-t border-[#232A36] break-words whitespace-pre-wrap">
                        {formatTokenizedText(step.description)}
                      </div>
                    )}

                    {step.code && (
                      <div className="mt-2 p-2.5 rounded-[6px] bg-[#0B0E12] text-[#A7F3D0] text-[12px] font-mono border border-[#1E2734]">
                        <code>{step.code}</code>
                      </div>
                    )}

                    {/* 5. Live Runtime Output Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={shouldReduceMotion ? undefined : { opacity: 1, height: "auto" }}
                          exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden mt-3 pt-2"
                        >
                          <div className="rounded-[8px] bg-[#090B0E] border border-[#1E2632] p-3 shadow-inner">
                            {/* Output Header */}
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#18202A] text-[11px] font-mono">
                              <div className="flex items-center gap-1.5 text-[#38BDF8]">
                                <Sparkles className="h-3 w-3 text-[#38BDF8]" />
                                <span className="font-semibold uppercase tracking-wider">RUNTIME OBSERVATION</span>
                              </div>

                              <div className="flex items-center gap-2">
                                {outputData.latency && (
                                  <span className="text-[#64748B] text-[10.5px]">
                                    {outputData.latency}
                                  </span>
                                )}
                                {outputData.status && (
                                  <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-[#112A1F] text-[#4ADE80] border border-[#1D4A34]">
                                    {outputData.status}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Output Payload JSON / Log */}
                            <pre className="m-0 p-0 bg-transparent border-0 text-[12px] font-mono text-[#E2E8F0] leading-relaxed overflow-x-hidden whitespace-pre-wrap break-words">
                              <code>
                                {typeof outputData.data === "string"
                                  ? outputData.data
                                  : JSON.stringify(outputData.data, null, 2)}
                              </code>
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Technical Tag on the Right */}
                  {step.tag && (
                    <div className="shrink-0 self-start hidden sm:block">
                      <span className={`inline-block px-2.5 py-1 rounded-[5px] text-[10.5px] font-mono font-medium uppercase tracking-wider border ${
                        isExecuting
                          ? "text-[#4ADE80] bg-[#112A1F] border-[#1D4A34]"
                          : isStepCompleted
                          ? "text-[#A7F3D0] bg-[#14221C] border-[#223F30]"
                          : "text-[#A0AEC0] bg-[#19202A] border-[#283240]"
                      }`}>
                        {step.tag}
                      </span>
                    </div>
                  )}

                  {/* Live Simulation Pulse Indicator */}
                  {isExecuting && (
                    <div className="shrink-0 self-start flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-wider text-[#4ADE80] bg-[#0E3523] px-2 py-1 rounded-[5px] border border-[#10B981]/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                      <Activity className="h-3 w-3 animate-pulse" />
                      EXECUTING
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 5. Minimalist Blueprint Telemetry Footer */}
      <div className="flex items-center justify-between border-t border-[#202630] bg-[#12161C] px-5 py-2.5 text-[11px] font-mono text-[#64748B]">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${isSimulating ? "bg-[#10B981] animate-ping" : allCompleted ? "bg-[#10B981]" : "bg-[#10B981]"}`} />
          <span>{isSimulating ? "TRACE IN PROGRESS..." : allCompleted ? "FLOW COMPLETED (ALL NODES VALIDATED)" : "SPECIFICATION VERIFIED"}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{steps.length} NODES</span>
          <span className="hidden sm:inline">CLICK STEP TO INSPECT PAYLOAD</span>
        </div>
      </div>
    </motion.div>
  );
}
