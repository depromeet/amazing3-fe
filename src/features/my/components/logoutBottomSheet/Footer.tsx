import { useRouter } from 'next/navigation';
import { useSetAtom } from 'jotai';
import Cookies from 'js-cookie';

import { Button } from '@/components/atoms';
import { isLoginAtom } from '@/features/auth/atom';

interface FooterProps {
  onClose: VoidFunction;
}

const Footer = ({ onClose }: FooterProps) => {
  const router = useRouter();
  const setIsLogin = useSetAtom(isLoginAtom);

  const handleClickLogout = () => {
    Cookies.remove('accessToken');
    setIsLogin(false);
    router.push('/');
  };

  return (
    <div className="flex gap-5xs mb-5xs">
      <Button variant="tertiary" onClick={onClose}>
        취소
      </Button>
      <Button variant="blue" onClick={handleClickLogout}>
        로그아웃
      </Button>
    </div>
  );
};

export default Footer;
