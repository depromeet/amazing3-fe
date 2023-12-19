'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';

export const SubgoalForm = () => {
  const comment = '';
  const router = useRouter();
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {
    router.push('/goal/new/more');
  };

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={<Typography className="text-gray-50 font-insungit text-center">{comment}</Typography>}
      body={<input {...register('subgoals')} type="text" placeholder="목표를 이루기 위한 세부 항목" />}
      footer={
        <Link href="/goal/new/more">
          <Button onClick={handleClickNextButton} intent="primary" size="xl">
            다음
          </Button>
        </Link>
      }
    />
  );
};
