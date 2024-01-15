import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalResponse } from '../goal/useGetGoal';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type DescriptionRequest = {
  goalId: number;
  taskId: number;
  newDescription: string;
};

export const useUpdateDescription = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  return useMutation({
    mutationFn: ({ taskId, newDescription }: DescriptionRequest) =>
      api.patch(`/task/${taskId}/description`, { newDescription }),
    onMutate: async ({ goalId, taskId, newDescription }: DescriptionRequest) => {
      const targetQueryKey = ['goal', goalId];

      const updater = (old: GoalResponse): GoalResponse => {
        const updatedTask = old.tasks.map((task) =>
          task.taskId === taskId ? { ...task, taskDescription: newDescription } : task,
        );
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
