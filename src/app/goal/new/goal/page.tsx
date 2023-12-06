'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { TargetFormValues } from '@/features/target/types/form';

const CreateTargetPage = () => {
  const router = useRouter();
  const { register } = useFormContext<TargetFormValues>();

  const handleClickNextButton = () => {
    router.push('/create/date');
  };

  return (
    <>
      <input {...register('title')} type="text" placeholder="한줄 목표" />
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};

export default CreateTargetPage;
