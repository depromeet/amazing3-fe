'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import { OverlayProvider } from '@toss/use-overlay';
import { domAnimation, LazyMotion } from 'framer-motion';

import { ToastProvider } from '@/components/atoms/toast/ToastProvider';
import { useOpenExternalBrowser } from '@/hooks/useOpenExternalBrowser';

import QueryClientProvider from './reactQuery/QueryClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  useOpenExternalBrowser();

  return (
    <LazyMotion features={domAnimation}>
      <QueryClientProvider>
        <ToastProvider />
        <OverlayProvider>{children}</OverlayProvider>
      </QueryClientProvider>
    </LazyMotion>
  );
};

export default Providers;
