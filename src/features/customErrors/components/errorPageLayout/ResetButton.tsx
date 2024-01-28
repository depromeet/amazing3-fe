import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

import type { ErrorPageLayoutProps } from './ErrorPageLayout';

export const ResetButton = ({ statusCode }: ErrorPageLayoutProps) => {
  const router = useRouter();
  const { data: memberData } = useGetMemberData();

  if (statusCode === 403)
    return (
      <Link href={{ pathname: memberData ? `/home/${memberData.username}` : '/' }} className="w-full">
        <Button>{memberData ? '내 인생지도 바로가기' : '반디부디 바로가기'}</Button>
      </Link>
    );

  return (
    <>
      <Link href={{ pathname: memberData ? `/home/${memberData.username}` : '/' }} className="w-full">
        <Button variant="tertiary">홈화면</Button>
      </Link>
      <Button onClick={() => router.back()}>이전페이지</Button>
    </>
  );
};
