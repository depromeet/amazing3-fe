import type { InfiniteData } from '@tanstack/react-query';

import type { GoalFeedResponse } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

interface useUpdateFeedEmojiCountProps {
  isAddingEmoji: boolean;
}

export const useUpdateFeedEmojiCount = ({ isAddingEmoji }: useUpdateFeedEmojiCountProps) => {
  const updateFeedEmojiCount = (goalId: number, emojiId: number) => (old: InfiniteData<GoalFeedResponse>) => {
    if (!old) return { pages: [null], pageParams: [null] };

    const newPages = old?.pages?.map((page) => ({
      ...page,
      goals: page?.goals?.map((goal) =>
        goal.goal.id === goalId
          ? {
              ...goal,
              emojis: goal.emojis
                ?.map((emoji) =>
                  emoji.id === emojiId
                    ? { ...emoji, reactCount: emoji.reactCount + (isAddingEmoji ? 1 : -1), isMyReaction: isAddingEmoji }
                    : emoji,
                )
                ?.filter(({ reactCount }) => reactCount > 0),
              count: { ...goal.count, reaction: goal.count.reaction + (isAddingEmoji ? 1 : -1) },
            }
          : goal,
      ),
    }));

    return { ...old, pages: newPages };
  };

  return {
    queryKey: ['goalFeeds'],
    updateFeedEmojiCount,
  };
};
