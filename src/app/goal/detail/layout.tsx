import type { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
  return <main className="relative h-screen">{children}</main>;
};

export default layout;
