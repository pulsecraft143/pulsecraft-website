import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop';
import { CookieConsent } from '@/components/layout/CookieConsent';

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'PulseCraft Technologies Inc. | Intelligent Technology. Crafted for What’s Next.',
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'PulseCraft Technologies Inc.',
    'Canadian Technology Company',
    'AI Software Engineering Canada',
    'Mobile App Engineering Kotlin Swift',
    'Next.js Enterprise Web Platforms',
    'Artificial Intelligence & RAG Pipelines',
    'Distributed Cloud Architecture',
    'Oshawa Technology Company',
    'Ontario Technology Company',
  ],
  authors: [{ name: 'PulseCraft Technologies Inc.', url: SITE_CONFIG.url }],
  creator: 'PulseCraft Technologies Inc.',
  publisher: 'PulseCraft Technologies Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'PulseCraft Technologies Inc. | Intelligent Technology. Crafted for What’s Next.',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PulseCraft Technologies Inc. — Intelligent Technology. Crafted for What’s Next.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PulseCraft Technologies Inc. | Intelligent Technology. Crafted for What’s Next.',
    description: SITE_CONFIG.description,
    creator: '@pulsecraft_tech',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/favicon-512x512.png`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.general,
    priceRange: '$$$$',
    currenciesAccepted: 'CAD, USD, EUR, GBP',
    paymentAccepted: 'Wire Transfer, Corporate Invoicing, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '149 Giboulee Path',
      addressLocality: 'Oshawa',
      addressRegion: 'Ontario',
      postalCode: 'L1L 0M7',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.headquarters.coordinates.lat,
      longitude: SITE_CONFIG.headquarters.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    hasMap: SITE_CONFIG.headquarters.googleMapsDirectionsUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'customer service',
      email: SITE_CONFIG.contact.general,
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'French'],
    },
    founder: [
      {
        '@type': 'Person',
        name: 'Asad Azhar',
        jobTitle: 'Founder & Chief Executive Officer',
      },
      {
        '@type': 'Person',
        name: 'Adnan Bhatti',
        jobTitle: 'Co-Founder & Chief Technology Officer',
      },
    ],
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.twitter,
      SITE_CONFIG.socials.instagram,
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PulseCraft Technologies Inc.',
    alternateName: 'PulseCraft',
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
      logo: `${SITE_CONFIG.url}/favicon-512x512.png`,
    },
  };

  const sitelinksJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'About PulseCraft',
        description: 'Story, mission, values, and executive leadership of PulseCraft Technologies Inc.',
        url: `${SITE_CONFIG.url}/about`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Engineering Services',
        description: 'AI engineering, mobile applications, distributed cloud systems, and modern web platforms.',
        url: `${SITE_CONFIG.url}/services`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Enterprise Solutions',
        description: 'Industry-tailored architectures for FinTech, MedTech, logistics, and enterprise scale.',
        url: `${SITE_CONFIG.url}/solutions`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Case Studies & Work',
        description: 'Explore high-scale digital platforms built for leading brands and startups.',
        url: `${SITE_CONFIG.url}/work`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Careers at PulseCraft',
        description: 'Join an elite engineering force building next-generation digital products.',
        url: `${SITE_CONFIG.url}/careers`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Contact & Inquiries',
        description: 'Connect with technical leadership at our Oshawa, Ontario headquarters.',
        url: `${SITE_CONFIG.url}/contact`,
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B0B0D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-dark-void text-white selection:bg-brand-red selection:text-white">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
