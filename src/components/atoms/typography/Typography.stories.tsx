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

export const Heading2: Story = {
  args: {
    ...Heading1.args,
    type: 'heading2',
  },
};

export const Heading3: Story = {
  args: {
    ...Heading1.args,
    type: 'heading3',
  },
};

export const Heading4: Story = {
  args: {
    ...Heading1.args,
    type: 'heading4',
  },
};

export const Title1: Story = {
  args: {
    ...Heading1.args,
    type: 'title1',
  },
};

export const Title2: Story = {
  args: {
    ...Heading1.args,
    type: 'title2',
  },
};

export const Title3: Story = {
  args: {
    ...Heading1.args,
    type: 'title3',
  },
};

export const Title4: Story = {
  args: {
    ...Heading1.args,
    type: 'title4',
  },
};

export const Title5: Story = {
  args: {
    ...Heading1.args,
    type: 'title5',
  },
};

export const Body1: Story = {
  args: {
    type: 'body1',
    children: 'We are amzaing3',
  },
};

export const Body2: Story = {
  args: {
    ...Body1.args,
    type: 'body2',
  },
};

export const Body3: Story = {
  args: {
    ...Body1.args,
    type: 'body3',
  },
};

export const SubLabel1: Story = {
  args: {
    ...Body1.args,
    type: 'subLabel1',
  },
};

export const SubLabel2: Story = {
  args: {
    ...Body1.args,
    type: 'subLabel2',
  },
};

export const Caption1: Story = {
  args: {
    ...Body1.args,
    type: 'caption1',
  },
};

export const Caption2: Story = {
  args: {
    ...Body1.args,
    type: 'caption2',
  },
};
