import { Avatar } from '@/components';

import { USER_PROFILE_IMAGE_SIZE } from '../../constants';

import ProfileCard from './ProfileCard';
import UserInfo from './UserInfo';

interface UserProfileProps {
  nickname: string;
  username: string;
  birth: string;
}

const UserProfile = ({ nickname, username, birth }: UserProfileProps) => {
  return (
    <div className="mt-md flex flex-col gap-lg items-center justify-center">
      <div className="flex flex-col gap-5xs items-center">
        <Avatar size={USER_PROFILE_IMAGE_SIZE} />
        <UserInfo nickname={nickname} birth={birth} username={username} />
      </div>
      <ProfileCard days={131} totalGoals={4} />
    </div>
  );
};

export default UserProfile;
