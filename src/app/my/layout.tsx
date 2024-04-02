import type { PropsWithChildren } from 'react';

const MyLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[100dvh]">{children}</div>;
};

export default MyLayout;
