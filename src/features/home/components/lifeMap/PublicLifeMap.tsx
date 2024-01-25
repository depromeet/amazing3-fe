'use client';

import Link from 'next/link';

import { Button } from '@/components/atoms';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';

import { LifeMapContent } from './LifeMapContent';

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: publicGoals } = useGetPublicGoals({ username });
  const { data: memberData } = useGetMemberData();
  const myHomePath = memberData?.username ? `/home/${memberData.username}` : '/';

  return (
    <>
      <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />
      <div className="px-xs pt-5xs mt-[18px] w-full">
        <Link href={{ pathname: myHomePath }} className="w-full">
          <Button>내 지도로 돌아가기</Button>
        </Link>
      </div>
    </>
  );
};
