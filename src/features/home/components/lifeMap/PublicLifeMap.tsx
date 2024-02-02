'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components/atoms';
import { CheeringButton } from '@/features/cheering/CheeringButton';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useCreateCheering } from '@/hooks/reactQuery/cheering';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';

import { LoginBottomSheet } from '../loginBottomSheet';

import { CheeringClickedLottie } from './CheeringClicked';
import { LifeMapContent } from './LifeMapContent';

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: memberData } = useGetMemberData();
  const { data: publicGoals } = useGetPublicGoals({ username });
  const { mutate, isSuccess, isError } = useCreateCheering(username);
  const { open } = useOverlay();
  const [isCheeringClicked, setIsCheeringClicked] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (isSuccess) {
      setIsCheeringClicked(true);
      timeoutId = setTimeout(() => {
        setIsCheeringClicked(false);
      }, 5400);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSuccess, isError]);

  const myHomePath = memberData?.username ? `/home/${memberData.username}` : '/';

  const handleClickCheeringButton = () => {
    if (!memberData) {
      open(({ isOpen, close }) => <LoginBottomSheet open={isOpen} onClose={close} />);
      return;
    }

    // TODO: 디바운스 처리 / 1분
    // 1분 전일 때 toast로 이미 응원했다고 알림.
    mutate({ lifeMapId: publicGoals?.lifeMapId });
  };

  return (
    <>
      <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />
      {isCheeringClicked && <CheeringClickedLottie />}
      <div className="flex gap-5xs  px-xs pt-5xs mt-[18px] w-full z-[1]">
        <CheeringButton onClick={handleClickCheeringButton} />
        <Link href={{ pathname: myHomePath }} className="w-full">
          <Button>{memberData?.username ? '내 지도로 돌아가기' : '로그인하기'}</Button>
        </Link>
      </div>
    </>
  );
};
