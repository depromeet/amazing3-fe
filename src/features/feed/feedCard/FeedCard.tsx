import type { GoalFeedProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import { FeedCardBody } from './FeedCardBody';
import { FeedCardHeader } from './FeedCardHeader';
import { FeedCardLayout } from './FeedCardLayout';
import { ReactionGroup } from './reactionGroup';
import { CommentButton } from './ViewCommentButton';

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
      body={
        <>
          {feedData?.map(({ goal, count }) => (
            <FeedCardBody
              key={goal.id}
              goal={goal}
              count={count}
              footer={
                <>
                  {/* TODO: 다른 유저가 이미 반응한 이모지 버튼 추가 */}
                  <ReactionGroup />
                  <CommentButton numberOfComments={count.comment} />
                </>
              }
            />
          ))}
        </>
      }
    />
  );
};

export default FeedCard;
