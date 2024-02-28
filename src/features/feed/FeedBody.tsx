'use client';

import { useGetGoalFeeds } from '@/hooks/reactQuery/goal';

import FeedCard from './FeedCard';

export const FeedBody = () => {
  const { data: goalFeedsData } = useGetGoalFeeds();

  // TODO: 피드가 0개일 때, 처리 필요

  return (
    <div>
      <div className="mx-xs my-xs flex flex-col gap-md">
        {goalFeedsData &&
          goalFeedsData.goals.map((goalData) => <FeedCard key={goalData.goal.id} feedData={goalData} />)}
      </div>
    </div>
  );
};
