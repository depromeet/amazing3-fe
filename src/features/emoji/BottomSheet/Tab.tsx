import type { PropsWithChildren } from 'react';
import type { TabsTriggerProps } from '@radix-ui/react-tabs';
import { Trigger } from '@radix-ui/react-tabs';

export const Tab = ({ children, ...props }: PropsWithChildren<TabsTriggerProps>) => {
  return (
    <Trigger
      {...props}
      className="flex-shrink-0 pb-4xs data-[state=active]:text-purple-40 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
    >
      {children}
    </Trigger>
  );
};
