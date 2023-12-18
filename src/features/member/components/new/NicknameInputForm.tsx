'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, ContentWrapper, LimitedLengthInput } from '@/components';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../../types';

export const NicknameInputForm = () => {
  const title = '닉네임을 입력해 주세요.';
  const description = 'beta에서는 닉네임을 수정할 수 없어요.';
  const maxInputLength = 10;
  const placeholder = '닉네임';

  const [inputValue, setInputValue] = useState<string>('');
  // const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const isMounted = useIsMounted();
  const { register, setValue } = useFormContext<NewMemberFormValues>();

  const isEmpty = () => inputValue.length === 0;
  const handleClickNextButton = () => {
    setValue('nickname', inputValue);
  };
  /**
   * TODO: 디자인에 아이콘 추가
   */

  return (
    <ContentWrapper title={title} description={description} sectionStyles="h-full flex flex-col">
      <div className="mt-xs flex flex-col grow w-full">
        <div className="h-full flex flex-col justify-between">
          <LimitedLengthInput
            {...register('nickname')}
            maxLength={maxInputLength}
            placeholder={placeholder}
            onChange={setInputValue}
          />
          <Link href="/member/new/birthday">
            <Button type="button" disabled={!isMounted || isEmpty()} onClick={handleClickNextButton}>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </ContentWrapper>
  );
};
