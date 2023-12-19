'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import { DateInput } from './DateInput';
import FormLayout from './FormLayout';

export const DateForm = () => {
  const comment = '목표\n언제까지 이루고 싶어?';
  const maxLength = 7;
  const { register, control } = useFormContext<GoalFormValues>();
  const { field } = useController({ name: 'date', control });
  const { onChange, value } = field;

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={<Typography className="text-gray-50 font-insungit text-center">{comment}</Typography>}
      body={
        <div {...register('date')} className="pt-sm">
          <DateInput maxLength={maxLength} onChange={onChange} />
        </div>
      }
      footer={
        <Link href="/goal/new/tag">
          <Button disabled={value ? value.length !== maxLength : true}>다음</Button>
        </Link>
      }
    />
  );
};
