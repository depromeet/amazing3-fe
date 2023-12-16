import { BottomSheet } from '@/components/atoms/bottomSheet';
import { Button } from '@/components/atoms/button';

interface GoalGuideBottomSheetProps {
  open: boolean;
  onClose: () => void;
}

const GoalGuideBottomSheet = ({ open, onClose }: GoalGuideBottomSheetProps) => {
  const handleApply = () => {
    // TODO: 선택된 목표 추천 가이드를 form('title')에 업데이트
    onClose();
  };

  return (
    <div className="flex items-center justify-center">
      <BottomSheet
        open={open}
        onDismiss={onClose}
        HeaderComponent={<Header />}
        FooterComponent={<Footer onDone={handleApply} />}
        BodyComponent={
          <>
            <p className="text-xl font-bold flex items-center justify-between mt-2mb-2">TODO</p>
            <ul>
              <li>목표 추천 가이드 리스트로 생성</li>
              <li>리스트 선택 후 적용 버튼 클릭 시, form에 값 업데이트</li>
              <li>Header, Footer, Body를 atom으로 변경</li>
            </ul>
          </>
        }
      />
    </div>
  );
};

/**
 * TODO: Typography 컴포넌트 반영 후 Header, footer 수정
 */
const Header = () => <p className="text-xl font-bold flex items-center justify-between mb-2">문답 가이드</p>;

const Footer = ({ onDone }: { onDone: () => void }) => <Button onClick={onDone}>적용</Button>;

export default GoalGuideBottomSheet;
