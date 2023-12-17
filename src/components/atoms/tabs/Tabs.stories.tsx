import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'components/atoms/tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const labels = ['직업', '경제력', '배움', '신체/건강', '감정/정신', '인간관계'];

export const BasicTabs: Story = {
  args: {
    items: labels.map((label, index) => ({
      label,
      content: <p key={index}>{label} 내용</p>,
    })),
  },
};
