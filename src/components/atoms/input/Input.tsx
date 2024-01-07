import { forwardRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import SubmitIcon from '@/assets/icons/submit.svg';

import { colors } from '../../../../styles/theme';

const inputContainerVariants = cva(
  'p-3xs flex gap-6xs items-center w-full h-[56px] rounded-md bg-white border shadow-thumb',
  {
    variants: {
      isFocused: {
        true: 'border-blue-20',
        false: 'border-gray-20',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
  },
);

const inputVariants = cva(
  'w-full placeholder-gray-30 bg-transparent disabled:cursor-not-allowed focus-visible:outline-none disabled:opacity-50',
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  includeSubmitButton?: boolean;
  onSubmit?: VoidFunction;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, includeSubmitButton = false, onSubmit = () => {}, ...props }: InputProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
      <div className={inputContainerVariants({ isFocused })}>
        <input
          className={inputVariants({ className })}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {includeSubmitButton && (
          <div className="w-[32px] h-[32px]">
            <SubmitIcon
              className="cursor-pointer transition-colors duration-300"
              fill={props.disabled || !props.value ? colors.gray[20] : colors.gray[40]}
              onClick={onSubmit}
            />
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
