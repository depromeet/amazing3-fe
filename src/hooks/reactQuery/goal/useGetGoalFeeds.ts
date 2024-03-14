import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';

export type GoalFeedProps = {
  user: {
    id: number;
    nickname: string;
    username: string;
    image: string;
  };
  goal: {
    id: number;
    title: string;
    description: string;
    deadline: string;
    sticker: string;
    tag: string;
    createdAt: string;
  };
  count: {
    reaction: number;
    comment: number;
    task: number;
    goal: number;
  };
};

export type GoalFeedResponse = {
  goals: Array<GoalFeedProps>;
  cursor: {
    next: number;
  };
};

const PAGE_SIZE = 10;

export const useGetGoalFeeds = () => {
  return useInfiniteQuery<GoalFeedResponse>({
    queryKey: ['goalFeeds'],
    queryFn: ({ pageParam }) => api.get<GoalFeedResponse>('/goal/explore', { params: { cursor: pageParam } }),
    initialPageParam: null,
    getNextPageParam: ({ goals, cursor }) => (cursor && goals.length === PAGE_SIZE ? cursor.next : null),
  });
};
