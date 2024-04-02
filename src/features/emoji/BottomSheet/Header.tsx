import { List as TabsList } from '@radix-ui/react-tabs';

import { Emoji, Typography } from '@/components';
import { formatOver999 } from '@/utils/number';

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
        총 {formatOver999(totalReactedEmojisCount)}개
      </Typography>
      <TabsList className="flex items-center gap-4xs py-5xs overflow-scroll px-xs scrollbar-width-none">
        {reactedEmojis.map((emoji) => (
          <Tab key={emoji.id} value={emoji.name}>
            <div className="flex gap-6xs items-center">
              <Emoji name={emoji.name} url={emoji.url} size={24} />
              <Typography type="caption1">{formatOver999(emoji.reactCount)}</Typography>
            </div>
          </Tab>
        ))}
      </TabsList>
    </div>
  );
};
