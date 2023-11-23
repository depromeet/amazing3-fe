'use client';

import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider as BaseQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      networkMode: 'always',
    },
    mutations: {
      networkMode: 'always',
    },
  },
};

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOption));

  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </BaseQueryClientProvider>
  );
};

export default QueryClientProvider;
