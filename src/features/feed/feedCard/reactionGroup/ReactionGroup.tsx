import { useState } from 'react';

import { ReactionAddButton } from '@/features/emoji';

import SelectReactionWindow from './SelectReactionWindow';

export const ReactionGroup = () => {
  const [isOpenWindow, setOpenWindow] = useState(false);

  const handleToggleWindow = () => setOpenWindow((prev) => !prev);

  return (
    <div>
      <div className="relative">
        {isOpenWindow && <SelectReactionWindow onToggle={handleToggleWindow} />}
        <ReactionAddButton isOpen={isOpenWindow} onClick={handleToggleWindow} />
      </div>
    </div>
  );
};
