import type { PropsWithChildren } from 'react';

const FeedPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-[100dvh] bg-white">
      <div className="flex flex-col pt-5xs">{children}</div>
    </div>
  );
};

export default FeedPageLayout;
