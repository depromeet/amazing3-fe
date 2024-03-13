import type { ReactNode } from 'react';

import type { GoalFeedProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import FeedCardBody from './FeedCardBody';

interface FeedCardLayoutProps {
  header: ReactNode;
  bodyPropsList: Array<GoalFeedProps>;
}

const FeedCardLayout = ({ header, bodyPropsList }: FeedCardLayoutProps) => {
  return (
    <div className="flex flex-col gap-4xs">
      {header}
      <div className="relative">
        <div className="absolute top-0 left-3xs right-0 bottom-0 w-1 bg-gray-10 rounded-full" />
        <div className="flex flex-col gap-sm">
          {bodyPropsList?.map(({ user, goal, count }) => (
            <FeedCardBody key={goal.id} user={user} goal={goal} count={count} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedCardLayout;
