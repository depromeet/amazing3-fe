import type { Meta, StoryObj } from '@storybook/react';

import { EmojiSet } from './EmojiSet';

const meta: Meta<typeof EmojiSet> = {
  title: 'components/molecules/emojiSet',
  component: EmojiSet,
  decorators: [
    (Story) => (
      <div className="w-[390px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EmojiSet>;

export const Basic: Story = {
  args: {
    like: 10,
    cheer: 100,
    angry: 200,
    sad: 10,
    awesome: 10,
    surprised: 10,
  },
};
