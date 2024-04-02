import { EmojiGroup } from '@/components';
import { useGetAllEmoji } from '@/hooks/reactQuery/emoji';
import { useCreateEmojiForFeed } from '@/hooks/reactQuery/emoji/useCreateEmojiForFeed';

interface EmojisProps {
  goalId: number;
  onToggle: VoidFunction;
}

export const Emojis = ({ goalId, onToggle }: EmojisProps) => {
  const { data: emojisData } = useGetAllEmoji();
  const { mutate } = useCreateEmojiForFeed();

  const handleReactEmoji = (emojiId: number) => () => {
    mutate({ goalId, emojiId });
    onToggle();
  };

  return (
    <EmojiGroup.Container className="absolute w-[330px] left-[-20px] right-0 transform -translate-y-1/2 top-[16px] flex justify-center z-[2]">
      {emojisData?.map((emoji) => (
        <EmojiGroup.Emoji key={emoji.name} {...emoji} size={56} onClick={handleReactEmoji(emoji.id)} />
      ))}
    </EmojiGroup.Container>
  );
};
