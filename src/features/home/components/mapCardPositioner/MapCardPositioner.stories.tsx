import type { Meta, StoryObj } from '@storybook/react';

import type { MapCardGoalProps } from '@/features/home/types';

import { MapCardPositioner } from './MapCardPositioner';

const meta: Meta<typeof MapCardPositioner> = {
  title: 'features/home/mapCardPositioner',
  component: MapCardPositioner,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['A', 'B'],
      },
    },
    isLast: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[390px] relative">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MapCardPositioner>;

const mockGoals: MapCardGoalProps[] = Array(5).fill({
  id: 1,
  stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
  deadline: '2024.01',
  tag: '학업',
});

export const TypeA: Story = {
  args: {
    goals: mockGoals,
    type: 'A',
    isLast: true,
  },
};

export const TypeB: Story = {
  args: {
    ...TypeA.args,
    type: 'B',
  },
};

export const TypeAExistNext: Story = {
  args: {
    goals: mockGoals,
    type: 'A',
  },
};

export const TypeBExistNext: Story = {
  args: {
    ...TypeAExistNext.args,
    type: 'B',
  },
};
