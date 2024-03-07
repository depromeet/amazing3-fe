import { Avatar } from '@/components';

import { USER_PROFILE_IMAGE_SIZE } from '../../constants';

import ProfileCard from './ProfileCard';
import UserInfo from './UserInfo';

interface UserProfileProps {
  image: string;
  nickname: string;
  username: string;
  birth?: string;
  email: string;
  subscriptionPeriod: number;
  goalCount: number;
}

const UserProfile = ({ image, nickname, username, birth, email, subscriptionPeriod, goalCount }: UserProfileProps) => {
  return (
    <div className="mt-md flex flex-col gap-lg items-center justify-center">
      <div className="flex flex-col gap-5xs items-center">
        <Avatar size={USER_PROFILE_IMAGE_SIZE} profileImage={image} />
        <UserInfo nickname={nickname} birth={birth || ''} username={username} email={email} />
      </div>
      <ProfileCard days={subscriptionPeriod} totalGoals={goalCount} />
    </div>
  );
};

export default UserProfile;
