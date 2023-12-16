'use client';

import type { PropsWithChildren } from 'react';
import { OverlayProvider } from '@toss/use-overlay';

import QueryClientProvider from './reactQuery/QueryClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryClientProvider>
  );
};

export default Providers;
