import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequest = {
  goalId: number;
};

export const useDeleteGoal = () => {
  return useMutation({
    mutationFn: (data: GoalRequest) =>
      api.delete('/goal', {
        data: {
          goalId: data.goalId,
        },
      }),
  });
};
