import type { PropsWithChildren, ReactNode } from 'react';

import { ContentWrapper } from '@/components';

interface FormLayoutProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

const FormLayout = ({ icon, title, description, children }: PropsWithChildren<FormLayoutProps>) => {
  return (
    <div className="pt-sm px-xs h-full flex flex-col gap-2xs">
      {icon}
      <ContentWrapper title={title} description={description} sectionStyles="h-full flex flex-col">
        {children}
      </ContentWrapper>
    </div>
  );
};

export default FormLayout;
