import { NavMenuItem } from '@/types';

export const MAIN_NAV_ITEMS: NavMenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { name: 'Mobile Engineering', href: '/services#mobile' },
    { name: 'Web Platforms', href: '/services#web' },
    { name: 'AI & Intelligent Systems', href: '/services#ai' },
    { name: 'Backend & Cloud', href: '/services#backend' },
    { name: 'Product Design Systems', href: '/services#design' },
    { name: 'Cloud DevOps & CI/CD', href: '/services#devops' },
  ],
  solutions: [
    { name: 'Startups & Scale-ups', href: '/solutions#startups' },
    { name: 'SaaS Platforms', href: '/solutions#saas' },
    { name: 'Enterprise Modernization', href: '/solutions#enterprises' },
    { name: 'FinTech Systems', href: '/solutions#fintech' },
    { name: 'Healthcare & MedTech', href: '/solutions#healthcare' },
    { name: 'AI Automation', href: '/solutions#ai' },
  ],
  company: [
    { name: 'About PulseCraft', href: '/about' },
    { name: 'The PulseCraft Method', href: '/#method' },
    { name: 'Executive Leadership', href: '/about#leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'Canadian Headquarters', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy (PIPEDA)', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security Protocols', href: '/privacy#security' },
  ],
};
