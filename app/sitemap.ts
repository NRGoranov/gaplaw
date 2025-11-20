import type { MetadataRoute } from 'next';

const baseUrl = 'https://gaplaw.eu';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/insights', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

