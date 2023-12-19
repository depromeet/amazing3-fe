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
    onDismiss: { action: 'BottomSheet is closed' },
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

const contents = Array.from({ length: 20 }, (_, i) => `내용 ${i + 1}`);

export const BasicBottomSheet: Story = {
  args: {
    open: true,
    HeaderComponent: <p className="text-xl font-bold flex items-center justify-between mb-2">문답 가이드</p>,
    FooterComponent: <Button>적용</Button>,
    children: (
      <ul>
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    ),
  },
};
