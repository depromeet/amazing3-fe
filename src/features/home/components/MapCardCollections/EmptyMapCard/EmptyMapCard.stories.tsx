import type { Meta, StoryObj } from '@storybook/react';

import { EmptyMapCard } from './EmptyMapCard';

const meta: Meta<typeof EmptyMapCard> = {
  title: 'features/home/mapCard/emptyMapCard',
  component: EmptyMapCard,
  argTypes: {
    alternativeTextIndex: {
      control: 'inline-radio',
      options: [0, 1, 2, 3],
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyMapCard>;

export const Basic: Story = {
  args: {
    alternativeTextIndex: 1,
    position: { x: 'top-[20px]', y: 'left-[20px]' },
  },
};
