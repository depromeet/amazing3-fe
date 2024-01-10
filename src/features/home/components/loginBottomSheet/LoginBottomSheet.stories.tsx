import type { Meta, StoryObj } from '@storybook/react';

import { LoginBottomSheet } from './LoginBottomSheet';

import './LoginBottomSheet.styles.css';

const meta: Meta<typeof LoginBottomSheet> = {
  title: 'features/home/loginBottomSheet',
  component: LoginBottomSheet,
};

export default meta;

type Story = StoryObj<typeof LoginBottomSheet>;

export const Basic: Story = {
  args: {
    open: true,
    onClose: () => {},
  },
};
