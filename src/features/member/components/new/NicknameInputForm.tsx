'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import SmileIcon from '@/assets/icons/smile-iocn.svg';
import { Button, LimitedLengthInput } from '@/components';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../../types';

import FormLayout from './FormLayout';

export const NicknameInputForm = () => {
  const title = '닉네임을 입력해 주세요.';
  const description = 'beta에서는 닉네임을 수정할 수 없어요.';
  const maxInputLength = 10;
  const placeholder = '닉네임';

  const [inputValue, setInputValue] = useState<string>('');
  const isMounted = useIsMounted();
  const { register, setValue } = useFormContext<NewMemberFormValues>();

  const isEmpty = () => inputValue.length === 0;
  const handleClickNextButton = () => {
    setValue('nickname', inputValue);
  };

  return (
    <FormLayout icon={<SmileIcon width={40} height={40} />} title={title} description={description}>
      <div className="mt-xs flex flex-col grow w-full">
        <div className="h-full flex flex-col justify-between">
          <div {...register('nickname')}>
            <LimitedLengthInput maxLength={maxInputLength} placeholder={placeholder} onChange={setInputValue} />
          </div>
          <Link href="/member/new/birthday">
            <Button type="button" disabled={!isMounted || isEmpty()} onClick={handleClickNextButton}>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </FormLayout>
  );
};
