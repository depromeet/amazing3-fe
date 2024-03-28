import type { InfiniteData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalFeedProps, GoalFeedResponse } from '../goal/useGetGoalFeeds';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

import type { Emoji, EmojisResponse } from './useGetAllEmoji';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

interface GoalFeedInfinityResponse extends InfiniteData<GoalFeedResponse, unknown> {}

const NOT_FOUNDED_INDEX = -1;

export const useCreateEmojiForFeed = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const targetQueryKey = ['goalFeeds'];

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.post(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const updater = (old: GoalFeedInfinityResponse): GoalFeedInfinityResponse => {
        const newData = JSON.parse(JSON.stringify(old)) as GoalFeedInfinityResponse;
        const reactEmojiData = queryClient
          .getQueryData<EmojisResponse>(['all-emoji'])
          ?.find((emoji) => emoji.id === emojiId) as Emoji;

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

        let newEmoji = null;

        if (existedEmojiIndex === NOT_FOUNDED_INDEX) {
          newEmoji = { ...reactEmojiData, reactCount: 1, isMyReaction: true };
        } else {
          const targetEmoji = targetEmojis[existedEmojiIndex];
          newEmoji = { ...targetEmoji, reactCount: targetEmoji.reactCount + 1 };
          targetEmojis.splice(existedEmojiIndex, 1, newEmoji);
        }

        const newEmojis = existedEmojiIndex >= 0 ? targetEmojis : [...targetEmojis, newEmoji];
        const newGoal = {
          ...targetGoal,
          emojis: newEmojis,
          count: {
            ...targetGoal.count,
            reaction: targetGoal.count.reaction + 1,
          },
        } as GoalFeedProps;
        currentPage.goals.splice(goalIndex, 1, newGoal);

        return newData;
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
