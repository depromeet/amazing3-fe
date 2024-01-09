'use client';

import { useState } from 'react';

import { useGetGoal } from '@/hooks/reactQuery/goal';

import { AddTaskInput } from './AddTaskInput';
import DetailLayout from './DetailLayout';
import { Tasks } from './Tasks';
import { AddSubGoalPrompt, ContentBody, DetailFooterButton, DetailHeader, Sticker } from '.';

export const GoalDetailContent = ({ id }: { id: number }) => {
  const { data: goal } = useGetGoal({ goalId: Number(id) });
  const [isOpenTaskInput, setOpenTaskInput] = useState(false);

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
                <Tasks tasks={goal.tasks} onOpenInput={setOpenTaskInput} />
              ) : (
                !isOpenTaskInput && <AddSubGoalPrompt onClick={() => setOpenTaskInput(true)} />
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
