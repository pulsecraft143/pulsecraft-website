import { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aurora-fintech',
    slug: 'aurora-capital-wealth-platform',
    title: 'Aurora Wealth: Real-Time Mobile Investment & Portfolio Analytics',
    client: 'Aurora Capital Partners',
    industry: 'FinTech & Wealth Management',
    category: 'Mobile',
    platform: 'iOS & Android Native (Swift + Kotlin)',
    timeline: '6 Months',
    tagline: 'Empowering high-net-worth investors with microsecond portfolio telemetry and biometric security.',
    summary:
      'We designed and engineered a flagship cross-platform mobile investment terminal delivering live stock market streaming, automated tax-loss harvesting, and multi-signature security.',
    challenge:
      'Aurora required a mobile platform that could visualize thousands of real-time ticks per second without frame drops or battery drain, while meeting strict Canadian OSFI and FINTRAC financial compliance standards.',
    strategy:
      'We architected an offline-first reactive mobile engine with native Swift and Kotlin core rendering layers connected via persistent binary WebSockets, backed by biometric zero-knowledge authentication.',
    designHighlights: [
      'High-contrast dark terminal theme optimized for rapid market data absorption',
      'Tactile haptic feedback on trade execution and threshold alerts',
      'Interactive 60fps charting with customizable candlestick indicators',
      'Frictionless KYC onboarding completing identity verification in under 90 seconds',
    ],
    developmentHighlights: [
      'Custom C++ memory-mapped cache for microsecond local calculation',
      'Sub-50ms WebSocket market feed parsing with automated reconnection fallbacks',
      'Hardware-backed Secure Enclave / Android Keystore biometric signing',
      'Zero-downtime distributed backend deployed across multi-region AWS clusters',
    ],
    technologies: ['Kotlin', 'Swift', 'Jetpack Compose', 'SwiftUI', 'WebSockets', 'AWS', 'PostgreSQL', 'Redis'],
    results: [
      { metric: '4.9 ★', label: 'App Store Rating (18k+ reviews)' },
      { metric: '$1.4B+', label: 'Monthly Trading Volume' },
      { metric: '22ms', label: 'Median Order Execution Latency' },
      { metric: '99.99%', label: 'Session Uptime' },
    ],
    accentColor: '#E53935',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    ],
    testimonial: {
      quote:
        'PulseCraft operated as an elite elite engineering force. Their architectural rigor and attention to visual polish elevated Aurora into an industry benchmark.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Aurora Capital',
    },
  },
  {
    id: 'synapse-ai',
    slug: 'synapse-enterprise-rag-intelligence',
    title: 'Synapse AI: Contextual Knowledge Engine for Global Legal Enterprises',
    client: 'LexisGlobal Solutions',
    industry: 'Enterprise Legal & Compliance',
    category: 'AI',
    platform: 'Web & Distributed Microservices',
    timeline: '4 Months',
    tagline: 'Autonomous AI synthesis reducing contract discovery and audit cycles from weeks to minutes.',
    summary:
      'We developed an enterprise-grade Retrieval-Augmented Generation (RAG) platform that scans, parses, and semantically queries millions of unstructured legal contracts with verifiable citation footnotes.',
    challenge:
      'The client faced hundreds of thousands of complex multi-jurisdictional contracts that took legal teams hundreds of hours to audit, with strict zero-data-leakage mandates.',
    strategy:
      'We designed a multi-stage vector parsing engine combining OCR, layout-aware PDF chunking, hybrid BM25 + dense embedding search, and strict citation hallucination guardrails.',
    designHighlights: [
      'Split-screen dynamic document view with side-by-side citation verification',
      'Instant markdown export with executive summary bullets and risk scoring',
      'Command-palette (Cmd+K) keyboard navigation for power legal researchers',
      'Role-based granular document workspace permissions',
    ],
    developmentHighlights: [
      'Asynchronous document ingestion pipeline handling 5,000 pages per minute',
      'Private vector embeddings running inside client VPC with zero public model training',
      'Hierarchical reranking with cross-encoders to eliminate hallucinated answers',
      'Full audit trail logging every AI prompt and response with cryptographic timestamps',
    ],
    technologies: ['OpenAI', 'LangChain', 'Python', 'FastAPI', 'Next.js', 'TypeScript', 'Pinecone', 'Docker'],
    results: [
      { metric: '84%', label: 'Reduction in Document Review Time' },
      { metric: '99.2%', label: 'Citation Accuracy & Verification' },
      { metric: '3.2M+', label: 'Pages Indexed & Searchable' },
      { metric: 'SOC 2 Type II', label: 'Certified Compliance' },
    ],
    accentColor: '#E53935',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    ],
    testimonial: {
      quote:
        'PulseCraft did not just build a software platform — they created a revolutionary workflow that gave our 500+ legal analysts superpowers.',
      author: 'Elena Rostova',
      role: 'VP of Product Innovation',
      company: 'LexisGlobal',
    },
  },
  {
    id: 'voxel-saas',
    slug: 'voxel-cloud-collaborative-cad',
    title: 'VoxelFlow: Real-Time 3D Collaborative Engineering Platform',
    client: 'Voxel Technologies Inc.',
    industry: 'Industrial Design & Engineering SaaS',
    category: 'SaaS',
    platform: 'Web Platform (WebGL / WebAssembly)',
    timeline: '8 Months',
    tagline: 'Next-generation CAD collaboration in the browser with sub-50ms multiplayer synchronization.',
    summary:
      'We built a browser-based 3D design and simulation platform enabling distributed aerospace and automotive engineering teams to co-design complex assemblies simultaneously in real-time.',
    challenge:
      'Rendering complex 3D meshes with millions of polygons directly inside modern browsers at 60 FPS while keeping multi-user edits synchronized without race conditions.',
    strategy:
      'We implemented a high-performance WebGL/WebGPU rendering pipeline utilizing Rust compiled to WebAssembly, paired with Conflict-Free Replicated Data Types (CRDTs) over WebSockets.',
    designHighlights: [
      'Minimalist dark interface designed to maximize 3D viewport canvas workspace',
      'Intuitive multiplayer presence indicators, spatial audio cursors, and live commenting',
      'Fluid gesture and trackpad camera navigation tuned for extreme precision',
      'Customizable keyboard hotkeys matching industry standard CAD conventions',
    ],
    developmentHighlights: [
      'Rust + WebAssembly geometry kernel executing mathematical transformations at native speed',
      'CRDT-based state reconciliation ensuring zero lost edits across 50 concurrent designers',
      'Tile-based progressive level-of-detail (LOD) streaming for large 2GB+ 3D files',
      'Automated GPU benchmark scaling for lower-end laptop hardware',
    ],
    technologies: ['Next.js', 'TypeScript', 'Rust / Wasm', 'Three.js / WebGL', 'WebSockets', 'PostgreSQL', 'Docker'],
    results: [
      { metric: '60 FPS', label: 'Stable Render on 1M+ Polygons' },
      { metric: '< 30ms', label: 'Global Multiplayer Sync Latency' },
      { metric: '140k+', label: 'Active Engineering Users' },
      { metric: '4.8x', label: 'Faster Collaboration vs Legacy CAD' },
    ],
    accentColor: '#E53935',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    ],
    testimonial: {
      quote:
        'PulseCraft’s mastery of low-level graphics and distributed state synchronization is extraordinary. They turned our ambitious vision into reality.',
      author: 'David Chen',
      role: 'Founder & CEO',
      company: 'VoxelFlow',
    },
  },
  {
    id: 'medsync-health',
    slug: 'medsync-telehealth-ecosystem',
    title: 'MedSync Pro: Secure Clinical Telehealth & Patient Management Ecosystem',
    client: 'Provincial Health Network',
    industry: 'Healthcare & MedTech',
    category: 'Web',
    platform: 'Web App & Mobile Companion (HIPAA/PIPEDA)',
    timeline: '5 Months',
    tagline: 'Bridging healthcare providers and remote patients with encrypted video, vitals streaming, and EMR integration.',
    summary:
      'A comprehensive Canadian healthcare platform delivering peer-to-peer encrypted telemedicine visits, automated patient triage, electronic prescriptions, and laboratory results delivery.',
    challenge:
      'Building an ultra-secure, intuitive platform accessible to patients aged 18 to 90 while adhering to Canadian PIPEDA regulations and provincial privacy directives.',
    strategy:
      'We developed an accessible, high-contrast user interface with WebRTC peer-to-peer encrypted video streams, integrated directly into provincial hospital EMR systems using HL7 FHIR APIs.',
    designHighlights: [
      'One-click video room access with zero software installation required for patients',
      'High-contrast, large-type accessible interface meeting WCAG 2.1 AAA standards',
      'Visual timeline of patient medical history, prescriptions, and laboratory reports',
      'Doctor clinical note-taking interface with integrated voice-to-text dictation',
    ],
    developmentHighlights: [
      'End-to-end encrypted WebRTC audio/video calls with automated bandwidth adaptation',
      'HL7 FHIR compliant bi-directional integration with major Canadian hospital EMRs',
      'Automated SMS appointment reminders reducing no-show rates by 68%',
      'Role-based access control (RBAC) with strict multi-factor authentication',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'WebRTC', 'PostgreSQL', 'AWS Health', 'TypeScript', 'Tailwind CSS'],
    results: [
      { metric: '250,000+', label: 'Patient Consultations Conducted' },
      { metric: '68%', label: 'Reduction in Clinic No-Shows' },
      { metric: '99.4%', label: 'Positive Patient Feedback' },
      { metric: 'PIPEDA & HIPAA', label: '100% Verified Compliance' },
    ],
    accentColor: '#E53935',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    ],
    testimonial: {
      quote:
        'The reliability, security, and simplicity PulseCraft delivered has fundamentally transformed how our clinical staff delivers care across the region.',
      author: 'Dr. Catherine Tremblay',
      role: 'Chief Medical Information Officer',
      company: 'Provincial Health Network',
    },
  },
  {
    id: 'omnistore-retail',
    slug: 'omnistore-global-headless-commerce',
    title: 'OmniStore: Ultra-Fast Headless Commerce for Multi-Brand Retail',
    client: 'Nordic Retail Group',
    industry: 'E-Commerce & Global Retail',
    category: 'Web',
    platform: 'Next.js Global Edge Platform',
    timeline: '4 Months',
    tagline: 'High-conversion edge-rendered digital storefront processing 10,000+ orders during flash sales.',
    summary:
      'We rebuilt a legacy e-commerce platform into an ultra-modern headless commerce architecture deployed to the global edge, with localized currencies and 400ms page transitions.',
    challenge:
      'The client suffered severe site crashes and 6+ second loading times during seasonal sales, resulting in millions of dollars in abandoned shopping carts.',
    strategy:
      'We designed a headless Next.js frontend with edge caching, automated inventory synchronization, and a custom one-page checkout optimized for frictionless conversion.',
    designHighlights: [
      'Micro-animations on cart add, wishlist toggle, and product variant selection',
      'Instant search autocomplete with predictive AI product recommendations',
      'Streamlined 2-step checkout with Apple Pay and Google Pay one-tap buying',
      'Responsive lookbook visual merchandising layout for high-end photography',
    ],
    developmentHighlights: [
      'Next.js Incremental Static Regeneration (ISR) delivering 98+ Lighthouse scores',
      'Edge API caching with Cloudflare Workers reducing backend load by 85%',
      'Stripe & Shopify Plus headless API integration handling 2,000 checkout req/sec',
      'Multi-currency and multi-language automated geo-routing',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify Plus', 'Stripe', 'Redis'],
    results: [
      { metric: '+53%', label: 'Mobile Conversion Rate Surge' },
      { metric: '0.4s', label: 'Average Page Load Time' },
      { metric: '$42M+', label: 'Annual Online GMV Processed' },
      { metric: '0 Failures', label: 'Black Friday 100% Uptime' },
    ],
    accentColor: '#E53935',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67e5572243?auto=format&fit=crop&w=1200&q=80',
    ],
    testimonial: {
      quote:
        'PulseCraft transformed our digital storefront from our biggest liability into our most powerful revenue engine.',
      author: 'Henrik Lindqvist',
      role: 'Head of Global Digital Commerce',
      company: 'Nordic Retail Group',
    },
  },
  {
    id: 'krypton-mobile',
    slug: 'krypton-crypto-hardware-wallet',
    title: 'Krypton Key: Hardware-Secured Mobile Asset Custody & DeFi Gateway',
    client: 'Krypton Labs Canada',
    industry: 'Web3 & Cryptographic Systems',
    category: 'Mobile',
    platform: 'Android & iOS (NFC & Bluetooth LE)',
    timeline: '6 Months',
    tagline: 'Institutional-grade cryptographic key management with hardware NFC card signing.',
    summary:
      'A cross-platform mobile custody application pairing with NFC physical smart cards and Bluetooth hardware tokens for cold-storage security on personal mobile devices.',
    challenge:
      'Creating an impenetrable cryptographic transaction signing interface that non-technical users could understand without risking private key exposure.',
    strategy:
      'We engineered a native mobile application communicating with secure element smart cards over ISO/IEC 14443 NFC protocols, featuring human-readable transaction simulation.',
    designHighlights: [
      'Clean security audit cards translating complex smart contract bytecode into clear actions',
      'Intuitive NFC tap-and-hold signing interaction with visual confirmation waves',
      'Stealth privacy mode obscuring balances upon device tilt or screen capture',
      'Biometric secondary challenge for high-value asset transfers',
    ],
    developmentHighlights: [
      'Low-level APDU NFC protocol implementation in Kotlin and Swift',
      'Zero-knowledge proof verification preventing wallet address tracking',
      'Local encrypted SQLite database with SQLCipher 256-bit AES encryption',
      'Multi-chain RPC load balancer supporting Ethereum, Polygon, Solana, and Bitcoin',
    ],
    technologies: ['Kotlin', 'Swift', 'Jetpack Compose', 'SwiftUI', 'NFC Core', 'SQLCipher', 'Web3 RPC'],
    results: [
      { metric: '$500M+', label: 'Assets Secured & Protected' },
      { metric: '0 Security Breaches', label: 'Third-Party Audited by CertiK' },
      { metric: '120k+', label: 'Active Verified Holders' },
      { metric: '< 2 sec', label: 'Hardware NFC Signing Speed' },
    ],
    accentColor: '#E53935',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=1200&q=80',
    ],
    testimonial: {
      quote:
        'PulseCraft’s attention to cryptographic precision and mobile hardware integration was world-class. They built an uncompromising product.',
      author: 'Tariq Al-Mansoor',
      role: 'Chief Cryptographer',
      company: 'Krypton Labs',
    },
  },
];
