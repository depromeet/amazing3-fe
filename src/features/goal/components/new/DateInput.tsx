'use client';

import { useEffect } from 'react';

import { Input, Typography } from '@/components';
import { useDateInput } from '@/hooks';
import { type DateProps, type DateValueProps, typeToMaxLength } from '@/hooks/useDateInput';
import { formatDate } from '@/utils/date';

interface DateInputProps {
  labelName?: string;
  initialValue?: DateValueProps;
  requireDateType?: DateProps[];
  onChange?: (value: string) => void;
}

export const DateInput = ({
  labelName = '',
  initialValue = { YYYY: '', MM: '', DD: '' },
  requireDateType = ['YYYY', 'MM', 'DD'],
  onChange,
}: DateInputProps) => {
  const { inputRefs, dateValues, handleInputChange, handleInputBlur } = useDateInput({ initialValue });

  useEffect(() => {
    onChange && onChange(formatDate(requireDateType.map((type) => dateValues[type])));
  }, [dateValues, onChange, requireDateType]);

  return (
    <div className="flex flex-col gap-5xs">
      <Typography type="title3" className="text-gray-50">
        {labelName}
      </Typography>
      <div className="flex gap-5xs">
        {requireDateType.map((type) => (
          <Input
            key={type}
            ref={inputRefs[type]}
            placeholder={type}
            className="text-center"
            maxLength={typeToMaxLength[type]}
            value={dateValues[type] || ''} // uncontrolled warning 때문에 defaultValue 필요
            onChange={(e) => handleInputChange(e, type)}
            onBlur={(e) => handleInputBlur(e, type)}
          />
        ))}
      </div>
    </div>
  );
};
