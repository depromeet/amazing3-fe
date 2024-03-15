import { useState } from 'react';

import { ReactionAddButton } from '@/features/emoji';
import type { EmojisProps } from '@/hooks/reactQuery/goal/useGetGoalFeeds';

import { Emojis } from './Emojis';
import { ReactedEmojiButton } from './ReactedEmojiButton';

// TODO: API 연결 후 삭제 예정
// const reactedEmojis = [
//   { url: emojisData[0].url, name: emojisData[0].name, count: 3, isMyReaction: true },
//   { url: emojisData[0].url, name: emojisData[0].name, count: 27, isMyReaction: false },
//   { url: emojisData[0].url, name: emojisData[0].name, count: 123, isMyReaction: true },
//   { url: emojisData[0].url, name: emojisData[0].name, count: 12313, isMyReaction: true },
//   { url: emojisData[0].url, name: emojisData[0].name, count: 11, isMyReaction: false },
//   { url: emojisData[0].url, name: emojisData[0].name, count: 999, isMyReaction: false },
// ];

interface ReactionGroupProps {
  targetGoalId: number;
  reactedEmojis: Array<EmojisProps>;
}

export const ReactionGroup = ({ targetGoalId, reactedEmojis }: ReactionGroupProps) => {
  const [isOpenWindow, setOpenWindow] = useState(false);

  const handleToggleWindow = () => {
    setOpenWindow((prev) => !prev);
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
        <ReactionAddButton isOpen={isOpenWindow} onClick={handleToggleWindow} />
      </div>
      <div className="relative w-full">{isOpenWindow && <Emojis onToggle={handleToggleWindow} />}</div>
    </>
  );
};
