import { m } from 'framer-motion';

import { CountEmoji } from '@/components';

interface ReactedEmojis {
  onCloseEmojis: VoidFunction;
  reactedEmojis: {
    url: string;
    name: string;
    count: number;
    reacted: boolean;
  }[];
}

export const ReactedEmojis = ({ onCloseEmojis, reactedEmojis }: ReactedEmojis) => {
  const handleClick = () => {
    // TODO: 리액션 추가 api 작업
    onCloseEmojis();
  };

  return (
    <div className="flex gap-5xs">
      {reactedEmojis.map((emoji) => (
        <m.div key={emoji.url} whileTap={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <CountEmoji {...emoji} size={36} onClick={handleClick} />
        </m.div>
      ))}
    </div>
  );
};
