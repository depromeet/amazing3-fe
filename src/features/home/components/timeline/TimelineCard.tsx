import { Typography } from '@/components';
import { ReactionGroup } from '@/features/feed/feedCard/reactionGroup';
import { CommentButton } from '@/features/feed/feedCard/ViewCommentButton';
import type { TimelineProps } from '@/hooks/reactQuery/goal/useGetTimeline';
import { getYYYY } from '@/utils/date';

import { TimelineCardBody } from './TimelineCardBody';

interface TimelineCardProps {
  timeline: TimelineProps;
  isSameYear: boolean;
}

const TimelineCard = ({ timeline, isSameYear }: TimelineCardProps) => {
  return (
    <div className="flex flex-col gap-4xs">
      {!isSameYear && (
        <Typography type="title4" className="text-blue-50">
          {`${getYYYY(timeline.goal.deadline)}년까지 달성할 목표`}
        </Typography>
      )}

      <div className="relative">
        <div
          className={`absolute top-0 left-3xs right-0 bottom-0 w-1 bg-gray-10 rounded-full ${
            isSameYear ? '' : 'h-[calc(100%+40px)]'
          }`}
        />
        <div className="flex flex-col gap-sm">
          <TimelineCardBody
            key={timeline.goal.goalId}
            goal={timeline.goal}
            counts={timeline.counts}
            footer={
              <>
                {/* TODO: 다른 유저가 이미 반응한 이모지 버튼 추가 */}
                <ReactionGroup targetGoalId={timeline.goal.goalId} reactedEmojis={timeline.emojis} />
                <CommentButton targetGoalId={timeline.goal.goalId} numberOfComments={timeline.counts.comment} />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
