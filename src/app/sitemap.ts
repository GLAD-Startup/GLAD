import { MetadataRoute } from 'next';
import { projectsData } from '@/data/work';
import { servicesData } from '@/data/services';
import { productsData } from '@/data/products';
import { articlesData } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gladstudio.net';

  // Static canonical routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/work',
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
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Work dynamic routes
  const workRoutes: MetadataRoute.Sitemap = projectsData.map((p) => {
    const parsedDate = p.date ? new Date(p.date) : null;
    const isValidDate = parsedDate && !isNaN(parsedDate.getTime());

    return {
      url: `${baseUrl}/work/${p.slug}`,
      ...(isValidDate ? { lastModified: parsedDate } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    };
  });

  // Service dynamic routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Product dynamic routes
  const productRoutes: MetadataRoute.Sitemap = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Insights dynamic routes
  const insightRoutes: MetadataRoute.Sitemap = articlesData.map((a) => {
    const parsedDate = a.date ? new Date(a.date) : null;
    const isValidDate = parsedDate && !isNaN(parsedDate.getTime());

    return {
      url: `${baseUrl}/insights/${a.slug}`,
      ...(isValidDate ? { lastModified: parsedDate } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    };
  });

  return [
    ...staticRoutes,
    ...workRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...insightRoutes,
  ];
}
