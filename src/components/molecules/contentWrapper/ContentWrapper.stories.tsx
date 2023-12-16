import type { Meta, StoryObj } from '@storybook/react';

import { ContentWrapper } from './ContentWrapper';

const meta: Meta<typeof ContentWrapper> = {
  title: 'components/molecules/contentWrapper',
  component: ContentWrapper,
};

export default meta;

type Story = StoryObj<typeof ContentWrapper>;

export const Basic: Story = {
  args: {
    title: (
      <>
        반가워요, 닉네임님! <br />
        생년월일을 입력해 주세요.
      </>
    ),
    children: (
      <div className="mt-[20px] w-[300px] h-[300px] bg-purple-10 rounded-md p-[15px]">
        children에는 자유롭게 들어갈 수 있어요
      </div>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    ...Basic.args,
    description: 'beta에서는 생년월일을 수정할 수 없어요.',
  },
};
