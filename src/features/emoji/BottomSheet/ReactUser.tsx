import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/components';

import type { ReactedUserProps } from './Content';

export const ReactUser = ({ username, image, nickname }: ReactedUserProps) => {
  return (
    <Link href={{ pathname: `/home/${username}` }}>
      <button className="w-full flex flex-col gap-xs">
        <div className="flex gap-4xs items-center">
          <Image src={image} width={50} height={50} alt="user-profile" />
          <Typography type="body1">{nickname}</Typography>
        </div>
      </button>
    </Link>
  );
};
