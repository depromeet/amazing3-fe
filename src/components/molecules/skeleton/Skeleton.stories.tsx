import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'components/molecules/skeleton',
  component: Skeleton,
  decorators: [
    (Story) => (
      <div className="w-[520px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Square: Story = {
  args: {
    className: 'w-full h-[200px]',
  },
};
