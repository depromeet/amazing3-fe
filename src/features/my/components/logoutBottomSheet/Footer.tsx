import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { Button } from '@/components/atoms';
import { Spinner } from '@/components/atoms/spinner';

interface FooterProps {
  onClose: VoidFunction;
}

const Footer = ({ onClose }: FooterProps) => {
  const router = useRouter();
  const [isLogout, setIsLogout] = useState<boolean>(false);

  const handleClickLogout = () => {
    Cookies.remove('accessToken');
    setIsLogout(true);
  };

  useEffect(() => {
    if (!isLogout) return;
    router.push('/');
  }, [isLogout, router]);

  return (
    <div className="flex gap-5xs mb-5xs">
      <Button variant="tertiary" onClick={onClose}>
        취소
      </Button>
      <Button variant="blue" onClick={handleClickLogout}>
        {isLogout ? <Spinner /> : '로그아웃'}
      </Button>
    </div>
  );
};

export default Footer;
