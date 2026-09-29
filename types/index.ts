export interface NavMenuItem {
  name: string;
  href: string;
  badge?: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Mobile' | 'Backend' | 'Cloud' | 'AI & ML';
  icon: string;
  description: string;
  popularity?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  technologies: string[];
  deliverables: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  targetAudience: string;
  keyBenefits: string[];
  featuredTech: string[];
  tag: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: 'Mobile' | 'Web' | 'AI' | 'SaaS';
  platform: string;
  timeline: string;
  tagline: string;
  summary: string;
  challenge: string;
  strategy: string;
  designHighlights: string[];
  developmentHighlights: string[];
  technologies: string[];
  results: { metric: string; label: string }[];
  accentColor: string;
  image: string;
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  activities: string[];
  deliverables: string[];
  iconName: string;
}

export interface WhyPillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  points: string[];
}

export interface LeaderMember {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  expertise: string[];
}

export interface CultureValue {
  name: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface JobPosition {
  id: string;
  slug: string;
  title: string;
  department: 'Engineering' | 'Design' | 'Product' | 'AI Research' | 'Cloud Operations';
  location: string;
  employmentType: 'Full-time' | 'Contract' | 'Part-time';
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  postedDate: string;
  isActive: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Engineering' | 'Artificial Intelligence' | 'Mobile Development' | 'Architecture' | 'Product Strategy';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budgetRange: string;
  timeline?: string;
  details: string;
  submittedAt: string;
  status: 'new' | 'reviewed' | 'contacted';
}

export interface CareerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  positionId: string;
  positionTitle: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  resumeFileName?: string;
  message: string;
  submittedAt: string;
  status: 'pending' | 'screening' | 'interviewed';
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribedAt: string;
}
