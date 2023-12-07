import type { Meta, StoryObj } from '@storybook/react';

import { NicknameInput } from './NicknameInput';

const meta: Meta<typeof NicknameInput> = {
  title: 'components/molecules/nicknameInput',
  component: NicknameInput,
};

export default meta;

type Story = StoryObj<typeof NicknameInput>;

export const NicknameInputTest: Story = {
  args: { maxLength: 10 },
  render: (args) => <NicknameInput maxLength={args.maxLength} />,
};
