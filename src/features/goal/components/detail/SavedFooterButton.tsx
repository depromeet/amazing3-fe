import React from 'react';
import Link from 'next/link';

import { Button } from '@/components';

export const SavedFooterButton = () => {
  return (
    <Link href={{ pathname: '/home' }}>
      <Button>홈으로 가기</Button>
    </Link>
  );
};
