import { usePathname } from 'next/navigation';
import type { InfiniteData } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useToast } from '@/hooks';

import type { TimelineResponse } from '../goal/useGetTimeline';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type CommentRequest = {
  goalId: number;
  content: string;
};

export const useCreateComment = () => {
  const pathname = usePathname();
  const [, , username] = pathname.split('/');
  const toast = useToast();
  const queryClient = useQueryClient();
  const { queryClient: optimisticQueryClient, optimisticUpdater } = useOptimisticUpdate();

  const targetQueryKey = ['timeline', username];

  return useMutation({
    mutationFn: ({ goalId, content }: CommentRequest) => api.post(`/goal/${goalId}/comment`, { content }),
    onMutate: async ({ goalId }) => {
      const updater = (old: InfiniteData<TimelineResponse>) => {
        const newPages = old.pages.map((page) => ({
          ...page,
          contents: page.contents.map((content) =>
            content.goal.goalId === goalId
              ? {
                  ...content,
                  counts: {
                    ...content.counts,
                    comment: content.counts.comment + 1,
                  },
                }
              : content,
          ),
        }));

        return { ...old, pages: newPages };
      };

      return await optimisticUpdater({ queryKey: targetQueryKey, updater });
    },
    onSuccess: (_, variable) => {
      queryClient.invalidateQueries({ queryKey: ['comment', variable.goalId] });
    },
    onError: (_, __, context) => {
      toast.warning('잠시후 다시 시도해주세요.');

      optimisticQueryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
