import { useState } from 'react';

import { ToolTip } from '@/components';

import { Emojis } from './Emojis';
import { ReactedEmojis } from './ReactedEmojis';
import { ReactionButton } from './ReactionButton';
import { ReactUserCount } from './ReactUserCount';

// TODO: api 연결 후 제거
const data = {
  totalReactedEmojisCount: 2,
  reactedEmojis: [
    {
      url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8f87efc3-ec65-4650-b763-74501bc2e1c0',
      name: '좋아요',
      count: 10,
      reacted: true,
    },
  ],
};

export const Reaction = () => {
  const [isOpenEmojis, setOpenEmojis] = useState(false);

  const handleToggleEmojis = () => setOpenEmojis((prev) => !prev);
  const isZeroReactions = data.totalReactedEmojisCount === 0;

  return (
    <div className="flex flex-col gap-4xs">
      {!isZeroReactions && <ReactUserCount count={data.totalReactedEmojisCount} username="doeunnkimm" />}
      <div className={`relative flex gap-4xs items-center ${isZeroReactions && 'mt-sm'}`}>
        <ReactedEmojis reactedEmojis={data.reactedEmojis} onCloseEmojis={() => setOpenEmojis(false)} />
        {isOpenEmojis && <Emojis onToggle={handleToggleEmojis} />}

        <div className={`relative w-full ${isZeroReactions && 'flex justify-center mt-3xs'}`}>
          {isZeroReactions && (
            <div className="absolute top-[-55px]">
              <ToolTip title="목표에 반응을 남길 수 있어요" />
            </div>
          )}
          <ReactionButton isOpen={isOpenEmojis} onClick={handleToggleEmojis} />
        </div>
      </div>
    </div>
  );
};
