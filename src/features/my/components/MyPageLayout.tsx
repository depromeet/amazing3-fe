'use client';

import { useGetMemberData } from '@/hooks/reactQuery/auth';

import { getDateDiffFromToday } from '../utils';

import UserProfile from './userProfile/UserProfile';
import { LifeMapPrivacySetting } from './lifeMapPrivacySetting';
import MyPageBody from './MyPageBody';
import MypageHeader from './MyPageHeader';

export const MyPageLayout = () => {
  const { data: memberData } = useGetMemberData();

  return (
    <div className="pt-5xs px-xs h-full flex flex-col">
      <MypageHeader />
      {memberData && (
        <>
          <UserProfile
            image={memberData.image}
            nickname={memberData.nickname}
            username={memberData.username}
            birth={memberData.birth}
            subscriptionPeriod={getDateDiffFromToday(memberData.createdAt)}
            goalCount={memberData.goal.count}
          />
          <MyPageBody />
          <LifeMapPrivacySetting isPublic={memberData.lifeMap.isPublic} />
        </>
      )}
    </div>
  );
};
