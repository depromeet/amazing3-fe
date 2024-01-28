import Image from 'next/image';
import Link from 'next/link';

import bandiboodiGray from '@/assets/images/bandi-boodi-gray.png';
import { Typography } from '@/components';
import { useIsMyMap } from '@/hooks';

import { MapCardLayout, type MapCardLayoutProps } from '../MapCardLayout';

interface EmptyMapCardProps extends MapCardLayoutProps {
  alternativeTextIndex: 0 | 1 | 2 | 3;
}

const EMPTY_ALTERNATIVE_TEXTS = ['나의 3년 후는?', '목표 생각중..', '나는 갓생러 ㅋ', '성공이 뭘까?'];

export const EmptyMapCard = ({ alternativeTextIndex, position }: EmptyMapCardProps) => {
  const { isMyMap } = useIsMyMap();

  return (
    <Link href={{ pathname: isMyMap ? '/goal/new/goal' : '' }}>
      <MapCardLayout position={position} cursor="default">
        <Image src={bandiboodiGray} width="100" height="100" alt="empty_goal" />
        <Typography type="title5" className="text-gray-40 text-center font-bold">
          {EMPTY_ALTERNATIVE_TEXTS[alternativeTextIndex]}
        </Typography>
      </MapCardLayout>
    </Link>
  );
};
