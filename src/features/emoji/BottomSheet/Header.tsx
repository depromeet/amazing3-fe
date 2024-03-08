'use client';

import { List } from '@radix-ui/react-tabs';

import { Emoji, Typography } from '@/components';
import { addSuffixIfExceedsLimit } from '@/utils/suffix';

import { Tab } from './Tab';

interface HeaderProps {
  totalReactedEmojisCount: number;
  reactedEmojis: {
    id: number;
    url: string;
    name: string;
    reactCount: number;
  }[];
}

export const Header = ({ totalReactedEmojisCount, reactedEmojis }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-[11px]">
      <Typography type="body3" className="px-xs pt-5xs">
        총 {addSuffixIfExceedsLimit(totalReactedEmojisCount, 999)}개
      </Typography>
      <List className="flex items-center gap-4xs py-5xs overflow-scroll px-xs scrollbar-width-none">
        {reactedEmojis.map((emoji) => (
          <Tab key={emoji.id} value={emoji.name}>
            <div className="flex gap-6xs items-center">
              <Emoji name={emoji.name} url={emoji.url} size={24} />
              <Typography type="caption1">{addSuffixIfExceedsLimit(emoji.reactCount, 999)}</Typography>
            </div>
          </Tab>
        ))}
      </List>
    </div>
  );
};
