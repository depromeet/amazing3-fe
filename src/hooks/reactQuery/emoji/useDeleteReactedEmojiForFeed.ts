import type { InfiniteData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalFeedResponse } from '../goal/useGetGoalFeeds';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

interface GoalFeedInfinityResponse extends InfiniteData<GoalFeedResponse, unknown> {}

const NOT_FOUNDED_INDEX = -1;

export const useDeleteReactedEmojiForFeed = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const targetQueryKey = ['goalFeeds'];

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.delete(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const updater = (old: GoalFeedInfinityResponse): GoalFeedInfinityResponse => {
        const newData = JSON.parse(JSON.stringify(old)) as GoalFeedInfinityResponse;

        let currentPage,
          pageIndex = NOT_FOUNDED_INDEX,
          goalIndex = NOT_FOUNDED_INDEX;

        while (pageIndex < newData.pages.length && goalIndex < 0) {
          pageIndex++;
          currentPage = newData.pages[pageIndex];
          goalIndex = currentPage.goals.findIndex(({ goal }) => goal.id === goalId);
        }

        if (!currentPage) return old;

        const targetGoal = currentPage.goals[goalIndex];
        const targetEmojis = targetGoal.emojis;
        const existedEmojiIndex = targetEmojis.findIndex(({ id }) => id === emojiId);

        if (existedEmojiIndex === NOT_FOUNDED_INDEX) return old;

        const targetEmoji = targetEmojis[existedEmojiIndex];
        targetEmoji.reactCount--;
        if (targetEmoji.reactCount === 0) targetEmojis.splice(existedEmojiIndex, 1);

        return newData;
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
