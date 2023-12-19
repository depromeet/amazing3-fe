'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';

export const MoreForm = () => {
  const comment = '마지막으로 더 작성하고 싶은 것이\n있다면 적어줘';
  const { register } = useFormContext<GoalFormValues>();

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={<Typography className="text-gray-50 font-insungit text-center">{comment}</Typography>}
      body={<textarea {...register('content')} placeholder="더 작성하고 싶은 내용" />}
      footer={
        <Link href="/goal/new/result">
          <Button>다음</Button>
        </Link>
      }
    />
  );
};
