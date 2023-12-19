'use client';

import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useOverlay } from '@toss/use-overlay';

import { Button, Input } from '@/components/atoms';
import type { GoalFormValues } from '@/features/goal/types';

import GoalGuideBottomSheet from './GoalGuideBottomSheet';

export const GoalForm = () => {
  const router = useRouter();
  const { register, watch, setValue } = useFormContext<GoalFormValues>();
  const overlay = useOverlay();

  const handleClickNextButton = () => {
    router.push('/goal/new/date');
  };

  return (
    <div className="block">
      <Input {...register('title')} type="text" placeholder="한줄 목표" />
      <Button
        onClick={() => {
          overlay.open(({ isOpen, close }) => {
            return <GoalGuideBottomSheet open={isOpen} onClose={close} setValue={setValue} />;
          });
        }}
      >
        목표 추천
      </Button>
      <Button onClick={handleClickNextButton} disabled={!watch('title')}>
        다음
      </Button>
    </div>
  );
};
