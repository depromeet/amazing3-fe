import type { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
  return <main className="relative h-[100dvh]">{children}</main>;
};

export default layout;
