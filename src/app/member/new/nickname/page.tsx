'use client';

import React from 'react';

import { Button, NicknameInput, Typography } from '@/components';

/**
 * TODO: 추후 디자인 적용 필요
 */
const NicknameInputPage = () => {
  const maxInputLength = 10;

  return (
    <div className="pt-10 flex flex-col gap-4">
      <Typography type="heading2" textColor="black">
        OO에서 사용할
        <br />
        닉네임을 알려주세요
      </Typography>
      <Typography type="subLabel2" textColor="gray4">
        beta에서는 닉네임을 수정할 수 없어요. <br /> 신중하게 입력해 주세요.
      </Typography>
      <NicknameInput maxLength={maxInputLength} />
      <Button type="button">다음</Button>
    </div>
  );
};

export default NicknameInputPage;
