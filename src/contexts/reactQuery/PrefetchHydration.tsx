import { cache, type PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient, type QueryFunction, type QueryKey } from '@tanstack/react-query';

interface FetchQueryOptions {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

const PrefetchHydration = async ({ queryKey, queryFn, children }: PropsWithChildren<FetchQueryOptions>) => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey, queryFn });

  const dehydratedState = dehydrate(queryClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};

export default PrefetchHydration;
