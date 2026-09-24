import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

const baseUrl = 'https://gaplaw.eu';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/about', '/services', '/insights', '/contact'];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
  );
}
