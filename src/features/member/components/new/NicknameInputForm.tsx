'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Button, ContentWrapper, LimitedLengthInput } from '@/components';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../../types';

export const NicknameInputForm = () => {
  const title = '닉네임을 입력해 주세요.';
  const description = 'beta에서는 닉네임을 수정할 수 없어요.';
  const maxInputLength = 10;
  const placeholder = '닉네임';

  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const router = useRouter();
  const isMounted = useIsMounted();
  const { register } = useFormContext<NewMemberFormValues>();

  const handleClickNextButton = () => {
    router.push('/member/new/birthday');
  };

  /**
   * TODO: 디자인에 아이콘 추가
   */

  return (
    <ContentWrapper title={title} description={description}>
      <div className="mt-xs h-3/4 w-full">
        <div className="h-full flex flex-col justify-between">
          <LimitedLengthInput
            maxLength={maxInputLength}
            placeholder={placeholder}
            setIsEmpty={setIsEmpty}
            formRegister={register}
          />
          <Button type="button" disabled={isMounted ? isEmpty : true} onClick={handleClickNextButton}>
            다음
          </Button>
        </div>
      </div>
    </ContentWrapper>
  );
};
