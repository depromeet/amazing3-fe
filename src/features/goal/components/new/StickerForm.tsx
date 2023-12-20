'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';

import FormHeader from './FormHeader';
import FormLayout from './FormLayout';

export const StickerForm = () => {
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {};

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.sticker} />}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          목표와 관련된 <Span type="blue50">스티커</Span>도
          <br />
          선택해줘.
        </Typography>
      }
      body={<input {...register('sticker')} type="text" placeholder="스티커" />}
      footer={
        <Link href="/goal/new/more">
          <Button onClick={handleClickNextButton}>다음</Button>
        </Link>
      }
    />
  );
};
