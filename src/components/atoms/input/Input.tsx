import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'p-3xs flex w-full rounded-md bg-white placeholder-gray-30 border border-gray-20 shadow-thumb\
  focus-visible:border-blue-20 disabled:cursor-not-allowed disabled:opacity-50\
  focus-visible:outline-none',
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }: InputProps, ref) => {
  return <input className={inputVariants({ className })} ref={ref} {...props} />;
});
Input.displayName = 'Input';
