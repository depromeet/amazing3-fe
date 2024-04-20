import type { InfiniteData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import { useUpdateTimelineEmojiCount } from '@/features/home/hooks/useUpdateTimelineEmojiCount';
import { useToast } from '@/hooks';

import type { GoalFeedResponse } from '../goal/useGetGoalFeeds';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useDeleteReactedEmojiForFeed = () => {
  const toast = useToast();

  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const targetQueryKey = ['goalFeeds'];

  const { queryKey: timelineQueryKey, updateTimelineEmojiCount } = useUpdateTimelineEmojiCount({
    isAddingEmoji: false,
  });

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.delete(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const updater = (old: InfiniteData<GoalFeedResponse>) => {
        if (!old) return null;

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
                          ? { ...emoji, reactCount: emoji.reactCount - 1, isMyReaction: false }
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
    onSuccess: (_, { goalId, emojiId }) => {
      queryClient.invalidateQueries({ queryKey: ['emoji', goalId] });
      queryClient.setQueryData(timelineQueryKey, updateTimelineEmojiCount(goalId, emojiId));
    },
    onError: (_, __, context) => {
      toast.warning('잠시후 다시 시도해주세요.');
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
