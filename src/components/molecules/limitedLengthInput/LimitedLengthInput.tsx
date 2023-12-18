'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Input, Typography } from '@/components';

interface LimitedLengthInputProps {
  maxLength: number;
  placeholder: string;
  onChange?: (inputString: string) => void;
}

export const LimitedLengthInput = ({ maxLength, placeholder, onChange }: LimitedLengthInputProps) => {
  const [inputString, setInputString] = useState<string>('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
    setInputString(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <Input type="text" placeholder={placeholder} maxLength={maxLength} onChange={handleChangeInput} />
      <div className="pr-7xs w-full flex justify-end">
        <Typography className="text-gray-40" type="body3">{`${inputString.length}`}</Typography>
        <Typography className="text-gray-30" type="body3">{`/${maxLength}`}</Typography>
      </div>
    </div>
  );
};
