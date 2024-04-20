import type { InfiniteData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import { useUpdateTimelineEmojiCount } from '@/features/home/hooks/useUpdateTimelineEmojiCount';
import { useToast } from '@/hooks';

import type { EmojisProps, GoalFeedResponse } from '../goal/useGetGoalFeeds';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

import type { Emoji, EmojisResponse } from './useGetAllEmoji';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useCreateEmojiForFeed = () => {
  const toast = useToast();

  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const targetQueryKey = ['goalFeeds'];

  const { queryKey: timelineQueryKey, updateTimelineEmojiCount } = useUpdateTimelineEmojiCount({ isAddingEmoji: true });

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.post(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const updater = (old: InfiniteData<GoalFeedResponse>) => {
        if (!old) return null;

        const reactEmojiData = queryClient
          .getQueryData<EmojisResponse>(['all-emoji'])
          ?.find((emoji) => emoji.id === emojiId) as Emoji;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            goals: page.goals.map((goal) =>
              goal.goal.id === goalId
                ? {
                    ...goal,
                    emojis: goal.emojis.find(({ id }) => id === emojiId)
                      ? goal.emojis.map((emoji) =>
                          emoji.id === emojiId
                            ? { ...emoji, reactCount: emoji.reactCount + 1, isMyReaction: true }
                            : emoji,
                        )
                      : [
                          ...goal.emojis,
                          { ...reactEmojiData, id: emojiId, reactCount: 1, isMyReaction: true } as EmojisProps,
                        ],
                    count: { ...goal.count, reaction: goal.count.reaction + 1 },
                  }
                : goal,
            ),
          })),
        };
      };

      const context = await optimisticUpdater({
        queryKey: targetQueryKey,
        updater,
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
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
