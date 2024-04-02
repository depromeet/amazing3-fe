import Image from 'next/image';

import BandiMooriImage from '@/assets/images/bandi-moori.png';
import { Typography } from '@/components';

export const EmptyComments = () => {
  return (
    <div className="flex-1 flex flex-col h-full gap-5xs items-center justify-center">
      <Typography type="body3">앗, 작성된 댓글이 없어요.</Typography>
      <Image src={BandiMooriImage} width={160} height={160} alt="no-comments" />
    </div>
  );
};
