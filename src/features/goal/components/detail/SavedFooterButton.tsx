import React from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components';

// 아래는 MVP의 버그를 회피하기 위해 임시로 작성한 코드입니다.
// 최대한 빠른 시일 내에 수정하겠습니다. - 2023.12.22 by deepbig
export const SavedFooterButton = () => {
  const router = useRouter();

  const handleClickButton = () => {
    router.push('/home');
  };
  return <Button onClick={handleClickButton}>홈으로 가기</Button>;
};
