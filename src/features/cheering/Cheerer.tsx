import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/components';

interface CheererProps {
  image: string;
  username: string;
  nickname: string;
  cheeredAt: string;
}

export const Cheerer = ({ image, username, nickname, cheeredAt }: CheererProps) => {
  return (
    <div className="flex items-center justify-between py-5xs">
      <Link href={`/home/${username}`}>
        <div className="flex items-center">
          <Image src={image} alt="user-profile" width={32} height={32} className="rounded-full mr-5xs" />
          <Typography type="body2">{nickname}</Typography>
        </div>
      </Link>
      <Typography type="body2" className="text-gray-40">
        {cheeredAt}
      </Typography>
    </div>
  );
};
