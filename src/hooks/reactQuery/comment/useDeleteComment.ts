import { usePathname } from 'next/navigation';
import type { InfiniteData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import { useToast } from '@/hooks/useToast';

import type { TimelineResponse } from '../goal/useGetTimeline';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

import type { CommentResponse } from './useGetComment';

type CommentDeleteRequest = {
  goalId: number;
  commentId: number;
};

export const useDeleteComment = () => {
  const pathname = usePathname();
  const [, , username] = pathname.split('/');
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

      queryClient.setQueryData(['timeline', username], (old: InfiniteData<TimelineResponse>) => {
        const newPages = old?.pages.map((page) => ({
          ...page,
          contents: page.contents.map((content) =>
            content.goal.goalId === goalId
              ? {
                  ...content,
                  counts: {
                    ...content.counts,
                    comment: content.counts.comment - 1,
                  },
                }
              : content,
          ),
        }));

        return { ...old, pages: newPages };
      });
    },
    onError: (_, variable, context) => {
      toast.warning('댓글 삭제에 실패했어요.');
      const targetQueryKey = ['goal', variable.goalId];
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
