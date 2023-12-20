import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'components/atoms/tag',
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  args: {
    children: '태그',
  },
};

export const Focused: Story = {
  args: {
    children: '태그',
    isFocus: true,
  },
};
