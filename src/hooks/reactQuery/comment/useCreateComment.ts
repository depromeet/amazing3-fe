import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useUpdateTimelineCommentCount } from '@/features/home/hooks/useUpdateTimelineCommentCount';
import { useToast } from '@/hooks';

type CommentRequest = {
  goalId: number;
  content: string;
};

export const useCreateComment = () => {
  const toast = useToast();
  const { queryKey, updateTimelineCommentCount } = useUpdateTimelineCommentCount({ isAddingComment: true });

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ goalId, content }: CommentRequest) => api.post(`/goal/${goalId}/comment`, { content }),
    onSuccess: (_, { goalId }) => {
      queryClient.invalidateQueries({ queryKey: ['comment', goalId] });
      queryClient.setQueryData(queryKey, updateTimelineCommentCount(goalId));
    },
    onError: () => {
      toast.warning('잠시후 다시 시도해주세요.');
    },
  });
};
