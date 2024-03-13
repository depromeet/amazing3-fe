import PlusIcon from '@/assets/icons/plus.svg';
import type { GoalFeedProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import FeedCardBody from './FeedCardBody';
import FeedCardHeader from './FeedCardHeader';
import FeedCardLayout from './FeedCardLayout';
import ViewCommentButton from './ViewCommentButton';

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
          {feedData?.map(({ user, goal, count }) => (
            <FeedCardBody
              key={goal.id}
              user={user}
              goal={goal}
              count={count}
              interactionComponent={
                <>
                  {/* TODO: 이모지 추가 */}
                  <div>
                    <button className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-gradient3">
                      <PlusIcon width={18} height={18} fill="#FFFFFF" />
                    </button>
                  </div>
                  <ViewCommentButton numberOfComments={count.comment} />
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
