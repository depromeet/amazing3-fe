import Link from 'next/link';

import { Avatar, Typography } from '@/components';

import type { ReactedUserProps } from './Content';

export const ReactUser = ({ username, image, nickname }: ReactedUserProps) => {
  return (
    <Link href={{ pathname: `/home/${username}` }}>
      <button className="w-full flex flex-col gap-xs">
        <div className="flex gap-4xs items-center">
          <Avatar profileImage={image} size={50} />
          <Typography type="body1">{nickname}</Typography>
        </div>
      </button>
    </Link>
  );
};
