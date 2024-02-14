import React from 'react';

import { Span, Typography } from '@/components/atoms';
import { Emoji, emojiNameSet, type EmojiProps } from '@/components/atoms/emoji/Emoji';

interface ContentBodyProps {
  title: string;
  date: string;
  tag: string;
  more: string;
}

// mock
const emojis: Record<EmojiProps['name'], number> = {
  like: 10,
  cheer: 10,
  angry: 10,
  sad: 100,
  awesome: 100,
  surprised: 100,
};

export const ContentBody = ({ title, date, tag, more }: ContentBodyProps) => {
  return (
    title && (
      <div className="flex flex-col gap-4xs">
        <Typography type="heading1">{title}</Typography>
        <Typography type="title3" className="text-gray-40">
          <Span type="blue55">{date}</Span>까지 이룰 거에요 | <Span type="blue55">{tag}</Span>
        </Typography>
        <div className="flex gap-[8px]">
          {emojiNameSet.map((name) => (
            <Emoji key={name} name={name} count={emojis[name]} />
          ))}
        </div>
        <Typography type="body3" className="text-gray-40">
          {more}
        </Typography>
      </div>
    )
  );
};
