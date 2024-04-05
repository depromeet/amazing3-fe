import type { InfiniteData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalFeedResponse } from '../goal/useGetGoalFeeds';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useDeleteReactedEmojiForFeed = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const targetQueryKey = ['goalFeeds'];

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.delete(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const updater = (old: InfiniteData<GoalFeedResponse>) => {
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            goals: page.goals.map((goal) =>
              goal.goal.id === goalId
                ? {
                    ...goal,
                    emojis: goal.emojis
                      .map((emoji) =>
                        emoji.id === emojiId
                          ? { ...emoji, reactCount: emoji.reactCount - 1, isMyReaction: true }
                          : emoji,
                      )
                      .filter(({ reactCount }) => reactCount > 0),
                    count: { ...goal.count, reaction: goal.count.reaction - 1 },
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
      // queryClient.invalidateQueries({ queryKey: ['goalFeeds'] });
      queryClient.invalidateQueries({ queryKey: ['emoji', goalId] });
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
