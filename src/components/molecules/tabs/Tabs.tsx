import React from 'react';
import * as BaseTabs from '@radix-ui/react-tabs';

import { Typography } from '@/components/atoms';

export interface TabsProps {
  items: {
    label: string;
    content: React.ReactNode;
  }[];
}

export const Tabs = ({ items }: TabsProps) => {
  return (
    <BaseTabs.Root className="flex flex-col" defaultValue="tab1">
      <BaseTabs.List className="flex border-b border-gray-20">
        {items.map((item, index) => (
          <BaseTabs.Trigger
            key={index}
            className="px-5xs h-[45px] flex-grow items-center justify-center text-gray-40 hover:text-purple-80 data-[state=active]:text-purple-80 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
            value={`tab${index + 1}`}
          >
            <Typography type="subLabel1">{item.label}</Typography>
          </BaseTabs.Trigger>
        ))}
      </BaseTabs.List>

      {items.map((item, index) => (
        <BaseTabs.Content key={`tab${index + 1}`} className="p-2xs" value={`tab${index + 1}`}>
          {item.content}
        </BaseTabs.Content>
      ))}
    </BaseTabs.Root>
  );
};
Tabs.displayName = 'Tabs';
