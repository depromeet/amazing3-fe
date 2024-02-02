import type { Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Providers from '@/contexts/Providers';
import { GoogleAnalytics } from '@/features/analyzer';
import { getMetadata } from '@/utils/getMetadata';

import { insungIt, pretendard } from './fonts';

import './globals.css';

export const metadata = getMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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

        <GoogleAnalytics />
      </body>
    </html>
  );
}
