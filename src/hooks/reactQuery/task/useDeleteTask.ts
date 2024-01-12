import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalResponse } from '../goal/useGetGoal';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type TaskDeleteRequest = {
  goalId: number;
  taskId: number;
};

export const useDeleteTask = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  return useMutation({
    mutationFn: ({ taskId }: TaskDeleteRequest) => api.delete(`/task/${taskId}`),
    onMutate: async ({ goalId, taskId }) => {
      const targetQueryKey = ['goal', goalId];

      const updater = (old: GoalResponse): GoalResponse => {
        const updatedTask = old.tasks.filter((task) => task.taskId !== taskId);
        return { ...old, tasks: updatedTask };
      };
      const context = await optimisticUpdater({ queryKey: targetQueryKey, updater });
      return context;
    },
    onError: (_, variable, context) => {
      const targetQueryKey = ['goal', variable.goalId];
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
