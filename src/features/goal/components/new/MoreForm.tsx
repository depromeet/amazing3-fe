'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Typography } from '@/components';
import { MAX_TEXTAREA_LENGTH } from '@/constants';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';
import { TextInput } from './TextInput';

export const MoreForm = () => {
  const { register, control } = useFormContext<GoalFormValues>();
  const { field } = useController({ name: 'content', control });
  const { onChange } = field;

  // TODO: handleSubmit 기능 추가 필요

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          마지막으로 더 작성하고 싶은 것이 <br />
          있다면 적어줘
        </Typography>
      }
      body={
        <div {...register('content')} className="pt-sm">
          <TextInput
            type="multi"
            labelName="메모"
            maxLength={MAX_TEXTAREA_LENGTH}
            placeholder="ex) 꼬박꼬박 저금하자 아자자!"
            onChange={onChange}
          />
        </div>
      }
      footer={
        <Link href="/goal/new/more">
          <Button>완료</Button>
        </Link>
      }
    />
  );
};
