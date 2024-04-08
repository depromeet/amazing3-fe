import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import { useUpdateTimelineCommentCount } from '@/features/home/hooks/useUpdateTimelineCommentCount';
import { useToast } from '@/hooks/useToast';

import { useOptimisticUpdate } from '../useOptimisticUpdate';

import type { CommentResponse } from './useGetComment';

type CommentDeleteRequest = {
  goalId: number;
  commentId: number;
};

export const useDeleteComment = () => {
  const { queryKey, updateTimelineCommentCount } = useUpdateTimelineCommentCount({ isAddingComment: false });

  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const toast = useToast();

  return useMutation({
    mutationFn: ({ commentId }: CommentDeleteRequest) => api.delete(`/comment/${commentId}`),
    onMutate: async ({ goalId, commentId }) => {
      const targetQueryKey = ['comment', goalId];

      const updater = (old: CommentResponse): CommentResponse => {
        const updatedComment = old.comments.filter((comment) => comment.id !== commentId);
        return { ...old, comments: updatedComment, commentCount: old.commentCount - 1 };
      };
      const context = await optimisticUpdater({ queryKey: targetQueryKey, updater });
      return context;
    },
    onSuccess: (_, { goalId }) => {
      toast.success('댓글을 삭제했어요.');

      queryClient.setQueryData(queryKey, updateTimelineCommentCount(goalId));
    },
    onError: (_, variable, context) => {
      toast.warning('댓글 삭제에 실패했어요.');
      const targetQueryKey = ['goal', variable.goalId];
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
