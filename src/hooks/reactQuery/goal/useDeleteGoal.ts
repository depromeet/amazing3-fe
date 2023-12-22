import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequestParams = {
  goalId: number;
};

export const useDeleteGoal = () => {
  return useMutation({
    mutationFn: (data: GoalRequestParams) => api.delete(`/goal/${data.goalId}`),
  });
};
