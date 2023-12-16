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
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    type: 'heading1',
    children: (
      <>
        Hello world!
        <br />
        We are amzaing3
      </>
    ),
  },
};

export const Title1: Story = {
  args: {
    type: 'title1',
    children: (
      <>
        Hello world!
        <br />
        We are amzaing3
      </>
    ),
  },
};

export const Title3: Story = {
  args: {
    type: 'title3',
    children: (
      <>
        Hello world!
        <br />
        We are amzaing3
      </>
    ),
  },
};

export const Title4: Story = {
  args: {
    type: 'title4',
    children: (
      <>
        Hello world!
        <br />
        We are amzaing3
      </>
    ),
  },
};

export const Body1: Story = {
  args: {
    type: 'body1',
    children: 'We are amzaing3',
  },
};

export const Body3: Story = {
  args: {
    type: 'body3',
    children: 'We are amzaing3',
  },
};

export const SubLabel1: Story = {
  args: {
    type: 'subLabel1',
    children: 'We are amzaing3',
  },
};

export const SubLabel2: Story = {
  args: {
    type: 'subLabel2',
    children: 'We are amzaing3',
  },
};

export const Caption1: Story = {
  args: {
    type: 'caption1',
    children: 'We are amzaing3',
  },
};
