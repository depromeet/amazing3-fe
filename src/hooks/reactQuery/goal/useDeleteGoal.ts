import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequestParams = {
  goalId: number;
};

export const useDeleteGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: GoalRequestParams) => api.delete(`/goal/${data.goalId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['goals'] }),
  });
};
