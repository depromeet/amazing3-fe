'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button, Input, Typography } from '@/components/atoms';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';
import GoalGuideBottomSheet from './GoalGuideBottomSheet';

export const GoalForm = () => {
  const comment = '꼭 이루고 싶은\n목표 한 가지를 말해줄래?';
  const { register, watch, setValue } = useFormContext<GoalFormValues>();
  const overlay = useOverlay();

  const handleClickNextButton = () => {};

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={<Typography className="text-gray-50 font-insungit text-center">{comment}</Typography>}
      body={
        <>
          <Input {...register('title')} type="text" placeholder="한줄 목표" />
          <div className="flex flex-col items-center gap-5xs">
            <Typography type="caption1" className="text-gray-40">
              목표 세우기, 너무 막연하다면?
            </Typography>
            <Button
              onClick={() => {
                overlay.open(({ isOpen, close }) => {
                  return <GoalGuideBottomSheet open={isOpen} onClose={close} setValue={setValue} />;
                });
              }}
            >
              가이드 보고 목표 세우기
            </Button>
          </div>
        </>
      }
      footer={
        <Link href="/goal/new/date">
          <Button onClick={handleClickNextButton} disabled={!watch('title')}>
            다음
          </Button>
        </Link>
      }
    />
  );
};
