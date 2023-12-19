'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';

export const EmojiForm = () => {
  const comment = '목표와 관련된 스티커도\n선택해줘.';
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {};

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          {comment}
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
