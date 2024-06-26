import { type ButtonHTMLAttributes } from 'react';

import { Emoji, Typography } from '@/components';
import { useCreateEmojiForFeed } from '@/hooks/reactQuery/emoji/useCreateEmojiForFeed';
import { useDeleteReactedEmojiForFeed } from '@/hooks/reactQuery/emoji/useDeleteReactedEmojiForFeed';
import { formatOver999 } from '@/utils/number';

interface ReactedEmojiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  goalId: number;
  emojiId: number;
  url: string;
  name: string;
  count: number;
  isMyReaction: boolean;
  onCloseEmojis: VoidFunction;
}

export const ReactedEmojiButton = ({
  goalId,
  emojiId,
  url,
  name,
  count,
  isMyReaction,
  onCloseEmojis,
  ...props
}: ReactedEmojiButtonProps) => {
  const { mutate: createReactEmoji } = useCreateEmojiForFeed();
  const { mutate: deleteReactedEmoji } = useDeleteReactedEmojiForFeed();

  const handleClickButton = () => {
    isMyReaction ? deleteReactedEmoji({ goalId, emojiId }) : createReactEmoji({ goalId, emojiId });

    onCloseEmojis();
  };

  if (count <= 0) return null;

  return (
    <button
      className={`py-6xs px-5xs flex gap-6xs items-center rounded-full border box-border ${
        isMyReaction ? 'bg-blue-10 border-blue-50' : 'bg-gray-10 border-white'
      }`}
      onClick={handleClickButton}
      {...props}
    >
      <Emoji url={url} size={24} name={name} />
      <Typography type="caption1" className={`${isMyReaction ? 'text-blue-50' : 'text-gray-40'}`}>
        {formatOver999(count)}
      </Typography>
    </button>
  );
};
