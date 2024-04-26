import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components/atoms';

// TODO: 응원 페이지, 내 정보 수정 페이지와 중복됨. 공통 컴포넌트로 분리 필요.
const GoalUpdateHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <button onClick={() => router.back()} type="button">
        <BackIcon />
      </button>
      <Typography type="title1" className="text-gray-60">
        목표 수정
      </Typography>
      <div className="w-sm" />
    </div>
  );
};
export default GoalUpdateHeader;
