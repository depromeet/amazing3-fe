import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';

type GoalRequest = {
  title: string;
  yearOfDeadline: string;
  monthOfDeadline: string;
  stickerId: number;
  tagId: number;
  description: string;
};

type GoalResponse = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  stickerUrl: string;
  tag: string;
};

export const useCreateGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: GoalRequest) => api.post<GoalResponse>('/goal', data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['goals'] }),
  });
};
