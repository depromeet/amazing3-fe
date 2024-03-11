import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/components';
import { formatDotYYYYMMDD } from '@/utils/date';

import { DeletedCheerer } from './DeletedCheerer';

interface CheererProps {
  userId: number;
  userImageUrl: string;
  userName: string;
  userNickName: string;
  cheeringAt: string;
}

export const Cheerer = ({ userId, userName, userNickName, userImageUrl, cheeringAt }: CheererProps) => {
  const isDeletedUser = userId === -1;

  return (
    <div className="flex items-center justify-between py-5xs">
      {isDeletedUser ? (
        <DeletedCheerer />
      ) : (
        <Link href={`/home/${userName}`}>
          <div className="flex items-center">
            <Image src={userImageUrl} alt="user-profile" width={32} height={32} className="rounded-full mr-5xs" />
            <Typography type="body2">{userNickName}</Typography>
          </div>
        </Link>
      )}
      <Typography type="body2" className="text-gray-40">
        {formatDotYYYYMMDD(cheeringAt)}
      </Typography>
    </div>
  );
};
