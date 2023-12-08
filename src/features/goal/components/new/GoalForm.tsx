'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { GoalFormValues } from '@/features/goal/types';

export const GoalForm = () => {
  const router = useRouter();
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {
    router.push('/goal/new/date');
  };

  return (
    <>
      <input {...register('title')} type="text" placeholder="한줄 목표" />
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};
