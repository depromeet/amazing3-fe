import { Avatar } from '@/components';

import { USER_PROFILE_IMAGE_SIZE } from '../../constants/profile';

import ProfileCard from './ProfileCard';
import UserInfo from './UserInfo';

const UserProfile = () => {
  const nickname = '일이삼사오육칠팔구십';
  const birth = '1999.08.23';
  const username = 'bandiboodi';

  // TODO: API 연결로 데이터 받아오기

  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar size={USER_PROFILE_IMAGE_SIZE} />
      <UserInfo nickname={nickname} birth={birth} username={username} />
      <ProfileCard days={131} totalGoals={4} />
    </div>
  );
};

export default UserProfile;
