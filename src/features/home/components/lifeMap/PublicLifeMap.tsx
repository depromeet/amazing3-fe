'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components/atoms';
import { CHEER_INTERVAL } from '@/constants';
import { CheeringButton } from '@/features/cheering';
import { useAuth, useThrottle, useToast } from '@/hooks';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useCreateCheering } from '@/hooks/reactQuery/cheering';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal';

import { LoginBottomSheet } from '../loginBottomSheet';

import { CheeringClickedLottie } from './CheeringClicked';
import { LifeMapContent } from './LifeMapContent';

const CHEER_ANIMATION_INTERVAL = 5400;

export const PublicLifeMap = ({ username }: { username: string }) => {
  const toast = useToast();
  const { open } = useOverlay();
  const { username: myUsername } = useAuth();

  // TODO: 정책 논의 후 memberData를 통해 로그인 유무 검사하는 로직 수정
  const { data: memberData } = useGetMemberData();
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
    if (!memberData?.nickname) {
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
        <Link href={{ pathname: memberData?.nickname ? `/home/${myUsername}` : '/' }} className="w-full">
          <Button>{memberData?.nickname ? '내 지도로 돌아가기' : '로그인하기'}</Button>
        </Link>
      </div>
    </>
  );
};
