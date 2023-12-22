import React from 'react';
import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import CloseIcon from '@/assets/icons/goal/close-icon.svg';

// 아래는 MVP의 버그를 회피하기 위해 임시로 작성한 코드입니다.
// 최대한 빠른 시일 내에 수정하겠습니다. - 2023.12.22 by deepbig
export const SavedHeader = () => {
  const router = useRouter();

  const handleClickButton = () => {
    router.push('/home');
  };
  return (
    <>
      {/* <Link href={{ pathname: '/home' }} onClick={onClickButton}>
        <BackIcon />
      </Link>
      <Typography type="header1">목표 저장 완료!</Typography>
      <Link href={{ pathname: '/home' }}>
        <CloseIcon />
      </Link> */}
      <BackIcon onClick={handleClickButton} />
      <CloseIcon onClick={handleClickButton} />
    </>
  );
};
