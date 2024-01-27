import React from 'react';
import Link from 'next/link';

import { Button, ToolTip } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

interface SavedFooterButtonProps {
  goalId: number;
}

export const SavedFooterButton = ({ goalId }: SavedFooterButtonProps) => {
  const { data: memberData } = useGetMemberData();

  return (
    <div className="relative">
      <div className="absolute w-full flex justify-center bottom-[90px]">
        <ToolTip title="홈화면에서 세부목표를 정할 수 있어요" />
      </div>
      <Link href={{ pathname: `/home/${memberData?.username}`, query: { id: goalId } }}>
        <Button>홈으로 가기</Button>
      </Link>
    </div>
  );
};
