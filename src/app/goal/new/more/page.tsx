'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { TargetFormValues } from '@/features/goal/types';

const CreateMorePage = () => {
  const router = useRouter();
  const { register } = useFormContext<TargetFormValues>();

  const handleClickNextButton = () => {
    router.push('/goal/new/result');
  };

  return (
    <>
      <textarea {...register('content')} placeholder="더 작성하고 싶은 내용" />
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};

export default CreateMorePage;
