import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'components/atoms/loading',
  component: Loading,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    className: 'h-[250px] w-[250px]',
  },
};
