'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Tag, Typography } from '@/components';
import type { GoalFormValues } from '@/features/goal/types';
import { useGetTags } from '@/hooks/reactQuery/tag';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';

import FormHeader from './FormHeader';
import FormLayout from './FormLayout';

export const TagForm = () => {
  const { register, getValues, setValue } = useFormContext<GoalFormValues>();
  const [selectedTag, setSelectedTag] = useState<number | null>();
  const { data: tagsData } = useGetTags();

  useEffect(() => {
    setSelectedTag(getValues('tag'));
  }, [getValues]);

  const handleClickTag = (id: number) => {
    setSelectedTag(id);
    setValue('tag', id);
  };

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.tag} />}
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
