import Image from 'next/image';

import BandiBoodiStartImage from '@/assets/images/bandiboodi-start.png';

import type { MapCardLayoutProps as StartMapCardProps } from './MapCardLayout';

export const StartMapCard = ({ position }: StartMapCardProps) => {
  return (
    <Image
      src={BandiBoodiStartImage}
      width={130}
      height={130}
      alt="start_mapCard_image"
      priority
      className={`absolute ${position.x} ${position.y}`}
    />
  );
};
