export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  paragraphs: string[];
  quote: string;
  coverSrc: string;
  portraitSrc: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: '01',
    slug: 'ai-development-cost-india',
    title: 'AI Development Cost in India in 2026: A Practical Pricing Guide',
    author: 'Somesh Rajput',
    authorRole: 'CTO & Head of Engineering',
    category: 'AI Economics & Strategy',
    date: 'Wednesday, January 15, 2025',
    readTime: '11 min read',
    excerpt:
      'A comprehensive breakdown of AI development costs in India across complexity tiers, infrastructure models, and operational maintenance for tech founders and engineering leaders.',
    paragraphs: [
      'Budgeting for AI software engineering in 2026 requires understanding the six distinct complexity tiers: basic AI-powered feature integrations, conversational assistants with session memory, production RAG search engines with vector databases, autonomous multi-tool agents, AI-enabled multi-tenant SaaS platforms, and private VPC enterprise models.',
      'Primary cost drivers are not foundation model API token fees, but rather workflow complexity, data cleanliness, OCR parsing overhead, and evaluation test harness coverage. Without automated evaluation suites, AI applications suffer from silent quality degradation over time.',
      'By partnering with specialized product engineering studios that build on modular open architectures, businesses can achieve enterprise-grade AI capabilities at a fraction of Silicon Valley agency rates while retaining 100% intellectual property ownership.',
    ],
    quote:
      'The true cost of an AI system is never just the API tokens — it is the engineering discipline behind schema validation, evaluation harnesses, and deterministic guardrails.',
    // TODO: Replace with real article cover artwork when available
    coverSrc: 'https://picsum.photos/seed/glad-insight-cost/1432/720',
    portraitSrc: '/team/somesh.jpeg',
  },
  {
    id: '02',
    slug: 'ai-agent-vs-chatbot',
    title: "AI Agent vs Chatbot: What's the Difference and Which Does Your Business Need?",
    author: 'Somesh Rajput',
    authorRole: 'CTO & Head of Engineering',
    category: 'AI Architecture',
    date: 'Friday, February 14, 2025',
    readTime: '9 min read',
    excerpt:
      'Understand the fundamental differences between conversational chatbots and autonomous AI agents. Learn when to deploy conversational interfaces versus multi-step decision engines.',
    paragraphs: [
      'The fundamental distinction between chatbots and AI agents comes down to actions versus words. A chatbot is built to converse, summarize text, and answer questions. An AI agent is built to plan, take autonomous actions, call APIs, mutate database records, and self-correct when unexpected errors occur during execution.',
      'Chatbots follow linear, scripted conversational trees or simple single-turn retrieval patterns. AI agents, by contrast, possess dynamic tool-calling registries, maintain multi-step execution graphs, and execute cyclic loops until an overarching business goal is satisfied.',
      'If your workflow follows a strict "If X, then Y" formula with structured JSON payloads, you do not need an AI agent — you need a deterministic script or an n8n webhook workflow. Reserve agents for ambiguous inputs, multi-source synthesis, and unstructured problem-solving.',
    ],
    quote:
      'If you need text returned to a screen, build a chatbot. If you need a database updated, an invoice audited, and a team alerted, build an agent.',
    // TODO: Replace with real article cover artwork when available
    coverSrc: 'https://picsum.photos/seed/glad-insight-chatbot/1432/720',
    portraitSrc: '/team/somesh.jpeg',
  },
  {
    id: '03',
    slug: 'what-is-ai-agent-development',
    title: 'What Is AI Agent Development? A Practical Guide for Businesses',
    author: 'Somesh Rajput',
    authorRole: 'CTO & Head of Engineering',
    category: 'Agentic Engineering',
    date: 'Monday, March 10, 2025',
    readTime: '12 min read',
    excerpt:
      'A deep dive into AI agent development for engineering leaders and founders. Explore agent loops, tool calling, memory management, orchestration frameworks, and production guardrails.',
    paragraphs: [
      'AI agent development is the software engineering discipline of building systems where a large language model serves as a central reasoning and decision-making engine. Given a high-level business goal, an AI agent autonomously plans sub-tasks, selects and invokes external tools (APIs, databases, search engines), inspects the tool output, and iterates through a stateful execution loop until the goal is completed.',
      'Unlike traditional chatbots that generate passive text responses, an autonomous agent operates in an active loop: Ingestion -> Task Decomposition -> Tool Selection -> Tool Execution -> Observation Reasoning -> Subsequent Execution -> Termination. Each step in the loop is evaluated against deterministic schemas and Pydantic validation boundaries to ensure output consistency and safety.',
      'To deploy agents in mission-critical enterprise environments, teams must establish six core architectural pillars: foundation reasoning engines, strict tool definitions, state and vector memory management via pgvector, graph-based orchestration with LangGraph, deterministic guardrails, and real-time observability via LangSmith.',
    ],
    quote:
      'An AI agent is not a chatbot that answers questions — it is a software runtime that uses a language model as a reasoning engine to execute multi-step work across external APIs.',
    // TODO: Replace with real article cover artwork when available
    coverSrc: 'https://picsum.photos/seed/glad-insight-agent/1432/720',
    portraitSrc: '/team/somesh.jpeg',
  },
  {
    id: '04',
    slug: 'rag-vs-fine-tuning',
    title: 'RAG vs Fine-Tuning: Which AI Approach Should Your Business Use?',
    author: 'Somesh Rajput',
    authorRole: 'CTO & Head of Engineering',
    category: 'LLM Systems',
    date: 'Tuesday, January 28, 2025',
    readTime: '13 min read',
    excerpt:
      'Compare Retrieval-Augmented Generation (RAG) with LLM fine-tuning. Discover when to ground models on dynamic data versus adapting model behavior, tone, and domain syntax.',
    paragraphs: [
      'A common architectural dilemma when building production AI systems is deciding between Retrieval-Augmented Generation (RAG) and model fine-tuning. RAG injects verified external factual context into the model prompt at runtime, while fine-tuning permanently modifies model weights to adapt syntax, tone, or formatting.',
      'RAG is vastly superior for dynamic business data, strict source attribution, and role-based document access controls, requiring zero model retraining when company documentation updates. Fine-tuning excels at enforcing strict JSON output schemas, replicating unique organizational brand voices, and minimizing prompt token overhead on repetitive tasks.',
      'Modern enterprise architectures increasingly adopt a hybrid pattern: fine-tuning lightweight open-source models (8B parameters) on reasoning structures and formatting constraints, while using RAG to ground responses on live enterprise knowledge at runtime.',
    ],
    quote:
      'RAG provides the open-book context; fine-tuning provides the specialized habit. Know whether you are teaching a model new facts or training a model in a specific discipline.',
    // TODO: Replace with real article cover artwork when available
    coverSrc: 'https://picsum.photos/seed/glad-insight-rag/1432/720',
    portraitSrc: '/team/somesh.jpeg',
  },
  {
    id: '05',
    slug: 'how-to-build-ai-agent-for-business',
    title: 'How to Build an AI Agent for Your Business in 2026',
    author: 'Somesh Rajput',
    authorRole: 'CTO & Head of Engineering',
    category: 'Engineering Guide',
    date: 'Wednesday, February 26, 2025',
    readTime: '15 min read',
    excerpt:
      'Step-by-step engineering guide to building a production AI agent. Learn workflow selection, tool definition, memory state management, deterministic guardrails, and evaluation frameworks.',
    paragraphs: [
      'Before writing a single line of agentic code, engineering teams must evaluate whether a business process actually qualifies for an autonomous agent. Workflows that thrive under agent orchestration involve semi-structured inputs, dynamic tool sequencing, and reversible operational actions with human-in-the-loop checkpoints.',
      'The production lifecycle follows nine rigorous steps: selecting a high-impact bottleneck, establishing objective quantitative evaluation metrics, routing between foundation models, defining strict JSON tool schemas, connecting domain knowledge via RAG vector search, wrapping execution in deterministic guardrails, structuring state machines with LangGraph, running synthetic benchmark evaluations, and deploying continuous tracing telemetry.',
      'By treating agent prompts as version-controlled code and running automated regression evals before every production cutover, engineering organizations can eliminate hallucination risk and ensure consistent operational reliability.',
    ],
    quote:
      'Deterministic software rules should govern your agent boundaries. Use LLMs for flexible semantic reasoning, but let strict SQL and Pydantic schemas enforce the rules.',
    // TODO: Replace with real article cover artwork when available
    coverSrc: 'https://picsum.photos/seed/glad-insight-build/1432/720',
    portraitSrc: '/team/somesh.jpeg',
  },
];

export function getArticleBySlug(slug: string): ArticleItem | undefined {
  return articlesData.find((a) => a.slug === slug);
}

// Aliases for backwards compatibility
export const articles = articlesData;
export const insightsData = articlesData;
