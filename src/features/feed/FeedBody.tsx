'use client';

import { InfiniteScroller } from '@/components';
import { type GoalFeedProps, useGetGoalFeeds } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import FeedCard from './feedCard/FeedCard';

export const FeedBody = () => {
  const { data: goalFeedsData, fetchNextPage, hasNextPage } = useGetGoalFeeds();

  // TODO: 피드가 0개일 때, 처리 필요

  return (
    <div>
      {goalFeedsData ? (
        <InfiniteScroller isLastPage={!hasNextPage} onIntersect={() => fetchNextPage()}>
          <div className="mx-xs my-xs flex flex-col gap-md">
            {goalFeedsData?.pages.map(
              (page) =>
                createFeedDataGroupedByUser(page.goals)?.map((feedData) => {
                  const recentGoalId = feedData[0].goal.id;
                  return <FeedCard key={recentGoalId} feedData={feedData} />;
                }),
            )}
          </div>
        </InfiniteScroller>
      ) : (
        // FIXME: 레이아웃 시프트 해결을 위해 추가 -> 추후에 Suspense를 사용해서 fallback으로 변경 예정
        <div className="h-[100dvh]"></div>
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
