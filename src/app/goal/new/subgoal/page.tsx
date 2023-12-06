'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { GoalFormValues } from '@/features/goal/types';

const CreateSubtaskPage = () => {
  const router = useRouter();
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {
    router.push('/goal/new/more');
  };

  return (
    <>
      <input {...register('subgoals')} type="text" placeholder="목표를 이루기 위한 세부 항목" />
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};

export default CreateSubtaskPage;
