'use client';

import { useState } from 'react';
import { useOverlay } from '@toss/use-overlay';
import { useAtomValue } from 'jotai';

import EllipsisVerticalIcon from '@/assets/icons/ellipsis-vertical.svg';
import CheckedIcon from '@/assets/icons/goal/radio/radio-checked.svg';
import UnCheckedIcon from '@/assets/icons/goal/radio/radio-unchecked.svg';
import { Typography } from '@/components';
import { isMyGoalAtom } from '@/features/goal/atom';
import { TaskMoreOptionBottomSheet } from '@/features/goal/components/detail/TaskMoreOptionBottomSheet';
import { useDebounceCall, useInput } from '@/hooks';
import { useUpdateDescription } from '@/hooks/reactQuery/task/useUpdateDescription';

import { TaskEditInput } from './TaskEditInput';

interface TaskProps {
  initialIsDone?: boolean;
  text: string;
  targetIds: {
    goalId: number;
    taskId: number;
  };
  onDoneClick: VoidFunction;
}

export const Task = ({ initialIsDone = false, text, targetIds, onDoneClick }: TaskProps) => {
  const [isDone, setIsDone] = useState(initialIsDone);
  const CheckIcon = isDone ? CheckedIcon : UnCheckedIcon;
  const { open } = useOverlay();

  const [isEditing, setIsEditing] = useState(false);
  const { value: editText, handleChange: handleEditText } = useInput(text);
  const { mutate } = useUpdateDescription();
  const isMyGoal = useAtomValue(isMyGoalAtom);

  const debounceHandleIsDone = useDebounceCall(() => {
    onDoneClick();
  });

  const handleDoneClick = () => {
    setIsDone((prev) => !prev);
    debounceHandleIsDone();
  };

  const handleMoreOptionClick = () => {
    const targetTask = { ...targetIds, description: text };

    open(({ isOpen, close }) => (
      <TaskMoreOptionBottomSheet
        open={isOpen}
        onClose={close}
        targetTask={targetTask}
        onTaskEdit={() => setIsEditing(true)}
      />
    ));
  };

  const handleUpdateDescription = () => {
    if (text !== editText) mutate({ ...targetIds, newDescription: editText });
    setIsEditing(false);
  };

  return (
    <div className="w-full flex gap-6xs items-start px-3xs py-4xs rounded-[8px] border-gray-20 bg-white shadow-thumb">
      {isMyGoal && (
        <button onClick={handleDoneClick} className="w-[24px] h-[24px]">
          <CheckIcon width={24} height={24} />
        </button>
      )}
      {isEditing ? (
        <div className="flex flex-col w-full gap-7xs justify-center mt-7xs">
          <TaskEditInput value={editText} onChange={handleEditText} onBlur={handleUpdateDescription} />
          <div className="w-[90%] h-[1px] bg-blue-30" />
        </div>
      ) : (
        <div className="flex w-full justify-between items-center">
          <Typography type="body3" className={`${!isMyGoal && isDone && 'line-through text-gray-40'}`}>
            {text}
          </Typography>
          {isMyGoal && (
            <button className="px-5xs" onClick={handleMoreOptionClick}>
              <EllipsisVerticalIcon />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
