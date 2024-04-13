import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';

import type { TimelineResponse } from './useGetTimeline';

const PAGE_SIZE = 4;

export const useGetPublicTimeline = (username: string) => {
  return useSuspenseInfiniteQuery<TimelineResponse>({
    queryKey: ['publicTimeline', username],
    queryFn: ({ pageParam }) =>
      api.get<TimelineResponse>(`/open/life-map/timeline/${username}`, {
        params: { cursor: pageParam, size: PAGE_SIZE },
      }),
    initialPageParam: null,
    getNextPageParam: ({ isLast, nextCursor }) => (isLast ? null : nextCursor),
  });
};
