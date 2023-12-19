import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'components/atoms/textarea',
  component: Textarea,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    placeholder: 'Text Input',
  },
};
