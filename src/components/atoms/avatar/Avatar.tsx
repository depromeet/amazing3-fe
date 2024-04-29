import type { SyntheticEvent } from 'react';
import Link from 'next/link';

import UserIcon from '@/assets/icons/user.svg';
import DefaultProfileImage from '@/assets/images/default-profile.png';

interface AvatarProps {
  size?: number;
  profileImage?: string;
  href?: string;
}

export const Avatar = ({ size = 24, profileImage, href }: AvatarProps) => {
  const handleAddDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DefaultProfileImage.src;
  };

  return (
    <Link href={{ pathname: href }}>
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
    </Link>
  );
};
