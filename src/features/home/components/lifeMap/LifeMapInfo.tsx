import Link from 'next/link';

import { colors } from '@/../styles/theme';
import Divider from '@/assets/icons/divider.svg';
import StarIcon from '@/assets/icons/star-rate.svg';
import ThumbsIcon from '@/assets/icons/thumbs-icon.svg';
import { Typography } from '@/components';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';
import { formatOver999 } from '@/utils/number';

interface LifeMapInfoProps {
  goalsData?: GoalResponse;
}

const LifeMapInfo = ({ goalsData }: LifeMapInfoProps) => {
  if (!goalsData) return null;

  // TODO: 조회수, 응원하기 개수 api 호출
  const { goalsCount } = goalsData;

  return (
    <div className="flex items-center mt-5xs">
      {goalsCount ? (
        <div className="flex items-center">
          <StarIcon width={20} height={20} fill={colors.blue[30]} className="inline-block mr-[4px]" />
          <Typography type="title4" className="text-gray-50 mr-[2px]">
            {`${formatOver999(goalsData.goalsCount)}`}
          </Typography>
          <Typography type="title4" className="text-gray-40">
            개의 목표 조각
          </Typography>
        </div>
      ) : (
        ''
      )}

      <Divider className="mx-5xs" />

      {/* TODO: 응원하기 개수 응답 값으로 수정 예정 */}
      <Link href="/my/like">
        <div className="flex items-center">
          <ThumbsIcon width={20} height={20} fill={colors.blue[30]} className="inline-block mr-[4px]" />
          <Typography type="title4" className="text-gray-50 mr-[2px]">
            {formatOver999(1000)}
          </Typography>
          <Typography type="title4" className="text-gray-40">
            개의 응원
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default LifeMapInfo;
