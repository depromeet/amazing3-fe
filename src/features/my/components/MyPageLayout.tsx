'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAtomValue } from 'jotai';

import { isLoginAtom } from '@/features/auth/atom';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

import { getDateDiffFromToday } from '../utils';

import UserProfile from './userProfile/UserProfile';
import { LifeMapPrivacySetting } from './lifeMapPrivacySetting';
import MyPageBody from './MyPageBody';
import MypageHeader from './MyPageHeader';

export const MyPageLayout = () => {
  const { data: memberData } = useGetMemberData();
  const isLogin = useAtomValue(isLoginAtom);
  const router = useRouter();

  useEffect(() => {
    if (isLogin === false) {
      router.push('/');
    }
  }, [isLogin, router]);

  return (
    <div className="pt-5xs px-xs h-full flex flex-col">
      <MypageHeader username={memberData?.username} />
      {memberData && (
        <>
          <UserProfile
            image={memberData.image}
            nickname={memberData.nickname}
            username={memberData.username}
            birth={memberData.birth}
            email={memberData.email}
            subscriptionPeriod={getDateDiffFromToday(memberData.createdAt)}
            goalCount={memberData.lifeMap.goalsCount}
          />
          <MyPageBody />
          <LifeMapPrivacySetting isPublic={memberData.lifeMap.isPublic} />
        </>
      )}
    </div>
  );
};
