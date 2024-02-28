import type { Meta, StoryObj } from '@storybook/react';

import { CountEmoji } from './CountEmoji';

const meta: Meta<typeof CountEmoji> = {
  title: 'components/molecules/countEmoji',
  component: CountEmoji,
};

export default meta;

type Story = StoryObj<typeof CountEmoji>;

export const Basic: Story = {
  args: {
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/5c103242-786d-4700-bf32-b87e4c4a8970',
    name: 'like',
    count: 10,
  },
};

export const Selected: Story = {
  args: {
    ...Basic.args,
    reacted: true,
  },
};

export const OnlyView: Story = {
  args: {
    ...Basic.args,
    onlyView: true,
  },
};
