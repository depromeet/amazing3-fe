import Link from 'next/link';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components';

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/my">
        <BackIcon />
      </Link>
      <Typography type="title1" className="text-gray-60">
        내 정보 수정하기
      </Typography>
      <div className="w-sm" />
    </div>
  );
};

export default Header;
