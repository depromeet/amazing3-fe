import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * TODO: 디자인 시스템에 맞게 수정
 */
const inputVariants = cva(
  'flex h-10 w-full rounded-md bg-transparent px-3 py-2 focus-visible:outline-none\
  ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }: InputProps, ref) => {
    return (
      <input className={inputVariants({ className })} ref={ref} {...props} />
    );
  },
);
Input.displayName = 'Input';

export default Input;
