'use client';

import { usePathname } from 'next/navigation';

import { InfiniteScroller } from '@/components';
import { useGetTimeline } from '@/hooks/reactQuery/goal/useGetTimeline';
import { getYYYY } from '@/utils/date';

import { EmptyTimeline } from './EmptyTimeline';
import TimelineCard from './TimelineCard';

export const Timeline = () => {
  const pathname = usePathname();
  const [, , username] = pathname.split('/');

  const { data: timeline, fetchNextPage, hasNextPage } = useGetTimeline(username);
  const isEmptyGoal = timeline.pages[0].goals.length === 0;

  return (
    <>
      {isEmptyGoal ? (
        <EmptyTimeline />
      ) : (
        <InfiniteScroller isLastPage={!hasNextPage} onIntersect={() => fetchNextPage()}>
          <div className="mx-xs my-xs flex flex-col gap-md">
            {timeline.pages.map(({ goals }) =>
              goals.map((timeline, index) => {
                const { goal } = timeline;
                return (
                  <TimelineCard
                    key={goal.id}
                    feedData={timeline}
                    isSameYear={index > 0 && getYYYY(goal.deadline) === getYYYY(goals[index - 1].goal.deadline)}
                  />
                );
              }),
            )}
          </div>
        </InfiniteScroller>
      )}
    </>
  );
};
