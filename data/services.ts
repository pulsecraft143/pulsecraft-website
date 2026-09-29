import { ServiceItem } from '@/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform mobile experiences engineered for scale and speed.',
    description:
      'We craft high-performance, fluid, and battery-efficient mobile applications across iOS and Android. From consumer apps with millions of active users to mission-critical enterprise field applications, we engineer native and hybrid mobile solutions with pixel-perfect fidelity.',
    iconName: 'Smartphone',
    technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'Swift', 'Flutter', 'React Native'],
    deliverables: [
      'Native Android & iOS Application Architecture',
      'Cross-Platform Codebases (Flutter / React Native)',
      'Offline-First Data Sync & Local SQLite/Room Caching',
      'Biometric Security & Hardware Sensor Integration',
      'Automated App Store & Google Play Deployment Pipelines',
    ],
    features: [
      '60/120 FPS buttery smooth UI and native transitions',
      'Ultra-low latency real-time WebSocket sync',
      'Comprehensive crash analytics and error tracking',
      'End-to-end encryption for sensitive data',
    ],
    metrics: [
      { label: 'Avg. App Launch Time', value: '< 450ms' },
      { label: 'Crash-Free Sessions', value: '99.98%' },
      { label: 'Store Rating Avg.', value: '4.8 ★' },
    ],
  },
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Modern, responsive, ultra-fast web platforms and digital products.',
    description:
      'We build scalable, accessible, and high-conversion web applications utilizing cutting-edge frontend architectures. From SaaS platforms to high-traffic customer portals, our web applications load instantaneously and deliver flawless experiences across all screen sizes.',
    iconName: 'Globe',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'WebSockets'],
    deliverables: [
      'Next.js Server-Side Rendered (SSR) & Static Web Platforms',
      'Progressive Web Applications (PWAs) with Offline Caching',
      'Interactive Enterprise Dashboards and Data Visualizations',
      'WCAG 2.1 AA Compliant Accessible Interfaces',
      'Full SEO & Core Web Vitals 95+ Score Optimization',
    ],
    features: [
      'Sub-second first contentful paint (FCP)',
      'Micro-frontend and modular component architecture',
      'Automated CI/CD pipelines with preview environments',
      'Comprehensive unit and end-to-end test coverage',
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Conversion Uplift', value: '+42%' },
    ],
  },
  {
    id: 'backend-dev',
    slug: 'backend-development',
    title: 'Backend Engineering',
    tagline: 'Secure, resilient, and horizontally scalable cloud backend architectures.',
    description:
      'We architect fault-tolerant, high-throughput microservices and distributed backend systems capable of processing millions of concurrent transactions. Built with strong type safety, strict security controls, and optimized database indexing.',
    iconName: 'Server',
    technologies: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'Python', 'REST APIs', 'GraphQL', 'WebSockets'],
    deliverables: [
      'Microservices & Event-Driven Distributed Architectures',
      'High-Throughput REST, gRPC & GraphQL APIs',
      'Relational & NoSQL Database Schema Optimization',
      'Message Queues & Stream Processing (Kafka, RabbitMQ, Redis)',
      'Enterprise Authentication (OAuth2, OIDC, JWT, RBAC)',
    ],
    features: [
      'Horizontal auto-scaling with Kubernetes',
      'Sub-millisecond Redis caching layer',
      'Automated database migrations and backups',
      'Strict zero-trust security architecture',
    ],
    metrics: [
      { label: 'API P99 Latency', value: '< 28ms' },
      { label: 'System Availability', value: '99.99%' },
      { label: 'Concurrent Req/sec', value: '50,000+' },
    ],
  },
  {
    id: 'ai-solutions',
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    tagline: 'Custom AI agents, LLM integrations, and intelligent automation.',
    description:
      'We empower businesses to leverage artificial intelligence responsibly and effectively. From custom Retrieval-Augmented Generation (RAG) pipelines and fine-tuned LLMs to computer vision and predictive analytics, we turn cutting-edge AI research into production-grade commercial products.',
    iconName: 'Cpu',
    technologies: ['OpenAI', 'LLMs', 'Generative AI', 'Machine Learning', 'AI APIs', 'Computer Vision', 'LangChain'],
    deliverables: [
      'Enterprise RAG Knowledge Assistants & Semantic Search',
      'Custom LLM Fine-Tuning & Domain-Specific Prompts',
      'Computer Vision & Automated Document Parsing Pipelines',
      'Intelligent Autonomous Workflow & Chatbot Agents',
      'Real-Time Predictive Analytics & ML Forecasting Models',
    ],
    features: [
      'Private vector embeddings with strict data privacy',
      'Cost-optimized model token routing',
      'Hallucination guardrails and output verification',
      'Automated dataset curation and retraining loops',
    ],
    metrics: [
      { label: 'Query Accuracy', value: '96.4%' },
      { label: 'Workflow Time Saved', value: '75%' },
      { label: 'Response Latency', value: '< 800ms' },
    ],
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    title: 'UI/UX Design Systems',
    tagline: 'User-obsessed, minimalist, and frictionless digital product design.',
    description:
      'Great engineering requires world-class design. Our design team creates cohesive visual design systems, intuitive user journeys, and tactile micro-interactions that elevate brand perception and make complex software delightful to use.',
    iconName: 'Layout',
    technologies: ['Figma', 'Design Systems', 'User Research', 'Wireframing', 'Interactive Prototypes', 'Motion UI'],
    deliverables: [
      'End-to-End User Experience (UX) Architecture & Flows',
      'Production-Ready Atomic Design Systems in Figma',
      'High-Fidelity Interactive Clickable Prototypes',
      'Mobile & Web Visual UI Design (Dark & Light Themes)',
      'Comprehensive Usability Testing & Heatmap Analysis',
    ],
    features: [
      'Strict accessibility compliance (WCAG 2.1 AA)',
      'Design tokens mapped 1:1 with frontend code',
      'Smooth micro-animations and physics-based motion',
      'Cross-platform responsive design guidelines',
    ],
    metrics: [
      { label: 'User Satisfaction (CSAT)', value: '4.9/5' },
      { label: 'Task Completion Rate', value: '94%' },
      { label: 'Dev Handoff Speed', value: '2x Faster' },
    ],
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    tagline: 'Zero-downtime CI/CD, container orchestration, and cloud infrastructure.',
    description:
      'We design and automate resilient cloud infrastructure that allows engineering teams to ship code safely multiple times a day. We implement automated Infrastructure as Code (IaC), containerized microservices, comprehensive observability, and proactive security monitoring.',
    iconName: 'Cloud',
    technologies: ['AWS', 'Google Cloud', 'Firebase', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
    deliverables: [
      'Multi-Region Cloud Architecture Design (AWS & GCP)',
      'Infrastructure as Code (Terraform & Pulumi)',
      'Container Orchestration with Docker & Kubernetes',
      'Automated GitOps CI/CD Pipelines with GitHub Actions',
      '24/7 Monitoring, Alerting, & Log Aggregation (Datadog/Grafana)',
    ],
    features: [
      'Automated canary and blue-green deployments',
      'Cloud cost optimization reducing spend by up to 40%',
      'Automated vulnerability scanning and compliance checks',
      'Disaster recovery with multi-zone automated failover',
    ],
    metrics: [
      { label: 'Deployment Frequency', value: '15x / Day' },
      { label: 'Mean Time to Recovery', value: '< 5 Mins' },
      { label: 'Cloud Cost Savings', value: '35%' },
    ],
  },
];
