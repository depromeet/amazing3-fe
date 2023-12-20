import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalResponse = Array<{
  goals: Array<{
    id: number;
    deadline: string;
    stickerUrl: string;
    tagContent: string;
  }>;
  goalsCount: number;
}>;

export const useGetGoals = () => {
  return useQuery<GoalResponse>({
    queryKey: ['goals'],
    queryFn: () => api.get<GoalResponse>('/goal'),
  });
};
