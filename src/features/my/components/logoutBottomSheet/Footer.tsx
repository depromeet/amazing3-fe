import { Button } from '@/components/atoms';

interface FooterProps {
  onClose: VoidFunction;
}

const Footer = ({ onClose }: FooterProps) => {
  const handleClickLogout = () => {
    // TODO: 쿠키의 토큰 삭제
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
