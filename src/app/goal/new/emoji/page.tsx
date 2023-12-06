'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { TargetFormValues } from '@/features/target/types';

const CreateEmojiPage = () => {
  const router = useRouter();
  const { register } = useFormContext<TargetFormValues>();

  const handleClickNextButton = () => {
    router.push('/goal/new/subgoal');
  };

  return (
    <>
      <input {...register('emoji')} type="text" placeholder="이모지" />
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};

export default CreateEmojiPage;
