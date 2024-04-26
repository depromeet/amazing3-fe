import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useUpdateTimelineEmojiCount } from '@/features/home/hooks/useUpdateTimelineEmojiCount';
import { useToast } from '@/hooks';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useCreateEmojiForFeed = () => {
  const toast = useToast();

  const queryClient = useQueryClient();

  const { queryKey: timelineQueryKey, updateTimelineEmojiCount } = useUpdateTimelineEmojiCount({ isAddingEmoji: true });

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.post(`/goal/${goalId}/emoji/${emojiId}`),
    onSuccess: (_, { goalId, emojiId }) => {
      queryClient.invalidateQueries({ queryKey: ['emoji', goalId] });
      queryClient.invalidateQueries({ queryKey: ['goalFeeds', goalId] });
      // NOTE: + 버튼을 눌러서 이모지를 추가하는 경우에 낙관적 업데이트 불가능해서 논의 필요
      queryClient.invalidateQueries({ queryKey: timelineQueryKey });
      queryClient.setQueryData(timelineQueryKey, updateTimelineEmojiCount(goalId, emojiId));
    },
    onError: () => {
      toast.warning('잠시후 다시 시도해주세요.');
    },
  });
};
