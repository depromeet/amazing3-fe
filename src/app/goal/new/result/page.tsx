'use client';

import { useFormContext } from 'react-hook-form';

import type { TargetFormValues } from '@/features/target/types/form';

const ResultPage = () => {
  const { getValues } = useFormContext<TargetFormValues>();
  const { title, date, tags, emoji, subtasks } = getValues();

  return (
    <>
      <p>{title}</p>
      <p>{date}</p>
      <p>{tags}</p>
      <p>{emoji}</p>
      <p>{subtasks}</p>
      <button>저장하기</button>
    </>
  );
};

export default ResultPage;
