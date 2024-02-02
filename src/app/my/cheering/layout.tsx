import type { PropsWithChildren } from 'react';

const CheeringLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-[100dvh] bg-white">
      <div className="flex flex-col gap-3xs pt-5xs">{children}</div>
    </div>
  );
};

export default CheeringLayout;
