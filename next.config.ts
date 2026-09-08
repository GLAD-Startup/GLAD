import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.29.138', '192.168.*.*'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/portfolio/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/journal',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/journal/:slug',
        destination: '/insights/:slug',
        permanent: true,
      },
      {
        source: '/article',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/article/:slug',
        destination: '/insights/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
