'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { GoalFormValues } from '@/features/goal/types';

export const DateForm = () => {
  const router = useRouter();
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {
    router.push('/goal/new/tag');
  };

  return (
    <>
      <input {...register('date')} type="number" placeholder="나이" />
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};
