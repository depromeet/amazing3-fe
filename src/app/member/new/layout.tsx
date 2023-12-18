'use client';

import type { PropsWithChildren } from 'react';

import NewMemberFormProvider from '@/features/member/contexts/NewMemberFormProvider';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <NewMemberFormProvider>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-4/5 h-4/5">{children}</div>
      </div>
    </NewMemberFormProvider>
  );
};

export default Layout;
