import { MetadataRoute } from 'next';
import { projectsData } from '@/data/work';
import { servicesData } from '@/data/services';
import { productsData } from '@/data/products';
import { articlesData } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gladstudio.net';
  const lastModified = new Date();

  // Static routes
  const staticRoutes = [
    '',
    '/portfolio',
    '/services',
    '/products',
    '/process',
    '/about',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Portfolio dynamic routes
  const portfolioRoutes = projectsData.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Service dynamic routes
  const serviceRoutes = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Product dynamic routes
  const productRoutes = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Insights dynamic routes
  const insightRoutes = articlesData.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...portfolioRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...insightRoutes,
  ];
}
