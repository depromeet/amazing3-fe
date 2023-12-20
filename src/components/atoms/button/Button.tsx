import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex gap-[6px] items-center justify-center word-break:keep-all disabled:pointer-events-nonedisabled:pointer-events-none disabled:opacity-30 transition-colors duration-200 font-semibold',
  {
    variants: {
      variant: {
        heavy: 'bg-gray-60 text-white hover:bg-gray-70',
        blue: 'bg-blue-10 text-blue-30',
        tertiary: 'bg-gray-20 text-gray-40',
        issue: 'bg-red-20 text-red-50',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
      },
      width: {
        full: 'w-full',
      },
      height: {
        h60: 'h-[60px]',
        h44: 'h-[44px]',
        h12: 'h-[12px]',
      },
    },
    defaultVariants: {
      variant: 'heavy',
      rounded: 'lg',
      width: 'full',
      height: 'h60',
    },
  },
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, width, height, ...props }, ref) => {
    return <button className={buttonVariants({ variant, rounded, width, height, className })} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';
