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
  isLast: boolean;
  nextCursor: number;
};

export const useGetTimeline = (username: string) => {
  return useSuspenseInfiniteQuery<TimelineResponse>({
    queryKey: ['timeline', username],
    queryFn: ({ pageParam }) =>
      api.get<TimelineResponse>(`/open/life-map/timeline/${username}`, {
        params: { cursor: pageParam, size: PAGE_SIZE },
      }),
    initialPageParam: null,
    getNextPageParam: ({ isLast, nextCursor }) => (isLast ? null : nextCursor),
  });
};
