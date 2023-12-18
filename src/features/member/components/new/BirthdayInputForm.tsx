'use client';

import { type ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, ContentWrapper, Input } from '@/components';

export const BirthdayInputForm = () => {
  const title = '반가워요, 닉네임님!\n생년월일을 입력해 주세요.';
  const description = 'beta에서는 생년월일을 수정할 수 없어요.';
  const router = useRouter();
  const [birthday, setBirthday] = useState<string>('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setBirthday(event.target.value);
  };

  const handleClickCompleteButton = () => {
    router.push('/member/new/birthday');
  };

  /**
   * TODO: 생년월일 검증 로직 추가
   */

  return (
    <ContentWrapper title={title} description={description}>
      <Input type="date" onChange={handleChangeInput} />
      <Button type="button" disabled={birthday.length === 0} onClick={handleClickCompleteButton}>
        완료
      </Button>
    </ContentWrapper>
  );
};
