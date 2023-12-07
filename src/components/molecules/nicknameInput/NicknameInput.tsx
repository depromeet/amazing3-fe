'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Input, Typography } from '@/components';

interface NicknameInputProps {
  maxLength: number;
}

export const NicknameInput = ({ maxLength }: NicknameInputProps) => {
  const [nickname, setNickname] = useState<string>('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <Input type="text" placeholder="닉네임" maxLength={maxLength} onChange={handleChangeInput} />
      <Typography
        className="pr-2 text-end"
        type="body5"
        textColor="gray4"
      >{`${nickname.length}/${maxLength}`}</Typography>
    </div>
  );
};
