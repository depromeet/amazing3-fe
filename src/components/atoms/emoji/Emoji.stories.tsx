import type { Meta, StoryObj } from '@storybook/react';

import { Emoji } from './Emoji';

const meta: Meta<typeof Emoji> = {
  title: 'components/atoms/emoji',
  component: Emoji,
};

export default meta;

type Story = StoryObj<typeof Emoji>;

export const Basic: Story = {
  args: {
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/5c103242-786d-4700-bf32-b87e4c4a8970',
    name: 'like',
    size: 56,
  },
};
