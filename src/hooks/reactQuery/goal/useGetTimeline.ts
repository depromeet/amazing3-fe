import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalFeedResponse } from './useGetGoalFeeds';

const PAGE_SIZE = 10;

export const useGetTimeline = (username: string) => {
  return useSuspenseInfiniteQuery<GoalFeedResponse>({
    queryKey: ['timeline'],
    // NOTE: 새로운 api로 수정 예정
    queryFn: ({ pageParam }) => api.get<GoalFeedResponse>('/goal/explore', { params: { cursor: pageParam } }),
    initialPageParam: null,
    getNextPageParam: ({ goals, cursor }) => (cursor && goals.length === PAGE_SIZE ? cursor.next : null),
    select: (data) => ({
      pages: data.pages.flatMap((page) => ({
        goals: page.goals.filter(({ user }) => user.username === username),
        cursor: page.cursor,
      })),
      pageParams: data.pageParams,
    }),
  });
};
