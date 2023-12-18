'use client';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';

import { Input, Typography } from '@/components';
import type { NewMemberFormValues } from '@/features/member/types';

interface LimitedLengthInputProps {
  maxLength: number;
  placeholder: string;
  setIsEmpty?: Dispatch<SetStateAction<boolean>>;
  // TODO: 이후 새로운 Form에서 재사용된다면 NewMemberFormValues 대신 type으로 사용되는 interface를 묶어 정의하면 될 것 같습니다.
  formRegister?: UseFormRegister<NewMemberFormValues>;
}

export const LimitedLengthInput = ({ maxLength, placeholder, setIsEmpty, formRegister }: LimitedLengthInputProps) => {
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
      <Input
        {...(formRegister && formRegister('nickname'))}
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChangeInput}
      />
      <div className="pr-7xs w-full flex justify-end">
        <Typography className="text-gray-40" type="body3">{`${inputString.length}`}</Typography>
        <Typography className="text-gray-30" type="body3">{`/${maxLength}`}</Typography>
      </div>
    </div>
  );
};
