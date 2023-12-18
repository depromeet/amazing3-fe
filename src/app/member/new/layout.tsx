'use client';

import type { PropsWithChildren } from 'react';

import NewMemberFormProvider from '@/features/member/contexts/NewMemberFormProvider';

const Layout = ({ children }: PropsWithChildren) => {
  return <NewMemberFormProvider>{children}</NewMemberFormProvider>;
};

export default Layout;
