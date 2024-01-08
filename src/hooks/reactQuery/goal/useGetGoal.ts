import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequestParams = {
  goalId: number;
};

export type GoalTasksProps = {
  taskId: number;
  isTaskDone: true;
  taskDescription: string;
};

type GoalResponse = {
  title: string;
  deadline: string;
  stickerUrl: string;
  description: string;
  tagInfo: {
    tagId: number;
    tagContent: string;
  };
  tasks: GoalTasksProps[];
};

export const useGetGoal = ({ goalId }: GoalRequestParams) => {
  return useQuery<GoalResponse>({
    queryKey: ['goal', goalId],
    queryFn: () => api.get<GoalResponse>(`/goal/${goalId}`),
  });
};
