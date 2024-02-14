import { useRef, useState } from 'react';
import { Portal } from '@radix-ui/react-portal';
import { m } from 'framer-motion';

import '@/app/globals.css';
import AddEmojiIcon from '@/assets/icons/add-emoji-icon.svg';
import { Emoji, emojiNameSet } from '@/components/atoms/emoji/Emoji';
import { useOutsideClick } from '@/hooks';

import { FeatureButton } from '../FeatureButton';

export const AddEmojiButton = () => {
  const emojiPaletteRef = useRef(null);
  const [isOpenEmojiPalette, setOpenEmojiPalette] = useState(false);

  const handleOpenEmojiPalette = (isOpen: boolean) => () => setOpenEmojiPalette(isOpen);
  useOutsideClick(emojiPaletteRef, handleOpenEmojiPalette(false));

  const handleEmojiClick = () => {
    // TODO: api 연동하기
    setOpenEmojiPalette(false);
  };

  return (
    <>
      <FeatureButton onClick={handleOpenEmojiPalette(true)}>
        <AddEmojiIcon />
      </FeatureButton>
      {isOpenEmojiPalette && (
        <Portal>
          <div className="layout fixed top-0 bottom-0 left-0 right-0 bg-darkGradient1">
            <div className="w-full flex justify-center">
              <m.div
                ref={emojiPaletteRef}
                className="absolute bottom-[50px] grid grid-cols-3 gap-4xs"
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {emojiNameSet.map((name) => (
                  <div key={name} className="hover:scale-105 transition duration-300">
                    <Emoji name={name} size="medium" onClick={handleEmojiClick} />
                  </div>
                ))}
              </m.div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

const initial = {
  opacity: 0,
  scale: 0.3,
  y: -100,
};

const animate = {
  opacity: 1,
  scale: 1,
  y: 0,
};

const transition = {
  duration: 0.5,
  y: {
    type: 'spring',
    damping: 8,
    stiffness: 100,
  },
};
