import Link from 'next/link';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components/atoms';

interface GoalUpdateHeaderProps {
  goalId: number;
}

// TODO: 응원 페이지, 내 정보 수정 페이지와 중복됨. 공통 컴포넌트로 분리 필요.
const GoalUpdateHeader = ({ goalId }: GoalUpdateHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <Link href={{ pathname: `/goal/detail/${goalId}` }}>
        <BackIcon />
      </Link>
      <Typography type="title1" className="text-gray-60">
        목표 수정
      </Typography>
      <div className="w-sm" />
    </div>
  );
};
export default GoalUpdateHeader;
