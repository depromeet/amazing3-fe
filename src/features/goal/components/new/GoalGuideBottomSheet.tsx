import { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import {
  educationalItems,
  emotionalItems,
  financialItems,
  physicalItems,
  relationalItems,
  vocationalItems,
} from '@/assets/goalGuides';
import { SelectableCardList } from '@/components';
import { BottomSheet, Button, Typography } from '@/components/atoms';
import type { TabsProps } from '@/components/molecules/tabs';

interface GoalGuideBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
  onChange: (...event: unknown[]) => void;
}

const GoalGuideBottomSheet = ({ open, onClose, onChange }: GoalGuideBottomSheetProps) => {
  const [title, setTitle] = useState('');
  const [goalGuide, setGoalGuide] = useState<TabsProps>();

  useEffect(() => {
    setGoalGuide({
      items: [
        { label: '직업', content: <SelectableCardList items={vocationalItems} onClick={handleCardClick} /> },
        { label: '경제력', content: <SelectableCardList items={financialItems} onClick={handleCardClick} /> },
        { label: '배움', content: <SelectableCardList items={educationalItems} onClick={handleCardClick} /> },
        { label: '신체/건강', content: <SelectableCardList items={physicalItems} onClick={handleCardClick} /> },
        { label: '감정/정신', content: <SelectableCardList items={emotionalItems} onClick={handleCardClick} /> },
        { label: '인간관계', content: <SelectableCardList items={relationalItems} onClick={handleCardClick} /> },
      ],
    });
  }, []);

  const handleCardClick = (itemTitle: string) => {
    setTitle(itemTitle || '');
  };

  const handleApply = () => {
    if (title !== '') {
      onChange(title);
    }
    onClose();
  };

  return (
    <Tabs.Root defaultValue="tab1">
      <BottomSheet
        open={open}
        onDismiss={onClose}
        HeaderComponent={goalGuide && <Header items={goalGuide.items} />}
        FooterComponent={<Footer onDone={handleApply} />}
      >
        {goalGuide && <Content items={goalGuide.items} />}
      </BottomSheet>
    </Tabs.Root>
  );
};

const Header = ({ items }: TabsProps) => (
  <>
    <Typography type="heading3">목표 가이드</Typography>
    <Tabs.List className="flex border-b border-gray-20">
      {items.map((item, index) => (
        <Tabs.Trigger
          key={index}
          className="space-x-4xs h-[45px] flex-grow items-center justify-center text-gray-40 hover:text-purple-80 data-[state=active]:text-purple-80 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
          value={`tab${index + 1}`}
        >
          <Typography type="subLabel1">{item.label}</Typography>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  </>
);

const Content = ({ items }: TabsProps) => (
  <>
    {items.map((item, index) => (
      <Tabs.Content key={index} className="p-2xs" value={`tab${index + 1}`}>
        {item.content}
      </Tabs.Content>
    ))}
  </>
);

const Footer = ({ onDone }: { onDone: VoidFunction }) => <Button onClick={onDone}>적용</Button>;

export default GoalGuideBottomSheet;
