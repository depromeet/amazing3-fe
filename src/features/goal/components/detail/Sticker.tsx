import Image from 'next/image';
import { useAtomValue } from 'jotai';

import Target from '@/assets/stickers/target-512x512.png';
import { goalStickerAtom } from '@/features/goal/components/detail/atom';

// TODO: api로 src url 받아오면 target image 삭제
export const Sticker = () => {
  const sticker = useAtomValue(goalStickerAtom);

  return <Image className="absolute" alt="Target" src={Target || sticker} width={200} height={200} />;
};
