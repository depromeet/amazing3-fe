import Image from 'next/image';

import { Typography } from '@/components';

interface CheererProps {
  image: string;
  nickname: string;
  cheeredAt: string;
}

const Cheerer = ({ image, nickname, cheeredAt }: CheererProps) => {
  return (
    <div className="flex items-center justify-between py-5xs">
      <div className="flex items-center">
        <Image src={image} alt="user-profile" width={32} height={32} className="rounded-full mr-5xs" />
        <Typography type="body2">{nickname}</Typography>
      </div>
      <Typography type="body2" className="text-gray-40">
        {cheeredAt}
      </Typography>
    </div>
  );
};

export default Cheerer;