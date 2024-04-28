import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';

const PAGE_SIZE = 4;

export type TimelineProps = {
  goal: {
    goalId: number;
    title: string;
    description: string;
    deadline: string;
    stickerUrl: string;
    tag: string;
    createdAt: string;
    cursorId: number;
  };
  counts: {
    comment: number;
    task: number;
  };
  emojis: Array<{
    id: number;
    name: string;
    url: string;
    reactCount: number;
    isMyReaction: boolean;
  }>;
};

export type TimelineResponse = {
  contents: Array<TimelineProps>;
  total: number;
  page: number;
};

export const useGetTimeline = () => {
  return useSuspenseInfiniteQuery<TimelineResponse>({
    queryKey: ['timeline'],
    queryFn: ({ pageParam }) =>
      api.get<TimelineResponse>(`/life-map/timeline`, {
        params: { page: pageParam, size: PAGE_SIZE },
      }),
    initialPageParam: 0,
    getNextPageParam: ({ total, page: currentPage }) => {
      const isLast = (currentPage + 1) * PAGE_SIZE >= total;
      const nextPage = currentPage + 1;

      return isLast ? null : nextPage;
    },
    staleTime: 0,
  });
};
