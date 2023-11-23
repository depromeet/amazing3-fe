import QueryClientProvider from '@/contexts/reactQuery/QueryClientProvider';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
