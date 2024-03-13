import Image from 'next/image';
import Link from 'next/link';

import CommentIcon from '@/assets/icons/comment-icon.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import { Span, Typography } from '@/components';
import { blueDataURL } from '@/constants';
import type { GoalFeedProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';
import { formatDotYYYYMM } from '@/utils/date';

interface FeedCardBodyProps extends GoalFeedProps {}

const FeedCardBody = ({ goal, count }: FeedCardBodyProps) => {
  return (
    <div className="ml-lg flex flex-col gap-4xs">
      <Link href={{ pathname: `/goal/detail/${goal.id}` }}>
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
      </Link>
      {/* TODO: 이모지 추가 */}
      <div>
        <button className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-gradient3">
          <PlusIcon width={18} height={18} fill="#FFFFFF" />
        </button>
      </div>
      {/* TODO: 댓글 페이지 이동 */}
      <div>
        <button className="flex gap-6xs items-center">
          <CommentIcon />
          <Typography type="title4" className="text-gray-40">
            {count.comment > 0 ? `${count.comment}개의 댓글` : '댓글 작성하기'}
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default FeedCardBody;
