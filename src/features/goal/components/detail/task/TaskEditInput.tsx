import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { TASK_MAX_LENGTH } from '@/features/goal/components/detail/AddTaskInput';

export const TaskEditInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref) => {
    return (
      <input
        ref={ref}
        className="w-full mr-[20px] placeholder-gray-30 bg-transparent disabled:cursor-not-allowed focus-visible:outline-none disabled:opacity-50 border-none text-[14px] font-medium"
        maxLength={TASK_MAX_LENGTH}
        {...props}
      />
    );
  },
);
TaskEditInput.displayName = 'TaskEditInput';
