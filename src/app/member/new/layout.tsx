'use client';

import type { PropsWithChildren } from 'react';

import NewMemberFormProvider from '@/features/member/contexts/NewMemberFormProvider';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <NewMemberFormProvider>
      <div className="w-full h-[calc(100vh-24px)]">{children}</div>
    </NewMemberFormProvider>
  );
};

export default Layout;
