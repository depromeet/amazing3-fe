import { Emoji, type EmojiProps } from '@/components/atoms/emoji';

interface CountEmojiProps extends EmojiProps {
  count: number;
  reacted?: boolean;
  onlyView?: boolean;
  onClick?: VoidFunction;
}

export const CountEmoji = ({ count, reacted = false, onlyView = false, onClick, ...props }: CountEmojiProps) => {
  return (
    <button
      className={`p-[3px] rounded-[8px] ${!reacted ? 'bg-white' : 'bg-blue-10'} ${
        !onlyView && 'transition-shadow duration-500 hover:shadow-thumb'
      }`}
      disabled={onlyView}
      onClick={onClick}
    >
      <Emoji {...props} />
      <p className={`text-[12px] ${!reacted ? 'text-gray-70' : 'text-blue-50'} leading-[155%] tracking-[-0.6px]`}>
        {count}
      </p>
    </button>
  );
};
