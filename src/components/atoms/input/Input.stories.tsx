import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'components/atoms/input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Text Input',
  },
};

export const DateInput: Story = {
  args: {
    type: 'date',
  },
};
