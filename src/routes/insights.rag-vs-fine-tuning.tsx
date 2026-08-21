import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { articles, buildArticleHead } from "@/data/insights.data";

const article = articles.find((a) => a.slug === "rag-vs-fine-tuning")!;

export const Route = createFileRoute("/insights/rag-vs-fine-tuning")({
  head: () => buildArticleHead(article),
  component: RagVsFineTuningPage,
});

const comparisonData = [
  {
    criterion: "Primary Purpose",
    rag: "Inject factual knowledge at query time",
    fineTuning: "Adapt style, tone, format, and behavior",
  },
  {
    criterion: "Knowledge Freshness",
    rag: "Instant (update database records immediately)",
    fineTuning: "Static (requires re-training on new data)",
  },
  {
    criterion: "Source Attribution",
    rag: "Direct citation of exact retrieved passages",
    fineTuning: "Black-box weights with no verifiable source",
  },
  {
    criterion: "Hallucination Risk",
    rag: "Low (when constrained by prompt context)",
    fineTuning: "Moderate to High on unfamiliar queries",
  },
  {
    criterion: "Training Data Needed",
    rag: "Unstructured documents / raw text",
    fineTuning: "Hundreds to thousands of curated (Prompt, Completion) pairs",
  },
  {
    criterion: "Upfront Compute Cost",
    rag: "Low (vector embedding generation)",
    fineTuning: "Moderate to High (GPU training runs)",
  },
  {
    criterion: "Per-Query Token Cost",
    rag: "Higher (injected context increases prompt size)",
    fineTuning: "Lower (shorter prompts with baked-in instructions)",
  },
  {
    criterion: "Best Use Cases",
    rag: "Enterprise search, customer support, contract Q&A",
    fineTuning: "Code generation, custom JSON formatting, domain jargon",
  },
];

