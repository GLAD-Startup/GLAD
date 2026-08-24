import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { InsightPipelineCard } from "@/components/site/InsightPipelineCard";
import { articles, buildArticleHead } from "@/data/insights.data";

const article = articles.find((a) => a.slug === "ai-agent-vs-chatbot")!;

export const Route = createFileRoute("/insights/ai-agent-vs-chatbot")({
  head: () => buildArticleHead(article),
  component: AiAgentVsChatbotPage,
});

const comparisonMatrix = [
  {
    feature: "Primary Function",
    chatbot: "Conversational responses & text Q&A",
    agent: "Goal execution, problem solving & actions",
  },
  {
    feature: "Tool & API Calling",
    chatbot: "None or limited single-endpoint lookups",
    agent: "Dynamic multi-tool selection & sequencing",
  },
  {
    feature: "Multi-Step Planning",
    chatbot: "Single-turn or rigid multi-turn script",
    agent: "Autonomous loop (Plan → Act → Observe → Loop)",
  },
  {
    feature: "Database Write Access",
    chatbot: "Read-only or none",
    agent: "Authorized reads and transactional writes",
  },
  {
    feature: "Human-in-the-Loop",
    chatbot: "Live agent transfer fallback",
    agent: "Granular checkpoint approvals on actions",
  },
  {
    feature: "Failure Handling",
    chatbot: "Static fallback ('I do not understand')",
    agent: "Self-correction, query reform, retry logic",
  },
];

