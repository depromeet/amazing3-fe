'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';
import { TextInput } from './TextInput';

export const MoreForm = () => {
  const comment = '마지막으로 더 작성하고 싶은 것이\n있다면 적어줘';
  const { register, control } = useFormContext<GoalFormValues>();
  const { field } = useController({ name: 'content', control });
  const { onChange } = field;

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          {comment}
        </Typography>
      }
      body={
        <div {...register('content')}>
          <TextInput
            type="multi"
            labelName="메모"
            maxLength={300}
            placeholder="ex) 꼬박꼬박 저금하자 아자자!"
            onChange={onChange}
          />
        </div>
      }
      footer={
        <Link href="/goal/new/result">
          <Button>다음</Button>
        </Link>
      }
    />
  );
};
