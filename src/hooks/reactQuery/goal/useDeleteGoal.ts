import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequestParams = {
  goalId: number;
};

export const useDeleteGoal = ({ goalId }: GoalRequestParams) => {
  return useMutation({
    mutationFn: () => api.delete(`/goal/${goalId}`),
  });
};
