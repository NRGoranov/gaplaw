import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GAPLaw Website',
    short_name: 'GAPLaw',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#599b3b',
    lang: 'bg',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  };
}

