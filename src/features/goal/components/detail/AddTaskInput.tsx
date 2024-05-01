import { useRef } from 'react';
import { useAtomValue } from 'jotai';

import { Input } from '@/components';
import { useFocusInput, useInput, useOutsideClick } from '@/hooks';
import { useCreateTask } from '@/hooks/reactQuery/task';
import { isOnlyWhitespace } from '@/utils/isOnlyWhitespace';

import { goalIdAtom } from '../../atoms';

interface AddTaskInputProps {
  isOpen: boolean;
  onOpen: (status: boolean) => void;
}

export const TASK_MAX_LENGTH = 30;

export const AddTaskInput = ({ isOpen, onOpen }: AddTaskInputProps) => {
  const goalId = useAtomValue(goalIdAtom);
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
    <div ref={inputContainerRef} className="fixed w-full max-w-[520px] bottom-0 px-xs pb-xs bg-white">
      <Input
        ref={inputRef}
        value={newDescription}
        onChange={handleNewDescription}
        placeholder="세부 목표를 입력해 주세요."
        maxLength={TASK_MAX_LENGTH}
        includeSubmitButton
        onSubmit={() => {
          mutate({ goalId, description: newDescription });
          handleAfterSubmit();
        }}
        disabled={isOnlyWhitespace(newDescription)}
      />
    </div>
  );
};
