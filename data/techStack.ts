import { TechnologyItem } from '@/types';

export const TECH_CATEGORIES = ['All', 'Frontend', 'Mobile', 'Backend', 'Cloud', 'AI & ML'] as const;

export const TECH_STACK: TechnologyItem[] = [
  // Frontend
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: 'SiNextdotjs',
    description: 'The premier React framework for production-grade SSR, SSG, and edge rendering.',
    popularity: 'Primary Stack',
    featured: true,
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: 'SiReact',
    description: 'Component-driven UI library for building dynamic and fluid web applications.',
    popularity: 'Industry Standard',
    featured: true,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'SiTypescript',
    description: 'Strict type safety across the entire application stack for error-free releases.',
    popularity: 'Core Requirement',
    featured: true,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'SiTailwindcss',
    description: 'Utility-first CSS framework for rapid, bespoke, and responsive UI engineering.',
    popularity: 'Design Standard',
    featured: true,
  },

  // Mobile
  {
    name: 'Kotlin',
    category: 'Mobile',
    icon: 'SiKotlin',
    description: 'Modern, concise, and safe programming language for native Android engineering.',
    popularity: 'Android Standard',
    featured: true,
  },
  {
    name: 'Jetpack Compose',
    category: 'Mobile',
    icon: 'SiAndroid',
    description: 'Modern declarative toolkit for native Android UI with fluid hardware-accelerated animations.',
    popularity: 'Modern Android',
    featured: true,
  },
  {
    name: 'Swift & SwiftUI',
    category: 'Mobile',
    icon: 'SiSwift',
    description: 'Native iOS engineering delivering pure Apple ecosystem performance and Apple HIG polish.',
    popularity: 'iOS Standard',
    featured: true,
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    icon: 'SiFlutter',
    description: 'Google’s UI toolkit for crafting natively compiled multi-platform mobile apps.',
    popularity: 'Cross-Platform',
    featured: true,
  },
  {
    name: 'React Native',
    category: 'Mobile',
    icon: 'SiReact',
    description: 'Cross-platform mobile framework powered by React and native bridge components.',
    popularity: 'Cross-Platform',
    featured: true,
  },

  // Backend
  {
    name: 'Node.js & NestJS',
    category: 'Backend',
    icon: 'SiNodedotjs',
    description: 'Enterprise-grade modular backend framework with TypeScript and dependency injection.',
    popularity: 'Primary Backend',
    featured: true,
  },
  {
    name: 'Java & Spring Boot',
    category: 'Backend',
    icon: 'SiSpringboot',
    description: 'High-throughput, robust enterprise backend infrastructure for mission-critical systems.',
    popularity: 'Enterprise Tier',
    featured: true,
  },
  {
    name: 'Python & FastAPI',
    category: 'Backend',
    icon: 'SiPython',
    description: 'Asynchronous, blazing-fast API frameworks ideal for ML model serving and data ingestion.',
    popularity: 'AI & Data Backend',
    featured: true,
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    icon: 'SiPostgresql',
    description: 'World’s most advanced open-source relational database with ACID compliance and JSONB support.',
    popularity: 'Primary Database',
    featured: true,
  },
  {
    name: 'GraphQL & WebSockets',
    category: 'Backend',
    icon: 'SiGraphql',
    description: 'Real-time pub/sub protocols and flexible declarative data querying.',
    popularity: 'Real-Time Protocol',
    featured: true,
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    category: 'Cloud',
    icon: 'SiAmazonaws',
    description: 'Comprehensive cloud computing infrastructure including ECS, EKS, Lambda, S3, and RDS.',
    popularity: 'Cloud Leader',
    featured: true,
  },
  {
    name: 'Google Cloud (GCP)',
    category: 'Cloud',
    icon: 'SiGooglecloud',
    description: 'High-performance cloud infrastructure, BigQuery, Vertex AI, and Google Kubernetes Engine.',
    popularity: 'Cloud & AI Platform',
    featured: true,
  },
  {
    name: 'Docker & Kubernetes',
    category: 'Cloud',
    icon: 'SiDocker',
    description: 'Container packaging and multi-node automated cluster orchestration for zero-downtime scale.',
    popularity: 'DevOps Standard',
    featured: true,
  },
  {
    name: 'Redis',
    category: 'Cloud',
    icon: 'SiRedis',
    description: 'In-memory data structure store used as a sub-millisecond database, cache, and message broker.',
    popularity: 'High-Speed Cache',
    featured: true,
  },

  // AI & ML
  {
    name: 'OpenAI & LLMs',
    category: 'AI & ML',
    icon: 'SiOpenai',
    description: 'Integration of GPT-4o, Claude, and proprietary foundational models for reasoning.',
    popularity: 'Generative AI',
    featured: true,
  },
  {
    name: 'LangChain & LlamaIndex',
    category: 'AI & ML',
    icon: 'SiLangchain',
    description: 'Frameworks for orchestration of complex multi-agent workflows and vector RAG pipelines.',
    popularity: 'RAG & Agents',
    featured: true,
  },
  {
    name: 'Computer Vision',
    category: 'AI & ML',
    icon: 'SiOpencv',
    description: 'Visual object detection, OCR document analysis, and automated quality inspection.',
    popularity: 'Visual Intelligence',
    featured: true,
  },
];
