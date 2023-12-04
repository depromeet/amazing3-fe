'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import type { TargetFormValues } from '@/features/target/types/form';

const MOCK_TAGS = [
  { id: 1, value: '학업' },
  { id: 2, value: '취업' },
  { id: 3, value: '직장' },
  { id: 4, value: '다이어트' },
];

const CreateTagPage = () => {
  const router = useRouter();
  const { register } = useFormContext<TargetFormValues>();

  const handleClickNextButton = () => {
    router.push('/create/emoji');
  };

  return (
    <>
      {MOCK_TAGS.map(({ id, value }) => (
        <label key={id}>
          <input {...register('tags')} type="checkbox" value={value} />
          {value}
        </label>
      ))}
      <button onClick={handleClickNextButton}>다음</button>
    </>
  );
};

export default CreateTagPage;