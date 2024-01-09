import { Button } from '@/components/atoms';

interface FooterProps {
  onClose: VoidFunction;
}

const Footer = ({ onClose }: FooterProps) => {
  const handleClickWithdraw = () => {
    // TODO: 회원 탈퇴 요청
    alert('준비중인 기능입니다!');
  };
  return (
    <div className="flex gap-5xs mb-5xs">
      <Button variant="tertiary" onClick={onClose}>
        취소
      </Button>
      <Button variant="issue" onClick={handleClickWithdraw}>
        탈퇴하기
      </Button>
    </div>
  );
};

export default Footer;
