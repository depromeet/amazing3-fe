import type { Meta, StoryObj } from '@storybook/react';

import { LoginIconSet } from './LoginIconSet';

const meta: Meta<typeof LoginIconSet> = {
  title: 'components/molecules/loginIconSet',
  component: LoginIconSet,
  decorators: [
    (Story) => (
      <div className="w-[240px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LoginIconSet>;

export const Basic: Story = {
  render: () => <LoginIconSet naver google kakao />,
};
