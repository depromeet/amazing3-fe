import { Emoji } from '@/components';
import type { EmojiProps } from '@/components/atoms/emoji';

interface CountEmojiProps extends EmojiProps {
  reactCount: number;
  isMyReaction?: boolean;
  onlyView?: boolean;
  onClick?: VoidFunction;
}

export const CountEmoji = ({
  reactCount,
  isMyReaction = false,
  onlyView = false,
  onClick,
  ...props
}: CountEmojiProps) => {
  return (
    <button
      className={`p-[3px] rounded-[8px] ${!isMyReaction ? 'bg-white' : 'bg-blue-10'} ${
        !onlyView && 'transition-shadow duration-500 hover:shadow-thumb'
      }`}
      disabled={onlyView}
      onClick={onClick}
    >
      <Emoji {...props} />
      <p className={`text-[12px] ${!isMyReaction ? 'text-gray-70' : 'text-blue-50'} leading-[155%] tracking-[-0.6px]`}>
        {reactCount}
      </p>
    </button>
  );
};
