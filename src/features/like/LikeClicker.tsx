import Image from 'next/image';

import { Typography } from '@/components';

interface LikeClickerProps {
  image: string;
  nickname: string;
  likedAt: string;
}

const LikeClicker = ({ image, nickname, likedAt }: LikeClickerProps) => {
  return (
    <div className="flex items-center justify-between py-5xs">
      <div className="flex items-center">
        <Image src={image} alt="user-profile" width={32} height={32} className="rounded-full mr-5xs" />
        <Typography type="body2">{nickname}</Typography>
      </div>
      <Typography type="body2" className="text-gray-40">
        {likedAt}
      </Typography>
    </div>
  );
};

export default LikeClicker;
