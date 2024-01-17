import React from 'react';
import Link from 'next/link';

import { Button } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

interface SavedFooterButtonProps {
  goalId: number;
}

export const SavedFooterButton = ({ goalId }: SavedFooterButtonProps) => {
  const { data: memberData } = useGetMemberData();

  return (
    <Link href={{ pathname: `/home/${memberData?.username}`, query: { id: goalId } }}>
      <Button>홈으로 가기</Button>
    </Link>
  );
};
