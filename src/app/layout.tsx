import type { Metadata, Viewport } from 'next';
import { Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Cursor from '@/components/ui/Cursor';
import Nav from '@/components/layout/Nav';
import FloatingFooter from '@/components/layout/FloatingFooter';
import CalProvider from '@/components/providers/CalProvider';
import PageTransition from '@/components/providers/PageTransition';

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-devanagari',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gladstudio.net'),
  title: {
    default: 'GLAD Studio — Web, Mobile & AI Product Engineering',
    template: '%s | GLAD Studio',
  },
  description:
    'We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.',
  icons: {
    icon: [
      { url: '/brand/og-image.png', type: 'image/png' },
      { url: '/brand/og-image.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/og-image.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/brand/og-image.png',
    apple: '/brand/og-image.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gladstudio.net',
    siteName: 'GLAD Studio',
    title: 'GLAD Studio — Web, Mobile & AI Product Engineering',
    description:
      'We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GLAD Studio — Web, Mobile & AI Development Agency',
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
  '@id': 'https://gladstudio.net/#organization',
  name: 'GLAD Studio',
  url: 'https://gladstudio.net',
  logo: 'https://gladstudio.net/brand/website-logo-white-background-compatible.png',
  description:
    'We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.',
  sameAs: [
    'https://www.upwork.com/agencies/2070043441987395021/',
    'https://x.com/_GLAD_Studio',
    'https://www.linkedin.com/company/glad-studio-2k26',
    'https://www.instagram.com/__gladstudio/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vrindavan',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@gladstudio.net',
    contactType: 'customer support',
  },
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://gladstudio.net/#website',
  url: 'https://gladstudio.net',
  name: 'GLAD Studio',
  description:
    'We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.',
  publisher: {
    '@id': 'https://gladstudio.net/#organization',
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
      className={`bg-bg text-fg antialiased overflow-x-clip min-[810px]:cursor-none ${notoSansDevanagari.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var isHome = window.location.pathname === '/';
                  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  if (isHome && !reduced) {
                    document.documentElement.classList.add('intro-armed');
                  } else {
                    document.documentElement.classList.remove('intro-armed');
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="bg-bg text-fg antialiased overflow-x-clip min-[810px]:cursor-none min-h-screen">
        <SmoothScroll>
          <CalProvider />
          <Cursor />
          <Nav />
          <div id="top" className="w-full flex justify-center bg-bg min-h-screen">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <FloatingFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
