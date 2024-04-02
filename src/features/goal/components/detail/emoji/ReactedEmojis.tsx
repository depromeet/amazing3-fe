import { m } from 'framer-motion';
import { useAtomValue } from 'jotai';

import { CountEmoji } from '@/components';
import { goalIdAtom } from '@/features/goal/atoms';
import { useCreateEmoji, useDeleteReactedEmoji } from '@/hooks/reactQuery/emoji';

interface ReactedEmojis {
  onCloseEmojis: VoidFunction;
  reactedEmojis: {
    id: number;
    url: string;
    name: string;
    reactCount: number;
    isMyReaction: boolean;
  }[];
}

export const ReactedEmojis = ({ onCloseEmojis, reactedEmojis }: ReactedEmojis) => {
  const goalId = useAtomValue(goalIdAtom);

  const { mutate: deleteReactedEmoji } = useDeleteReactedEmoji();
  const { mutate: createReactEmoji } = useCreateEmoji();

  const handleClick = (emojiId: number, isMyReaction: boolean) => () => {
    if (isMyReaction) deleteReactedEmoji({ emojiId, goalId });
    else createReactEmoji({ emojiId, goalId });

    onCloseEmojis();
  };

  return (
    <div className="flex gap-5xs">
      {reactedEmojis.map((emoji) => (
        <m.div key={emoji.url} whileTap={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="w-[40px]">
          <CountEmoji {...emoji} size={36} onClick={handleClick(emoji.id, emoji.isMyReaction)} />
        </m.div>
      ))}
    </div>
  );
};
