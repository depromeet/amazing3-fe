import type { Meta, StoryObj } from '@storybook/react';

import { useToast } from '@/hooks/useToast';

import { Button } from '..';

import { Toast } from './Toast';
import { ToastProvider } from './ToastProvider';

const meta: Meta<typeof Toast> = {
  title: 'components/atoms/toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div className="w-[300px] h-[100vh]">
        <ToastProvider />
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  args: {
    title: '세부 목표를 삭제했어요.',
    type: 'success',
  },
};

export const ClickToToast = () => {
  const toast = useToast();

  return <Button onClick={toast.success('세부 목표를 삭제했어요.')}>누르면 토스트가 나와요</Button>;
};
