import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

export type GoalFeedProps = {
  user: {
    id: number;
    nickname: string;
    image: string;
  };
  goal: {
    id: number;
    title: string;
    description: string;
    deadline: string;
    sticker: string;
    tag: string;
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

export const useGetGoalFeeds = () => {
  return useQuery<GoalFeedResponse>({
    queryKey: ['goalFeeds'],
    queryFn: () => api.get<GoalFeedResponse>('/goal/explore'),
  });
};
