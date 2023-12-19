import type { Meta, StoryObj } from '@storybook/react';

import type { EmptyMapCard } from '../EmptyMapCard/EmptyMapCard';

import { StartMapCard } from './StartMapCard';

const meta: Meta<typeof EmptyMapCard> = {
  title: 'features/home/mapCard/startMapCard',
  component: StartMapCard,
};

export default meta;

type Story = StoryObj<typeof StartMapCard>;

export const Basic: Story = {
  args: {
    position: { x: 'top-[20px]', y: 'left-[20px]' },
  },
};
