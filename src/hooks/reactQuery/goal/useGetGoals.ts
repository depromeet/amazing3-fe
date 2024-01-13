import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

export type GoalProps = {
  id: number;
  deadline: string;
  stickerUrl: string;
  tagContent: string;
};

export type GoalResponse = {
  isPublic: boolean;
  goals: Array<GoalProps>;
  goalsCount: number;
};

export const useGetGoals = () => {
  return useQuery<GoalResponse>({
    queryKey: ['goals'],
    queryFn: () => api.get<GoalResponse>('/life-map'),
    throwOnError: true,
  });
};
