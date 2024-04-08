import { usePathname } from 'next/navigation';
import type { InfiniteData } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useIsMyMap, useToast } from '@/hooks';

import type { TimelineResponse } from '../goal/useGetTimeline';

type CommentRequest = {
  goalId: number;
  content: string;
};

export const useCreateComment = () => {
  const pathname = usePathname();
  const [, , username] = pathname.split('/');

  const { isMyMap } = useIsMyMap();
  const targetQueryKey = isMyMap ? ['timeline'] : ['publicTimeline', username];

  const toast = useToast();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ goalId, content }: CommentRequest) => api.post(`/goal/${goalId}/comment`, { content }),
    onSuccess: (_, variable) => {
      queryClient.invalidateQueries({ queryKey: ['comment', variable.goalId] });

      queryClient.setQueryData(targetQueryKey, (old: InfiniteData<TimelineResponse>) => {
        const newPages = old?.pages.map((page) => ({
          ...page,
          contents: page.contents.map((content) =>
            content.goal.goalId === variable.goalId
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
      });
    },
    onError: () => {
      toast.warning('잠시후 다시 시도해주세요.');
    },
  });
};
