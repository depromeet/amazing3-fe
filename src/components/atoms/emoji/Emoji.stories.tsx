import type { Meta, StoryObj } from '@storybook/react';

import { Emoji } from '../emoji';

const meta: Meta<typeof Emoji> = {
  title: 'components/atoms/emoji',
  component: Emoji,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Emoji>;

export const Small: Story = {
  args: {
    src: 'https://github.com/depromeet/amazing3-fe/assets/112946860/5c103242-786d-4700-bf32-b87e4c4a8970',
    name: 'like',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...Small.args,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Small.args,
    size: 'large',
  },
};
