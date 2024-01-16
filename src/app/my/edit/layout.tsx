'use client';

import type { PropsWithChildren } from 'react';

import UpdateMemberDataFormProvider from '@/features/my/contexts/UpdateMemberDataFormProvider';

const EditLayout = ({ children }: PropsWithChildren) => {
  return (
    <UpdateMemberDataFormProvider>
      <div className="w-full h-[100dvh] bg-gradient1">{children}</div>
    </UpdateMemberDataFormProvider>
  );
};

export default EditLayout;
