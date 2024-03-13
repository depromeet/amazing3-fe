'use client';

import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { useGetGoal } from '@/hooks/reactQuery/goal';

import { isMyGoalAtom } from '../../atom';

import { AddTaskInput } from './AddTaskInput';
import DetailLayout from './DetailLayout';
import { Reaction } from './emoji';
import { Tasks } from './Tasks';
import { AddSubGoalPrompt, ContentBody, DetailFooterButton, DetailHeader, Sticker } from '.';

export const GoalDetailContent = ({ id }: { id: number }) => {
  const { data: goal } = useGetGoal({ goalId: Number(id) });
  const [isMyGoal, setIsMyGoal] = useAtom(isMyGoalAtom);
  const [isOpenTaskInput, setOpenTaskInput] = useState(false);

  useEffect(() => {
    if (goal) setIsMyGoal(goal.isMyGoal);
  }, [goal, setIsMyGoal]);

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
              <Reaction />
              {goal.tasks.length ? (
                <Tasks tasks={goal.tasks} onOpenInput={handleOpenTaskInput(true)} />
              ) : (
                isMyGoal && !isOpenTaskInput && <AddSubGoalPrompt onClick={handleOpenTaskInput(true)} />
              )}
            </div>
          )
        }
        footer={<DetailFooterButton />}
      />
      {isOpenTaskInput && <AddTaskInput isOpen={isOpenTaskInput} onOpen={setOpenTaskInput} />}
    </>
  );
};

export default GoalDetailContent;
