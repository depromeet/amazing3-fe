// TODO: PR을 위한 스토리 -> 삭제 예정

import type { Meta, StoryObj } from '@storybook/react';

import ActiveFeedMenuIcon from '@/assets/icons/home/feed-tab-active-icon.svg';
import FeedMenuIcon from '@/assets/icons/home/feed-tab-default-icon.svg';
import ActiveMapMenuIcon from '@/assets/icons/home/map-tab-active-icon.svg';
import MapMenuIcon from '@/assets/icons/home/map-tab-default-icon.svg';

import { HomeTab } from './HomeTab';

const meta: Meta<typeof HomeTab> = {
  title: 'components/HomeTab',
  component: HomeTab,
};

export default meta;

type Story = StoryObj<typeof HomeTab>;

export const Basic: Story = {
  args: {
    tabList: [
      {
        name: 'HOME',
        Icon: MapMenuIcon,
        ActiveIcon: ActiveMapMenuIcon,
      },
      {
        name: 'FEED',
        Icon: FeedMenuIcon,
        ActiveIcon: ActiveFeedMenuIcon,
      },
    ],
    onChangeActiveTab: (tab) => {
      // TODO: 테스트를 위한 console
      console.log(tab);
    },
  },
};
