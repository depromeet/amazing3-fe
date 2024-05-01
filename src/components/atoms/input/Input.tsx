'use client';

import { forwardRef, useCallback, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { colors } from '@/../styles/theme';
import SubmitIcon from '@/assets/icons/submit.svg';
import { composeEventHandlers } from '@/utils/composeEventHandlers';
import { isOnlyWhitespace } from '@/utils/isOnlyWhitespace';

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
  (
    { className, value, includeSubmitButton = false, onSubmit = () => {}, onFocus, onBlur, disabled, ...props },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);

    const isDefaultInvalid = !value || isOnlyWhitespace(`${value}`);

    return (
      <div className={inputContainerVariants({ isFocused })}>
        <input
          className={inputVariants({ className })}
          ref={ref}
          {...props}
          onFocus={composeEventHandlers(onFocus, () => {
            handleFocus();
          })}
          onBlur={composeEventHandlers(onBlur, () => {
            handleBlur();
          })}
        />
        {includeSubmitButton && (
          <div className="w-[32px] h-[32px]">
            <button
              onClick={onSubmit}
              disabled={disabled || isDefaultInvalid}
              className={`${(isDefaultInvalid || disabled) && 'cursor-not-allowed'}`}
            >
              <SubmitIcon
                className="transition-colors duration-300"
                fill={disabled || isDefaultInvalid ? colors.gray[20] : colors.gray[40]}
              />
            </button>
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
