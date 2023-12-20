import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequestParams = {
  goalId: number;
};

type GoalResponse = Array<{
  goals: Array<{
    id: number;
    deadline: string;
    stickerUrl: string;
    tagContent: string;
  }>;
  goalsCount: number;
}>;

export const useGetGoal = ({ goalId }: GoalRequestParams) => {
  return useQuery<GoalResponse>({
    queryKey: ['goal', goalId],
    queryFn: () => api.get<GoalResponse>(`/goal/${goalId}`),
  });
};
