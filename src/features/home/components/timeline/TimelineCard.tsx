import { Typography } from '@/components';
import { FeedCardBody } from '@/features/feed/feedCard/FeedCardBody';
import { ReactionGroup } from '@/features/feed/feedCard/reactionGroup';
import { CommentButton } from '@/features/feed/feedCard/ViewCommentButton';
import type { GoalFeedProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';
import { getYYYY } from '@/utils/date';

interface TimelineCardProps {
  feedData: GoalFeedProps;
  isSameYear: boolean;
}

const TimelineCard = ({ feedData, isSameYear }: TimelineCardProps) => {
  return (
    <div className="flex flex-col gap-4xs">
      {!isSameYear && (
        <Typography type="title4" className="text-blue-50">
          {`${getYYYY(feedData.goal.deadline)}년까지 달성할 목표`}
        </Typography>
      )}

      <div className="relative">
        <div
          className={`absolute top-0 left-3xs right-0 bottom-0 w-1 bg-gray-10 rounded-full ${
            isSameYear ? '' : 'h-[calc(100%+40px)]'
          }`}
        />
        <div className="flex flex-col gap-sm">
          <FeedCardBody
            key={feedData.goal.id}
            user={feedData.user}
            goal={feedData.goal}
            count={feedData.count}
            footer={
              <>
                {/* TODO: 다른 유저가 이미 반응한 이모지 버튼 추가 */}
                <ReactionGroup />
                <CommentButton numberOfComments={feedData.count.comment} />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
