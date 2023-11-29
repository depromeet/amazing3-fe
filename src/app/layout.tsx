import Providers from '@/contexts/Providers';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const DEFAULT_LAYOUT_SIZE = 'max-w-[520px] min-h-[100dvh]';

  return (
    <html lang="kr">
      <body>
        <Providers>
          <div className={`w-full mx-auto ${DEFAULT_LAYOUT_SIZE}`}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
