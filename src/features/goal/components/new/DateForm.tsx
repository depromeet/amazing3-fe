'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Typography } from '@/components';
import { MAX_DATE_LENGTH_UNTIL_MONTH } from '@/constants';
import type { GoalFormValues } from '@/features/goal/types';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';

import { DateInput } from './DateInput';
import FormHeader from './FormHeader';
import FormLayout from './FormLayout';

export const DateForm = () => {
  const { register, getValues, control } = useFormContext<GoalFormValues>();
  const { field } = useController({ name: 'date', control });
  const { onChange, value } = field;
  const { title } = getValues();

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.date} />}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          {title} <br /> <Span type="blue50">언제</Span>까지 이루고 싶어?
        </Typography>
      }
      body={
        <div {...register('date')} className="pt-sm">
          <DateInput maxLength={MAX_DATE_LENGTH_UNTIL_MONTH} onChange={onChange} />
        </div>
      }
      footer={
        <Link href="/goal/new/tag">
          <Button disabled={value ? value.length !== MAX_DATE_LENGTH_UNTIL_MONTH : true}>다음</Button>
        </Link>
      }
    />
  );
};
