import type { SyntheticEvent } from 'react';

import UserIcon from '@/assets/icons/user.svg';
import DefaultProfileImage from '@/assets/images/default-profile.png';

interface AvatarProps {
  size?: number;
  profileImage?: string;
}

export const Avatar = ({ size = 24, profileImage }: AvatarProps) => {
  const handleAddDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DefaultProfileImage.src;
  };

  return (
    <div
      style={{ width: size, height: size }}
      className="flex justify-center items-center rounded-xl overflow-hidden bg-white"
    >
      {!profileImage ? (
        <UserIcon width={`calc(${size} / 1.5)`} height={`calc(${size} / 1.5)`} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={profileImage} width={size} height={size} alt="profile_image" onError={handleAddDefaultImg} />
      )}
    </div>
  );
};
