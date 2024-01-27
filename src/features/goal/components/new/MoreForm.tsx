'use client';

import { useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Button, Typography } from '@/components';
import { Spinner } from '@/components/atoms/spinner';
import { MAX_TEXTAREA_LENGTH } from '@/constants';
import type { GoalFormValues } from '@/features/goal/types';
import { useCreateGoal } from '@/hooks/reactQuery/goal';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';

import FormHeader from './FormHeader';
import FormLayout from './FormLayout';
import { TextInput } from './TextInput';

export const MoreForm = () => {
  const { register, getValues, control } = useFormContext<GoalFormValues>();
  const router = useRouter();
  const { field } = useController({ name: 'content', control });
  const { value, onChange } = field;
  const { mutate, isPending, data } = useCreateGoal();

  useEffect(() => {
    if (data) {
      router.push(`/goal/detail/saved?id=${data.id}`);
    }
  }, [isPending, data, router]);

  const handleSubmit = () => {
    const { title, content, date, tag, sticker } = getValues();
    if (!title || !tag || !sticker) {
      return;
    }
    if (date.length !== 7) {
      return;
    }
    const [yearOfDeadline, monthOfDeadline] = date.split('.');

    mutate({
      title,
      yearOfDeadline,
      monthOfDeadline,
      stickerId: sticker,
      tagId: tag,
      description: content,
    });
  };

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.more} />}
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
            height="25vh"
            value={value}
            onChange={onChange}
          />
        </div>
      }
      footer={
        <Button onClick={handleSubmit} disabled={isPending}>
          {isPending ? <Spinner /> : '완료'}
        </Button>
      }
    />
  );
};
