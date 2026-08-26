import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/work/:slug',
        destination: '/portfolio/:slug',
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
    ];
  },
};

export default nextConfig;
