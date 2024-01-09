'use client';

import { useRef, useState } from 'react';

import { Input } from '@/components';
import { useGetGoal } from '@/hooks/reactQuery/goal';
import { useCreateTask } from '@/hooks/reactQuery/goal/useCreateTask';
import { useFocusInput } from '@/hooks/useFocusInput';
import { useInput } from '@/hooks/useInput';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import DetailLayout from './DetailLayout';
import { Tasks } from './Tasks';
import { AddSubGoalPrompt, ContentBody, DetailFooterButton, DetailHeader, Sticker } from '.';

export const GoalDetailContent = ({ id }: { id: number }) => {
  const { data: goal } = useGetGoal({ goalId: Number(id) });
  const { mutate } = useCreateTask();

  const [isOpenTaskInput, setOpenTaskInput] = useState(false);
  const inputRef = useFocusInput(isOpenTaskInput);
  const { value: newDescription, handleChange: handleNewDescription, reset } = useInput('');

  const inputContainerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(inputContainerRef, () => handleOpenTaskInput(false));

  const handleOpenTaskInput = (status: boolean) => setOpenTaskInput(status);

  const handleAfterSubmit = () => {
    reset();
    inputRef.current?.focus();
  };

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
                <Tasks tasks={goal.tasks} onOpenInput={handleOpenTaskInput} />
              ) : (
                !isOpenTaskInput && <AddSubGoalPrompt onClick={() => handleOpenTaskInput(true)} />
              )}
            </div>
          )
        }
        footer={<DetailFooterButton />}
      />
      {isOpenTaskInput && (
        <div ref={inputContainerRef} className="w-full absolute bottom-0 p-xs">
          <Input
            ref={inputRef}
            value={newDescription}
            onChange={handleNewDescription}
            placeholder="세부 목표를 입력해 주세요."
            minLength={30}
            includeSubmitButton
            onSubmit={() => {
              mutate({ goalId: id, description: newDescription });
              handleAfterSubmit();
            }}
          />
        </div>
      )}
    </>
  );
};

export default GoalDetailContent;
