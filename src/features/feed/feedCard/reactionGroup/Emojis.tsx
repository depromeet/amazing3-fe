import { EmojiGroup } from '@/components';
import { useGetAllEmoji } from '@/hooks/reactQuery/emoji';

interface EmojisProps {
  onToggle: VoidFunction;
}

export const Emojis = ({ onToggle }: EmojisProps) => {
  const { data: emojisData } = useGetAllEmoji();

  const handleReactEmoji = () => {
    // TODO: 리액션 추가하는 api
    onToggle();
  };

  return (
    <EmojiGroup.Container className="absolute left-0 right-0 transform -translate-y-1/2 top-[16px] flex justify-center z-[2]">
      {emojisData?.map((emoji) => (
        <EmojiGroup.Emoji key={emoji.name} {...emoji} size={56} onClick={handleReactEmoji} />
      ))}
    </EmojiGroup.Container>
  );
};
