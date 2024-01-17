import React from 'react';
import Link from 'next/link';

import { Button } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

export const SavedFooterButton = () => {
  const { data: memberData } = useGetMemberData();

  return (
    <Link href={{ pathname: `/home/${memberData?.username}` }}>
      <Button>홈으로 가기</Button>
    </Link>
  );
};
