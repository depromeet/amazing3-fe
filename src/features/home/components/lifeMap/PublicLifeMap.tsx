'use client';

import Link from 'next/link';

import { Button } from '@/components/atoms';
import { CheeringButton } from '@/features/cheering/CheeringButton';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useCreateCheering } from '@/hooks/reactQuery/cheering';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';
import { useToast } from '@/hooks/useToast';

import { LifeMapContent } from './LifeMapContent';

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: publicGoals } = useGetPublicGoals({ username });
  const { data: memberData } = useGetMemberData();
  const { mutate } = useCreateCheering(username);

  const toast = useToast();

  const myHomePath = memberData?.username ? `/home/${memberData.username}` : '/';

  const handleClickCheeringButton = () => {
    if (!memberData) {
      toast.warning('응원하기는 로그인 후 사용할 수 있어요.');
      return;
    }
    // TODO: 디바운스 처리 / 1분
    mutate({ lifeMapId: publicGoals?.lifeMapId });
  };

  return (
    <>
      <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />
      <div className="flex gap-5xs  px-xs pt-5xs mt-[18px] w-full">
        <CheeringButton onClick={handleClickCheeringButton} />
        <Link href={{ pathname: myHomePath }} className="w-full">
          <Button>{memberData?.username ? '내 지도로 돌아가기' : '내 지도 만들기'}</Button>
        </Link>
      </div>
    </>
  );
};
