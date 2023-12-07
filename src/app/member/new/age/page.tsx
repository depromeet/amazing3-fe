'use client';

import React from 'react';

import { Button, Input, Typography } from '@/components';

/**
 * TODO: 추후 디자인 적용 필요
 */
const AgeInputPage = () => {
  return (
    <div className="pt-10 flex flex-col gap-4">
      <Typography type="heading2" textColor="black">
        반가워요, OO님! <br /> 생년월일을 알려주세요.
      </Typography>
      <Typography type="subLabel2" textColor="gray4">
        beta에서는 나이를 수정할 수 없어요. <br /> 신중하게 입력해 주세요.
      </Typography>
      <Input type="date" />
      <Button type="button">완료</Button>
    </div>
  );
};

export default AgeInputPage;
