import type { Meta, StoryObj } from '@storybook/react';

import { ToolTip } from './ToolTip';

const meta: Meta<typeof ToolTip> = {
  title: 'components/atoms/toolTip',
  component: ToolTip,
};

export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Basic: Story = {
  args: {
    title: '3초만에 시작하기',
  },
};
