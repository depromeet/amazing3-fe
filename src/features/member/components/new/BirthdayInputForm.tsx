'use client';

import { type ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, ContentWrapper, Input } from '@/components';

import type { NewMemberFormValues } from '../../types';

export const BirthdayInputForm = () => {
  const title = '반가워요, 닉네임님!\n생년월일을 입력해 주세요.';
  const description = 'beta에서는 생년월일을 수정할 수 없어요.';

  const [birthday, setBirthday] = useState<string>('');
  const { register } = useFormContext<NewMemberFormValues>();

  /**
   * TODO: 생년월일 검증 로직 추가
   */

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  /**
   * TODO: API 연결 및 라우팅 추가
   */

  /**
   * TODO: 디자인에 아이콘 추가
   */

  return (
    <ContentWrapper title={title} description={description} sectionStyles="h-full flex flex-col">
      <div className="mt-xs flex flex-col grow w-full">
        <div className="h-full flex flex-col justify-between">
          <Input {...register('birthday')} type="date" onChange={handleChangeInput} />
          <Button type="submit" disabled={birthday.length === 0}>
            완료
          </Button>
        </div>
      </div>
    </ContentWrapper>
  );
};
