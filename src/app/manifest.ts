import type { MetadataRoute } from 'next';

import { META } from '@/constants';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: META.title,
    short_name: META.siteName,
    description: META.description,
    start_url: '/',
    display: 'fullscreen',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon_16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon_32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon_64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/favicon_192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon_512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
};

export default manifest;
