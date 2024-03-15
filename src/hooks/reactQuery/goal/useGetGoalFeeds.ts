import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';

export type UserProps = {
  id: number;
  nickname: string;
  username: string;
  image: string;
};

export type GoalProps = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  sticker: string;
  tag: string;
  createdAt: string;
};
export type CountProps = {
  reaction: number;
  comment: number;
  task: number;
  goal: number;
};

export type EmojisProps = {
  id: number;
  name: string;
  url: string;
  reactCount: number;
  isMyReaction: boolean;
};

export type GoalFeedProps = {
  user: UserProps;
  goal: GoalProps;
  count: CountProps;
  emojis: Array<EmojisProps>;
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
