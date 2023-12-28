import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { META } from '@/constants';
import Providers from '@/contexts/Providers';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(META.url),
  title: META.title,
  description: META.description,
  keywords: [...META.keyword],
  openGraph: {
    title: META.title,
    description: META.description,
    siteName: META.siteName,
    locale: 'ko_KR',
    type: 'website',
    url: META.url,
    images: {
      url: META.ogImage,
    },
  },
  verification: {
    google: META.googleVerification,
  },
  twitter: {
    title: META.title,
    description: META.description,
    images: {
      url: META.ogImage,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <head>
        <link rel="icon" href="/icon.ico" />
        <link rel="apple-touch-icon" href="/icon.ico" />
      </head>
      <body>
        <Providers>
          <div className="layout">{children}</div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
