import type { Meta, StoryObj } from '@storybook/react';

import type { GoalProps } from '@/hooks/reactQuery/goal/useGetGoals';

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

const mockGoals: GoalProps[] = Array(5).fill({
  id: 1,
  stickerUrl: 'https://github.com/depromeet/amazing3-fe/assets/112946860/b266a620-a349-4f70-8236-be1612028a97',
  deadline: '2024.01',
  tagContent: '학업',
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
