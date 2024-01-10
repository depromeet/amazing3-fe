'use client';

import UserProfile from './userProfile/UserProfile';
import { LifeMapPrivacySetting } from './lifeMapPrivacySetting';
import MyPageBody from './MyPageBody';
import MypageHeader from './MyPageHeader';

export const MyPageLayout = () => {
  // TODO: API 연결로 데이터 받아오기

  return (
    <div className="pt-5xs px-xs h-full flex flex-col">
      <MypageHeader />
      <UserProfile />
      <MyPageBody />
      <LifeMapPrivacySetting isPublic={true} />
    </div>
  );
};
