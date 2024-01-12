import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalResponse } from '../goal/useGetGoal';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type TaskRequest = {
  goalId: number;
  description: string;
};

type TaskResponse = {
  id: number;
  description: string;
};

export const useCreateTask = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  return useMutation({
    mutationFn: (data: TaskRequest) => api.post<TaskResponse>('/task', data),
    onMutate: async (data: TaskRequest) => {
      const targetQueryKey = ['goal', data.goalId];

      const newTask = { isTaskDone: false, taskId: -1, taskDescription: data.description };

      const updater = (old: GoalResponse): GoalResponse => {
        const updatedTasks = [...old.tasks, newTask];
        const updatedGoalResponse = { ...old, tasks: updatedTasks };

        return updatedGoalResponse;
      };

      const context = await optimisticUpdater({ queryKey: targetQueryKey, updater });
      return context;
    },
    onSuccess: (data: TaskResponse, variables) => {
      const targetQueryKey = ['goal', variables.goalId];

      queryClient.setQueryData(targetQueryKey, (old: GoalResponse): GoalResponse => {
        const updatedTasks = old.tasks.map((task) => (task.taskId === -1 ? { ...task, taskId: data.id } : task));
        return { ...old, tasks: updatedTasks };
      });
    },
    onError: (_, variables, context) => {
      const targetQueryKey = ['goal', variables.goalId];
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
