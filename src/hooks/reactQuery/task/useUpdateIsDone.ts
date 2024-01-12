import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalResponse } from '../goal/useGetGoal';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type IsDoneRequest = {
  goalId: number;
  taskId: number;
  isDone: boolean;
};

export const useUpdateIsDone = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  return useMutation({
    mutationFn: ({ taskId, isDone }: IsDoneRequest) => api.patch(`/task/${taskId}/isDone`, { isDone }),
    onMutate: async ({ goalId, taskId, isDone }: IsDoneRequest) => {
      const targetQueryKey = ['goal', goalId];

      const updater = (old: GoalResponse): GoalResponse => {
        const updatedTask = old.tasks.map((task) => (task.taskId === taskId ? { ...task, isTaskDone: isDone } : task));
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
