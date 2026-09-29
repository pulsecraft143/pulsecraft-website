import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import { SERVICES } from '@/data/services';
import { CASE_STUDIES } from '@/data/projects';
import { INSIGHTS } from '@/data/insights';
import { CAREER_JOBS } from '@/data/careers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/technologies',
    '/work',
    '/process',
    '/careers',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const workRoutes = CASE_STUDIES.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const insightRoutes = INSIGHTS.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const careerRoutes = CAREER_JOBS.map((j) => ({
    url: `${baseUrl}/careers/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...workRoutes,
    ...insightRoutes,
    ...careerRoutes,
  ];
}
