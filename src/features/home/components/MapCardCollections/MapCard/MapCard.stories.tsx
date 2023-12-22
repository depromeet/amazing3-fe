import type { Meta, StoryObj } from '@storybook/react';

import { MapCard } from './MapCard';

const meta: Meta<typeof MapCard> = {
  title: 'features/home/mapCard/mapCard',
  component: MapCard,
};

export default meta;

type Story = StoryObj<typeof MapCard>;

export const Basic: Story = {
  args: {
    goal: {
      id: 1,
      stickerUrl: 'https://github.com/depromeet/amazing3-fe/assets/112946860/b266a620-a349-4f70-8236-be1612028a97',
      deadline: '2024.01',
      tagContent: '학업',
    },
    position: { x: 'top-[20px]', y: 'left-[20px]' },
  },
};
