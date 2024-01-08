'use client';

import { useCallback } from 'react';

import EllipsisVerticalIcon from '@/assets/icons/ellipsis-vertical.svg';
import CheckedIcon from '@/assets/icons/goal/radio/radio-checked.svg';
import UnCheckedIcon from '@/assets/icons/goal/radio/radio-unchecked.svg';
import { Typography } from '@/components';

interface GoalDetailProps {
  isDone?: boolean;
  text: string;
  onDoneClick: VoidFunction;
  onMoreOptionClick: VoidFunction;
}

export const GoalDetail = ({ isDone = false, onDoneClick, onMoreOptionClick, text }: GoalDetailProps) => {
  const CheckIcon = isDone ? CheckedIcon : UnCheckedIcon;

  const handleDoneClick = useCallback(() => {
    onDoneClick();
  }, [onDoneClick]);

  const handleMoreOptionClick = useCallback(() => {
    onMoreOptionClick();
  }, [onMoreOptionClick]);

  return (
    <div className="w-full flex justify-between items-center p-3xs rounded-[8px] border-gray-20 bg-white shadow-thumb">
      <div className="flex gap-6xs max-w-[95%]">
        <div className="w-[24px] h-[24px]">
          <CheckIcon width={24} height={24} className="cursor-pointer" onClick={handleDoneClick} />
        </div>
        <Typography type="body3" className="text-gray-70">
          {text}
        </Typography>
      </div>
      <EllipsisVerticalIcon className="cursor-pointer" onClick={handleMoreOptionClick} />
    </div>
  );
};
