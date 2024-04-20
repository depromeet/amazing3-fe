import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import { Span, Typography } from '@/components';
import { blueDataURL } from '@/constants';
import type { CountProps, GoalProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';
import { formatDotYYYYMM } from '@/utils/date';

interface FeedCardBodyProps {
  goal: GoalProps;
  count: CountProps;
  footer?: ReactNode;
}

export const FeedCardBody = ({ goal, count, footer }: FeedCardBodyProps) => {
  const pathname = usePathname();

  return (
    <div className="ml-lg flex flex-col gap-4xs">
      <Link href={{ pathname: `/goal/detail/${goal.id}`, query: { previous: pathname } }}>
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
      {footer}
    </div>
  );
};
