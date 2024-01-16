import Link from 'next/link';

import EditIcon from '@/assets/icons/edit-icon.svg';
import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components';

const MypageHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/home">
        <BackIcon />
      </Link>
      <Typography type="title1">마이페이지</Typography>
      <Link href="/my/edit">
        <EditIcon />
      </Link>
    </div>
  );
};

export default MypageHeader;
