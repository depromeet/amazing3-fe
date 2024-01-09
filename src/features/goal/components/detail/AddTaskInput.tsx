'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react';

import { Input } from '@/components';
import { useFocusInput, useInput, useOutsideClick } from '@/hooks';
import { useCreateTask } from '@/hooks/reactQuery/goal/useCreateTask';

interface AddTaskInputProps {
  goalId: number;
  isOpen: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddTaskInput = ({ goalId, isOpen, onOpen }: AddTaskInputProps) => {
  const { mutate } = useCreateTask();

  const inputRef = useFocusInput(isOpen);
  const { value: newDescription, handleChange: handleNewDescription, reset } = useInput('');

  const inputContainerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(inputContainerRef, () => onOpen(false));

  const handleAfterSubmit = () => {
    reset();
    inputRef.current?.focus();
  };

  return (
    <div ref={inputContainerRef} className="w-full absolute bottom-0 p-xs">
      <Input
        ref={inputRef}
        value={newDescription}
        onChange={handleNewDescription}
        placeholder="세부 목표를 입력해 주세요."
        minLength={30}
        includeSubmitButton
        onSubmit={() => {
          mutate({ goalId, description: newDescription });
          handleAfterSubmit();
        }}
      />
    </div>
  );
};
