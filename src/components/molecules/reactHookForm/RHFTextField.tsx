import { type InputHTMLAttributes, type TextareaHTMLAttributes, useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input, Textarea, Typography } from '@/components/atoms';

export interface TextFieldProps {
  label?: string;
  helperText?: string;
}
export interface InputTextFieldProps extends InputHTMLAttributes<HTMLInputElement>, TextFieldProps {
  name: string;
}

export interface TextareaTextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, TextFieldProps {
  name: string;
}

export const RHFTextField = (props: InputTextFieldProps | TextareaTextFieldProps) => {
  const { name, label, helperText, maxLength } = props;
  const { control } = useFormContext();
  const isTextarea = 'rows' in props;
  const type = isTextarea ? undefined : (props as InputTextFieldProps).type;

  const handleChange = useCallback(
    (onChange: (value: string | number) => void) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        if (maxLength && value.length > maxLength) return;

        const updatedValue = type === 'number' ? Number(value) : value;
        onChange(updatedValue);
      },
    [maxLength, type],
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-5xs">
          {label && <Label label={label} value={field.value} maxLength={maxLength} />}
          {isTextarea ? (
            <Textarea {...field} onChange={handleChange(field.onChange)} />
          ) : (
            <Input {...field} onChange={handleChange(field.onChange)} />
          )}
          {helperText && <HelperText text={helperText} />}
        </div>
      )}
    />
  );
};
RHFTextField.displayName = 'RHFTextField';

const Label = ({ label, value, maxLength }: { label: string; value: string | number; maxLength?: number }) => (
  <div className="flex justify-between items-center">
    <Typography type="title3" className="text-gray-50">
      {label}
    </Typography>
    {maxLength && (
      <div className="flex">
        <Typography type="title5" className="text-gray-40">
          {String(value).length}
        </Typography>
        <Typography type="title5" className="text-gray-30">{`/${maxLength}`}</Typography>
      </div>
    )}
  </div>
);

const HelperText = ({ text }: { text: string }) => (
  <div className="px-5xs">
    <Typography type="body3" className="text-gray-40">
      {text}
    </Typography>
  </div>
);
