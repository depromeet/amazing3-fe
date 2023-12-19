import Image from 'next/image';
import Link from 'next/link';

import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import { Typography } from '@/components';
import { blueDataURL } from '@/constants';
import type { MapCardGoalProps } from '@/features/home/types';

import { MapCardLayout, type MapCardLayoutProps } from '../MapCardLayout';

export interface MapCardProps extends MapCardLayoutProps {
  goal: MapCardGoalProps;
}

export const MapCard = ({ goal, position }: MapCardProps) => {
  const { id, stickerImage, deadline, tag } = goal;

  return (
    <Link href={{ pathname: `/goal/${id}` }}>
      <MapCardLayout position={position}>
        <Image
          src={stickerImage}
          width={100}
          height={100}
          alt="sticker"
          priority
          placeholder="blur"
          blurDataURL={blueDataURL.mapCard}
        />
        <div className="flex gap-[4px] justify-center items-center">
          <Typography type="title5" className="text-blue-50">
            {deadline}
          </Typography>
          <VerticalBarIcon width="1" height="11" />
          <Typography type="title5" className="text-blue-50">
            {tag}
          </Typography>
        </div>
      </MapCardLayout>
    </Link>
  );
};
