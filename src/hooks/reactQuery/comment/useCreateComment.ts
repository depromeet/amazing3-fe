import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useToast } from '@/hooks';

type CommentRequest = {
  goalId: number;
  content: string;
};

export const useCreateComment = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ goalId, content }: CommentRequest) => api.post(`/goal/${goalId}/comment`, { content }),
    onSuccess: (_, variable) => queryClient.invalidateQueries({ queryKey: ['comment', variable.goalId] }),
    onError: () => {
      toast.warning('잠시후 다시 시도해주세요.');
    },
  });
};
