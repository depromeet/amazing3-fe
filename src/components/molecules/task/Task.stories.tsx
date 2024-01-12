import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Task } from './Task';

const meta: Meta<typeof Task> = {
  title: 'components/molecules/task',
  component: Task,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="mt-[30px] ml-[20px] text-sm text-gray-40">
          예시를 위해 클릭 이벤트는 Basic에만 연결했습니다.
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Task>;

const BasicGoal = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Task
      isDone={isChecked}
      text="월 50씩 저축하기"
      targetIds={{ goalId: 1, taskId: 1 }}
      onDoneClick={() => setChecked((prev) => !prev)}
    />
  );
};

export const Basic: Story = {
  render: () => <BasicGoal />,
};

export const Done: Story = {
  args: {
    text: '월 50씩 저축하기',
    isDone: true,
  },
};

export const Overflow: Story = {
  args: {
    text: '월 50씩 저축은 하는데요. 이게 말이죠. 경우에 따라 말이죠.',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};
