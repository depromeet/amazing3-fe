'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components/atoms';
import { CHEER_INTERVAL } from '@/constants';
import { CheeringButton } from '@/features/cheering';
import { useAuth, useThrottle, useToast } from '@/hooks';
import { useCreateCheering } from '@/hooks/reactQuery/cheering';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal';

import { LoginBottomSheet } from '../loginBottomSheet';

import { CheeringClickedLottie } from './CheeringClicked';
import { LifeMapContent } from './LifeMapContent';

const CHEER_ANIMATION_INTERVAL = 5400;

export const PublicLifeMap = ({ username }: { username: string }) => {
  const toast = useToast();
  const { open } = useOverlay();
  const { isLoggedIn, username: myUsername } = useAuth();
  const { data: publicGoals } = useGetPublicGoals({ username });

  const [isCheeringSuccessAfterWaiting, setIsCheeringSuccessAfterWaiting] = useState(false);

  // TODO: Lottie atom을 수정해서 로티 이미지를 플레이하는 방식으로 변경
  const { mutate: cheer, isSuccess, isError } = useCreateCheering(username);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (isSuccess) {
      setIsCheeringSuccessAfterWaiting(true);
      timeoutId = setTimeout(() => {
        setIsCheeringSuccessAfterWaiting(false);
      }, CHEER_ANIMATION_INTERVAL);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSuccess]);

  const throttleCheer = useThrottle(() => cheer({ lifeMapId: publicGoals?.lifeMapId }), CHEER_INTERVAL);

  const handleClickCheeringButton = () => {
    if (!isLoggedIn) {
      open(({ isOpen, close }) => <LoginBottomSheet open={isOpen} onClose={close} />);
      return;
    }

    if (isError || isCheeringSuccessAfterWaiting) toast.warning('1분 뒤에 응원할 수 있어요.');
    throttleCheer();
  };

  return (
    <>
      <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />
      {isCheeringSuccessAfterWaiting && <CheeringClickedLottie />}
      <div className="flex gap-5xs  px-xs pt-5xs mt-[18px] w-full z-[1]">
        <CheeringButton onClick={handleClickCheeringButton} />
        <Link href={{ pathname: isLoggedIn ? `/home/${myUsername}` : '/' }} className="w-full">
          <Button>{isLoggedIn ? '내 지도로 돌아가기' : '로그인하기'}</Button>
        </Link>
      </div>
    </>
  );
};
