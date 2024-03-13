import { useState } from 'react';
import { useAtomValue } from 'jotai';

import { ToolTip } from '@/components';
import { ReactionAddButton } from '@/features/emoji/ReactionAddButton';
import { goalIdAtom } from '@/features/goal/atom';
import { ReactedEmojis } from '@/features/goal/components/detail/emoji/ReactedEmojis';
import { ReactionUserTotalCount } from '@/features/goal/components/detail/emoji/ReactionUserTotalCount';
import { useGetEmojiByGoal } from '@/hooks/reactQuery/emoji';

import { Emojis } from './Emojis';

export const Reaction = () => {
  const [isOpenEmojis, setOpenEmojis] = useState(false);
  const goalId = useAtomValue(goalIdAtom);
  const { data } = useGetEmojiByGoal({ goalId });

  const handleToggleEmojis = () => setOpenEmojis((prev) => !prev);

  const hasNoReactions = data?.totalReactedEmojisCount === 0;

  return (
    <div className="flex flex-col gap-4xs">
      {data && (
        <>
          {!hasNoReactions && (
            <ReactionUserTotalCount count={data.totalReactedEmojisCount} username={data.latestReactUserNickname} />
          )}
          <div className={`relative flex gap-4xs items-center ${hasNoReactions && 'mt-sm'}`}>
            <ReactedEmojis reactedEmojis={data.reactedEmojis} onCloseEmojis={() => setOpenEmojis(false)} />
            {isOpenEmojis && <Emojis onToggle={handleToggleEmojis} />}

            <div className={`relative w-full ${hasNoReactions && 'flex justify-center mt-3xs'}`}>
              {hasNoReactions && (
                <div className="absolute top-[-55px]">
                  <ToolTip title="목표에 반응을 남길 수 있어요" />
                </div>
              )}
              <ReactionAddButton isOpen={isOpenEmojis} onClick={handleToggleEmojis} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
