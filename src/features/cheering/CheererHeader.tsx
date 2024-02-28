'use client';

import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components/atoms';

const CheererHeader = () => {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center px-[24px]">
      <button type="button" onClick={handleClickBack}>
        <BackIcon />
      </button>
      <Typography type="title1" className="absolute left-[50%] -translate-x-1/2">
        내가 받은 응원
      </Typography>
    </div>
  );
};
export default CheererHeader;
