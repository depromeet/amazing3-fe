import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useOverlay } from '@toss/use-overlay';

import bandiboodiGray from '@/assets/images/bandi-boodi-gray.png';
import { Typography } from '@/components';
import { useAuth, useIsMyMap } from '@/hooks';

import { LoginBottomSheet } from '../../loginBottomSheet';
import { MapCardLayout, type MapCardLayoutProps } from '../MapCardLayout';

interface EmptyMapCardProps extends MapCardLayoutProps {
  alternativeTextIndex: 0 | 1 | 2 | 3;
}

const EMPTY_ALTERNATIVE_TEXTS = ['나의 3년 후는?', '목표 생각중..', '나는 갓생러 ㅋ', '성공이 뭘까?'];

export const EmptyMapCard = ({ alternativeTextIndex, position }: EmptyMapCardProps) => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { isMyMap } = useIsMyMap();
  const { open } = useOverlay();

  const handleMapCardClick = () => {
    if (isMyMap) {
      router.push(`/goal/new/goal`);
    } else if (isLoggedIn) {
      // 로그인한 사용자가 내 지도가 아닌 카드를 클릭했을 때 어떤 작업을 해야하는지 의논 필요.
      return;
    } else {
      open(({ isOpen, close }) => <LoginBottomSheet open={isOpen} onClose={close} />);
    }
  };

  return (
    <button onClick={handleMapCardClick}>
      <MapCardLayout position={position} cursor="default">
        <Image src={bandiboodiGray} width="100" height="100" alt="empty_goal" />
        <Typography type="title5" className="text-gray-40 text-center text-ellipsis !whitespace-nowrap">
          {EMPTY_ALTERNATIVE_TEXTS[alternativeTextIndex]}
        </Typography>
      </MapCardLayout>
    </button>
  );
};
