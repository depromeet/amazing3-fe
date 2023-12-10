import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/atoms/button';

import { BottomSheet } from './BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'components/atoms/bottomSheet',
  component: BottomSheet,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
    onDismiss: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const BasicBottomSheet: Story = {
  args: {
    open: true,
    HeaderComponent: <p className="text-xl font-bold flex items-center justify-between mb-2">문답 가이드</p>,
    FooterComponent: (
      <Button onClick={() => {}} intent="primary" size="xl">
        적용
      </Button>
    ),
    BodyComponent: (
      <>
        <p className="text-xl font-bold flex items-center justify-between mt-2mb-2">TODO</p>
        <ul>
          <li>목표 추천 가이드 리스트로 생성</li>
          <li>리스트 선택 후 적용 버튼 클릭 시, form에 값 업데이트</li>
          <li>Header, Footer, Body를 atom으로 변경</li>
        </ul>
      </>
    ),
  },
};
