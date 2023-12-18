'use client';

import { useState } from 'react';

import { Button, ContentWrapper, LimitedLengthInput } from '@/components';

export const NicknameInputForm = () => {
  const title = '닉네임을 입력해 주세요.';
  const description = 'beta에서는 닉네임을 수정할 수 없어요.';
  const maxInputLength = 10;
  const placeholder = '닉네임';
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <ContentWrapper title={title} description={description}>
      <LimitedLengthInput maxLength={maxInputLength} placeholder={placeholder} setIsEmpty={setIsEmpty} />
      <Button type="button" disabled={isEmpty}>
        다음
      </Button>
    </ContentWrapper>
  );
};
