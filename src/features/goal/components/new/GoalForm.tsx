'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button, Span, Typography } from '@/components/atoms';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';
import GoalGuideBottomSheet from './GoalGuideBottomSheet';
import { TextInput } from './TextInput';

export const GoalForm = () => {
  const { register, setValue, control } = useFormContext<GoalFormValues>();
  const { field } = useController({ name: 'title', control });
  const { onChange, value } = field;
  const overlay = useOverlay();

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          꼭 이루고 싶은
          <br />
          <Span type="blue50">목표</Span> 한 가지를 말해줄래?
        </Typography>
      }
      body={
        <div {...register('title')}>
          <TextInput
            labelName="한줄목표"
            value={value}
            maxLength={30}
            placeholder="ex) 적금 1000만원 모으기"
            onChange={onChange}
          />
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
        </div>
      }
      footer={
        <Link href="/goal/new/date">
          <Button disabled={value ? value.length === 0 : true}>다음</Button>
        </Link>
      }
    />
  );
};
