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

export const useCreateEmojiForFeed = () => {
  const toast = useToast();

  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  const { queryKey: feedQueryKey, updateFeedEmojiCount } = useUpdateFeedEmojiCount({ isAddingEmoji: true });
  const { queryKey: timelineQueryKey, updateTimelineEmojiCount } = useUpdateTimelineEmojiCount({ isAddingEmoji: true });

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.post(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const context = await optimisticUpdater({
        queryKey: feedQueryKey,
        updater: updateFeedEmojiCount(goalId, emojiId),
      });
      return context;
    },
    onSuccess: (_, { goalId, emojiId }) => {
      queryClient.invalidateQueries({ queryKey: ['emoji', goalId] });
      // NOTE: + 버튼을 눌러서 이모지를 추가하는 경우에 낙관적 업데이트 불가능해서 논의 필요
      queryClient.invalidateQueries({ queryKey: timelineQueryKey });
      queryClient.setQueryData(timelineQueryKey, updateTimelineEmojiCount(goalId, emojiId));
    },
    onError: (_, __, context) => {
      toast.warning('잠시후 다시 시도해주세요.');
      queryClient.setQueryData(feedQueryKey, context?.previous);
    },
  });
};
