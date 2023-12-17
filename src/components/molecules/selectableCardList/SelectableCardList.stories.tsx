import type { Meta, StoryObj } from '@storybook/react';

import { Span } from '@/components/atoms';

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

const items = [
  {
    content: (
      <>
        <Span>어떤 일</Span>을 하는 사람이 되기
      </>
    ),
  },
  {
    content: (
      <>
        <Span>누구</Span>와&nbsp;
        <Span>어떤 일</Span>을 하는 사람이 되기
      </>
    ),
  },
];

export const BasicSelectableCard: Story = {
  args: {
    items,
    onClick: () => {},
  },
};
