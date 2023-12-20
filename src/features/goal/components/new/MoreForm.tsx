'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { GoalFormValues } from '@/features/goal/types';

export const MoreForm = () => {
  const router = useRouter();
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {
    // TODO: submit goals and save the response to the store.
    router.push('/goal/detail/saved');
  };

  return (
    <>
      <textarea {...register('content')} placeholder="더 작성하고 싶은 내용" />
      <button onClick={handleClickNextButton}>완료</button>
    </>
  );
};
