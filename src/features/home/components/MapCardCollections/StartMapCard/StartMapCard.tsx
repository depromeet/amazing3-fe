import Image from 'next/image';

import bandiboodiImage from '@/assets/images/bandi-boodi.png';
import { Typography } from '@/components';

import type { MapCardLayoutProps } from '../MapCardLayout';
import { MapCardLayout } from '../MapCardLayout';

interface StartMapCardProps extends MapCardLayoutProps {}

export const StartMapCard = ({ position }: StartMapCardProps) => {
  return (
    <MapCardLayout position={position}>
      <Typography type="title5" className="text-blue-55 text-center pt-[10px] font-bold">
        START !
      </Typography>
      <div className="absolute w-[235px] h-[235px] top-[10px] left-1/2 transform -translate-x-1/2">
        <Image src={bandiboodiImage} width="235" height="235" alt="start_bandibooti" priority />
      </div>
    </MapCardLayout>
  );
};
