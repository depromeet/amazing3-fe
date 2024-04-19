import type { InfiniteData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { EmojisProps, GoalFeedResponse } from '../goal/useGetGoalFeeds';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

import type { Emoji, EmojisResponse } from './useGetAllEmoji';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useCreateEmojiForFeed = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const targetQueryKey = ['goalFeeds'];

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.post(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const updater = (old: InfiniteData<GoalFeedResponse>) => {
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
    onSuccess: (_, { goalId }) => {
      queryClient.invalidateQueries({ queryKey: ['emoji', goalId] });
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
