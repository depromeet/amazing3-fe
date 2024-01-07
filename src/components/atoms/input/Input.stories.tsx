import type { Meta, StoryObj } from '@storybook/react';

import { useInput } from '@/hooks/useInput';

import type { InputProps } from './Input';
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

const Example = ({ includeSubmitButton, onSubmit }: InputProps) => {
  const { value, handleChange } = useInput('');

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder="Text Input"
      includeSubmitButton={includeSubmitButton}
      onSubmit={onSubmit}
    />
  );
};

export const Basic: Story = {
  render: () => <Example />,
};

export const DateInput: Story = {
  args: {
    type: 'date',
  },
};

export const IncludeSubmitButton: Story = {
  render: () => <Example includeSubmitButton onSubmit={() => alert('submit 버튼을 누르셨군요!')} />,
};

export const TextOverflow: Story = {
  args: {
    value: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사',
    includeSubmitButton: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};
