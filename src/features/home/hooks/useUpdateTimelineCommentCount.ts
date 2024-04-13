import { usePathname } from 'next/navigation';
import type { InfiniteData } from '@tanstack/react-query';

import { useIsMyMap } from '@/hooks';
import type { TimelineResponse } from '@/hooks/reactQuery/goal/useGetTimeline';

interface useUpdateTimelineCommentCountProps {
  isAddingComment: boolean;
}

export const useUpdateTimelineCommentCount = ({ isAddingComment }: useUpdateTimelineCommentCountProps) => {
  const pathname = usePathname();
  const [, , username] = pathname.split('/');

  const { isMyMap } = useIsMyMap();
  const queryKey = isMyMap ? ['timeline'] : ['publicTimeline', username];

  const updateTimelineCommentCount = (goalId: number) => (old: InfiniteData<TimelineResponse>) => {
    const newPages = old?.pages.map((page) => ({
      ...page,
      contents: page.contents.map((content) =>
        content.goal.goalId === goalId
          ? {
              ...content,
              counts: {
                ...content.counts,
                comment: isAddingComment ? content.counts.comment + 1 : content.counts.comment - 1,
              },
            }
          : content,
      ),
    }));

    return { ...old, pages: newPages };
  };

  return {
    queryKey,
    updateTimelineCommentCount,
  };
};
