import Image from 'next/image';
import Link from 'next/link';

import ForwardIcon from '@/assets/icons/forward-icon.svg';
import LikeIcon from '@/assets/icons/like-icon.png';
import MapIcon from '@/assets/icons/map-icon.png';
import { Typography } from '@/components';
import { formatOver999 } from '@/utils/number';

const MyPageLikeClicker = () => {
  return (
    <>
      <div className="flex items-center gap-[8px] py-[12px] w-full">
        <Image src={LikeIcon} alt="like-icon" width={24} height={24} />
        <div className="flex justify-between w-full">
          <Typography type="title4" className="text-gray-40">
            내가 받은 응원
          </Typography>
          <Typography type="title4">{`${formatOver999(1000)}명`}</Typography>
        </div>
        <Link href="/my/like">
          <ForwardIcon />
        </Link>
      </div>
      <div className="flex items-center gap-[8px] py-[12px] w-full">
        <Image src={MapIcon} alt="like-icon" width={24} height={24} />
        <div className="flex justify-between w-full">
          <Typography type="title4" className="text-gray-40">
            내 지도에 다녀간 반디
          </Typography>
          <Typography type="title4" className="pr-[26px]">
            {`${formatOver999(1000)}명`}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MyPageLikeClicker;
