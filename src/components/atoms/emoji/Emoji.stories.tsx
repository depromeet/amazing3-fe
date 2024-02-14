import type { Meta, StoryObj } from '@storybook/react';

import { Emoji } from './Emoji';

const meta: Meta<typeof Emoji> = {
  title: 'components/atoms/emoji',
  component: Emoji,
  argTypes: {
    name: {
      control: {
        type: 'radio',
        options: ['like', 'cheer', 'sad', 'angry', 'awesome', 'surprised'],
      },
    },
    count: {
      control: {
        type: 'number',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[100px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Emoji>;

export const SmallSize: Story = {
  args: {
    name: 'like',
    count: 10,
    size: 'small',
  },
};

export const MediumSize: Story = {
  args: {
    ...SmallSize.args,
    size: 'medium',
  },
};

export const FullSize: Story = {
  render: () => (
    <div className="w-[100px]">
      <Emoji name="like" count={10} />
    </div>
  ),
};

export const CountOver99: Story = {
  args: {
    ...SmallSize.args,
    count: 100,
  },
};

export const OnlyImage: Story = {
  args: {
    ...SmallSize.args,
    onlyImage: true,
  },
};
