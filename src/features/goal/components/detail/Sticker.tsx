import Image from 'next/image';

import Target from '@/assets/stickers/target-512x512.png';

export const Sticker = () => {
  return <Image className="absolute" alt="Target" src={Target} width={200} height={200} />;
};
