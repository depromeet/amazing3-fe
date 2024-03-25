import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components';
import { CHEER_INTERVAL } from '@/constants';
import { CheeringButton } from '@/features/cheering/CheeringButton';
import { useThrottle } from '@/hooks';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useCreateCheering } from '@/hooks/reactQuery/cheering';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';
import { useToast } from '@/hooks/useToast';

import { LoginBottomSheet } from '../loginBottomSheet';

import { CheeringClickedLottie } from './CheeringClicked';

const PublicLifeMapBottomArea = ({ username }: { username: string }) => {
  const { data: memberData } = useGetMemberData();
  const { data: publicGoals } = useGetPublicGoals({ username });

  const { open } = useOverlay();
  const toast = useToast();

  const [isCheeringSuccess, setIsCheeringSuccess] = useState(false);

  // TODO: Lottie atom을 수정해서 로티 이미지를 플레이하는 방식으로 변경
  const { mutate: cheer, isSuccess } = useCreateCheering(username);

  const CHEER_ANIMATION_INTERVAL = 5400;

  useEffect(() => {
    if (!isSuccess) return;

    setIsCheeringSuccess(true);

    const timeoutId = setTimeout(() => {
      setIsCheeringSuccess(false);
    }, CHEER_ANIMATION_INTERVAL);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSuccess]);

  const myHomePath = memberData?.username ? `/home/${memberData.username}` : '/';

  const throttleCheer = useThrottle(() => cheer({ lifeMapId: publicGoals?.lifeMapId }), CHEER_INTERVAL);

  const handleClickCheeringButton = () => {
    if (!memberData?.nickname) {
      open(({ isOpen, close }) => <LoginBottomSheet open={isOpen} onClose={close} />);
      return;
    }
    if (!isCheeringSuccess) toast.warning('1분 뒤에 응원할 수 있어요.');

    throttleCheer();
  };

  return (
    <>
      {isCheeringSuccess && <CheeringClickedLottie />}
      <div className="flex gap-5xs  px-xs pt-5xs mt-[18px] w-full z-[1]">
        <CheeringButton onClick={handleClickCheeringButton} />
        <Link href={{ pathname: myHomePath }} className="w-full">
          <Button>{memberData?.username ? '내 지도로 돌아가기' : '로그인하기'}</Button>
        </Link>
      </div>
    </>
  );
};

export default PublicLifeMapBottomArea;
