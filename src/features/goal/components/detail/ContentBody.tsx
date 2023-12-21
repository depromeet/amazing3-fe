import React from 'react';
import { useAtomValue } from 'jotai';

import { Span, Typography } from '@/components/atoms';
import { goalAtom } from '@/features/goal/components/detail/atom';

export const ContentBody = () => {
  const { title, date, tag, more } = useAtomValue(goalAtom);

  return (
    title && (
      <div className="flex flex-col gap-4xs">
        <Typography type="heading1">{title}</Typography>
        <Typography type="title3" className="text-gray-40">
          <Span type="blue55">{date}</Span>까지 이룰 거에요 | <Span type="blue55">{tag}</Span>
        </Typography>
        <Typography type="body3" className="text-gray-40">
          {more}
        </Typography>
      </div>
    )
  );
};
