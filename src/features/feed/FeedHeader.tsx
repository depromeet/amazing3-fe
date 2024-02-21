'use client';

import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components/atoms';

export const FeedHeader = () => {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center px-[24px]">
      <button type="button" onClick={handleClickBack}>
        <BackIcon />
      </button>
      <Typography type="title1" className="absolute left-[50%] -translate-x-1/2 text-gray-70">
        목표피드
      </Typography>
    </div>
  );
};
