import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GAPLaw | Адвокатско дружество Горанова и Христова-Аличкова',
    short_name: 'GAPLaw',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f9fe',
    theme_color: '#CBE2FE',
    lang: 'bg',
    icons: [
      {
        src: '/logo_temp.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
