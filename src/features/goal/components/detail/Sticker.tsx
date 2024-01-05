import Image from 'next/image';
import { m } from 'framer-motion';

interface StickerProps {
  stickerUrl: string;
}

export const Sticker = ({ stickerUrl }: StickerProps) => {
  return (
    <m.div className="absolute" initial={initial} animate={animate} transition={transition}>
      <Image alt="Target" src={stickerUrl} width={200} height={200} priority />
    </m.div>
  );
};

const initial = {
  opacity: 0,
  scale: 0.3,
};

const animate = {
  opacity: 1,
  scale: 1,
};

const transition = {
  duration: 0.1,
  scale: { type: 'spring', damping: 8, stiffness: 100, restDelta: 0.001 },
};
