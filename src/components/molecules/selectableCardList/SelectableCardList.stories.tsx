import type { Meta, StoryObj } from '@storybook/react';

import { CheckIcon } from '@/assets/icons';

import { SelectableCardList } from './SelectableCardList';

const meta: Meta<typeof SelectableCardList> = {
  title: 'components/atoms/selectableCard',
  component: SelectableCardList,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof SelectableCardList>;

const highlightedWordsStyle = 'text-gray-30 group-focus:text-purple-40 group-hover:text-purple-40 ';
const iconStyle = 'fill-gray-40 group-focus:fill-purple-40 group-hover:fill-purple-40';

const items = [
  {
    content: (
      <>
        <span className={highlightedWordsStyle}>어떤 일</span>을 하는 사람이 되기
      </>
    ),
    icon: <CheckIcon className={iconStyle} />,
  },
  {
    content: (
      <>
        <span className={highlightedWordsStyle}>누구</span>와&nbsp;
        <span className={highlightedWordsStyle}>어떤 일</span>을 하는 사람이 되기
      </>
    ),
    icon: <CheckIcon className={iconStyle} />,
  },
];

export const BasicSelectableCard: Story = {
  args: {
    items,
    onClick: () => {},
  },
};
