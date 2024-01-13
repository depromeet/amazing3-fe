import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components';

import type { ErrorPageLayoutProps } from './ErrorPageLayout';

export const ResetButton = ({ statusCode }: ErrorPageLayoutProps) => {
  const router = useRouter();

  if (statusCode === 403)
    return (
      <Link href={{ pathname: '/' }} className="w-full">
        <Button>반디부디 바로가기</Button>
      </Link>
    );

  return (
    <>
      <Link href={{ pathname: '/home' }} className="w-full">
        <Button variant="tertiary">홈화면</Button>
      </Link>
      <Button onClick={() => router.back()}>이전페이지</Button>
    </>
  );
};
