'use client';

import type { PropsWithChildren } from 'react';
import { OverlayProvider } from '@toss/use-overlay';
import { domAnimation, LazyMotion } from 'framer-motion';

import { useOpenExternalBrowser } from '@/hooks/useOpenExternalBrowser';

import QueryClientProvider from './reactQuery/QueryClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  useOpenExternalBrowser();

  return (
    <LazyMotion features={domAnimation}>
      <QueryClientProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </QueryClientProvider>
    </LazyMotion>
  );
};

export default Providers;
