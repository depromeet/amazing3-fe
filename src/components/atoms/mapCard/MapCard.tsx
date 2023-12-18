import Image from 'next/image';
import Link from 'next/link';

import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import type { MapCardGoalProps } from '@/features/home/types';

import { Typography } from '../typography';

export interface MapCardProps {
  goal: MapCardGoalProps;
  position: { x: string; y: string };
}

export const MapCard = ({ goal, position }: MapCardProps) => {
  const { id, stickerImage, deadline, tag } = goal;

  return (
    <Link
      href={{ pathname: `/goal/${id}` }}
      className={`absolute w-[130px] h-[130px] rounded-lg bg-white pt-[5px] pb-[6px] px-[16px] shadow-thumb cursor-pointer ${position.x} ${position.y}`}
    >
      <Image src={stickerImage} width={100} height={100} alt="sticker" />
      <div className="flex gap-[4px] justify-center items-center">
        <Typography type="title5" className="text-blue-50">
          {deadline}
        </Typography>
        <VerticalBarIcon width="1" height="11" />
        <Typography type="title5" className="text-blue-50">
          {tag}
        </Typography>
      </div>
    </Link>
  );
};
