'use client';

import type { PropsWithChildren } from 'react';
import { OverlayProvider } from '@toss/use-overlay';

import { useOpenExternalBrowser } from '@/hooks/useOpenExternalBrowser';

import QueryClientProvider from './reactQuery/QueryClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  useOpenExternalBrowser();

  return (
    <QueryClientProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryClientProvider>
  );
};

export default Providers;
