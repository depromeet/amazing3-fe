import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'components/atoms/typography',
  component: Typography,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['heading2', 'heading3', 'body4', 'body5', 'subLabel2'],
      },
    },
    textColor: {
      control: {
        type: 'select',
        options: ['white', 'gray4', 'gray5', 'gray7', 'black'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading2Typography: Story = {
  args: {
    type: 'heading2',
    textColor: 'black',
    children: (
      <>
        Hello world!
        <br />
        We are amzaing3
      </>
    ),
  },
};

export const Heading3Typography: Story = {
  args: {
    type: 'heading3',
    textColor: 'gray7',
    children: 'Hello world!',
  },
};

export const Body4Typography: Story = {
  args: {
    type: 'body4',
    textColor: 'gray5',
    children: 'Hello world!',
  },
};

export const Body5Typography: Story = {
  args: {
    type: 'body5',
    textColor: 'gray4',
    children: 'Hello world!',
  },
};

export const SubLabel2Typography: Story = {
  args: {
    type: 'subLabel2',
    textColor: 'gray4',
    children: 'Hello world!',
  },
};
