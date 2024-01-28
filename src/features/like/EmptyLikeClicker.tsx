import Image from 'next/image';

import BandiMoori from '@/assets/images/bandi-moori.png';
import { Typography } from '@/components';

const EmptyLikeClicker = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100dvh-64px)]">
      <Typography type="body3" className="text-gray-50">
        앗, 받은 응원이 없어요.
      </Typography>
      <Image src={BandiMoori} width={160} height={160} alt="no-like-clicker" />
    </div>
  );
};

export default EmptyLikeClicker;
