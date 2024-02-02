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

  const handleClickCheering = () => {
    if (!isMyMap) return;

    router.push('/my/cheering');
  };

  return (
    <div className="flex items-center mt-5xs">
      <>
        <div className="flex items-center">
          <StarIcon width={20} height={20} fill={colors.blue[30]} className="inline-block mr-[4px]" />
          <Typography type="title4" className="text-gray-50 mr-[2px]">
            {`${formatOver999(goalsCount || 0)}`}
          </Typography>
          <Typography type="title4" className="text-gray-40">
            개의 목표 조각
          </Typography>
        </div>
        <Divider className="mx-5xs" />
      </>

      <button type="button" onClick={handleClickCheering}>
        <div className="flex items-center">
          <ThumbsIcon width={20} height={20} fill={colors.blue[30]} className="inline-block mr-[4px]" />
          <Typography type="title4" className="text-gray-50 mr-[2px]">
            {formatOver999(cheering)}
          </Typography>
          <Typography type="title4" className="text-gray-40">
            개의 응원
          </Typography>
        </div>
      </button>
    </div>
  );
};

export default LifeMapInfo;
