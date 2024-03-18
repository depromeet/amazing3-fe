import Link from 'next/link';

import EditIcon from '@/assets/icons/edit-icon.svg';
import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components';

const MypageHeader = ({ username }: { username?: string }) => {
  return (
    <div className="flex justify-between items-center px-xs">
      <Link href={`/home/${username}`}>
        <BackIcon />
      </Link>
      <Typography type="title1">마이페이지</Typography>
      <Link href="/my/update">
        <EditIcon />
      </Link>
    </div>
  );
};

export default MypageHeader;
