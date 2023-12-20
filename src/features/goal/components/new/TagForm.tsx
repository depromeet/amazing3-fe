'use client';

import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Tag, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';
import { useGetTags } from '@/hooks/reactQuery/tag';

import FormLayout from './FormLayout';

export const TagForm = () => {
  const { register, watch, setValue } = useFormContext<GoalFormValues>();
  const selectedTag = watch('tag');
  const { data: tagsData } = useGetTags();

  const handleClickTag = (id: number) => {
    setValue('tag', id);
  };

  return (
    <FormLayout
      header={<Typography className="text-gray-50 font-insungit text-center">header</Typography>}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          목표와 관련된 <Span type="blue50">태그</Span> 한 가지를
          <br />
          선택해줄래?
        </Typography>
      }
      body={
        <div {...register('tag')} className="flex flex-wrap justify-center gap-5xs overflow-auto pt-lg">
          {tagsData?.map(({ id, content }) => (
            <Tag key={id} isFocus={selectedTag == id} onClick={() => handleClickTag(id)}>
              {content}
            </Tag>
          ))}
        </div>
      }
      footer={
        <Link href="/goal/new/sticker">
          <Button disabled={!selectedTag}>다음</Button>
        </Link>
      }
    />
  );
};
