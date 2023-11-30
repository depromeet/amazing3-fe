import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import type { Meta, StoryFn } from '@storybook/react';

import type { AccordionProps } from './';
import Accordion from './';

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      value: 'item-1',
      triggerContent: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      value: 'item-2',
      triggerContent: 'Is it unstyled?',
      content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
    },
    {
      value: 'item-3',
      triggerContent: 'Can it be animated?',
      content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
    },
  ],
  renderTriggerIcon: (state) => (
    <ChevronDownIcon
      className={`text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=${state}]:rotate-180`}
      aria-hidden
    />
  ),
};
