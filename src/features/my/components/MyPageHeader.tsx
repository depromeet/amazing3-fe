import Link from 'next/link';
import { useRouter } from 'next/navigation';

import EditIcon from '@/assets/icons/edit-icon.svg';
import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components';

const MypageHeader = () => {
  const router = useRouter();
  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center">
      <button onClick={handleClickBackButton}>
        <BackIcon />
      </button>
      <Typography type="title1">마이페이지</Typography>
      {/* TODO: 수정 버튼 클릭시 수정페이지로 이동 */}
      <Link href="/my">
        <EditIcon />
      </Link>
    </div>
  );
};

export default MypageHeader;
