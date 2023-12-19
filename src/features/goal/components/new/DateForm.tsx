'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';

export const DateForm = () => {
  const comment = '목표\n언제까지 이루고 싶어?';
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {};

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={<Typography className="text-gray-50 font-insungit text-center">{comment}</Typography>}
      body={<input {...register('date')} type="number" placeholder="나이" />}
      footer={
        <Link href="/goal/new/tag">
          <Button onClick={handleClickNextButton} intent="primary" size="xl">
            다음
          </Button>
        </Link>
      }
    />
  );
};
