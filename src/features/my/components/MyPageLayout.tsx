'use client';

import UserProfile from './userProfile/UserProfile';
import { LifeMapPrivacySetting } from './lifeMapPrivacySetting';
import MyPageBody from './MyPageBody';
import MypageHeader from './MyPageHeader';

export const MyPageLayout = () => {
  const nickname = '일이삼사오육칠팔구십';
  const birth = '1999.08.23';
  const username = 'bandiboodi';
  const isPublic = true;

  // TODO: API 연결로 데이터 받아오기

  return (
    <div className="pt-5xs px-xs h-full flex flex-col">
      <MypageHeader />
      <UserProfile nickname={nickname} username={username} birth={birth} />
      <MyPageBody />
      <LifeMapPrivacySetting isPublic={isPublic} />
    </div>
  );
};
