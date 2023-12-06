'use client';

import type { PropsWithChildren } from 'react';

import CreateGoalFormProvider from '@/features/goal/contexts/CreateGoalFormProvider';

const Layout = ({ children }: PropsWithChildren) => {
  return <CreateGoalFormProvider>{children}</CreateGoalFormProvider>;
};

export default Layout;
