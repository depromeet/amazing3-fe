import { useState } from 'react';

import { BottomSheet } from '@/components/atoms/bottomSheet';
import { Button } from '@/components/atoms/button';

const GoalSuggestionBottomSheet = () => {
  const [open, setOpen] = useState(false);

  const onDismiss = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>목표 추천</Button>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        HeaderComponent={<Header />}
        FooterComponent={<Footer onDone={onDismiss} />}
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
    </>
  );
};

const Header = () => <p className="text-xl font-bold flex items-center justify-between mb-2">문답 가이드</p>;

const Footer = ({ onDone }: { onDone: () => void }) => <Button onClick={onDone}>적용</Button>;

export default GoalSuggestionBottomSheet;
