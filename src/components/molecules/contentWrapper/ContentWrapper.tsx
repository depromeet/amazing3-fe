import type { PropsWithChildren, ReactNode } from 'react';

import { Typography } from '@/components';

interface ContentWrapperProps {
  title: string | ReactNode;
  description?: string;
}

export const ContentWrapper = ({ title, description, children }: PropsWithChildren<ContentWrapperProps>) => {
  return (
    <section className="h-full">
      <Typography type="heading1" className="text-blue-50">
        {title}
      </Typography>
      {description && (
        <Typography type="title4" className="mt-[8px] text-gray-40">
          {description}
        </Typography>
      )}
      {children}
    </section>
  );
};
