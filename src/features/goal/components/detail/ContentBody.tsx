import React from 'react';

import { Span, Typography } from '@/components/atoms';

interface ContentBodyProps {
  title: string;
  date: string;
  tag: string;
  more: string;
}

export const ContentBody = ({ title, date, tag, more }: ContentBodyProps) => {
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
