'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';

import FormLayout from './FormLayout';

const MOCK_TAGS = [
  { id: 1, value: '학업' },
  { id: 2, value: '취업' },
  { id: 3, value: '직장' },
  { id: 4, value: '다이어트' },
];

export const TagForm = () => {
  const comment = '목표와 관련된 태그 한 가지를\n선택해줄래?';
  const { register } = useFormContext<GoalFormValues>();

  const handleClickNextButton = () => {};

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          {comment}
        </Typography>
      }
      body={
        <>
          {MOCK_TAGS.map(({ id, value }) => (
            <label key={id}>
              <input {...register('tags')} type="checkbox" value={value} />
              {value}
            </label>
          ))}
        </>
      }
      footer={
        <Link href="/goal/new/emoji">
          <Button onClick={handleClickNextButton}>다음</Button>
        </Link>
      }
    />
  );
};
