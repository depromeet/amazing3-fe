import { useAtomValue } from 'jotai';

import { EmojiGroup } from '@/components';
import { goalIdAtom } from '@/features/goal/atoms';
import { useCreateEmoji, useGetAllEmoji } from '@/hooks/reactQuery/emoji';

interface EmojisProps {
  onToggle: VoidFunction;
}

export const Emojis = ({ onToggle }: EmojisProps) => {
  const goalId = useAtomValue(goalIdAtom);
  const { data: emojis } = useGetAllEmoji();
  const { mutate } = useCreateEmoji();

  const handleReactEmoji = (emojiId: number) => () => {
    mutate({ goalId, emojiId });
    onToggle();
  };

  return (
    <EmojiGroup.Container className="absolute left-0 right-0 transform -translate-y-1/2 top-[-110px] flex justify-center z-[2]">
      {emojis?.map((emoji) => (
        <EmojiGroup.Emoji key={emoji.name} {...emoji} size={56} onClick={handleReactEmoji(emoji.id)} />
      ))}
    </EmojiGroup.Container>
  );
};
