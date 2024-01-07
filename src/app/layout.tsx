import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { META } from '@/constants';
import Providers from '@/contexts/Providers';

import { insungIt, pretendard } from './fonts';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(META.url),
  alternates: {
    canonical: '/',
  },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '반디부디',
  url: 'https://bandibudi.com/',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable} ${insungIt.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Providers>
          <div className="layout font-pretendard">{children}</div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
