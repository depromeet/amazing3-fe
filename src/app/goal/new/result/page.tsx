'use client';

import { useFormContext } from 'react-hook-form';

import type { GoalFormValues } from '@/features/goal/types';

const ResultPage = () => {
  const { getValues } = useFormContext<GoalFormValues>();
  const { title, date, tags, emoji, subgoals } = getValues();

  return (
    <>
      <p>{title}</p>
      <p>{date}</p>
      <p>{tags}</p>
      <p>{emoji}</p>
      <p>{subgoals}</p>
      <button>저장하기</button>
    </>
  );
};

export default ResultPage;
