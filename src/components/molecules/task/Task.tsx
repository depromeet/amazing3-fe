'use client';

import { useCallback } from 'react';
import { useOverlay } from '@toss/use-overlay';

import EllipsisVerticalIcon from '@/assets/icons/ellipsis-vertical.svg';
import CheckedIcon from '@/assets/icons/goal/radio/radio-checked.svg';
import UnCheckedIcon from '@/assets/icons/goal/radio/radio-unchecked.svg';
import { Typography } from '@/components';
import { TaskMoreOptionBottomSheet } from '@/features/goal/components/detail/TaskMoreOptionBottomSheet';

interface TaskProps {
  isDone?: boolean;
  text: string;
  targetIds: {
    goalId: number;
    taskId: number;
  };
  onDoneClick: VoidFunction;
}

export const Task = ({ isDone = false, text, targetIds, onDoneClick }: TaskProps) => {
  const CheckIcon = isDone ? CheckedIcon : UnCheckedIcon;
  const { open } = useOverlay();

  const handleDoneClick = useCallback(() => {
    onDoneClick();
  }, [onDoneClick]);

  const handleMoreOptionClick = () => {
    const targetTask = {
      ...targetIds,
      description: text,
    };
    open(({ isOpen, close }) => <TaskMoreOptionBottomSheet open={isOpen} onClose={close} targetTask={targetTask} />);
  };

  return (
    <div className="w-full flex justify-between items-start px-3xs py-4xs rounded-[8px] border-gray-20 bg-white shadow-thumb">
      <div className="flex gap-6xs max-w-[95%]">
        <div className="w-[24px] h-[24px]">
          <button onClick={handleDoneClick}>
            <CheckIcon width={24} height={24} />
          </button>
        </div>
        <Typography type="body3" className="text-gray-70">
          {text}
        </Typography>
      </div>
      <button className="px-5xs" onClick={handleMoreOptionClick}>
        <EllipsisVerticalIcon />
      </button>
    </div>
  );
};
