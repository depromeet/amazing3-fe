import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type FeedEmojis = {
  id: number;
  name: string;
  url: string;
  reactCount: number;
  isMyReaction: boolean;
};

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
  emojis: Array<FeedEmojis>;
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
