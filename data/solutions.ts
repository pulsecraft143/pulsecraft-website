import { SolutionItem } from '@/types';

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'startups',
    title: 'Startups & Scale-ups',
    subtitle: 'From zero to MVP to venture-scale product in record time.',
    description:
      'We partner with ambitious founders to turn bold visions into market-ready MVPs and scalable architectures that win customer trust and secure investor backing.',
    iconName: 'Rocket',
    targetAudience: 'Seed & Series A-C tech founders, incubator ventures',
    keyBenefits: [
      'Rapid 8-12 week MVP design & engineering sprint',
      'Scalable architecture built to handle sudden viral traffic spikes',
      'Investor-ready tech stack, documentation, and security posture',
      'Lean product iteration backed by live telemetry and analytics',
    ],
    featuredTech: ['Next.js', 'React Native', 'Supabase', 'Node.js', 'AWS Serverless'],
    tag: 'Agile Velocity',
  },
  {
    id: 'saas',
    title: 'SaaS Platforms',
    subtitle: 'Multi-tenant cloud platforms built for high MRR retention.',
    description:
      'We engineer high-performance B2B and B2C software-as-a-service platforms with robust subscription billing, multi-tenancy isolation, and frictionless onboarding.',
    iconName: 'Layers',
    targetAudience: 'B2B Software Companies, Enterprise SaaS Teams',
    keyBenefits: [
      'Isolated multi-tenant database partitioning and RBAC roles',
      'Stripe / Paddle automated global subscription billing integration',
      'Real-time collaborative features with WebSockets and CRDTs',
      'Self-serve onboarding flows and interactive product tours',
    ],
    featuredTech: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    tag: 'Recurring Revenue',
  },
  {
    id: 'enterprises',
    title: 'Enterprise Modernization',
    subtitle: 'Transforming legacy codebases into resilient cloud architectures.',
    description:
      'We assist established organizations in breaking monolithic systems into modern microservices, enhancing security, reducing technical debt, and improving engineering velocity.',
    iconName: 'Building2',
    targetAudience: 'Global enterprises, banking institutions, logistics leaders',
    keyBenefits: [
      'Zero-downtime legacy database and service migration',
      'Enterprise SSO (SAML, Okta, Azure AD) & strict compliance controls',
      'Dedicated SLA guarantees and 24/7 reliability engineering',
      'Engineering mentorship and internal team capability uplift',
    ],
    featuredTech: ['Java', 'Spring Boot', 'Kubernetes', 'AWS', 'Kafka'],
    tag: 'Enterprise Ready',
  },
  {
    id: 'fintech',
    title: 'FinTech & Banking Systems',
    subtitle: 'Bank-grade security, real-time ledger systems, and compliance.',
    description:
      'We build PCI-DSS and PIPEDA compliant financial applications, payment gateways, wealth management tools, and automated fraud-detection interfaces.',
    iconName: 'ShieldCheck',
    targetAudience: 'Neobanks, wealthtech startups, payment processors',
    keyBenefits: [
      'End-to-end cryptographic encryption and biometric authentication',
      'Immutable audit logging and double-entry transaction ledgers',
      'Sub-50ms latency for financial transaction authorizations',
      'Strict regulatory compliance with Canadian and international standards',
    ],
    featuredTech: ['Kotlin', 'Swift', 'Go', 'PostgreSQL', 'Redis Cluster'],
    tag: 'Bank-Grade Security',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & MedTech',
    subtitle: 'HIPAA & PIPEDA compliant telehealth, clinical portals, and EMR.',
    description:
      'We build intuitive, ultra-secure digital health tools that connect patients, doctors, and medical laboratories while preserving patient data confidentiality.',
    iconName: 'Activity',
    targetAudience: 'Hospitals, digital health startups, medical device companies',
    keyBenefits: [
      'Strict PIPEDA, HIPAA, and provincial health privacy compliance',
      'Encrypted video telemedicine with WebRTC and live transcription',
      'FHIR / HL7 standard interoperability with hospital EMR systems',
      'Accessible, barrier-free interfaces for all age demographics',
    ],
    featuredTech: ['React', 'WebRTC', 'FastAPI', 'PostgreSQL', 'AWS HealthLake'],
    tag: 'Health Privacy First',
  },
  {
    id: 'ai-products',
    title: 'AI Products & Automation',
    subtitle: 'Next-generation AI agents and intelligent document intelligence.',
    description:
      'We build proprietary AI pipelines that automate repetitive cognitive tasks, enhance decision-making, and create natural conversational customer interactions.',
    iconName: 'Brain',
    targetAudience: 'AI-first startups, enterprise automation teams, analytics firms',
    keyBenefits: [
      'Context-aware enterprise search with vector retrieval and RAG',
      'High-throughput asynchronous LLM pipeline orchestration',
      'Real-time streaming responses with latency < 600ms',
      'Custom human-in-the-loop validation dashboards',
    ],
    featuredTech: ['OpenAI', 'LangChain', 'Python', 'Pinecone', 'Next.js'],
    tag: 'Intelligent Systems',
  },
];