function AiAgentVsChatbotPage() {
  return (
    <ArticlePage article={article}>
      {/* Short Answer Callout */}
      <blockquote>
        <strong>AI agent vs chatbot:</strong> A chatbot is built to converse and retrieve text, whereas
        an AI agent is built to plan and execute multi-step actions using tools and APIs. While a
        customer support chatbot explains your refund policy, an AI agent can verify customer
        eligibility, initiate an order cancellation, trigger a payment gateway refund, and update your
        CRM without human intervention.
      </blockquote>

      <h2>What Is a Chatbot?</h2>
      <p>
        A chatbot is a conversational interface that maps incoming user messages to text responses. In
        modern implementations, chatbots use large language models (LLMs) augmented with{" "}
        <Link to="/insights/rag-vs-fine-tuning">Retrieval-Augmented Generation (RAG)</Link> to answer
        user questions based on private company documents.
      </p>
      <p>
        The defining architectural boundary of a chatbot is that it remains conversational. Its output
        is text or rich UI widgets presented to a human. It does not manipulate external state or trigger
        side effects across other software systems.
      </p>

      <h2>What Is an AI Agent?</h2>
      <p>
        An <Link to="/insights/what-is-ai-agent-development">AI agent</Link> is an autonomous software
        system where a language model functions as a central reasoning engine. Given an objective, the
        agent dynamically breaks the goal into sub-tasks, selects appropriate tools from a predefined
        catalog, executes those tools, observes the results, and loops until the objective is
        accomplished.
      </p>
      <p>
        AI agents possess state, memory, tool-calling schemas, and deterministic safety guardrails that
        permit them to perform complex work across multiple systems.
      </p>

      <h2>AI Agent vs Chatbot: Feature Comparison</h2>
      <p>
        Comparing the architectural capabilities highlights why building an agent requires
        significantly more rigorous software engineering than deploying a chatbot.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Capability</th>
              <th>Chatbot</th>
              <th>AI Agent</th>
            </tr>
          </thead>
          <tbody>
            {comparisonMatrix.map((row) => (
              <tr key={row.feature}>
                <td>
                  <strong>{row.feature}</strong>
                </td>
                <td>{row.chatbot}</td>
                <td>{row.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Real Business Examples: Information vs Action</h2>
      <p>
        Consider an e-commerce customer support scenario to understand the practical difference:
      </p>

      <h3>The Chatbot Scenario</h3>
      <p>
        <code>User: "What is your refund policy?"</code>
        <br />
        <code>Bot: "We accept refunds within 30 days of purchase for unused items. Please contact support@store.com to initiate your return."</code>
      </p>
      <p>
        The bot retrieves the correct policy document via RAG, but the human user still has to write an
        email and wait for human support to process the refund.
      </p>

      <h3>The AI Agent Scenario</h3>
      <p>
        <code>User: "Cancel order #8492 and refund my card."</code>
        <br />
        <code>Agent: Executes 7-step autonomous workflow ↓</code>
      </p>
      <ol>
        <li>Authenticates user session ID</li>
        <li>Queries order database for #8492</li>
        <li>Checks fulfillment status (Unshipped = Eligible)</li>
        <li>Calls warehouse API to cancel shipping label</li>
        <li>Calls Stripe API to issue refund transaction</li>
        <li>Updates PostgreSQL database status to 'Refunded'</li>
        <li>Sends confirmation email with receipt ID</li>
      </ol>

      <h2>When You DON'T Need an AI Agent</h2>
      <p>
        One of the most important engineering judgments is recognizing when{" "}
        <strong>not</strong> to use an AI agent. Because LLMs are probabilistic and non-deterministic,
        introducing an AI agent into a workflow where every step is 100% predictable adds unnecessary
        latency, token cost, and potential points of failure.
      </p>
      <p>
        <strong>Use Deterministic Automation Instead When:</strong>
      </p>
      <ul>
        <li>The business logic follows a strict "If X, then Y" formula without nuance.</li>
        <li>You are moving data between two APIs with structured JSON schemas.</li>
        <li>100% latency guarantees under 200ms are mandatory.</li>
        <li>
          Tools like <Link to="/services/business-automation">n8n workflows</Link> or standard backend
          cron jobs can execute the task reliably.
        </li>
      </ul>

      <h2>How Production AI Agents Are Engineered</h2>
      <p>
        Building a production-ready AI agent requires state machines and error handling frameworks such
        as LangGraph or CrewAI.
      </p>

      <InsightPipelineCard
        title="The Agentic Execution Loop"
        badge="STATE MACHINE TRACE"
        steps={[
          {
            step: "01",
            title: "User Goal Ingested",
            description: "Foundation LLM evaluates conversation/memory state & selects appropriate tool from registered catalog.",
            tag: "STATE EVAL",
            output: {
              status: "STATE_EVALUATED",
              latency: "18ms",
              data: {
                goal: "Reconcile June vendor invoices against bank ledger",
                state: "STATE_INIT",
                next_action: "TOOL_SELECTION_REQUIRED",
              },
            },
          },
          {
            step: "02",
            title: "Autonomous Tool Invocation",
            description: "Agent dispatches structured call to REST API, PostgreSQL Database, or pgvector RAG store.",
            tag: "TOOL DISPATCH",
            output: {
              status: "DISPATCHED",
              latency: "140ms",
              data: {
                selected_tool: "reconcile_invoices_sql",
                input_payload: { month: "2026-06", match_tolerance: 0.01 },
                endpoint: "internal_db_gateway",
              },
            },
          },
          {
            step: "03",
            title: "Observation & Schema Evaluation",
            description: "Agent evaluates returned JSON payload/error against termination criteria and state transitions.",
            tag: "OBSERVE",
            output: {
              status: "OBSERVED",
              latency: "45ms",
              data: {
                tool_output: { matched: 84, unmatched_discrepancies: 0 },
                state_transition: "GOAL_CRITERIA_SATISFIED",
              },
            },
          },
          {
            step: "04",
            title: "Cyclic State Transition or Final Result",
            description: "If goal incomplete -> Loop back to Step 01 with updated memory. If complete -> Return verified result to user.",
            tag: "CYCLIC LOOP",
            output: {
              status: "COMPLETED",
              latency: "12ms",
              data: {
                final_status: "SUCCESS_VERIFIED",
                loop_iterations: 1,
                summary: "All 84 vendor invoices verified and balanced to bank ledger. Zero discrepancies.",
              },
            },
          },
        ]}
      />

      <p>
        To learn how to engineer this loop from scratch, read our complete guide on{" "}
        <Link to="/insights/how-to-build-ai-agent-for-business">
          how to build an AI agent for your business
        </Link>
        .
      </p>

      <h2>AI Agent Security & Reliability</h2>
      <p>
        Because agents can take real actions, security cannot be an afterthought. Production agent
        engineering requires:
      </p>
      <ul>
        <li>
          <strong>Scoped Tool Permissions:</strong> Agents are given minimum required database
          permissions. Read tools are separated from write tools to prevent unintended modifications.
        </li>
        <li>
          <strong>Human Approval Checkpoints:</strong> High-stakes actions (e.g. wire transfers, mass
          emails, account deletions) pause the agent loop and require explicit administrator approval.
        </li>
      </ul>

      <h2>When to Partner with an AI Agent Engineering Studio</h2>
      <p>
        If your business has complex, multi-system operational workflows that require intelligent
        reasoning, tool integration, and enterprise security, GLAD Studio engineers production-grade AI
        agents that operate reliably at scale. Explore our{" "}
        <Link to="/services/ai-solutions">AI Agent Development Services</Link>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the difference between an AI agent and a chatbot?</h3>
      <p>
        A chatbot is designed primarily to converse, answer user queries, and provide static information,
        whereas an AI agent is autonomous software capable of planning tasks, calling external APIs,
        modifying databases, and taking business actions toward a specific goal. While a chatbot tells
        you how to do something, an AI agent actually completes it for you.
      </p>

      <h3>Is an AI agent better than a chatbot?</h3>
      <p>
        Neither is universally better; they serve different purposes. Chatbots excel at low-cost customer
        FAQs and basic text support, whereas AI agents are required when a system must interact with live
        ERPs, CRMs, or databases to perform complex multi-step tasks. Choosing the right architecture
        depends on whether your workflow requires conversation or action.
      </p>

      <h3>Can an AI agent take real business actions?</h3>
      <p>
        Yes, an AI agent can execute authorized actions such as issuing refunds, updating CRM records,
        sending emails, and querying SQL databases via structured tool-calling interfaces and API
        connectors. These actions are governed by strict parameter validation schemas and human approval
        gates.
      </p>

      <h3>When should a business use a chatbot instead of an agent?</h3>
      <p>
        A business should use a chatbot when the objective is purely informational, such as answering
        standard knowledge base questions, onboarding FAQs, or providing product recommendations without
        system write access. Chatbots are cheaper to deploy and introduce zero operational execution
        risk.
      </p>

      <h3>When should a business NOT use an AI agent?</h3>
      <p>
        A business should avoid AI agents when a workflow is strictly deterministic, 100% predictable,
        and better handled by traditional rule-based code or webhook integrations like Zapier or n8n. If
        an exact algorithm exists with zero ambiguity, traditional software engineering is faster,
        cheaper, and more reliable than invoking non-deterministic language models.
      </p>

      <h3>Can AI agents connect to third-party APIs?</h3>
      <p>
        Yes, AI agents use structured function schemas to call REST APIs, query PostgreSQL databases,
        trigger webhooks, and interact with external enterprise services like Stripe, Salesforce, or
        HubSpot.
      </p>
    </ArticlePage>
  );
}
