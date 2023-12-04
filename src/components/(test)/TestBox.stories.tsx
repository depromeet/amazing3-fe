// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './components/CTA';
import TestBox from './TestBox';

const meta: Meta<typeof TestBox> = {
  title: 'Test/TestBox',
  component: TestBox,
};

export default meta;

type Story = StoryObj<typeof TestBox>;

export const TypeA: Story = {
  render: () => <TestBox type="A" />,
};

export const TypeB: Story = {
  render: () => <TestBox type="B" />,
};

export const TypeC: Story = {
  render: () => <TestBox type="C" />,
};
