import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';

import type { TimelineResponse } from './useGetTimeline';

const PAGE_SIZE = 4;

export const useGetPublicTimeline = (username: string) => {
  return useSuspenseInfiniteQuery<TimelineResponse>({
    queryKey: ['publicTimeline', username],
    queryFn: ({ pageParam }) =>
      api.get<TimelineResponse>(`/open/life-map/timeline/${username}`, {
        params: { page: pageParam, size: PAGE_SIZE },
      }),
    initialPageParam: 0,
    getNextPageParam: ({ total, page: currentPage }) => {
      const isLast = (currentPage + 1) * PAGE_SIZE >= total;
      const nextPage = currentPage + 1;

      return isLast ? null : nextPage;
    },
  });
};
