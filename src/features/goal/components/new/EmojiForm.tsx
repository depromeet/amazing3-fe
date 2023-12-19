'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';

export const EmojiForm = () => {
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {};

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          목표와 관련된 <Span type="blue50">스티커</Span>도
          <br />
          선택해줘.
        </Typography>
      }
      body={<input {...register('emoji')} type="text" placeholder="이모지" />}
      footer={
        <Link href="/goal/new/more">
          <Button onClick={handleClickNextButton}>다음</Button>
        </Link>
      }
    />
  );
};
