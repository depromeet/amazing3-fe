import { useState } from 'react';

import { ReactionAddButton } from '@/features/emoji';

import ReactedEmojiButton from './ReactedEmojiButton';
import SelectReactionWindow, { emojis } from './SelectReactionWindow';

// TODO: API 연결 후 삭제 예정
const reactedEmojis = [
  { url: emojis[0].url, name: emojis[0].name, count: 3, isMyReaction: true },
  { url: emojis[0].url, name: emojis[0].name, count: 27, isMyReaction: false },
  { url: emojis[0].url, name: emojis[0].name, count: 123, isMyReaction: true },
  { url: emojis[0].url, name: emojis[0].name, count: 12313, isMyReaction: true },
  { url: emojis[0].url, name: emojis[0].name, count: 11, isMyReaction: false },
  { url: emojis[0].url, name: emojis[0].name, count: 999, isMyReaction: false },
];

export const ReactionGroup = () => {
  const [isOpenWindow, setOpenWindow] = useState(false);

  const handleToggleWindow = () => {
    setOpenWindow((prev) => !prev);
  };

  return (
    <>
      <div className="w-full  flex flex-wrap gap-5xs items-center">
        {reactedEmojis.map(({ url, name, count, isMyReaction }, idx) => (
          <ReactedEmojiButton key={idx} url={url} name={name} count={count} isMyReaction={isMyReaction} />
        ))}
        <ReactionAddButton isOpen={isOpenWindow} onClick={handleToggleWindow} />
      </div>
      <div className="relative w-full">{isOpenWindow && <SelectReactionWindow onToggle={handleToggleWindow} />}</div>
    </>
  );
};
