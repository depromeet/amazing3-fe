import Image from 'next/image';
import Link from 'next/link';

import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import { Typography } from '@/components';
import { blueDataURL } from '@/constants';
import type { GoalProps } from '@/hooks/reactQuery/goal/useGetGoals';

import { MapCardLayout, type MapCardLayoutProps } from '../MapCardLayout';

export interface MapCardProps extends MapCardLayoutProps {
  goal: GoalProps;
}

export const MapCard = ({ goal, position }: MapCardProps) => {
  const { id, stickerUrl, deadline, tagContent } = goal;

  return (
    <Link href={{ pathname: `/goal/detail/${id}` }}>
      <MapCardLayout position={position}>
        <Image
          src={stickerUrl}
          width={100}
          height={100}
          alt="sticker"
          priority
          placeholder="blur"
          blurDataURL={blueDataURL.mapCard}
        />
        <div className="flex max-w-[110px] gap-[4px] justify-center items-center">
          <Typography type="title5" className="text-blue-50">
            {deadline}
          </Typography>
          <VerticalBarIcon width="1" height="11" />
          <Typography type="title5" className="text-blue-50 text-ellipsis !whitespace-nowrap overflow-hidden">
            {tagContent}
          </Typography>
        </div>
      </MapCardLayout>
    </Link>
  );
};
