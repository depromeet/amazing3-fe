'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const CreateDatePage = () => {
  const router = useRouter();
  const { register } = useFormContext();

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

export default CreateDatePage;
