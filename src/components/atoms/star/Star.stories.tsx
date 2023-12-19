import type { Meta, StoryObj } from '@storybook/react';

import { Star } from './Star';

const meta: Meta<typeof Star> = {
  title: 'components/atoms/star',
  component: Star,
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['white', 'blue'],
    },
  },
  decorators: [
    (Story) => (
      <div className="relative w-[500px] h-[300px] bg-black">
        <Story />
        <div className="absolute top-[70px] left-[20px] text-sm text-gray-30">
          잘 보이기 위해 bg-black 설정한 것이며, 실제로는 없습니다.
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Star>;

export const Size40: Story = {
  args: {
    size: 40,
    position: { x: 'left-50px', y: 'top-50px' },
  },
};

export const BlueColor: Story = {
  args: {
    ...Size40.args,
    color: 'blue',
  },
};
