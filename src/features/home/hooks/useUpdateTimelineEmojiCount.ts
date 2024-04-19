import { usePathname } from 'next/navigation';
import type { InfiniteData } from '@tanstack/react-query';

import { useIsMyMap } from '@/hooks';
import type { TimelineResponse } from '@/hooks/reactQuery/goal/useGetTimeline';

interface useUpdateTimelineEmojiCountProps {
  isAddingEmoji: boolean;
}

export const useUpdateTimelineEmojiCount = ({ isAddingEmoji }: useUpdateTimelineEmojiCountProps) => {
  const pathname = usePathname();
  const [, , username] = pathname.split('/');

  const { isMyMap } = useIsMyMap();
  const queryKey = isMyMap ? ['timeline'] : ['publicTimeline', username];

  const updateTimelineEmojiCount = (goalId: number, emojiId: number) => (old: InfiniteData<TimelineResponse>) => {
    const newPages = old?.pages.map((page) => ({
      ...page,
      contents: page.contents.map((content) =>
        content.goal.goalId === goalId
          ? {
              ...content,
              emojis: content.emojis.map((emoji) =>
                emoji.id === emojiId
                  ? { ...emoji, reactCount: emoji.reactCount + (isAddingEmoji ? 1 : -1), isMyReaction: isAddingEmoji }
                  : emoji,
              ),
            }
          : content,
      ),
    }));

    return { ...old, pages: newPages };
  };

  return {
    queryKey,
    updateTimelineEmojiCount,
  };
};
