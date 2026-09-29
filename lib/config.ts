export const SITE_CONFIG = {
  name: 'PulseCraft Technologies Inc.',
  legalName: 'PULSECRAFT TECHNOLOGIES INC.',
  shortName: 'PulseCraft',
  tagline: 'Ideas Have a Pulse. Intelligence Gives Them Life.',
  heroHeadline: {
    line1: 'Ideas Have a Pulse.',
    line2: 'Intelligence Gives Them Life.',
  },
  heroSubtext:
    'We combine human creativity, intelligent technology, and exceptional engineering to turn ambitious ideas into products built for what’s next.',
  description:
    'PulseCraft Technologies Inc. is a Canadian technology company crafting intelligent mobile, web, AI, and digital products for ambitious businesses worldwide.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pulsecrafttechnologies.com',
  country: 'Canada',

  // Configurable Registered Office Information
  headquarters: {
    country: 'Canada',
    region: 'Ontario',
    city: 'Toronto',
    address:
      process.env.NEXT_PUBLIC_REGISTERED_ADDRESS ||
      '100 King Street West, Suite 5600, Toronto, ON M5X 1C9, Canada',
    coordinates: {
      lat: parseFloat(process.env.NEXT_PUBLIC_MAP_LAT || '43.6487'),
      lng: parseFloat(process.env.NEXT_PUBLIC_MAP_LNG || '-79.3817'),
    },
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=100+King+Street+West+Toronto+ON+Canada',
    officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    timezone: 'EST (UTC-5)',
  },

  // Contact Channels
  contact: {
    general: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@pulsecrafttechnologies.com',
    projects: process.env.NEXT_PUBLIC_PROJECTS_EMAIL || 'projects@pulsecrafttechnologies.com',
    careers: process.env.NEXT_PUBLIC_CAREERS_EMAIL || 'careers@pulsecrafttechnologies.com',
    phone: process.env.NEXT_PUBLIC_PHONE || '+1 (416) 800-7852',
  },

  // Social Links
  socials: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/pulsecraft-technologies',
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/pulsecraft-technologies',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/pulsecraft_tech',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/pulsecraft.tech',
  },

  // Stats
  stats: [
    {
      value: '120+',
      label: 'Products Launched',
      description: 'Intelligent web, mobile, and distributed AI systems shipped worldwide.',
    },
    {
      value: '99.99%',
      label: 'System Resilience',
      description: 'Engineered for zero-downtime reliability and enterprise fault tolerance.',
    },
    {
      value: '14+',
      label: 'Global Markets',
      description: 'Serving visionary enterprises across North America, Europe, and Asia.',
    },
    {
      value: '100%',
      label: 'Canadian Governance',
      description: 'Strict PIPEDA and zero-trust intellectual property protection.',
    },
  ],
};
