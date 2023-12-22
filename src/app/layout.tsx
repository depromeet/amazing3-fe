import { Analytics } from '@vercel/analytics/react';

import Providers from '@/contexts/Providers';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <head>
        <title>반디부디: 별이 되고 싶은 반디부디의 인생지도</title>
      </head>
      <body>
        <Providers>
          <div className="layout">{children}</div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
