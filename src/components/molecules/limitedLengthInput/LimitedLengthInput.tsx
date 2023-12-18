'use client';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { Input, Typography } from '@/components';

interface LimitedLengthInputProps {
  maxLength: number;
  placeholder: string;
  setIsEmpty?: Dispatch<SetStateAction<boolean>>;
}

export const LimitedLengthInput = ({ maxLength, placeholder, setIsEmpty }: LimitedLengthInputProps) => {
  const [inputString, setInputString] = useState<string>('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
    setInputString(event.target.value);
  };

  useEffect(() => {
    setIsEmpty && setIsEmpty(inputString.length === 0);
  }, [inputString, setIsEmpty]);

  return (
    <div className="flex flex-col gap-1">
      <Input type="text" placeholder={placeholder} maxLength={maxLength} onChange={handleChangeInput} />
      <Typography className="pr-2 text-end" type="body3">{`${inputString.length}/${maxLength}`}</Typography>
    </div>
  );
};
