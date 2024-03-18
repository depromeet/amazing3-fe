'use client';

import { InfiniteScroller } from '@/components';
import { usePrefetchAllEmoji } from '@/hooks/reactQuery/emoji/useGetAllEmoji';
import { type GoalFeedProps, useGetGoalFeeds } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import FeedCard from './feedCard/FeedCard';

export const FeedBody = () => {
  const { data: goalFeedsData, fetchNextPage, hasNextPage } = useGetGoalFeeds();
  usePrefetchAllEmoji();

  // TODO: 피드가 0개일 때, 처리 필요

  return (
    <div>
      {goalFeedsData && (
        <InfiniteScroller isLastPage={!hasNextPage} onIntersect={() => fetchNextPage()}>
          <div className="mx-xs my-xs flex flex-col gap-md">
            {goalFeedsData?.pages.map(
              ({ goals }) =>
                createFeedDataGroupedByUser(goals)?.map((feedData) => {
                  const recentGoalId = feedData[0].goal.id;
                  return <FeedCard key={recentGoalId} feedData={feedData} />;
                }),
            )}
          </div>
        </InfiniteScroller>
      )}
    </div>
  );
};

const createFeedDataGroupedByUser = (feedData: Array<GoalFeedProps> | undefined) => {
  if (!feedData) return null;

  const groupedFeedDataList: Array<GoalFeedProps[]> = [];
  let prevUserId = null;
  let currentGroup = null;

  for (const data of feedData) {
    const currentUserId = data.user.id;

    if (!prevUserId || !currentGroup || prevUserId !== currentUserId) {
      prevUserId = currentUserId;
      currentGroup && groupedFeedDataList.push(currentGroup);
      currentGroup = [];
      currentGroup.push(data);
    } else {
      currentGroup.push(data);
    }
  }

  if (currentGroup && currentGroup.length > 0) groupedFeedDataList.push(currentGroup);

  return groupedFeedDataList;
};
