'use client';

import Link from 'next/link';

import { Button } from '@/components/atoms';
import LikeButton from '@/features/like/LikeButton';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';

import { LifeMapContent } from './LifeMapContent';

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: publicGoals } = useGetPublicGoals({ username });
  const { data: memberData } = useGetMemberData();
  const myHomePath = memberData?.username ? `/home/${memberData.username}` : '/';

  const handleClickLikeButton = () => {
    // TODO: 응원 보내기 버튼 클릭 시 api 추가 예정
  };

  return (
    <>
      <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />
      <div className="flex gap-5xs  px-xs pt-5xs mt-[18px] w-full">
        <LikeButton onClick={handleClickLikeButton} />
        <Link href={{ pathname: myHomePath }} className="w-full">
          <Button>{memberData?.username ? '내 지도로 돌아가기' : '내 지도 만들기'}</Button>
        </Link>
      </div>
    </>
  );
};
