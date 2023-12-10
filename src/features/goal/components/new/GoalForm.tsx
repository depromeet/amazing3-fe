'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Button, Input } from '@/components/atoms';
import type { GoalFormValues } from '@/features/goal/types';

import GoalSuggestionBottomSheet from './GoalSuggestionBottomSheet';

export const GoalForm = () => {
  const router = useRouter();
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {
    router.push('/goal/new/date');
  };

  return (
    <div className="block">
      <Input {...register('title')} type="text" placeholder="한줄 목표" />
      <GoalSuggestionBottomSheet />
      <Button onClick={handleClickNextButton} intent="primary" size="xl">
        다음
      </Button>
    </div>
  );
};
