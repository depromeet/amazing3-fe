import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { TASK_MAX_LENGTH } from '@/features/goal/components/detail/AddTaskInput';

export const TaskEditInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref) => {
    return (
      <input
        ref={ref}
        className="w-full mr-[20px] placeholder-gray-30 bg-transparent  disabled:cursor-not-allowed focus-visible:outline-none disabled:opacity-50 border border-t-0 border-x-0 border-b-blue-30 text-[14px] font-medium leading-[160%]"
        maxLength={TASK_MAX_LENGTH}
        {...props}
      />
    );
  },
);
TaskEditInput.displayName = 'TaskEditInput';
