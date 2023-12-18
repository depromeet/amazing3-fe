import Image from 'next/image';

import UserIcon from '@/assets/icons/user.svg';

interface AvatarProps {
  size?: number;
  profileImage?: string;
}

export const Avatar = ({ size = 24, profileImage }: AvatarProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex justify-center items-center rounded-xl overflow-hidden bg-white cursor-pointer"
    >
      {!profileImage ? (
        <UserIcon width={`calc(${size} / 1.5)`} height={`calc(${size} / 1.5)`} />
      ) : (
        <Image src={profileImage} width={size} height={size} alt="profile_image" />
      )}
    </div>
  );
};
