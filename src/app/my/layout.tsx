import type { PropsWithChildren } from 'react';

const MyLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[100dvh] bg-gradient1">{children}</div>;
};

export default MyLayout;
