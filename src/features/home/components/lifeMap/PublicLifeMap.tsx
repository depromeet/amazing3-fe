'use client';

import Link from 'next/link';

import { Button } from '@/components/atoms';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';

import { LifeMapContent } from './LifeMapContent';

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: memberData } = useGetMemberData();
  const { data: publicGoals } = useGetPublicGoals({ username });
  const myHomePath = memberData?.username ? `/home/${memberData.username}` : '/';

  return (
    <>
      <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />
      <div className="px-xs pt-5xs mt-[18px] w-full">
        <Link href={{ pathname: myHomePath }} className="w-full">
          <Button>{memberData?.username ? '내 지도로 돌아가기' : '로그인하기'}</Button>
        </Link>
      </div>
    </>
  );
};
