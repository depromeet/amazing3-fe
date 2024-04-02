import { useRouter } from 'next/navigation';

import { colors } from '@/../styles/theme';
import Divider from '@/assets/icons/divider.svg';
import StarIcon from '@/assets/icons/star-rate.svg';
import ThumbsIcon from '@/assets/icons/thumbs-icon.svg';
import { Typography } from '@/components';
import { useIsMyMap } from '@/hooks';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';
import { formatOver999 } from '@/utils/number';

interface LifeMapInfoProps {
  goalsData?: GoalResponse;
}

const LifeMapInfo = ({ goalsData }: LifeMapInfoProps) => {
  const { isMyMap } = useIsMyMap();
  const router = useRouter();

  if (!goalsData) return null;

  const {
    count: { cheering },
    goalsCount,
  } = goalsData;

  // chearing 값이 변했을 때 애니메이션 호출

  const handleClickCheering = () => {
    if (!isMyMap) return;

    router.push('/my/cheering');
  };

  return (
    <div className="flex items-center">
      <>
        <div className="flex items-center">
          <StarIcon width={20} height={20} fill={colors.blue[30]} className="inline-block mr-[4px]" />
          <Typography type="title4" className="text-gray-40 mr-[2px]">
            목표 조각
          </Typography>
          <Typography type="title4" className="text-gray-50">
            {`${formatOver999(goalsCount || 0)}`}
          </Typography>
        </div>
        <Divider className="mx-4xs" />
      </>

      <button type="button" onClick={handleClickCheering}>
        <div className="flex items-center">
          <ThumbsIcon width={20} height={20} fill={colors.blue[30]} className="inline-block mr-[4px]" />
          <Typography type="title4" className="text-gray-40 mr-[2px]">
            응원
          </Typography>
          <Typography type="title4" className="text-gray-50">
            {formatOver999(cheering)}
          </Typography>
        </div>
      </button>
    </div>
  );
};

export default LifeMapInfo;
