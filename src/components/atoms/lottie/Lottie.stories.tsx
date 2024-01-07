import type { Meta, StoryObj } from '@storybook/react';

import { Lottie } from './Lottie';

const meta: Meta<typeof Lottie> = {
  title: 'components/atoms/lottie',
  component: Lottie,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Lottie>;

export const Default: Story = {
  args: {
    src: '/lotties/bandiboodi-loading.json',
    className: 'h-[250px] w-[250px]',
  },
};
