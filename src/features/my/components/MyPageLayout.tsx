'use client';

import UserProfile from './userProfile/UserProfile';
import MyPageBody from './MyPageBody';
import MypageHeader from './MyPageHeader';

export const MyPageLayout = () => {
  return (
    <div className="pt-5xs px-xs h-full flex flex-col">
      <MypageHeader />
      <UserProfile />
      <MyPageBody />
    </div>
  );
};
