import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/atoms/button',
  component: Button,
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xl', 'lg', 'md', 'sm', 'xs'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BasicButton: Story = {
  args: {
    intent: 'primary',
    size: 'xl',
    children: 'Basic Button',
  },
};

export const WithIcon: Story = {
  args: {
    intent: 'primary',
    size: 'xl',
    children: (
      <>
        <MagnifyingGlassIcon className="mr-1 h-6 w-6" />
        Button with Icon
      </>
    ),
  },
};
