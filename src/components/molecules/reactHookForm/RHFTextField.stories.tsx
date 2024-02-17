import type { Meta, StoryObj } from '@storybook/react';

import { useInput } from '@/hooks/useInput';

import type { TextFieldProps } from './RHFTextField';
import { RHFTextField } from './RHFTextField';

const meta: Meta<typeof RHFTextField> = {
  title: 'components/molecules/reactHookForm',
  component: RHFTextField,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'number', 'email', 'password'],
      },
    },
    multiline: {
      control: {
        type: 'boolean',
      },
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Stroy = StoryObj<typeof RHFTextField>;

const Example = ({
  name,
  label,
  type,
  placeholder,
  helperText,
  multiline,
  rows,
  defaultValue,
  maxLength,
}: TextFieldProps) => {
  const { value: inputValue, handleChange } = useInput('');

  return (
    <RHFTextField
      name={name}
      label={label}
      type={type}
      value={inputValue}
      placeholder={placeholder}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      defaultValue={defaultValue}
      maxLength={maxLength}
      onChange={handleChange}
    />
  );
};

export const Basic: Stroy = {
  render: () => (
    <Example name="name" label="Name" helperText="This is a helperText." multiline={true} rows={4} maxLength={50} />
  ),
};
