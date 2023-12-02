import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * TODO: 디자인 시스템에 맞게 수정
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center word-break:keep-all text-white disabled:pointer-events-nonedisabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      intent: {
        primary:
          'bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 disabled:bg-gray-40',
        secondary:
          'bg-black hover:bg-gray-800 focus:bg-gray-800 disabled:bg-gray-40',
        label:
          'font-semibold text-black underline-offset-4 disabled:text-gray-40',
        success:
          'bg-green-700 hover:bg-green-800 focus:bg-green-800 disabled:bg-gray-40',
        danger:
          'bg-red-700 hover:bg-red-800 focus:bg-red-800 disabled:bg-gray-40',
        warning: 'bg-yellow-700 hover:bg-yellow-800 focus:bg-yellow-800',
      },
      size: {
        xl: 'h-12 w-full rounded-lg px-[2.5rem] py-3',
        lg: 'h-12 w-[16.25rem] rounded-md px-[2.5rem] py-3',
        md: 'h-12 w-[12.5rem] rounded-md px-[2.5rem] py-3',
        sm: 'h-12 w-[10.25rem] rounded-md px-[2.5rem] py-3',
        xs: 'h-6 w-[315px] rounded-lg px-[2.5rem] py-3',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'lg',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ intent, size, className })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
