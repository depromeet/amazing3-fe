import type { Args, Meta, StoryObj } from '@storybook/react';

import { Span } from './Span';

const meta: Meta<typeof Span> = {
  title: 'components/atoms/span',
  component: Span,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['form'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Span>;

export const BasicSpan: Story = (args: Args) => (
  <div className="group">
    <Span {...args} />
  </div>
);

BasicSpan.args = {
  children: 'Hello world! We are amzaing',
};
