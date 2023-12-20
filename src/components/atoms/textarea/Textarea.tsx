import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const textareaVariants = cva(
  'p-3xs flex w-full rounded-md bg-white placeholder-gray-30 border border-gray-20 shadow-thumb\
  focus-visible:border-blue-20 disabled:cursor-not-allowed disabled:opacity-50\
  focus-visible:outline-none resize-none',
);

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }: TextareaProps, ref) => {
    return <textarea className={textareaVariants({ className })} ref={ref} {...props} />;
  },
);
Textarea.displayName = 'Textarea';
