import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import { Span, Typography } from '@/components';
import { blueDataURL } from '@/constants';
import type { TimelineProps } from '@/hooks/reactQuery/goal/useGetTimeline';
import { formatDotYYYYMM } from '@/utils/date';

interface TimelineCardBodyProps {
  goal: TimelineProps['goal'];
  counts: TimelineProps['counts'];
  footer?: ReactNode;
}

export const TimelineCardBody = ({ goal, counts, footer }: TimelineCardBodyProps) => {
  return (
    <div className="flex flex-col gap-4xs ml-lg ">
      <Link href={{ pathname: `/goal/detail/${goal.goalId}` }}>
        <div className="flex flex-col gap-5xs p-3xs  bg-gray-10 rounded-lg">
          <div className="flex gap-5xs items-center">
            <Image
              src={goal.stickerUrl}
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
              세부목표 <Span type="gray50">{counts.task}개</Span>
            </Typography>
          </div>
        </div>
      </Link>
      {footer}
    </div>
  );
};
