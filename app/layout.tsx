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
    'Toronto Technology Company',
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
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 King Street West, Suite 5600',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      postalCode: 'M5X 1C9',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.headquarters.coordinates.lat,
      longitude: SITE_CONFIG.headquarters.coordinates.lng,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'customer service',
      email: SITE_CONFIG.contact.general,
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'French'],
    },
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.twitter,
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
