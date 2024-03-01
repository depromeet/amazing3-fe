import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useToast } from '@/hooks/useToast';

type GoalRequestParams = {
  goalId: number;
};

export interface UpdateGoalRequest {
  title: string;
  yearOfDeadline: string;
  monthOfDeadline: string;
  stickerId: number;
  tagId: number;
  description: string;
}

export const useUpdateGoal = ({ goalId }: GoalRequestParams) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (data: UpdateGoalRequest) => api.patch(`/goal/${goalId}`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(['goal', goalId], data);
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      setTimeout(() => {
        toast.success('목표 수정이 완료되었어요.');
      }, 1000); // delay in milliseconds
    },
    onError: () => {
      toast.warning('목표 수정에 실패했어요. 다시 시도해주세요.');
    },
  });
};
