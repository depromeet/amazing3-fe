import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { Button } from '@/components/atoms';
import { Spinner } from '@/components/atoms/spinner';
import { useDeleteMemberData } from '@/hooks/reactQuery/auth/useDeleteMemberData';

interface FooterProps {
  onClose: VoidFunction;
}

const Footer = ({ onClose }: FooterProps) => {
  const router = useRouter();
  const { mutate, isSuccess, isPending } = useDeleteMemberData();

  useEffect(() => {
    if (isSuccess) {
      Cookies.remove('accessToken');
      router.push('/');
    }
  }, [isSuccess, router]);

  const handleClickWithdraw = () => {
    if (process.env.NODE_ENV !== 'development') {
      alert('준비중인 기능입니다!');
      return;
    }

    // TODO: 서버에서 해당 기능 개발 후 live 환경에 회원 탈퇴 기능 반영
    mutate();
  };

  return (
    <div className="flex gap-5xs mb-5xs">
      <Button variant="tertiary" onClick={onClose}>
        취소
      </Button>
      <Button variant="issue" onClick={handleClickWithdraw} disabled={isPending}>
        {isPending ? <Spinner /> : '탈퇴하기'}
      </Button>
    </div>
  );
};

export default Footer;
