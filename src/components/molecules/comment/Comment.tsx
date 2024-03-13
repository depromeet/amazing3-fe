import Image from 'next/image';
import Link from 'next/link';

import TrashIcon from '@/assets/icons/trash-icon.svg';
import { Typography } from '@/components';

interface CommentProps {
  user: {
    url: string;
    nickname: string;
    username: string;
  };
  content: string;
  createdAt: string;
  isDeletable?: boolean;
  onDelete?: VoidFunction;
}

export const Comment = ({ user, content, createdAt, isDeletable, onDelete }: CommentProps) => {
  return (
    <div className="flex gap-4xs">
      <Link href={{ pathname: `/home/${user.username}` }}>
        <Image src={user.url} width={50} height={50} alt="user_profile_image" className="rounded-full" />
      </Link>
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <div className="flex gap-6xs items-center">
            <Link href={{ pathname: `/home/${user.username}` }}>
              <Typography type="body3">{user.nickname}</Typography>
            </Link>
            {/* TODO: 시간 정책 맞게 변환해주는 유틸 함수 래핑 */}
            <Typography type="caption1" className="text-gray-40">
              {createdAt}
            </Typography>
          </div>
          {isDeletable && (
            <button onClick={onDelete}>
              <TrashIcon />
            </button>
          )}
        </div>
        <Typography type="body2">{content}</Typography>
      </div>
    </div>
  );
};
