import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from './Paragraph';

/*
control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      },
*/
const meta: Meta<typeof Paragraph> = {
  title: 'components/atoms/paragraph',
  component: Paragraph,
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

type Story = StoryObj<typeof Paragraph>;

export const Heading2Paragraph: Story = {
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

export const Heading3Paragraph: Story = {
  args: {
    type: 'heading3',
    textColor: 'gray7',
    children: 'Hello world!',
  },
};

export const Body4Paragraph: Story = {
  args: {
    type: 'body4',
    textColor: 'gray5',
    children: 'Hello world!',
  },
};

export const Body5Paragraph: Story = {
  args: {
    type: 'body5',
    textColor: 'gray4',
    children: 'Hello world!',
  },
};

export const SubLabel2Paragraph: Story = {
  args: {
    type: 'subLabel2',
    textColor: 'gray4',
    children: 'Hello world!',
  },
};
