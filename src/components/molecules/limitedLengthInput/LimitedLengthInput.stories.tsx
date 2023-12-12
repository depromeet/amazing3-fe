import type { Meta, StoryObj } from '@storybook/react';

import { LimitedLengthInput } from './LimitedLengthInput';

const meta: Meta<typeof LimitedLengthInput> = {
  title: 'components/molecules/limitedLengthInput',
  component: LimitedLengthInput,
};

export default meta;

type Story = StoryObj<typeof LimitedLengthInput>;

export const LimitedLengthInputTest: Story = {
  args: { maxLength: 10, placeholder: 'placeholder' },
};
