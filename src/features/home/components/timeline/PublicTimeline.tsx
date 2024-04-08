'use client';

import { usePathname } from 'next/navigation';

import { InfiniteScroller } from '@/components';
import { useGetPublicTimeline } from '@/hooks/reactQuery/goal/useGetPublicTimeline';
import { getYYYY } from '@/utils/date';

import { EmptyTimeline } from './EmptyTimeline';
import TimelineCard from './TimelineCard';

export const PublicTimeline = () => {
  const pathname = usePathname();
  const [, , username] = pathname.split('/');

  const { data: timeline, fetchNextPage, hasNextPage } = useGetPublicTimeline(username);

  const isEmptyGoal = timeline.pages[0].contents.length === 0;

  return (
    <>
      {isEmptyGoal ? (
        <EmptyTimeline />
      ) : (
        <InfiniteScroller isLastPage={!hasNextPage} onIntersect={() => fetchNextPage()}>
          <div className="mx-xs my-xs flex flex-col gap-md">
            {timeline.pages.map(({ contents }) =>
              contents.map((timeline, index) => {
                const { goal } = timeline;
                return (
                  <TimelineCard
                    key={goal.goalId}
                    timeline={timeline}
                    isSameYear={index > 0 && getYYYY(goal.deadline) === getYYYY(contents[index - 1].goal.deadline)}
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
