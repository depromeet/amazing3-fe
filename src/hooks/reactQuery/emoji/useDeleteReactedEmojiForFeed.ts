import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import { useUpdateFeedEmojiCount } from '@/features/home/hooks/useUpdateFeedEmojiCount';
import { useUpdateTimelineEmojiCount } from '@/features/home/hooks/useUpdateTimelineEmojiCount';
import { useToast } from '@/hooks';

import { useOptimisticUpdate } from '../useOptimisticUpdate';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useDeleteReactedEmojiForFeed = () => {
  const toast = useToast();

  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  const { queryKey: feedQueryKey, updateFeedEmojiCount } = useUpdateFeedEmojiCount({ isAddingEmoji: false });
  const { queryKey: timelineQueryKey, updateTimelineEmojiCount } = useUpdateTimelineEmojiCount({
    isAddingEmoji: false,
  });

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.delete(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const context = await optimisticUpdater({
        queryKey: feedQueryKey,
        updater: updateFeedEmojiCount(goalId, emojiId),
      });

      return context;
    },
    onSuccess: (_, { goalId, emojiId }) => {
      queryClient.invalidateQueries({ queryKey: ['emoji', goalId] });
      queryClient.setQueryData(timelineQueryKey, updateTimelineEmojiCount(goalId, emojiId));
    },
    onError: (_, __, context) => {
      toast.warning('이모지 삭제: 잠시후 다시 시도해주세요.');
      queryClient.setQueryData(feedQueryKey, context?.previous);
    },
  });
};
