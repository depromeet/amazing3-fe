import Image from 'next/image';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/atoms/button',
  component: Button,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['heavy', 'blue', 'tertiary', 'issue'],
    },
    rounded: {
      control: 'inline-radio',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    size: {
      control: 'inline-radio',
      options: ['lg'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Button',
  },
};

export const Blue: Story = {
  args: {
    ...Basic.args,
    variant: 'blue',
  },
};

export const Tertiary: Story = {
  args: {
    ...Basic.args,
    variant: 'tertiary',
  },
};

export const Issue: Story = {
  args: {
    ...Basic.args,
    variant: 'issue',
  },
};

export const CustomSize: Story = {
  args: {
    ...Basic.args,
    className: 'w-[400px] h-[100px]',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Image
          src="https://github.com/depromeet/amazing3-fe/assets/112946860/33330865-9656-4184-94a7-53a46e7d0150"
          width="15"
          height="15"
          alt="icon"
        />
        Button
      </>
    ),
  },
};
