import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Cursor from '@/components/ui/Cursor';
import Nav from '@/components/layout/Nav';
import BackToTop from '@/components/ui/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://gladstudio.net'),
  title: {
    default: 'GLAD studio — Web, Mobile & AI Development Agency',
    template: '%s — GLAD studio',
  },
  description:
    'We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gladstudio.net',
    siteName: 'GLAD studio',
    title: 'GLAD studio — Web, Mobile & AI Development Agency',
    description:
      'We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GLAD studio — Web, Mobile & AI Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_GLAD_Studio',
    creator: '@_GLAD_Studio',
    images: ['/brand/og-image.png'],
  },
  alternates: {
    canonical: 'https://gladstudio.net',
  },
};

export const viewport: Viewport = {
  themeColor: '#FBFBF9',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GLAD studio',
  url: 'https://gladstudio.net',
  logo: 'https://gladstudio.net/brand/website-logo-white-background-compatible.png',
  sameAs: [
    'https://x.com/_GLAD_Studio',
    'https://www.linkedin.com/company/glad-studio-2k26',
    'https://www.instagram.com/__gladstudio/',
    'https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vrindavan',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@gladstudio.net',
    contactType: 'customer support',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-bg text-fg antialiased overflow-x-clip cursor-none"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var isHome = window.location.pathname === '/';
                  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  if (isHome && !reduced) {
                    document.documentElement.classList.add('intro-armed');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-bg text-fg antialiased overflow-x-clip cursor-none min-h-screen">
        <SmoothScroll>
          <Cursor />
          <Nav />
          <div id="top" className="w-full flex justify-center bg-bg min-h-screen">
            <div className="w-full max-w-[1512px] relative bg-bg">
              {children}
            </div>
          </div>
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
