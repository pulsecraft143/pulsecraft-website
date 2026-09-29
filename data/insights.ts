import { InsightArticle } from '@/types';

export const INSIGHT_CATEGORIES = [
  'All',
  'Artificial Intelligence',
  'Mobile Development',
  'Engineering',
  'Architecture',
  'Product Strategy',
] as const;

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'art-1',
    slug: 'architecting-high-throughput-rag-pipelines',
    title: 'Architecting Enterprise RAG Pipelines: Eliminating Hallucinations at Scale',
    excerpt:
      'A deep dive into multi-stage vector retrieval, cross-encoder reranking, and zero-leakage security patterns for mission-critical enterprise AI assistants.',
    category: 'Artificial Intelligence',
    author: {
      name: 'Adnan Bhatti',
      role: 'Co-Founder & CTO',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    publishedAt: '2026-08-10',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI', 'RAG', 'Vector Search', 'LangChain', 'Python'],
    featured: true,
    content: `
### The Challenge with Basic RAG
Naive Retrieval-Augmented Generation (RAG) approaches frequently fail in enterprise settings. When thousands of complex PDF contracts, medical records, or financial tables are vectorized without contextual chunking, embedding models struggle to capture nuanced relationships, leading to hallucinations or irrelevant retrievals.

### 1. Layout-Aware Document Chunking
Rather than naive character-count splitting, enterprise RAG must parse documents semantically:
- **Hierarchical heading preservation**: Keeping section titles attached to individual paragraphs.
- **Table reconstruction**: Transforming multi-column tables into structured markdown or JSON representations before embedding.
- **Overlapping semantic windows**: Ensuring token boundaries do not cut sentences in half.

### 2. Hybrid Retrieval: Combining Dense & Sparse Search
Dense vector embeddings (like text-embedding-3-large) excel at conceptual similarity, but struggle with exact alphanumeric strings like product serial numbers, patent IDs, or case codes.
By executing hybrid search (BM25 sparse keyword search + cosine similarity dense vectors) and fusing them with Reciprocal Rank Fusion (RRF), retrieval recall improves by over 38%.

### 3. Cross-Encoder Reranking
The top 25 candidate chunks from hybrid retrieval are passed to a lightweight cross-encoder model (such as Cohere Rerank or BGE-Reranker-Large). The cross-encoder evaluates the exact semantic fit between query and chunk, filtering out false positives before prompt injection.

### Conclusion
Building enterprise AI requires treating vector search not as a black box, but as an engineered distributed pipeline with strict evaluation metrics, deterministic grounding, and zero data leakage.
    `,
  },
  {
    id: 'art-2',
    slug: 'mastering-offline-first-mobile-architecture',
    title: 'Offline-First Mobile Architecture with Kotlin & Jetpack Compose',
    excerpt:
      'How to build resilient Android applications that feel instantaneous, handle unpredictable network dropouts gracefully, and synchronize bidirectional state seamlessly.',
    category: 'Mobile Development',
    author: {
      name: 'Asad Azhar',
      role: 'Founder & CEO',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    publishedAt: '2026-08-04',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'SQLite', 'Mobile'],
    featured: true,
    content: `
### Why Network-First Mobile Apps Fail
In mobile computing, network connectivity is never guaranteed. Users ride through tunnels, enter basements, or walk through crowded airports with congested cell towers. If your mobile app displays a blocking spinner while waiting for a remote API response, user frustration skyrockets.

### The Single Source of Truth Pattern
In an offline-first architecture, the UI layer **never** observes remote network endpoints directly. Instead:
1. **The UI observes local persistent storage** (e.g., Room database or SQLite via Kotlin Flows).
2. User actions immediately mutate local database state (optimistic UI updates).
3. A background sync worker reconciles local mutations with the remote backend over WebSockets or HTTP when connectivity is available.

### Handling Conflict Resolution
When multiple devices edit the same record offline, timestamp-based last-write-wins (LWW) is often insufficient. For complex data models, utilizing Conflict-Free Replicated Data Types (CRDTs) or server-assisted vector clocks guarantees zero data loss.

### Performance Gains
Apps engineered with offline-first patterns launch in under 300ms, achieve zero blocking spinners, and deliver a tactile native feel that drives 5-star App Store ratings.
    `,
  },
  {
    id: 'art-3',
    slug: 'nextjs-14-15-production-architecture-playbook',
    title: 'Next.js Production Playbook: Server Components, Caching & Edge Optimizations',
    excerpt:
      'Practical architectural patterns for building scalable, sub-second web platforms with React Server Components, streaming SSR, and edge computing.',
    category: 'Engineering',
    author: {
      name: 'Adnan Bhatti',
      role: 'Co-Founder & CTO',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    publishedAt: '2026-07-28',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'React', 'TypeScript', 'WebDev', 'Performance'],
    featured: false,
    content: `
### The Paradigm Shift of React Server Components (RSC)
React Server Components fundamentally rewrite how we deliver modern web applications. By running component execution exclusively on the server or edge, zero JavaScript bundle weight is sent to the client for static UI, drastically improving Time-to-Interactive (TTI).

### 1. Intelligent Boundary Splitting
Keep client components ('use client') as small leaf nodes in your component tree. Push state management down to interactive buttons or inputs while leaving layout, container, and data-fetching components as pure Server Components.

### 2. Streaming SSR with Suspense
Rather than blocking the entire page render while waiting for a slow backend query, wrap data-heavy sections in \`<Suspense fallback={<Skeleton />}>\`. Next.js streams the fast shell immediately, streaming in chunks as they resolve.

### 3. Edge Route Caching & Stale-While-Revalidate
Leverage Next.js \`fetch\` cache tags with granular revalidation. When a database update occurs, trigger on-demand \`revalidateTag('products')\` to instantly purge stale edge caches worldwide without rebuilding the app.
    `,
  },
  {
    id: 'art-4',
    slug: 'product-thinking-for-venture-scale-software',
    title: 'Product Thinking: Why Great Code Means Nothing Without Clear Commercial Direction',
    excerpt:
      'How elite engineering teams balance technical purity with rapid market feedback, unit economics, and user retention.',
    category: 'Product Strategy',
    author: {
      name: 'Asad Azhar',
      role: 'Founder & CEO',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    publishedAt: '2026-07-15',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Startups', 'Product Management', 'Strategy', 'Venture'],
    featured: false,
    content: `
### The Over-Engineering Trap
Many software engineering agencies fall in love with architectural abstractions before validating whether anyone actually wants the feature. True product craftsmanship is about precision: building the simplest, highest-impact system that solves the core user problem.

### The Three Pillars of Modern Product Building
1. **Speed to Validation**: Reducing the cycle time between hypothesis and production telemetry.
2. **Defensibility**: Creating unique software capabilities, proprietary datasets, and sticky network effects.
3. **Operational Simplicity**: Ensuring systems can be operated, monitored, and scaled without requiring an army of engineers.

At PulseCraft, we evaluate every engineering sprint against business outcomes: customer conversion, transaction velocity, and long-term user delight.
    `,
  },
];
