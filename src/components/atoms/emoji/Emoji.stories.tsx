import type { Meta, StoryObj } from '@storybook/react';

import { Emoji, emojiNameSet } from './Emoji';

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
      <div className="w-[300px]">
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

export const AllEmojis: Story = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <p className="text-[12px] mt-[20px]">
          <strong>emojiNameSet</strong>을 이용해서 모든 이모지를 출력할 수 있어요.
        </p>
      </>
    ),
  ],
  render: () => (
    <div className="grid grid-cols-3 gap-[8px]">
      {emojiNameSet.map((name) => (
        <Emoji key={name} name={name} />
      ))}
    </div>
  ),
};
