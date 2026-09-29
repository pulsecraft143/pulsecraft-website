import { ProcessStep } from '@/types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'Phase 01',
    title: 'Discover',
    description:
      'Understanding your vision, core business goals, target user demographics, competitive landscape, and key technical constraints before writing a single line of code.',
    activities: [
      'Stakeholder Alignment & Product Vision Workshops',
      'User Personas, Journey Maps & Job-To-Be-Done (JTBD)',
      'Technical Feasibility & System Constraint Assessment',
      'Regulatory & Compliance Mapping (PIPEDA, HIPAA, SOC 2)',
    ],
    deliverables: [
      'Product Requirement Document (PRD)',
      'Information Architecture (IA)',
      'Risk & Compliance Matrix',
    ],
    iconName: 'Search',
  },
  {
    number: '02',
    phase: 'Phase 02',
    title: 'Strategy',
    description:
      'Creating the technical architecture, data model schemas, milestone roadmaps, infrastructure strategy, and sprint estimates that ensure on-time delivery.',
    activities: [
      'Cloud & Database Architecture Blueprints',
      'API Contract Design & Third-Party Integration Analysis',
      'Sprint Capacity & Agile Milestone Roadmap',
      'Security & Threat Modeling Architecture',
    ],
    deliverables: [
      'System Architecture Blueprint',
      'API Specifications (OpenAPI / Swagger)',
      'Project Release Milestone Plan',
    ],
    iconName: 'Compass',
  },
  {
    number: '03',
    phase: 'Phase 03',
    title: 'Design',
    description:
      'Building intuitive, accessible, and breathtaking visual interfaces. We design interactive wireframes, unified design tokens, and clickable prototypes in Figma.',
    activities: [
      'Low-Fidelity Wireframing & Rapid Usability Testing',
      'Atomic Design System & Component Library (Figma)',
      'High-Fidelity Visual Design & Dark/Light Theming',
      'Interactive Micro-Animations & Motion Prototyping',
    ],
    deliverables: [
      'Complete Production Figma Design System',
      'Interactive Clickable Prototype',
      'Developer Handoff Token Specs',
    ],
    iconName: 'Palette',
  },
  {
    number: '04',
    phase: 'Phase 04',
    title: 'Develop',
    description:
      'Engineering clean, modular, and strictly-typed software. We adhere to test-driven development, continuous integration, and frequent stakeholder demo iterations.',
    activities: [
      'Modular Frontend & Backend Microservice Construction',
      'Comprehensive Unit & Integration Test Automation',
      'Continuous Integration (CI) with Automated Previews',
      'Weekly Staging Environment Demos & Feedback Loops',
    ],
    deliverables: [
      'Production-Grade Source Code Repository',
      'Automated Test Suites (Jest, Cypress, Playwright)',
      'Live Staging Environment Access',
    ],
    iconName: 'Code2',
  },
  {
    number: '05',
    phase: 'Phase 05',
    title: 'Launch',
    description:
      'Rigorous end-to-end security audits, load testing, App Store submission management, DNS cutover, and real-time observability telemetry activation.',
    activities: [
      'Penetration Testing & Security Vulnerability Scan',
      'Load Testing & Database Query Optimization',
      'Apple App Store & Google Play Store Submission',
      'Zero-Downtime Production DNS Cutover',
    ],
    deliverables: [
      'Security Audit Clearance Report',
      'Production Deployment Telemetry Dashboard',
      'Live App Store / Web Production URL',
    ],
    iconName: 'Rocket',
  },
  {
    number: '06',
    phase: 'Phase 06',
    title: 'Scale',
    description:
      'Continuous product growth, proactive performance tuning, feature experimentation, conversion rate optimization, and dedicated 24/7 SLA engineering support.',
    activities: [
      'Live Telemetry & User Heatmap Behavior Analysis',
      'A/B Testing & Funnel Conversion Rate Optimization',
      'Cloud Auto-Scaling & Infrastructure Cost Optimization',
      'Ongoing Feature Iterations & Maintenance SLA',
    ],
    deliverables: [
      'Monthly Performance & Growth Reports',
      'Continuous Feature Rollouts',
      '24/7 Priority Support SLA',
    ],
    iconName: 'TrendingUp',
  },
];
