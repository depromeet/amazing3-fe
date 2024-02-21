import Image from 'next/image';

import ForwardIcon from '@/assets/icons/forward-icon.svg';
import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import { Avatar, Span, Typography } from '@/components';
import { blueDataURL } from '@/constants';
import type { GoalFeedProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';
import { formatDotYYYYMM } from '@/utils/date';

interface FeedCardProps {
  feedData: GoalFeedProps;
}

const FeedCard = ({ feedData: { user, goal, count } }: FeedCardProps) => {
  return (
    <div className="flex flex-col gap-4xs">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-5xs">
          <Avatar size={40} profileImage={user.image} />
          <div className="flex flex-col">
            <Typography type="title4" className="text-gray-50">
              {user.nickname}
            </Typography>
            <Typography type="caption1" className="text-gray-40">
              작성 시간
            </Typography>
          </div>
        </div>
        <button className="px-4xs py-6xs flex gap-6xs bg-blue-10 rounded-md">
          <Typography type="title5" className="text-blue-30">
            {count.goal} 개 목표조각 보러가기
          </Typography>
          <ForwardIcon width={16} fill="#69B1FF" />
        </button>
      </div>
      {/* Card Body */}
      <div>
        <div></div>
        <div className="p-3xs flex flex-col gap-5xs bg-gray-10 rounded-lg">
          <div className="flex gap-5xs items-center">
            <Image
              src={goal.sticker}
              width={48}
              height={48}
              alt="goal sticker"
              priority
              placeholder="blur"
              blurDataURL={blueDataURL.mapCard}
            />
            <Typography type="heading4">{goal.title}</Typography>
          </div>
          <div className="flex items-center gap-5xs">
            <Typography type="title5" className="text-gray-40">
              <Span type="gray50">{formatDotYYYYMM(goal.deadline)}</Span>까지 이룰거에요
            </Typography>
            <VerticalBarIcon width="2" height="16" />
            <Typography type="title5" className="text-gray-50">
              {goal.tag}
            </Typography>
            <VerticalBarIcon width="2" height="16" />
            <Typography type="title5" className="text-gray-40">
              세부목표 <Span type="gray50">{count.task}개</Span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
