'use client';

import type { PropsWithChildren } from 'react';

import TargetFormProvider from '@/features/target/contexts/TargetFormProvider';

const Layout = ({ children }: PropsWithChildren) => {
  return <TargetFormProvider>{children}</TargetFormProvider>;
};

export default Layout;
