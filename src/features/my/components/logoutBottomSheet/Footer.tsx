import { Button } from '@/components/atoms';
import { useAuth } from '@/hooks';

interface FooterProps {
  onClose: VoidFunction;
}

const Footer = ({ onClose }: FooterProps) => {
  const { logout } = useAuth();

  return (
    <div className="flex gap-5xs mb-5xs">
      <Button variant="tertiary" onClick={onClose}>
        취소
      </Button>
      <Button variant="blue" onClick={logout}>
        로그아웃
      </Button>
    </div>
  );
};

export default Footer;
