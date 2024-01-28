import type { PropsWithChildren } from 'react';

const LikeLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[100dvh] bg-white">{children}</div>;
};

export default LikeLayout;
