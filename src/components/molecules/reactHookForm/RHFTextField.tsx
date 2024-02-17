import type { ChangeEvent } from 'react';
import React from 'react';

import { Input, Textarea, Typography } from '@/components/atoms';

export interface TextFieldProps {
  name: string;
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string;
  maxLength?: number;
}

export const RHFTextField = ({
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  helperText,
  multiline = false,
  rows = 1,
  defaultValue,
  maxLength,
}: TextFieldProps) => {
  const inputProps = {
    name: name,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
  };
  return (
    <div className="flex flex-col gap-5xs">
      {label && (
        <div className="flex justify-between items-center">
          <Typography type="title3" className="text-gray-50">
            {label}
          </Typography>
          {maxLength && (
            <div className="flex">
              <Typography type="title5" className="text-gray-40">
                {value?.length}
              </Typography>
              <Typography type="title5" className="text-gray-30">{`/${maxLength}`}</Typography>
            </div>
          )}
        </div>
      )}
      {multiline ? <Textarea {...inputProps} rows={rows} /> : <Input type={type} {...inputProps} />}
      {helperText && (
        <div className="px-5xs">
          <Typography type="body3" className="text-gray-40">
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  );
};
RHFTextField.displayName = 'RHFTextField';
