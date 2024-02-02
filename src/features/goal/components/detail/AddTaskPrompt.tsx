import Image from 'next/image';

import { colors } from '@/../styles/theme';
import PlusIcon from '@/assets/icons/plus.svg';
import StarIcon from '@/assets/icons/star-rate.svg';
import BandiboodiSubGoalImage from '@/assets/images/bandiboodi-sub-goal.png';
import { Typography } from '@/components';

interface AddSubGoalsPromptProps {
  onClick: VoidFunction;
}

export const AddSubGoalPrompt = ({ onClick }: AddSubGoalsPromptProps) => {
  return (
    <div className="w-full flex flex-col gap-[10px] pt-2xs pb-3xs px-3xs h-[130px] bg-gradient5 rounded-[12px]">
      <div className="flex gap-4xs">
        <Image src={BandiboodiSubGoalImage} width={40} height={40} alt="bandiboodi_sub_goal" />
        <Typography className="font-insungit text-[13px] text-blue-35">
          하..너무 멋진 목표다 ! <br /> <span className="text-purple-30">세부 목표</span>를 세우고 차근차근 이뤄보자
          <StarIcon width={15} height={15} fill={colors.purple[30]} className="inline-block" />
        </Typography>
      </div>
      <button
        className="w-full h-[44px] bg-white flex items-center justify-center gap-6xs rounded-[12px] text-purple-40"
        onClick={onClick}
      >
        <PlusIcon width={24} height={24} fill={colors.purple[30]} />
        <Typography type="subLabel2">세부 목표 추가하기</Typography>
      </button>
    </div>
  );
};
