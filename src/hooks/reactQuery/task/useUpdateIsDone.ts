import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

type IsDoneRequest = {
  goalId: number;
  taskId: number;
  isDone: boolean;
};

export const useUpdateIsDone = () => {
  return useMutation({
    mutationFn: ({ taskId, isDone }: IsDoneRequest) => api.patch(`/task/${taskId}/isDone`, { isDone }),
  });
};
