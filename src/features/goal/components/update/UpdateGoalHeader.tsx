'use client';

import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components/atoms';

// TODO: 응원 페이지, 내 정보 수정 페이지와 중복됨. 공통 컴포넌트로 분리 필요.
const UpdateGoalHeader = () => {
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
        목표 수정
      </Typography>
    </div>
  );
};
export default UpdateGoalHeader;
