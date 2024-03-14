'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';

import { Skeleton } from '@/components';
import { useGetGoal } from '@/hooks/reactQuery/goal';

import { goalIdAtom, isMyGoalAtom } from '../../atoms';

import { AddTaskInput } from './AddTaskInput';
import DetailLayout from './DetailLayout';
import { Reaction } from './emoji';
import { Tasks } from './Tasks';
import { AddSubGoalPrompt, ContentBody, DetailFooterButton, DetailHeader, Sticker } from '.';

export const GoalDetailContent = ({ id }: { id: number }) => {
  const { data: goal } = useGetGoal({ goalId: Number(id) });
  const setIsMyGoal = useSetAtom(isMyGoalAtom);
  const setGoalId = useSetAtom(goalIdAtom);
  const [isOpenTaskInput, setOpenTaskInput] = useState(false);

  useEffect(() => {
    if (goal) setIsMyGoal(goal.isMyGoal);
    setGoalId(id);
  }, [goal, id, setGoalId, setIsMyGoal]);

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
              <Suspense fallback={<Skeleton className="w-full h-[122px]" />}>
                <Reaction />
              </Suspense>
              {goal.tasks.length ? (
                <Tasks tasks={goal.tasks} onOpenInput={handleOpenTaskInput(true)} />
              ) : (
                goal.isMyGoal && !isOpenTaskInput && <AddSubGoalPrompt onClick={handleOpenTaskInput(true)} />
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
