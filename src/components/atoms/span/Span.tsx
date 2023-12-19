import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const spanVariants = cva('whitespace-pre-line', {
  variants: {
    type: {
      form: 'text-gray-30 group-focus:text-purple-40 group-hover:text-purple-40',
      blue55: 'text-blue-55',
      blue50: 'text-blue-50',
    },
  },
  defaultVariants: {
    type: 'form',
  },
});

interface SpanProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof spanVariants> {}

export const Span = forwardRef<HTMLSpanElement, SpanProps>(({ className, type, ...props }, ref) => {
  return <span className={spanVariants({ type, className })} ref={ref} {...props} />;
});
Span.displayName = 'Span';
