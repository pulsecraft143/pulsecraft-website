import { JobPosition } from '@/types';

export const CAREER_BENEFITS = [
  {
    title: 'Competitive Compensation & Equity',
    description: 'Top-of-market base salary, annual performance bonuses, and meaningful equity participation.',
    iconName: 'DollarSign',
  },
  {
    title: 'Work From Anywhere (Canada & Global)',
    description: 'Flexible hybrid or 100% remote work arrangements with modern home-office stipends.',
    iconName: 'Globe',
  },
  {
    title: 'Comprehensive Health & Wellness',
    description: '100% employer-covered dental, medical, mental health support, and wellness credits.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Top-Tier Equipment & Software',
    description: 'Brand-new Apple M3/M4 Max MacBook Pro, 4K monitors, and all software licenses you need.',
    iconName: 'Laptop',
  },
  {
    title: 'Annual Learning & Conference Budget',
    description: '$3,500 CAD annual budget for conferences (WWDC, Google I/O, React Summit), courses, and books.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Flexible Paid Time Off',
    description: '25 days paid vacation + statutory Canadian holidays + paid year-end winter recharge break.',
    iconName: 'Palmtree',
  },
];

export const CAREER_JOBS: JobPosition[] = [
  {
    id: 'lead-mobile-engineer',
    slug: 'lead-mobile-engineer-kotlin-swift',
    title: 'Lead Mobile Engineer (Kotlin / Swift)',
    department: 'Engineering',
    location: 'Oshawa, ON (Hybrid / Remote in Canada)',
    employmentType: 'Full-time',
    experience: '5+ Years Experience',
    overview:
      'We are looking for a Lead Mobile Engineer to direct architecture and development across high-performance native iOS and Android applications. You will partner with design and backend teams to build buttery-smooth 60fps applications.',
    responsibilities: [
      'Architect robust, offline-first mobile apps using Jetpack Compose and SwiftUI',
      'Lead mobile code reviews, CI/CD automation, and release management to App Store and Google Play',
      'Optimize memory, battery consumption, and WebSocket network communication',
      'Mentor intermediate and junior engineers on modern reactive mobile design patterns',
    ],
    requirements: [
      '5+ years of production experience building native Android (Kotlin) or iOS (Swift) applications',
      'Deep mastery of Jetpack Compose, Coroutines, Flow, or SwiftUI and Combine/Async-Await',
      'Proven track record shipping high-profile apps with 100k+ downloads on the stores',
      'Strong understanding of clean architecture, dependency injection (Hilt/Koin), and SQLite/Room/CoreData',
    ],
    niceToHave: [
      'Experience with Flutter or React Native for hybrid micro-modules',
      'Experience with WebSockets, WebRTC, or hardware Bluetooth/NFC peripherals',
    ],
    benefits: ['Full health & dental', '$3,500 learning stipend', 'MacBook Pro M3 Max', 'Stock options'],
    postedDate: '2026-08-15',
    isActive: true,
  },
  {
    id: 'senior-fullstack-engineer',
    slug: 'senior-fullstack-engineer-nextjs-nodejs',
    title: 'Senior Full-Stack Engineer (Next.js & TypeScript)',
    department: 'Engineering',
    location: 'Oshawa, ON (Hybrid / Remote in Canada)',
    employmentType: 'Full-time',
    experience: '4+ Years Experience',
    overview:
      'Join our core product team to engineer ultra-responsive Next.js web applications, resilient Node.js microservices, and high-throughput real-time APIs.',
    responsibilities: [
      'Build modern web applications with Next.js 14/15 App Router, React Server Components, and Tailwind CSS',
      'Design modular Node.js/NestJS REST and GraphQL APIs with PostgreSQL and Prisma',
      'Implement real-time features using Redis Pub/Sub, WebSockets, and Server-Sent Events',
      'Maintain 95+ Core Web Vitals and ensure strict WCAG 2.1 AA accessibility compliance',
    ],
    requirements: [
      '4+ years of professional full-stack development experience with TypeScript, React, and Node.js',
      'Mastery of relational database schema design, SQL indexing, and transaction management',
      'Experience with Docker, Kubernetes, and automated CI/CD pipelines',
      'Strong empathy for UI/UX details, typography, and micro-interactions',
    ],
    niceToHave: [
      'Experience with Rust, Go, or Python for high-performance microservices',
      'Experience with multi-tenant SaaS architectures',
    ],
    benefits: ['Full health & dental', 'Flexible hours', 'Work from home stipend', 'Annual bonus'],
    postedDate: '2026-08-18',
    isActive: true,
  },
  {
    id: 'ai-ml-solutions-architect',
    slug: 'ai-ml-solutions-architect',
    title: 'AI & LLM Solutions Architect',
    department: 'AI Research',
    location: 'Oshawa, ON (Hybrid / Remote)',
    employmentType: 'Full-time',
    experience: '4+ Years Experience',
    overview:
      'Lead the architecture and implementation of cutting-edge generative AI, enterprise RAG systems, autonomous agent workflows, and fine-tuned foundational models for our global client portfolio.',
    responsibilities: [
      'Design and deploy scalable RAG pipelines using LangChain, LlamaIndex, and vector databases (Pinecone, pgvector)',
      'Evaluate, fine-tune, and optimize open-source and proprietary LLMs for domain-specific tasks',
      'Implement robust evaluation frameworks, guardrails, and latency optimization for real-time AI responses',
      'Collaborate with enterprise clients to translate unstructured data challenges into high-value AI solutions',
    ],
    requirements: [
      'Deep understanding of transformer architectures, attention mechanisms, and embedding spaces',
      'Proficiency with Python, PyTorch, FastAPI, and modern AI SDKs (OpenAI, Anthropic, HuggingFace)',
      'Hands-on experience deploying vector search and semantic retrieval pipelines at enterprise scale',
      'Strong background in data privacy, zero-leakage enterprise security, and prompt safety',
    ],
    niceToHave: [
      'Published AI research papers or contributions to popular open-source AI repositories',
      'Experience with computer vision (OpenCV, YOLO) and multi-modal models',
    ],
    benefits: ['Executive equity package', 'Full health & dental', 'GPU cloud compute allowance', 'Global conferences'],
    postedDate: '2026-08-20',
    isActive: true,
  },
  {
    id: 'senior-product-designer',
    slug: 'senior-product-designer-ui-ux',
    title: 'Senior Product Designer (UI / UX / Systems)',
    department: 'Design',
    location: 'Oshawa, ON (Remote / Hybrid)',
    employmentType: 'Full-time',
    experience: '4+ Years Experience',
    overview:
      'We are looking for a visionary Senior Product Designer to shape the aesthetics, usability, and design systems of world-class digital products across web and mobile platforms.',
    responsibilities: [
      'Design comprehensive Figma design systems with atomic tokens and responsive auto-layout components',
      'Conduct user research, journey mapping, and interactive usability testing with client stakeholders',
      'Create high-fidelity interactive prototypes with realistic micro-animations in Protopie or Figma',
      'Work side-by-side with engineers to ensure 1:1 fidelity between Figma designs and deployed code',
    ],
    requirements: [
      '4+ years of digital product design experience with a stellar portfolio of shipped SaaS/mobile apps',
      'Deep mastery of Figma, design token architecture, and modern typography systems',
      'Obsessive attention to detail in visual hierarchy, spacing, accessibility, and micro-interactions',
      'Strong communication skills to articulate design decisions to executives and developers',
    ],
    niceToHave: [
      'Working knowledge of HTML, CSS/Tailwind, and Framer Motion capabilities',
      '3D modeling experience in Blender or Spline',
    ],
    benefits: ['Full health & dental', 'Creative software allowance', 'Apple Studio Display + MacBook Pro', 'Flexible PTO'],
    postedDate: '2026-08-22',
    isActive: true,
  },
];
