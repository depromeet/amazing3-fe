'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Input, Typography } from '@/components';

interface LimitedLengthInputProps {
  maxLength: number;
}

export const LimitedLengthInput = ({ maxLength }: LimitedLengthInputProps) => {
  const [inputString, setInputString] = useState<string>('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <Input type="text" placeholder="닉네임" maxLength={maxLength} onChange={handleChangeInput} />
      <Typography
        className="pr-2 text-end"
        type="body5"
        textColor="gray4"
      >{`${inputString.length}/${maxLength}`}</Typography>
    </div>
  );
};
