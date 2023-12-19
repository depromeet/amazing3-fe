import React from 'react';
import { useAtomValue } from 'jotai';

import { Span, Typography } from '@/components/atoms';
import { goalAtom } from '@/features/goal/components/detail/atom';

// TODO: API 연동 후 jotai에 값 추가하고 아래 하드코딩된 default 값들 제거
export const ContentBody = () => {
  const { title, date, tag, more } = useAtomValue(goalAtom);

  return (
    <div className="flex flex-col gap-4xs">
      <Typography type="heading1">{title || '적금 1만원 모으기'}</Typography>
      <Typography type="title3" className="text-gray-40">
        <Span type="blue55">{date || '2024.08'}</Span>까지 이률 거에요 | <Span type="blue55">{tag || '자산'}</Span>
      </Typography>
      <Typography type="body3" className="text-gray-40">
        {more || '천만원을 시작으로 시드머니 굴리기 가보자고'}
      </Typography>
    </div>
  );
};
