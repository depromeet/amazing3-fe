import React from 'react';
import { useRouter } from 'next/navigation';

export const DetailFooterButton = () => {
  const router = useRouter();

  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between">
      {/* <button
        className="flex justify-center items-center bg-gray-20 gap-7xs rounded-[100px] px-2xs py-3xs"
        onClick={handleClickBackButton}
      >
        <ArrowIcon />
        <Typography type="subLabel1" className="text-gray-40">
          이전
        </Typography>
      </button>
      <Link href={{ pathname: '/home' }}>
        <button className="flex justify-center items-center bg-gray-20 gap-7xs rounded-[100px] px-2xs py-3xs">
          <Typography type="subLabel1" className="text-gray-40">
            다음
          </Typography>
          <ArrowIcon className="rotate-180" />
        </button>
      </Link> */}
    </div>
  );
};
