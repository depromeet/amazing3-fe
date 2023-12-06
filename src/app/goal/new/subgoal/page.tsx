'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { TargetFormValues } from '@/features/target/types/form';

const CreateSubtaskPage = () => {
  const router = useRouter();
  const { register } = useFormContext<TargetFormValues>();

  const handleClickNextButton = () => {
    router.push('/create/more');
  };

  return (
    <>
      <input {...register('subtasks')} type="text" placeholder="목표를 이루기 위한 세부 항목" />
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};

export default CreateSubtaskPage;
