import type { GoalFeedProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import FeedCardHeader from './FeedCardHeader';
import FeedCardLayout from './FeedCardLayout';

interface FeedCardProps {
  feedData: Array<GoalFeedProps>;
}

const FeedCard = ({ feedData }: FeedCardProps) => {
  const { user, goal, count } = feedData[0];
  return (
    <FeedCardLayout
      header={
        <FeedCardHeader
          profileImage={user.image}
          nickname={user.nickname}
          username={user.username}
          goalCreatedTime={goal.createdAt}
          goalCounts={count.goal}
        />
      }
      bodyPropsList={feedData}
    />
  );
};

export default FeedCard;