function RagVsFineTuningPage() {
  return (
    <ArticlePage article={article}>
      {/* Short Answer Callout */}
      <blockquote>
        <strong>RAG vs fine-tuning:</strong> Retrieval-Augmented Generation (RAG) injects external
        factual knowledge into the model's prompt at query time, while fine-tuning modifies the neural
        network's internal weights to adapt its behavior, syntax, or tone. If you need the model to
        answer questions from private, dynamic documents with exact citations, choose <strong>RAG</strong>.
        If you need a model to master a custom JSON output format, follow strict stylistic guidelines,
        or use specialized domain syntax without bloated system prompts, choose <strong>fine-tuning</strong>.
      </blockquote>

      <h2>What Is RAG (Retrieval-Augmented Generation)?</h2>
      <p>
        RAG is an architectural pattern that connects a general-purpose language model to an external
        knowledge store (such as a PostgreSQL database with the pgvector extension). Instead of
        expecting the LLM to memorize all facts during pre-training, the system dynamically retrieves
        relevant information whenever a user submits a query.
      </p>

      <pre>
        <code>
{`The Production RAG Sequence
1. User Question Ingested
   "What is our corporate policy on remote expense stipends?"
2. Embedding & Vector Retrieval
   Query converted to vector -> pgvector performs hybrid search across policy chunks.
3. Context Construction
   Top-k reranked policy excerpts appended to prompt context.
4. Grounded LLM Response
   LLM generates answer citing Section 4.2 of the Employee Handbook with zero hallucination.`}
        </code>
      </pre>

      <h2>What Is Fine-Tuning?</h2>
      <p>
        Fine-tuning is the process of taking a pre-trained base model (such as Llama 3 or Mistral) and
        running an additional supervised training phase on a curated dataset of demonstration pairs
        (e.g. hundreds or thousands of [Instruction, Input, Desired Output] examples).
      </p>
      <p>
        Fine-tuning adjusts the model's internal attention weights and parameter matrices. It is ideal
        for teaching the model <em>how to act</em> rather than giving it <em>new facts to memorize</em>.
      </p>

      <h2>RAG vs Fine-Tuning: Detailed Comparison</h2>
      <p>
        Understanding the trade-offs between dynamic knowledge retrieval and parameter adaptation is
        essential for choosing the right architecture:
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Evaluation Criterion</th>
              <th>RAG (Retrieval)</th>
              <th>Fine-Tuning (Weights)</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.criterion}>
                <td>
                  <strong>{row.criterion}</strong>
                </td>
                <td>{row.rag}</td>
                <td>{row.fineTuning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>When Should You Choose RAG?</h2>
      <p>Retrieval-Augmented Generation is the optimal technical choice when:</p>
      <ul>
        <li>
          <strong>Dynamic or Real-Time Data:</strong> Your knowledge base updates hourly or daily (e.g.
          inventory levels, legal briefs, customer tickets). Updating RAG requires only inserting a new
          row in pgvector.
        </li>
        <li>
          <strong>Auditability & Source Citations:</strong> Users need to click and verify the exact
          document paragraph from which the answer was synthesized.
        </li>
        <li>
          <strong>Zero Retraining Downtime:</strong> You cannot afford lengthy GPU training pipelines
          or model re-evaluations whenever corporate policies change.
        </li>
        <li>
          <strong>Role-Based Data Access:</strong> Different users have different permissions. RAG
          vector filters enforce that interns cannot retrieve executive salary records.
        </li>
      </ul>

      <h2>When Should You Choose Fine-Tuning?</h2>
      <p>
        Fine-tuning becomes necessary when prompt engineering alone cannot reliably enforce complex
        behavioral patterns:
      </p>
      <ul>
        <li>
          <strong>Strict Formatting & Schema Adherence:</strong> The model must return complex JSON or
          proprietary AST syntax with 100% syntactic validity on every call.
        </li>
        <li>
          <strong>Tone & Persona Replication:</strong> You need a model to write in the exact voice,
          style, and vocabulary of a specific brand or specialist without 1,000-word system prompts.
        </li>
        <li>
          <strong>Latency & Token Cost Optimization:</strong> By baking instructions into weights, you
          can replace massive system prompts with a compact 5-word instruction, saving 80% on prompt token
          costs.
        </li>
        <li>
          <strong>Domain Jargon & Specialized Code:</strong> Teaching smaller models to understand unique
          medical ontologies, proprietary coding languages, or obscure acronyms.
        </li>
      </ul>

      <h2>The Hybrid Solution: RAG + Fine-Tuning</h2>
      <p>
        In production enterprise systems, RAG and fine-tuning are frequently combined rather than treated
        as mutual exclusives.
      </p>
      <ol>
        <li>
          <strong>Fine-Tuning:</strong> Used to train a small, fast 8B open-source model how to
          structure its reasoning and format output JSON perfectly.
        </li>
        <li>
          <strong>RAG:</strong> Used at runtime to fetch the latest customer records, contracts, and
          inventory balances to feed into the fine-tuned model.
        </li>
      </ol>
      <p>
        This hybrid approach yields maximum factual accuracy with minimal latency and low token overhead.
      </p>

      <h2>The Three Tiers: Prompting vs RAG vs Fine-Tuning</h2>
      <p>
        Before committing engineering resources to fine-tuning or vector databases, follow the
        progressive complexity ladder:
      </p>
      <ul>
        <li>
          <strong>Tier 1: Prompting:</strong> Few-shot examples and clear instructions inside standard
          API calls. Test this first.
        </li>
        <li>
          <strong>Tier 2: RAG:</strong> Add pgvector retrieval when prompt context exceeds token
          limits or data changes frequently.
        </li>
        <li>
          <strong>Tier 3: Fine-Tuning:</strong> Adjust model weights when small models fail to follow
          formatting or tone reliably.
        </li>
      </ul>

      <h2>Cost Considerations: RAG vs Fine-Tuning</h2>
      <p>
        Fine-tuning incurs upfront engineering costs for dataset cleaning, validation, and GPU compute
        hours. RAG incurs ongoing operational costs for vector database hosting and slightly larger
        prompt token payloads.
      </p>
      <p>
        For a complete economic analysis and budget breakdown for Indian and global enterprises, read our
        guide on{" "}
        <Link to="/insights/ai-development-cost-india">AI development cost in India</Link>.
      </p>

      <h2>Architect Your AI Stack with GLAD Studio</h2>
      <p>
        GLAD Studio helps technology teams design the right AI architecture—whether that means
        engineering enterprise RAG pipelines, fine-tuning task-specific models, or building autonomous
        multi-agent workflows. Explore our{" "}
        <Link to="/services/ai-solutions">AI Solutions & Architecture Services</Link>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the difference between RAG and fine-tuning?</h3>
      <p>
        RAG provides an LLM with external knowledge at query time by retrieving relevant documents from a
        vector database, whereas fine-tuning alters the internal model weights using a training dataset
        to teach specific formatting, tone, or specialized domain behavior. In short: RAG gives the model
        an open-book exam, while fine-tuning teaches the model how to study.
      </p>

      <h3>When should a business choose RAG over fine-tuning?</h3>
      <p>
        A business should choose RAG when proprietary information changes frequently, when exact source
        citations are required, when training data is limited, or when budgets require avoiding continuous
        model re-training expenses. RAG is the standard choice for 85% of enterprise knowledge
        applications.
      </p>

      <h3>When is fine-tuning preferable to RAG?</h3>
      <p>
        Fine-tuning is preferable when you need a model to consistently adhere to a unique output schema,
        speak with a distinct brand persona, master a custom programming DSL, or minimize prompt token
        overhead on repetitive tasks where a smaller 8B model can match a 70B model's style.
      </p>

      <h3>Can you combine RAG and fine-tuning in a single architecture?</h3>
      <p>
        Yes, a hybrid architecture uses fine-tuning to teach a compact, low-cost model how to structure
        responses and reason, while using RAG to supply real-time facts and private company context at
        query time. This combination yields both high domain compliance and up-to-date factual accuracy.
      </p>

      <h3>Does fine-tuning eliminate hallucinations?</h3>
      <p>
        No, fine-tuning alone does not eliminate hallucinations because the model can still generate false
        statements with high confidence. RAG is significantly more effective at preventing
        hallucinations because it grounds answers in retrieved source texts and instructs the model to
        state when information is missing.
      </p>

      <h3>Which is more expensive: RAG or fine-tuning?</h3>
      <p>
        Fine-tuning generally incurs higher upfront data curation and GPU compute expenses, whereas RAG
        involves ongoing vector database storage and per-query retrieval infrastructure costs. For a full
        breakdown, explore our guide on AI development cost in India.
      </p>
    </ArticlePage>
  );
}
