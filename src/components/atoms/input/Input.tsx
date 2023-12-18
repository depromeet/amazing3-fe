import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * TODO: 디자인 시스템에 맞게 수정
 */
const inputVariants = cva(
  'p-3xs flex w-full rounded-md bg-white placeholder-gray-30 border border-gray-20 shadow-input\
  focus-visible:border-blue-20 disabled:cursor-not-allowed disabled:opacity-50\
  focus-visible:outline-none',
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }: InputProps, ref) => {
  return <input className={inputVariants({ className })} ref={ref} {...props} />;
});
Input.displayName = 'Input';
