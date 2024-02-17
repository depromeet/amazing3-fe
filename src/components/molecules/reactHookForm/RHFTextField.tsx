import type { InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input, Typography } from '@/components/atoms';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  helperText?: string;
}

export const RHFTextField = ({ name, label, type, helperText, maxLength }: TextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-5xs">
          {label && (
            <div className="flex justify-between items-center">
              <Typography type="title3" className="text-gray-50">
                {label}
              </Typography>
              {maxLength && (
                <div className="flex">
                  <Typography type="title5" className="text-gray-40">
                    {field.value?.length}
                  </Typography>
                  <Typography type="title5" className="text-gray-30">{`/${maxLength}`}</Typography>
                </div>
              )}
            </div>
          )}
          <Input
            {...field}
            type={type}
            value={type === 'number' && field.value === 0 ? '' : field.value}
            onChange={(event) => {
              if (type === 'number') {
                field.onChange(Number(event.target.value));
              } else {
                field.onChange(event.target.value);
              }
            }}
          />
          {helperText && (
            <div className="px-5xs">
              <Typography type="body3" className="text-gray-40">
                {helperText}
              </Typography>
            </div>
          )}
        </div>
      )}
    />
  );
};
RHFTextField.displayName = 'RHFTextField';
