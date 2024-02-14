import type { EmojiTitleProps } from '../../atoms/emoji/Emoji';
import { EMOJI, Emoji, type EmojiProps } from '../../atoms/emoji/Emoji';

export type EmojiSetProps = Record<EmojiProps['name'], number>;

export const EmojiSet = (props: EmojiSetProps) => {
  return (
    <div className="w-full flex gap-5xs items-start">
      {Object.entries(EMOJI).map(([name]) => {
        const emojiName = name as EmojiTitleProps;
        return <Emoji key={name} name={emojiName} count={props[emojiName]} />;
      })}
    </div>
  );
};
