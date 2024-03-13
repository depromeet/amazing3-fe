import type { Meta, StoryObj } from '@storybook/react';

import { BottomNavigation } from './BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
  title: 'components/molecules/bottomNavigation',
  component: BottomNavigation,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

export const HomePage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/home',
      },
    },
  },
};
export const FeedPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/feed',
      },
    },
  },
};
