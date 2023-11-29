import Providers from '@/contexts/Providers';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
