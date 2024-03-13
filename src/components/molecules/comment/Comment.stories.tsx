import type { Meta, StoryObj } from '@storybook/react';

import { Comment } from './Comment';

const meta: Meta<typeof Comment> = {
  title: 'components/molecules/comment',
  component: Comment,
  decorators: [
    (Story) => (
      <div className="w-[520px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Basic: Story = {
  args: {
    user: {
      url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
      nickname: '산타할아버지',
      username: 'BANDIBOODI-6',
    },
    content: '엄청나다! 너의 목표',
    createdAt: '2024-02-29T07:34:58.356Z',
  },
};

export const Deletable: Story = {
  args: {
    ...Basic.args,
    isDeletable: true,
    onDelete: () => {},
  },
};
