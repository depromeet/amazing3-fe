import type { PropsWithChildren } from 'react';
import type { AnimationProps } from 'framer-motion';
import { m } from 'framer-motion';

import { Emoji, Typography } from '@/components';
import type { EmojiProps } from '@/components/atoms/emoji';

interface EmojisContainerProps {
  animate?: AnimationProps;
  className?: string;
}

interface EmojisItemProps extends EmojiProps {
  onClick?: VoidFunction;
}

export const EmojisContainer = ({ className, animate, children }: PropsWithChildren<EmojisContainerProps>) => {
  return (
    <m.div className={className} {...animate}>
      <div className="flex gap-6xs px-5xs py-4xs rounded-[20px] bg-white shadow-thumbStrong">{children}</div>
    </m.div>
  );
};

export const EmojisItem = ({ onClick, ...emoji }: EmojisItemProps) => {
  return (
    <button
      className="flex flex-col gap-6xs items-center transition-transform duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      <Emoji {...emoji} size={emoji.size} />
      <Typography type="body3">{emoji.name}</Typography>
    </button>
  );
};