'use client';

import type { PropsWithChildren } from 'react';

import NewMemberFormProvider from '@/features/member/contexts/NewMemberFormProvider';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <NewMemberFormProvider>
      <div className="w-4/5 h-full mt-lg">{children}</div>
    </NewMemberFormProvider>
  );
};

export default Layout;
