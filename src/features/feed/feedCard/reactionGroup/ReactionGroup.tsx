import { useState } from 'react';

import { ReactionAddButton } from '@/features/emoji';
import type { EmojisProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import { Emojis } from './Emojis';
import { ReactedEmojiButton } from './ReactedEmojiButton';

interface ReactionGroupProps {
  targetGoalId: number;
  reactedEmojis: Array<EmojisProps>;
}

export const ReactionGroup = ({ targetGoalId, reactedEmojis }: ReactionGroupProps) => {
  const [isOpenEmojis, setOpenEmojis] = useState(false);

  const handleToggleEmojis = () => {
    setOpenEmojis((prev) => !prev);
  };
  const handleClickEmojiButton = (emojiId: number) => {
    // TODO: 이모지 API 연결 (임시 console)
    console.log(targetGoalId, emojiId);
  };

  return (
    <>
      <div className="w-full  flex flex-wrap gap-5xs items-center">
        {reactedEmojis.map(({ id, url, name, reactCount, isMyReaction }) => (
          <ReactedEmojiButton
            key={id}
            url={url}
            name={name}
            count={reactCount}
            isMyReaction={isMyReaction}
            onClick={() => {
              handleClickEmojiButton(id);
            }}
          />
        ))}
        <ReactionAddButton isOpen={isOpenEmojis} onClick={handleToggleEmojis} />
      </div>
      <div className="relative w-full">{isOpenEmojis && <Emojis onToggle={handleToggleEmojis} />}</div>
    </>
  );
};
