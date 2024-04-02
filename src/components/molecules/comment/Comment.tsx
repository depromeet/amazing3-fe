'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';

import TrashIcon from '@/assets/icons/trash-icon.svg';
import { Typography } from '@/components';
import { convertTimeToElapsedTime } from '@/utils/date';

interface CommentProps {
  commenter: {
    image: string;
    nickname: string;
    username: string;
  };
  content: string;
  writtenAt: string;
  isDeletable?: boolean;
  onDelete?: VoidFunction;
}

export const Comment = ({ commenter, content, writtenAt, isDeletable, onDelete }: CommentProps) => {
  return (
    <m.div className="flex gap-4xs" {...animate}>
      <Link href={{ pathname: `/home/${commenter.username}` }}>
        <Image src={commenter.image} width={50} height={50} alt="user_profile_image" className="rounded-full" />
      </Link>
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <div className="flex gap-6xs items-center">
            <Link href={{ pathname: `/home/${commenter.username}` }}>
              <Typography type="body3">{commenter.nickname}</Typography>
            </Link>
            <Typography type="caption1" className="text-gray-40">
              {convertTimeToElapsedTime(writtenAt)}
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
    </m.div>
  );
};

const animate = {
  layout: true,
  initial: { y: -20 },
  animate: { y: 0 },
  exit: { opacity: 0, y: -20, height: 0, overflow: 'hidden', transition: { duration: 0.3 } },
  transition: { duration: 0.3 },
};
