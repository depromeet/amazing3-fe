import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalResponse } from '../goal/useGetGoal';

type IsDoneRequest = {
  goalId: number;
  taskId: number;
  isDone: boolean;
};

export const useUpdateIsDone = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, isDone }: IsDoneRequest) => api.patch(`/task/${taskId}/isDone`, { isDone }),
    onMutate: async ({ goalId, taskId, isDone }: IsDoneRequest) => {
      const targetQueryKey = ['goal', goalId];

      await queryClient.cancelQueries({ queryKey: targetQueryKey });
      const previous = queryClient.getQueryData(targetQueryKey);

      queryClient.setQueryData(targetQueryKey, (old: GoalResponse): GoalResponse => {
        const updatedTask = old.tasks.map((task) => (task.taskId === taskId ? { ...task, isTaskDone: isDone } : task));
        const updatedGoal = { ...old, tasks: updatedTask };

        return updatedGoal;
      });
      return { previous };
    },
    onError: (_, variable, context) => {
      const targetQueryKey = ['goal', variable.goalId];
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
