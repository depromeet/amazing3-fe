import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequestParams = {
  goalId: number;
};

export type GoalTasksProps = {
  taskId: number;
  isTaskDone: boolean;
  taskDescription: string;
};

export type GoalResponse = {
  title: string;
  deadline: string;
  stickerUrl: string;
  description: string;
  isMyGoal: boolean;
  tagInfo: {
    tagId: number;
    tagContent: string;
  };
  isMyGoal: boolean;
  tasks: GoalTasksProps[];
};

export const useGetGoal = ({ goalId }: GoalRequestParams) => {
  return useQuery<GoalResponse>({
    queryKey: ['goal', goalId],
    queryFn: () => api.get<GoalResponse>(`/goal/${goalId}`),
  });
};
