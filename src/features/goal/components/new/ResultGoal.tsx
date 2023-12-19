'use client';

import { useFormContext } from 'react-hook-form';

import type { GoalFormValues } from '@/features/goal/types';

export const ResultGoal = () => {
  const { getValues } = useFormContext<GoalFormValues>();
  const { title, date, tags, sticker, content } = getValues();

  return (
    <>
      <p>{title}</p>
      <p>{date}</p>
      <p>{tags}</p>
      <p>{sticker}</p>
      <p>{content}</p>
      <button>저장하기</button>
    </>
  );
};
