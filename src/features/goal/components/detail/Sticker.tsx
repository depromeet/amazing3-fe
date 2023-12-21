import Image from 'next/image';
import { useAtomValue } from 'jotai';

import { goalStickerAtom } from '@/features/goal/components/detail/atom';

export const Sticker = () => {
  const sticker = useAtomValue(goalStickerAtom);

  return sticker && <Image className="absolute" alt="Target" src={sticker} width={200} height={200} />;
};
