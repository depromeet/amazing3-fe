'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, ContentWrapper, LimitedLengthInput } from '@/components';
import { useIsMounted } from '@/hooks/useIsMounted';

export const NicknameInputForm = () => {
  const title = '닉네임을 입력해 주세요.';
  const description = 'beta에서는 닉네임을 수정할 수 없어요.';
  const maxInputLength = 10;
  const placeholder = '닉네임';

  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const router = useRouter();
  const isMounted = useIsMounted();

  const handleClickNextButton = () => {
    router.push('/member/new/birthday');
  };

  return (
    <ContentWrapper title={title} description={description}>
      <LimitedLengthInput maxLength={maxInputLength} placeholder={placeholder} setIsEmpty={setIsEmpty} />
      <Button type="button" disabled={isMounted ? isEmpty : true} onClick={handleClickNextButton}>
        다음
      </Button>
    </ContentWrapper>
  );
};
