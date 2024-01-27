'use client';

import { useState } from 'react';

import { useIsMyMap } from '@/hooks';
import { useGetGoal } from '@/hooks/reactQuery/goal';

import { AddTaskInput } from './AddTaskInput';
import DetailLayout from './DetailLayout';
import { Tasks } from './Tasks';
import { AddSubGoalPrompt, ContentBody, DetailFooterButton, DetailHeader, Sticker } from '.';

export const GoalDetailContent = ({ id }: { id: number }) => {
  const { isMyMap } = useIsMyMap();
  const { data: goal } = useGetGoal({ goalId: Number(id) });
  const [isOpenTaskInput, setOpenTaskInput] = useState(false);

  const handleOpenTaskInput = (status: boolean) => () => setOpenTaskInput(status);

  return (
    <>
      <DetailLayout
        header={<DetailHeader goalId={id} />}
        sticker={goal && <Sticker stickerUrl={goal.stickerUrl} />}
        body={
          goal && (
            <div className="flex flex-col gap-[28px]">
              <ContentBody
                title={goal.title}
                date={goal.deadline}
                tag={goal.tagInfo.tagContent}
                more={goal.description}
              />
              {goal.tasks.length ? (
                <Tasks goalId={id} tasks={goal.tasks} onOpenInput={handleOpenTaskInput(true)} />
              ) : (
                isMyMap && !isOpenTaskInput && <AddSubGoalPrompt onClick={handleOpenTaskInput(true)} />
              )}
            </div>
          )
        }
        footer={<DetailFooterButton />}
      />
      {isOpenTaskInput && <AddTaskInput goalId={id} isOpen={isOpenTaskInput} onOpen={setOpenTaskInput} />}
    </>
  );
};

export default GoalDetailContent;
