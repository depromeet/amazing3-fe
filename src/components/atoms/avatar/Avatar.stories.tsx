import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'components/atoms/avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <div className="w-[300px] h-[300px] p-[10px] bg-gray-20">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {};

export const WithImage: Story = {
  args: {
    profileImage: 'https://ca.slack-edge.com/T063BLCNLNB-U063T68HEAE-74ed3b59512e-512',
  },
};

export const SizeSpecification: Story = {
  args: {
    size: 50,
  },
};

export const SizeSpecificationWithImage: Story = {
  args: {
    ...WithImage.args,
    size: 50,
  },
};
